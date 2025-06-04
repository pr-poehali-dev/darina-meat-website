import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import DarinaBrand from "@/components/DarinaBrand";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Products />
      <DarinaBrand />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
