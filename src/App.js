import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Destinations from "./components/Destinations/Destinations";
import Search from "./components/search/Search";
import Select from "./components/Select/Select";

import ImgCarousel from "./components/Carousel/ImgCarousel";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Select />
      <ImgCarousel />
      <Footer />
    </div>
  );
}

export default App;
