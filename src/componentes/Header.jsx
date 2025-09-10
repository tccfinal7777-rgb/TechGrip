import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <header className="bg-indigo-600 text-white flex justify-between items-center px-6 py-4 fixed top-0 w-full z-50 shadow dark:bg-blue-900">
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        <img src="/log.png" alt="Logo TechGrip" className="w-8 h-8"/>
        <span className="text-xl font-medium">TechGrip</span>
      </div>

      <nav className="hidden md:flex gap-10 text-base">
        <Link to="/">Home</Link>
        <Link to="/quem-somos">Quem Somos</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/jogo">Jogo</Link>
        <Link to="/referencias">Referências</Link>
        <Link to="/manual">Manual</Link>
      </nav>
      <div className="md:hidden relative">
        <img src="/menu.png" alt="Menu" className="w-8 cursor-pointer" onClick={() => setIsOpen(!isOpen)}/>
        {isOpen && (
          <div className="absolute top-full right-0 mt-2 w-48 bg-white text-black flex flex-col border shadow z-50">
            <Link to="/" className="px-4 py-2 hover:bg-gray-200" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/quem-somos" className="px-4 py-2 hover:bg-gray-200" onClick={() => setIsOpen(false)}>Quem Somos</Link>
            <Link to="/produtos" className="px-4 py-2 hover:bg-gray-200" onClick={() => setIsOpen(false)}>Produtos</Link>
            <Link to="/jogo" className="px-4 py-2 hover:bg-gray-200" onClick={() => setIsOpen(false)}>Jogo</Link>
            <Link to="/referencias" className="px-4 py-2 hover:bg-gray-200" onClick={() => setIsOpen(false)}>Referências</Link>
            <Link to="/manual" className="px-4 py-2 hover:bg-gray-200" onClick={() => setIsOpen(false)}>Manual</Link>
          </div>
        )}
      </div>
    </header>
  );
}
