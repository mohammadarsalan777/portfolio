import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { skillGroups } from '../data/skills'

function SkillBar({ name, level, delay }) {
  return (
    <div>
      <div className="flex justify-between mb-2 text-sm">
        <span className="text-white font-medium">{name}</span>
        <span className="text-muted">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-grad-primary"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section bg-bg-soft/30">
      <div className="container-x">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I use to build end-to-end products"
          description="A focused, production-tested stack across the frontend, backend, database, and developer tooling."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.1}>
              <div className="card h-full">
                <h3 className="font-display font-semibold text-lg mb-6 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  {group.title}
                </h3>
                <div className="flex flex-col gap-5">
                  {group.skills.map((skill, si) => (
                    <SkillBar key={skill.name} {...skill} delay={si * 0.08} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
