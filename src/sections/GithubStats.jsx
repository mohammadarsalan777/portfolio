import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const GITHUB_USERNAME = 'your-username'

export default function GithubStats() {
  return (
    <section id="github" className="section bg-bg-soft/30">
      <div className="container-x">
        <SectionHeading eyebrow="GitHub" title="Where the code actually lives" />

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          <Reveal>
            <div className="card">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=transparent&hide_border=true&title_color=3B82F6&icon_color=06B6D4&text_color=94A3B8`}
                alt="GitHub stats"
                loading="lazy"
                className="w-full"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card">
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=transparent&hide_border=true&title_color=3B82F6&text_color=94A3B8`}
                alt="Most used languages"
                loading="lazy"
                className="w-full"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="card">
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=transparent&hide_border=true&ring=3B82F6&fire=06B6D4&currStreakLabel=8B5CF6`}
              alt="GitHub streak"
              loading="lazy"
              className="w-full"
            />
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-6">
          <div className="card overflow-x-auto">
            <img
              src={`https://ghchart.rshah.org/3B82F6/${GITHUB_USERNAME}`}
              alt="GitHub contribution graph"
              loading="lazy"
              className="w-full min-w-[600px]"
            />
          </div>
        </Reveal>

        <p className="text-center text-muted text-xs mt-6">
          Replace <code className="text-accent">your-username</code> in GithubStats.jsx with your
          real GitHub handle.
        </p>
      </div>
    </section>
  )
}
