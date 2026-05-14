import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#F97316] to-[#d95d0b] flex items-center justify-center shadow-sm">
      <div className="w-3 h-3 bg-white rounded-full"></div>
    </div>
    <span className="font-bold text-[18px] tracking-tight text-[#1A120B]">Satori<span className="font-light">AI</span></span>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center pt-4 sm:pt-6 px-3 sm:px-4 relative z-50">
      <div className="bg-white/80 backdrop-blur-md rounded-full shadow-sm border border-[#EDE7E2] pl-5 pr-2 py-2 w-full max-w-[860px] relative flex items-center">
        {/* Logo */}
        <Logo />

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7 ml-10 text-[14px] font-medium text-[#7A6E66]">
          <a href="#" className="hover:text-[#1A120B] transition-colors">Platform</a>
          <a href="#" className="hover:text-[#1A120B] transition-colors">Solutions</a>
          <a href="#" className="hover:text-[#1A120B] transition-colors">Enterprise</a>
          <a href="#" className="hover:text-[#1A120B] transition-colors">Resources</a>
          <a href="#" className="hover:text-[#1A120B] transition-colors">Pricing</a>
        </div>

        {/* Right Cluster */}
        <div className="ml-auto flex items-center gap-3">
          <button className="bg-[#1A120B] hover:bg-[#F97316] text-white rounded-full px-5 py-2.5 text-[14px] font-medium flex items-center gap-2 transition-all duration-300 shadow-md active:scale-[0.97]">
            <span>Request Demo</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-[#7A6E66] active:scale-[0.97]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-2 right-2 mt-2 bg-white rounded-2xl shadow-lg border border-[#EDE7E2] p-4 flex flex-col gap-4 z-20 md:hidden animate-in fade-in slide-in-from-top-2">
            <a href="#" className="font-medium text-[#1A120B]">Platform</a>
            <a href="#" className="font-medium text-[#1A120B]">Solutions</a>
            <a href="#" className="font-medium text-[#1A120B]">Enterprise</a>
            <a href="#" className="font-medium text-[#1A120B]">Resources</a>
            <a href="#" className="font-medium text-[#1A120B]">Pricing</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
