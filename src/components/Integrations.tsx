"use client";

import { CloudSun, MapPin, Plug } from "lucide-react";
import { motion } from "framer-motion";
import { integrations } from "@/constants/content";

export default function Integrations() {
  const icons = [
    <CloudSun key="clima" className="w-7 h-7" />,
    <MapPin key="geo" className="w-7 h-7" />,
    <Plug key="api" className="w-7 h-7" />
  ];

  return (
    <section className="py-24 bg-[var(--color-brand-900)] text-white" id="integraciones">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Más que medir: datos que se conectan</h2>
          <p className="text-lg text-[var(--color-brand-muted)]">
            Enriquecemos tus mediciones con información externa para que cada decisión tenga más contexto.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {integrations.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[var(--color-brand-800)]/50 p-8 rounded-2xl border border-[var(--color-brand-700)]"
            >
              <div className="w-14 h-14 rounded-xl bg-[var(--color-brand-cyan)]/10 text-[var(--color-brand-cyan)] flex items-center justify-center mb-5">
                {icons[i]}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-300 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
