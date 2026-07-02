
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Leaf, Coffee, Croissant, Utensils, UtensilsCrossed, Cake, CupSoda, ChevronLeft, ChevronRight, Cookie, Fish, Pizza, Apple } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';

const categories = [
  {
    name: 'Salads',
    icon: <Leaf size={20} className="text-white" />,
    color: 'bg-green-500',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Soups',
    icon: <Coffee size={20} className="text-white" />,
    color: 'bg-yellow-500',
    image: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Breakfast',
    icon: <Croissant size={20} className="text-white" />,
    color: 'bg-orange-500',
    image: 'https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Lunch',
    icon: <Utensils size={20} className="text-white" />,
    color: 'bg-red-400',
    image: 'https://images.unsplash.com/photo-1505576633757-0ac1084af824?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Dinner',
    icon: <UtensilsCrossed size={20} className="text-white" />,
    color: 'bg-purple-500',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Desserts',
    icon: <Cake size={20} className="text-white" />,
    color: 'bg-pink-500',
    image: 'https://images.unsplash.com/photo-1599785209707-a456fc1337bb?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Drinks',
    icon: <CupSoda size={20} className="text-white" />,
    color: 'bg-teal-400',
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=736&auto=format&fit=crop',
  },
  {
    name: 'Snacks',
    icon: <Cookie size={20} className="text-white" />,
    color: 'bg-yellow-600',
    image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=300&h=300&fit=crop&q=80',
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
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: '.custom-prev-btn',
            nextEl: '.custom-next-btn',
          }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
            1536: { slidesPerView: 6 },
          }}
          className="pb-12 pt-4 px-2"
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index} className="h-auto">
              {/* Cinematic Bento Card */}
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] rounded-[2rem] overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">

                {/* Full Background Image */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                />

                {/* Dark Gradient Overlay for Typography */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/90 opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Top Icon Badge - Tinted Glass to Solid */}
                <div className={`absolute top-4 right-4 sm:top-5 sm:right-5 w-10 h-10 sm:w-12 sm:h-12 rounded-full backdrop-blur-md flex items-center justify-center text-white border border-white/30 transition-all duration-500 z-20 ${category.color} bg-opacity-30 group-hover:bg-opacity-100 group-hover:scale-110 group-hover:border-transparent shadow-[0_4px_20px_rgba(0,0,0,0.2)]`}>
                  {category.icon}
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 w-full p-5 sm:p-6 z-20 flex flex-col justify-end">
                  <h3 className="text-white font-bold text-2xl sm:text-3xl tracking-tight mb-2 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 ease-out drop-shadow-md">
                    {category.name}
                  </h3>

                  {/* Expanding Line and Text Animation */}
                  <div className="flex items-center space-x-3 overflow-hidden mt-1 h-6">
                    <div className={`h-[3px] w-0 group-hover:w-8 sm:group-hover:w-12 transition-all duration-500 ease-out delay-100 rounded-full ${category.color}`}></div>
                    <span className="text-white/95 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                      Explore
                    </span>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Categories;
