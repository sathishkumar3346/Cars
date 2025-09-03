import React from 'react'
import {brandcars} from "../assets/assets.js"
const BrandCars = () => {
  return (
   <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 py-6 px-20 ">
       {brandcars.map((brandcar)=>(
        <div id='brandcar' className=' '>
            <img src={brandcar.image} alt={brandcar.name} className="w-full h-48 object-cover rounded-2xl hover:-translate-y-1 transition-all duration-300 shadow-sm shadow-cyan-600 " />
            <h2 className='text-lg font-bold bg-gradient-to-r from-cyan-600 to-white bg-clip-text text-transparent'>{brandcar.name}</h2>
        </div>
       ))}
    </div>
  )
}

export default BrandCars