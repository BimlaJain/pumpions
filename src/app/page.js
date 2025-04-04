import ClubMembership from '@/components/ClubMembership'
import BackToTop from '@/components/common/BackToTop'
import Faqs from '@/components/Faq'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import LookFamiliar from '@/components/LookFamiliar'
import MeetPumpions from '@/components/MeetPumpions'
import OgPumpions from '@/components/OgPumpions'
import Pumpmap from '@/components/Pumpmap'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero />
      <MeetPumpions />
      <LookFamiliar />
      <ClubMembership/>
      <Pumpmap />
      <OgPumpions />
      <Faqs />
      <Footer />
      <BackToTop/>
    </div>
  )
}

export default page
