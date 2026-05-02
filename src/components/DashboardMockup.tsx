"use client";
import { motion } from "framer-motion";
import { siteContent } from "@/constants/content";

export default function DashboardMockup() {
  const { dashboard, mockup } = siteContent;
  
  return (
    <section className="py-24 bg-[var(--color-brand-900)]" id="dashboard">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{dashboard.title}</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">{dashboard.description}</p>
        </div>

        <div className="bg-[#0f172a] rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
          <div className="bg-[#1e293b] px-6 py-4 flex justify-between items-center border-b border-slate-800">
            <div className="px-3 py-1 bg-[var(--color-brand-cyan)]/10 text-[var(--color-brand-cyan)] rounded text-sm font-mono border border-[var(--color-brand-cyan)]/20">Planta_Solar_01</div>
            <div className="text-slate-400 text-sm">En vivo</div>
          </div>
          
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#1e293b] p-5 rounded-xl border border-slate-800">
              <div className="text-slate-400 text-sm mb-1">Corriente</div>
              <div className="text-3xl font-bold text-white">{mockup.current} <span className="text-[var(--color-brand-cyan)] text-lg">{mockup.currentUnit}</span></div>
            </div>

            <div className="bg-[#1e293b] p-5 rounded-xl border border-slate-800">
              <div className="text-slate-400 text-sm mb-1">Voltaje</div>
              <div className="text-3xl font-bold text-white">{mockup.voltage} <span className="text-blue-400 text-lg">{mockup.voltageUnit}</span></div>
            </div>

            <div className="bg-[#1e293b] p-5 rounded-xl border border-slate-800">
              <div className="text-slate-400 text-sm mb-1">Potencia Activa</div>
              <div className="text-3xl font-bold text-[var(--color-brand-green)]">{dashboard.power} <span className="text-lg">{dashboard.powerUnit}</span></div>
            </div>

            <div className="bg-[#1e293b] p-5 rounded-xl border border-slate-800">
              <div className="text-slate-400 text-sm mb-1">Estado</div>
              <div className="text-white font-bold flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[var(--color-brand-green)]"></div> WiFi OK
              </div>
            </div>

            <div className="lg:col-span-3 bg-[#1e293b] p-5 rounded-xl border border-slate-800 min-h-[200px] relative flex flex-col justify-end">
              <div className="absolute top-5 left-5 text-slate-400 text-sm">Potencia (Últimas 24h)</div>
              <svg className="w-full h-24" preserveAspectRatio="none" viewBox="0 0 100 100">
                <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5 }} d="M0,90 Q20,80 40,30 T80,20 T100,10" fill="none" stroke="var(--color-brand-cyan)" strokeWidth="2" />
              </svg>
            </div>

            <div className="bg-[#1e293b] p-5 rounded-xl border border-slate-800 flex flex-col justify-center">
              <div className="text-slate-400 text-sm mb-2">Energía Acumulada</div>
              <div className="text-4xl font-bold text-white mb-1">{dashboard.energy} <span className="text-xl text-slate-400">{dashboard.energyUnit}</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
