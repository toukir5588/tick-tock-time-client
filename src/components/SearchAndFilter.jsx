'use client';

import React, { useState, useMemo, useEffect } from 'react';
import ProductCard from "@/components/productCard/cardPage";

export default function SearchAndFilter({ initialProducts }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [allProducts, setAllProducts] = useState(initialProducts); 
  
  useEffect(() => {
    setAllProducts(initialProducts); 
  }, [initialProducts]); 

  const filteredProducts = useMemo(() => {
    if (!searchTerm || allProducts.length === 0) {
      return allProducts;
    }

    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    return allProducts.filter(product =>
      product.name && product.name.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [allProducts, searchTerm]);

  return (
    <>
    
      <div className="flex justify-end mb-10">
        <input
          type="text"
          placeholder="🔍 Search by name...  "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          
          className="w-full text-gray-700 placeholder:text-gray-400 max-w-xs p-3 border border-gray-300 rounded-lg focus:border-[#b8860b] focus:ring-1 focus:ring-[#b8860b] transition shadow-sm"
        />
      </div>

      {filteredProducts.length === 0 && searchTerm ? (
        <p className="text-center text-xl text-gray-500 mt-10">
          No products found matching "{searchTerm}".
        </p>
      ) : (
        <div className="grid grid-cols-1 text-gray-800 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}