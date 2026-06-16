import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NUMÉTRICA | Monitoreo y Control IoT para Energía, Agro e Industria",
  description: "Conectá tus activos solares, eólicos, eléctricos y agrícolas con datos en tiempo real para medir, controlar y anticipar fallas desde cualquier lugar.",
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
