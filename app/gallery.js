'use client';
import { useRef } from 'react';
export default function Gallery({ images, title, mobile = false }) {
 const dialog = useRef(null);
 const image = useRef(null);
 function open(src, alt) { image.current.src = src; image.current.alt = alt; dialog.current.showModal(); }
 return <><div className={`gallery ${mobile ? 'phone-gallery' : ''}`}>{images.map((src,i)=><button key={src} onClick={()=>open(src,`${title} — image ${i+1}`)} aria-label={`Enlarge ${title} image ${i+1}`}><img src={src} alt={`${title} — original portfolio image ${i+1}`} loading="lazy"/><span className="zoom">↗</span></button>)}</div><dialog ref={dialog} onClick={e=>{if(e.target===dialog.current)dialog.current.close();}}><button className="close" onClick={()=>dialog.current.close()} aria-label="Close image">✕</button><img ref={image} alt=""/></dialog></>;
}
