import React from "react";
import Subhero from "../Components/landing/Subhero";
import Header from "../Components/Header/Header";
import Hero from "../Components/landing/Hero";
import Footer from "../Components/Footer/Footer";
const Home = () => {
  return (
    <>
      <Header />
      <div className="w-screen h-screen bg-primary text-text font-main">
        <Hero />
      </div>
      <div className="bg-primary-light w-screen h-screen text-text font-main">
        <Subhero />
      </div>
      <Footer />
    </>
  );
};
export default Home;
