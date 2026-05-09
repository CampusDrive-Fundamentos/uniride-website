import SectionHeading from '../common/SectionHeading'

const cards = [
  {
    title: 'Misión',
    text: 'Crear soluciones tecnológicas que conecten a estudiantes universitarios con conductores verificados para compartir viajes nocturnos de forma segura, económica y eficiente, permitiendo la división de gastos de manera equitativa.',
  },
  {
    title: 'Visión',
    text: 'Ser en 3 años la startup de referencia en soluciones de transporte nocturno universitario a nivel nacional, integrando nuestra tecnología con las principales instituciones académicas del país.',
  },
]

export default function MissionVision() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Dirección"
          title="Una solución universitaria con propósito operativo"
          description="El foco está en resolver la salida nocturna con coordinación, confianza y costos transparentes."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.title}
              className="rounded-3xl border border-[#D8EEFF] bg-[#F8FBFF] p-6 shadow-sm sm:p-8"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1EA7FF] text-lg font-black text-white">
                {card.title.charAt(0)}
              </span>
              <h2 className="mt-5 text-2xl font-black text-[#071B33]">
                {card.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base">
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
