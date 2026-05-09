import SectionHeading from '../common/SectionHeading'
import { universities } from '../../data/universities'

export default function UniversityCarousel() {
  const repeated = [...universities, ...universities]

  return (
    <section className="border-t border-[#E2E8F0] bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Lima Metropolitana"
          title="Pensado para comunidades universitarias de Lima"
          description="Compatible con comunidades universitarias como estas, usadas como referencias académicas para el prototipo universitario."
        />

        <div className="mt-9 overflow-hidden py-5">
          <div className="campus-marquee flex w-max gap-4 px-4">
            {repeated.map((university, index) => (
              <div
                key={`${university.name}-${index}`}
                className="flex h-20 w-36 shrink-0 items-center justify-center rounded-2xl bg-white p-4 shadow-sm sm:w-44"
              >
                <img
                  src={university.logo}
                  alt={`Logo de ${university.name}`}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <p className="mt-3 text-center text-xs font-medium text-[#64748B]">
          Diseñado para operar en campus como los listados; no implica alianzas
          oficiales.
        </p>
      </div>
    </section>
  )
}
