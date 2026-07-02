import React from 'react';
import { Check, Sparkles, ArrowRight, Activity, Calendar } from 'lucide-react';

const MealPlanner = () => {
    return (
        <div className="w-full px-6 md:px-14 lg:px-20 py-24 bg-white relative">
            
            {/* Massive Background Typography for Section Context */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none opacity-[0.02] z-0">
                <h1 className="text-[14vw] font-black tracking-tighter text-gray-900 leading-none whitespace-nowrap">
                    DASHBOARD
                </h1>
            </div>

            {/* Standardized Centered Editorial Header */}
            <div className="text-center mb-16 relative z-10" data-aos="fade-up">
                <span className="text-[#e63946] font-bold tracking-widest uppercase text-sm border-b-2 border-red-200 pb-1">
                    Innovation
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mt-6 mb-4 tracking-tight">
                    Smart <span className="font-serif italic text-[#e63946]">Dashboard</span>
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto font-medium text-lg">
                    Experience the future of meal planning. A dynamic, widget-based command center for your weekly goals.
                </p>
            </div>

            {/* The Bento Grid Architecture */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 w-full relative z-10" data-aos="fade-up" data-aos-delay="200">
                
                {/* Bento 1: Hero Statement (Span 5) */}
                <div className="lg:col-span-5 bg-gradient-to-br from-[#fff5f5] via-[#fcf0f0] to-[#fcebeb] rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden border border-white shadow-sm group">
                    {/* Background Dot Grid */}
                    <div className="absolute inset-0 z-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(#e63946 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>
                    
                    <div className="relative z-10 h-full flex flex-col justify-between min-h-[350px]">
                        <div>
                            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full mb-8 shadow-sm">
                                <Sparkles size={14} className="text-[#e63946]" />
                                <span className="text-[#e63946] font-bold text-xs uppercase tracking-widest">AI Powered</span>
                            </div>
                            <h2 className="text-4xl lg:text-[2.75rem] font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
                                Your Personal <br />
                                <span className="font-serif italic font-normal text-[#e63946]">Meal Planner</span>
                            </h2>
                            <p className="text-gray-600 font-medium text-base max-w-[280px] mb-10 leading-relaxed">
                                Generate smart shopping lists, track macros, and hit your fitness goals effortlessly.
                            </p>
                        </div>
                        
                        <button className="w-fit group/btn relative inline-flex items-center justify-center bg-[#e63946] hover:bg-gray-900 text-white font-bold py-3.5 px-8 rounded-2xl overflow-hidden transition-all duration-500 shadow-[0_10px_20px_rgba(230,57,70,0.3)] hover:shadow-xl hover:-translate-y-1">
                            <span className="relative z-10 flex items-center">
                                Generate New Plan 
                                <ArrowRight className="ml-2 w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" />
                            </span>
                        </button>
                    </div>

                    {/* Decorative floating avocado bubble */}
                    <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full border-[8px] border-white shadow-2xl z-0 transform rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-all duration-700 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=300&h=300&fit=crop" alt="Avocado" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* Bento 2: Dark Mode Timeline Widget (Span 4) */}
                <div className="lg:col-span-4 bg-[#0a0a0a] rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden shadow-2xl group border border-gray-800">
                    {/* Glowing ambient background effect */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#e63946]/30 rounded-full mix-blend-screen filter blur-[80px] group-hover:scale-150 transition-transform duration-1000"></div>
                    
                    <div className="flex justify-between items-center mb-10 relative z-10">
                        <h3 className="text-white font-black text-xl tracking-wide flex items-center">
                            <Calendar size={18} className="mr-2 text-[#e63946]" />
                            Timeline
                        </h3>
                        <div className="bg-white/10 border border-white/10 px-4 py-1.5 rounded-full text-xs text-white font-bold backdrop-blur-md">Week 14</div>
                    </div>

                    <div className="relative z-10 space-y-6">
                        {/* Vertical Timeline Line */}
                        <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-gray-800/80"></div>

                        {[
                            { day: 'Mon', type: 'Breakfast', name: 'Avocado Toast', img: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=150&h=150&fit=crop', active: false },
                            { day: 'Wed', type: 'Lunch', name: 'Quinoa Salad', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=150&h=150&fit=crop', active: true },
                            { day: 'Fri', type: 'Dinner', name: 'Grilled Salmon', img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=150&h=150&fit=crop', active: false }
                        ].map((meal, i) => (
                            <div key={i} className="flex items-start group/meal cursor-pointer relative z-10">
                                {/* Timeline Node */}
                                <div className={`w-10 h-10 rounded-full border-4 border-[#0a0a0a] flex items-center justify-center font-black text-[10px] mt-1 transition-all duration-300 ${meal.active ? 'bg-[#e63946] text-white shadow-[0_0_15px_rgba(230,57,70,0.5)]' : 'bg-gray-800 text-gray-400 group-hover/meal:bg-white group-hover/meal:text-gray-900'}`}>
                                    {meal.day}
                                </div>
                                {/* Meal Card */}
                                <div className={`ml-4 flex-1 border rounded-2xl p-3 transition-all duration-300 flex items-center backdrop-blur-sm ${meal.active ? 'bg-white/10 border-white/20 shadow-lg translate-x-2' : 'bg-white/5 border-white/5 hover:bg-white/10 hover:translate-x-1'}`}>
                                    <img src={meal.img} className="w-12 h-12 rounded-xl object-cover shadow-sm" alt={meal.name} />
                                    <div className="ml-4">
                                        <p className={`text-[9px] font-black uppercase tracking-widest mb-1 ${meal.active ? 'text-[#e63946]' : 'text-gray-500'}`}>{meal.type}</p>
                                        <p className="text-sm font-bold text-white">{meal.name}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bento 3: Shopping List & Stats Widgets (Span 3) */}
                <div className="lg:col-span-3 flex flex-col gap-6">
                    
                    {/* Shopping List Widget */}
                    <div className="flex-1 bg-white border border-gray-100 shadow-[0_15px_30px_rgba(0,0,0,0.06)] rounded-[2.5rem] p-7 relative group overflow-hidden flex flex-col justify-center">
                        <h3 className="font-black text-gray-900 mb-6 text-lg tracking-tight">Shopping List</h3>
                        <ul className="space-y-4 relative z-10">
                            {[
                                {name: 'Avocado', checked: true}, 
                                {name: 'Quinoa', checked: true}, 
                                {name: 'Fresh Salmon', checked: false}, 
                                {name: 'Broccoli', checked: false}
                            ].map((item, i) => (
                                <li key={i} className="flex items-center group/item cursor-pointer">
                                    <div className={`w-5 h-5 rounded-full border-[2px] flex items-center justify-center mr-3 transition-all duration-300 ${item.checked ? 'bg-[#e63946] border-[#e63946]' : 'border-gray-200 group-hover/item:border-gray-400'}`}>
                                        {item.checked && <Check size={12} className="text-white" strokeWidth={4} />}
                                    </div>
                                    <span className={`text-sm font-bold transition-all duration-300 ${item.checked ? 'text-gray-400 line-through' : 'text-gray-700 group-hover/item:text-gray-900'}`}>
                                        {item.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        {/* Decorative Tomato Bubble */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full border-4 border-white shadow-xl z-0 transform rotate-12 group-hover:rotate-45 group-hover:scale-110 transition-all duration-700 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=200&h=200&fit=crop" alt="Tomato" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Nutrition Score Vibrant Widget */}
                    <div className="h-44 bg-[#e63946] rounded-[2.5rem] p-7 text-white relative overflow-hidden group cursor-pointer shadow-[0_15px_30px_rgba(230,57,70,0.3)] hover:-translate-y-1 transition-all duration-500">
                        <div className="absolute -right-4 -top-4 w-32 h-32 bg-white/20 rounded-full blur-2xl group-hover:scale-[2] transition-transform duration-1000 ease-out"></div>
                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div className="flex justify-between items-center">
                                <span className="font-black text-xs text-red-100 uppercase tracking-widest bg-black/10 px-3 py-1.5 rounded-full">Nutrition</span>
                                <Activity size={18} className="text-white animate-pulse" />
                            </div>
                            <div>
                                <div className="text-4xl lg:text-5xl font-black tracking-tighter">98<span className="text-lg lg:text-xl text-red-200 font-bold">/100</span></div>
                                <p className="text-xs font-bold text-red-100 mt-1 uppercase tracking-wide">Excellent Macros! 🔥</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default MealPlanner;