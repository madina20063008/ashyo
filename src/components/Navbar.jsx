import React from "react";
import logo from '../assets/logo.svg'
import ashyo from '../assets/Ashyo.png'
import arrow from '../assets/arrow.png'
import search from '../assets/search.png'
import one from '../assets/1.png'
import two from '../assets/2.png'
import three from '../assets/3.png'
import four from '../assets/4.png'
const Navbar = () => {
    return (
        <nav className="w-[1185px] mx-auto">
            <div className="flex gap-[53px]">
                <div className="flex">
                    <img src={logo} alt="logo image" />
                    <img src={ashyo} alt="" className=" h-[42px] mt-[15px]" />
                </div>
                <div className="flex gap-[10px]">
                    <button className="bg-[#134E9B] text-white flex gap-[20px] py-[12px] px-[26px] font-medium text-[16px] rounded-[6px] mt-[12px] h-[50px]">Kategorya <img src={arrow} alt="" /></button>
                    <div className="flex">
                        <input type="search" placeholder="What are you looking for?" className="py-[17px] pl-[26px] w-[400px] rounded-[6px] mt-[12px] bg-[#EBEFF3] border-none h-[50px]"/>
                        <div className="bg-[#134E9B] mt-[12px] h-[50px] rounded-[6px]"><img src={search} alt="" className="p-[15px] "/></div>
                    </div>
                </div>
                <div className="flex h-[50px] mt-[12px] gap-[15px]">
                    <img src={one} alt="" />
                    <img src={two} alt="" />
                    <img src={three} alt="" />
                    <img src={four} alt="" />
                </div>
            </div>
            <ul className="flex gap-[32px] pl-[20px] text-[#545D6A] mt-[30px]">
                <li>Aksiyalar</li>
                <li>Smartfonlar</li>
                <li>Noutbooklar</li>
                <li>Kondetsionerlar</li>
                <li>Telivizorlar</li>
                <li>Muzlatgichlar</li>
                <li>Kiryuvish mashinalari</li>
                <li>Telivizorlar</li>
                <li>Kiryuvish mashinalari</li>
            </ul>
        </nav>
    );
};

export default Navbar;