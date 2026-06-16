import { Activity, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-brand-900)] pt-16 pb-8 border-t border-[var(--color-brand-800)] text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Activity className="h-6 w-6 text-[var(--color-brand-cyan)]" />
              <span className="text-xl font-bold tracking-tight text-white">
                NUMÉ<span className="text-[var(--color-brand-cyan)]">TRICA</span>
              </span>
            </div>
            <p className="max-w-sm mb-6 text-sm">
              Soluciones de hardware IoT y software para el monitoreo y control inteligente de activos energéticos, agrícolas e industriales.
            </p>
            <div className="flex gap-4 text-sm">
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4"/> Argentina</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#sectores" className="hover:text-[var(--color-brand-cyan)] transition-colors">Sectores</a></li>
              <li><a href="#solucion" className="hover:text-[var(--color-brand-cyan)] transition-colors">Solución</a></li>
              <li><a href="#integraciones" className="hover:text-[var(--color-brand-cyan)] transition-colors">Integraciones</a></li>
              <li><a href="#dashboard" className="hover:text-[var(--color-brand-cyan)] transition-colors">Dashboard</a></li>
              <li><a href="#casos-de-uso" className="hover:text-[var(--color-brand-cyan)] transition-colors">Casos de Uso</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@numetrica.com.ar" className="hover:text-[var(--color-brand-cyan)]">info@numetrica.com.ar</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+54 9 11 1234-5678</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[var(--color-brand-800)] pt-8 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} NUMÉTRICA. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Términos y condiciones</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
