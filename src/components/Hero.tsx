"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Activity, Wifi } from "lucide-react";
import { siteContent } from "@/constants/content";

export default function Hero() {
  const { hero, mockup } = siteContent;

  return (
    <section className="relative pt-36 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-[var(--color-brand-900)] text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-[var(--color-brand-cyan)]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-32 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-brand-cyan)]/10 text-[var(--color-brand-cyan)] border border-[var(--color-brand-cyan)]/20 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-[var(--color-brand-cyan)] animate-pulse"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase">{hero.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6">
            {hero.title}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-cyan)] to-blue-400">{hero.titleHighlight}</span>
          </h1>

          <p className="text-lg sm:text-xl text-[var(--color-brand-muted)] mb-10 leading-relaxed max-w-2xl mx-auto">
            {hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center gap-2 bg-[var(--color-brand-cyan)] text-[var(--color-brand-900)] px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all shadow-lg shadow-[var(--color-brand-cyan)]/20">
              {hero.ctaPrimary} <ArrowRight className="w-5 h-5" />
            </button>
            <button className="flex items-center justify-center gap-2 bg-white/5 text-white border border-white/15 px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors">
              {hero.ctaSecondary}
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="relative max-w-xl mx-auto mt-16"
        >
          <div className="bg-[var(--color-brand-800)] rounded-2xl p-6 shadow-2xl border border-[var(--color-brand-700)] relative z-10 text-left">
            <div className="flex justify-between items-center mb-6 border-b border-[var(--color-brand-700)] pb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-[var(--color-brand-green)]"></div>
              </div>
              <div className="text-slate-400 text-sm font-mono">Dispositivo: {mockup.device}</div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="bg-[var(--color-brand-900)]/50 p-4 rounded-xl border border-[var(--color-brand-700)]/50">
                <div className="flex items-center gap-2 text-[var(--color-brand-cyan)] mb-2">
                  <Activity className="w-5 h-5" />
                  <span className="text-sm font-medium">Corriente</span>
                </div>
                <div className="text-3xl font-bold text-white">{mockup.current} <span className="text-base text-slate-400 font-normal">{mockup.currentUnit}</span></div>
              </motion.div>

              <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }} className="bg-[var(--color-brand-900)]/50 p-4 rounded-xl border border-[var(--color-brand-700)]/50">
                <div className="flex items-center gap-2 text-blue-400 mb-2">
                  <Zap className="w-5 h-5" />
                  <span className="text-sm font-medium">Voltaje</span>
                </div>
                <div className="text-3xl font-bold text-white">{mockup.voltage} <span className="text-base text-slate-400 font-normal">{mockup.voltageUnit}</span></div>
              </motion.div>

              <div className="bg-[var(--color-brand-900)]/50 p-4 rounded-xl border border-[var(--color-brand-700)]/50 col-span-2 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[var(--color-brand-green)] mb-2">
                    <Wifi className="w-5 h-5" />
                    <span className="text-sm font-medium">Conectividad</span>
                  </div>
                  <div className="text-xl font-bold text-white">{mockup.status}</div>
                </div>
                <div className="h-10 w-10 rounded-full border-4 border-[var(--color-brand-green)]/20 border-t-[var(--color-brand-green)] animate-spin"></div>
              </div>
            </div>
          </div>
          <div className="absolute -inset-4 bg-gradient-to-br from-[var(--color-brand-cyan)]/20 to-blue-500/20 rounded-2xl blur-3xl -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
}
