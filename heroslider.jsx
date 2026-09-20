import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

function Heroslider() {
  return (
    <div className="hero">
      <div className="contanr">
        <Swiper 
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }} 
          pagination={true} 
          modules={[Autoplay, Pagination]} 
          className="mySwiper">
          <SwiperSlide>
            <div className="content">
              <h4>Introducing the new</h4>
              <h3>Microsoft xbox <br />....360 Controller</h3>
              <p>Windows xp/10/7/8, Tv Box</p>
              <Link to="/" className="btn">SHOP NOW</Link>
            </div>
            <img src="/banner_Hero1.jpg" alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <div className="content">
              <h4>Introducing the new</h4>
              <h3>Microsoft xbox <br />....360 Controller</h3>
              <p>Windows xp/10/7/8, Tv Box</p>
              <Link to="/" className="btn">SHOP NOW</Link>
            </div>
            <img src="/banner_Hero2.jpg" alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <div className="content">
              <h4>Introducing the new</h4>
              <h3>Microsoft xbox <br />....360 Controller</h3>
              <p>Windows xp/10/7/8, Tv Box</p>
              <Link to="/" className="btn">SHOP NOW</Link>
            </div>
            <img src="/banner_Hero3.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Heroslider
