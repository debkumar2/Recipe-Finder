import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Leaf, Coffee, Croissant, Utensils, UtensilsCrossed, Cake, CupSoda, ChevronLeft, ChevronRight, Cookie, Fish, Pizza, Apple } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';

const categories = [
  {
    name: 'Salads',
    icon: <Leaf size={20} className="text-white" />,
    color: 'bg-green-500',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop&q=80',
  },
  {
    name: 'Soups',
    icon: <Coffee size={20} className="text-white" />,
    color: 'bg-yellow-500',
    image: 'https://images.unsplash.com/photo-1547592180-85f531ce37fb?w=300&h=300&fit=crop&q=80',
  },
  {
    name: 'Breakfast',
    icon: <Croissant size={20} className="text-white" />,
    color: 'bg-orange-500',
    image: 'https://images.unsplash.com/photo-1494390248081-4e580819fd71?w=300&h=300&fit=crop&q=80',
  },
  {
    name: 'Lunch',
    icon: <Utensils size={20} className="text-white" />,
    color: 'bg-red-400',
    image: 'https://images.unsplash.com/photo-1565299624-b7ce50c8e2bd?w=300&h=300&fit=crop&q=80',
  },
  {
    name: 'Dinner',
    icon: <UtensilsCrossed size={20} className="text-white" />,
    color: 'bg-purple-500',
    image: 'https://images.unsplash.com/photo-1544025162-836b7da5015b?w=300&h=300&fit=crop&q=80',
  },
  {
    name: 'Desserts',
    icon: <Cake size={20} className="text-white" />,
    color: 'bg-pink-500',
    image: 'https://images.unsplash.com/photo-1563729784474-d77fb09335a8?w=300&h=300&fit=crop&q=80',
  },
  {
    name: 'Drinks',
    icon: <CupSoda size={20} className="text-white" />,
    color: 'bg-teal-400',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=300&h=300&fit=crop&q=80',
  },
  {
    name: 'Snacks',
    icon: <Cookie size={20} className="text-white" />,
    color: 'bg-yellow-600',
    image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=300&h=300&fit=crop&q=80',
  },
  {
    name: 'Seafood',
    icon: <Fish size={20} className="text-white" />,
    color: 'bg-blue-400',
    image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=300&h=300&fit=crop&q=80',
  },
  {
    name: 'Fast Food',
    icon: <Pizza size={20} className="text-white" />,
    color: 'bg-red-500',
    image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=300&h=300&fit=crop&q=80',
  },
  {
    name: 'Healthy',
    icon: <Apple size={20} className="text-white" />,
    color: 'bg-green-600',
    image: 'https://images.unsplash.com/photo-1490645935980-d14d3ba92ce4?w=300&h=300&fit=crop&q=80',
  },
];

const Categories = () => {
  return (
    <div className="w-full px-6 md:px-14 lg:px-20 py-12">
      {/* Header section */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Browse by Categories</h2>

        {/* Navigation Buttons */}
        <div className="flex space-x-3">
          <button className="custom-prev-btn w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer z-10">
            <ChevronLeft size={20} />
          </button>
          <button className="custom-next-btn w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer z-10">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Swiper Slider */}
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={2}
          navigation={{
            prevEl: '.custom-prev-btn',
            nextEl: '.custom-next-btn',
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
            1280: { slidesPerView: 7 },
          }}
          className="pb-4"
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index} className="h-auto">
              <div className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300 h-full group cursor-pointer">
                {/* Image Container */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden mb-6 relative group-hover:scale-105 transition-transform duration-300 shadow-md">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Icon Container */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center -mt-10 mb-3 relative z-10 shadow-md border-2 border-white ${category.color}`}>
                  {category.icon}
                </div>

                {/* Text */}
                <h3 className="text-gray-800 font-semibold text-sm sm:text-base">{category.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Categories;
