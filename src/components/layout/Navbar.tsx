import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { cubeAICompany, infosoftCompany } from '../../data/companies';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collaboration', href: '#collaboration' },
    { name: '10 Solutions', href: '#portfolio' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Why Us', href: '#why-collaboration' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm py-3'
          : 'bg-white/80 backdrop-blur-md border-b border-slate-200/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Dual Brand Logos */}
          <a
            href="#home"
            className="flex items-center gap-3 sm:gap-4 group focus:outline-none focus:ring-2 focus:ring-[#1687D9] rounded-lg p-1"
            aria-label="Cube AI Solutions and Infosoft USA Joint Launch Home"
          >
            {/* Cube AI Logo */}
            <div className="h-9 sm:h-10 flex items-center bg-white px-2.5 py-1 rounded-md border border-slate-200/80 shadow-xs transition-transform duration-200 group-hover:scale-[1.02]">
              <img
                src={cubeAICompany.logoUrl}
                alt="Cube AI Solutions Logo"
                className="h-7 sm:h-8 w-auto object-contain max-h-8"
                style={{ height: '32px', width: 'auto', maxHeight: '32px' }}
                height={32}
              />
            </div>

            {/* Visual Partnership Divider */}
            <span className="text-slate-400 font-light text-base sm:text-lg select-none">
              ×
            </span>

            {/* Infosoft Logo */}
            <div className="h-9 sm:h-10 flex items-center bg-white px-2.5 py-1 rounded-md border border-slate-200/80 shadow-xs transition-transform duration-200 group-hover:scale-[1.02]">
              <img
                src={infosoftCompany.logoUrl}
                alt="Infosoft USA Logo"
                className="h-7 sm:h-8 w-auto object-contain max-h-8"
                style={{ height: '32px', width: 'auto', maxHeight: '32px' }}
                height={32}
              />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-[#1687D9] transition-colors duration-200 relative py-1 focus:outline-none focus:ring-2 focus:ring-[#1687D9] rounded"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Area */}
          <div className="hidden sm:flex items-center gap-3">
            <span className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-[#0284C7] border border-sky-200 font-mono">
              <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
              Launch: 2 Nov 2026
            </span>
            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-[#1687D9] hover:bg-[#0284C7] text-white shadow-sm shadow-[#1687D9]/25 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#1687D9] cursor-pointer"
            >
              Get in Touch
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1687D9]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 shadow-xl">
          <div className="flex items-center justify-between py-2 border-b border-slate-100">
            <span className="text-xs font-semibold text-[#1687D9] flex items-center gap-1.5 font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              Launch: 2 November 2026
            </span>
          </div>
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-700 hover:text-[#1687D9] hover:bg-slate-50 px-3 py-2 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-[#1687D9] text-white"
            >
              Connect with Partners
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
