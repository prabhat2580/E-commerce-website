import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import Footer from '../Components/Footer/Footer'
import './Shop.css'

export default function Shop() {
  return (
    <div>
      <Hero/>
      <Popular/>
      {/* <Offers/> */}
      <NewCollections/>
      {/* <NewsLetter/> */}
      <Footer/>
      
    </div>
  )
}
