import React from 'react';
import { motion } from 'motion/react';
import { FACILITIES, GALLERY_IMAGES} from '../constants';

export const Facilities = () => {
  return (
    <div id="facilities" className="pt-24">
      <section className="py-20 bg-frolic-soft-green/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">World-Class Facilities</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We provide a safe, modern, and stimulating environment designed specifically for early childhood development.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {FACILITIES.map((facility, idx) => (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-[2.5rem] mb-6 shadow-lg">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-3">{facility.title}</h3>
                <p className="text-lg text-slate-600 leading-relaxed">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
       <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Life at Frolic</h2>
            <p className="text-xl text-slate-600">Glimpses of our daily activities, events, and happy moments.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {GALLERY_IMAGES.map((image, idx) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative rounded-3xl overflow-hidden shadow-md group cursor-pointer ${
                  idx === 0 || idx === 7 ? 'md:col-span-2 md:row-span-1' : ''
                }`}
              >
                <img
                  src={image.src}
                  className="w-full h-full object-cover aspect-square md:aspect-auto md:h-64"
                  referrerPolicy="no-referrer"
                />
                
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
