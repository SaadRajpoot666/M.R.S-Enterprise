import { useEffect } from "react";
import { HeroSection } from "./components/HeroSection/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";



export default function App() {
   useEffect(() => {
     AOS.init({ duration: 1000, once: true }); // Once = animation only happens once
   }, []);
   return <>
   <Navbar   />
   <HeroSection   />
   </>
    
}
