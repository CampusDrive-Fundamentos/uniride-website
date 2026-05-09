import Button from '../common/Button'
import { pricingPlans } from '../../data/pricingPlans'

export default function PricingCards() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-4xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {pricingPlans.map((plan) => (
          <article
            key={plan.name}
            className={`relative flex flex-col rounded-3xl border p-8 shadow-sm transition-all hover:shadow-2xl sm:p-10 ${
              plan.featured
                ? 'border-[#1EA7FF] bg-[#071B33] text-white shadow-xl shadow-sky-100'
                : 'border-[#E2E8F0] bg-white text-[#071B33]'
            }`}
          >
            {plan.featured && (
              <span className="absolute right-5 top-5 rounded-full bg-white px-3 py-1 text-xs font-black text-[#075985]">
                Destacado
              </span>
            )}
            <h2 className="pr-24 text-2xl font-black">{plan.name}</h2>
            <p
              className={`mt-3 text-sm leading-6 ${plan.featured ? 'text-sky-100' : 'text-[#475569]'}`}
            >
              {plan.detail}
            </p>
            <p className="mt-7 text-3xl font-black">{plan.price}</p>
            <ul className="mt-8 flex-1 space-y-4">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-4 text-sm leading-6">
                  <span
                    className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-black ${
                      plan.featured
                        ? 'bg-[#38BDF8] text-[#071B33]'
                        : 'bg-[#EAF6FF] text-[#1EA7FF]'
                    }`}
                  >
                    ✓
                  </span>
                  <span className={plan.featured ? 'text-white' : 'text-[#475569]'}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <Button
              href="#cta-final"
              variant={plan.featured ? 'primary' : 'secondary'}
              className="mt-10 w-full py-4 text-base"
            >
              Solicitar acceso
            </Button>
          </article>
        ))}
      </div>
    </section>
  )
}
