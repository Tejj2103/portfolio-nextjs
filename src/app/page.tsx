import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-[#31363F] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
    </div>
  );
}

export default Home;