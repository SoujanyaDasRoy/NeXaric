import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { Services } from "@/components/Services";
import { HowWeWork } from "@/components/HowWeWork";
import { Testimonials } from "@/components/Testimonials";
import { ContactFormSection } from "@/components/ContactFormSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full flex flex-col">
        <Hero />
        <TrustedBy />
        <Services />
        <HowWeWork />
        <Testimonials />
        <ContactFormSection />
      </main>
      <Footer />
    </>
  );
}
