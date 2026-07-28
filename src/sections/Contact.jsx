import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { FiPhone, FiMail, FiMapPin, FiLinkedin, FiGithub, FiSend, FiCheck } from 'react-icons/fi'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const contactInfo = [
  { icon: FiPhone, label: 'Phone', value: '+91 8766584560' },
  { icon: FiMail, label: 'Email', value: 'mohdarsalan391@gmail.com' },
  { icon: FiMapPin, label: 'Location', value: 'India' },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'https://www.linkedin.com/in/mohammad-arsalan-408762256/ ' },
  { icon: FiGithub, label: 'GitHub', value: 'https://github.com/mohammadarsalan777/' },
]

const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      )
      setStatus('sent')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    } finally {
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something worth shipping"
          description="Have a project in mind, or just want to say hi? My inbox is open."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          <Reveal direction="left" className="lg:col-span-2 flex flex-col gap-4">
            {contactInfo.map(({ icon: Icon, label, value }) => (
              <div key={label} className="card flex items-center gap-4">
                <div className="w-11 h-11 shrink-0 grid place-items-center rounded-xl bg-grad-primary/15 text-accent">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted">{label}</p>
                  <p className="text-sm font-medium text-white break-all">{value}</p>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal direction="right" className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="card grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm text-muted">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm text-muted">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2 sm:col-span-2">
                <label htmlFor="subject" className="text-sm text-muted">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2 sm:col-span-2">
                <label htmlFor="message" className="text-sm text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me a bit about your project..."
                  className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary sm:col-span-2 disabled:opacity-60"
              >
                {status === 'sent' ? (
                  <>
                    <FiCheck /> Message Sent
                  </>
                ) : status === 'sending' ? (
                  'Sending...'
                ) : (
                  <>
                    <FiSend /> Send Message
                  </>
                )}
              </button>

              {status === 'error' && (
                <p className="sm:col-span-2 text-sm text-red-400">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
