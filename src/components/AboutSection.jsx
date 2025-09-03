import React from "react";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
    const navigate=useNavigate()
    return (
        <section className="flex flex-col md:flex-row h-screen w-full">
          
            <div className="w-full md:w-1/2 h-1/2 md:h-full">
                <video
                    src="https://www.bigboytoyz.com/videos/hp-explore-video-new.webm"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                ></video>
            </div>


            <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center items-center bg-black px-6 text-center">
                <p className="text-cyan-500 text-lg mb-4 tracking-widest font-semibold">
                    LET'S KEEP IT SIMPLE.
                </p>
                <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight">
                    We are the best when it <br />
                    comes to exotic cars.
                </h2>
                <button className="border px-5 py-3 mt-5 shadow-sm shadow-cyan-600 rounded-full border-cyan-600" onClick={()=>navigate('/About-US')}>About Us</button>
                
            </div>
        </section>
    );
};

export default AboutSection;
