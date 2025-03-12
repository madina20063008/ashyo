import React from "react";
import artel from "../assets/brands/artel.png";
import apple from "../assets/brands/apple.png";
import button from "../assets/brands/button.png";
import huawei from "../assets/brands/huawei.png";
import mi from "../assets/brands/mi.png";
import nokia from "../assets/brands/nokia.png";
import samsung from "../assets/brands/samsung.png";
import vivo from "../assets/brands/vivo.png";

const BrandGrid = () => {
  return (
    <div className="grid grid-cols-4 p-0 m-0 w-[1165px] mx-auto gap-[10px] h-[210px] mb-[108px]"> 
      <div className="m-0 p-0 ">
        <img src={artel} alt="Artel" className="mb-[10px]"/>
        <img src={apple} alt="Apple" className="h-[179px]"/>
      </div>
      <div className="m-0 p-0">
      <img src={samsung} alt="Samsung" className="mb-[10px] h-[173px]"/>
      <img src={vivo} alt="Vivo" />
      </div>
      <div className="m-0 p-0">
        <img src={nokia} alt="Nokia" className="mb-[10px] h-[137px]" />
        <img src={huawei} alt="Huawei"/>
      </div>
      <div className="m-0 p-0">
        <img src={mi} alt="Xiaomi" className="mb-[10px]"/>
        <img src={button} alt="More" />
      </div>
      
    </div>
  );
};

export default BrandGrid;