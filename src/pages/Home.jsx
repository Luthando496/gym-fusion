import React from 'react'
import Header from '../components/Header'
import BottomHeader from '../components/BottomHeader'
import AboutWho from '../components/AboutWho'
import OurClasses from '../components/OurClasses'
import FitnessService from '../components/FitnessService'

const Home = () => {
  return (
    <>
        <Header />
        <BottomHeader />
        <AboutWho />
        <OurClasses />
        <FitnessService />
    </>
  )
}

export default Home