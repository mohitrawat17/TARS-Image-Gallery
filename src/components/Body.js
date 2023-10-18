import React from 'react'
import Cards from './Cards'
import Masonry from '@mui/lab/Masonry';

const Body = () => {
  return (
    <div className='my-4'>
      <div className='searchBg bg-cover h-60 flex flex-col items-center justify-center p-5'>
        <h2 className='mb-5 text-2xl font-bold tracking-wide text-white'>Download High Quality Images by creators</h2>
        <h2 className='mb-3 text-sm text-gray-400'>Over 2.4 million+ stock Images by our talented community</h2>
        <input type='text' className='outline-none w-6/12 px-3 py-2 rounded-lg' placeholder='Search high resolution Images, categories, wallpapers'/>
      </div>

    <div className='m-10'>
      <Masonry className='flex' columns={4} spacing={2}>
        <Cards/>
      </Masonry>
      </div>
    </div>
  )
}

export default Body
