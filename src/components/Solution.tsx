"use client";

import { Gauge, Cpu, Cloud, LayoutDashboard } from "lucide-react";
import { motion } from "framer-motion";

export default function Solution() {
  const steps = [
    { icon: <Gauge className="w-8 h-8" />, label: "Tu activo" },
    { icon: <Cpu className="w-8 h-8" />, label: "Hardware NUMÉTRICA" },
    { icon: <Cloud className="w-8 h-8" />, label: "Nube IoT" },
    { icon: <LayoutDashboard className="w-8 h-8" />, label: "Dashboard" }
  ];

  return (
    <section className="py-24 bg-[var(--color-brand-900)] text-white overflow-hidden" id="solucion">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">La solución integral para tus activos</h2>
          <p className="text-lg text-[var(--color-brand-muted)]">
            Hardware robusto y software avanzado trabajando en conjunto para darte el control total, sin importar qué quieras monitorear.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-[var(--color-brand-800)] -translate-y-1/2 z-0"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.9 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }} 
                transition={{ delay: index * 0.2 }} 
                className="flex flex-col items-center"
              >
                <div className="w-24 h-24 rounded-2xl bg-[var(--color-brand-800)] flex items-center justify-center text-[var(--color-brand-cyan)] mb-4 border border-[var(--color-brand-700)] relative group">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold">{step.label}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
