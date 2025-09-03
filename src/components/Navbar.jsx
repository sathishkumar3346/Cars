import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        setOpen(false);
        navigate(path);
    };

    return (
        <div>
            <nav className="flex justify-between items-center px-9 shadow py-5 bg-black shadow-sm shadow-white">

                <div className="block lg:flex justify-between items-center w-210">
                    <div className="flex items-center">
                        <Link to='/'> <h2 className="text-2xl lg:text-4xl font-bold text-cyan-600">
                            Harsha{" "}
                            <span className="text-xl lg:text-3xl font-medium text-white">
                                Cars
                            </span>
                        </h2></Link>

                    </div>
                </div>

                <div>
                    <ul className="hidden text-white md:flex items-center gap-8">
                        <li>
                            <Link
                                to="/"
                                className="hover:underline underline-offset-8 decoration-white"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/About-US"
                                className="hover:underline underline-offset-8 decoration-white"
                            >
                                About US
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/rental-cars"
                                className="hover:underline underline-offset-8 decoration-white"
                            >
                                Rental Cars
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/new-cars"
                                className="hover:underline underline-offset-8 decoration-white"
                            >
                                New Cars
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/Contact"
                                className="hover:underline underline-offset-8 decoration-white"
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/login"
                                className="cursor-pointer px-6 py-2 hover:bg-cyan-600 hover:text-white transition font-bold border hover:border-none rounded-full"
                            >
                                Login
                            </Link>
                        </li>
                    </ul>


                    <button
                        onClick={() => setOpen(true)}
                        className="md:hidden focus:outline-none"
                    >
                        <i className="fa-solid fa-bars text-white text-2xl"></i>
                    </button>


                    <div
                        className={`fixed top-0 right-0 h-full w-64 bg-black text-white z-100 shadow-md py-6 px-5 text-lg transform transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"
                            } md:hidden`}
                    >

                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-4 right-4 text-white text-2xl"
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </button>

                        <div className="flex flex-col gap-6 mt-10">
                            <button onClick={() => handleNavigation("/")}>Home</button>
                            <button onClick={() => handleNavigation("/About-US")}>
                                About US
                            </button>
                            <button onClick={() => handleNavigation("/rental-cars")}>
                                Rental Cars
                            </button>
                            <button onClick={() => handleNavigation("/new-cars")}>
                                New Cars
                            </button>
                            <button onClick={() => handleNavigation("/Contact")}>
                                Contact
                            </button>
                            <button
                                onClick={() => handleNavigation("/login")}
                                className="cursor-pointer px-6 py-2 mt-2 bg-cyan-600 hover:bg-indigo-600 transition text-white rounded-full text-sm"
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
