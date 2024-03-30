import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import HeroSection from '../../components/HeroSection/HeroSection'
import Spotlightbikes from '../../components/Spotlightbikes/Spotlightbikes'
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
    <div>
        <Navbar/>
        <HeroSection/>
        <Spotlightbikes/>
        <Footer/>
    </div>
    </>
  )
}

export default Home