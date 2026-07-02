import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';

const testimonials = [
    {
        id: 1,
        name: "Ananya S.",
        role: "Home Cook",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 5,
        text: "Flavorly has made cooking so much fun and easy! I discover new recipes every day."
    },
    {
        id: 2,
        name: "Rohit M.",
        role: "Food Blogger",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        text: "The meal planner is a game changer. Super helpful and clean interface!"
    },
    {
        id: 3,
        name: "Priya K.",
        role: "Health Enthusiast",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        rating: 5,
        text: "Love the healthy recipes and beautiful images. Highly recommended!"
    },
    {
        id: 4,
        name: "David L.",
        role: "Busy Professional",
        image: "https://randomuser.me/api/portraits/men/46.jpg",
        rating: 5,
        text: "Finally an app that helps me meal prep for the week without the stress. Brilliant."
    },
    {
        id: 5,
        name: "Sarah J.",
        role: "Mom of two",
        image: "https://randomuser.me/api/portraits/women/12.jpg",
        rating: 5,
        text: "My kids are picky eaters, but they love the creative recipes I find here!"
    },
    {
        id: 6,
        name: "Marcus T.",
        role: "Fitness Coach",
        image: "https://randomuser.me/api/portraits/men/22.jpg",
        rating: 5,
        text: "I recommend Flavorly to all my clients for hitting their daily macros with ease."
    },
    {
        id: 7,
        name: "Elena R.",
        role: "Culinary Student",
        image: "https://randomuser.me/api/portraits/women/33.jpg",
        rating: 5,
        text: "The flavor profiles on these curated lists are genuinely restaurant quality."
    },
    {
        id: 8,
        name: "James W.",
        role: "Weekend Chef",
        image: "https://randomuser.me/api/portraits/men/85.jpg",
        rating: 5,
        text: "This site has completely reinvigorated my love for cooking on the weekends!"
    }
];

const Testimonial = () => {
    const swiperRef = useRef(null);

    return (
        <div className="w-full px-6 md:px-14 lg:px-20 py-24 bg-gray-50/50 relative overflow-hidden">

            {/* Massive Background Watermark */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none opacity-[0.02] z-0">
                <h1 className="text-[14vw] font-black tracking-tighter text-gray-900 leading-none whitespace-nowrap">
                    REVIEWS
                </h1>
            </div>

            {/* Standardized Centered Editorial Header */}
            <div className="text-center mb-16 relative z-10" data-aos="fade-up">
                <span className="text-[#e63946] font-bold tracking-widest uppercase text-sm border-b-2 border-red-200 pb-1">
                    Real Stories
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mt-6 mb-4 tracking-tight">
                    What Our <span className="font-serif italic text-[#e63946]">Users Say</span>
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto font-medium text-lg">
                    Join thousands of happy home cooks who have transformed their daily meals with Flavorly.
                </p>
            </div>

            {/* Swiper Container with Navigation */}
            <div className="relative w-full z-10" data-aos="fade-up" data-aos-delay="200">

                {/* Custom Navigation Buttons (Side Floating) */}
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border border-gray-100 rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-[#e63946] hover:shadow-lg transition-all duration-300 hidden md:flex group"
                >
                    <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
                </button>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    spaceBetween={24}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                    className="pb-4 px-2"
                >
                    {testimonials.map((review) => (
                        <SwiperSlide key={review.id} className="h-auto">
                            <div className="bg-white rounded-[1.5rem] mb-2 p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-500 h-full flex flex-col relative group cursor-pointer">

                                {/* Subtle Quote Icon in Background */}
                                <Quote className="absolute top-6 right-6 text-gray-50 opacity-50 w-16 h-16 group-hover:text-red-50 group-hover:rotate-12 transition-all duration-500 pointer-events-none" />

                                <div className="flex items-center mb-6 relative z-10">
                                    <img src={review.image} alt={review.name} className="w-14 h-14 rounded-full object-cover shadow-sm mr-4" />
                                    <div>
                                        <h4 className="font-bold text-gray-900">{review.name}</h4>
                                        <p className="text-xs text-gray-500 font-medium">{review.role}</p>
                                    </div>
                                </div>

                                <div className="flex text-yellow-400 mb-4 relative z-10">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} size={16} fill="currentColor" className="mr-1" />
                                    ))}
                                </div>

                                <p className="text-gray-700 font-medium leading-relaxed relative z-10 flex-1">
                                    "{review.text}"
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border border-gray-100 rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-[#e63946] hover:shadow-lg transition-all duration-300 hidden md:flex group"
                >
                    <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
            </div>
        </div>
    );
};

export default Testimonial;