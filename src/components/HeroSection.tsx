"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const HERO_IMAGES = [
    "/studio_pc.jpg",
    "/nail_showcase.jpg",
    "/main_desk.jpg",
    "/hairwash.jpg"
];

export default function HeroSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.2, 0.65, 0.3, 0.9]
            }
        }
    };

    const imageVariants: Variants = {
        hidden: { scale: 1.1, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 1.5,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 1
            }
        }
    };

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={currentIndex}
                        className="absolute inset-0"
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <Image
                            src={HERO_IMAGES[currentIndex]}
                            alt="Studio 8 Luxury Interior"
                            fill
                            className="object-cover object-center"
                            priority
                            quality={100}
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Dark Overlay for Readability */}
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0518] via-transparent to-black/30 z-10" />
                {/* Abstract Background Element */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] opacity-20 animate-pulse z-20" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/40 rounded-full blur-[150px] opacity-20 z-20" />
            </div>

            <motion.div
                className="container mx-auto px-6 relative z-30 text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >


                <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white mb-6 leading-tight drop-shadow-lg"
                >
                    Experience Luxury <br />
                    <span className="italic font-light text-white/90">at Studio 8</span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="max-w-xl mx-auto text-lg text-white/90 mb-10 font-light drop-shadow-md"
                >
                    The ultimate destination for premium unisex grooming, spa treatments, and advanced aesthetics.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6"
                >
                    <Link
                        href="/services"
                        className="group relative px-8 py-3 bg-transparent border border-white text-white font-bold text-sm uppercase tracking-wider overflow-hidden rounded transition-all hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                    >
                        <span className="relative z-10 flex items-center">
                            View Menu
                        </span>
                    </Link>
                    <a
                        href="https://wa.me/919149510872"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group px-8 py-3 bg-white text-black border border-white font-bold text-sm uppercase tracking-wider rounded hover:bg-gray-200 transition-all flex items-center shadow-lg"
                    >
                        <span>Book Appointment</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </motion.div>



        </section>
    );
}
