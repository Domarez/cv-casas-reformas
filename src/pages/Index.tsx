import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import AnimationControls from "@/components/AnimationControls";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProblemSolution />
      <Benefits />
      <Services />
      <Testimonials />
      <WhyChooseUs />
      <FAQ />
      <FinalCTA />
      <Footer />
      <AnimationControls />
    </div>
  );
};

export default Index;
