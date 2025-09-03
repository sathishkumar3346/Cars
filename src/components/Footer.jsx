import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-cyan-600 to-black text-white">
  
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
       
        <div>
          <div className="flex items-center space-x-2">
            <div className="text-white text-3xl font-bold">G</div>
            <span className="text-xl font-semibold">CarRental</span>
          </div>
          <p className="mt-4 text-gray-300 text-sm">
            Premium car rental service with a wide selection of luxury and
            everyday vehicles for all your driving needs.
          </p>

        
          <div className="flex space-x-4 mt-4 text-gray-300 text-lg">
            <a href="#" className="hover:text-cyan-300">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-cyan-300">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-cyan-300">
              <FaTwitter />
            </a>
            <a href="mailto:info@example.com" className="hover:text-cyan-300">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">QUICK LINKS</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link to="/" className="hover:text-cyan-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/About-US" className="hover:text-cyan-300">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/rental-cars" className="hover:text-cyan-300">
                Rental Cars
              </Link>
            </li>
            <li>
              <Link to="/new-cars" className="hover:text-cyan-300">
                New Cars
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="hover:text-cyan-300">
               Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold mb-4">RESOURCES</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link to="/help" className="hover:text-cyan-300">
                Help Center
              </Link>
            </li>
            <li>
              <Link to="/help" className="hover:text-cyan-300">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/help" className="hover:text-cyan-300">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/help" className="hover:text-cyan-300">
                Insurance
              </Link>
            </li>
          </ul>
        </div>

      
        <div>
          <h4 className="font-semibold mb-4">CONTACT</h4>
          <ul className="text-gray-300 text-sm space-y-2">
            <li>1234 Luxury Drive</li>
            <li>Kalugu malai, Kovil vasel</li>
            <li>+91 9965141175</li>
            <li>
              <a href="mailto:info@example.com" className="hover:text-cyan-300">
                info@harshacars.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      
      <div className="border-t border-gray-700 py-6 mt-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2025 Brand. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/help" className="hover:text-cyan-300">
              Privacy
            </Link>
            <span>|</span>
            <Link to="/help" className="hover:text-cyan-300">
              Terms
            </Link>
            <span>|</span>
            <Link to="/help" className="hover:text-cyan-300">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
