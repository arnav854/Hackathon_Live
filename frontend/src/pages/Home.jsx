import React from 'react'
import { BackgroundBeamsWithCollisionDemo } from '../components/Title'
import { NavbarDemo } from '../components/Navbar'

const Home = () => {
  return (
    <div className='bg-black'>
        <BackgroundBeamsWithCollisionDemo/>
                
        <NavbarDemo/>
    </div>
  )
}

export default Home