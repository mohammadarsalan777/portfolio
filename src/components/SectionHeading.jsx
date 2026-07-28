import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignment = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-4 mb-16 max-w-2xl ${alignment}`}>
      <Reveal>
        <span className="eyebrow">
          <span className="h-px w-6 bg-accent inline-block" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="heading-lg">{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={0.2}>
          <p className="text-muted text-base md:text-lg">{description}</p>
        </Reveal>
      )}
    </div>
  )
}
