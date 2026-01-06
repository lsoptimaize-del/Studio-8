"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Scissors } from "lucide-react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4"
                : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2 group">

                    <img src="/logo.png" alt="Studio 8" className="h-20 w-20 rounded-full bg-white/10" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-white/80 hover:text-primary transition-colors text-sm uppercase tracking-widest font-medium"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="https://wa.me/919686947430"
                        className="px-6 py-2 bg-white text-black font-bold uppercase tracking-wide text-xs rounded hover:bg-gray-200 transition-colors"
                    >
                        Book Now
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white hover:text-primary transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 md:hidden flex flex-col items-center py-10 space-y-6 shadow-2xl"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-white/90 text-lg uppercase tracking-widest hover:text-primary transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="https://wa.me/919149510872"
                            onClick={() => setIsOpen(false)}
                            className="px-8 py-3 bg-white text-black font-bold uppercase tracking-wide text-sm rounded mt-4"
                        >
                            Book Appointment
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
