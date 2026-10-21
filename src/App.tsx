import { StickyHeader } from '@/components/StickyHeader';
import { Hero } from '@/components/Hero';
import { Speakers } from '@/components/Speakers';
import { Agenda } from '@/components/Agenda';
import { Pricing } from '@/components/Pricing';
import { Faq } from '@/components/Faq';
import { Register } from '@/components/Register';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <StickyHeader />
      <main>
        <Hero />
        <Speakers />
        <Agenda />
        <Pricing />
        <Faq />
        <Register />
      </main>
      <Footer />
    </div>
  );
}

export default App;
