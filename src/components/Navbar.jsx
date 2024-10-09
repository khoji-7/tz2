import React from "react";
import { useState } from "react";
import "../index.css";
import {TfiMenuAlt} from "react-icons/tfi";
import {CiSearch} from "react-icons/ci";
import {FaTelegramPlane} from "react-icons/fa";
import {AiOutlineUserAdd} from "react-icons/ai";

const navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (<>
        <nav className="flex items-center justify-between p-8 border-b border-dashed max-w-[1440px] mx-auto border-[#248888] ">
            <p className="play-bold text-5xl text-[#023131]">Logo</p>
            <ul className=" hidden  lg:max-w-lg lg:flex lg:items-center lg:gap-[3%]">
                <li className="text-[18px] play-regular font-weight-400 text-[#001C1C] hover:text-red-500 hover:cursor-pointer flex items-center">
                    <TfiMenuAlt className="text-red-500 mr-1 text-[25px]"/>
                    Все предложения
                </li>

                <li className="text-[18px] play-regular font-weight-400 text-[#001C1C] hover:text-red-500 hover:cursor-pointer ">
                    Скидки
                </li>
                <li className="text-[18px] play-regular font-weight-400 text-[#001C1C] hover:text-red-500 hover:cursor-pointer ">
                    Акции
                </li>
                <li className="text-[18px] play-regular font-weight-400 text-[#001C1C] hover:text-red-500 hover:cursor-pointer ">
                    Промокоды
                </li>
                <li className="text-[18px] play-regular font-weight-400 text-[#001C1C] hover:text-red-500 hover:cursor-pointer ">
                    Кешбэк
                </li>
            </ul>
            <div className="flex gap-[2%] lg:hidden">
                <button onClick={toggleMenu}>
                    <TfiMenuAlt className="text-red-500 text-[25px]"/>
                </button>
               </div>
            <div className="flex flex-row items-center gap-3">
                <CiSearch className="text-[#248888]"/>
                <FaTelegramPlane/>
                <AiOutlineUserAdd/>
                <p className="text-[18px] play-regular font-weight-400 text-[#001C1C] hover:text-red-500 hover:cursor-pointer">Ру</p>
                <button type="submit" className=" hidden md:max-w-lg md:flex md:items-center md:px-[10%] md:w-[200px] hover:bg-white hover:text-[#FF2E4C] ease-in-out duration-500 cursor-pointer hover:border-2 hover:border-[#FF2E4C] md:h-12 md:rounded-2xl  md:bg-[#FF2E4C] text-white">
                    Добавить скидку
                </button>
            </div>
        </nav>
        { isMenuOpen && (
                    <div className="max-w-lg flex-col mx-auto items-center gap-[3%] ">
                        <p className="text-[18px] play-regular font-weight-400 text-[#001C1C] hover:text-red-500 hover:cursor-pointer flex items-center">
                            Все предложения
                        </p>

                        <p className="text-[18px] play-regular font-weight-400 text-[#001C1C] hover:text-red-500 hover:cursor-pointer">
                            Скидки
                        </p>
                        <p className="text-[18px] play-regular font-weight-400 text-[#001C1C] hover:text-red-500 hover:cursor-pointer">
                            Акции
                        </p>
                        <p className="text-[18px] play-regular font-weight-400 text-[#001C1C] hover:text-red-500 hover:cursor-pointer">
                            Промокоды
                        </p>
                        <p className="text-[18px] play-regular font-weight-400 text-[#001C1C] hover:text-red-500 hover:cursor-pointer">
                            Кешбэк
                        </p>
                    </div>
                )
            }
        </>
    );
};

export default navbar;
