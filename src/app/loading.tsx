import React from 'react'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Navbar from './components/Navbar/Navbar'
import ImageCaro from './components/HomePage/ImageBasedCarousel/ImageCaro'
export default function loading() {
  return (
    <div className=''>
       <Navbar/>
       <ImageCaro/>
       
    </div>
  )
}
