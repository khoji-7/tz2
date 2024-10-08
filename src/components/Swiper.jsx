import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { bigDiscount } from "../data"; 

import { FreeMode, Pagination } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Swipers = () => {
  const swiperRef = useRef(null); 
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev(); 
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext(); 
    }
  };

  return (
    <>
      <div className='flex  relative flex-col h-[570px] max-w-[970px] bg-[#F0F6F6] p-8'>

        <h1 className='text-left play-bold text-[#248888] mb-5 border-b-2 border-[#BEDADA]  text-[44px] leading-3rem'>
        Топовые скидки
        </h1>
        <ul className='w-[340px] flex flex-row justify-between mb-5'>
            <li className='play-regular text-[20px] text-[#3C5858]'>Питание</li>
            <li className='play-regular text-[20px] text-[#3C5858]'>Связь</li>
            <li className='play-regular text-[20px] text-[#3C5858]'>Магазины</li>
        </ul>
       <div>
         <Swiper 
          ref={swiperRef}
          breakpoints={{
            450: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            500:{
              slidesPerView: 2,
              spaceBetween: 15,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 15,
            }
          }} 
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination]}
          className="w-[90%]"
          onSlideChange={handleSlideChange} // Slayd o'zgarganda funksiyani chaqirish
        >
          {bigDiscount.map((item) => (
            <SwiperSlide key={item.id} className='w-[290px] flex flex-col bg-white'>
              <div className="text-[#607282] text-[14px] border rounded-lg  border-[#607282] border-dashed">
                <img src={item.img} className="w-full h-[185px] border-none rounded-lg object-cover" alt="" />
                <div className="p-3 bg-white">
                  <p className="montserrat text-[14px] text-[#607282] hover:text-red-500 duration-300 ease-in cursor-pointer">
                    {item.title}
                  </p>
                  <p className="play-bold text-[#001C1C] text-[18px] leading-6 h-12 overflow-hidden">
                    {item.desc}
                  </p>
                  <div className="flex flex-row justify-between items-center mt-2">
                    <p className="montserrat text-[14px] text-[#607282] hover:text-red-500 duration-300 ease-in cursor-pointer">
                      Скидки
                    </p>
                    <div className="flex space-x-2">
                      <p className="montserrat text-[14px] text-[#607282] border py-1 px-2 border-[#607282] hover:text-white ease-in duration-300 hover:bg-[#607282] cursor-pointer rounded-md">
                        Кешбэк
                      </p>
                      <p className="border py-1 px-2 border-[#607282] bg-[#607282] text-white rounded-md hover:text-[#607282] hover:bg-white ease-in duration-300 cursor-pointer">
                        3%
                      </p>
                    </div>
                  </div>
                  <p className="montserrat text-[14px] text-[#607282] hover:text-red-500 duration-300 ease-in cursor-pointer mt-2">
                    {item.pos}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute flex top-[300px] z-10 w-[92%] justify-between">
          <button 
            onClick={handlePrev} 
            className={`bg-transparent border-none  cursor-pointer transition-opacity duration-300 ${isBeginning ? 'opacity-0' : 'opacity-100'}`}
          >
            <FaArrowLeft size={24} color="#607282" /> 
          </button>
          <button 
            onClick={handleNext}
            className={`bg-transparent border-none ml-3 flex cursor-pointer transition-opacity duration-300 ${isEnd ? 'opacity-0' : 'opacity-100'}`}
          >
            <FaArrowRight size={24} color="#607282" /> 
          </button>
        </div>
       </div>
      </div> 
    </>
  );
}

export default Swipers;
