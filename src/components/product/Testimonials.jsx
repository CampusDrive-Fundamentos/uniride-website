import SectionHeading from '../common/SectionHeading'
import { testimonials } from '../../data/testimonials'

export default function Testimonials() {
  return (
    <section className="bg-[#F8FBFF] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Voces del prototipo"
          title="Historias que suenan a salida nocturna real"
          description="Testimonios representativos del problema que UniRide busca resolver dentro de comunidades universitarias."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.role}
              className="rounded-3xl border border-[#D8EEFF] bg-white p-6 shadow-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EAF6FF] text-lg font-black text-[#1EA7FF]">
                “”
              </div>
              <p className="mt-5 text-base leading-8 text-[#071B33]">
                “{testimonial.quote}”
              </p>
              <p className="mt-5 text-sm font-bold text-[#1EA7FF]">
                {testimonial.role}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
