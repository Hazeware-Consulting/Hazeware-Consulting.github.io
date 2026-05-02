import { CheckCircle2 } from "lucide-react";

export default function Device() {
  const specs = [
    "Diseño compacto e industrial",
    "Fácil instalación en tableros existentes",
    "Alta precisión de medición de variables",
    "Conectividad IoT de bajo consumo",
  ];

  return (
    <section className="py-24 bg-white" id="producto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Hardware diseñado para el campo</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              El dispositivo NUMÉTRICA fue creado pensando en la realidad de las instalaciones. Es robusto, adaptable a sistemas nuevos o existentes, y está preparado para operar de forma ininterrumpida.
            </p>
            <ul className="space-y-4 mb-8">
              {specs.map((spec, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="w-6 h-6 text-[var(--color-brand-green)]" /> {spec}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="aspect-square rounded-3xl bg-slate-50 flex items-center justify-center relative border border-slate-200 shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200/50"></div>
              <div className="relative z-10 w-2/3 h-2/3 bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-center border-4 border-slate-100">
                <div className="text-2xl font-bold text-slate-300 mb-2">NUMÉTRICA</div>
                <div className="w-12 h-1 bg-[var(--color-brand-cyan)] rounded-full"></div>
                <div className="absolute bottom-6 flex gap-3">
                  <div className="w-3 h-3 rounded-full bg-[var(--color-brand-green)] animate-pulse"></div>
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
