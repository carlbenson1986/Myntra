import React from 'react'
import Skeleton from 'react-loading-skeleton';


export default function loading() {
  return (
    <div className='bg-orange-950'>
      <h1>hey there its loading</h1>
      <Skeleton />
    </div>
  )
}
