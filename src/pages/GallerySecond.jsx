import React from 'react'
import HeaderSecond from '../components/Header-2';
import {SlArrowLeft} from 'react-icons/sl'
import { useNavigate } from 'react-router-dom'; 'react-router-dom'


const GallerySecond = () => {

    const navigate = useNavigate();



  return (
    <>
    <HeaderSecond  title={'Gallery'} />

    <section className="mt-20 w-full">

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 px-10">
        <div className="w-full h-[22rem]">
            <img src="https://images.pexels.com/photos/1638336/pexels-photo-1638336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='w-full object-cover h-full' alt="gallery" />
        </div>
        <div className="w-full h-[22rem]">
            <img src="https://images.pexels.com/photos/1144864/pexels-photo-1144864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='w-full object-cover h-full' alt="gallery" />
        </div>
        <div className="w-full h-[22rem]">
            <img src="https://images.pexels.com/photos/6550875/pexels-photo-6550875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='w-full object-cover h-full' alt="gallery" />
        </div>
        {/*  */}
        <div className="w-full h-[22rem]">
            <img src="https://images.pexels.com/photos/4608146/pexels-photo-4608146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='w-full object-cover h-full' alt="gallery" />
        </div>
        <div className="w-full h-[22rem]">
            <img src="https://images.unsplash.com/photo-1532384816664-01b8b7238c8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" className='w-full object-cover h-full' alt="gallery" />
        </div>
        <div className="w-full h-[22rem]">
            <img src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='w-full object-cover h-full' alt="gallery" />
        </div>
        {/*  */}
        <div className="w-full h-[22rem]">
            <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" className='w-full object-cover h-full' alt="gallery" />
        </div>
        <div className="w-full h-[22rem]">
            <img src="https://images.unsplash.com/photo-1554344728-77cf90d9ed26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" className='w-full object-cover h-full' alt="gallery" />
        </div>

    </div>

    </section>

    <div className="my-14 w-full flex justify-center items-center">
        <div className="flex gap-5 items-center">
            <button onClick={()=> navigate('/gallery/page-1')} className="px-2 border font-semibold border-gray-300 py-3  text-black text-base flex ">
                <span className="flex">
                <SlArrowLeft className="text-base" />
                <SlArrowLeft className="text-base" />
                </span>
            </button>
            <button onClick={()=> navigate('/gallery/page-1')} className="border font-semibold border-gray-300 py-2 px-4  text-black text-base">1</button>
            <button  className="px-4 bg-pink-500 border font-semibold border-gray-300 py-2  text-black text-base">2</button>
        </div>
    </div>
</>
  )
}

export default GallerySecond