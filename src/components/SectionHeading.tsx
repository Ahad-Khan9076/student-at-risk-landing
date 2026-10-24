type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="section-heading mx-auto max-w-3xl text-center">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-[2.75rem] lg:leading-tight">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
        {description}
      </p>
    </div>
  )
}
