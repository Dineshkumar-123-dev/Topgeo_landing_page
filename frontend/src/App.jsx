import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Stats from "./components/Stats";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import "./style.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Partners />
      <Stats />
      <Features />
      <HowItWorks />
      <CTA />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;