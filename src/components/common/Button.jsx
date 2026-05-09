import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-[#1EA7FF] text-white shadow-lg shadow-sky-200/80 hover:bg-[#0B8FE6] focus-visible:outline-[#071B33]',
  secondary:
    'border border-[#B8E5FF] bg-white text-[#071B33] hover:border-[#1EA7FF] hover:bg-[#EAF6FF] focus-visible:outline-[#1EA7FF]',
  dark:
    'bg-[#071B33] text-white shadow-lg shadow-slate-300/70 hover:bg-[#0B1220] focus-visible:outline-[#1EA7FF]',
}

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  className = '',
  ...props
}) {
  const classes = `inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} type="button" {...props}>
      {children}
    </button>
  )
}
