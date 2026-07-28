import { socials } from '../data/socials'

const quickLinks = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
]

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="relative border-t border-white/10 bg-bg-soft/40">
      <div className="container-x py-14 grid gap-10 md:grid-cols-3">
        <div>
          <span className="font-display font-bold text-xl text-white">
            Arsalan<span className="gradient-text">.dev</span>
          </span>
          <p className="mt-3 text-muted text-sm max-w-xs">
            Full Stack MERN Developer crafting scalable, high-performance web applications.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className="text-muted text-sm hover:text-white transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Connect</h4>
          <div className="flex gap-3">
            {socials.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                className="w-10 h-10 grid place-items-center rounded-full glass glass-hover text-muted hover:text-white"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="container-x text-center text-xs text-muted">
          © {new Date().getFullYear()} Mohammad Arsalan. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
