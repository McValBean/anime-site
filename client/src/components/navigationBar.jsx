import { Link } from "react-router-dom";
import { Menu, Home, Info, Phone } from "lucide-react";
import  AnimeLogo  from "../assets/adobe-animate.png";
import { useState } from "react";

export default function NavigationBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
        <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <Link to="/">
                <img src={ AnimeLogo } alt="Anime Logo" className="w-16 h-16" />
            </Link>
            <div>
                <button
                    className="md:hidden p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <Menu />
                </button>
                <ul className={`md:hidden z-10 space-y-2 mt-2 absolute min-w-100vw min-h-100vh bg-black/50 ${isMenuOpen ? 'flex flex-col' : 'hidden'}`}>
                    <li>
                        <Link to="/" className="flex items-center gap-1 space-x-1 hover:text-gray-400">
                            <Home className="w-5 h-5" />
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="flex items-center gap-1 space-x-1 hover:text-gray-400">
                            <Info className="w-5 h-5" />
                            <span>About</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="flex items-center gap-1 space-x-1 hover:text-gray-400">
                            <Phone className="w-5 h-5" />
                            <span>Contact</span>
                        </Link>
                    </li>
                </ul>
                <ul className="hidden space-x-4 gap-4 w-full md:w-5/10 md:flex flex-col flex flex-col justify-end bg-black/50 p-4 md:p-0 md:flex-row md:space-x-4 md:bg-transparent md:justify-end absolute md:static top-16 left-0 w-full md:w-auto transition-transform duration-300 ease-in-out transform md:transform-none md:flex md:items-center md:space-x-4">
                    <li className="flex items-center space-x-1">
                        <Link to="/" className="flex items-center gap-1 space-x-1 hover:text-gray-400">
                        <Home className="w-5 h-5" />
                        <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="flex items-center gap-1 space-x-1 hover:text-gray-400">
                        <Info className="w-5 h-5" />
                        <span>About</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="flex items-center gap-1 space-x-1 hover:text-gray-400">
                        <Phone className="w-5 h-5" />
                        <span>Contact</span>
                        </Link>
                    </li>
                </ul>

            </div>
        </nav>



        </>

    )
}