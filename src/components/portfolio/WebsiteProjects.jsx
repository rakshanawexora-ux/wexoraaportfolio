import ProjectCard from './ProjectCard';
import SectionHeading from '../ui/SectionHeading';

export default function WebsiteProjects({
  projects,
  id = 'websites',
  title = 'Website projects',
  numberOffset = 0,
}) {
  return (
    <section id={id} className="website-section">
      <SectionHeading
        title={title}
        count={projects.length}
        caption="DESIGNED WITH PURPOSE. BUILT AROUND YOU."
      />
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} number={numberOffset + index + 1} />
        ))}
      </div>
    </section>
  );
}
