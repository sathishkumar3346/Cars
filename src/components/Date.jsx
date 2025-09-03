import React from 'react'
import { useNavigate } from 'react-router-dom';

const Date = () => {
 
    const navigate =useNavigate()
    return (
        <form className='text-white rounded-lg px-6 py-8  flex justify-center hover:shadow-lg hover:shadow-cyan-500/60 flex-col md:flex-row max-md:items-start bg-black my-4 rounded-lg gap-4 max-md:mx-auto' onSubmit={()=>navigate('/rental-cars')}>

            <div>
                <div className='flex items-center gap-2'>
                    <svg className="w-4 h-4text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
                    </svg>
                    <label htmlFor="destinationInput">Destination</label>
                </div>
                <input list='destinations' id="destinationInput" type="text" className=" placeholder-black text-black bg-white rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" placeholder="Location" required />
            </div>

            <div>
                <div className='flex items-center gap-2'>
                    <svg className="w-4 h-4text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
                    </svg>
                    <label htmlFor="checkIn">Pick-up Date</label>
                </div>
                <input id="checkIn" type="date" className=" rounded bg-white text-black px-3 py-1.5 mt-1.5 text-sm outline-none" required />
            </div>

            <div>
                <div className='flex items-center gap-2'>
                    <svg className="w-4 h-4text-white-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
                    </svg>
                    <label htmlFor="checkOut">Return Date</label>
                </div>
                <input id="checkOut" type="date" className=" rounded bg-white text-black px-3 py-1.5 mt-1.5 text-sm outline-none" required/>
            </div>

          

            <button className='flex items-center justify-center gap-1 rounded-full text-cyan-600 py-3 px-8 mt-4 border border-cyan-600 hover:shadow-md  shadow-cyan-600 text-white my-auto cursor-pointer max-md:w-full max-md:py-1' >
                <i class="fa-solid fa-magnifying-glass text-cyan-600 "></i>
                <span className='text-cyan-600 '>Search</span>
            </button>
        </form>
    );
}
export default Date