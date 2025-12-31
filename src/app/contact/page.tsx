"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionWrapper, { SectionReveal } from "@/components/MotionWrapper";
import { Phone, MapPin, Mail, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background pt-24 pb-12">
            <Navbar />
            <MotionWrapper className="container mx-auto px-6">
                <SectionReveal className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-4">Contact Us</h1>
                    <p className="text-white/60">Book your appointment or visit us today.</p>
                </SectionReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <SectionReveal delay={0.2}>
                        <div className="bg-white/5 border border-white/5 p-8 rounded-2xl h-full">
                            <h2 className="text-2xl font-playfair font-bold text-white mb-8">Get in Touch</h2>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <Phone className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium mb-1">Phone</h3>
                                        <p className="text-white/60">+91 9348555189</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <MapPin className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium mb-1">Location</h3>
                                        <p className="text-white/60">Studio 8 Unisex Salon,<br />Prime Location, India</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <Clock className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium mb-1">Hours</h3>
                                        <p className="text-white/60">Open Daily: 10:00 AM - 9:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SectionReveal>

                    {/* Form */}
                    <SectionReveal delay={0.4}>
                        <form className="bg-white/5 border border-white/5 p-8 rounded-2xl space-y-6">
                            <h2 className="text-2xl font-playfair font-bold text-white mb-6">Book Appointment</h2>

                            <div>
                                <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Name</label>
                                <input type="text" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors" placeholder="Your Name" />
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Phone</label>
                                <input type="tel" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors" placeholder="+91 9348555189" />
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Service Interest</label>
                                <select className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors appearance-none">
                                    <option>Hair Styling</option>
                                    <option>Facials & Skin</option>
                                    <option>Bridal Packages</option>
                                    <option>Spa Treatments</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <button type="submit" className="w-full py-4 bg-primary text-black font-bold uppercase tracking-wide rounded hover:bg-white transition-colors">
                                Book Now
                            </button>
                        </form>
                    </SectionReveal>
                </div>
            </MotionWrapper>
            <Footer />
        </main>
    );
}
