import React from 'react'

export default function TopClient() {
  return (
    <section className="bg-[#EDF1F4]">
        <div className='flex gap-4 mx-4 justify-center'>
            <img src='/images/rafi ahmad.png' className='h-[200px]' alt='figure'/>
            <div className='flex flex-col my-8'>
                <blockquote class="text-xl italic font-semibold text-[#137536]">
                    <h1 className=''>
                        One of the survivalists of the sandwich generation that we work with.
                    </h1>                    
                </blockquote>
                <span className='text-gray-600'>Rafi Ahmad</span>
            </div>
            <div className='flex flex-col gap-8 my-8'>
                <img src='/images/rans-logo.png' className='h-[50px]' alt='figure'/>
                <a href='#' className='bg-[#137536] text-white px py-2 rounded-full text-center'>See More</a>
            </div>
        </div>
    </section>
  )
}
