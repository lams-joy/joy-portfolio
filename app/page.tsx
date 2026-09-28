import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import ArticlesSection from "@/components/ArticlesSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Work />
        <ArticlesSection />
        <Contact />
      </main>

      <Footer />
    </>
  );
}