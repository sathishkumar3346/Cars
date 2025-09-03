import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PaymentOptions() {
  const [method, setMethod] = useState("");
  const navigate = useNavigate()
  const handleSubmit = () => {
    alert("Booking placed successfully!");
    navigate("/");
  }
  return (
    <div className="max-w-md mx-auto my-20 p-10 bg-white shadow-2xl rounded-2xl">
      <h2 className="text-xl font-semibold mb-4 text-center">Choose Payment Method</h2>

      <div className="flex flex-col gap-4">
        <button
          onClick={() => setMethod("UPI")}
          className={`py-3 rounded-lg border ${method === "UPI" ? "bg-green-500 text-white" : "bg-gray-100"
            }`}
        >
          Pay with UPI
        </button>

        <button
          onClick={() => setMethod("CARD")}
          className={`py-3 rounded-lg border ${method === "CARD" ? "bg-blue-500 text-white" : "bg-gray-100"
            }`}
        >
          Pay with Card
        </button>
      </div>

      {method === "UPI" && (
        <div className="mt-4">
          <h3 className="font-medium">Enter UPI ID</h3>
          <input
            type="text"
            placeholder="yourupi@bank"
            className="w-full border px-3 py-2 rounded-lg mt-2"
          />
          <button className="w-full mt-3 bg-green-500 text-white py-2 rounded-lg">
            Pay Now
          </button>
        </div>
      )}

      {method === "CARD" && (
        <div className="mt-4">
          <h3 className="font-medium">Enter Card Details</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Card Number"
              className="w-full border px-3 py-2 rounded-lg mt-2"
              required
            />
            <input
              type="text"
              placeholder="Expiry Date (MM/YY)"
              className="w-full border px-3 py-2 rounded-lg mt-2"
              required
            />
            <input
              type="text"
              placeholder="CVV"
              className="w-full border px-3 py-2 rounded-lg mt-2"
              required
            />
            <button className="w-full mt-3 bg-blue-500 text-white py-2 rounded-lg" >
              Pay Now
            </button>
          </form>

        </div>
      )}
    </div>
  );
}
