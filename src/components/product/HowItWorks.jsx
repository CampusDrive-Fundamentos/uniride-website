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
    <section id="como-funciona" className="border-t border-[#E2E8F0] bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Cómo funciona"
          title="De la puerta del campus a una ruta compartida"
          description="El flujo está pensado para la franja crítica entre las 21:00 y 23:30, cuando coordinar bien importa."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-sm"
            >
              <div className="absolute right-4 top-4 text-5xl font-black text-[#EAF6FF]">
                {index + 1}
              </div>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#071B33] text-sm font-black text-white">
                {index + 1}
              </span>
              <h3 className="mt-5 text-lg font-black text-[#071B33]">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#475569]">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
