import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  X,
  Search,
  ChevronDown,
} from "lucide-react";
import ProductsMegaMenu from "./ProductsMegaMenu";

const WebsiteNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const [showMegaMenu, setShowMegaMenu] =
  useState(false);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
  isScrolled || showMegaMenu
    ? 'bg-white shadow-sm'
    : 'bg-transparent'
}`}
    >
      <div className="max-w-[1320px] mx-auto px-6 h-[85px] flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
           <img
    src={
      isScrolled || showMegaMenu
        ? "//LOGO_Dark.svg"
        : "//footer-logo.svg"
    }
    alt="Asian Cables"
    className="min-w-[110px] w-[110px] h-[34px] max-w-[110px] max-h-[34px] w-auto transition-all duration-300"
  />
        </Link>

    

   {/* Desktop Links */}
<div className="hidden md:flex items-center gap-10">

  {/* HOME */}
  <Link
    to="/"
    className={`text-[16px] transition-colors ${
      isScrolled || showMegaMenu
        ? "text-[#1E3C8C]"
        : "text-white"
    }`}
  >
    Home
  </Link>

  {/* PRODUCTS */}
  <div
    className="relative"
    onMouseEnter={() =>
      setShowMegaMenu(true)
    }
    onMouseLeave={() =>
      setShowMegaMenu(false)
    }
  >

    <button
      className={`flex items-center gap-1 text-[16px] transition-colors ${
        isScrolled || showMegaMenu
          ? "text-[#1E3C8C]"
          : "text-white"
      }`}
    >
      Products

      <ChevronDown
        size={15}
        className={`transition-transform duration-300 ${
          showMegaMenu
            ? "rotate-180"
            : ""
        }`}
      />
    </button>

    {/* MEGA MENU */}
    <div
      className={`fixed left-0 top-[85px] w-full transition-all duration-300 ${
        showMegaMenu
          ? "visible opacity-100"
          : "invisible opacity-0"
      }`}
    >
      <ProductsMegaMenu />
    </div>
  </div>

  {/* COMPANY */}
  <Link
    to="/company"
    className={`text-[16px] transition-colors ${
      isScrolled || showMegaMenu
        ? "text-[#1E3C8C]"
        : "text-white"
    }`}
  >
    The Company
  </Link>

  {/* CAREERS */}
  <Link
    to="/career"
    className={`text-[16px] transition-colors ${
      isScrolled || showMegaMenu
        ? "text-[#1E3C8C]"
        : "text-white"
    }`}
  >
    Careers
  </Link>

  {/* INVESTOR */}
  <Link
    to="/investor"
    className={`text-[16px] transition-colors ${
      isScrolled || showMegaMenu
        ? "text-[#1E3C8C]"
        : "text-white"
    }`}
  >
    Investor
  </Link>
</div>      


           <div className="xs:hidden flex items-center gap-6">
             <span
  className={`transition-colors duration-300 ${
    isScrolled || showMegaMenu
      ? "text-[#1E3A8A]"
      : "text-white"
  }`}
>
  <Search size={20} />
</span>
          <Link 
            to="/login" 
            className={`px-7 py-2 rounded-[2px] text-[16px] font-medium leading-[24px] tracking-[0px] transition-all ${
              isScrolled || showMegaMenu
                ? 'bg-[#1E3A8A] text-white hover:bg-blue-800' 
                : 'bg-white text-[#1E3A8A] hover:bg-blue-50'
            }`}
          >
            Contact
          </Link>
            </div> 
        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden p-2 transition-colors ${
            isScrolled || showMegaMenu ? 'text-slate-900' : 'text-white'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 md:hidden animate-fade-in">
          <div className="flex flex-col gap-6">
            {['Home', 'About', 'Products', 'Applications', 'Contact'].map((item) => (
              <Link 
                key={item} 
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-sm font-bold uppercase tracking-widest text-slate-600 hover:text-[#1E3A8A]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link 
              to="/login" 
              className="w-full py-4 bg-[#1E3C8C] text-white text-center text-xs font-black uppercase tracking-widest"
              onClick={() => setIsMenuOpen(false)}
            >
              contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default WebsiteNavbar;
