import React from "react";
import Analytics from "./components/Analytics";
import Globe from "./components/Globe";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OurWork from "./components/OurWork";
import Insights from "./components/Insights";
import Services from "./components/Services";
import GetInTouch from "./components/GetInTouch";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Globe />
      <OurWork />
      <Services/>
      <Insights />
      <GetInTouch/>
      <Footer />

    </div>
  );
}

export default App;
