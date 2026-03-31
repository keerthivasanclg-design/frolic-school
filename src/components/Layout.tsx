import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, MessageCircle, MapPin, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-frolic-yellow rounded-full flex items-center justify-center text-white font-bold text-xl shadow-sm">F</div>
              <span className="text-xl font-bold tracking-tight text-slate-800 hidden sm:block">
                Frolic <span className="text-frolic-blue">International</span>
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-frolic-blue font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#admissions"
              className="bg-frolic-pink text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg"
            >
              Enroll Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-frolic-blue p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-frolic-blue hover:bg-slate-50 rounded-lg"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="#admissions"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-frolic-pink text-white px-6 py-3 rounded-full font-semibold"
                >
                  Enroll Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-frolic-yellow rounded-full flex items-center justify-center text-white font-bold text-xl">F</div>
              <span className="text-xl font-bold">Frolic <span className="text-frolic-blue">International</span></span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Nurturing happy, confident, and creative children through play and activity-based learning in a safe environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-frolic-blue transition-colors"><Facebook size={20} /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-frolic-pink transition-colors"><Instagram size={20} /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-frolic-yellow transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-slate-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#programs" className="text-slate-400 hover:text-white transition-colors">Programs</a></li>
              <li><a href="#facilities" className="text-slate-400 hover:text-white transition-colors">Facilities</a></li>
              <li><a href="#admissions" className="text-slate-400 hover:text-white transition-colors">Admissions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-frolic-blue shrink-0" size={20} />
                <span className="text-slate-400">123 School Lane, Karaikudi, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-frolic-pink shrink-0" size={20} />
                <span className="text-slate-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-frolic-yellow shrink-0" size={20} />
                <span className="text-slate-400">info@frolicschool.com</span>
              </li>
            </ul>
          </div>

         
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Frolic International Kids School. All rights reserved.</p>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40">
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
          title="Chat on WhatsApp"
        >
          <MessageCircle size={24} />
        </a>
        <a
          href="tel:+919876543210"
          className="bg-frolic-blue text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
          title="Call Us"
        >
          <Phone size={24} />
        </a>
      </div>
    </footer>
  );
};
