import React from 'react';
import { Clock, Leaf, Coffee, ArrowRight } from 'lucide-react';

const collections = [
    {
        id: 1,
        title: 'Quick & Easy',
        description: 'Delicious, home-cooked meals ready in 30 minutes or less. Perfect for busy weeknights.',
        tag: 'Under 30m',
        icon: <Clock size={16} className="text-rose-500" />,
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop',
        color: 'group-hover:text-rose-500',
        btnColor: 'text-rose-500',
    },
    {
        id: 2,
        title: 'Healthy Picks',
        description: 'Nutritious, balanced meals designed to nourish your body without compromising flavor.',
        tag: 'Low Calorie',
        icon: <Leaf size={16} className="text-emerald-500" />,
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop',
        color: 'group-hover:text-emerald-500',
        btnColor: 'text-emerald-500',
    },
    {
        id: 3,
        title: 'Comfort Food',
        description: 'Warm, cozy, and deeply satisfying recipes that feel like a warm hug on a cold day.',
        tag: 'Soul Food',
        icon: <Coffee size={16} className="text-amber-500" />,
        image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop',
        color: 'group-hover:text-amber-500',
        btnColor: 'text-amber-500',
    }
];

const Featured = () => {
    return (
        <div className="relative w-full px-6 md:px-14 lg:px-20 py-24 bg-white overflow-hidden">

            {/* Massive Background Typography Watermark */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none opacity-[0.02]">
                <h1 className="text-[14vw] font-black tracking-tighter text-black leading-none select-none">FEATURED</h1>
            </div>

            <div className="relative z-10" data-aos="fade-up">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-16">
                    <span className="text-red-500 font-bold tracking-widest uppercase text-xs md:text-sm border-b-2 border-red-200 mb-3">Handpicked For You</span>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-5">Curated <span className="font-serif italic text-[#e63946]">Collections </span></h2>
                    <p className="text-gray-500 font-medium max-w-2xl text-base md:text-lg">Explore our most popular recipe bundles, carefully selected to match your mood, schedule, and dietary goals.</p>
                </div>

                {/* Minimalist Pillar Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {collections.map((collection) => (
                        <div key={collection.id} className="group flex flex-col cursor-pointer">

                            {/* Image Container */}
                            <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden mb-8 shadow-sm group-hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-shadow duration-500">
                                <img
                                    src={collection.image}
                                    alt={collection.title}
                                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 ease-out"
                                />

                                {/* Floating Tag */}
                                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl flex items-center shadow-lg transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                                    {collection.icon}
                                    <span className="ml-2 font-bold text-gray-900 text-sm tracking-tight">{collection.tag}</span>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="flex flex-col flex-1 px-2">
                                <h3 className={`text-2xl lg:text-3xl font-black text-gray-900 mb-3 transition-colors duration-300 ${collection.color}`}>
                                    {collection.title}
                                </h3>
                                <p className="text-gray-500 font-medium text-base leading-relaxed mb-6 flex-1">
                                    {collection.description}
                                </p>

                                {/* Clean & Elegant Link */}
                                <div className="mt-auto pt-2">
                                    <div className={`inline-flex items-center font-bold text-base text-gray-900 ${collection.color} transition-colors duration-300`}>
                                        Explore Collection <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Featured;