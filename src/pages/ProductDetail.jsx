
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import truck from '../assets/CardDetail/truck.png'
import shop from '../assets/CardDetail/shop.png'
import clock from '../assets/CardDetail/clock.png'
import { LineStrokeColorVar } from "antd/es/progress/style";


const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="text-center text-lg font-bold">Loading...</div>;
  }
  const installmentPrice = (product.price / 6).toFixed(2);
  return (
    <div className="w-[1165px] mx-auto mt-[50px] mb-[30px]">
      <h1 className="text-[32px] font-bold">{product.title}</h1>
      <div className="container mx-auto p-8 flex">

        <div className="w-1/2 flex">
          <div className=" gap-2">
            {[...Array(4)].map((_, index) => (
              <img
                key={index}
                src={product.image}
                alt={`Thumbnail ${index + 1}`}
                className="w-16 h-16 border rounded-lg mr-[20px] mb-[20px]"
              />
            ))}
          </div>
          <div className="border rounded-lg p-4">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[400px] object-contain"
            />
          </div>

        </div>

        <div className="w-1/2 px-8">
          <div className="flex gap-[15px] mt-[30px]">
            <p className="text-[#515D6C] mt-[10px]">Narxi:</p>
            <h2 className="text-3xl font-bold ">{product.price} USD</h2>
          </div>
          <div className="mt-[40px] py-[19px] w-[470px] text-center bg-[#EBEFF3] rounded-lg">
            <p>
              6 oy / {installmentPrice} USD
            </p>
          </div>
          <button className=" text-[#134E9B] border border-[#134E9B] py-[18px] px-[55px] rounded-lg mt-4 mr-[20px]">
            Savatga qo‘shish
          </button>
          <button className="bg-[#134E9B] text-white py-[18px] px-[71px] rounded-lg mt-4">
            Xarid qilish
          </button>

          <div className="mt-8">
            
            <div className="flex gap-[16px] mt-[46px]">
              <img src={truck} alt="" />
              <p className="text-[#06172DB2]">Yetkazib berish O’zbekiston bo’ylab</p>
            </div>
            <div className="flex gap-[16px] mt-[20px]">
              <img src={shop} alt="" />
              <p className="text-[#06172DB2]">Do’kondi o’zidan olib ketishingiz mumkin</p>
            </div>
            <div className="flex gap-[16px] mt-[20px]">
              <img src={clock} alt="" />
              <p className="text-[#06172DB2]">Tahminiy yetkazib berish vaqti 1 kundan 3 kungacha......</p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
      <h3 className="text-xl font-semibold border-b pb-2">Telefon xususiyatlari</h3> 
            <ul className="mt-4 text-[#545D6A]">
              <li className="flex mt-[25px] border-b border-dashed border-[#545D6A] pb-[20px]"><p className="pr-[242px] w-[134px]">Brand:</p> FakeStore</li>
              <li className="flex mt-[25px] border-b border-dashed border-[#545D6A] pb-[20px]"><p className="pr-[242px] w-[134px]">Category:</p> {product.category}</li>
              <li className="flex mt-[25px] border-b border-dashed border-[#545D6A] pb-[20px]"><p className="pr-[242px] w-[134px]">Rating:</p> {product.rating.rate} ⭐ ({product.rating.count} reviews)</li>
              <li className="flex mt-[25px] border-b border-dashed border-[#545D6A] pb-[20px]"><p className="pr-[242px] w-[134px]">Description</p> {product.description}</li>
            </ul> 
      </div>
    </div>
  );
};

export default ProductDetail;
