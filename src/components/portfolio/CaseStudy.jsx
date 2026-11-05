/** Structured long-form project content, edited in src/data/projects.json. */
export default function CaseStudy({ sections }) {
  return (
    <div className="case-study">
      {sections.map((section) => (
        <section key={section.title} className="case-study-section">
          <h4>{section.title}</h4>
          {section.heading && <h5>{section.heading}</h5>}
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {section.steps && (
            <div className="case-study-steps">
              {section.steps.map((step) => (
                <div className="case-study-step" key={step.label}>
                  <span>{step.label}</span>
                  <h5>{step.heading}</h5>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
