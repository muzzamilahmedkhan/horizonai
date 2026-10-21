import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { useCountdown } from '../hooks/useCountdown';
import { CONFERENCE_DATE, stats, topics } from '../data/conference';

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="glass relative flex h-20 w-20 items-center justify-center rounded-2xl sm:h-24 sm:w-24">
        <span className="font-display text-3xl font-bold tabular-nums text-white sm:text-4xl">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="mt-2 text-xs font-medium uppercase tracking-widest text-gray-400 sm:text-sm">
        {label}
      </span>
    </div>
  );
}

export function Hero() {
  const time = useCountdown(CONFERENCE_DATE);

  return (
    <section id="top" className="gradient-bg relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Aurora glows */}
      <div className="aurora aurora-1 h-[400px] w-[400px] -top-20 -left-20" />
      <div className="aurora aurora-2 h-[500px] w-[500px] top-40 -right-32" />
      <div className="aurora aurora-3 h-[350px] w-[350px] bottom-0 left-1/3" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Badge */}
        <div className="fade-up flex justify-center">
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 pulse-ring" />
            <span className="text-sm font-medium text-gray-200">
              Registration is open — Early Bird ends Feb 1
            </span>
          </div>
        </div>

        {/* Title */}
        <h1 className="fade-up mx-auto mt-8 max-w-4xl text-center font-display text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-7xl" style={{ animationDelay: '0.1s' }}>
          The Future of
          <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-200 bg-clip-text text-transparent">
            Artificial Intelligence
          </span>
        </h1>

        <p className="fade-up mx-auto mt-6 max-w-2xl text-center text-lg text-gray-300 sm:text-xl" style={{ animationDelay: '0.2s' }}>
          Two days. 24+ world-class speakers. The virtual conference where
          researchers, engineers, and leaders shape what comes next.
        </p>

        {/* Meta */}
        <div className="fade-up flex flex-wrap justify-center gap-6 mt-8" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center gap-2 text-gray-300">
            <Calendar className="h-5 w-5 text-cyan-400" />
            <span className="text-sm sm:text-base">March 18–19, 2026</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <MapPin className="h-5 w-5 text-cyan-400" />
            <span className="text-sm sm:text-base">Virtual · Worldwide</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="fade-up flex flex-col items-center justify-center gap-4 mt-10 sm:flex-row" style={{ animationDelay: '0.4s' }}>
          <a
            href="#register"
            className="btn-glow inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-white"
          >
            Reserve Your Spot
            <ArrowRight className="h-5 w-5" />
          </a>
          <a
            href="#speakers"
            className="glass inline-flex items-center rounded-xl px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            View Speakers
          </a>
        </div>

        {/* Countdown */}
        <div className="fade-up mt-16" style={{ animationDelay: '0.5s' }}>
          <p className="text-center text-sm font-medium uppercase tracking-widest text-gray-400 mb-5">
            Conference begins in
          </p>
          <div className="flex justify-center gap-3 sm:gap-6">
            <TimeUnit value={time.days} label="Days" />
            <TimeUnit value={time.hours} label="Hours" />
            <TimeUnit value={time.minutes} label="Minutes" />
            <TimeUnit value={time.seconds} label="Seconds" />
          </div>
        </div>

        {/* Stats */}
        <div className="fade-up mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6" style={{ animationDelay: '0.6s' }}>
          {stats.map((stat) => (
            <div key={stat.label} className="glass rounded-2xl px-4 py-5 text-center">
              <stat.icon className="mx-auto h-6 w-6 text-cyan-400" />
              <div className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">{stat.value}</div>
              <div className="mt-1 text-xs text-gray-400 sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Topics */}
        <div className="fade-up mt-12 flex flex-wrap justify-center gap-3" style={{ animationDelay: '0.7s' }}>
          {topics.map((topic) => (
            <div
              key={topic.label}
              className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-gray-200"
            >
              <topic.icon className="h-4 w-4 text-cyan-400" />
              {topic.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
