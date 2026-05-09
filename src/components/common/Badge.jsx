export default function Badge({ children, tone = 'blue', className = '' }) {
  const tones = {
    blue: 'border-[#B8E5FF] bg-[#EAF6FF] text-[#075985]',
    navy: 'border-[#1E3A5F] bg-[#071B33] text-white',
    white: 'border-white/50 bg-white/90 text-[#071B33]',
  }

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  )
}
