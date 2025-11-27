'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react'; 

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ContactPage() {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        <motion.header 
          className="text-center mb-12"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h1 className="text-5xl font-extrabold text-[#a8741a] mb-3">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600">
            Write to us for any questions, feedback, or support.
          </p>
        </motion.header>
        
        <div className="grid md:grid-cols-2 gap-12">
            
            <motion.div 
                className="bg-white p-8 rounded-xl shadow-2xl"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Your Name</span>
                        </label>
                        <input type="text" placeholder="Your Full Name" className="input input-bordered w-full" required />
                    </div>
                    
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Email Address</span>
                        </label>
                        <input type="email" placeholder="Your Email" className="input input-bordered w-full" required />
                    </div>

                    <div>
                        <label className="label">
                            <span className="text-base label-text">Subject</span>
                        </label>
                        <input type="text" placeholder="Subject of the message" className="input input-bordered w-full" required />
                    </div>
                    
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Your Message</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-24 w-full" placeholder="Write your message here..." required></textarea>
                    </div>
                    
                    <button type="submit" className="btn w-full bg-[#a8741a] text-white hover:bg-black mt-6 text-lg">
                        Send Message
                    </button>
                </form>
            </motion.div>

            <motion.div 
                className="p-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                    <div>
                        <div className="flex items-center space-x-4">
                            <Mail className="w-6 h-6 text-[#a8741a] flex-shrink-0" />
                            <div>
                                <p className="font-semibold text-gray-700">Email</p>
                                <a href="toukirahamad95@gmail.com" className="text-gray-500 hover:text-[#a8741a]">support@yourproject.com</a>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <div className="flex items-center space-x-4">
                            <Phone className="w-6 h-6 text-[#a8741a] flex-shrink-0" />
                            <div>
                                <p className="font-semibold text-gray-700">Phone</p>
                                <a href="tel:+8801609767487" className="text-gray-500 hover:text-[#a8741a]">+880 1609767487</a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-start space-x-4">
                            <MapPin className="w-6 h-6 text-[#a8741a] flex-shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-gray-700">Address</p>
                                <p className="text-gray-500">
                                    123, Main Road, Dhaka, Bangladesh
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Our Location</h3>
                    <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.00977797705!2d90.34723920959828!3d23.780777727145558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087029b35%3A0xb8564fa64e7c703a!2sDhaka!5e0!3m2!1sen!2sbd!4v1700980000000!5m2!1sen!2sbd" 
                            width="100%" 
                            height="100%" 
                            style={{border:0}} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

            </motion.div>
        </div>

      </div>
    </div>
  );
}