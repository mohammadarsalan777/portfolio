import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { FiBriefcase, FiFolder, FiCpu, FiMapPin } from 'react-icons/fi'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { aboutCards, stats } from '../data/content'

const icons = [FiBriefcase, FiFolder, FiCpu, FiMapPin]

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.6 })
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { duration: 1500, bounce: 0 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (isInView) motionValue.set(value)
  }, [isInView, value, motionValue])

  useEffect(() => {
    const unsub = spring.on('change', (v) => setDisplay(Math.floor(v)))
    return unsub
  }, [spring])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="About Me"
          title="Turning ideas into reliable, well-crafted products"
          description="I'm a passionate Full Stack MERN Developer with experience building scalable web applications using React, Node.js, Express.js, and MongoDB. I enjoy solving real-world problems through clean architecture and modern development practices."
        />

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <Reveal direction="left" className="lg:col-span-2">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-3 rounded-3xl bg-grad-primary opacity-20 blur-2xl" />
              <div className="relative card !p-3">
                <div className="aspect-[4/5] rounded-xl bg-grad-primary/10 grid place-items-center overflow-hidden">
                  <span className="font-display font-black text-7xl gradient-text">
                    <img src="Arsalan.jpg" alt="Arsalan image" className="w-full h-full object-cover rounded-md" />
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-3 flex flex-col gap-10">
            <div className="grid sm:grid-cols-2 gap-4">
              {aboutCards.map((card, i) => {
                const Icon = icons[i]
                return (
                  <Reveal key={card.label} delay={i * 0.08}>
                    <div className="card flex items-center gap-4">
                      <div className="w-11 h-11 shrink-0 grid place-items-center rounded-xl bg-grad-primary/15 text-accent">
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-muted">{card.label}</p>
                        <p className="font-display font-semibold text-white">{card.value}</p>
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 0.08} direction="scale">
                  <div className="text-center card !py-6">
                    <p className="font-display font-extrabold text-3xl gradient-text">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="text-xs sm:text-sm text-muted mt-1">{stat.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
