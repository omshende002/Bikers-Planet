import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import HeroSection from '../../components/HeroSection/HeroSection'
import Spotlightbikes from '../../components/Spotlightbikes/Spotlightbikes'

function Home() {
  return (
    <>
    <div>
        <Navbar/>
        <HeroSection/>
        <Spotlightbikes/>
    </div>
    </>
  )
}

export default Home