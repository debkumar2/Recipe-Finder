import React from 'react';

const Facebook = ({ size, fill }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const Instagram = ({ size, fill }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const Twitter = ({ size, fill }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);
const Youtube = ({ size, fill }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
);

const Footer = () => {
    return (
        <footer className="bg-[#111111] text-white pt-24 pb-8 relative overflow-hidden border-t border-gray-900">
            
            {/* Background Pattern - Dot Grid */}
            <div className="absolute inset-0 z-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            
            {/* Massive Background Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none opacity-[0.02] z-0">
                <h1 className="text-[18vw] font-black tracking-tighter text-white leading-none whitespace-nowrap">
                    FLAVORLY
                </h1>
            </div>

            <div className="w-full px-6 md:px-14 lg:px-20 relative z-10" data-aos="fade-up">
                {/* Changed Grid to ensure links are tightly packed next to the brand on desktop */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8 mb-20 relative z-10 lg:w-[80%]">
                    
                    {/* Brand Column */}
                    <div className="col-span-2 md:col-span-3 lg:col-span-2">
                        <div className="flex items-center space-x-3 mb-6">
                            {/* Colorful Leaf/Flame Logo Approximation */}
                            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 via-red-500 to-green-500 rounded-xl flex items-center justify-center shadow-lg transform -rotate-12">
                                <span className="text-white font-black text-xl italic transform rotate-12">F</span>
                            </div>
                            <span className="text-3xl font-black tracking-tight">Flavorly</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-8 max-w-sm font-medium leading-relaxed">
                            <span className="text-gray-200 font-bold text-base block mb-2 tracking-wide">Discover. Cook. Enjoy.</span>
                            Join our global community of food enthusiasts. Flavorly brings you premium curated recipes, AI-driven meal planning, and endless culinary inspiration right to your kitchen. Let's make every meal an unforgettable experience.
                        </p>
                        <div className="flex space-x-3">
                            {[Facebook, Instagram, Twitter, Youtube].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#e63946] hover:text-white hover:scale-110 transition-all duration-300 border border-white/10">
                                    <Icon size={18} fill={idx === 3 ? "currentColor" : "none"} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1">
                        <h4 className="text-white font-bold mb-6 text-lg tracking-wide">Quick Links</h4>
                        <ul className="space-y-3.5">
                            {['Home', 'Recipes', 'Categories', 'Collections', 'Meal Planner'].map(link => (
                                <li key={link}><a href="#" className="text-gray-400 hover:text-[#e63946] text-sm font-medium transition-colors">{link}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* About */}
                    <div className="col-span-1">
                        <h4 className="text-white font-bold mb-6 text-lg tracking-wide">About</h4>
                        <ul className="space-y-3.5">
                            {['About Us', 'How It Works', 'Blog', 'Contact Us', 'Help Center'].map(link => (
                                <li key={link}><a href="#" className="text-gray-400 hover:text-[#e63946] text-sm font-medium transition-colors">{link}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="col-span-1 md:col-span-1">
                        <h4 className="text-white font-bold mb-6 text-lg tracking-wide">Legal</h4>
                        <ul className="space-y-3.5">
                            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(link => (
                                <li key={link}><a href="#" className="text-gray-400 hover:text-[#e63946] text-sm font-medium transition-colors">{link}</a></li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Empty column for grid spacing */}
                    <div className="hidden lg:block col-span-1"></div>

                </div>

                {/* Bottom Divider */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center relative z-10 gap-4">
                    <p className="text-gray-500 text-sm font-medium">© 2025 Flavorly. All rights reserved.</p>
                    <div className="flex space-x-6 text-sm text-gray-500 font-medium">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>

            {/* CSS-Constructed Cast Iron Pan Graphic (Right Side) */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[15%] md:translate-x-[25%] lg:translate-x-[20%] w-[350px] h-[350px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] pointer-events-none z-0 opacity-20 md:opacity-100 hidden sm:block">
                
                {/* Pan Handle */}
                <div className="absolute top-[5%] right-[5%] w-48 h-10 md:w-64 md:h-12 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] rounded-full transform -rotate-45 translate-x-16 -translate-y-16 md:translate-x-20 md:-translate-y-20 shadow-2xl border border-gray-800 z-0">
                    <div className="absolute top-1/2 right-4 w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#111111] shadow-inner -translate-y-1/2"></div>
                </div>
                
                {/* Pan Body */}
                <div className="relative w-full h-full rounded-full border-[16px] md:border-[20px] border-[#151515] shadow-[inset_0_0_80px_rgba(0,0,0,1),0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden bg-black z-20">
                    {/* The food inside the pan */}
                    <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=600&fit=crop" alt="Food in pan" className="w-full h-full object-cover opacity-90 scale-110 transform rotate-12" />
                    {/* Dark gradient overlay to make it look deep */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 rounded-full"></div>
                </div>
                
                {/* Floating Spices/Leaves outside the pan */}
                <div className="absolute -left-12 top-[20%] w-12 h-12 md:w-16 md:h-16 rounded-full border-[3px] border-[#111111] shadow-[0_10px_20px_rgba(0,0,0,0.5)] z-30 overflow-hidden transform -rotate-12 animate-[bounce_4s_infinite]">
                    <img src="https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?w=100&h=100&fit=crop" className="w-full h-full object-cover" alt="Chili" />
                </div>
                <div className="absolute -left-4 bottom-[15%] w-10 h-10 md:w-12 md:h-12 rounded-full border-[2px] border-[#111111] shadow-[0_10px_20px_rgba(0,0,0,0.5)] z-30 overflow-hidden transform rotate-45 animate-[bounce_5s_infinite_reverse]">
                    <img src="https://images.unsplash.com/photo-1600857062241-98e5dba7f214?w=100&h=100&fit=crop" className="w-full h-full object-cover" alt="Herb" />
                </div>
                <div className="absolute left-[15%] -top-8 w-8 h-8 md:w-10 md:h-10 rounded-full border-[2px] border-[#111111] shadow-[0_10px_20px_rgba(0,0,0,0.5)] z-30 overflow-hidden transform rotate-12 animate-[bounce_3s_infinite]">
                    <img src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=100&h=100&fit=crop" className="w-full h-full object-cover" alt="Tomato" />
                </div>
            </div>

        </footer>
    );
};

export default Footer;