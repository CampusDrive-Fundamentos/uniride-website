import SectionHeading from '../common/SectionHeading'

const steps = [
  {
    title: 'Valida tu cuenta universitaria.',
    text: 'Regístrate con tu correo institucional y confirma tu perfil.',
  },
  {
    title: 'Crea o encuentra una ruta.',
    text: 'Busca viajes que pasen cerca de tu destino o crea uno desde tu puerta de salida.',
  },
  {
    title: 'Completa el grupo.',
    text: 'Viaja con estudiantes verificados y visualiza quiénes integran la ruta.',
  },
  {
    title: 'Sube con código de seguridad.',
    text: 'El líder valida el abordaje y el conductor inicia el viaje.',
  },
  {
    title: 'Divide el pago.',
    text: 'UniRide calcula cuánto paga cada estudiante según su parada.',
  },
  {
    title: 'Califica el viaje.',
    text: 'Ayuda a mantener una comunidad confiable.',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="border-t border-[#E2E8F0] bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Cómo funciona"
          title="De la puerta del campus a una ruta compartida"
          description="El flujo está pensado para la franja crítica entre las 21:00 y 23:30, cuando coordinar bien importa."
        />

        <div className="relative mt-16 sm:mt-24">
          {/* Línea conectora central (solo desktop) */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px border-l-2 border-dashed border-[#B8E5FF] md:block" />

          <div className="space-y-12 sm:space-y-24">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`relative flex flex-col md:flex-row md:items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Círculo indicador */}
                <div className="absolute left-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#071B33] text-sm font-black text-white shadow-xl shadow-sky-100 md:left-1/2 md:-ml-5">
                  {index + 1}
                </div>

                {/* Contenido */}
                <div className="mt-8 w-full md:mt-0 md:w-1/2 md:px-12">
                  <article
                    className={`group rounded-[2.5rem] border border-[#E2E8F0] bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#1EA7FF] hover:shadow-2xl hover:shadow-sky-100 ${
                      index % 2 === 1 ? 'md:text-right' : ''
                    }`}
                  >
                    <div
                      className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF6FF] text-xl font-black text-[#1EA7FF] group-hover:bg-[#1EA7FF] group-hover:text-white transition-colors ${
                        index % 2 === 1 ? 'md:ml-auto' : ''
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-xl font-black text-[#071B33] sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-base leading-8 text-[#475569]">
                      {step.text}
                    </p>
                  </article>
                </div>

                {/* Espacio vacío para el otro lado en desktop */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
