import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Categories from './components/Categories'
import PopularReceipe from './components/PopularReceipe'

function App() {
  return (
    <div className='w-full'>
      <Navbar />
      <Banner />
      <Categories />
      <PopularReceipe />
    </div>
  )
}

export default App
