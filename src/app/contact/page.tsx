"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionWrapper, { SectionReveal } from "@/components/MotionWrapper";
import { Phone, MapPin, Clock, Mail, Instagram, ArrowRight } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background text-white selection:bg-primary selection:text-black font-inter">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/contact-hero.png"
                        alt="Studio 8 Reception"
                        className="w-full h-full object-cover opacity-70"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="relative z-10 text-center">
                    <SectionReveal>
                        <h1 className="text-6xl md:text-8xl font-playfair font-bold text-white mb-4">
                            Contact
                        </h1>
                        <p className="text-white/60 text-lg uppercase tracking-widest max-w-xl mx-auto">
                            We'd love to hear from you
                        </p>
                    </SectionReveal>
                </div>
            </section>

            {/* Main Content - Centered Layout */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <SectionReveal className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
                            Get in Touch
                        </h2>
                        <p className="text-white/60 text-lg leading-relaxed">
                            Whether you want to book an appointment, ask about our services, or just say hello, we are here for you. Experience the luxury you deserve.
                        </p>
                    </SectionReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Card 1: Visit Us */}
                        <SectionReveal delay={0.1} className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all hover:bg-white/10 group text-center h-full flex flex-col items-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                                <MapPin className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-playfair font-bold text-white mb-4">Visit Us</h3>
                            <div className="text-white/60 text-sm space-y-4">
                                <a href="https://maps.app.goo.gl/X7AKXWByhUm9FHES6" target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition-colors">
                                    Shop 13-14, Sri Swastik Plaza (SSP), 3, Hobli, Kodigehalli, Krishnarajapuram, Bengaluru, Karnataka 560067
                                </a>
                                <div className="w-full h-px bg-white/10 my-2" />
                                <a href="https://maps.app.goo.gl/6eYob5WFF8ktggkL8" target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition-colors">
                                    Shabari mansion, 1/1, 2nd Cross Rd, Belathur, Kadugodi, Bengaluru, Karnataka 560067
                                </a>
                            </div>
                        </SectionReveal>

                        {/* Card 2: Call Us */}
                        <SectionReveal delay={0.2} className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all hover:bg-white/10 group text-center h-full flex flex-col items-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                                <Phone className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-playfair font-bold text-white mb-4">Call Us</h3>
                            <p className="text-white/60 mb-2">+91 91495 10872</p>
                            <p className="text-white/40 text-sm">Available for WhatsApp</p>
                            <div className="mt-6 flex justify-center gap-4">
                                <a href="tel:+919149510872" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all">
                                    <Phone className="w-4 h-4" />
                                </a>
                            </div>
                        </SectionReveal>

                        {/* Card 3: Email Us */}
                        <SectionReveal delay={0.3} className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all hover:bg-white/10 group text-center h-full flex flex-col items-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                                <Mail className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-playfair font-bold text-white mb-4">Email Us</h3>
                            <a href="mailto:info@studio8.com" className="text-white/60 hover:text-primary transition-colors">info@studio8.com</a>
                            <div className="mt-6 flex justify-center gap-4">
                                <a href="mailto:info@studio8.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all">
                                    <Mail className="w-4 h-4" />
                                </a>
                            </div>
                        </SectionReveal>

                        {/* Card 4: Opening Hours */}
                        <SectionReveal delay={0.4} className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all hover:bg-white/10 group text-center h-full flex flex-col items-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                                <Clock className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-playfair font-bold text-white mb-4">Opening Hours</h3>
                            <p className="text-white/60">Mon - Sun: 09:00 AM - 10:00 PM</p>
                            <div className="mt-6 flex justify-center gap-4">
                                <a href="https://www.instagram.com" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all">
                                    <Instagram className="w-4 h-4" />
                                </a>
                            </div>
                        </SectionReveal>
                    </div>
                </div>
            </section>

            {/* Locations Section - Replacing Newsletter */}
            <section className="py-24 bg-neutral-900 border-t border-white/10">
                <div className="container mx-auto px-6">
                    <SectionReveal className="text-center mb-16">
                        <span className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-4 block">
                            Find Us
                        </span>
                        <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-6">
                            Our Locations
                        </h2>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">
                            Visit us at our premium studios in Bengaluru.
                        </p>
                    </SectionReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {/* Location 1: Kodigehalli */}
                        <SectionReveal delay={0.1} className="space-y-6">
                            <div className="aspect-video w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4511582380665!2d77.7555464!3d13.006916799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0f6a7dfac51d%3A0x75a09050a42b02!2sStudio8%20unisex%20salon!5e0!3m2!1sen!2sin!4v1767245824618!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="transition-all duration-500"
                                ></iframe>
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="text-xl font-playfair font-bold text-white mb-2">Studio 8 - Kodigehalli</h3>
                                <p className="text-white/60 mb-4 max-w-sm">Shop 13-14, Sri Swastik Plaza (SSP), 3, Hobli, Kodigehalli, Krishnarajapuram, Bengaluru, Karnataka 560067</p>
                                <a
                                    href="https://maps.app.goo.gl/X7AKXWByhUm9FHES6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary text-sm font-bold uppercase tracking-wider hover:text-white transition-colors"
                                >
                                    Get Directions &rarr;
                                </a>
                            </div>
                        </SectionReveal>

                        {/* Location 2: Belathur */}
                        <SectionReveal delay={0.2} className="space-y-6">
                            <div className="aspect-video w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4769584805445!2d77.72638727513132!3d13.005270514139077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11ae5c97da61%3A0x5cca0054364f69bb!2sStudio%208%20Unisex%20Salon!5e0!3m2!1sen!2sin!4v1767245882889!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="transition-all duration-500"
                                ></iframe>
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="text-xl font-playfair font-bold text-white mb-2">Studio 8 - Belathur</h3>
                                <p className="text-white/60 mb-4 max-w-sm">Shabari mansion, 1/1, 2nd Cross Rd, Belathur, Kadugodi, Bengaluru, Karnataka 560067</p>
                                <a
                                    href="https://maps.app.goo.gl/6eYob5WFF8ktggkL8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary text-sm font-bold uppercase tracking-wider hover:text-white transition-colors"
                                >
                                    Get Directions &rarr;
                                </a>
                            </div>
                        </SectionReveal>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
