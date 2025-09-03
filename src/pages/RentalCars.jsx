import React from 'react'

import FeaturedCar from '../components/FeaturedCar'

const RentalCars = () => {
    return (
        <div className='space-y-8 mt-10 md:p-20'>
           
            <h1 className='text-white font-bold text-6xl text-center '>Available Cars</h1>
            <p className='text-lg text-white text-center font-serif  '>Browse our selection of premium vehicles available for your next adventure</p>
            <FeaturedCar />
           
        </div>
    )
}

export default RentalCars