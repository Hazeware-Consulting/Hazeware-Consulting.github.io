import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NUMÉTRICA | Monitoreo IoT Inteligente para Sistemas Solares",
  description: "Conecta tus instalaciones fotovoltaicas con datos en tiempo real para medir, analizar y anticipar fallas desde cualquier lugar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
