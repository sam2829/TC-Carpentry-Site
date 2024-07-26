import React from 'react'
import Slideshow from './Slideshow'
import HomeInfoSection from './HomeInfoSection'
import ContactForm from '../../components/ContactForm'

const Homepage = ({showAlert}) => {
  return (
    <main>
      {/* Slideshow of images */}
      <Slideshow />
      {/* Info section */}
      <HomeInfoSection />
      {/* Contact form */}
      <ContactForm showAlert={showAlert} />
    </main>
  )
}

export default Homepage
