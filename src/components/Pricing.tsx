import { Check, Clock } from 'lucide-react';
import { pricingTiers } from '../data/conference';
import { useReveal } from '../hooks/useReveal';

export function Pricing() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Limited Time Pricing
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-center font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Choose Your Pass
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-400">
            Early-bird pricing is available until February 1, 2026. Lock in the
            best rate before it goes up.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-amber-400">
            <Clock className="h-5 w-5" />
            <span className="text-sm font-medium">Early-bird sale ends February 1</span>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1 ${
                tier.highlighted
                  ? 'glass-strong border-2 border-cyan-400/40 shadow-2xl shadow-cyan-500/10 lg:scale-[1.03]'
                  : 'glass'
              }`}
            >
              {tier.badge && (
                <div
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wide ${
                    tier.highlighted
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white'
                      : 'bg-white/10 text-gray-200'
                  }`}
                >
                  {tier.badge}
                </div>
              )}

              <h3 className="font-display text-xl font-bold text-white">{tier.name}</h3>
              <p className="mt-1 text-sm text-gray-400">{tier.description}</p>

              <div className="mt-5 flex items-baseline gap-2">
                <span className="font-display text-4xl font-bold text-white">${tier.price}</span>
                {tier.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">${tier.originalPrice}</span>
                )}
              </div>

              <a
                href="#register"
                className={`mt-6 block rounded-xl py-3 text-center text-sm font-semibold transition-all ${
                  tier.highlighted
                    ? 'btn-glow text-white'
                    : 'glass text-white hover:bg-white/10'
                }`}
              >
                Get {tier.name}
              </a>

              <ul className="mt-7 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-gray-300">
                    <span
                      className={`mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full ${
                        tier.highlighted ? 'bg-cyan-400/20' : 'bg-white/10'
                      }`}
                    >
                      <Check className={`h-3 w-3 ${tier.highlighted ? 'text-cyan-300' : 'text-gray-300'}`} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          Groups of 5+ save 20% · Need an invoice? Contact our team.
        </p>
      </div>
    </section>
  );
}
