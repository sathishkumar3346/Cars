const ContactSection = () => {
  return (
    <section className="px-4 py-12 flex justify-center">
      <form className="flex flex-col items-center text-sm w-full max-w-3xl p-6 md:p-10 border border-gray-200 rounded-3xl bg-white shadow-md">
        {/* Heading Section */}
        <p className="text-lg text-cyan-600 font-medium pb-2 text-center">Contact Us</p>
        <h1 className="text-2xl md:text-4xl font-semibold text-slate-700 pb-4 text-center">
          Get in touch with us
        </h1>
        <p className="text-sm md:text-base text-gray-500 text-center pb-10 leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          <br className="hidden sm:block" />
          Lorem Ipsum has been the industry's standard dummy text.
        </p>

        {/* Name & Email Fields */}
        <div className="flex flex-col md:flex-row items-center gap-6 w-full">
          <div className="w-full">
            <label className="text-black/70 text-sm md:text-base" htmlFor="name">Your Name</label>
            <input
              className="h-12 p-2 mt-2 w-full border border-gray-300 rounded outline-none focus:border-indigo-300 transition"
              type="text"
              required
            />
          </div>
          <div className="w-full">
            <label className="text-black/70 text-sm md:text-base" htmlFor="email">Your Email</label>
            <input
              className="h-12 p-2 mt-2 w-full border border-gray-300 rounded outline-none focus:border-indigo-300 transition"
              type="email"
              required
            />
          </div>
        </div>

        {/* Message Field */}
        <div className="mt-6 w-full">
          <label className="text-black/70 text-sm md:text-base" htmlFor="message">Message</label>
          <textarea
            className="w-full mt-2 p-2 h-32 md:h-40 border border-gray-300 rounded resize-none outline-none focus:border-indigo-300 transition"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 bg-cyan-600 hover:bg-cyan-700 text-white h-12 w-full md:w-56 rounded-lg font-medium active:scale-95 transition-transform"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
