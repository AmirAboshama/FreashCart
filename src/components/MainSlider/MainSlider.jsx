import React from 'react'
import slide1 from "../../assets/slider-image-1.jpeg"
import slide2 from "../../assets/slider-image-2.jpeg"
import slide3 from "../../assets/slider-image-3.jpeg"
import grocery1 from "../../assets/grocery-banner-2.jpeg"
import grocery2 from "../../assets/grocery-banner.png"
import Slider from 'react-slick'
export default function MainSlider() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
         autoplay: true,
        autoplaySpeed: 2000, 
      };
  return (
   <div className='grid  grid-cols-[2fr_1fr]  '>

<div className='overflow-hidden'>
<Slider {...settings} className=' mb-7'>
    <img src={slide1} className='w-[100%] h-[300px] object-cover ' alt="" />
    <img src={slide2} className='w-[100%] h-[300px] object-cover ' alt="" />
    <img src={slide3} className='w-[100%] h-[300px] object-cover ' alt="" />
    
    </Slider>
</div>

<div>
    <img src={grocery1} className='w-[100%] h-[150px] object-cover ' alt="" />
    <img src={grocery2} className='w-[100%] h-[150px] object-cover ' alt="" />
</div>

   </div>
  )
}
