import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export const Contact = () => {
  return (
    <div id="contact" className="pt-24">
      <section className="py-20 bg-frolic-soft-blue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Get in Touch</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us via any of the channels below.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <motion.div
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-frolic-soft-blue/30 border border-frolic-blue/10 flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <Phone className="text-frolic-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-slate-600 mb-4">Speak directly with our admissions team.</p>
              <a href="tel:9788212216" className="text-lg font-bold text-slate-900 hover:text-frolic-blue transition-colors">
                9788212216
              </a>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-frolic-soft-pink/30 border border-frolic-pink/10 flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <Mail className="text-frolic-pink" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-slate-600 mb-4">Send us your queries anytime.</p>
              <a href="mailto:info@frolicschool.com" className="text-lg font-bold text-slate-900 hover:text-frolic-pink transition-colors">
                info@frolicschool.com
              </a>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-frolic-soft-yellow/30 border border-frolic-yellow/10 flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <MessageCircle className="text-frolic-yellow" />
              </div>
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <p className="text-slate-600 mb-4">Quick chat for instant replies.</p>
              <a href="https://wa.me/919788212216" target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-slate-900 hover:text-frolic-yellow transition-colors">
                Chat Now
              </a>
            </motion.div>
          </div>

          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Location & Hours */}
            <div className="space-y-10">
              <div>
                <h3 className="text-3xl font-bold mb-6">Our Location</h3>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="text-slate-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">Karaikudi Campus</h4>
                    <p className="text-slate-600 leading-relaxed">
                      123 School Lane, Near Main Road,<br />
                      Karaikudi, Sivaganga District,<br />
                      Tamil Nadu - 630001
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-bold mb-6">School Hours</h3>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="text-slate-600" />
                  </div>
                  <div>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                      <span className="font-bold text-slate-900">Mon - Fri:</span>
                      <span className="text-slate-600">8:30 AM - 1:30 PM</span>
                      <span className="font-bold text-slate-900">Saturday:</span>
                      <span className="text-slate-600">8:30 AM - 12:00 PM</span>
                      <span className="font-bold text-slate-900">Sunday:</span>
                      <span className="text-slate-600">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Embed Placeholder */}
            <div className="rounded-[2.5rem] overflow-hidden shadow-xl border-8 border-white h-[400px] bg-slate-100 relative">
              {/* In a real app, use Google Maps Embed API */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <MapPin size={48} className="text-frolic-blue mb-4" />
                <h4 className="text-xl font-bold mb-2">Google Maps Integration</h4>
                <p className="text-slate-500">
                  Find us in the heart of Karaikudi. <br />
                  Easy access and safe surroundings.
                </p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-6 bg-frolic-blue text-white px-6 py-2 rounded-full font-bold"
                >
                  Open in Maps
                </a>
              </div>
              <img 
                src="https://picsum.photos/seed/map/800/600?grayscale" 
                alt="Map placeholder" 
                className="w-full h-full object-cover opacity-30"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
