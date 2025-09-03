import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dummyCarData } from "../assets/assets.js";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import Feedback from "../components/Feedback.jsx";

const CarDetails = () => {
  const { _id } = useParams();
  const carId = _id;
  const car = dummyCarData.find((c) => c._id === carId);
  const navigate = useNavigate();

  if (!car) {
    return <h2 className="text-center mt-10 text-red-500">Car not found</h2>;
  }

  const [thumbnail, setThumbnail] = useState(car.images?.[0] || car.image || "");

  return (
    <div>
      <div className="max-w-6xl w-full mx-auto py-6">
        <p className="text-sm text-white">
          <span>Home</span> /<span> Cars</span> /<span> {car.category}</span> /
          <span className="text-cyan-600">
            {" "}
            {car.brand} {car.model}
          </span>
        </p>

        <div className="flex flex-col md:flex-row gap-16 mt-4">
      
          <div className="flex gap-3">
            <div className="flex flex-col gap-3">
              {car.images.map((image) => (
                <div
                  key={image}
                  onClick={() => setThumbnail(image)}
                  className={`border max-w-24 rounded overflow-hidden cursor-pointer ${thumbnail === image
                      ? "border-cyan-600"
                      : "border-gray-300"
                    }`}
                >
                  <img src={image} alt="Thumbnail" />
                </div>
              ))}
            </div>

            <div className="border border-gray-300 max-w-200 rounded overflow-hidden">
              <img
                src={thumbnail}
                alt="Selected Car"
                className="w-full h-full object-cover bg-cover"
              />
            </div>
          </div>

          <div className="text-sm w-full md:w-1/2 text-white border p-2">
            <h1 className="text-3xl font-medium">
              {car.brand} {car.model}
            </h1>

       
            <div className="flex items-center gap-0.5 mt-1">
              {Array(5)
                .fill("")
                .map((_, i) => {
                  const ratingValue = i + 1;
                  if (car.rating >= ratingValue) {
                    return <FaStar key={i} size={14} />;
                  } else if (car.rating >= ratingValue - 0.5) {
                    return <FaStarHalfAlt key={i} className="text-cyan-600" size={14} />;
                  } else {
                    return <FaRegStar key={i} className="text-amber-500" size={14} />;
                  }
                })}
              <p className="text-base ml-2 text-white-500">({car.rating})</p>
            </div>

         
            <div className="mt-6">
              <p className="text-white line-through">Per-Day: ₹{car.pricePerDay + 50}</p>
              <p className="text-2xl font-medium">Per-Day ₹{car.pricePerDay}</p>
              <span className="text-white">(inclusive of all taxes)</span>
            </div>

            <p className="text-base font-medium mt-6">About Car</p>
            <ul className="list-disc ml-4 text-gray-white">
              <li>{car.year} Model</li>
              <li>{car.transmission} Transmission</li>
              <li>{car.fuel_type} Engine</li>
              <li>{car.seats} Seats</li>
              <li>Available at {car.location}</li>
            </ul>



            <div className="flex items-center mt-10 gap-4 text-base">
              <button
                className="w-full py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition"
                onClick={() =>
                  navigate("/rentalform", {
                    state: {
                      carType: `${car.brand} ${car.model}`,
                      pricePerDay: car.pricePerDay,
                    },
                  })
                }
              >
                Rental Now
              </button>
            </div>

          </div>
        </div>
      </div>

      <h2 className="text-4xl text-white text-center font-bold mt-9">
        Our Happy Clients
      </h2>
      <Feedback />
    </div>
  );
};

export default CarDetails;
