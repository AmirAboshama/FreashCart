import React, { useEffect, useState } from 'react'
import Products from '../Products/Products'
import CategoerySlider from '../CategoerySlider/CategoerySlider'
import MainSlider from '../MainSlider/MainSlider'
export default function Home () {
  return (
    <>
     <MainSlider />
     <CategoerySlider />
     <Products />
    </>
  )
}
