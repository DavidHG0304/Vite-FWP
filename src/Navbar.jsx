import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-md text-purple-800 px-6 py-4 flex justify-between items-center shadow z-50">
      <div className="text-2xl font-extrabold">🐾 Gatitos</div>

      <ul className="hidden md:flex space-x-6">
        <li><a href="#inicio" className="hover:text-purple-500 transition">Inicio</a></li>
        <li><a href="#galeria" className="hover:text-purple-500 transition">Galería</a></li>
        <li><a href="#contacto" className="hover:text-purple-500 transition">Contacto</a></li>
      </ul>

      <button
        className="md:hidden px-3 py-2 border border-purple-800 rounded-lg hover:bg-purple-50 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-white flex flex-col items-center space-y-4 py-4 md:hidden shadow-lg">
          <li><a href="#inicio" className="hover:text-purple-500 transition">Inicio</a></li>
          <li><a href="#galeria" className="hover:text-purple-500 transition">Galería</a></li>
          <li><a href="#contacto" className="hover:text-purple-500 transition">Contacto</a></li>
        </ul>
      )}
    </nav>
  );
}
