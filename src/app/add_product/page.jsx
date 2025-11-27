'use client';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '@/context/AuthProvider';

const API_BASE_URL = 'http://localhost:5000';

const initialFormState = {
    brand: '',
    name: '',
    price: '',
    status: 'available',
    rating: '',
    stock: '',
    categories: '',
    features: '',
    tags: '',
    description: '',
    image: '',
};

export default function AddProductPage() {
    const { user } = useAuth();
    const [formData, setFormData] = useState(initialFormState);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const productData = {
            ...formData,
            email: user?.email, 
            price: parseFloat(formData.price) || 0,
            rating: parseFloat(formData.rating) || 0,
            stock: parseInt(formData.stock) || 0,
            categories: formData.categories.split(',').map(item => item.trim()).filter(item => item),
            features: formData.features.split(',').map(item => item.trim()).filter(item => item),
            tags: formData.tags.split(',').map(item => item.trim()).filter(item => item),
        };

        try {
            const response = await fetch(`${API_BASE_URL}/products`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productData),
            });

            const result = await response.json();

            if (response.ok) {
                toast.success("Product added successfully!");
                setFormData(initialFormState);
            } else {
                toast.error(result.message || "Failed to add product. Please check the fields.");
            }
        } catch (error) {
            console.error("Error adding product:", error);
            toast.error("An error occurred. Check console for details.");
        } finally {
            setLoading(false);
        }
    };

    const inputClass = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a8741a]";
    const labelClass = "block text-sm font-medium text-gray-700 mb-1";

    return (
        <div className="bg-gray-50 min-h-screen py-10">
            <div className="max-w-4xl mx-auto text-gray-900 placeholder:text-gray-500 bg-white p-8 rounded-xl shadow-2xl">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-8 border-b pb-4">
                    Add New Product ⌚
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className={labelClass}>Product Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={inputClass}
                                placeholder="e.g., Premium Stainless Steel Chronograph Watch"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="brand" className={labelClass}>Brand</label>
                            <input
                                type="text"
                                id="brand"
                                name="brand"
                                value={formData.brand}
                                onChange={handleChange}
                                className={inputClass}
                                placeholder="e.g., SteelWave"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label htmlFor="price" className={labelClass}>Price (USD)</label>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                className={inputClass}
                                placeholder="e.g., 29.00"
                                step="0.01"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="stock" className={labelClass}>Stock Quantity</label>
                            <input
                                type="number"
                                id="stock"
                                name="stock"
                                value={formData.stock}
                                onChange={handleChange}
                                className={inputClass}
                                placeholder="e.g., 34"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="status" className={labelClass}>Status</label>
                            <select
                                id="status"
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                className={inputClass}
                            >
                                <option value="available">Available</option>
                                <option value="out_of_stock">Out of Stock</option>
                                <option value="coming_soon">Coming Soon</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="rating" className={labelClass}>Rating (1-5)</label>
                            <input
                                type="number"
                                id="rating"
                                name="rating"
                                value={formData.rating}
                                onChange={handleChange}
                                className={inputClass}
                                placeholder="e.g., 4.7"
                                step="0.1"
                                min="0"
                                max="5"
                            />
                        </div>
                        <div>
                            <label htmlFor="image" className={labelClass}>Image URL (Main)</label>
                            <input
                                type="url"
                                id="image"
                                name="image"
                                value={formData.image}
                                onChange={handleChange}
                                className={inputClass}
                                placeholder="e.g., https://i.ibb.co/..."
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-6 bg-gray-50 p-6 rounded-lg border border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-800">Advanced Details (Comma Separated)</h3>
                        
                        <div>
                            <label htmlFor="categories" className={labelClass}>Categories (separated by comma)</label>
                            <input
                                type="text"
                                id="categories"
                                name="categories"
                                value={formData.categories}
                                onChange={handleChange}
                                className={inputClass}
                                placeholder="e.g., Chronograph, Stainless Steel, Formal"
                            />
                        </div>
                        <div>
                            <label htmlFor="features" className={labelClass}>Key Features (separated by comma)</label>
                            <input
                                type="text"
                                id="features"
                                name="features"
                                value={formData.features}
                                onChange={handleChange}
                                className={inputClass}
                                placeholder="e.g., Full stainless steel body, Water-resistant"
                            />
                        </div>
                        <div>
                            <label htmlFor="tags" className={labelClass}>Tags (separated by comma)</label>
                            <input
                                type="text"
                                id="tags"
                                name="tags"
                                value={formData.tags}
                                onChange={handleChange}
                                className={inputClass}
                                placeholder="e.g., stainless, chronograph, premium"
                            />
                        </div>
                    </div>


                    <div>
                        <label htmlFor="description" className={labelClass}>Description</label>
                        <textarea
                            id="description"
                            name="description"
                            rows="4"
                            value={formData.description}
                            onChange={handleChange}
                            className={inputClass}
                            placeholder="A brief description of the product..."
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 px-4 bg-[#a8741a] text-white font-bold rounded-lg hover:bg-[#8e6216] transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                        {loading ? (
                            <>
                                <span className="loading loading-spinner loading-sm mr-2"></span>
                                Adding Product...
                            </>
                        ) : (
                            "Add This Product"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}