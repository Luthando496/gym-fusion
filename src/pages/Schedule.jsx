import React from 'react'
import HeaderSecond from '../components/Header-2'

const Schedule = () => {
  return (
    <>
        <HeaderSecond title={'Schedule by Day'} />

        <section className="mt-16 mb-10 px-8 lg:px-16">
        <div className="flex justify-center">
            <div className="flex gap-10 items-center flex-wrap">
                <button className="px-6 text-white text-xl py-2 border bg-amber-500 rounded-3xl capitalize">monday</button>
                <button className="px-6 text-white text-xl py-2 border bg-amber-500 rounded-3xl capitalize">tuesday</button>
                <button className="px-6 text-white text-xl py-2 border bg-amber-500 rounded-3xl capitalize">wednesday</button>
                <button className="px-6 text-white text-xl py-2 border bg-amber-500 rounded-3xl capitalize">thursday</button>
                <button className="px-6 text-white text-xl py-2 border bg-amber-500 rounded-3xl capitalize">friday</button>
                <button className="px-6 text-white text-xl py-2 border bg-amber-500 rounded-3xl capitalize">saturday</button>
                <button className="px-6 text-white text-xl py-2 border bg-amber-500 rounded-3xl capitalize">sunday</button>
            </div>
        </div>
        </section>

        <section className="mb-10 px-16 flex flex-col gap-8">
        <div className="w-full py-16 lg:py-6 px-8 flex flex-col lg:flex-row  gap-y-7 justify-between bg-gray-400">
        <div className="flex flex-col gap-4 items-center">
            <h4 className="text-base text-white text-center font-semibold">Class Name</h4>
            <h2 className="text-base tracking-[3px] lg:text-left text-center font-bold text-black ">Fitness</h2>
        </div>
        <div className="flex flex-col gap-4">
            <h4 className="text-base text-white text-center font-semibold">Time</h4>
            <h2 className="text-base tracking-[3px] lg:text-left text-center font-bold text-black ">9:00am - 10:00am</h2>
        </div>
        <div className="flex flex-col gap-4">
            <h4 className="text-base text-white text-center font-semibold">Trainer</h4>
            <h2 className="text-base tracking-[3px] lg:text-left text-center font-bold text-black ">David Vila</h2>
        </div>
        <div className="flex justify-center">
        <button className="rounded-3xl px-6 hover:bg-pink-600 duration-700 text-sm font-semibold py-2 bg-amber-500 uppercase">Join now</button>
        </div>

        </div>
        {/*  */}
        <div className="w-full py-16 lg:py-6 px-8 flex flex-col lg:flex-row  gap-y-7 justify-between bg-gray-400">
        <div className="flex flex-col gap-4 items-center">
            <h4 className="text-base text-white text-center font-semibold">Class Name</h4>
            <h2 className="text-base tracking-[3px] lg:text-left text-center font-bold text-black ">Fitness</h2>
        </div>
        <div className="flex flex-col gap-4">
            <h4 className="text-base text-white text-center font-semibold">Time</h4>
            <h2 className="text-base tracking-[3px] lg:text-left text-center font-bold text-black ">9:00am - 10:00am</h2>
        </div>
        <div className="flex flex-col gap-4">
            <h4 className="text-base text-white text-center font-semibold">Trainer</h4>
            <h2 className="text-base tracking-[3px] lg:text-left text-center font-bold text-black ">David Vila</h2>
        </div>
        <div className="flex justify-center">
        <button className="rounded-3xl px-6 hover:bg-pink-600 duration-700 text-sm font-semibold py-2 bg-amber-500 uppercase">Join now</button>
        </div>

        </div>
        {/*  */}
        <div className="w-full py-16 lg:py-6 px-8 flex flex-col lg:flex-row  gap-y-7 justify-between bg-gray-400">
        <div className="flex flex-col gap-4 items-center">
            <h4 className="text-base text-white text-center font-semibold">Class Name</h4>
            <h2 className="text-base tracking-[3px] lg:text-left text-center font-bold text-black ">Fitness</h2>
        </div>
        <div className="flex flex-col gap-4">
            <h4 className="text-base text-white text-center font-semibold">Time</h4>
            <h2 className="text-base tracking-[3px] lg:text-left text-center font-bold text-black ">9:00am - 10:00am</h2>
        </div>
        <div className="flex flex-col gap-4">
            <h4 className="text-base text-white text-center font-semibold">Trainer</h4>
            <h2 className="text-base tracking-[3px] lg:text-left text-center font-bold text-black ">David Vila</h2>
        </div>
        <div className="flex justify-center">
        <button className="rounded-3xl px-6 hover:bg-pink-600 duration-700 text-sm font-semibold py-2 bg-amber-500 uppercase">Join now</button>
        </div>

        </div>


        </section>

    </>
  )
}

export default Schedule