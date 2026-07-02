import { Heart, ArrowRight, Clock } from 'lucide-react';

const popularRecipes = [
    {
        id: 1,
        title: 'Creamy Garlic Pasta',
        time: '30 mins',
        difficulty: 'Easy',
        image: 'https://images.unsplash.com/photo-1662197480393-2a82030b7b83?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 2,
        title: 'Paneer Butter Masala',
        time: '40 mins',
        difficulty: 'Medium',
        image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-5.jpg',
    },
    {
        id: 3,
        title: 'Chocolate Lava Cake',
        time: '25 mins',
        difficulty: 'Easy',
        image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 4,
        title: 'Veg Fried Rice',
        time: '30 mins',
        difficulty: 'Easy',
        image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 5,
        title: 'Grilled Chicken Salad',
        time: '20 mins',
        difficulty: 'Easy',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 6,
        title: 'Spicy Tacos',
        time: '25 mins',
        difficulty: 'Medium',
        image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=800&auto=format&fit=crop',
    }
];

const PopularReceipe = () => {
    const featured = popularRecipes[0];
    const gridRecipes = popularRecipes.slice(1, 5);

    return (
        <div className="relative w-full px-6 md:px-14 lg:px-20 py-24 bg-gray-50/50 overflow-hidden">

            {/* Massive Background Typography Watermark */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none opacity-[0.02]">
                <h1 className="text-[14vw] font-black tracking-tighter text-black leading-none select-none">TRENDING</h1>
            </div>

            <div className="relative z-10" data-aos="fade-up">
                {/* Header section */}
                <div className="flex flex-col items-center text-center mb-16">
                    <span className="text-red-500 font-bold tracking-widest uppercase text-xs md:text-sm mb-3 border-b-2 border-red-200">Community Favorites</span>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-5">Trending <span className="font-serif italic text-[#e63946]">Now</span></h2>
                    <p className="text-gray-500 font-medium max-w-2xl text-base md:text-lg mb-8">The most loved, highly-rated recipes our community is cooking right now.</p>
                    <a href="#" className="inline-flex items-center text-red-500 hover:text-red-600 font-bold text-sm md:text-base transition-colors bg-red-50 hover:bg-red-100 px-6 py-2.5 rounded-full">
                        View all recipes <ArrowRight size={18} className="ml-2" />
                    </a>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">

                    {/* Large Featured Recipe (Left Side) */}
                    <div className="lg:col-span-7 relative w-full h-[400px] lg:h-[600px] rounded-[2rem] overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                        <img src={featured.image} alt={featured.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                        <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-colors duration-300 shadow-sm">
                            <Heart size={24} className="stroke-2" />
                        </div>

                        <div className="absolute bottom-0 left-0 w-full p-8 lg:p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                            <div className="flex items-center space-x-3 mb-4">
                                <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">Top Rated</span>
                                <span className="text-white/90 text-sm font-semibold flex items-center bg-black/30 backdrop-blur-md px-3 py-1 rounded-full"><Clock size={14} className="mr-1.5" /> {featured.time}</span>
                            </div>
                            <h3 className="text-white font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-3 drop-shadow-lg leading-tight">{featured.title}</h3>
                            <p className="text-white/80 font-medium text-base sm:text-lg">Difficulty: <span className="text-white font-bold">{featured.difficulty}</span></p>
                        </div>
                    </div>

                    {/* 4 Small Recipes (Right Side) */}
                    <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-6">
                        {gridRecipes.map((recipe) => (
                            <div key={recipe.id} className="relative w-full h-[200px] sm:h-[288px] rounded-[1.5rem] overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-500">
                                <img src={recipe.image} alt={recipe.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>

                                <div className="absolute top-4 right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-colors duration-300 shadow-sm">
                                    <Heart size={16} className="stroke-2 sm:hidden" />
                                    <Heart size={18} className="stroke-2 hidden sm:block" />
                                </div>

                                <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                    <h3 className="text-white font-bold text-lg sm:text-2xl leading-tight mb-1 sm:mb-2 drop-shadow-md line-clamp-2">{recipe.title}</h3>
                                    <p className="text-white/80 text-xs sm:text-sm font-semibold tracking-wide flex items-center">
                                        {recipe.time} <span className="mx-1.5 text-red-400">•</span> {recipe.difficulty}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PopularReceipe;