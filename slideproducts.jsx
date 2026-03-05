import React from 'react'
import Product from './product'
import './slideproduct.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import Loading from '../Loading/Loading';

import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';

function Slideproducts({ data, title }) {
  if (!data || data.length === 0) {
    return <Loading />;
  }
  
  return (
    <div className='slide_products slid'>
      <div className="conteanr">
        <div className="top_slide">
          <h2>{title}</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus!</p>
        </div>

        <Swiper loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }} slidesPerView={5} navigation={true} modules={[Autoplay, Navigation]} className="mySwiper">

          {data && data.map((item, index) => (
            <SwiperSlide key={index}>
              <Product product={item} />
            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </div>
  )
}

export default Slideproducts
