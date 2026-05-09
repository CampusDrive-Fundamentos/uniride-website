import SectionHeading from '../common/SectionHeading'
import { universities } from '../../data/universities'

export default function UniversityCarousel() {
  const repeated = [...universities, ...universities]

  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Lima Metropolitana"
          title="Pensado para comunidades universitarias de Lima"
          description="Compatible con comunidades universitarias como estas, usadas como referencias académicas para el prototipo universitario."
        />

        <div className="mt-9 overflow-hidden rounded-3xl border border-[#E2E8F0] bg-[#F8FBFF] py-5">
          <div className="campus-marquee flex w-max gap-4 px-4">
            {repeated.map((university, index) => (
              <div
                key={`${university}-${index}`}
                className="flex h-20 w-36 shrink-0 items-center justify-center rounded-2xl border border-[#B8E5FF] bg-white text-xl font-black text-[#071B33] shadow-sm sm:w-44"
              >
                {university}
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
