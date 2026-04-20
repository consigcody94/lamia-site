import { TopNav } from "@/components/TopNav";
import { Hero } from "@/components/Hero";
import { Teachings } from "@/components/Teachings";
import { Services } from "@/components/Services";
import { Writings } from "@/components/Writings";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopNav />
      <main>
        <Hero />
        <Teachings />
        <Services />
        <Writings />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
