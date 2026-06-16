"use client";

import { Sun, Wind, Zap, Sprout, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { sectors } from "@/constants/content";

export default function Sectors() {
  const icons = [
    <Sun key="sun" className="w-7 h-7" />,
    <Wind key="wind" className="w-7 h-7" />,
    <Zap key="zap" className="w-7 h-7" />,
    <Sprout key="sprout" className="w-7 h-7" />,
    <Wrench key="wrench" className="w-7 h-7" />
  ];

  return (
    <section className="py-24 bg-slate-50" id="sectores">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Una plataforma, múltiples sectores</h2>
          <p className="text-lg text-slate-600">
            La misma tecnología de hardware y software se adapta a cada tipo de activo que necesites monitorear y controlar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-[var(--color-brand-cyan)]/50 hover:shadow-md transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-[var(--color-brand-cyan)]/10 text-[var(--color-brand-900)] flex items-center justify-center mb-5 group-hover:bg-[var(--color-brand-cyan)] group-hover:text-white transition-colors">
                {icons[i]}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{sector.title}</h3>
              <p className="text-slate-600 leading-relaxed">{sector.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
