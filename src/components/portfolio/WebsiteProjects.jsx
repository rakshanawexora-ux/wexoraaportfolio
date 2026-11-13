import ProjectCard from './ProjectCard';
import SectionHeading from '../ui/SectionHeading';

export default function WebsiteProjects({ projects }) {
  return (
    <section id="websites" className="website-section">
      <SectionHeading
        title="Website projects"
        count={projects.length}
        caption="DESIGNED WITH PURPOSE. BUILT AROUND YOU."
      />
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} number={index + 1} />
        ))}
      </div>
    </section>
  );
}
