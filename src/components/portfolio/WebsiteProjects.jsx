import ProjectCard from './ProjectCard';
import SectionHeading from '../ui/SectionHeading';

export default function WebsiteProjects({ projects }) {
  return (
    <section id="websites" className="website-section">
      <SectionHeading
        title="Website projects"
        count={projects.length}
        caption="A FEW THINGS WE’VE BUILT"
      />
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} number={index + 1} />
        ))}
      </div>
    </section>
  );
}
