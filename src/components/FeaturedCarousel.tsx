"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";

const features = [
    {
        title: "Hydra Facial",
        description: "Deep cleansing and hydration for a radiant glow.",
        icon: Star,
    },
    {
        title: "Keratin Treatment",
        description: "Smooth, frizzy-free hair with long-lasting shine.",
        icon: Star,
    },
    {
        title: "Bridal Packages",
        description: "Complete luxury care for your special day.",
        icon: Star,
    },
];

export default function FeaturedCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % features.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + features.length) % features.length);
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto px-12 py-10">
            <div className="overflow-hidden relative min-h-[300px] flex items-center justify-center">
                <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl w-full"
                >
                    <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-6">
                        <Star className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-3xl font-playfair font-bold text-white mb-4">{features[activeIndex].title}</h3>
                    <p className="text-white/60 mb-6 text-lg">{features[activeIndex].description}</p>
                    <div className="flex justify-center space-x-2">
                        {features.map((_, i) => (
                            <div
                                key={i}
                                className={`w-2 h-2 rounded-full transition-all ${i === activeIndex ? "bg-primary w-6" : "bg-white/20"}`}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>

            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all disabled:opacity-50"
            >
                <ChevronLeft className="w-8 h-8" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all disabled:opacity-50"
            >
                <ChevronRight className="w-8 h-8" />
            </button>
        </div>
    );
}
