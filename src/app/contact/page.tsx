"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionWrapper, { SectionReveal } from "@/components/MotionWrapper";
import { Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
    return (
        <main className="min-h-screen mt-10  bg-background pt-24 pb-12 flex flex-col">
            <Navbar />
            <MotionWrapper className="container mx-auto px-6 flex-grow flex flex-col justify-center mb-20">
                <SectionReveal className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-4">Contact Us</h1>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Ready to enhance your beauty? Get in touch with us directly to book your appointment or for any inquiries.
                    </p>
                </SectionReveal>

                <SectionReveal delay={0.2} className="max-w-4xl mx-auto w-full">
                    <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                            {/* Contact Details */}
                            <div className="space-y-8 w-full md:w-1/2">
                                <div className="flex items-start space-x-5">
                                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                                        <Phone className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-white text-lg font-playfair font-bold mb-1">Phone & WhatsApp</h3>
                                        <p className="text-white/70 tracking-wide">+91 9149510872</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-5">
                                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-white text-lg font-playfair font-bold mb-1">Location</h3>
                                        <p className="text-white/70">Studio 8 Unisex Salon,<br />Prime Location, India</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-5">
                                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                                        <Clock className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-white text-lg font-playfair font-bold mb-1">Hours</h3>
                                        <p className="text-white/70">Open Daily: 10:00 AM - 9:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            {/* Separator */}
                            <div className="hidden md:block w-px h-64 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

                            {/* CTA Section */}
                            <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
                                <h3 className="text-2xl font-playfair font-bold text-white mb-4">Book Your Visit</h3>
                                <p className="text-white/60 mb-8 text-center md:text-left">
                                    We don't use complicated forms. Simply chat with us on WhatsApp to check availability and book your slot instantly.
                                </p>
                                <a
                                    href="https://wa.me/919149510872"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative px-8 py-4 bg-[#25D366] text-white font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-[#20bd5a] transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] flex items-center gap-3 w-full md:w-auto justify-center"
                                >
                                    <span>Chat on WhatsApp</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>

                        </div>
                    </div>
                </SectionReveal>
            </MotionWrapper>
            <Footer />
        </main>
    );
}
