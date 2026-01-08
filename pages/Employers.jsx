import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EmployerHireSection from '../components/EmployerHireSection';

export default function Employers() {
  const [activeTab, setActiveTab] = useState('incoming'); // 'incoming' or 'outgoing'

  const incomingTestimonials = [
    {
      id: 1,
      name: "Adnan Ayman",
      location: "Palestine",
      testimonial: "India was not just a training destination for me, but a journey that changed my life. Living far from home taught me independence, patience, and the ability to face challenges with confidence.",
      image: "https://www.iaestelcjecrc.com/assets/img/avatars/Adnan1.jpeg"
    },
    {
      id: 2,
      name: "Homa Ramezani",
      location: "Iran",
      testimonial: "I spent about 6 weeks at JECRC University in Jaipur. The beautiful temples, spicy food and incredible nature were a truly special experience. IAESTE members support made this dream reality.",
      image: "https://www.iaestelcjecrc.com/assets/img/avatars/Homa.jpeg"
    },
    {
      id: 3,
      name: "Tasuku Nagata",
      location: "Japan",
      testimonial: "This internship was a great opportunity to consolidate my knowledge, including network protocols and inter-process communication. I developed an application involving machine learning for the first time.",
      image: "https://www.iaestelcjecrc.com/assets/img/avatars/Tasuku.jpeg"
    }
  ];

  const outgoingTestimonials = [
    {
      id: 1,
      name: "Vikram Saini",
      location: "Jaipur, India",
      testimonial: "I completed a remote IAESTE internship with IAESTE Burundi. I developed a website using React, Tailwind CSS, and Node.js, which enhanced my technical expertise and understanding of global work culture.",
      image: "https://www.iaestelcjecrc.com/assets/img/avatars/Vikram.jpeg"
    },
    {
      id: 2,
      name: "Priyansh Singh",
      location: "Jaipur, India",
      testimonial: "My internship with Universidad Santo Tomás, Colombia was highly enriching. I worked on smart-tourism projects, creating 3D character models and WebAR prototypes using Blender and 8th Wall.",
      image: "https://www.iaestelcjecrc.com/assets/img/avatars/Priyansh.jpeg"
    },
    {
      id: 3,
      name: "Nakul Kandira",
      location: "Jaipur, India",
      testimonial: "I worked on an AI and Machine Learning project focused on drug discovery. Along with professional learning, I explored beautiful places like Rio de Janeiro, experiencing the vibrant culture of Brazil.",
      image: "https://www.iaestelcjecrc.com/assets/img/avatars/Nakul.jpeg"
    }
  ];

  const testimonials = activeTab === 'incoming' ? incomingTestimonials : outgoingTestimonials;

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* 1️⃣ Hero / Header Section */}
      <section className="bg-[#002B45] text-white py-6 md:py-8 px-6 overflow-hidden relative">

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start"
          >
            <span className="bg-[#3B82F6] text-white text-[10px] md:text-xs font-bold px-2 py-1 rounded-sm uppercase tracking-[0.2em] mb-2 shadow-sm">
              Employers
            </span>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 tracking-tight leading-none">
              How to hire an IAESTE intern
            </h1>
            <p className="text-base md:text-lg text-gray-300 font-light max-w-2xl leading-relaxed">
              Access to the best young talent from around the world
            </p>
          </motion.div>
        </div>

        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/10 to-transparent pointer-events-none"></div>
      </section>

      <EmployerHireSection />

      {/* 2.5️⃣ Voices from Our Global Employer Network Section */}
      <section className="bg-gray-50 py-16 px-6 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-60"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#003F68] tracking-tight mb-4">
              Voices from Our Global Employer Network
            </h2>
            <div className="w-24 h-1.5 bg-[#3B82F6] mx-auto rounded-full shadow-sm"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {outgoingTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 hover:border-blue-100 transition-all duration-500 flex flex-col h-full relative"
              >
                {/* Quote Icon Overlay */}
                <div className="absolute top-6 right-8 text-7xl text-blue-500/5 font-serif select-none pointer-events-none group-hover:text-blue-500/10 transition-colors">
                  "
                </div>

                <div className="flex items-center mb-8 relative">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden border-4 border-white shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Floating Accent */}
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#3B82F6] rounded-lg shadow-md flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.813a1 1 0 00-.454-.394 1 1 0 00-.454.394l-5.384 9.14a1 1 0 001.373 1.341l.983-.41V16a1 1 0 001 1h4a1 1 0 001-1v-3.111l.983.41a1 1 0 001.373-1.341l-5.384-9.14z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-[#003F68] group-hover:text-[#3B82F6] transition-colors">{testimonial.name}</h3>
                    <div className="flex items-center text-blue-500 text-sm font-semibold uppercase tracking-wider">
                      <span className="w-4 h-[2px] bg-blue-500 mr-2"></span>
                      {testimonial.location}
                    </div>
                  </div>
                </div>

                <div className="relative flex-1">
                  <p className="text-gray-600 italic leading-relaxed text-base lg:text-lg mb-6">
                    "{testimonial.testimonial}"
                  </p>
                </div>

                {/* Rating Display */}
                <div className="mt-4 pt-6 border-t border-gray-50 flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Verified Intern</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003F68] tracking-tight">
              Why Employers Trust IAESTE
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Item 1 */}
            <div className="relative pl-8 border-l-4 border-[#3B82F6] group">
              <div className="text-5xl font-bold text-gray-200/60 mb-4 select-none group-hover:text-[#3B82F6]/20 transition-colors">100+</div>
              <h3 className="text-lg font-bold text-[#003F68] mb-2 uppercase tracking-tight">Countries Connected</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Access students from a truly global talent pool.
              </p>
            </div>

            {/* Item 2 */}
            <div className="relative pl-8 border-l-4 border-[#3B82F6] group">
              <div className="text-5xl font-bold text-gray-200/60 mb-4 select-none group-hover:text-[#3B82F6]/20 transition-colors">0₹</div>
              <h3 className="text-lg font-bold text-[#003F68] mb-2 uppercase tracking-tight">No Agency Fees</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Cost-effective international hiring.
              </p>
            </div>

            {/* Item 3 */}
            <div className="relative pl-8 border-l-4 border-[#3B82F6] group">
              <div className="text-5xl font-bold text-gray-200/60 mb-4 select-none group-hover:text-[#3B82F6]/20 transition-colors">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#003F68] mb-2 uppercase tracking-tight">Pre-Evaluated Talent</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Only verified and nominated candidates.
              </p>
            </div>

            {/* Item 4 */}
            <div className="relative pl-8 border-l-4 border-[#3B82F6] group">
              <div className="text-5xl font-bold text-gray-200/60 mb-4 select-none group-hover:text-[#3B82F6]/20 transition-colors">∞</div>
              <h3 className="text-lg font-bold text-[#003F68] mb-2 uppercase tracking-tight">End-to-End Support</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                From form submission to intern arrival.
              </p>
            </div>
          </div>


        </div>
      </section>
    </div>
  );
}
