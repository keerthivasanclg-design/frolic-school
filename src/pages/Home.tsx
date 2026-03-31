import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Users, Sparkles, ArrowRight, Star } from 'lucide-react';
import { PROGRAMS, FACILITIES, } from '../constants';
import * as Icons from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-frolic-soft-yellow rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-frolic-soft-blue rounded-full blur-3xl opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-frolic-soft-pink text-frolic-pink font-bold text-sm mb-6">
              ✨ Admissions Open 2026-27
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6">
              Where Little Minds <br />
              <span className="text-frolic-blue">Grow & Shine</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
              Nurturing your child's natural curiosity through play-based learning in a safe, loving, and vibrant environment.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#admissions"
                className="bg-frolic-pink text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2"
              >
                Enroll Your Child <ArrowRight size={20} />
              </a>
              <a
                href="#about"
                className="bg-white text-slate-700 border-2 border-slate-100 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all"
              >
                Learn More
              </a>
            </div>
            
            {/* <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://picsum.photos/seed/kid${i}/100/100`}
                    alt="Happy Kid"
                    className="w-12 h-12 rounded-full border-4 border-white object-cover"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex text-frolic-yellow">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-500 font-medium">Trusted by 500+ Parents</p>
              </div>
            </div> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="../images/IMG-20260323-WA0015.jpg.jpeg"
                alt="Happy children playing"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative blobs */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-frolic-yellow rounded-full -z-10 animate-bounce"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-frolic-blue rounded-full opacity-20 -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Highlights = () => {
  const items = [
    { icon: ShieldCheck, title: 'Safe Campus', desc: 'CCTV monitored & child-safe facilities', color: 'bg-frolic-soft-green text-frolic-green' },
    { icon: Users, title: 'Expert Teachers', desc: 'Experienced & loving educators', color: 'bg-frolic-soft-blue text-frolic-blue' },
    { icon: Sparkles, title: 'Activity Based', desc: 'Learning through fun & frolic', color: 'bg-frolic-soft-yellow text-frolic-yellow' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center"
            >
              <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-24 bg-frolic-soft-blue/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Learning Programs</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Tailored educational journeys designed for each developmental stage of your child's early years.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROGRAMS.map((program) => {
            const IconComponent = (Icons as any)[program.icon];
            return (
              <motion.div
                key={program.id}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-slate-100"
              >
                <div className={`w-14 h-14 ${program.color} rounded-2xl flex items-center justify-center mb-6`}>
                  {IconComponent && <IconComponent size={28} />}
                </div>
                <h3 className="text-2xl font-bold mb-2">{program.name}</h3>
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 block">
                  {program.ageGroup}
                </span>
                <p className="text-slate-600 mb-6">{program.description}</p>
                <button className="text-frolic-blue font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Read More <ArrowRight size={18} />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// const Testimonials = () => {
//   return (
//     <section className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-slate-900 mb-4">What Parents Say</h2>
//           <p className="text-slate-600">Real stories from our Frolic family.</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {TESTIMONIALS.map((t) => (
//             <div key={t.id} className="bg-frolic-soft-yellow/20 p-8 rounded-3xl relative">
//               <div className="flex text-frolic-yellow mb-4">
//                 {[...Array(t.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
//               </div>
//               <p className="text-lg text-slate-700 italic mb-6">"{t.content}"</p>
//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 bg-frolic-yellow rounded-full flex items-center justify-center text-white font-bold">
//                   {t.parentName[0]}
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-slate-900">{t.parentName}</h4>
//                   <p className="text-sm text-slate-500">Parent of {t.childName}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

export const Home = () => {
  return (
    <main>
      <Hero />
      <Highlights />
      <ProgramsSection />
    </main>
  );
};
