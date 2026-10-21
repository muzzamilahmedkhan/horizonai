import { useState } from 'react';
import { ArrowRight, CheckCircle2, Loader2, Mail, User } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { pricingTiers } from '../data/conference';

type Status = 'idle' | 'loading' | 'success';

export function Register() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [status, setStatus] = useState<Status>('idle');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tier, setTier] = useState(pricingTiers[1].name);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1100);
  };

  return (
    <section id="register" className="relative py-24 sm:py-32">
      {/* glow backdrop */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

      <div ref={ref} className={`relative mx-auto max-w-3xl px-5 sm:px-8 reveal ${visible ? 'visible' : ''}`}>
        <div className="glass-strong rounded-3xl p-8 sm:p-12 text-center">
          {status === 'success' ? (
            <div className="fade-up">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
                <CheckCircle2 className="h-8 w-8 text-emerald-400" />
              </div>
              <h2 className="mt-6 font-display text-3xl font-bold text-white">You're on the list!</h2>
              <p className="mt-3 text-gray-400">
                We've reserved your spot for AI Horizon 2026. A confirmation
                with your access details is on its way to {email}.
              </p>
              <button
                onClick={() => { setStatus('idle'); setName(''); setEmail(''); }}
                className="mt-8 glass rounded-xl px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Register another attendee
              </button>
            </div>
          ) : (
            <>
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
                Secure Your Spot
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Register for AI Horizon 2026
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-gray-400">
                Join 15,000+ attendees for two days of breakthrough AI
                programming. Early-bird pricing ends February 1.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-4 text-left">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-gray-400">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Jane Doe"
                        className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-cyan-400/50 focus:bg-white/10"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-gray-400">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="jane@company.com"
                        className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-cyan-400/50 focus:bg-white/10"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-gray-400">
                    Pass Type
                  </label>
                  <select
                    value={tier}
                    onChange={(e) => setTier(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-cyan-400/50"
                  >
                    {pricingTiers.map((t) => (
                      <option key={t.name} value={t.name} className="bg-[#0a0a0f]">
                        {t.name} — ${t.price}
                        {t.originalPrice ? ` (was $${t.originalPrice})` : ''}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-glow flex w-full items-center justify-center gap-2 rounded-xl py-4 text-base font-semibold text-white disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Securing your spot...
                    </>
                  ) : (
                    <>
                      Complete Registration
                      <ArrowRight className="h-5 w-5" />
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-gray-500">
                  No payment required now. We'll send your invoice with the
                  confirmation email.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
