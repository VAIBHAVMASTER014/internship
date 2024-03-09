import React from "react";

// imported files
import Header from "./Header/Header";
import AfterHeader from "./AfterHeader/AfterHeader";
import Hero from "./Hero/Hero";
import RecipieSection from "./RecipieSection/RecipieSection";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";


const Home: React.FC = () => {
  return (
    <>
    
      <Header />
      <AfterHeader />
      <Hero />
      <RecipieSection />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
