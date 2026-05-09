import SectionHeading from '../common/SectionHeading'
import { faqs } from '../../data/faqs'

export default function FAQ() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Claridad antes de compartir una ruta"
          description="Las respuestas clave para estudiantes, líderes de ruta y conductores verificados."
        />

        <div className="mt-10 divide-y divide-[#E2E8F0] overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white">
          {faqs.map((faq) => (
            <details key={faq.question} className="group p-5 open:bg-[#F8FBFF]">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-base font-bold text-[#071B33] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1EA7FF]">
                {faq.question}
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EAF6FF] text-[#1EA7FF] transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-7 text-[#475569]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
