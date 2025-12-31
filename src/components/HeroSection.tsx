"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#0f0518] z-10" />
                {/* Abstract Background Element */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] opacity-20 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/40 rounded-full blur-[150px] opacity-20" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="inline-block mb-4 text-primary font-medium tracking-[0.2em] uppercase text-sm"
                >
                    Redefining Elegance
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white mb-6 leading-tight"
                >
                    Experience Luxury <br />
                    <span className="italic font-light text-white/90">at Studio 8</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="max-w-xl mx-auto text-lg text-white/70 mb-10 font-light"
                >
                    The ultimate destination for premium unisex grooming, spa treatments, and advanced aesthetics.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6"
                >
                    <Link
                        href="/services"
                        className="group relative px-8 py-3 bg-primary text-black font-bold text-sm uppercase tracking-wider overflow-hidden rounded transition-all hover:shadow-[0_0_20px_rgba(255,193,7,0.4)]"
                    >
                        <span className="relative z-10 flex items-center">
                            View Menu
                        </span>
                    </Link>
                    <Link
                        href="/contact"
                        className="group px-8 py-3 bg-transparent border border-white/20 text-white font-bold text-sm uppercase tracking-wider rounded hover:bg-white/5 transition-all flex items-center"
                    >
                        <span>Book Appointment</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 text-white/40"
            >
                <span className="text-[10px] uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/40 to-white/0" />
            </motion.div>
        </section>
    );
}
