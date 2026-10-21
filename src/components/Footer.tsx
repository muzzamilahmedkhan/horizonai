import { Github, Linkedin, Sparkles, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="font-display text-lg font-bold text-white">
              AI Horizon <span className="text-cyan-400">2026</span>
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <a href="#speakers" className="hover:text-white">Speakers</a>
            <a href="#agenda" className="hover:text-white">Agenda</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="#register" className="hover:text-white">Register</a>
          </nav>

          <div className="flex items-center gap-3">
            {[Twitter, Github, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="glass flex h-10 w-10 items-center justify-center rounded-lg text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Social link"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-white/5 pt-8 text-center text-sm text-gray-500">
          <p>© 2026 AI Horizon Conference. A virtual event for the global AI community.</p>
        </div>
      </div>
    </footer>
  );
}
