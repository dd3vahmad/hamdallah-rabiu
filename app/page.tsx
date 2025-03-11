import About from "@/components/about";
import Hero from "@/components/hero";
import Services from "@/components/services";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Services />
      <Services />
      <Services />
    </div>
  );
}
