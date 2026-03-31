import React from 'react';
import { Navbar, Footer } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Facilities } from './pages/Facilities';
import { Admissions } from './pages/Admissions';
import { Contact } from './pages/Contact';
import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <div className="flex-grow">
        <Home />
        <About />
        <Facilities />
        <Admissions />
        <Contact />
      </div>
      <Footer />

      Floating Action Buttons
      {/* <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        <motion.a
          href="https://wa.me/919788212216"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
          title="WhatsApp Enquiry"
        >
          <MessageCircle size={28} />
        </motion.a>
        <motion.a
          href="tel:9788212216"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-frolic-blue text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors"
          title="Call Now"
        >
          <Phone size={28} />
        </motion.a>
      </div> */}
    </div>
  );
}
