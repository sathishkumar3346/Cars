import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Rentalform() {
  const location = useLocation();
  const { carType, pricePerDay } = location.state || {}; 
  const Navigate=useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    carType: carType || "",
    pickupDate: "",
    returnDate: "",
    pickupLocation: "",
    notes: "",
  });

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (formData.pickupDate && formData.returnDate && pricePerDay) {
      const start = new Date(formData.pickupDate);
      const end = new Date(formData.returnDate);
      const diffTime = end - start;
      if (diffTime >= 0) {
        const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;
        setTotalPrice(days * pricePerDay);
      } else {
        setTotalPrice(0);
      }
    }
  }, [formData.pickupDate, formData.returnDate, pricePerDay]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", { ...formData, totalPrice });
    alert(`Your rental request has been submitted!\nTotal Price: ₹${totalPrice}`);
    Navigate('/')
    setFormData({
      name: "",
      email: "",
      phone: "",
      carType: carType || "",
      pickupDate: "",
      returnDate: "",
      pickupLocation: "",
      notes: "",
    });
    setTotalPrice(0);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          Car Rental Request Form
        </h2>

   
        {carType && (
          <div className="mb-4 text-center bg-gray-200 p-3 rounded-lg">
            <p className="text-lg font-semibold">{carType}</p>
            <p className="text-gray-600">₹{pricePerDay} per day</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
        
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

         
          <div>
            <label className="block text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

         
          <div>
            <label className="block text-gray-700 mb-1">Car Type</label>
            <input
              type="text"
              name="carType"
              value={formData.carType}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 bg-gray-100"
              readOnly
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">Pick-Up Date</label>
              <input
                type="date"
                name="pickupDate"
                value={formData.pickupDate}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Return Date</label>
              <input
                type="date"
                name="returnDate"
                value={formData.returnDate}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>
          </div>

        
          {totalPrice > 0 && (
            <div className="bg-green-100 text-green-800 text-center py-2 rounded-lg font-semibold">
              Total Price: ₹{totalPrice}
            </div>
          )}

        
          <div>
            <label className="block text-gray-700 mb-1">Pick-Up Location</label>
            <input
              type="text"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleChange}
              placeholder="City or location"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

      
          <div>
            <label className="block text-gray-700 mb-1">Special Requests</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Any special request (GPS, baby seat, etc.)"
              rows="3"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>
          </div>

       
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-300"   >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}
