import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black  shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src="profil-logo.png" alt="profil-logo" className="h-12 w-12" />
          {/* <div className="text-xl font-bold text-red-600">Sarobidy</div> */}
        </div>

        <ul className="hidden lg:flex space-x-6 text-white">
          <li><a href="#home" className="hover:text-red-600">Accueil</a></li>
          <li><a href="#references" className="hover:text-red-600">References</a></li>
          <li><a href="#services" className="hover:text-red-600">Services</a></li>
          <li><a href="#formations" className="hover:text-red-600">Formations</a></li>
          <li><a href="#realisations" className="hover:text-red-600">Realisations</a></li>
        </ul>

        <div className="flex items-center gap-3">
          <button className="text-sm font-bold border-2 border-red-600 text-red-600 px-4 py-2 rounded hover:bg-red-600 hover:text-white transition">
            <a href="#footer">
              Contactez-moi
            </a>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white cursor-pointer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden px-4 pb-4 transition">
          <ul className="flex flex-col space-y-2 text-white ">
            <li><a href="#home" className="hover:text-red-600">Accueil</a></li>
            <li><a href="#references" className="hover:text-red-600">References</a></li>
            <li><a href="#services" className="hover:text-red-600">Services</a></li>
            <li><a href="#formations" className="hover:text-red-600">Formations</a></li>
            <li><a href="#realisations" className="hover:text-red-600">Realisations</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
