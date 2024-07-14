import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import PortFolio from "./Components/PortFolio/PortFolio";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Experience />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;
