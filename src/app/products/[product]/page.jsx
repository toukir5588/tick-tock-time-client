'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { toast } from 'react-toastify';
import { Loader2, Zap, Tag, Star } from 'lucide-react';
import { useAuth } from '@/context/AuthProvider';

const API_BASE_URL = 'http://localhost:5000';


export default function ProductDetailsPage() {
    const params = useParams(); 
    const { user } = useAuth();
    const productId = params.product; 

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!productId) return;

        const fetchProductDetails = async () => {
            setLoading(true);
            setError(false);
            try {
                const response = await fetch(`${API_BASE_URL}/products/${productId}`);
                
                if (response.ok) {
                    const data = await response.json();
                    if (data) {
                        setProduct(data);
                    } else {
                        setError(true);
                        toast.error("Product not found.");
                    }
                } else {
                    setError(true);
                    toast.error("Failed to fetch product details.");
                }
            } catch (err) {
                console.error("Error fetching product details:", err);
                setError(true);
                toast.error("Network error occurred.");
            } finally {
                setLoading(false);
            }
        };

        fetchProductDetails();
    }, [productId]);

    const handleAddToCart = async () => {
        if (!user?.email) {
            toast.warn("Please log in to add items to your cart.");
            return;
        }

        if (product.stock <= 0) {
            toast.error("This product is currently out of stock.");
            return;
        }

        const cartData = {
            email: user.email,
            productId: product._id,
            quantity: 1, 
        };

        try {
            const response = await fetch(`${API_BASE_URL}/carts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cartData),
            });

            if (response.ok) {
                toast.success(`${product.name} added to cart!`);
            } else {
                const result = await response.json();
                toast.error(result.message || "Failed to add to cart.");
            }
        } catch (error) {
            console.error("Cart error:", error);
            toast.error("An error occurred while adding to cart.");
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[70vh] bg-gray-50">
                <Loader2 className="w-10 h-10 animate-spin text-[#a8741a]" />
                <p className="ml-4 text-xl text-gray-700">Loading Product Details...</p>
            </div>
        );
    }

    if (error || !product) {
        return (
            <div className="p-10 bg-white rounded-xl shadow-lg m-10 max-w-4xl mx-auto text-center min-h-[70vh]">
                <h2 className="text-3xl font-bold text-red-600 mb-4">Product Not Found 😔</h2>
                <p className="text-gray-600 mt-2">The product ID may be invalid or the item may have been deleted.</p>
                <button 
                    onClick={() => window.history.back()}
                    className="mt-6 inline-block px-6 py-3 bg-[#a8741a] text-white rounded-lg hover:bg-[#8e6216] transition duration-300"
                >
                    Go Back
                </button>
            </div>
        );
    }

    const { 
        name, 
        brand, 
        price, 
        description, 
        image, 
        stock, 
        rating, 
        status, 
        categories, 
        features, 
        tags 
    } = product;

    return (
        <div className="p-4 md:p-10 bg-gray-50 min-h-screen">
            <div className="max-w-6xl mx-auto bg-white p-8 rounded-2xl shadow-2xl">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    
                    <div className="relative overflow-hidden rounded-xl shadow-lg h-96 lg:h-auto">
                        <img 
                            src={image || 'https://placehold.co/600x600/cccccc/000?text=No+Image'} 
                            alt={name} 
                            className="w-full h-full object-cover transition duration-500 hover:scale-105"
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x600/cccccc/000?text=No+Image'; }}
                        />
                    </div>
                    
                    <div className="space-y-6">
                        <h1 className="text-4xl font-extrabold text-gray-900">{name}</h1>
                        <p className="text-xl text-gray-600">Brand: <span className="font-semibold text-[#a8741a]">{brand}</span></p>

                        <div className="flex items-center space-x-4 border-b pb-4">
                            <span className="text-5xl font-extrabold text-red-600">${price ? price.toFixed(2) : 'N/A'}</span>
                            <div className="flex items-center text-yellow-500">
                                {rating > 0 && Array(Math.round(rating)).fill().map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                                <span className="ml-2 text-gray-600 font-semibold">({rating ? rating.toFixed(1) : 'N/A'})</span>
                            </div>
                        </div>

                        <div className="flex items-center space-x-6">
                            <div className={`px-4 py-1 text-sm font-bold rounded-full ${stock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                {stock > 0 ? `In Stock: ${stock}` : 'Out of Stock'}
                            </div>
                            <div className="text-sm font-semibold uppercase text-blue-600 flex items-center">
                                <Zap className="w-4 h-4 mr-1"/> {status}
                            </div>
                        </div>

                        <p className="text-gray-700 leading-relaxed pt-4">{description}</p>
                        
                        {(features && features.length > 0) && (
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2 mt-4 flex items-center"><Tag className="w-5 h-5 mr-2 text-[#a8741a]"/> Key Features:</h3>
                                <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                    {features.map((feature, index) => (
                                        <li key={index} className="text-base">{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        
                        <div className="flex flex-wrap space-x-2 pt-4">
                            {categories?.map((cat, index) => (
                                <span key={index} className="px-3 py-1 text-xs font-medium bg-gray-200 text-gray-700 rounded-full mb-2">
                                    {cat}
                                </span>
                            ))}
                            {tags?.map((tag, index) => (
                                <span key={index} className="px-3 py-1 text-xs font-medium bg-[#f0e0c0] text-[#a8741a] rounded-full mb-2">
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        <button 
                            onClick={handleAddToCart}
                            disabled={product.stock <= 0}
                            className="w-full py-4 bg-[#a8741a] text-white font-bold text-lg rounded-xl hover:bg-[#8e6216] transition duration-300 shadow-md mt-6 disabled:bg-gray-400 disabled:cursor-not-allowed"
                        >
                            {product.stock > 0 ? `Add to Cart - $${price ? price.toFixed(2) : 'N/A'}` : 'Out of Stock'}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}