import React, { useState } from "react";
import {
  FaUserFriends,
  FaGasPump,
  FaCogs,
  FaMapMarkerAlt,
  FaSearch,
} from "react-icons/fa";
import { dummyCarData } from "../assets/assets.js";
import { useNavigate } from "react-router-dom";

const FeaturedCar = () => {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [filters, setFilters] = useState({
    category: "",
    fuel: "",
    transmission: "",
  });

 
  const filteredCars = dummyCarData
    .filter((car) =>
      `${car.brand} ${car.model} ${car.category}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    )
    .filter((car) => (filters.category ? car.category === filters.category : true))
    .filter((car) => (filters.fuel ? car.fuel_type === filters.fuel : true))
    .filter((car) =>
      filters.transmission ? car.transmission === filters.transmission : true
    )
    .sort((a, b) => {
      if (sortOption === "price-low-high") return a.pricePerDay - b.pricePerDay;
      if (sortOption === "price-high-low") return b.pricePerDay - a.pricePerDay;
      if (sortOption === "year-new-old") return b.year - a.year;
      if (sortOption === "year-old-new") return a.year - b.year;
      return 0;
    });

  return (
    <div className="p-4">
    
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
       
        <div className="w-full md:w-1/2 flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search by brand, model, or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full outline-none text-gray-700"
          />
        </div>

       
        <div className="flex flex-wrap gap-3">
          
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border border-gray-300 rounded-full px-4 py-2 text-white shadow-sm"
          >
            <option className="text-black" value="" >Sort</option>
            <option className="text-black" value="price-low-high">Price: Low → High</option>
            <option className="text-black" value="price-high-low">Price: High → Low</option>
            <option className="text-black" value="year-new-old">Year: New → Old</option>
            <option className="text-black" value="year-old-new">Year: Old → New</option>
          </select>

          
          <select
            value={filters.category}
            onChange={(e) => setFilters({ ...filters, category: e.target.value })}
            className="border border-gray-300 rounded-full px-4 py-2 text-white shadow-sm"
          >
            <option value="" className="text-black">All Categories</option>
            <option value="SUV" className="text-black">SUV</option>
            <option value="Sedan" className="text-black">Sedan</option>

          </select>

        
          <select
            value={filters.fuel}
            onChange={(e) => setFilters({ ...filters, fuel: e.target.value })}
            className="border border-gray-300 rounded-full px-4 py-2 text-white shadow-sm"
          >
            <option value="" className="text-black">All Fuels</option>
            <option value="Petrol" className="text-black">Petrol</option>
            <option value="Diesel" className="text-black">Diesel</option>
            <option value="Hybrid" className="text-black">Hybrid</option>
          </select>

         
          <select
            value={filters.transmission}
            onChange={(e) =>
              setFilters({ ...filters, transmission: e.target.value })
            }
            className="border border-gray-300 rounded-full px-4 py-2 text-white shadow-sm"
          >
            <option value="" className="text-black">All Transmission</option>
            <option value="Manual" className="text-black">Manual</option>
            <option value="Automatic" className="text-black">Automatic</option>
          </select>
        </div>
      </div>

     
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 flex justify-center">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => {
            const isOddId = Number(car._id) % 2 !== 0;

            return (
              <div
                key={car._id}
                className="relative bg-white shadow-md shadow-cyan-600 rounded-xl overflow-hidden hover:shadow-xl hover:scale-[1.02] transition duration-500 ease"
              >
                <div className="relative">
                  <img
                    src={car.image}
                    alt={car.name}
                    className={`w-full h-48 object-cover ${isOddId ? "opacity-50" : ""
                      }`}
                  />

                  {isOddId && (
                    <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
                      <span className="bg-red-600 text-white text-sm px-4 py-2 rounded-md">
                        Currently Unavailable
                      </span>
                    </div>
                  )}

                  {!isOddId && (
                    <span className="absolute top-2 left-2 bg-cyan-600 text-white text-xs px-3 py-1 rounded-full">
                      Available Now
                    </span>
                  )}
                  <span className="absolute bottom-2 right-2 bg-black text-white text-sm px-3 py-1 rounded-md">
                    ₹{car.pricePerDay} / day
                  </span>
                </div>

                <div className="p-4">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-lg text-black font-semibold">
                        {car.brand} {car.model}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {car.category} - {car.year}
                      </p>
                    </div>

                    {!isOddId && (
                      <button
                        className="text-white bg-black rounded-full py-2 px-4 text-sm"
                        onClick={() => navigate(`/car/${car._id}`)}
                      >
                        Book-Now
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-4 text-gray-600 text-sm">
                    <div className="flex items-center gap-2">
                      <FaUserFriends className="text-cyan-600" /> {car.seats} Seats
                    </div>
                    <div className="flex items-center gap-2">
                      <FaGasPump className="text-cyan-600" /> {car.fuel_type}
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCogs className="text-cyan-600" /> {car.transmission}
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-cyan-600" /> {car.location}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No cars found matching your search.
          </p>
        )}
      </div>
    </div>
  );
};

export default FeaturedCar;
