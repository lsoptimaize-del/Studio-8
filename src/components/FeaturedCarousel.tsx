"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const features = [
    {
        title: "Hydra Facial",
        subtitle: "The Ultimate Glow",
        description: "Experience deep cleansing, exfoliation, extraction, and hydration simultaneously for instantly clearer, more beautiful skin.",
        image: "/facial.png",
    },
    {
        title: "Keratin Treatment",
        subtitle: "Silky Smooth Force",
        description: "Transform frizzy, unruly hair into smooth, shiny perfection. Our premium keratin formula restores health and radiance.",
        image: "/Keratin.png",
    },
    {
        title: "Bridal Packages",
        subtitle: "Your Perfect Day",
        description: "Curated luxury treatments designed to make you look and feel like royalty on your most special occasion.",
        image: "/bridal.png",
    },
];

export default function FeaturedCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % features.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % features.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + features.length) % features.length);
    };

    return (
        <div className="relative w-full max-w-6xl mx-auto px-6 py-4 md:py-8 text-white">
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/20 blur-[150px] rounded-full -z-10 pointer-events-none" />

            <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">

                {/* Text Content - "Magazine" Style */}
                <div className="w-full md:flex-1 md:max-w-lg z-20 flex flex-col items-center md:items-start text-center md:text-left">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 30 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <span className="inline-block text-primary text-xs md:text-sm tracking-[0.4em] font-bold uppercase mb-3 border-b border-primary/50 pb-2">
                                0{activeIndex + 1} — Premium Collection
                            </span>

                            <h2 className="text-5xl md:text-7xl font-playfair font-black text-white italic mb-4 leading-[0.9] drop-shadow-lg">
                                {features[activeIndex].title.split(" ").map((word, i) => (
                                    <span key={i} className="block">{word}</span>
                                ))}
                            </h2>

                            <h3 className="text-lg md:text-xl font-serif text-white/80 italic mb-6 font-light">
                                "{features[activeIndex].subtitle}"
                            </h3>

                            <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-sm mx-auto md:mx-0 font-light mb-6">
                                {features[activeIndex].description}
                            </p>

                            <button className="group flex items-center gap-3 text-white uppercase tracking-widest text-xs font-bold hover:text-primary transition-colors">
                                Discover More
                                <span className="p-2 rounded-full border border-white/20 group-hover:border-primary group-hover:bg-primary group-hover:text-black transition-all">
                                    <ArrowRight className="w-4 h-4" />
                                </span>
                            </button>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Image Composition */}
                <div className="w-full md:w-auto flex justify-center relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative"
                        >
                            {/* Decorative Frame Elements */}
                            <div className="absolute -top-4 -right-4 w-full h-full border border-white/10 rounded-2xl z-0" />
                            <div className="absolute -bottom-4 -left-4 w-full h-full border border-primary/20 rounded-2xl z-0" />

                            {/* Main Image Container */}
                            <div className="relative w-[260px] h-[340px] md:w-[320px] md:h-[420px] rounded-xl overflow-hidden shadow-2xl z-10 border border-white/5">
                                <motion.div
                                    animate={{ scale: [1, 1.1] }}
                                    transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
                                    className="relative w-full h-full"
                                >
                                    <Image
                                        src={features[activeIndex].image}
                                        alt={features[activeIndex].title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </motion.div>
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                            </div>

                            {/* Floating "Badge" or Detail */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="absolute -bottom-6 -right-6 bg-black/80 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-xl z-20 hidden md:block"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="text-left">
                                        <p className="text-white/60 text-[10px] uppercase tracking-wider">Rating</p>
                                        <div className="flex text-primary gap-0.5 mt-1">
                                            {[1, 2, 3, 4, 5].map(s => <span key={s}>★</span>)}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-center md:justify-start gap-4 mt-8 md:mt-0 absolute bottom-0 left-0 right-0 md:static md:translate-y-8">
                <button onClick={prevSlide} className="p-3 text-white/40 hover:text-white transition-colors"><ChevronLeft className="w-5 h-5" /></button>
                <div className="flex gap-2">
                    {features.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`transition-all duration-500 rounded-full ${i === activeIndex ? "w-8 h-0.5 bg-primary" : "w-3 h-0.5 bg-white/20 hover:bg-white/40"}`}
                        />
                    ))}
                </div>
                <button onClick={nextSlide} className="p-3 text-white/40 hover:text-white transition-colors"><ChevronRight className="w-5 h-5" /></button>
            </div>
        </div>
    );
}
