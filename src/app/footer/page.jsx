import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../../../public/image/logo.png';
import Image from "next/image";
import AnimationY from '@/components/Animation/AnimationY';

const StoreFooter = () => {
  const textColor = 'text-gray-700';
  const titleColor = 'text-[#724902]';
  const bgColor = 'bg-gray-100';
  const copyrightColor = 'text-gray-500';

  const brandBrownLight = 'border-[#a8741a]';
  const brandBrownDark = 'text-[#724902]';
  const brandBrownHover = 'hover:bg-amber-100';

  return (
    <footer className={`${bgColor} ${textColor} py-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimationY>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          <div>
            <div className="space-y-4">
              <div>
                <Image src={logo} alt="Logo" width={150} height={30} />
              </div>
              <p className="text-sm leading-relaxed max-w-xs">
                Tik-Tok-Time is a dynamic and innovative online store offers watch products to customers worldwide.
              </p>
              
              <div className="text-sm space-y-1 pt-2">
                <p>
                  <a href="#" className="underline hover:text-gray-900">
                    Find a location nearest you. See Our Stores
                  </a>
                </p>
                <p>
                  <span className="font-semibold mr-1">T:</span> +(08) 9055 0269
                </p>
                <p>
                  <span className="font-semibold mr-1">E:</span> example@example.com
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className={`${titleColor} text-md  font-semibold uppercase tracking-widest mb-4`}>
              INFORMATION
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-gray-900 transition">News</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Contact</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Search</a></li>
            </ul>
          </div>

          <div>
            <h4 className={`${titleColor} text-md font-semibold uppercase tracking-widest mb-4`}>
              SUPPORT
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-gray-900 transition">Collections</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Shop</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Orders</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Wishlist</a></li>
            </ul>
          </div>

          <div>
            <h4 className={`${titleColor} text-md font-semibold uppercase tracking-widest mb-4`}>
              SUBSCRIBE FOR UPDATES
            </h4>
            <p className="text-sm mb-4 leading-relaxed">
              Sign up now, and don't miss out on updates on Sale and Special offers again.
            </p>

            <div className="flex w-full max-w-xs">
              <input
                type="email"
                placeholder="Your email"
                className={`py-2 px-3 text-sm border ${brandBrownLight} focus:border-[#724902] focus:ring-0 flex-grow bg-white`}
              />
              <button
                type="submit"
                className={`py-2 px-4 text-sm font-medium border ${brandBrownLight} ${brandBrownDark} ${brandBrownHover} transition tracking-wider uppercase`}
                style={{ minWidth: '100px' }} 
              >
                Subscribe
              </button>
            </div>

            <div className="flex space-x-3 mt-6">
              <a href="#" className={`w-8 h-8 flex items-center justify-center border ${brandBrownLight} ${brandBrownDark} ${brandBrownHover} transition rounded-full`}>
                <FaFacebookF className="w-3 h-3" />
              </a>
              <a href="#" className={`w-8 h-8 flex items-center justify-center border ${brandBrownLight} ${brandBrownDark} ${brandBrownHover} transition rounded-full`}>
                <FaTwitter className="w-3 h-3" />
              </a>
              <a href="#" className={`w-8 h-8 flex items-center justify-center border ${brandBrownLight} ${brandBrownDark} ${brandBrownHover} transition rounded-full`}>
                <FaInstagram className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
        </AnimationY>
      </div>

     <AnimationY>
         <div className={`border-t border-gray-200 mt-12 pt-8 text-center text-xs ${copyrightColor}`}>
        Copyright © 2025 <span className="font-semibold text-gray-700">Tik-Tok-Time</span>. All rights reserved
      </div>
     </AnimationY>
    </footer>
  );
};

export default StoreFooter;