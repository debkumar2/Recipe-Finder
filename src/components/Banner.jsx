import React from 'react'
import bannerimg from '../assets/bannerGenerated.png';

const Banner = () => {
  const bannerImage = bannerimg;

  return (
    <div
      className='h-[85vh] w-full bg-cover bg-right bg-no-repeat relative flex items-center bg-[#fcfaf6]'
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="w-full px-14 flex relative z-10">
        <div className="w-full md:w-[60%] flex flex-col gap-8">

          {/* Redesigned Welcome Badge (Premium Glass Pill) */}
          <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-md border border-white shadow-sm px-5 py-2.5 rounded-full w-max mt-4">
            <span className="text-orange-700 font-extrabold text-xs tracking-[0.2em] uppercase">Welcome to Flavorly</span>
          </div>

          {/* Upgraded Massive Heading */}
          <h1 className="text-6xl lg:text-8xl font-bold text-[#1a1a1a] leading-[1.05] font-serif tracking-tighter">
            Discover.<br />
            Cook. <span className="text-[#c1121f] relative inline-block mt-2">
              Enjoy.
              <svg className="absolute w-full h-5 -bottom-2 left-0 text-yellow-400 drop-shadow-md" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 0" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          {/* Refined Subtitle */}
          <p className="text-gray-700 text-xl max-w-lg font-medium leading-relaxed">
            Find delicious recipes from around the world, specifically tailored to your unique taste and lifestyle.
          </p>

          {/* Premium Interactive Search Bar */}
          <div className="flex items-center bg-white/95 backdrop-blur-xl rounded-full p-2.5 shadow-[0_20px_50px_rgb(0,0,0,0.08)] border border-white/80 max-w-xl mt-2 transition-all duration-300 hover:shadow-[0_20px_50px_rgb(0,0,0,0.12)] focus-within:ring-4 focus-within:ring-red-100">
            <div className="px-5 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
            <input
              type="text"
              placeholder="Search recipes, ingredients, or chefs..."
              className="flex-1 outline-none text-gray-800 placeholder-gray-400 bg-transparent text-lg font-medium w-full"
            />
            <button className="bg-[#a4161a] hover:bg-[#800f13] text-white rounded-full px-8 py-4 flex items-center justify-center transition-all duration-300 shadow-[0_4px_15px_rgb(164,22,26,0.3)] hover:shadow-[0_6px_20px_rgb(164,22,26,0.5)] hover:-translate-y-0.5">
              <span className="font-bold text-lg hidden sm:block">Explore</span>
              <svg className="sm:hidden" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>
          </div>

          {/* Upgraded Floating Tags */}
          <div className="flex items-center gap-4 mt-2 flex-wrap">
            <span className="font-black text-gray-900 text-xs tracking-widest uppercase">Trending:</span>
            {['Breakfast', 'Paneer', 'Chicken', 'Quick Dinner'].map((tag) => (
              <span key={tag} className="px-5 py-2.5 bg-white/50 backdrop-blur-sm border border-white/60 text-gray-800 rounded-full text-sm font-bold hover:bg-white hover:shadow-[0_8px_20px_rgb(0,0,0,0.06)] cursor-pointer transition-all duration-300 hover:-translate-y-0.5">
                {tag}
              </span>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Banner
