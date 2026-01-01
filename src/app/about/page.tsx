import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SectionReveal } from "@/components/MotionWrapper";
import { Star, Scissors, Heart, MapPin, Clock, Phone } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-white selection:bg-primary selection:text-black">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/about-hero.png"
                        alt="Studio 8 Barber Salon"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-background/90" />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <SectionReveal>
                        <span className="text-primary text-sm md:text-base font-bold uppercase tracking-[0.3em] mb-4 block">
                            About Us
                        </span>
                        <h1 className="text-6xl md:text-8xl font-playfair font-bold text-white mb-6 tracking-tight">
                            Studio <span className="text-primary italic">8</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/80 font-light tracking-wide max-w-2xl mx-auto">
                            Where precision meets luxury. Redefining your grooming experience in the heart of the city.
                        </p>
                    </SectionReveal>
                </div>
            </section>

            {/* Vision / Intro Section - Mimicking the Reference "Centered Text" */}
            <section className="py-24 relative">
                <div className="container mx-auto px-6">
                    <SectionReveal className="text-center max-w-4xl mx-auto">
                        <span className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-4 block">
                            Our Philosophy
                        </span>
                        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-8 leading-tight">
                            PREMIER UNISEX SALON <br />
                            <span className="text-white/50 italic">Crafting Confidence, One Cut at a Time.</span>
                        </h2>
                        <p className="text-white/60 text-lg leading-relaxed mb-12">
                            If you’re looking for a hair salon that understands the art of transformation, Studio 8 is your destination.
                            We blend traditional barbering techniques with modern styling to create looks that are timeless yet contemporary.
                            From precision fades to bespoke color treatments, our expert stylists are dedicated to perfecting your personal style.
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto opacity-50" />
                    </SectionReveal>
                </div>
            </section>

            {/* Detail Section - Split View */}
            <section className="py-20 bg-white/5 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                        {/* Image Side */}
                        <div className="w-full md:w-1/2">
                            <SectionReveal delay={0.2} className="relative group">
                                <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                                    <img
                                        src="/about-detail.png"
                                        alt="Precision Tools"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                                {/* Floating Element */}
                                <div className="absolute -bottom-6 -right-6 bg-secondary p-6 rounded-lg border border-white/10 shadow-xl hidden md:block">
                                    <div className="flex items-center gap-4">
                                        <Star className="w-8 h-8 text-primary fill-primary" />
                                        <div>
                                            <p className="font-playfair font-bold text-xl">5-Star</p>
                                            <p className="text-xs text-secondary-foreground uppercase tracking-wider">Service Rating</p>
                                        </div>
                                    </div>
                                </div>
                            </SectionReveal>
                        </div>

                        {/* Text Side */}
                        <div className="w-full md:w-1/2">
                            <SectionReveal delay={0.4}>
                                <h3 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
                                    Precision & Passion
                                </h3>
                                <p className="text-white/60 mb-8 leading-relaxed">
                                    At Studio 8, we believe that every client deserves a masterpiece. Our salon is equipped with state-of-the-art tools and premium products from Loreal, O3+, and Rica to ensure excellence in every service.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                                    {[
                                        { icon: Scissors, title: "Master Stylists", desc: "Expertly trained professionals." },
                                        { icon: Heart, title: "Client Focused", desc: "Tailored treatments for you." },
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 items-start bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors">
                                            <item.icon className="w-6 h-6 text-primary shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-bold text-white mb-1">{item.title}</h4>
                                                <p className="text-sm text-white/50">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </SectionReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vibe / Atmosphere Section */}
            <section className="py-24 relative">
                <div className="container mx-auto px-6">
                    <SectionReveal className="mb-16 text-center">
                        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">
                            The Studio Atmosphere
                        </h2>
                        <p className="text-white/60 max-w-2xl mx-auto">
                            More than just a salon, Studio 8 is a sanctuary where style meets relaxation.
                        </p>
                    </SectionReveal>

                    <div className="relative rounded-2xl overflow-hidden aspect-video md:aspect-[21/9] border border-white/10 shadow-2xl group mb-8">
                        <SectionReveal>
                            <img
                                src="/about-atmosphere.png"
                                alt="Studio 8 Atmosphere"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40" />
                        </SectionReveal>
                    </div>

                    <SectionReveal>
                        <div className="w-full text-center">
                            <blockquote className="max-w-4xl mx-auto">
                                <p className="text-2xl md:text-3xl font-playfair italic text-white mb-6 leading-normal">
                                    "We didn't just want to build a salon. We wanted to create an experience that uplifts your spirit as much as it enhances your look."
                                </p>
                                <footer className="text-primary font-bold tracking-widest uppercase text-sm">
                                    — The Studio 8 Team
                                </footer>
                            </blockquote>
                        </div>
                    </SectionReveal>
                </div>
            </section>

            {/* Info / Contact Strip */}
            <section className="py-16 border-t border-white/10 bg-black/20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
                        <SectionReveal delay={0.1} className="p-4">
                            <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2">Visit Us</h4>
                            <div className="space-y-4 text-sm">
                                <a href="https://maps.app.goo.gl/X7AKXWByhUm9FHES6" target="_blank" rel="noopener noreferrer" className="block text-white/60 hover:text-primary transition-colors">
                                    Shop 13-14, Sri Swastik Plaza (SSP), 3, Hobli, Kodigehalli, Krishnarajapuram, Bengaluru, Karnataka 560067
                                </a>
                                <a href="https://maps.app.goo.gl/6eYob5WFF8ktggkL8" target="_blank" rel="noopener noreferrer" className="block text-white/60 hover:text-primary transition-colors">
                                    Shabari mansion, 1/1, 2nd Cross Rd, Belathur, Kadugodi, Bengaluru, Karnataka 560067
                                </a>
                            </div>
                        </SectionReveal>

                        <SectionReveal delay={0.2} className="p-4 pt-8 md:pt-4">
                            <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                                <Clock className="w-6 h-6" />
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2">Opening Hours</h4>
                            <p className="text-white/60">Mon - Sun: 09:00 AM - 10:00 PM</p>
                        </SectionReveal>

                        <SectionReveal delay={0.3} className="p-4 pt-8 md:pt-4">
                            <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                                <Phone className="w-6 h-6" />
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2">Get in Touch</h4>
                            <p className="text-white/60">+91 91495 10872<br />info@studio8.com</p>
                        </SectionReveal>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
