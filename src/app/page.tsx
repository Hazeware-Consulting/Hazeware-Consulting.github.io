import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Sectors from "@/components/Sectors";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import Device from "@/components/Device";
import DashboardMockup from "@/components/DashboardMockup";
import Integrations from "@/components/Integrations";
import { UseCases, Benefits } from "@/components/UseCasesBenefits";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Sectors />
      <Solution />
      <Features />
      <Device />
      <DashboardMockup />
      <Integrations />
      <UseCases />
      <Benefits />
      <FinalCTA />
      <Footer />
    </main>
  );
}
