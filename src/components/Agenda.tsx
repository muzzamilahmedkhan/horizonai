import { useState } from 'react';
import { agenda } from '../data/conference';
import { useReveal } from '../hooks/useReveal';
import { Coffee, Mic2, PanelTop, Presentation, Wrench } from 'lucide-react';
import type { AgendaSession } from '../data/conference';

const typeConfig: Record<AgendaSession['type'], { icon: typeof Mic2; label: string; color: string }> = {
  keynote: { icon: Mic2, label: 'Keynote', color: 'text-cyan-400' },
  talk: { icon: Presentation, label: 'Talk', color: 'text-blue-400' },
  panel: { icon: PanelTop, label: 'Panel', color: 'text-teal-400' },
  workshop: { icon: Wrench, label: 'Workshop', color: 'text-emerald-400' },
  break: { icon: Coffee, label: 'Break', color: 'text-amber-400' },
};

export function Agenda() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [activeDay, setActiveDay] = useState<1 | 2>(1);

  const sessions = agenda.filter((s) => s.day === activeDay);

  return (
    <section id="agenda" className="relative py-24 sm:py-32">
      {/* subtle backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />
      <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Two Days of Insight
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-center font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Conference Agenda
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-400">
            A curated program of keynotes, technical talks, hands-on workshops,
            and expert panels across two days.
          </p>
        </div>

        {/* Day tabs */}
        <div className="mt-12 flex justify-center">
          <div className="glass inline-flex rounded-xl p-1.5">
            {[1, 2].map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day as 1 | 2)}
                className={`rounded-lg px-6 py-2.5 text-sm font-semibold transition-all ${
                  activeDay === day
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Day {day} · Mar {17 + day}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mt-12 pl-8 sm:pl-0">
          {/* Vertical line */}
          <div className="absolute left-2.5 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500/60 via-blue-500/30 to-transparent sm:left-1/2" />

          <div className="space-y-5">
            {sessions.map((session, i) => {
              const cfg = typeConfig[session.type];
              const Icon = cfg.icon;
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={`${session.day}-${session.time}`}
                  className={`relative sm:grid sm:grid-cols-2 sm:gap-8 ${
                    isLeft ? '' : 'sm:[&>*:first-child]:col-start-2'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-3 sm:left-1/2 sm:-translate-x-1/2">
                    <div className="timeline-dot h-5 w-5 rounded-full bg-gradient-to-br from-blue-400 to-cyan-300" />
                  </div>

                  <div className={`ml-6 sm:ml-0 ${isLeft ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}>
                    <div className="glass rounded-xl p-4 transition-colors hover:bg-white/[0.07]">
                      <div className={`flex items-center gap-2 ${isLeft ? 'sm:justify-end' : ''}`}>
                        <Icon className={`h-4 w-4 ${cfg.color}`} />
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                          {cfg.label}
                        </span>
                        <span className="font-display text-sm font-bold text-cyan-400">{session.time}</span>
                      </div>
                      <h3 className="mt-2 font-display text-base font-semibold text-white">
                        {session.title}
                      </h3>
                      {session.speaker && (
                        <p className="mt-1 text-sm text-gray-400">{session.speaker}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
