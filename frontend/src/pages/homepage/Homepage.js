import React from 'react'
import Slideshow from './Slideshow'
import HomeInfoSection from './HomeInfoSection'
import HomepageContactForm from './HomepageContactForm'

const Homepage = ({showAlert}) => {
  return (
    <main>
      <Slideshow />
      <HomeInfoSection />
      <HomepageContactForm showAlert={showAlert} />
    </main>
  )
}

export default Homepage
