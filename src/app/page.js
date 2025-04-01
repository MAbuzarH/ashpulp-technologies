import React from 'react'
import HeroSection from './components/Hero'
import TeamSection from './components/TeamSec'
import Banner from './components/Banner'
import ProjectsSection from './components/Projects'
import ContactSection from './components/Contactm'
import StatsSection from './components/StatsSec'
import  VideoSection from   './components/Vidsec'
import ServicesSection from './components/ServiceSec'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <StatsSection/>
      <VideoSection/>
      <ServicesSection />
      <TeamSection />
      <Banner />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}

export default page