import { Activity, Zap, Battery, Wifi, ThermometerSun, History, BellRing, Settings, Wrench, Factory, Home, Sprout } from "lucide-react";

export const siteContent = {
  hero: {
    badge: "Hardware IoT Industrial",
    title: "Monitoreo IoT inteligente para ",
    titleHighlight: "sistemas solares",
    description: "NUMÉTRICA conecta tus instalaciones fotovoltaicas con datos en tiempo real para medir, analizar y anticipar fallas desde cualquier lugar.",
    ctaPrimary: "Solicitar demo",
    ctaSecondary: "Ver cómo funciona",
  },
  mockup: {
    device: "NMT-Solar-01",
    current: "153",
    currentUnit: "mA",
    voltage: "13.0",
    voltageUnit: "V",
    status: "En línea, estable"
  },
  dashboard: {
    title: "Tus datos, centralizados y claros",
    description: "Visualizá gráficos, configurá alarmas y analizá el rendimiento con una interfaz industrial.",
    power: "1.99",
    powerUnit: "W",
    energy: "3.75",
    energyUnit: "kWh"
  },
  ctaFinal: {
    title: "Convertí tu instalación solar en un sistema inteligente conectado.",
    description: "Empezá a monitorear hoy mismo y tomá el control de tu energía.",
    buttonPrimary: "Solicitar una demo",
    buttonSecondary: "Hablar con NUMÉTRICA"
  }
};

export const problems = [
  {
    title: "Fallas indetectables",
    description: "Sin visibilidad remota, los equipos pueden estar fallando durante días sin que nadie lo note."
  },
  {
    title: "Pérdidas de rendimiento",
    description: "Paneles sucios o sombras imprevistas reducen la generación, impactando el retorno de inversión."
  },
  {
    title: "Visitas innecesarias",
    description: "Viajes de kilómetros solo para reiniciar un equipo o diagnosticar un problema menor."
  }
];

export const features = [
  { title: "Corriente", desc: "Monitoreo preciso de la corriente inyectada o consumida." },
  { title: "Voltaje", desc: "Lecturas exactas de la tensión del sistema." },
  { title: "Potencia instantánea", desc: "Cálculo en vivo de la potencia activa del arreglo." },
  { title: "Energía acumulada", desc: "Registro histórico de kWh generados." },
  { title: "Estado WiFi", desc: "Supervisión constante de conectividad y latencia." },
  { title: "Sensores", desc: "Integración con temperatura y viento." },
  { title: "Alertas tempranas", desc: "Notificaciones automáticas ante caídas de tensión." },
  { title: "Gestión remota", desc: "Mantenimiento sin necesidad de visitas." }
];

export const useCases = [
  { title: "Instaladores Solares", desc: "Ofrecé un servicio post-venta premium y proactivo." },
  { title: "Comercios e Industrias", desc: "Asegurá el retorno de inversión de tu planta." },
  { title: "Zonas Rurales", desc: "Controlá el estado en zonas de difícil acceso." },
  { title: "Parques Solares", desc: "Gestión a nivel de string o inversor." }
];

export const benefits = [
  "Reducción drástica de visitas técnicas innecesarias.",
  "Detección temprana de fallas antes de que afecten la facturación.",
  "Mayor eficiencia energética mediante análisis de datos históricos.",
  "Datos 100% confiables y precisos para tomar decisiones informadas.",
  "Mejor control del retorno de inversión (ROI) del sistema fotovoltaico."
];
