import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo-campusdrive.jpg'

const columns = [
  {
    title: 'Producto',
    links: [
      { label: 'About us', to: '/about' },
      { label: 'Producto', to: '/' },
      { label: 'Pricing', to: '/pricing' },
    ],
  },
  {
    title: 'Social',
    links: [
      { label: 'Instagram', href: 'https://instagram.com' },
      { label: 'LinkedIn', href: 'https://linkedin.com' },
      { label: 'X', href: 'https://x.com' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Políticas y privacidad', href: '#' },
      { label: 'Términos y condiciones', href: '#' },
      { label: 'Uso de cookies', href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-[#E2E8F0] bg-[#071B33] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_2fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="CampusDrive Logo"
              className="h-10 w-10 rounded-xl object-cover"
            />
            <p className="text-2xl font-black">UniRide</p>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-6 text-sky-100">
            Viajes compartidos desde campus para estudiantes que salen de clases
            de noche en Lima Metropolitana.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="text-sm font-bold text-white">{column.title}</h2>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.to ? (
                      <NavLink
                        to={link.to}
                        className="text-sm text-sky-100 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#38BDF8]"
                      >
                        {link.label}
                      </NavLink>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-sky-100 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#38BDF8]"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs leading-5 text-sky-100">
        © 2026 CampusDrive. UniRide es una solución universitaria de movilidad
        colaborativa.
      </div>
    </footer>
  )
}
