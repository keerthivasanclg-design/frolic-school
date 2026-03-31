import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, FileText, HelpCircle, Send } from 'lucide-react';

export const Admissions = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    program: 'Playgroup',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const steps = [
    { title: 'Inquiry', desc: 'Fill out the form or visit our campus for a tour.' },
    { title: 'Interaction', desc: 'A friendly meeting with the child and parents.' },
    { title: 'Documentation', desc: 'Submit required documents and complete registration.' },
    { title: 'Welcome', desc: 'Your child starts their exciting journey at Frolic!' }
  ];

  const documents = [
    'Birth Certificate (Original for verification)',
    'Passport size photographs (Child & Parents)',
    'Medical Fitness Certificate',
    'Address Proof',
    'Previous school records (if any)'
  ];

  return (
    <div id="admissions" className="pt-24">
      {/* Header */}
      <section className="py-20 bg-frolic-soft-yellow/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Join the Frolic Family</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We make the admission process simple and stress-free for parents. Start your child's journey today!
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Process & Info */}
            <div>
              <h3 className="text-3xl font-bold mb-10 flex items-center gap-3">
                <HelpCircle className="text-frolic-blue" /> Admission Process
              </h3>
              <div className="space-y-8 mb-16">
                {steps.map((step, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-frolic-soft-blue text-frolic-blue rounded-full flex items-center justify-center font-bold text-xl">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-1">{step.title}</h4>
                      <p className="text-slate-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <FileText className="text-frolic-pink" /> Required Documents
              </h3>
              <ul className="space-y-4">
                {documents.map((doc, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle className="text-frolic-green flex-shrink-0" size={20} />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Inquiry Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-slate-100"
            >
              <h3 className="text-3xl font-bold mb-2">Enquiry Form</h3>
              <p className="text-slate-500 mb-8">Fill this form and we'll get back to you within 24 hours.</p>

              {submitted ? (
                <div className="bg-frolic-soft-green text-green-800 p-8 rounded-2xl text-center">
                  <CheckCircle className="mx-auto mb-4" size={48} />
                  <h4 className="text-2xl font-bold mb-2">Thank You!</h4>
                  <p>Your enquiry has been received. We will contact you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Parent's Name *</label>
                      <input
                        required
                        type="text"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-frolic-blue outline-none"
                        placeholder="Full Name"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number *</label>
                      <input
                        required
                        type="tel"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-frolic-blue outline-none"
                        placeholder="+91"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Child's Name *</label>
                      <input
                        required
                        type="text"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-frolic-blue outline-none"
                        placeholder="Name"
                        value={formData.childName}
                        onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Child's Age *</label>
                      <input
                        required
                        type="text"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-frolic-blue outline-none"
                        placeholder="e.g. 3 years"
                        value={formData.childAge}
                        onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Select Program *</label>
                    <select
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-frolic-blue outline-none"
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    >
                      <option>Playgroup</option>
                      <option>Nursery</option>
                      <option>LKG</option>
                      <option>UKG</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Message (Optional)</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-frolic-blue outline-none"
                      placeholder="Any specific questions?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-frolic-blue text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
                  >
                    Send Enquiry <Send size={20} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
