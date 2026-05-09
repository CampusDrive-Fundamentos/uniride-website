import Badge from './Badge'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <div className={`mx-auto flex max-w-3xl flex-col gap-4 ${alignment}`}>
      {eyebrow && <Badge>{eyebrow}</Badge>}
      <h2 className="text-3xl font-bold tracking-tight text-[#071B33] sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-base leading-7 text-[#475569] sm:text-lg">{description}</p>
      )}
    </div>
  )
}
