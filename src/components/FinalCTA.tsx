import { siteContent } from "@/constants/content";

export default function FinalCTA() {
  const { ctaFinal } = siteContent;
  
  return (
    <section className="py-24 relative overflow-hidden bg-[var(--color-brand-cyan)]">
      <div className="absolute inset-0 bg-slate-900/10 mix-blend-overlay"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--color-brand-900)] mb-6">
          {ctaFinal.title}
        </h2>
        <p className="text-xl text-[var(--color-brand-900)]/80 mb-10 font-medium">
          {ctaFinal.description}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-[var(--color-brand-900)] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-colors shadow-xl">
            {ctaFinal.buttonPrimary}
          </button>
          <button className="bg-white text-[var(--color-brand-900)] border-2 border-[var(--color-brand-900)] px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors">
            {ctaFinal.buttonSecondary}
          </button>
        </div>
      </div>
    </section>
  );
}
