import { useCases, benefits } from "@/constants/content";
import { Wrench, Factory, Home, Sprout, Check } from "lucide-react";

export function UseCases() {
  const icons = [
    <Wrench key="1" />,
    <Factory key="2" />,
    <Home key="3" />,
    <Sprout key="4" />
  ];

  return (
    <section className="py-24 bg-white" id="casos-de-uso">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Diseñado para cada necesidad</h2>
          <p className="text-lg text-slate-600">Soluciones escalables desde un único usuario hasta gestores de flotas.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((item, i) => (
            <div key={i} className="flex gap-6 p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-[var(--color-brand-cyan)]/5 transition-colors">
              <div className="w-14 h-14 shrink-0 rounded-xl bg-[var(--color-brand-900)] text-white flex items-center justify-center">
                {icons[i]}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Benefits() {
  return (
    <section className="py-24 bg-[var(--color-brand-900)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">El impacto de medirlo todo</h2>
            <p className="text-lg text-[var(--color-brand-muted)] mb-8">
              Implementar NUMÉTRICA no es solo un upgrade tecnológico, es una decisión financiera inteligente para proteger y optimizar activos energéticos.
            </p>
          </div>
          <div className="bg-[var(--color-brand-800)]/50 p-8 rounded-2xl border border-[var(--color-brand-700)]">
            <ul className="space-y-6">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="bg-[var(--color-brand-cyan)]/20 text-[var(--color-brand-cyan)] rounded-full p-1 mt-1">
                    <Check className="w-5 h-5" />
                  </div>
                  <span className="text-slate-300 font-medium text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
