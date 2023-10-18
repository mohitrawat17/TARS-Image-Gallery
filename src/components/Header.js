import React from 'react'

const Header = () => {
  return (
    <div className='flex mx-10 justify-between'>
      <div className='font-bold text-2xl'>TARS Image Gallery</div>
      <ul className='flex font-semibold gap-5'>
        <li>Explore</li>
        <li>Collection</li>
        <li>Community</li>
      </ul>
    </div>
  )
}

export default Header
