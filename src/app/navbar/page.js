"use client";
import React from "react";
import { toast } from "react-toastify";
import { useAuth } from "@/context/AuthProvider";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import logo from '../../../public/image/logo.png';
import Image from "next/image";
import PrivateRoute from "@/components/PrivateRoute";

export default function NavbarPage() {
  const router = useRouter();
  const pathname = usePathname();
  const { user, logout, setUser, loading } = useAuth();

  const handleLogout = () => {
    logout()
      .then(() => {
        setUser(null);
        toast.success("You have been logged out successfully.");
        router.push("/login");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const activeClass = (path) =>
    `transition-all duration-300 hover:text-[#a8741a] ${
      pathname === path
        ? "text-[#a8741a] border-b-2 border-[#a8741a] font-semibold"
        : "text-black"
    }`;

  const links = (
    <>
      <li><Link className={activeClass("/")} href="/">Home</Link></li>
      <li><Link className={activeClass("/all_products")} href="/all_products">All Products</Link></li>
      <PrivateRoute>
        <li><Link className={activeClass("/about")} href="/about">About</Link></li>
      <li><Link className={activeClass("/contact")} href="/contact">Contact</Link></li>
      </PrivateRoute>
    </>
  );

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="navbar max-w-[1400px] mx-auto py-3 px-4">

        {/* LEFT SECTION */}
        <div className="navbar-start flex items-center">
          {/* Mobile Menu Button */}
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                color="#8a6415"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-56 p-3 shadow bg-white rounded-box border"
            >
              {links}
            </ul>
          </div>

          {/* LOGO */}
          <div className="ml-2">
            <Image src={logo} alt="Logo" width={130} height={45} className="cursor-pointer" />
          </div>
        </div>

        {/* CENTER NAV LINKS (Desktop Only) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6">
            {links}
          </ul>
        </div>

        {/* RIGHT SECTION */}
        <div className="navbar-end flex items-center gap-4">
          {loading ? (
            <span className="loading loading-spinner loading-md text-[#a8741a]"></span>
          ) : user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="cursor-pointer">
                <img
                  className="w-10 h-10 rounded-full border"
                  src={user?.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                  alt="profile"
                />
              </label>
              <div
                tabIndex={0}
                className="dropdown-content w-64 p-4 shadow bg-white rounded-xl border"
              >
                <h2 className="text-lg font-semibold text-center text-gray-900">{user?.displayName}</h2>
                <p className="text-sm text-center text-gray-600 mb-3">{user?.email}</p>

                <ul className="menu bg-gray-100 rounded-lg p-2 mb-3 text-sm text-gray-900">
                  <li><Link className="hover:text-[#a8741a] py-1" href="/user_dashboard">User Dashboard</Link></li>
                  <li><Link className="hover:text-[#a8741a] py-1" href="/add_product">Add Product</Link></li>
                  <li><Link className="hover:text-[#a8741a] py-1" href="/manage_products">Manage Products</Link></li>
                </ul>

                <button
                  onClick={handleLogout}
                  className="btn btn-sm w-full bg-[#a8741a] border-none text-white hover:bg-[#8a6415]"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link href="/login" className="btn border-[#8a6415] bg-[#8a6415]">Login</Link>
              <Link href="/signup" className="btn text-black hover:bg-[#8a6415] hover:text-white border-[#8a6415] btn-outline">SignUp</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
