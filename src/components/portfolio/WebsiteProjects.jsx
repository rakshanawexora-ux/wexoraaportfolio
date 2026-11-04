import ProjectCard from './ProjectCard';
import SectionHeading from '../ui/SectionHeading';

export default function WebsiteProjects({ projects }) {
  return (
    <section id="websites" className="website-section">
      <SectionHeading
        title="Website projects"
        count={projects.length}
        caption="LIVE PROJECTS / ORIGINAL SCREENSHOTS"
      />
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} number={index + 1} />
      ))}
    </section>
  );
}
