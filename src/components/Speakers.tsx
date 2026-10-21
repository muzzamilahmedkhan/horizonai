import { speakers } from '../data/conference';
import { useReveal } from '../hooks/useReveal';
import { Building2, Mic } from 'lucide-react';

export function Speakers() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="speakers" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-cyan-400">
            World-Class Lineup
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-center font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Meet the Speakers
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-400">
            Researchers and practitioners from the leading AI labs and companies
            shaping the field today.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((speaker, i) => (
            <article
              key={speaker.name}
              className="speaker-card group glass overflow-hidden rounded-2xl"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={speaker.photo}
                  alt={speaker.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/30 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-medium text-cyan-300 backdrop-blur-sm">
                    <Mic className="h-3 w-3" />
                    Keynote Speaker
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-display text-xl font-bold text-white">{speaker.name}</h3>
                <div className="mt-1 flex items-center gap-1.5 text-sm text-gray-400">
                  <Building2 className="h-3.5 w-3.5" />
                  <span>{speaker.role} · {speaker.company}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">{speaker.bio}</p>
                <div className="mt-4 rounded-lg border border-cyan-500/20 bg-cyan-500/5 px-3 py-2.5">
                  <p className="text-xs font-medium uppercase tracking-wide text-cyan-400">Topic</p>
                  <p className="mt-0.5 text-sm font-medium text-gray-100">{speaker.topic}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
