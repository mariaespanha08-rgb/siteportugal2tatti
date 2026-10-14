/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionDivider from './components/SectionDivider';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import FormacaoVIP from './components/FormacaoVIP';
import InstagramSection from './components/InstagramSection';
import Feedbacks from './components/Feedbacks';
import StudioSection from './components/StudioSection';
import AgendamentoSection from './components/AgendamentoSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import FloatingCta from './components/FloatingCta';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#F6EFE4] text-[#3A2A1F] flex flex-col font-sans selection:bg-[#C9A24D]/30 selection:text-[#3A2A1F] overflow-x-hidden w-full max-w-full">
        {/* Fixed Luxury Navigation with Language Selector */}
        <Navbar />

        <main className="flex-grow">
          {/* 1. Hero (Bege Claro) */}
          <Hero />

          {/* Transição 1 -> 2 */}
          <SectionDivider variant="to-wood" />

          {/* 2. Serviços (Marrom Amadeirado) - Sem fotos */}
          <Services />

          {/* Transição 2 -> 3 */}
          <SectionDivider variant="to-beige" />

          {/* 3. Galeria (Bege Claro) */}
          <Gallery />

          {/* Transição 3 -> 4 */}
          <SectionDivider variant="to-wood" />

          {/* 4. Sobre a Profissional (Marrom Amadeirado) */}
          <About />

          {/* Transição 4 -> 5 */}
          <SectionDivider variant="to-beige" />

          {/* 5. Formação VIP (Bege Claro) */}
          <FormacaoVIP />

          {/* Transição 5 -> 6 */}
          <SectionDivider variant="to-wood" />

          {/* 6. Instagram (Marrom Amadeirado) */}
          <InstagramSection />

          {/* Transição 6 -> 7 */}
          <SectionDivider variant="to-beige" />

          {/* 7. Feedbacks (Bege Claro) */}
          <Feedbacks />

          {/* Transição 7 -> 8 */}
          <SectionDivider variant="to-wood" />

          {/* 8. Studio + Localização (Marrom Amadeirado) */}
          <StudioSection />

          {/* Transição 8 -> 9 */}
          <SectionDivider variant="to-beige" />

          {/* 9. Agendamento + Educação da Cliente (Bege Claro) */}
          <AgendamentoSection />

          {/* Transição 9 -> 10 */}
          <SectionDivider variant="to-wood" />

          {/* 10. FAQ (Marrom Amadeirado) */}
          <FaqSection />
        </main>

        {/* 11. Rodapé (Bege Claro com linha dourada no topo) */}
        <Footer />

        {/* Floating Action Button (visível após o hero) */}
        <FloatingCta />
      </div>
    </LanguageProvider>
  );
}
