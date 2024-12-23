import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';

export default function CategoerySlider() {
const [Categoeries, setCategoeries] = useState(null)
    function getCategoery(){
        axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
        .then((res)=>{
            console.log(res.data.data);
            setCategoeries(res.data.data)
        })
    }

    useEffect(() => {
        getCategoery()
    
    }, [])
    

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };

  return (
    <div className='my-10'>
       <Slider {...settings}>
     {Categoeries?.map((Categoery)=><div  key={Categoery._id}>
<img src={Categoery.image}  className='w-full  h-[200px]  object-cover' alt="" />
<h3>{Categoery.name}</h3>
     </div>)}
    
    </Slider>
    </div>
  )
}
