import { FiStar } from 'react-icons/fi'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { testimonials } from '../data/content'

export default function Testimonials() {
  return (
    <section id="testimonials" className="section bg-bg-soft/30">
      <div className="container-x">
        <SectionHeading
          eyebrow="Testimonials"
          title="What people say after we've worked together"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="card h-full flex flex-col">
                <div className="flex gap-1 text-accent mb-4">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <FiStar key={s} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-muted text-sm leading-relaxed flex-1 mb-6">“{t.quote}”</p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    loading="lazy"
                    className="w-10 h-10 rounded-full object-cover border border-white/10"
                  />
                  <div>
                    <p className="font-semibold text-sm text-white">{t.name}</p>
                    <p className="text-xs text-muted">{t.role}</p>
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
