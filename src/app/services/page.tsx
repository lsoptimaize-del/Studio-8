"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionWrapper, { SectionReveal } from "@/components/MotionWrapper";
import ServiceTabs from "@/components/ServiceTabs";
import ServiceAccordion from "@/components/ServiceAccordion";
import PricingTable from "@/components/PricingTable";
import { motion, AnimatePresence } from "framer-motion";

// --- DATA ---
const womenServices = [
    {
        category: "Waxing & Hair Removal",
        items: [
            {
                title: "Threading", prices: [
                    { name: "Eyebrows", priceNM: "50", priceM: "40" },
                    { name: "Forehead / Upper lip / Lower lip", priceNM: "40", priceM: "30" },
                    { name: "Cheeks", priceNM: "60", priceM: "50" },
                    { name: "Side locks", priceNM: "80", priceM: "60" },
                    { name: "Full Face", priceNM: "400", priceM: "300" },
                ]
            },
            {
                title: "Brazilian Wax", prices: [
                    { name: "Upper lips / Chin / Cheeks", priceNM: "100–120", priceM: "80" },
                    { name: "Side locks", priceNM: "140", priceM: "100" },
                    { name: "Underarms", priceNM: "200", priceM: "150" },
                    { name: "Full face", priceNM: "450", priceM: "400" },
                    { name: "Bikini Wax", priceNM: "1800", priceM: "1600" },
                    { name: "Full Back", priceNM: "650", priceM: "600" },
                ]
            },
            {
                title: "Normal Chocolate Waxing", prices: [
                    { name: "Full hands", priceNM: "400", priceM: "350" },
                    { name: "Full legs", priceNM: "500", priceM: "450" },
                    { name: "Full body", priceNM: "2000", priceM: "1800" },
                ]
            },
            {
                title: "Rica Waxing (Aloe & Chocolate)", prices: [
                    { name: "Full hands", priceNM: "500", priceM: "450" },
                    { name: "Full legs", priceNM: "600", priceM: "550" },
                    { name: "Full body", priceNM: "2200", priceM: "2000" },
                ]
            },
            {
                title: "Gold Waxing", prices: [
                    { name: "Full body", priceNM: "2500", priceM: "2200" },
                    { name: "Full back", priceNM: "900", priceM: "800" },
                ]
            },
        ]
    },
    {
        category: "Skin & Facials",
        items: [
            {
                title: "Clean-Up", prices: [
                    { name: "Fruit", priceNM: "500", priceM: "450" },
                    { name: "Aroma", priceNM: "600", priceM: "550" },
                    { name: "Wine / Diamond", priceNM: "700", priceM: "650" },
                    { name: "O3 Clean-Up", priceNM: "1500", priceM: "1399" },
                ]
            },
            {
                title: "Hydra Facial", prices: [
                    { name: "Full Process", priceNM: "4000", priceM: "3500" },
                ]
            },
            {
                title: "Skin Basic Facials", prices: [
                    { name: "Fruit Facial", priceNM: "700", priceM: "625" },
                    { name: "Pearl Facial", priceNM: "1200", priceM: "999" },
                ]
            },
            {
                title: "Skin Advance Facials", prices: [
                    { name: "Diamond", priceNM: "1400", priceM: "1299" },
                    { name: "Skin Whitening", priceNM: "2500", priceM: "2200" },
                    { name: "O3 Glow", priceNM: "2800", priceM: "2500" },
                    { name: "24 Carat Gold", priceNM: "4500", priceM: "4199" },
                    { name: "Four Layers Facial", priceNM: "4280", priceM: "3799" },
                ]
            },
            {
                title: "Bleach & De-Tan", prices: [
                    { name: "Full Body Bleach (Gold)", priceNM: "3000", priceM: "2599" },
                    { name: "Full Body De-Tan (O3)", priceNM: "2500", priceM: "2200" },
                ]
            },
        ]
    },
    {
        category: "Hands & Feet",
        items: [
            {
                title: "Manicure", prices: [
                    { name: "Classic", priceNM: "350", priceM: "300" },
                    { name: "Whitening", priceNM: "800", priceM: "750" },
                    { name: "Heal Peel", priceNM: "2000", priceM: "1800" },
                ]
            },
            {
                title: "Pedicure", prices: [
                    { name: "Classic", priceNM: "500", priceM: "450" },
                    { name: "Anti-tan", priceNM: "1300", priceM: "1200" },
                ]
            },
        ]
    },
    {
        category: "Hair Services",
        items: [
            {
                title: "Cuts", prices: [
                    { name: "Basic Cut (U/V/Straight)", priceNM: "450", priceM: "350" },
                    { name: "Multi Layers / Step / Bob", priceNM: "700–800", priceM: "600–700" },
                    { name: "Advanced Layer", priceNM: "900", priceM: "850" },
                    { name: "Kids (Below 12)", priceNM: "300–550", priceM: "300–550" },
                ]
            },
            {
                title: "Wash & Care", prices: [
                    { name: "Wash + Blowdry", priceNM: "700", priceM: "650" },
                    { name: "Ironing / Tongs", priceNM: "800", priceM: "750" },
                ]
            },
            {
                title: "Hair Spa", prices: [
                    { name: "Loreal Smooth & Shine", priceNM: "1000", priceM: "900" },
                    { name: "Keratin Protect", priceNM: "1800", priceM: "1700" },
                    { name: "Moroccan Spa", priceNM: "1900", priceM: "1800" },
                ]
            },
            {
                title: "Treatments", prices: [
                    { name: "GK Keratin", priceNM: "5200", priceM: "4600" },
                    { name: "Calvca Floractive Botox", priceNM: "5800", priceM: "5200" },
                ]
            },
            {
                title: "Chemical Texture", prices: [
                    { name: "Smoothing / Straightening", priceNM: "4520", priceM: "3500" },
                ]
            },
            {
                title: "Color", prices: [
                    { name: "Root Touch-Up", priceNM: "1400", priceM: "1200" },
                    { name: "Global Colour", priceNM: "4200", priceM: "3200" },
                    { name: "Balayage / Ombre", priceNM: "5200", priceM: "4399" },
                ]
            },
        ]
    }
];

const menServices = [
    {
        category: "Haircut & Beard",
        items: [
            {
                title: "Styling", prices: [
                    { name: "Basic Haircut", priceNM: "200", priceM: "180" },
                    { name: "Change of Style", priceNM: "250", priceM: "200" },
                    { name: "Beard Styling", priceNM: "150", priceM: "120" },
                    { name: "Head Shave", priceNM: "300", priceM: "250" },
                ]
            }
        ]
    },
    {
        category: "Face & Body",
        items: [
            {
                title: "Grooming", prices: [
                    { name: "Pedicure (Classic)", priceNM: "500", priceM: "450" },
                    { name: "Manicure (Classic)", priceNM: "350", priceM: "300" },
                    { name: "Brazilian Wax (Chest)", priceNM: "120", priceM: "100" },
                ]
            }
        ]
    },
    {
        category: "Spa & Color",
        items: [
            {
                title: "Care", prices: [
                    { name: "Basic Hair Spa", priceNM: "1000", priceM: "900" },
                    { name: "Global Colour (Ammonia Free)", priceNM: "800", priceM: "700" },
                ]
            }
        ]
    }
];

const packages = [
    {
        category: "Special Packages",
        items: [
            {
                title: "Bridal", prices: [
                    { name: "Bridal Makeup", priceNM: "4500", priceM: "4199" },
                    { name: "Pre-Bridal Package I", priceNM: "8500", priceM: "7860" },
                    { name: "Pre-Bridal Package II", priceNM: "8500", priceM: "7860" },
                ]
            }
        ]
    }
];

export default function ServicesPage() {
    const [activeTab, setActiveTab] = useState("Women");

    const getActiveData = () => {
        switch (activeTab) {
            case "Women": return womenServices;
            case "Men": return menServices;
            case "Packages": return packages;
            default: return womenServices;
        }
    };

    return (
        <main className="min-h-screen bg-background pt-24 pb-12">
            <Navbar />
            <MotionWrapper className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <SectionReveal>
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-4">Our Services</h1>
                        <p className="text-white/60">Comprehensive care customized for your unique style.</p>
                    </SectionReveal>
                </div>

                <ServiceTabs activeTab={activeTab} setActiveTab={setActiveTab} />

                <div className="max-w-4xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {getActiveData().map((category, idx) => (
                                <div key={idx} className="mb-12">
                                    <h2 className="text-2xl font-playfair font-bold text-primary mb-6 border-b border-white/10 pb-2 inline-block">
                                        {category.category}
                                    </h2>
                                    {category.items.map((item, i) => (
                                        <SectionReveal key={i} delay={i * 0.1}>
                                            <PricingTable title={item.title} services={item.prices} />
                                        </SectionReveal>
                                    ))}
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </MotionWrapper>
            <Footer />
        </main>
    );
}
