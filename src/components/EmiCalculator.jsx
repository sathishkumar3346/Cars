import { useState, useMemo, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function EmiCalculator() {
  const location = useLocation();
  const navigate = useNavigate();

  const car = location.state?.car || null;
  const formData = location.state?.formData || {};
  const totalPrice = location.state?.totalPrice || car?.price || 1351492; // ✅ use car.price first

  const [onRoadPrice, setOnRoadPrice] = useState(totalPrice);
  const [downPayment, setDownPayment] = useState(100000);
  const [interestRate, setInterestRate] = useState(9.8);
  const [loanPeriod, setLoanPeriod] = useState(5);

  useEffect(() => {
    setOnRoadPrice(totalPrice); 
  }, [totalPrice]);

  const adjustedDownPayment =
    downPayment > onRoadPrice ? onRoadPrice : downPayment;

  const { emi, loanAmount, totalPayable } = useMemo(() => {
    const principal = onRoadPrice - adjustedDownPayment;
    const monthlyRate = interestRate / 12 / 100;
    const months = loanPeriod * 12;

    const emiCalc =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    const totalAmount = emiCalc * months;

    return {
      emi: Math.round(emiCalc),
      loanAmount: principal,
      totalPayable: Math.round(totalAmount),
    };
  }, [onRoadPrice, adjustedDownPayment, interestRate, loanPeriod]);

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-2xl rounded-2xl">
    
      {car && (
        <div className="mb-4 flex flex-col items-center text-center">
          <img
            src={car.image}
            alt={car.model}
            className="w-40 h-28 object-cover rounded-lg border"
          />
          <h2 className="text-xl font-bold mt-2">
            {car.brand} {car.model}
          </h2>
          <p className="text-gray-500">
            {car.year} • {car.transmission}
          </p>
          <p className="text-lg font-semibold text-green-600 mt-1">
            Price: ₹{car.price.toLocaleString()}
          </p>
        </div>
      )}

      <h2 className="text-xl font-semibold mb-4 text-center">Calculate EMI</h2>

      <div className="mb-4">
        <label className="block text-gray-600 mb-1">On-Road Price</label>
        <input
          type="number"
          min="0"
          value={onRoadPrice}
          onChange={(e) => setOnRoadPrice(Number(e.target.value))}
          className="w-full border rounded-lg px-3 py-2 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

 
      <div className="mb-6">
        <label className="block text-gray-600 mb-2">Down Payment</label>
        <input
          type="range"
          min="0"
          max={onRoadPrice}
          step="10000"
          value={adjustedDownPayment}
          onChange={(e) => setDownPayment(Number(e.target.value))}
          className="w-full accent-orange-500"
        />
        <div className="flex justify-between text-sm mt-1 text-gray-500">
          <span>₹0</span>
          <span>₹{onRoadPrice.toLocaleString()}</span>
        </div>
        <p className="text-center font-medium mt-1">
          Selected: ₹{adjustedDownPayment.toLocaleString()}
        </p>
      </div>

  
      <div className="mb-6">
        <label className="block text-gray-600 mb-2">Bank Interest Rate</label>
        <input
          type="range"
          min="8"
          max="18"
          step="0.1"
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
          className="w-full accent-orange-500"
        />
        <div className="flex justify-between text-sm mt-1 text-gray-500">
          <span>8%</span>
          <span>18%</span>
        </div>
        <p className="text-center font-medium mt-1">
          Selected: {interestRate}%
        </p>
      </div>

  
      <div className="mb-6">
        <label className="block text-gray-600 mb-2">Loan Period (Years)</label>
        <div className="grid grid-cols-7 gap-2">
          {[1, 2, 3, 4, 5, 6, 7].map((year) => (
            <button
              key={year}
              onClick={() => setLoanPeriod(year)}
              className={`py-2 rounded-lg border transition ${
                loanPeriod === year
                  ? "bg-orange-500 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

   
      <div className="mb-4 text-gray-700">
        <p className="flex justify-between">
          <span>Total Loan Amount:</span>
          <span>₹{loanAmount.toLocaleString()}</span>
        </p>
        <p className="flex justify-between">
          <span>Payable Amount:</span>
          <span>₹{totalPayable.toLocaleString()}</span>
        </p>
      </div>

     
      <div className="bg-orange-50 p-4 rounded-lg text-center">
        <p className="text-lg font-semibold">EMI per month</p>
        <p className="text-2xl font-bold text-orange-600">
          ₹{emi.toLocaleString()}
        </p>
        <p className="text-sm text-gray-500">Calculated on On-Road Price</p>
      </div>

 
      <button
        className="w-full mt-5 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl shadow-md"
        onClick={() =>
          navigate("/paymentoptions", {
            state: { car, formData, totalPrice, emi, loanAmount, totalPayable },
          })
        }
      >
        Pay Now
      </button>
    </div>
  );
}
