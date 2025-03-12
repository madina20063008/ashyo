import React from "react";
import phone from '../assets/phone.png'
const Header = () => {
  return (
    <div className="bg-[#F3F0F0] mt-[30px] mb-[100px]">
      <div className="w-[1165px] mx-auto flex justify-between">
        <div className="mt-[140px]">
          <h1 className="font-black text-[44px]">Siz kutgan Xiaomi 12 Mi Laite</h1>
          <p className="text-[#545D6A] pt-[6px]">Orginallik va qulay narxni o'zida jamlagan  Xiaomi 12 Mi Laite  siz uchun eng yaxshi <br /> arziydigan takliflarimizdan biridir!ii</p>
          <button className="bg-[#134E9B] text-white flex gap-[20px] py-[12px] px-[46px] font-medium text-[16px] rounded-[6px] mt-[22px] h-[50px]">Batafsil</button>
          <div className="flex mt-[70px]">
          <span className="w-3 h-3 bg-white rounded-full mx-1 mt-[10px]"></span>
          <span className="w-3 h-3 bg-white rounded-full mx-1 mt-[10px]"></span>
          <span className="w-8 h-8 bg-[#95BEF3] rounded-full mx-1 border border-[8px] border-white "></span>
          <span className="w-3 h-3 bg-white rounded-full mx-1 mt-[10px]"></span>
          <span className="w-3 h-3 bg-white rounded-full mx-1 mt-[10px]"></span>
        </div>
        </div>
        <img src={phone} alt="" className="h-[450px]" />
        
      </div>
    </div>
  );
};

export default Header;
