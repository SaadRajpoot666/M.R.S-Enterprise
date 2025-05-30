import { useEffect } from "react";
import { HeroSection } from "./components/HeroSection/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { About } from "./components/About Section/About";
import { Services } from "./components/Services/Services";
import { LogoSlider } from "./components/Logo Slider/LogoSlider";
import { Projects } from "./components/Projects/Projects";
import { Footer } from "./components/Footer.jsx/Footer";



export default function App() {
   useEffect(() => {
     AOS.init({ duration: 1000, once: true }); // Once = animation only happens once
   }, []);
   return <>
   <Navbar   />
   <HeroSection   />
   <About   />
   <Services   />
   <LogoSlider   />
   <Projects   />
   <Footer   />
   </>
    
}
