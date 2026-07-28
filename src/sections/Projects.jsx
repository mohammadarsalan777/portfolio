import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work I'm proud to talk about"
          description="A mix of production-style builds spanning HR tooling, e-commerce, learning platforms, and hiring — each built end-to-end with the MERN stack."
        />

        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
