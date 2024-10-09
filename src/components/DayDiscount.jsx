import React from "react";
import {dayDiscount} from "../data"; // dayDiscount sifatida import qilingan

const DayDiscount = () => {
    return (
        <>
            <aside className="max-w-[290px] mx-auto p-5 bg-[#F0F6F6]">
                <h1 className="text-[44px] play-bold">Скидки дня</h1>
                <p className="play-regular text-[#607282] text-[16px] font-weight-700">
                    {dayDiscount.length} предложения
                </p>
                <div>
                    {dayDiscount.map((item) => (
                        <div key={item.id} className="play-regular text-[#607282] text-[14px] border rounded-lg mt-6 border-[#607282] border-dashed">
                            <img src={item.img} className="w-[250px] h-[135px]" alt="" />
                            <div className="p-3 bg-white">
                            <p className="montserrat text-[14px] text-[#607282] hover:text-red-500 duration-300 ease-in cursor-pointer">{item.title}</p>

                                <p className="play-bold text-[#001C1C] text-[18px] leading-6 h-12  overflow-hidden" >{item.desc}</p>
                                <div className="flex flex-row justify-between items-center">
                                    <p className="montserrat text-[14px] text-[#607282] hover:text-red-500 duration-300 ease-in cursor-pointer">Скидки</p>
                                    <div className="flex ">
                                    <p className="montserrat text-[14px] text-[#607282] border py-1 px-2 border-[#607282] hover:text-white ease-in duration-300 hover:bg-[#607282] cursor-pointer rounded-md">Кешбэк</p>
                                    <p className="border py-1 px-2 border-[#607282] bg-[#607282] text-white rounded-md hover:text-[#607282] hover:bg-white ease-in duration-300 cursor-pointer">
                                      3%
                                    </p>
                                    </div>
                                    
                                </div>
                                <p className="montserrat text-[14px] text-[#607282] hover:text-red-500 duration-300 ease-in cursor-pointer">{item.pos}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </aside>
        </>
    );
};

export default DayDiscount;
