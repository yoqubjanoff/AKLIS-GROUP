import React from 'react'
import "./Main.css"
import HeadSection from '../HeadSection/HeadSection'
import Products from '../Products/Products'
import AboutUs from '../AboutUs/AboutUs'
import ContactUs from '../ContactUs/ContactUs'

const Main = () => {
  return (
    <main>
      <HeadSection/>
      <Products/>
      <AboutUs/>
      <ContactUs/>
    </main>
  )
}

export default Main