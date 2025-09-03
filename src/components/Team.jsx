import {member} from "../assets/assets.js";

const Team = () => {
  return (
    <div className="flex flex-col items-center text-center m-10">
      <h3 className="text-lg font-medium text-white mb-2">Contact Us</h3>
      <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-cyan-300">
        Meet Our Team
      </h1>
      <p className="w-3/5 mb-14 text-white text-sm">
        We are passionate about providing the best car rental and sales experience.
        Meet the dedicated professionals who make your journey smooth and hassle-free.
      </p>

      <div className="flex flex-wrap gap-6 items-center justify-center">
     
        <div className="group flex flex-col items-center py-8 text-sm bg-white border border-cyan-300/60 w-64 rounded-md cursor-pointer hover:border-blue-600 hover:bg-cyan-600 transition">
          <img className="w-25 rounded-full" src={member[0].image} alt={member[0].name} />
          <h2 className="text-cyan-700 group-hover:text-white text-lg font-medium mt-2">
            {member[0].name}
          </h2>
          <p className="text-cyan-500 group-hover:text-white/80">Fleet Manager</p>
          <p className="text-center text-cyan-500/60 group-hover:text-white/60 w-3/4 mt-4">
            Ensures our car fleet is always ready, clean, and reliable for every customer.
          </p>
          <div className="flex items-center space-x-4 mt-6 text-cyan-500 group-hover:text-white">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>

     
        <div className="group flex flex-col items-center py-8 text-sm bg-white border border-cyan-300/60 w-64 rounded-md cursor-pointer hover:border-blue-600 hover:bg-cyan-600 transition">
          <img className="w-31 rounded-full" src={member[1].image} alt={member[1].name} />
          <h2 className="text-cyan-700 group-hover:text-white text-lg font-medium mt-2">
            {member[1].name}
          </h2>
          <p className="text-cyan-500 group-hover:text-white/80">Sales Executive</p>
          <p className="text-center text-cyan-500/60 group-hover:text-white/60 w-3/4 mt-4">
            Helps customers find the perfect car — whether they want to buy or rent.
          </p>
          <div className="flex items-center space-x-4 mt-6 text-cyan-500 group-hover:text-white">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

      
        <div className="group flex flex-col items-center py-8 text-sm bg-white border border-cyan-300/60 w-64 rounded-md cursor-pointer hover:border-blue-600 hover:bg-cyan-600 transition">
          <img className="w-24 rounded-full" src={member[2].image} alt={member[2].name} />
          <h2 className="text-cyan-700 group-hover:text-white text-lg font-medium mt-2">
            {member[2].name}
          </h2>
          <p className="text-cyan-500 group-hover:text-white/80">Customer Support</p>
          <p className="text-center text-cyan-500/60 group-hover:text-white/60 w-3/4 mt-4">
            Dedicated to answering questions and ensuring a smooth rental experience.
          </p>
          <div className="flex items-center space-x-4 mt-6 text-cyan-500 group-hover:text-white">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
