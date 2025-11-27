// ProductCard.jsx
import AnimationY from "@/components/Animation/AnimationY";
import Link from "next/link";
import React from "react";

export default function ProductCard({product}) {
    // console.log(product);

  const {_id,name,price,brand,category,rating,stock,features,tags,description,image,} = product;

  // helper to render star icons
  const stars = Array.from({ length: 5 }).map((_, i) => (
    <svg
      key={i}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className={`w-4 h-4 inline-block mr-0.5 ${i < rating ? "text-yellow-500" : "text-gray-300"}`}
      fill="currentColor"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.347l-2.986 2.034c-.784.57-1.839-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L3.34 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.95-.69l1.07-3.292z" />
    </svg>
  ));

  return (
    <div className="max-w-xs mx-auto bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200">
      <AnimationY>
        <div className="p-6 pt-8 text-center">
        <div className="w-44 h-44 mx-auto mb-4 ">
          <img src={image} alt={name} className="w-full h-full object-contain" />
        </div>

        <div className="text-xs tracking-widest  text-[#8b5903] mb-2">{brand}</div>

        <h3 className="whitespace-pre-line min-h-[50px] text-center text-lg font-medium text-gray-800 mb-3">
          {name}
        </h3>

        <div className="mb-3">
          <div className="inline-flex h-[30px] items-center">{stars}</div>
        </div>
        <div className="flex justify-between items-center">

        <p className="text-gray-500  text-sm">Price: {price}$</p>
        <p className="text-gray-500  text-sm">Stock: {stock}</p>
        </div>
        <div className=" mt-4">
          
          <Link href={`/products/${_id}`}>
          <button className=" w-full btn btn-outline hover:bg-[#7c5004] border-[#8b5b08]">Vew Details</button>
          </Link>
        </div>
      </div>
      </AnimationY>
    </div>
  );
}