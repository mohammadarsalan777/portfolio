import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiDownload, FiSend } from 'react-icons/fi'
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
  SiGit,
} from 'react-icons/si'
import { socials } from '../data/socials'

const floatingIcons = [
  { Icon: SiReact, color: '#61DAFB', top: '10%', left: '4%', delay: 0 },
  { Icon: SiNodedotjs, color: '#3C873A', top: '68%', left: '2%', delay: 0.6 },
  { Icon: SiMongodb, color: '#47A248', top: '20%', left: '88%', delay: 0.3 },
  { Icon: SiJavascript, color: '#F7DF1E', top: '76%', left: '84%', delay: 0.9 },
  { Icon: SiTailwindcss, color: '#38BDF8', top: '45%', left: '92%', delay: 1.2 },
  { Icon: SiGit, color: '#F05032', top: '50%', left: '0%', delay: 1.5 },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-grad-radial-hero"
    >
      {/* Ambient blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-blob" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-blob [animation-delay:4s]" />

      {/* Floating tech icons */}
      {floatingIcons.map(({ Icon, color, top, left, delay }, i) => (
        <motion.div
          key={i}
          className="hidden lg:grid absolute w-14 h-14 place-items-center rounded-2xl glass shadow-lg"
          style={{ top, left }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 + delay, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay }}
          >
            <Icon size={26} color={color} />
          </motion.div>
        </motion.div>
      ))}

      <div className="container-x relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-5"
          >
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            Available for freelance &amp; full-time roles
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-4"
          >
            Hi, I&apos;m <span className="gradient-text">Mohammad Arsalan</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl sm:text-2xl font-display font-semibold text-transparent bg-clip-text bg-grad-accent mb-2"
          >
            Full Stack MERN Developer
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="h-8 text-lg sm:text-xl font-medium text-muted mb-6"
          >
            <TypeAnimation
              sequence={[
                'React Developer',
                1800,
                'Node.js Developer',
                1800,
                'MERN Stack Developer',
                1800,
                'Backend Developer',
                1800,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-accent"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-muted text-base sm:text-lg max-w-xl mb-8 leading-relaxed"
          >
            I build scalable, high-performance, and user-friendly web applications using the MERN
            Stack. I specialize in creating responsive interfaces, secure backend APIs, and modern
            web experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <a href="/resume.pdf" download className="btn-primary">
              <FiDownload /> Download Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-outline"
            >
              <FiSend /> Hire Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex gap-3"
          >
            {socials.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                className="w-11 h-11 grid place-items-center rounded-full glass glass-hover text-muted hover:text-white transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md aspect-square"
        >
          <div className="absolute inset-0 rounded-full bg-grad-primary opacity-30 blur-3xl animate-pulse" />
          <div className="absolute inset-6 rounded-full border border-white/10 animate-[spin_20s_linear_infinite]" />
          <div className="absolute inset-0 rounded-full p-1.5 bg-grad-primary animate-gradient-move bg-[length:200%_200%]">
            <div className="w-full h-full rounded-full glass grid place-items-center overflow-hidden">
              <span className="font-display font-black text-8xl gradient-text select-none">
                MA
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted text-xs"
      >
        <span className="tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-9 rounded-full border border-white/20 flex justify-center pt-2">
          <div className="w-1 h-1.5 rounded-full bg-accent" />
        </div>
      </motion.div>
    </section>
  )
}
