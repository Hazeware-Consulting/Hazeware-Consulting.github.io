"use client";

import { useState, useEffect } from "react";
import { Menu, X, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Solución", href: "#solucion" },
    { name: "Métricas", href: "#caracteristicas" },
    { name: "Dashboard", href: "#dashboard" },
    { name: "Casos de uso", href: "#casos-de-uso" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Activity className="h-8 w-8 text-[var(--color-brand-cyan)]" />
            <span className="text-2xl font-bold tracking-tight text-[var(--color-brand-900)]">
              NUMÉ<span className="text-[var(--color-brand-cyan)]">TRICA</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-slate-600 hover:text-[var(--color-brand-cyan)] transition-colors">
                {link.name}
              </a>
            ))}
            <button className="bg-[var(--color-brand-900)] text-white px-5 py-2 rounded-lg font-medium hover:bg-[var(--color-brand-800)] transition-colors shadow-lg">
              Contacto
            </button>
          </div>

          <button className="md:hidden text-slate-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-base font-medium text-slate-700 hover:text-[var(--color-brand-cyan)]" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.name}
                </a>
              ))}
              <button className="bg-[var(--color-brand-900)] text-white px-5 py-3 rounded-lg font-medium w-full mt-4">
                Contacto
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
