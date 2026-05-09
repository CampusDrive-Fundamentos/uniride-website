import SectionHeading from '../common/SectionHeading'
import { journeyFeatures } from '../../data/features'

export default function FeatureJourney() {
  return (
    <section className="bg-[#F8FBFF] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Ruta de confianza"
          title="El sistema de seguridad por capas, contado como un viaje"
          description="UniRide no funciona como una lista de botones sueltos. Cada capa aparece en el momento donde el estudiante necesita más claridad."
        />

        <div className="relative mt-12">
          <div className="absolute left-5 top-0 hidden h-full w-1 rounded-full bg-[#B8E5FF] md:block" />
          <div className="space-y-6">
            {journeyFeatures.map((feature, index) => (
              <article
                key={feature.title}
                className={`relative md:grid md:grid-cols-[3rem_1fr] md:gap-6 ${index % 2 === 1 ? 'lg:ml-24' : ''}`}
              >
                <div className="hidden md:flex">
                  <span className="z-10 flex h-11 w-11 items-center justify-center rounded-full border-4 border-white bg-[#1EA7FF] text-sm font-black text-white shadow-lg shadow-sky-200">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="rounded-3xl border border-[#D8EEFF] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-sky-100 sm:p-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1EA7FF]">
                        {feature.stage}
                      </p>
                      <h3 className="mt-2 text-xl font-black text-[#071B33]">
                        {feature.title}
                      </h3>
                    </div>
                    <span className="w-fit rounded-full border border-[#B8E5FF] bg-[#EAF6FF] px-3 py-1 text-xs font-bold text-[#075985]">
                      {feature.meta}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base">
                    {feature.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
