"use client";

import { AlertTriangle, TrendingDown, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { problems } from "@/constants/content";

export default function Problem() {
  const icons = [
    <AlertTriangle key="alert" className="w-8 h-8 text-amber-500" />,
    <TrendingDown key="trending" className="w-8 h-8 text-red-500" />,
    <Clock key="clock" className="w-8 h-8 text-blue-500" />
  ];

  return (
    <section className="py-24 bg-white" id="problema">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">El desafío de las instalaciones a ciegas</h2>
          <p className="text-lg text-slate-600">
            Muchas instalaciones solares funcionan sin monitoreo en tiempo real, lo que se traduce en costos ocultos y pérdida de eficiencia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors"
            >
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm mb-6">
                {icons[index]}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{problem.title}</h3>
              <p className="text-slate-600 leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
