import React from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TestimonialCard = ({ name, location, review, rating }) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-sm mx-auto h-full flex flex-col justify-between">
      <div>
        <span className="text-4xl text-gray-300 font-serif leading-none absolute -mt-4 -ml-2">“</span>
        
        <p className="text-gray-600 italic mb-4 mt-2">
          {review}
        </p>
      </div>

      <div>
        <div className="flex text-amber-500 mb-2">
          {[...Array(rating)].map((_, i) => (
            <FaStar key={i} className="w-4 h-4" />
          ))}
        </div>
        <p className="font-semibold text-gray-800">{name}</p>
        <p className="text-sm text-gray-500">{location}</p>
      </div>
    </div>
  );
};

const BlogCard = ({ imageSrc, title, date, comments }) => {
  return (
    <div className="bg-white group overflow-hidden shadow-lg h-full">
      <div className="overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-4 md:p-6">
        <div className="text-xs text-gray-500 mb-2 uppercase tracking-wide">
          {date} | {comments} Comments
        </div>
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-amber-700 transition duration-300">
          {title}
        </h3>
      </div>
    </div>
  );
};

const WatchJournalSection = () => {
  const testimonials = [
    { name: "Tanvir Rajak", location: "Bangalore, IN", review: "The craftsmanship is truly outstanding. It's elegant enough for boardroom meetings and durable enough for everyday wear.", rating: 5 },
    { name: "Maya Thompson", location: "New York, US", review: "This watch exceeded my expectations. It's the perfect blend of minimalism and luxury — I get compliments every time I wear it.", rating: 5 },
    { name: "Ryan Patel", location: "London, UK", review: "I needed something stylish but functional. Their smart fitness watch keeps up with my workouts and still looks sharp all day.", rating: 4 },
  ];

  const blogPosts = [
    { 
      imageSrc: "https://i.ibb.co.com/CKhxWsNb/20077d35-0f55-4648-a722-f50e7a237353.jpg",
      title: "How to Choose the Perfect Watch for Any Occasion", 
      date: "April 11, 2024", 
      comments: 0 
    },
    { 
      imageSrc: "https://i.ibb.co.com/RGZjFTMt/842d3afc-1138-49e9-bf9c-2226a0bc5c63-800x745.jpg", 
      title: "Smartwatch vs Traditional Watch: Which One Suits You?", 
      date: "April 11, 2024", 
      comments: 0 
    },
  ];

  return (
    <div className="relative pt-16 pb-24" style={{ backgroundColor: '#F0F0F0', backgroundImage: 'url(/path/to/gradient_texture.jpg)', backgroundSize: 'cover' }}>
      
      {/* Testimonial Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h4 className="text-center text-sm font-semibold uppercase tracking-widest text-gray-600 mb-2">
          CUSTOMERS CHOOSE US
        </h4>
        <h2 className="text-center text-3xl md:text-4xl font-serif text-gray-800 mb-12">
          Trusted by **Watch Lovers Worldwide**
        </h2>

        {/* Testimonials Grid/Slider Container - Static Grid */}
        <div className="relative">
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-10 hidden md:block p-3 rounded-full bg-white/50 hover:bg-white transition">
            <FaChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <TestimonialCard key={index} {...t} />
            ))}
          </div>

          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-10 hidden md:block p-3 rounded-full bg-white/50 hover:bg-white transition">
            <FaChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Blog Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <h4 className="text-center text-sm font-semibold uppercase tracking-widest text-gray-600 mb-4">
          NOW ON OUR TIMESPACES
        </h4>
        <h2 className="text-center text-3xl md:text-4xl font-serif text-gray-800 mb-12">
          From the **Watch Journal**
        </h2>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchJournalSection;