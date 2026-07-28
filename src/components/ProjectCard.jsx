import { FiExternalLink, FiGithub } from 'react-icons/fi'
import Reveal from './Reveal'
import TiltCard from './TiltCard'

export default function ProjectCard({ project, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <TiltCard className="group relative rounded-2xl p-[1.5px] bg-gradient-to-br from-primary/60 via-secondary/40 to-accent/60">
        <div className="rounded-2xl bg-bg h-full overflow-hidden">
          <div className="relative h-52 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 bg-bg/60 backdrop-blur-sm transition-opacity duration-300">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 grid place-items-center rounded-full bg-grad-primary text-white shadow-glow"
                aria-label="Live demo"
              >
                <FiExternalLink size={18} />
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 grid place-items-center rounded-full glass text-white"
                aria-label="GitHub repository"
              >
                <FiGithub size={18} />
              </a>
            </div>
          </div>

          <div className="p-6">
            <h3 className="font-display font-semibold text-lg mb-2">{project.title}</h3>
            <p className="text-muted text-sm mb-4 leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.features.map((f) => (
                <span key={f} className="badge">
                  {f}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((t) => (
                <span key={t} className="text-xs font-medium text-accent">
                  #{t}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center text-sm font-semibold rounded-full py-2.5 bg-grad-primary hover:opacity-90 transition-opacity"
              >
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center text-sm font-semibold rounded-full py-2.5 border border-white/15 hover:bg-white/5 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </TiltCard>
    </Reveal>
  )
}
