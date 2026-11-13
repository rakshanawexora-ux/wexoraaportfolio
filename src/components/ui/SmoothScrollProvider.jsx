'use client';

import { createContext, useCallback, useContext, useEffect, useRef } from 'react';
import Lenis from 'lenis';

const ScrollContext = createContext(null);

export function useSmoothScroll() {
  return useContext(ScrollContext);
}

export default function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null);

  const scrollTo = useCallback((target, { offset, immediate = false } = {}) => {
    const element = typeof target === 'string' ? document.querySelector(target) : target;
    if (typeof target !== 'number' && !element) return;
    const inset =
      offset ?? (parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0);
    const top =
      typeof target === 'number'
        ? target
        : element.getBoundingClientRect().top + window.scrollY - inset;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (lenisRef.current && !reduced) {
      // Filters and expanded details can change the document height before navigation.
      lenisRef.current.resize();
      lenisRef.current.scrollTo(Math.max(0, top), {
        duration: 1.05,
        lerp: 0,
        easing: (time) => 1 - Math.pow(1 - time, 4),
        immediate,
      });
    } else {
      window.scrollTo({
        top: Math.max(0, top),
        behavior: reduced || immediate ? 'instant' : 'smooth',
      });
    }
  }, []);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    function configure() {
      lenisRef.current?.destroy();
      lenisRef.current = null;
      if (motion.matches) return;
      lenisRef.current = new Lenis({
        autoRaf: true,
        lerp: 0.1,
        smoothWheel: true,
        syncTouch: false,
        prevent: (node) => node.tagName === 'DIALOG' || node.hasAttribute('data-lenis-prevent'),
      });
      if (document.querySelector('dialog[open]')) lenisRef.current.stop();
    }
    configure();
    const dialogs = new MutationObserver((records) => {
      if (!lenisRef.current || !records.some((record) => record.target.tagName === 'DIALOG'))
        return;
      if (document.querySelector('dialog[open]')) lenisRef.current.stop();
      else lenisRef.current.start();
    });
    dialogs.observe(document.body, { subtree: true, attributes: true, attributeFilter: ['open'] });
    motion.addEventListener('change', configure);
    return () => {
      dialogs.disconnect();
      motion.removeEventListener('change', configure);
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    function handleTopLink(event) {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      if (!event.target.closest?.('a[href="#"]')) return;
      event.preventDefault();
      window.history.pushState(null, '', '#');
      window.dispatchEvent(new HashChangeEvent('hashchange'));
      scrollTo(0);
    }
    document.addEventListener('click', handleTopLink);
    return () => document.removeEventListener('click', handleTopLink);
  }, [scrollTo]);

  return <ScrollContext.Provider value={scrollTo}>{children}</ScrollContext.Provider>;
}
