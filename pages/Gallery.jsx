// src/pages/Gallery.jsx
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// Import components (integrating the 3D gallery as an option or hero element)
// import CircularGallery from "../components/CircularScreen";

// Import images from assets
import dinnerImg from "../src/assets/images/Dinner.jpg";
import memberDriveImg from "../src/assets/images/imgv1.jpeg";
import workshopImg from "../src/assets/images/home.jpg";
import agraImg from "../src/assets/images/Agra.jpg";
import img1 from "../src/assets/images/1.jpeg";
import img2 from "../src/assets/images/imgv2.jpg";
import img3 from "../src/assets/images/imgv3.jpg";
import img4 from "../src/assets/images/imgv4.jpg";
import img5 from "../src/assets/images/imgv5.jpg";
import img6 from "../src/assets/images/imgv6.jpg";
import img7 from "../src/assets/images/imgv7.jpg";
import img8 from "../src/assets/images/imgv8.jpg";
import img9 from "../src/assets/images/imgv9.jpg";
import img10 from "../src/assets/images/imgv10.jpg";
import img12 from "../src/assets/images/imgv12.jpg";
import img14 from "../src/assets/images/imgv14.jpg";
import img15 from "../src/assets/images/imgv15.jpg";

// --- Sub-components ---

const CategoryStrip = ({ category, onSelect, isActive, isAnyActive }) => {
    return (
        <motion.div
            layout
            onClick={() => onSelect(category)}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
            className={`relative min-h-[200px] h-[30vh] md:h-[70vh] cursor-pointer overflow-hidden rounded-2xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? "flex-[10]" : "flex-none md:flex-[1]"
                } ${!isActive && isAnyActive ? "opacity-50 grayscale" : "opacity-100 grayscale-0"}`}
            style={{
                background: `url(${category.image}) center/cover no-repeat`,
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 hover:bg-black/40" />

            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end items-start text-white">
                <motion.h2
                    layout="position"
                    className={`font-black text-2xl md:text-4xl uppercase tracking-tighter transition-transform duration-500 origin-left ${!isActive ? "md:-rotate-90 md:origin-bottom-left md:translate-x-8 md:-translate-y-8" : "rotate-0"
                        } whitespace-nowrap md:whitespace-normal`}
                >
                    {category.name}
                </motion.h2>

                {isActive && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-2 text-sm md:text-base text-gray-200 max-w-md"
                    >
                        Click to view all {category.items.length} photos
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
};

const MasonryGrid = ({ items }) => {
    return (
        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-2 sm:gap-4 space-y-2 sm:space-y-4 p-2 sm:p-4 pb-24">
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "100px" }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="break-inside-avoid rounded-xl overflow-hidden shadow-lg group relative bg-gray-100"
                >
                    <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-auto transform transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none px-2">
                        <p className="text-white font-bold text-sm md:text-lg text-center">{item.title}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

// --- Main Page ---

export default function Gallery() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Categories with real image assets
    const categories = useMemo(() => [
        {
            id: 1,
            name: "Events & Culture",
            image: dinnerImg,
            items: [
                { image: dinnerImg, title: "Cultural Dinner" },
                { image: img1, title: "Moment 1" },
                { image: img2, title: "Moment 2" },
                { image: img3, title: "Moment 3" },
                { image: img4, title: "Moment 4" },
                { image: img5, title: "Moment 5" },
            ]
        },
        {
            id: 2,
            name: "Member Drive",
            image: memberDriveImg,
            items: [
                { image: memberDriveImg, title: "Recruitment Drive" },
                { image: img6, title: "Session 1" },
                { image: img7, title: "Session 2" },
                { image: img8, title: "Session 3" },
                { image: img10, title: "Session 4" },
            ]
        },
        {
            id: 3,
            name: "Workshops",
            image: workshopImg,
            items: [
                { image: workshopImg, title: "Technical Workshop" },
                { image: img9, title: "Hands-on" },
                { image: img10, title: "Interaction" },
            ]
        },
        {
            id: 4,
            name: "Trips & Fun",
            image: agraImg,
            items: [
                { image: agraImg, title: "Agra Expedition" },
                { image: img12, title: "Group Outing" },
                { image: img14, title: "Fun 1" },
                { image: img15, title: "Fun 2" },
            ]
        }
    ], []);

    return (
        <div className="min-h-screen bg-white text-[#0B3D59] font-sans selection:bg-[#0B3D59] selection:text-white overflow-x-hidden">
            <AnimatePresence mode="wait">
                {!selectedCategory ? (
                    <motion.div
                        key="gallery-home"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Header */}
                        <motion.div
                            className="pt-24 pb-4 text-center px-4 relative z-10"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#0B3D59] to-[#0E517A]">
                                Our Gallery
                            </h1>
                            <p className="text-gray-500 font-medium text-lg">
                                Select a category to explore the moments
                            </p>
                        </motion.div>

                        {/* Interactive Hero (Circular Gallery) - Visible on desktop for WOW factor */}


                        {/* Standard Category Selection (Mobile Friendly) */}
                        <div className="max-w-[1600px] mx-auto px-4 pb-24 h-auto">
                            <div className="flex flex-col md:flex-row gap-4 w-full h-auto md:h-full">
                                {categories.map((cat) => (
                                    <CategoryStrip
                                        key={cat.id}
                                        category={cat}
                                        onSelect={setSelectedCategory}
                                        isActive={false}
                                        isAnyActive={false}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="gallery-detail"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="relative pt-24"
                    >
                        <div className="max-w-[1600px] mx-auto px-4">
                            <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
                                <div>
                                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-[#0B3D59]">
                                        {selectedCategory.name}
                                    </h2>
                                    <p className="text-gray-500 font-medium">
                                        Showing {selectedCategory.items.length} moments
                                    </p>
                                </div>
                                <button
                                    onClick={() => setSelectedCategory(null)}
                                    className="flex items-center gap-2 px-6 py-3 bg-[#0B3D59] text-white rounded-full font-bold shadow-lg hover:bg-[#094b70] transition-colors"
                                >
                                    <ArrowBackIcon fontSize="small" /> Back to Categories
                                </button>
                            </div>

                            <MasonryGrid items={selectedCategory.items} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Stylistic Background elements */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-30">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[100px]" />
            </div>
        </div>
    );
}
