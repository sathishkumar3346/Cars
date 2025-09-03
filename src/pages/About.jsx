import React from "react";
import bmw from "../assets/BMW.jpg";
import Team from "../components/Team";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      
      <h2 className="text-4xl text-center font-bold bg-gradient-to-t from-cyan-600 to-white bg-clip-text text-transparent mt-10">
        About Us
      </h2>


      <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-4 mt-10">
      
        <div className="relative shadow-lg shadow-cyan-600 rounded-2xl overflow-hidden w-full md:w-auto flex justify-center">
          <img
            className="w-full sm:w-3/4 md:w-[400px] object-cover rounded-2xl"
            src={bmw}
            alt="Car Showroom"
          />
          <div className="gap-1 max-w-72 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white size-16 flex items-center justify-center aspect-square backdrop-blur rounded-full">
            <svg
              width="15"
              height="18"
              viewBox="0 0 15 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.027 3.371c0-1.374 1.512-2.213 2.678-1.484l9.11 5.693a1.75 1.75 0 0 1 0 2.969l-9.11 5.693c-1.166.729-2.678-.11-2.678-1.484z"
                fill="#fff"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

       
        <div className="text-sm text-slate-600 max-w-lg">
          <h1 className="text-xl uppercase font-semibold text-cyan-700">
            Who We Are
          </h1>
          <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-cyan-600 to-white"></div>
          <p className="mt-8 text-white">
            At <span className="font-semibold text-cyan-600">DriveNow</span>, we
            provide high-quality cars for sale and rental at affordable prices.
            Whether you’re looking for a reliable daily ride or a luxury car for
            a special occasion, we’ve got you covered.
          </p>
          <p className="mt-4 text-white">
            Our mission is to make car ownership and rental simple, transparent,
            and stress-free. From compact city cars to spacious SUVs, we offer a
            wide range of vehicles to meet every need.
          </p>
          <p className="mt-4 text-white">
            With flexible rental plans, financing options, and exceptional
            customer service, we help you get on the road faster and enjoy every
            mile with confidence.
          </p>
          <Link
            to="/rental-cars"
            className="inline-flex items-center gap-2 mt-8 hover:-translate-y-0.5 transition bg-gradient-to-r from-cyan-600 to-black border py-3 px-8 rounded-full text-white"
          >
            <span>Explore Our Cars</span>
            <svg
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
                fill="#fff"
              />
            </svg>
          </Link>
        </div>
      </section>

    
      <section className="m-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center max-w-4xl mx-auto">
          <div className="bg-white shadow-md shadow-cyan-200 p-6 rounded-2xl">
            <h2 className="text-3xl font-bold text-cyan-600">500+</h2>
            <p className="mt-2 text-slate-600">Cars Available</p>
          </div>
          <div className="bg-white shadow-md shadow-cyan-200 p-6 rounded-2xl">
            <h2 className="text-3xl font-bold text-cyan-600">10K+</h2>
            <p className="mt-2 text-slate-600">Happy Customers</p>
          </div>
          <div className="bg-white shadow-md shadow-cyan-200 p-6 rounded-2xl">
            <h2 className="text-3xl font-bold text-cyan-600">15</h2>
            <p className="mt-2 text-slate-600">City Locations</p>
          </div>
        </div>
      </section>

      
      <Team />
    </>
  );
};

export default About;
