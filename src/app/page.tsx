import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Portfolio from "@/sections/Portfolio";
import Clients from "@/sections/Clients";
import CompanyInfo from "@/sections/CompanyInfo";
import Footer from "@/sections/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col text-white">
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Portfolio />
        <Clients />
        <CompanyInfo />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
