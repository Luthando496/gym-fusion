import React from 'react'
import Header from '../components/Header'
import BottomHeader from '../components/BottomHeader'
import AboutWho from '../components/AboutWho'
import OurClasses from '../components/OurClasses'
import FitnessService from '../components/FitnessService'
import Trainers from '../components/Trainers'
import GalleryGym from '../components/GalleryGym'
import BMI from '../components/BMI'
import PricingChart from '../components/PricingChart'
import Blog from '../components/Blog'



const Home = () => {
  return (
    <>
        <Header />
        <BottomHeader />
        <AboutWho />
        <OurClasses />
        <FitnessService />
        <Trainers />
        <GalleryGym />
        <BMI />
        <PricingChart />
        <Blog />
    </>
  )
}

export default Home