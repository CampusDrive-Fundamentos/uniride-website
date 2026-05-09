import SectionHeading from '../common/SectionHeading'

const principles = [
  'Seguridad antes que velocidad.',
  'Comunidad universitaria verificada.',
  'Ahorro real para estudiantes.',
  'Conductores formales y rutas claras.',
]

export default function CampusDriveDescription() {
  return (
    <section className="bg-[#F8FBFF] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            align="left"
            eyebrow="De CampusDrive a UniRide"
            title="Una startup, un primer producto y un problema muy concreto"
            description="CampusDrive es la startup que impulsa soluciones de movilidad para comunidades universitarias. UniRide es su primer producto: una plataforma que permite organizar rutas compartidas desde el campus, validar estudiantes mediante correo institucional, conectar con conductores verificados y dividir costos de manera transparente."
          />

          <div className="rounded-3xl border border-[#D8EEFF] bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-black text-[#071B33]">Lo que defendemos</h2>
            <div className="mt-6 grid gap-4">
              {principles.map((principle, index) => (
                <div
                  key={principle}
                  className="flex gap-4 rounded-2xl border border-[#E2E8F0] bg-[#F8FBFF] p-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EAF6FF] text-sm font-black text-[#1EA7FF]">
                    {index + 1}
                  </span>
                  <p className="text-sm font-semibold leading-6 text-[#071B33]">
                    {principle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
