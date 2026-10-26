import Hero from "../components/Hero";
import Services from "../components/Services";
import Software from "../components/Software";
import Portfolio from "../components/Portfolio";
import Process from "../components/Process";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Software />
      <Portfolio />
      <Process />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
