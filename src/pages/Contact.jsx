export default function Contact() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>

            <section className="max-w-6xl mx-auto px-4 py-16">
                <h1 className="text-3xl font-semibold text-cyan-600 text-center uppercase">Contact <span className="text-white">Us</span></h1>
                <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-cyan-600 to-white mx-auto mt-2"></div>

              
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
                    
                 
                    <div className="bg-white shadow-lg shadow-indigo-200 p-6 rounded-2xl">
                        <h2 className="text-xl font-semibold text-cyan-600 mb-4">Get In Touch</h2>
                        <form className="flex flex-col gap-4">
                            <input 
                                type="text" 
                                placeholder="Your Name"
                                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            />
                            <input 
                                type="email" 
                                placeholder="Your Email"
                                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            />
                            <textarea 
                                placeholder="Your Message"
                                rows="4"
                                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            ></textarea>
                            <button 
                                type="submit"
                                className="bg-gradient-to-r from-cyan-600 to-black text-white py-3 rounded-lg hover:-trancyan-y-0.5 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

             
                    <div className="space-y-6">
                        <div className="bg-white shadow-lg shadow-indigo-200 p-6 rounded-2xl">
                            <h2 className="text-xl font-semibold text-black-700 mb-4">Contact Information</h2>
                            <p className="text-black"><strong>Phone:</strong> +91 98765 43210</p>
                            <p className="text-black"><strong>Email:</strong> support@drivenow.com</p>
                            <p className="text-black"><strong>Address:</strong> 123 Main Street, Chennai, India</p>
                        </div>

                   
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.007514048963!2d80.22096677491863!3d13.04322211327099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52665a2a730f97%3A0x4d9a7e42d263b75e!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1693123456789"
                            width="100%"
                            height="250"
                            className="rounded-2xl shadow-lg"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section>
        </>
    );
}
