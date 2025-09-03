import React from 'react'
import { FiCheckCircle, FiPhoneCall } from "react-icons/fi";
import { FaMoneyBillWave, FaRegHandshake } from "react-icons/fa";
const Trust = () => {
    return (
        <div>
            <section className="py-12 ">
                <div className="max-w-6xl mx-auto  text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-10 text-white">
                        Why Choose <span className="text-cyan-600">US?</span>
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 py-6 px-3">
                        
                        <div className="bg-black text-white border border-cyan-600 p-6 rounded-2xl shadow-sm hover:shadow-md shadow-cyan-600 transition">
                            <FiCheckCircle className="text-cyan-600 text-5xl mx-auto mb-4" />
                            <h3 className="text-lg font-semibold mb-2">Verified Cars</h3>
                            <p className=" text-sm">
                                All our cars go through strict inspection for quality and safety.
                            </p>
                        </div>

                        
                        <div className="bg-black text-white border border-cyan-600 p-6 rounded-2xl shadow-sm hover:shadow-md shadow-cyan-600 transition">
                            <FaMoneyBillWave className="text-cyan-600 text-5xl mx-auto mb-4" />
                            <h3 className="text-lg font-semibold mb-2">Best Price Guarantee</h3>
                            <p className=" text-sm">
                                Get the best deals in the market with transparent pricing.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-black text-white border border-cyan-600 p-6 rounded-2xl shadow-sm hover:shadow-md shadow-cyan-600 transition">
                            <FaRegHandshake className="text-cyan-600 text-5xl mx-auto mb-4" />
                            <h3 className="text-lg font-semibold mb-2">Easy Financing</h3>
                            <p className=" text-sm">
                                Hassle-free financing options available for all buyers.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-black text-white border border-cyan-600 p-6 rounded-2xl shadow-sm hover:shadow-md shadow-cyan-600 transition">
                            <FiPhoneCall className="text-cyan-600 text-5xl mx-auto mb-4" />
                            <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
                            <p className=" text-sm">
                                Our team is here to help you anytime, anywhere.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Trust