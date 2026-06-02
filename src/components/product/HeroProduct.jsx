import Badge from '../common/Badge'
import Button from '../common/Button'

function RouteDot({ label, active }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`h-4 w-4 rounded-full border-4 ${active ? 'border-[#1EA7FF] bg-white' : 'border-[#B8E5FF] bg-[#1EA7FF]'}`}
      />
      <span className="text-xs font-semibold text-[#475569]">{label}</span>
    </div>
  )
}

function AppMockup() {
  return (
    <div className="relative mx-auto w-full max-w-sm rounded-[2rem] border border-[#B8E5FF] bg-[#071B33] p-3 shadow-2xl shadow-sky-200/80">
      <div className="rounded-[1.5rem] bg-white p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase text-[#1EA7FF]">
              Salida estimada: 10:45 p.m.
            </p>
            <h2 className="mt-1 text-lg font-black text-[#071B33]">
              UPC Monterrico → San Miguel
            </h2>
          </div>
          <span className="rounded-full bg-[#EAF6FF] px-3 py-1 text-xs font-bold text-[#075985]">
            3/4
          </span>
        </div>

        <div className="mt-5 rounded-3xl border border-[#E2E8F0] bg-[#F8FBFF] p-4">
          <div className="relative overflow-hidden rounded-2xl bg-white p-4 shadow-sm">
            <div className="absolute left-9 top-8 h-28 w-1 rounded-full bg-[#B8E5FF]" />
            <div className="relative z-10 space-y-7">
              <RouteDot label="Puerta 4, campus Monterrico" active />
              <RouteDot label="Av. Primavera" />
              <RouteDot label="Javier Prado" />
              <RouteDot label="San Miguel" active />
            </div>
            <div className="absolute right-4 top-6 h-16 w-20 rounded-full border-2 border-dashed border-[#38BDF8]" />
            <div className="absolute bottom-5 right-7 h-10 w-24 rounded-full border-2 border-dashed border-[#1EA7FF]" />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-2xl border border-[#E2E8F0] p-3">
            <p className="text-xs text-[#64748B]">Estado</p>
            <p className="font-bold text-[#071B33]">Grupo en espera</p>
          </div>
          <div className="rounded-2xl border border-[#E2E8F0] p-3">
            <p className="text-xs text-[#64748B]">Pago estimado</p>
            <p className="font-bold text-[#071B33]">S/ 8 - S/ 15</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <Badge>Correo institucional validado</Badge>
          <Badge>Conductor verificado</Badge>
        </div>

        <div className="mt-4 rounded-2xl bg-[#071B33] p-4 text-white">
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs text-sky-100">Código de abordaje</span>
            <span className="rounded-xl bg-white px-3 py-1 text-sm font-black tracking-widest text-[#071B33]">
              4821
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HeroProduct() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#EAF6FF_100%)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-24 lg:pt-20">
        <div className="flex flex-col justify-center">
          <div className="flex flex-wrap gap-3">
            <Badge>Viajes compartidos desde campus</Badge>
            <Badge>Diseñado para la salida nocturna universitaria</Badge>
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight text-[#071B33] sm:text-5xl lg:text-6xl">
            Vuelve del campus acompañado, seguro y pagando menos.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#475569] sm:text-lg">
            UniRide conecta estudiantes universitarios con rutas similares y
            conductores verificados para compartir viajes nocturnos desde el
            campus, dividir costos de forma justa y evitar esperas inseguras.
          </p>
          <div className="mt-8 flex flex-col gap-3 min-[380px]:flex-row">
            <Button href="#como-funciona">Buscar mi ruta</Button>
          </div>
          <div className="mt-8 grid gap-3 text-sm text-[#475569] sm:grid-cols-3">
            <p className="font-semibold rounded-2xl border border-[#1EA7FF] bg-white p-3 hover:bg-[#6cc2f7] hover:text-white transition-colors duration-300 ease-in-out">
              Seguridad colectiva en rutas compartidas.
            </p>
            <p className="font-semibold rounded-2xl border border-[#1EA7FF] bg-white p-3 hover:bg-[#6cc2f7] hover:text-white transition-colors duration-300 ease-in-out">
              Rutas compatibles en un radio de 500m.
            </p>
            <p className="font-semibold rounded-2xl border border-[#1EA7FF] bg-white p-3 hover:bg-[#6cc2f7] hover:text-white transition-colors duration-300 ease-in-out">
              Menos espera en la calle, más coordinación desde el campus.
            </p>
          </div>
        </div>

        <div className="lg:pt-6">
          <AppMockup />
        </div>
      </div>
    </section>
  )
}
