import React, { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center">
            <a href="#acceuil">
              <h3 className="text-3xl text-red-700">Sarobidy</h3>
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex gap-6 text-white px-8 py-3">
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
              className="hidden sm:inline-block px-6 py-2 text-red-700 border border-red-700 hover:bg-red-700 hover:text-white transition"
            >
              Contactez-moi
            </button>

            {/* Hamburger icon */}
            <button
              className="sm:hidden text-white focus:outline-none"
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
          <div className="sm:hidden mt-2 text-white space-y-2">
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
      </div>
    </nav>
  );
}

export default Navbar;
