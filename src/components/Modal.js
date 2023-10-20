import React from 'react'

const Modal = ({hideModal,data}) => {
  return (
  <>
  <div className=' pb-2 fixed left-0 right-0 bottom-0 top-0  inset-0   backdrop-filter backdrop-blur-xl bg-opacity-10'></div>
    <div className='w-3/12 rounded-xl fixed bg-white'>
    <img className='rounded-t-xl h-64 w-full' src={data.urls?.small} alt="Thumbnail"/>
    <div className='flex m-3'>
    <img
                        className="rounded-full h-10 mt-2"
                        src={data?.user?.profile_image?.small}
                      />
    <div className='p-3'>
    <h3 className='font-bold capitalize'>{data?.alt_description}</h3>
    <div className='font-semibold '><span className='font-normal text-gray-600'>{data?.location?.name}</span></div>
      <div className='font-semibold '>User : <span className='font-normal text-gray-600'>{data?.user?.name}</span></div>
      <div className='font-semibold '>Instagram : @<span className='font-normal text-gray-600'>{data?.user?.social?.instagram_username}</span></div>
      <div className='font-semibold '>Twitter : @<span className='font-normal text-gray-600'>{data?.user?.social?.twitter_username}</span></div>
      <div className='font-semibold '>Likes count : <span className='font-normal text-gray-600'>{data?.likes}</span></div>
      <div className='font-semibold '>Views count : <span className='font-normal text-gray-600'>{data?.views}</span></div>
      <div className='font-semibold '>Downloads : <span className='font-normal text-gray-600'>{data?.downloads}</span></div>
    </div>
    </div>
    <div className='w-full flex justify-end'>
      <button className='rounded-b-xl rounded-l-none bg-black text-lg text-white px-4 py-2' onClick={hideModal}>Close</button>
      </div>
    </div>
    </>
  )
}

export default Modal
