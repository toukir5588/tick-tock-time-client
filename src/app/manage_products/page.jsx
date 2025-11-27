"use client";
import React, { useState, useEffect, useCallback } from "react";
import { useAuth } from "@/context/AuthProvider";
import { toast } from "react-toastify";
import Link from "next/link";
import Swal from "sweetalert2";
import { Trash2, Eye, Loader2 } from "lucide-react";

const API_BASE_URL = "http://localhost:5000";

export default function ManageProductsPage() {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = useCallback(async () => {
    if (!user?.email) {
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `${API_BASE_URL}/myProducts?email=${user.email}`
      );

      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        toast.error("Failed to fetch products.");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("An error occurred while fetching data.");
    } finally {
      setLoading(false);
    }
  }, [user?.email]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleDelete = async (productId) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This product will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      reverseButtons: true,
    });

    if (!result.isConfirmed) return;

    try {
      const response = await fetch(`${API_BASE_URL}/products/${productId}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (response.ok && data.deletedCount > 0) {
        Swal.fire({
          title: "Deleted!",
          text: "Product has been deleted.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        fetchProducts();
      } else {
        Swal.fire(
          "Error!",
          data.message || "Failed to delete product.",
          "error"
        );
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      Swal.fire("Error!", "Something went wrong.", "error");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh] bg-gray-50">
        <Loader2 className="w-8 h-8 animate-spin text-[#a8741a]" />
        <p className="ml-3 text-lg text-gray-700">Loading your products...</p>
      </div>
    );
  }

  if (!user?.email) {
    return (
      <div className="p-10 bg-white rounded-xl shadow-lg m-10 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-red-600">
          Authentication Required
        </h2>
        <p className="text-gray-600 mt-2">
          Please log in to manage your products.
        </p>
        <Link
          href="/login"
          className="mt-4 inline-block px-4 py-2 bg-[#a8741a] text-white rounded-lg hover:bg-[#8e6216]"
        >
          Go to Login
        </Link>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="p-10 bg-white rounded-xl shadow-lg m-10 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          No Products Found 📦
        </h2>
        <p className="text-gray-600 mt-2">
          You haven't added any products yet.
        </p>
        <Link
          href="/add_product"
          className="mt-4 inline-block px-4 py-2 bg-[#a8741a] text-white rounded-lg hover:bg-[#8e6216]"
        >
          Add New Product
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-xl shadow-2xl">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 border-b pb-4">
          Manage My Products ({products.length})
        </h1>

        {/* MOBILE RESPONSIVE CARD VIEW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-4">
          {products.map((product) => (
            <div
              key={product._id}
              className="p-4 border rounded-xl shadow-sm bg-white"
            >
              <div className="flex gap-4 items-center">
                <img
                  src={product.image}
                  className="w-20 h-20 object-cover rounded-md"
                  alt={product.name}
                />
                <div>
                  <h2 className="font-bold text-gray-800">{product.name}</h2>
                  <p className="text-gray-500 text-sm">{product.brand}</p>
                </div>
              </div>

              <div className="flex justify-between mt-4 text-sm">
                <span className="font-bold text-gray-700">
                  ${product.price.toFixed(2)}
                </span>
                <span
                  className={`px-3 py-1 text-xs rounded-full font-semibold ${
                    product.stock > 10
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  Stock: {product.stock}
                </span>
              </div>

              <div className="flex justify-between mt-4">
                <Link href={`/product/${product._id}`}>
                  <button className="btn btn-sm btn-ghost text-blue-500 hover:bg-blue-100">
                    <Eye />
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="btn btn-sm btn-ghost text-red-500 hover:bg-red-100"
                >
                  <Trash2 />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP TABLE VIEW */}
        <div className="overflow-x-auto hidden lg:block mt-8">
          <table className="table w-full text-base">
            <thead className="text-gray-600 uppercase bg-gray-100">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="text-[#8a6415]">
              {products.map((product, index) => (
                <tr key={product._id} className="hover:bg-gray-50 border-b">
                  <th>{index + 1}</th>
                  <td>
                    <img
                      src={product.image}
                      className="w-12 h-12 object-cover rounded-md"
                      alt="img"
                    />
                  </td>
                  <td className="font-semibold">{product.name}</td>
                  <td>{product.brand}</td>
                  <td className="font-bold">${product.price.toFixed(2)}</td>
                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        product.stock > 10
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {product.stock}
                    </span>
                  </td>
                  <td>
                    <div className="flex gap-2">
                      <Link href={`/products/${product._id}`} passHref>
                        <button
                          className="btn btn-sm btn-ghost text-blue-500 hover:bg-blue-100 tooltip"
                          data-tip="View Details"
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="btn btn-sm btn-ghost text-red-500 hover:bg-red-100"
                      >
                        <Trash2 />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
