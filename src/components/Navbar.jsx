import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { useActiveSection } from '../hooks/useActiveSection'

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'experience', label: 'Experience' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(navLinks.map((l) => l.id))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/70 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-x flex items-center justify-between">
        <button
          onClick={() => scrollTo('home')}
          className="font-display font-bold text-xl tracking-tight text-white"
        >
          Mohammad<span className="gradient-text">.dev</span>
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                className={`relative text-sm font-medium transition-colors ${
                  active === link.id ? 'text-white' : 'text-muted hover:text-white'
                }`}
              >
                {link.label}
                {active === link.id && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-grad-primary rounded-full"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <button onClick={() => scrollTo('contact')} className="hidden md:inline-flex btn-primary !py-2.5 !px-5 text-sm">
          Let&apos;s Talk
        </button>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-bg/95 backdrop-blur-xl border-t border-white/10"
          >
            <ul className="container-x flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className={`block w-full text-left py-3 text-base font-medium ${
                      active === link.id ? 'text-white' : 'text-muted'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
