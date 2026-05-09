import Badge from '../common/Badge'

export default function AboutHero() {
  return (
    <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#EAF6FF_100%)] py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <Badge>CampusDrive</Badge>
        <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-black leading-tight text-[#071B33] sm:text-5xl">
          CampusDrive nace para resolver un problema real: volver seguro después
          de clases.
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#475569] sm:text-lg">
          Somos una startup universitaria enfocada en movilidad nocturna,
          economía colaborativa y seguridad para estudiantes en Lima
          Metropolitana.
        </p>
      </div>
    </section>
  )
}
