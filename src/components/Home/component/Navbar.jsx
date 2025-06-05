import React, { useState } from 'react';

function Navbar() {
 const [isOpen, setIsOpen] = useState(false);

  return (
<<<<<<< HEAD
    <nav className="fixed top-0 left-0 w-full bg-black  shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold text-red-600">Sarobidy</div>
=======
    <nav className="fixed top-0 w-full z-50 bg-black">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* max-w-7xl  */}
        <div className="flex items-center justify-between h-16">
>>>>>>> 5830da2 (fix:footer,header,realisation import:fonts)

        <ul className="hidden lg:flex space-x-6 text-white">
          <li><a href="#" className="hover:text-red-600">Accueil</a></li>
          <li><a href="#" className="hover:text-red-600">Services</a></li>
          <li><a href="#" className="hover:text-red-600">Projets</a></li>
          <li><a href="#" className="hover:text-red-600">Blog</a></li>
          <li><a href="#" className="hover:text-red-600">Contact</a></li>
        </ul>

<<<<<<< HEAD
        <div className="flex items-center gap-3">
          <button className="text-sm font-bold border-2 border-red-600 text-red-600 px-4 py-2 rounded hover:bg-red-600 hover:text-white transition">
=======
          {/* Desktop menu */}
          <div className="hidden lg:flex gap-6 text-white px-8 py-3 text-[14px]">
            <a href="#acceuil" className="hover:text-red-700">Accueil</a>
            <a href="/référence" className="hover:text-red-700">Références</a>
            <a href="/services" className="hover:text-red-700">Services</a>
            <a href="/formations" className="hover:text-red-700">Formations</a>
            <a href="/réalisation" className="hover:text-red-700">Réalisations</a>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Contact button visible only on desktop */}
            <button
              onClick={() => window.location.href = "/contact"}
              className="hidden lg:inline-block px-6 py-2 text-red-700 border border-red-700 hover:bg-red-700 hover:text-white transition"
            >
>>>>>>> 5830da2 (fix:footer,header,realisation import:fonts)
              Contactez-moi
          </button>

<<<<<<< HEAD
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
=======
            {/* Hamburger icon */}
            <button
              className="lg:hidden text-white focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden mt-2 text-white space-y-2">
            <a href="#acceuil" className="block px-2 py-1 hover:text-red-700">Accueil</a>
            <a href="/référence" className="block px-2 py-1 hover:text-red-700">Références</a>
            <a href="/services" className="block px-2 py-1 hover:text-red-700">Services</a>
            <a href="/formations" className="block px-2 py-1 hover:text-red-700">Formations</a>
            <a href="/réalisation" className="block px-2 py-1 hover:text-red-700">Réalisations</a>

            {/* Bouton Contact dans le menu mobile */}
            <button
              onClick={() => window.location.href = "/contact"}
              className="w-full text-left px-2 py-2 mt-2 border border-red-700 text-red-700 hover:bg-red-700 hover:text-white transition"
            >
              Contactez-moi
            </button>
          </div>
        )}
>>>>>>> 5830da2 (fix:footer,header,realisation import:fonts)
      </div>

      {isOpen && (
        <div className="lg:hidden px-4 pb-4 transition">
          <ul className="flex flex-col space-y-2 text-white ">
            <li><a href="#" className="hover:text-red-600">Accueil</a></li>
            <li><a href="#" className="hover:text-red-600">Services</a></li>
            <li><a href="#" className="hover:text-red-600">Projets</a></li>
            <li><a href="#" className="hover:text-red-600">Blog</a></li>
            <li><a href="#" className="hover:text-red-600">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
