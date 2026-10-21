import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/conference';
import { useReveal } from '../hooks/useReveal';

export function Faq() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Need More Info?
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-center font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className={`glass overflow-hidden rounded-xl transition-colors ${
                  isOpen ? 'border-cyan-400/30' : ''
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-semibold text-white sm:text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-none text-cyan-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
                  <p className="px-5 pb-5 text-sm leading-relaxed text-gray-400 sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
