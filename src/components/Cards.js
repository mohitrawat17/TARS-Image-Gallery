import React, { useEffect, useState } from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const Cards = () => {
    const [allImages, setAllImages] = useState([])

    const fetchImages = async () => {
        const data = await fetch('https://api.unsplash.com/photos?page=1&client_id=Btyj9Y0wVKBt5mhnJmMXQkRPasmBoog5BhiPZB7mnsQ')
        const json = await data.json()
        setAllImages(json);
    }
    useEffect(() => {
        fetchImages()
    }, [])
    return (
        <>
            {
                allImages.map((data) => {
                    return (
                        <div className='rounded-2xl border border-gray-300 h-fit' key={data.id}>
                            <img className='rounded-t-2xl' src={data?.urls?.small} />


                            <div className='flex my-3 mx-2 justify-between'>

                                <div className='flex gap-3'>
                                    <img className='rounded-full h-10' src={data?.user?.profile_image?.small} />
                                    <div>
                                    <h3 className='font-semibold'>{data?.user?.name}</h3>
                                    <h2 className='text-gray-700'>@{data?.user?.username}</h2>
                                    </div>
                                </div>

                                <div className='flex gap-1'>
                                <ThumbUpIcon />
                                <div>{data?.likes} </div>
                                </div>
                            </div>



                        </div>
                    )
                })
            }
        </>
    )
}

export default Cards
