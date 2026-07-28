import { FiAward } from 'react-icons/fi'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { certificates } from '../data/content'

export default function Certificates() {
  return (
    <section id="certificates" className="section">
      <div className="container-x">
        <SectionHeading eyebrow="Certificates" title="Learning never really stops" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 0.08} direction="scale">
              <div className="card h-full text-center flex flex-col items-center">
                <div className="w-12 h-12 grid place-items-center rounded-full bg-grad-accent/20 text-accent mb-4">
                  <FiAward size={22} />
                </div>
                <h3 className="font-display font-semibold text-sm mb-1">{cert.title}</h3>
                <p className="text-muted text-xs">{cert.issuer}</p>
                <p className="text-accent text-xs font-semibold mt-2">{cert.year}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
