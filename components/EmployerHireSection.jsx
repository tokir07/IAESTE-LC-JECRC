import React from 'react';
import { motion } from 'framer-motion';

const EmployerStepCard = ({ number, title, description, icon, isReverse }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`relative flex flex-col ${isReverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center bg-white rounded-2xl shadow-[0_5px_25px_-10px_rgba(0,0,0,0.1)] border border-gray-100 p-5 md:p-6 mb-4 max-w-5xl mx-auto overflow-hidden transition-all duration-300 hover:shadow-[0_15px_35px_-15px_rgba(0,0,0,0.15)]`}
        >
            {/* Background Number */}
            <div className={`absolute top-1/2 -translate-y-1/2 ${isReverse ? 'left-6' : 'right-6'} text-[80px] font-bold text-gray-50 select-none z-0 pointer-events-none`}>
                {number}
            </div>

            {/* Icon Section */}
            <div className={`w-full md:w-[30%] flex justify-center z-10 ${isReverse ? 'md:pl-8' : 'md:pr-8'} mb-4 md:mb-0`}>
                <div className="w-full max-w-[140px] aspect-square flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                    {icon}
                </div>
            </div>

            {/* Content Section */}
            <div className={`w-full md:w-[70%] z-10 flex flex-col justify-center`}>
                <h3 className="text-lg md:text-xl font-bold text-[#003F68] mb-2 tracking-tight">{title}</h3>
                <p className="text-[#4B5563] leading-relaxed text-sm md:text-base font-normal">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

const EmployerHireSection = () => {
    const steps = [
        {
            number: "01",
            title: "Be a part of the IAESTE family",
            description: "IAESTE India enables organisations to host highly skilled international students for technical and professional internships. Employers gain access to a global talent pool of motivated undergraduate and postgraduate students from leading universities across 80+ countries, bringing fresh perspectives and global exposure to the workplace.",
            icon: (
                <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-md">
                    {/* Document Base */}
                    <rect x="25" y="20" width="70" height="85" rx="4" fill="white" stroke="#333" strokeWidth="2.5" />
                    {/* Portrait Icon */}
                    <circle cx="50" cy="45" r="8" stroke="#333" strokeWidth="2.5" fill="none" />
                    <path d="M40 60 Q50 50 60 60" stroke="#333" strokeWidth="2.5" fill="none" />
                    {/* Lines */}
                    <line x1="35" y1="75" x2="85" y2="75" stroke="#333" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="35" y1="85" x2="75" y2="85" stroke="#333" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="35" y1="95" x2="65" y2="95" stroke="#333" strokeWidth="2.5" strokeLinecap="round" />
                    {/* Pen */}
                    <g transform="rotate(15 95 60)">
                        <rect x="90" y="40" width="8" height="60" rx="2" fill="white" stroke="#333" strokeWidth="2.5" />
                        <path d="M90 45 L98 45" stroke="#333" strokeWidth="2.5" />
                        <path d="M90 90 L94 100 L98 90" fill="#333" />
                    </g>
                </svg>
            ),
            isReverse: false
        },
        {
            number: "02",
            title: "Create an internship",
            description: "Getting started is easy! Simply share your internship needs such as role, project scope, duration, and desired skills on the IAESTE platform. You can also indicate additional provisions like living support or lodging assistance if available. IAESTE India will match your requirements with suitable candidates and present you with pre-selected profiles for review and selection.",
            icon: (
                <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-md">
                    {/* Avatar Circle */}
                    <circle cx="60" cy="60" r="45" fill="#EBF5FF" stroke="#3B82F6" strokeWidth="1" />
                    {/* Character */}
                    <path d="M60 75 Q60 45 60 45" stroke="#333" strokeWidth="12" strokeLinecap="round" /> {/* Neck area */}
                    <circle cx="60" cy="45" r="18" fill="#FFDADA" stroke="#333" strokeWidth="2" /> {/* Head */}
                    <path d="M40 85 Q60 70 80 85 L85 105 H35 Z" fill="#2563EB" stroke="#333" strokeWidth="2" /> {/* Suit */}
                    <path d="M55 85 L60 92 L65 85" fill="white" /> {/* Shirt V */}
                    <path d="M58 92 V105 M62 92 V105" stroke="#EF4444" strokeWidth="2" /> {/* Tie */}
                </svg>
            ),
            isReverse: true
        },
        {
            number: "03",
            title: "Select suitable candidate",
            description: "IAESTE India supports you through the entire process, from documentation guidance and candidate shortlisting to onboarding and coordination with local committees. Internships typically range from six weeks up to 12 months with flexibility based on project needs, and employers are expected to provide a fair stipend that covers intern's basic living and lodging costs. This ensures interns can work comfortably and focus on contributing meaningfully to your organisation.",
            icon: (
                <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-md">
                    {/* Person */}
                    <circle cx="60" cy="40" r="15" fill="#FFDADA" stroke="#333" strokeWidth="2.5" />
                    <path d="M40 70 Q60 55 80 70 L85 100 H35 Z" fill="#F472B6" stroke="#333" strokeWidth="2.5" />
                    {/* Hands holding things */}
                    <circle cx="35" cy="75" r="5" fill="#FFDADA" stroke="#333" strokeWidth="1.5" />
                    <circle cx="85" cy="75" r="5" fill="#FFDADA" stroke="#333" strokeWidth="1.5" />
                    {/* Folder/Book */}
                    <rect x="75" y="70" width="25" height="30" rx="2" fill="#92400E" stroke="#333" strokeWidth="2" />
                </svg>
            ),
            isReverse: false
        },
        {
            number: "04",
            title: "Host the Intern",
            description: "By partnering with IAESTE India, your company not only gains access to excellent international talent but also strengthens its global presence and employer brand. Hosting International interns enhances team diversity, fosters intercultural understanding, and provides strategic value by building a pipeline of future professionals familiar with your organisation and industry. Connect with IAESTE India today to bring global talent to your workplace.",
            icon: (
                <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-md">
                    {/* Books */}
                    <rect x="30" y="85" width="60" height="12" rx="2" fill="#333" />
                    <rect x="30" y="70" width="60" height="12" rx="2" fill="white" stroke="#333" strokeWidth="2" />
                    <rect x="30" y="55" width="60" height="12" rx="2" fill="white" stroke="#333" strokeWidth="2" />
                    {/* Mortarboard */}
                    <path d="M60 20 L90 35 L60 50 L30 35 Z" fill="#2DD4BF" stroke="#333" strokeWidth="2.5" />
                    <path d="M45 40 V50 Q60 60 75 50 V40" fill="#2DD4BF" stroke="#333" strokeWidth="2.5" />
                    <path d="M90 35 V55" stroke="#333" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="90" cy="55" r="3" fill="#333" />
                </svg>
            ),
            isReverse: true
        }
    ];

    return (
        <div className="w-full">
            <div className="max-w-7xl mx-auto py-8 px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-[#003F68] mb-8 tracking-tight">
                    How It Works
                </h2>

                <div className="space-y-6">
                    {steps.map((step, index) => (
                        <EmployerStepCard key={index} {...step} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EmployerHireSection;
