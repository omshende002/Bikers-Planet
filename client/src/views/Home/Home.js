import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import HeroSection from '../../components/HeroSection/HeroSection'
import Spotlightbikes from '../../components/Spotlightbikes/Spotlightbikes'
import Brands from '../../components/Brands/Brands'

function Home() {
  return (
    <>
    <div>
        <Navbar/>
        <HeroSection/>
        <Spotlightbikes/>
        <Brands/>
    </div>
    </>
  )
}

export default Home