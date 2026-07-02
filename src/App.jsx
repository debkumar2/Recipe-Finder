import React, { useEffect } from 'react';
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Categories from './components/Categories'
import PopularReceipe from './components/PopularReceipe'
import Featured from './components/Featured'
import MealPlanner from './components/MealPlanner'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
      offset: 100,
    });
  }, []);

  return (
    <div className='w-full overflow-hidden'>
      <Navbar />
      <Banner />
      <Categories />
      <PopularReceipe />
      <Featured />
      <MealPlanner />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App
