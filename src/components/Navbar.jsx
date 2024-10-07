import React from 'react'
import "../index.css"
import { TfiMenuAlt } from "react-icons/tfi";
import { CiSearch } from "react-icons/ci";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";





const navbar = () => {
  return (
    <nav className='flex items-center justify-between p-8 border-b border-dashed border-[#248888]'>
      <p className='play-bold text-5xl text-[#023131]'>
        Logo
      </p>
      <ul className='flex items-center gap-6'>
        <li className='text-[18px] play-regular font-weight-400 text-[#001C1C] hover:text-red-500 hover:cursor-pointer flex items-center'><TfiMenuAlt className='text-red-500 mr-1' /> Все предложения</li>
       
        <li className='text-[18px] play-regular font-weight-400 text-[#001C1C] hover:text-red-500 hover:cursor-pointer '>Скидки</li>
        <li className='text-[18px] play-regular font-weight-400 text-[#001C1C] hover:text-red-500 hover:cursor-pointer '>Акции</li>
        <li className='text-[18px] play-regular font-weight-400 text-[#001C1C] hover:text-red-500 hover:cursor-pointer '>Промокоды</li>
        <li className='text-[18px] play-regular font-weight-400 text-[#001C1C] hover:text-red-500 hover:cursor-pointer '>Кешбэк</li>
      </ul>
      <div className='flex flex-row items-center gap-3' >
        <CiSearch className='text-[#248888]'/>
        <FaTelegramPlane/>
        <AiOutlineUserAdd/>
        <p className='text-[18px] play-regular font-weight-400 text-[#001C1C]' >Ру</p>
        <button className='w-[200px] h-12 rounded-2xl bg-[#FF2E4C] text-white'>
        Добавить скидку
        </button>
      </div>
      
    </nav>
  )
}

export default navbar
