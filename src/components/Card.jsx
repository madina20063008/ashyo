import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import button1 from '../assets/button1.png'
import cardButton from '../assets/button.png'


const ProductSlider = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="w-[90%] mx-auto">
      <h2 className="text-xl font-bold text-[32px] mb-4 mt-[80px]">Most Popular Product</h2>
      
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        
        {products.map((product) => {
          const installmentPrice = (product.price / 6).toFixed(2);

          return (
            <SwiperSlide key={product.id}>
              <div className="border rounded-lg p-4 shadow-sm">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[200px] object-contain"
                />
                <h3 className="text-md font-semibold mt-2 truncate">
                  {product.title}
                </h3>
                <p className="text-gray-500 text-sm">{product.category}</p>
                <p className="text-lg font-bold mt-2">{product.price} USD</p>
                <div className="flex">
                  <p className="text-pink-500 text-[16px] bg-pink-100 px-2 py-1 mt-1 rounded w-[150px]">
                    6 oy / {installmentPrice} USD
                  </p>
                  <img src={cardButton} alt="" className="mx-[10px]"/>
                  <img src={button1} alt="" />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <h2 className="text-xl font-bold mb-4 mt-[80px] text-[32px]">Most Popular Product</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {products.map((product) => {
          const installmentPrice = (product.price / 6).toFixed(2);

          return (
            <SwiperSlide key={product.id}>
              <div className="border rounded-lg p-4 shadow-sm">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[200px] object-contain"
                />
                <h3 className="text-md font-semibold mt-2 truncate">
                  {product.title}
                </h3>
                <p className="text-gray-500 text-sm">{product.category}</p>
                <p className="text-lg font-bold mt-2">{product.price} USD</p>
                <div className="flex">
                  <p className="text-pink-500 text-[16px] bg-pink-100 px-2 py-1 mt-1 rounded w-[150px]">
                    6 oy / {installmentPrice} USD
                  </p>
                  <img src={cardButton} alt="" className="mx-[10px]"/>
                  <img src={button1} alt="" />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <h2 className="text-xl font-bold mb-4 mt-[80px] text-[32px]">Most Popular Product</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {products.map((product) => {
          const installmentPrice = (product.price / 6).toFixed(2);

          return (
            <SwiperSlide key={product.id}>
              <div className="border rounded-lg p-4 shadow-sm">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[200px] object-contain"
                />
                <h3 className="text-md font-semibold mt-2 truncate">
                  {product.title}
                </h3>
                <p className="text-gray-500 text-sm">{product.category}</p>
                <p className="text-lg font-bold mt-2">{product.price} USD</p>
                <div className="flex">
                  <p className="text-pink-500 text-[16px] bg-pink-100 px-2 py-1 mt-1 rounded w-[150px]">
                    6 oy / {installmentPrice} USD
                  </p>
                  <img src={cardButton} alt="" className="mx-[10px]"/>
                  <img src={button1} alt="" />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
