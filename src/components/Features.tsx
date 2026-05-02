import { features } from "@/constants/content";
import { Zap, Activity, Battery, Wifi, ThermometerSun, History, BellRing, Settings } from "lucide-react";

export default function Features() {
  const iconMap = [
    <Activity key="activity" />,
    <Zap key="zap" />,
    <Battery key="battery" />,
    <History key="history" />,
    <Wifi key="wifi" />,
    <ThermometerSun key="thermometer" />,
    <BellRing key="bellring" />,
    <Settings key="settings" />
  ];

  return (
    <section className="py-24 bg-slate-50" id="caracteristicas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Métricas que importan</h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            Nuestro dispositivo captura cada variable crítica para asegurar que tu sistema solar opere al máximo de su capacidad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-[var(--color-brand-cyan)]/50 hover:shadow-sm transition-all group">
              <div className="w-12 h-12 rounded-lg bg-[var(--color-brand-cyan)]/10 text-[var(--color-brand-900)] flex items-center justify-center mb-4 group-hover:bg-[var(--color-brand-cyan)] group-hover:text-white transition-colors">
                {iconMap[i]}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
