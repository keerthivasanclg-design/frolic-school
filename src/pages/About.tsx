import React from 'react';
import { motion } from 'motion/react';
import { Heart, Target, Eye, CheckCircle2 } from 'lucide-react';
import { TEAM } from '../constants';

export const About = () => {
  return (
    <div id="about" className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-frolic-soft-pink/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Frolic International Kids School was founded with a simple yet powerful vision: to create a space where children feel loved, safe, and excited to learn. 
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We believe that the early years are the most critical for development. Our approach combines modern educational techniques with traditional values, ensuring every child receives individual attention and care.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-frolic-green" />
                  <span className="font-semibold">Safe Environment</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-frolic-green" />
                  <span className="font-semibold">Loving Teachers</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-frolic-green" />
                  <span className="font-semibold">Play-Based Learning</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-frolic-green" />
                  <span className="font-semibold">Holistic Growth</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="src/images/IMG-20260323-WA0004.jpg.jpeg"
                alt="School activities"
                className="rounded-[2rem] shadow-xl"
                referrerPolicy="no-referrer"
              />
              {/* <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg max-w-[200px]">
                <p className="text-frolic-pink font-bold text-3xl mb-1">10+</p>
                <p className="text-slate-500 text-sm font-medium">Years of Excellence in Early Education</p>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              whileHover={{ y: -10 }}
              className="p-10 rounded-[2.5rem] bg-frolic-soft-blue border border-frolic-blue/10"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <Eye className="text-frolic-blue" size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                "To nurture happy, confident, and creative children who are ready to take their first steps into the world with curiosity and joy."
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="p-10 rounded-[2.5rem] bg-frolic-soft-yellow border border-frolic-yellow/10"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <Target className="text-frolic-yellow" size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                To provide a stimulating environment where learning happens through play, focusing on social, emotional, and cognitive development.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Meet Our Educators</h2>
            <p className="text-slate-600">The loving hearts behind our children's smiles.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {TEAM.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative mb-6 overflow-hidden rounded-[2rem]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white font-medium">{member.experience} Experience</p>
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-slate-900">{member.name}</h4>
                <p className="text-frolic-blue font-semibold">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
