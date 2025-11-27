'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Import your logo or a relevant image
import placeholderImage from '../../../public/image/logo.png'; 

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-16">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* --- Hero Section: Title and Tagline --- */}
        <motion.header 
          className="text-center mb-16"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#a8741a] mb-4">
            Our Story
          </h1>
          <p className="text-xl text-gray-600 font-medium">
            Quality and trust are the foundations of our platform.
          </p>
        </motion.header>

        {/* --- Section 1: Our Mission --- */}
        <motion.section 
          className="grid md:grid-cols-2 gap-12 items-center mb-20 p-8 bg-white shadow-xl rounded-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b-2 border-[#a8741a] pb-2 inline-block">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our main goal is to create a platform where users can easily find the **products** they need and exchange their goods or services with others. We emphasize transparency, trust, and quality. 
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              We are committed to strengthening the local economy and building a fair marketplace for everyone.
            </p>
            <Link href="/all_products" className="btn bg-[#a8741a] text-white hover:bg-black mt-6">
              Explore Our Products
            </Link>
          </div>
          <div className="hidden md:block">
            <Image 
              src={placeholderImage} 
              alt="Our Mission" 
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </motion.section>

        {/* --- Section 2: Our Values --- */}
        <motion.section 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-10">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <span className="text-4xl text-[#a8741a] mb-3 block">🤝</span>
              <h3 className="text-xl font-semibold mb-2">Trust and Transparency</h3>
              <p className="text-gray-600">We maintain complete transparency in every transaction, fostering trust among users.</p>
            </div>
            {/* Value 2 */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <span className="text-4xl text-[#a8741a] mb-3 block">⭐</span>
              <h3 className="text-xl font-semibold mb-2">Product Quality</h3>
              <p className="text-gray-600">We only feature the best and verified products on our platform.</p>
            </div>
            {/* Value 3 */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <span className="text-4xl text-[#a8741a] mb-3 block">🧑‍💻</span>
              <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
              <p className="text-gray-600">We ensure customer satisfaction through fast and effective support.</p>
            </div>
          </div>
        </motion.section>

        {/* --- Section 3: Call to Action (Contact Us) --- */}
        <motion.section 
          className="bg-[#a8741a] text-white p-10 rounded-xl shadow-2xl text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold mb-3">
            Do you have any questions?
          </h2>
          <p className="text-xl mb-6">
            Our team is always ready to assist you.
          </p>
          <Link href="/contact" className="btn bg-white text-[#a8741a] hover:bg-gray-200 border-none font-bold">
            Contact Us
          </Link>
        </motion.section>

      </div>
    </div>
  );
}