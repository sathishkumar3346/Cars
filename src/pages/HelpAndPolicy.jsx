import React, { useRef } from "react";

const HelpAndPolicy = () => {
  // Refs for each section
  const helpRef = useRef(null);
  const termsRef = useRef(null);
  const privacyRef = useRef(null);
  const insuranceRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
   
      <div className="bg-black text-white flex border justify-center gap-8 py-4 sticky top-0 z-10">
        <button onClick={() => scrollToSection(helpRef)} className="hover:text-cyan-400">
          Help Center
        </button>
        <button onClick={() => scrollToSection(termsRef)} className="hover:text-cyan-400">
          Terms of Service
        </button>
        <button onClick={() => scrollToSection(privacyRef)} className="hover:text-cyan-400">
          Privacy Policy
        </button>
        <button onClick={() => scrollToSection(insuranceRef)} className="hover:text-cyan-400">
          Insurance
        </button>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-10 space-y-16">
        
    
        <section ref={helpRef} className="bg-white shadow-md p-6 rounded-2xl">
          <h1 className="text-3xl font-bold text-cyan-700">Help Center</h1>
          <p className="mt-4 text-gray-700">
            Welcome to our Help Center! Here you can find all the information about 
            our car rental and car buying process.
          </p>

          <h2 className="text-xl font-semibold mt-6">Car Rental Process</h2>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>Choose your preferred car model from our rental catalog.</li>
            <li>Select rental duration and pick-up location.</li>
            <li>Provide necessary documents (license, ID, etc.).</li>
            <li>Make payment securely and get confirmation instantly.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6">Car Buying Process</h2>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>Browse available cars with detailed specs & prices.</li>
            <li>Schedule a test drive at your nearest location.</li>
            <li>Finalize purchase with flexible financing options.</li>
            <li>Complete registration and get your car delivered.</li>
          </ul>
        </section>

 
        <section ref={termsRef} className="bg-white shadow-md p-6 rounded-2xl">
          <h1 className="text-3xl font-bold text-cyan-700">Terms of Service</h1>
          <p className="mt-4 text-gray-700">
            By renting or purchasing a vehicle from us, you agree to our terms and conditions.
            This includes returning rental cars on time, maintaining the vehicle in good condition,
            and following all traffic regulations.
          </p>
          <p className="mt-2 text-gray-700">
            Late returns may incur additional fees. Damage caused by negligence will be charged
            to the renter or buyer.
          </p>
        </section>

      
        <section ref={privacyRef} className="bg-white shadow-md p-6 rounded-2xl">
          <h1 className="text-3xl font-bold text-cyan-700">Privacy Policy</h1>
          <p className="mt-4 text-gray-700">
            We value your privacy. Any personal information you provide (such as name, email,
            license details) will only be used for processing your rental or purchase.
          </p>
          <p className="mt-2 text-gray-700">
            We do not sell your data to third parties. All payments are encrypted and secure.
          </p>
        </section>

        <section ref={insuranceRef} className="bg-white shadow-md p-6 rounded-2xl">
          <h1 className="text-3xl font-bold text-cyan-700">Insurance</h1>
          <p className="mt-4 text-gray-700">
            Our rentals include basic insurance coverage. You may opt for additional 
            coverage for theft, collision damage, and roadside assistance.
          </p>
          <p className="mt-2 text-gray-700">
            For car purchases, we provide guidance on selecting the right insurance 
            plan based on your needs and budget.
          </p>
        </section>
      </div>
    </div>
  );
};

export default HelpAndPolicy;
