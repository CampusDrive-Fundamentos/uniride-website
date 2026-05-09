import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../common/Button'

const links = [
  { label: 'Producto', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Pricing', to: '/pricing' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const linkClasses = ({ isActive }) =>
    `rounded-full px-3 py-2 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1EA7FF] ${
      isActive
        ? 'bg-[#EAF6FF] text-[#075985]'
        : 'text-[#475569] hover:bg-slate-100 hover:text-[#071B33]'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-[#E2E8F0]/80 bg-white/90 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Navegación principal"
      >
        <NavLink
          to="/"
          className="flex min-w-0 items-center gap-3 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1EA7FF]"
          onClick={() => setIsOpen(false)}
        >
          <span
            className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#B8E5FF] bg-[#EAF6FF]"
            aria-hidden="true"
          >
            <span className="absolute h-5 w-6 rounded-full border-2 border-[#1EA7FF]" />
            <span className="absolute left-2 top-3 h-2 w-2 rounded-full bg-[#071B33]" />
            <span className="absolute bottom-3 right-2 h-2 w-2 rounded-full bg-[#38BDF8]" />
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-black leading-4 text-[#071B33] sm:text-base">
              UniRide
            </span>
            <span className="block text-[11px] font-semibold leading-4 text-[#1EA7FF]">
              by CampusDrive
            </span>
          </span>
        </NavLink>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClasses}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:block">
          <Button href="#cta-final" variant="primary" className="px-4 py-2">
            Unirme a UniRide
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E2E8F0] text-[#071B33] transition hover:bg-[#EAF6FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1EA7FF] md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Abrir menú"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="sr-only">Menú</span>
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 rounded bg-current transition ${isOpen ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-5 rounded bg-current transition ${isOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`absolute left-0 top-4 h-0.5 w-5 rounded bg-current transition ${isOpen ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </span>
        </button>
      </nav>

      {isOpen && (
        <div id="mobile-menu" className="border-t border-[#E2E8F0] bg-white px-4 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={linkClasses}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <Button href="#cta-final" variant="primary" className="mt-2 w-full">
              Unirme a UniRide
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
