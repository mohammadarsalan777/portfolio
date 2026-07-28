import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { services } from '../data/content'

export default function Services() {
  return (
    <section id="services" className="section bg-bg-soft/30">
      <div className="container-x">
        <SectionHeading
          eyebrow="Services"
          title="How I can help your team"
          description="From a single stubborn bug to a full product build, here's where I add the most value."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="card h-full group">
                <div className="w-12 h-12 grid place-items-center rounded-xl bg-grad-primary/15 text-accent mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon size={22} />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{title}</h3>
                <p className="text-muted text-sm leading-relaxed">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
