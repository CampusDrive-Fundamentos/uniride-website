import { useRef, useState } from 'react'
import SectionHeading from '../common/SectionHeading'
import { journeyFeatures } from '../../data/features'

export default function FeatureJourney() {
  const scrollRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const [scrollProgress, setScrollProgress] = useState(0)

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 2
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  const handleScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100
    setScrollProgress(progress)
  }

  return (
    <section className="border-t border-[#E2E8F0] bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Ruta de confianza"
          title="El sistema de seguridad por capas, contado como un viaje"
          description="UniRide no funciona como una lista de botones sueltos. Cada capa aparece en el momento donde el estudiante necesita más claridad."
        />

        <div className="relative mt-16">
          {/* Línea conectora horizontal de fondo */}
          <div className="absolute left-0 top-[1.35rem] h-1 w-full bg-[#EAF6FF]" />

          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onScroll={handleScroll}
            className="flex cursor-grab gap-6 overflow-x-auto pb-16 pt-4 no-scrollbar select-none active:cursor-grabbing"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {journeyFeatures.map((feature, index) => (
              <article
                key={feature.title}
                className="relative flex w-[280px] shrink-0 flex-col sm:w-[380px]"
              >
                <div className="mb-8">
                  <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border-4 border-white bg-[#1EA7FF] text-sm font-black text-white shadow-lg shadow-sky-200">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="flex flex-1 flex-col rounded-3xl border border-[#D8EEFF] bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#1EA7FF] hover:shadow-xl hover:shadow-sky-100">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1EA7FF]">
                        {feature.stage}
                      </p>
                      <span className="shrink-0 rounded-full border border-[#B8E5FF] bg-[#EAF6FF] px-2 py-0.5 text-[10px] font-bold text-[#075985]">
                        {feature.meta}
                      </span>
                    </div>
                    <h3 className="text-lg font-black text-[#071B33]">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[#475569]">
                    {feature.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Indicador de progreso de scroll */}
          <div className="mx-auto mt-4 max-w-xs px-4">
            <div className="h-1.5 w-full rounded-full bg-[#EAF6FF]">
              <div
                className="h-full rounded-full bg-[#1EA7FF] transition-all duration-150"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>
            <div className="mt-2 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#94A3B8]">
              <span>Desliza para explorar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
