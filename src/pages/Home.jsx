import React from 'react'
import ImageSlider from '../components/ImageSlider'
import Date from '../components/Date'
import FeaturedCar from '../components/FeaturedCar'
import LogoSlider from '../components/LogoSlider.jsx'
import Trust from '../components/Trust.jsx'
import AboutSection from '../components/AboutSection.jsx'
import BrandCars from '../components/BrandCars.jsx'
import { useNavigate } from 'react-router-dom'
import ContactSection from '../components/ContactSection.jsx'

const Home = () => {
    const navigate = useNavigate();
    return (
        <div >
            <div className=" mt-20  md:absolute z-1 sm:left-10 lg:left-70 " >
                {/* <div className="mt-20 flex justify-center md:justify-center items-center w-full"> */}
                <Date />
                <h2
                    className="text-7xl font-bold text-center "
                    style={{ textShadow: "2px 2px 4px rgba(0, 255, 255, 0.7)" }}
                >
                    Welcome to Harsha Cars
                </h2>
            </div>
            <div className="relative ">
                <ImageSlider />
            </div>
            <div className='text-white space-y-3'>
                
                <h2 className='text-6xl font-bold text-center text-cyan-600'>
                    Multi Brand <span className='text-white'> Cars</span>
                </h2>
                <p className='text-2xl text-center font-serif text-white'>Offers the best deals of Best Brands</p>

                <BrandCars />
                

                <div className='text-center pb-5'>
                    <button className='border px-5 py-3 shadow-md shadow-cyan-600 rounded-full border-cyan-600 ' onClick={() => navigate('/rental-cars')} >Explore all Cars <i class="fa-solid fa-arrow-right text-cyan-600"></i></button>
                </div>

                <AboutSection />
                <LogoSlider />


            </div>



            <Trust />
            <ContactSection/>
        </div>
    )
}

export default Home