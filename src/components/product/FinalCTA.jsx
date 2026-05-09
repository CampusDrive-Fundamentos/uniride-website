import Button from '../common/Button'
import Badge from '../common/Badge'

export default function FinalCTA() {
  return (
    <section id="cta-final" className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#071B33] p-6 text-white shadow-2xl shadow-slate-200 sm:p-10 lg:p-12">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <Badge tone="white">Pensado para Lima Metropolitana</Badge>
            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
              Tu ruta de regreso no debería sentirse como una apuesta.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-sky-100 sm:text-lg">
              UniRide convierte la salida nocturna del campus en una experiencia
              coordinada, segura y compartida.
            </p>
          </div>
          <div className="flex flex-col gap-3 min-[380px]:flex-row lg:justify-end">
            <Button href="#como-funciona" variant="primary">
              Probar prototipo
            </Button>
            <Button to="/pricing" variant="secondary">
              Ver planes
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
