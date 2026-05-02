import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import Device from "@/components/Device";
import DashboardMockup from "@/components/DashboardMockup";
import { UseCases, Benefits } from "@/components/UseCasesBenefits";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Device />
      <DashboardMockup />
      <UseCases />
      <Benefits />
      <FinalCTA />
      <Footer />
    </main>
  );
}
