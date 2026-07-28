import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollProgressBar from './components/ScrollProgressBar'
import MouseGlow from './components/MouseGlow'
import BackToTop from './components/BackToTop'

import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Services from './sections/Services'
import Experience from './sections/Experience'
import Testimonials from './sections/Testimonials'
import Certificates from './sections/Certificates'
import GithubStats from './sections/GithubStats'
import Contact from './sections/Contact'

export default function App() {
  return (
    <div className="relative bg-bg text-ink font-body bg-noise min-h-screen">
      <MouseGlow />
      <ScrollProgressBar />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Experience />
        {/* <Testimonials /> */}
        <Certificates />
        {/* <GithubStats /> */}
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
