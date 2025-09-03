// src/components/MajorProjects.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

function MajorProjects() {
  return (
    <div className="py-8 px-4">
      <h3 className="text-xl font-semibold">Major Projects</h3>
      <p className="text-sm text-gray-500 mt-1">Currently 1 project</p>
      <div className="mt-4">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="relative">
              <img
                src="https://via.placeholder.com/800x400?text=Al-Turaif"
                alt="Al-Turaif"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-90 p-4 text-center">
                <h4 className="text-lg font-semibold">Al-Turaif</h4>
                <p className="text-sm text-gray-600">Discover the birthplace of the Kingdom of Saudi Arabia</p>
                <button className="mt-2 px-4 py-1 bg-brown-500 text-white text-sm hover:bg-brown-600 transition">
                  View Site
                </button>
                <button className="ml-2 text-sm text-gray-500">Learn more</button>
              </div>
            </div>
          </SwiperSlide>
          {/* Add more slides as needed */}
        </Swiper>
      </div>
    </div>
  );
}

export default MajorProjects;