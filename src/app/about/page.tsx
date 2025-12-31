"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionWrapper, { SectionReveal } from "@/components/MotionWrapper";
import { Sparkles } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background pt-24 pb-12">
            <Navbar />
            <MotionWrapper className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <SectionReveal className="mb-16">
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">About Studio 8</h1>
                        <div className="w-24 h-1 bg-primary mx-auto mb-8" />
                        <p className="text-xl text-white/80 leading-relaxed font-light">
                            "Where luxury meets expertise."
                        </p>
                    </SectionReveal>

                    <SectionReveal delay={0.2} className="bg-white/5 border border-white/5 p-10 rounded-2xl md:p-14 text-left">
                        <p className="text-white/70 mb-6 text-lg">
                            We offer premium beauty and care treatments tailored for everyone. At Studio 8, we believe that grooming is an art form, and every individual deserves to feel their absolute best.
                        </p>
                        <p className="text-white/70 mb-6 text-lg">
                            Our team of expert stylists and therapists are dedicated to providing unisex grooming services that blend modern techniques with traditional care. Whether it's a refreshing facial, a precision haircut, or a relaxing spa day, we ensure a world-class experience.
                        </p>

                        <div className="flex items-center space-x-4 mt-8">
                            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                                <Sparkles className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold font-playfair text-lg">Unisex Expertise</h4>
                                <p className="text-white/50 text-sm">Specialized care for men & women</p>
                            </div>
                        </div>
                    </SectionReveal>
                </div>
            </MotionWrapper>
            <Footer />
        </main>
    );
}
