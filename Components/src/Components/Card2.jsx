import React from 'react'

function Card2({title = "noting is passed", Refer = "Nothing"}) {
  return (
    <>
    <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    <button className='bg-white text-black mt-3 p-2 rounded-xl'>
       {Refer}
    </button>
    </a>
    
    </>
  )
}

export default Card2