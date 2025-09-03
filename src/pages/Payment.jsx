import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const car = location.state?.car || {
    brand: "Toyota",
    model: "Fortuner",
    year: 2024,
    transmission: "Automatic",
    price: 3000,
    image: "https://via.placeholder.com/300",
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    paymentMethod: "COD",
  });

  const [totalPrice] = useState(car?.price || 0); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.paymentMethod === "EMI") {
      navigate("/emi", { state: { car, formData, totalPrice } });
      return;
    }

    if (formData.paymentMethod === "UPI" || formData.paymentMethod === "CARD") {
      navigate("/paymentoptions", { state: { car, formData, totalPrice } });
      return;
    }

    alert("Booking placed successfully!");
    navigate("/");
  };

  return (
    <div className="max-w-4xl mx-auto my-20 mt-8 p-6  bg-white rounded-lg shadow-lg md:p-20">
    
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={car.image}
          alt={car.model}
          className="w-64 h-40 object-cover rounded-lg border"
        />
        <div>
          <h1 className="text-2xl font-bold">
            {car.brand} {car.model}
          </h1>
          <p className="text-gray-600">
            {car.year} • {car.transmission}
          </p>
          <p className="text-lg font-semibold mt-2">
            Price: ₹{car.price}
          </p>
          <p className="text-lg font-semibold text-green-600">
            Total Price: ₹{totalPrice}
          </p>
        </div>
      </div>


      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full border rounded-lg px-3 py-2"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="w-full border rounded-lg px-3 py-2"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full border rounded-lg px-3 py-2"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="address"
          placeholder="Delivery Address"
          className="w-full border rounded-lg px-3 py-2"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <select
          name="paymentMethod"
          className="w-full border rounded-lg px-3 py-2"
          value={formData.paymentMethod}
          onChange={handleChange}
        >
          <option value="COD">PayNow</option>
          <option value="EMI">EMI Payment</option>
          <option value="UPI">UPI</option>
          <option value="CARD">Card Payment</option>
        </select>

        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600 transition"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default Payment;
