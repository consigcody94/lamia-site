import { TopNav } from "@/components/TopNav";
import { Hero } from "@/components/Hero";
import { Teachings } from "@/components/Teachings";
import { Services } from "@/components/Services";
import { Writings } from "@/components/Writings";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { OrnamentDivider } from "@/components/Ornaments";

export default function Home() {
  return (
    <>
      <TopNav />
      <main>
        <Hero />
        <OrnamentDivider className="py-6" />
        <Teachings />
        <OrnamentDivider className="py-6" />
        <Services />
        <OrnamentDivider className="py-6" />
        <Writings />
        <OrnamentDivider className="py-6" />
        <About />
        <OrnamentDivider className="py-6" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
