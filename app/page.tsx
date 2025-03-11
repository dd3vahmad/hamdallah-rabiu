import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import { MilkyWay } from "@/components/ui/ui";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <MilkyWay />
      <About />
      <Services />
      <Testimonials />
      <Services />
      <Contact />
    </div>
  );
}
