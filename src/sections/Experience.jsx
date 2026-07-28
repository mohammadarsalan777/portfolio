import { FiCheckCircle } from 'react-icons/fi'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've put this stack to work"
          description="Real product work, real constraints, real users."
        />

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent md:-translate-x-1/2" />

          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.1} className="relative pl-14 md:pl-0 mb-4">
              <div className="md:grid md:grid-cols-2 md:gap-10 items-start">
                <div className="hidden md:block" />
                <div className="relative">
                  <span className="absolute -left-[calc(2.5rem+1px)] md:-left-[3.35rem] top-1.5 w-4 h-4 rounded-full bg-grad-primary shadow-glow ring-4 ring-bg" />
                  <div className="card">
                    <p className="text-accent text-sm font-semibold mb-1">{job.period}</p>
                    <h3 className="font-display font-semibold text-xl">{job.role}</h3>
                    <p className="text-muted text-sm mb-4">{job.company}</p>
                    <ul className="space-y-2">
                      {job.points.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm text-muted">
                          <FiCheckCircle className="text-accent mt-0.5 shrink-0" size={16} />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
