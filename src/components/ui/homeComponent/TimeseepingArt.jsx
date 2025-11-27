import React from 'react';
import ShippingAndSupportFeatures from './delivary/ShippingAndSupportFeatures';

const TimeseepingArt = () => {

  const goldTone = 'text-amber-700';
  const borderTone = 'border-amber-700';
  const hoverBorderTone = 'hover:border-amber-800';

  return (
    <div className="bg-white py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">

          <div className="relative mb-16 lg:mb-0 order-2 lg:order-1">
            
            <div className="relative w-full h-80 sm:h-96 bg-gray-200 rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://i.ibb.co.com/nN1bF7Pr/Website-News-Images-0014-WOS-25th-Anniversary-2100x1400-0001-TSU07791.webp')" }}>
                <div className="w-full h-full bg-cover bg-center" />
              </div>
            </div>
            <div className={`
              absolute top-full left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-40 h-40 -mt-10 bg-white p-1 rounded-lg shadow-xl border border-white
              lg:top-1/2 lg:right-[-25%] lg:-translate-x-0 lg:-translate-y-1/2 lg:w-64 lg:h-64 lg:border-2 lg:p-2 lg:-mt-0
            `}>
              <div className="w-full h-full bg-cover bg-center  rounded-md" style={{ backgroundImage: "url('/placeholder-small-watch.jpg')" }}>
                <img 
                  src="https://i.ibb.co.com/JwhHVP0J/Screenshot-1.jpg" 
                  alt="Smartwatch closeup"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </div>
          </div>
          
          <div className="text-black mb-10 lg:mb-0 order-1 lg:order-2 lg:pl-10">
            
            <p className={`text-sm font-semibold tracking-widest uppercase mb-2 font-serif ${goldTone}`}>
              THE ART OF TIMEKEEPING
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 sm:mb-6 text-black">
              Experience **Craftsmanship** <br className="hidden sm:inline" /> in **Motion**
            </h2>

            <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-lg leading-relaxed">
              Watch how precision engineering meets timeless design. Our collection is more than just a watch—it's a statement of style and purpose.
            </p>

            <div className="mt-8 sm:mt-10">
              <a 
                href="#" 
                className={`inline-flex justify-center items-center py-3 px-6 text-sm font-medium border-2 ${borderTone} ${goldTone} uppercase tracking-widest transition duration-150 ease-in-out ${hoverBorderTone}`}
              >
                SHOP NOW
              </a>
            </div>
          </div>
          
        </div>
      </div>
      <div>
        <ShippingAndSupportFeatures/>
      </div>
    </div>
  );
};

export default TimeseepingArt;