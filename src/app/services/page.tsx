"use client";

import { useState, useMemo, memo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Crown } from "lucide-react";
import Image from "next/image";

// --- OPTIMIZED BACKGROUND (Memoized & GPU Accelerated) ---
const AuroraBackground = memo(function AuroraBackground() {
    return (
        <div className="fixed inset-0 -z-10 bg-black">
            <Image
                src="/reception.jpg"
                alt="Studio 8 Services Background"
                fill
                className="object-cover"
                priority
                quality={100}
            />
            <div className="absolute inset-0 bg-black/70" />
        </div>
    );
});

// --- DATA STRUCTURES ---
// ... (Keeping your exact data structure for compatibility)
const womenServices = [
    {
        category: "Waxing & Hair Removal",
        items: [
            {
                title: "Threading",
                prices: [
                    { name: "Eyebrows", priceNM: "50", priceM: "40" },
                    { name: "Forehead", priceNM: "40", priceM: "30" },
                    { name: "Upper lips", priceNM: "40", priceM: "30" },
                    { name: "Lower lips", priceNM: "40", priceM: "30" },
                    { name: "Cheeks", priceNM: "60", priceM: "50" },
                    { name: "Side locks", priceNM: "80", priceM: "60" },
                    { name: "Full Face", priceNM: "400", priceM: "300" },
                ]
            },
            {
                title: "Brazilian Wax",
                prices: [
                    { name: "Upper lips", priceNM: "100", priceM: "80" },
                    { name: "Chin", priceNM: "120", priceM: "80" },
                    { name: "Cheeks", priceNM: "110", priceM: "80" },
                    { name: "Side locks", priceNM: "140", priceM: "100" },
                    { name: "Under arms", priceNM: "200", priceM: "150" },
                    { name: "Blouse line", priceNM: "350", priceM: "300" },
                    { name: "Full face", priceNM: "450", priceM: "400" },
                    { name: "Full back", priceNM: "650", priceM: "600" },
                    { name: "Bikini line", priceNM: "550", priceM: "500" },
                    { name: "Bikini wax", priceNM: "1800", priceM: "1600" },
                ]
            },
            {
                title: "Normal Chocolate Waxing",
                prices: [
                    { name: "Full hands", priceNM: "400", priceM: "350" },
                    { name: "Full legs", priceNM: "500", priceM: "450" },
                    { name: "Half hands", priceNM: "300", priceM: "250" },
                    { name: "Half legs", priceNM: "350", priceM: "300" },
                    { name: "Tummy", priceNM: "350", priceM: "300" },
                    { name: "Midriff", priceNM: "350", priceM: "300" },
                    { name: "Full back", priceNM: "650", priceM: "600" },
                    { name: "Full body", priceNM: "2000", priceM: "1800" },
                ]
            },
            {
                title: "Rica Waxing (Aloe & Chocolate)",
                prices: [
                    { name: "Full hands", priceNM: "500", priceM: "450" },
                    { name: "Full legs", priceNM: "600", priceM: "550" },
                    { name: "Half hands", priceNM: "400", priceM: "350" },
                    { name: "Half legs", priceNM: "450", priceM: "400" },
                    { name: "Tummy", priceNM: "450", priceM: "400" },
                    { name: "Midriff", priceNM: "450", priceM: "400" },
                    { name: "Full back", priceNM: "800", priceM: "750" },
                    { name: "Full body", priceNM: "2200", priceM: "2000" },
                ]
            },
            {
                title: "Gold Waxing",
                prices: [
                    { name: "Full hands", priceNM: "550", priceM: "500" },
                    { name: "Full legs", priceNM: "650", priceM: "600" },
                    { name: "Half hands", priceNM: "400", priceM: "350" },
                    { name: "Half legs", priceNM: "450", priceM: "400" },
                    { name: "Tummy", priceNM: "550", priceM: "500" },
                    { name: "Midriff", priceNM: "600", priceM: "550" },
                    { name: "Full back", priceNM: "900", priceM: "800" },
                    { name: "Full body", priceNM: "2500", priceM: "2200" },
                ]
            }
        ]
    },
    {
        category: "Nail Art",
        items: [
            {
                title: "Nail Care & Extensions",
                prices: [
                    { name: "Soak Off", priceNM: "300", priceM: "300" },
                    { name: "Nail Art Start", priceNM: "100", priceM: "100" },
                    { name: "Nail Extension Removing", priceNM: "999", priceM: "999" },
                    { name: "Temporary Nail Extension", priceNM: "1500", priceM: "1500" },
                    { name: "Gel Nail Polish", priceNM: "1199", priceM: "1199" },
                    { name: "Gel Nail Polish Removing", priceNM: "399", priceM: "399" },
                    { name: "French Nail Polish", priceNM: "1500", priceM: "1500" },
                    { name: "Refilling", priceNM: "1500", priceM: "1500" },
                    { name: "Acrylic Nail Extension", priceNM: "2999", priceM: "2999" },
                    { name: "Gel Nail Extension", priceNM: "2999", priceM: "2999" },
                ]
            }
        ]
    },
    {
        category: "Skin & Facials",
        items: [
            {
                title: "Clean-Up",
                prices: [
                    { name: "Fruits clean up", priceNM: "500", priceM: "450" },
                    { name: "Aroma clean up", priceNM: "600", priceM: "550" },
                    { name: "Coffee clean up", priceNM: "625", priceM: "575" },
                    { name: "Pearl clean up", priceNM: "650", priceM: "520" },
                    { name: "Wine clean up", priceNM: "700", priceM: "650" },
                    { name: "Diamond clean up", priceNM: "700", priceM: "650" },
                    { name: "Lotus clean up", priceNM: "800", priceM: "750" },
                    { name: "Gold clean up", priceNM: "850", priceM: "770" },
                    { name: "O3 clean up", priceNM: "1500", priceM: "1399" },
                ]
            },
            {
                title: "Hydra Facial Treatment",
                prices: [
                    { name: "Full Process (Cleansing, Peeling, Extraction, Protection, Hydration)", priceNM: "4000", priceM: "3500" },
                ]
            },
            {
                title: "Skin Basic Facial",
                prices: [
                    { name: "Fruit facial", priceNM: "700", priceM: "625" },
                    { name: "Aroma facial", priceNM: "800", priceM: "749" },
                    { name: "Coffee facial", priceNM: "850", priceM: "780" },
                    { name: "Pearl facial", priceNM: "1200", priceM: "999" },
                ]
            },
            {
                title: "Skin Advance Facials",
                prices: [
                    { name: "Diamond Facial", priceNM: "1400", priceM: "1299" },
                    { name: "Lotus Facial", priceNM: "1500", priceM: "1399" },
                    { name: "Active charcoal", priceNM: "1600", priceM: "1450" },
                    { name: "Wine facial", priceNM: "1645", priceM: "1489" },
                    { name: "Anti ageing facial", priceNM: "1700", priceM: "1580" },
                    { name: "Gold facial", priceNM: "1800", priceM: "1659" },
                    { name: "Raaga express", priceNM: "1850", priceM: "1699" },
                    { name: "Skin whitening", priceNM: "2500", priceM: "2200" },
                    { name: "O3 glow facial", priceNM: "2800", priceM: "2500" },
                    { name: "O2C2 facial", priceNM: "3000", priceM: "2700" },
                    { name: "Four layers facial", priceNM: "4280", priceM: "3799" },
                    { name: "24 carat gold facial", priceNM: "4500", priceM: "4199" },
                ]
            },
            {
                title: "Bleach Cream",
                prices: [
                    { name: "Face (Gold)", priceNM: "500", priceM: "450" },
                    { name: "Face (Oxylife)", priceNM: "399", priceM: "250" },
                    { name: "Face neck (Gold)", priceNM: "600", priceM: "550" },
                    { name: "Face neck (Oxylife)", priceNM: "499", priceM: "350" },
                    { name: "Full hands (Gold)", priceNM: "750", priceM: "699" },
                    { name: "Full hands (Oxylife)", priceNM: "650", priceM: "599" },
                    { name: "Full legs (Gold)", priceNM: "1000", priceM: "899" },
                    { name: "Full legs (Oxylife)", priceNM: "799", priceM: "650" },
                    { name: "Feet (Gold)", priceNM: "450", priceM: "400" },
                    { name: "Feet (Oxylife)", priceNM: "400", priceM: "350" },
                    { name: "Blouse line (Gold)", priceNM: "600", priceM: "549" },
                    { name: "Blouse line (Oxylife)", priceNM: "500", priceM: "415" },
                    { name: "Full body (Gold)", priceNM: "3000", priceM: "2599" },
                    { name: "Full body (Oxylife)", priceNM: "2400", priceM: "1999" },
                ]
            },
            {
                title: "De-Tan Pack",
                prices: [
                    { name: "Face (O3)", priceNM: "500", priceM: "450" },
                    { name: "Face (Raaga)", priceNM: "400", priceM: "350" },
                    { name: "Face (Normal)", priceNM: "300", priceM: "250" },
                    { name: "Face neck (O3)", priceNM: "650", priceM: "550" },
                    { name: "Face neck (Raaga)", priceNM: "450", priceM: "400" },
                    { name: "Face neck (Normal)", priceNM: "400", priceM: "350" },
                    { name: "Full hands (O3)", priceNM: "800", priceM: "750" },
                    { name: "Full hands (Raaga)", priceNM: "650", priceM: "600" },
                    { name: "Full hands (Normal)", priceNM: "600", priceM: "500" },
                    { name: "Full legs (O3)", priceNM: "1000", priceM: "899" },
                    { name: "Full legs (Raaga)", priceNM: "850", priceM: "699" },
                    { name: "Full legs (Normal)", priceNM: "800", priceM: "599" },
                    { name: "Feet (O3)", priceNM: "500", priceM: "450" },
                    { name: "Feet (Raaga)", priceNM: "400", priceM: "350" },
                    { name: "Feet (Normal)", priceNM: "350", priceM: "299" },
                    { name: "Blouse line (O3)", priceNM: "600", priceM: "499" },
                    { name: "Blouse line (Raaga)", priceNM: "499", priceM: "399" },
                    { name: "Blouse line (Normal)", priceNM: "399", priceM: "299" },
                    { name: "Full body (O3)", priceNM: "2500", priceM: "2200" },
                    { name: "Full body (Raaga)", priceNM: "2300", priceM: "2000" },
                    { name: "Full body (Normal)", priceNM: "1700", priceM: "1500" },
                ]
            }
        ]
    },
    {
        category: "Hands & Feet",
        items: [
            {
                title: "Women's Pedicure",
                prices: [
                    { name: "Classic", priceNM: "500", priceM: "450" },
                    { name: "Rose", priceNM: "650", priceM: "600" },
                    { name: "Aroma", priceNM: "700", priceM: "650" },
                    { name: "Chocolate", priceNM: "750", priceM: "700" },
                    { name: "Whitening", priceNM: "850", priceM: "800" },
                    { name: "Anti tan", priceNM: "1300", priceM: "1200" },
                    { name: "Bomb", priceNM: "1200", priceM: "1100" },
                    { name: "Alga", priceNM: "1800", priceM: "1600" },
                    { name: "Heal peel", priceNM: "2000", priceM: "1800" },
                ]
            },
            {
                title: "Women's Manicure",
                prices: [
                    { name: "Classic", priceNM: "350", priceM: "300" },
                    { name: "Rose", priceNM: "600", priceM: "550" },
                    { name: "Aroma", priceNM: "650", priceM: "600" },
                    { name: "Chocolate", priceNM: "700", priceM: "650" },
                    { name: "Whitening", priceNM: "800", priceM: "750" },
                    { name: "Anti tan", priceNM: "1200", priceM: "1100" },
                    { name: "Bomb", priceNM: "600", priceM: "550" },
                    { name: "Alga", priceNM: "900", priceM: "850" },
                ]
            }
        ]
    },
    {
        category: "Hair Services",
        items: [
            {
                title: "Kids Girl Hair Cuts (Below 12)",
                prices: [
                    { name: "Hair wash & blast dry", priceNM: "250", priceM: "200" },
                    { name: "Head Shave", priceNM: "280", priceM: "250" },
                    { name: "Basic Hair cut", priceNM: "300", priceM: "380" }, // Note: Member price is higher in PDF source (380), preserved as is
                    { name: "Advance Hair cut", priceNM: "500", priceM: "450" },
                    { name: "Creative Hair cut", priceNM: "550", priceM: "500" },
                ]
            },
            {
                title: "Women's Hair Cut",
                prices: [
                    { name: "Basic hair cut (U/V/Straight)", priceNM: "450", priceM: "350" },
                    { name: "Multi layers cut", priceNM: "750", priceM: "600" },
                    { name: "Change of style", priceNM: "700", priceM: "650" },
                    { name: "Step hair cut", priceNM: "700", priceM: "600" },
                    { name: "Bob hair cut", priceNM: "800", priceM: "700" },
                    { name: "Square hair cut", priceNM: "850", priceM: "750" },
                    { name: "Long layer hair cut", priceNM: "900", priceM: "850" },
                    { name: "Baby haircut", priceNM: "450", priceM: "350" },
                ]
            },
            {
                title: "Wash & Care",
                prices: [
                    { name: "Normal Hair wash", priceNM: "350", priceM: "300" },
                    { name: "Hair wash + Blowdry", priceNM: "700", priceM: "650" },
                    { name: "Ironing", priceNM: "800", priceM: "750" },
                    { name: "Tongs", priceNM: "800", priceM: "750" },
                ]
            },
            {
                title: "Head Massage",
                prices: [
                    { name: "Pure coconut oil", priceNM: "450", priceM: "400" },
                    { name: "Menthol chiller", priceNM: "550", priceM: "500" },
                    { name: "Almond indulgence", priceNM: "625", priceM: "500" },
                    { name: "Olive bliss", priceNM: "525", priceM: "450" },
                    { name: "Castor oil", priceNM: "615", priceM: "500" },
                    { name: "Aroma oil", priceNM: "650", priceM: "500" },
                ]
            },
            {
                title: "Hair Spa",
                prices: [
                    { name: "Loreal smooth & shine (Upto Shoulder)", priceNM: "1000", priceM: "900" },
                    { name: "Loreal smooth & shine (Below Shoulder)", priceNM: "1100", priceM: "1000" },
                    { name: "Loreal smooth & shine (Upto Waist)", priceNM: "1200", priceM: "1100" },
                    { name: "Gold spa (Upto Shoulder)", priceNM: "1500", priceM: "1400" },
                    { name: "Gold spa (Below Shoulder)", priceNM: "1800", priceM: "1700" },
                    { name: "Gold spa (Upto Waist)", priceNM: "2000", priceM: "1900" },
                    { name: "Colour protection spa (Upto Shoulder)", priceNM: "1700", priceM: "1600" },
                    { name: "Colour protection spa (Below Shoulder)", priceNM: "1900", priceM: "1800" },
                    { name: "Colour protection spa (Upto Waist)", priceNM: "2100", priceM: "2000" },
                    { name: "Keratin protect treatment (Upto Shoulder)", priceNM: "1800", priceM: "1700" },
                    { name: "Keratin protect treatment (Below Shoulder)", priceNM: "1960", priceM: "1860" },
                    { name: "Keratin protect treatment (Upto Waist)", priceNM: "2000", priceM: "1900" },
                    { name: "Moroccon spa (Upto Shoulder)", priceNM: "1900", priceM: "1800" },
                    { name: "Moroccon spa (Below Shoulder)", priceNM: "2100", priceM: "2000" },
                    { name: "Moroccon spa (Upto Waist)", priceNM: "2600", priceM: "2400" },
                ]
            },
            {
                title: "Keratin & Treatments",
                prices: [
                    { name: "G.K Keratin (Upto Shoulder)", priceNM: "5200", priceM: "4600" },
                    { name: "G.K Keratin (Below Shoulder)", priceNM: "6500", priceM: "5800" },
                    { name: "G.K Keratin (Upto Waist)", priceNM: "9500", priceM: "8550" },
                    { name: "K9 Botox Brazilian (Upto Shoulder)", priceNM: "4500", priceM: "4050" },
                    { name: "K9 Botox Brazilian (Below Shoulder)", priceNM: "5500", priceM: "4950" },
                    { name: "K9 Botox Brazilian (Upto Waist)", priceNM: "7000", priceM: "6300" },
                    { name: "Luxliss Keratin (Upto Shoulder)", priceNM: "3800", priceM: "3200" },
                    { name: "Luxliss Keratin (Below Shoulder)", priceNM: "5700", priceM: "5130" },
                    { name: "Luxliss Keratin (Upto Waist)", priceNM: "6450", priceM: "5750" },
                    { name: "Calvca Floractive Keratin (Upto Shoulder)", priceNM: "6200", priceM: "5580" },
                    { name: "Calvca Floractive Keratin (Below Shoulder)", priceNM: "7800", priceM: "7020" },
                    { name: "Calvca Floractive Keratin (Upto Waist)", priceNM: "9999", priceM: "8555" },
                    { name: "Calvca Floractive Botox (Upto Shoulder)", priceNM: "5800", priceM: "5200" },
                    { name: "Calvca Floractive Botox (Below Shoulder)", priceNM: "6999", priceM: "6200" },
                    { name: "Calvca Floractive Botox (Upto Waist)", priceNM: "8999", priceM: "7999" },
                ]
            },
            {
                title: "Scalp Treatment",
                prices: [
                    { name: "Anti-Dandruff (Upto Shoulder)", priceNM: "1170", priceM: "960" },
                    { name: "Anti-Dandruff (Below Shoulder)", priceNM: "1445", priceM: "1210" },
                    { name: "Anti-Dandruff (Upto Waist)", priceNM: "1625", priceM: "1415" },
                    { name: "Anti-Hair fall (Upto Shoulder)", priceNM: "1225", priceM: "990" },
                    { name: "Anti-Hair fall (Below Shoulder)", priceNM: "1415", priceM: "1235" },
                    { name: "Anti-Hair fall (Upto Waist)", priceNM: "1665", priceM: "1460" },
                ]
            },
            {
                title: "Texture Chemical",
                prices: [
                    { name: "Smoothing/Straightening (Upto Shoulder)", priceNM: "4520", priceM: "3500" },
                    { name: "Smoothing/Straightening (Below Shoulder)", priceNM: "5975", priceM: "4999" },
                    { name: "Smoothing/Straightening (Upto Waist)", priceNM: "7215", priceM: "5999" },
                    { name: "Premium Bonding (Upto Shoulder)", priceNM: "7100", priceM: "5999" },
                    { name: "Premium Bonding (Below Shoulder)", priceNM: "8299", priceM: "7525" },
                    { name: "Premium Bonding (Upto Waist)", priceNM: "12060", priceM: "10000" },
                ]
            },
            {
                title: "Hair Colour",
                prices: [
                    { name: "Per streaks", priceNM: "399", priceM: "299" },
                    { name: "Crazy colour streaks", priceNM: "499", priceM: "399" },
                    { name: "Root touch up", priceNM: "1400", priceM: "1200" },
                    { name: "Crown part highlight", priceNM: "2500", priceM: "2300" },
                    { name: "Global colour (Upto Shoulder)", priceNM: "4200", priceM: "3200" },
                    { name: "Global colour (Below Shoulder)", priceNM: "5500", priceM: "4500" },
                    { name: "Global colour (Upto Waist)", priceNM: "6700", priceM: "5500" },
                    { name: "Global highlights (Upto Shoulder)", priceNM: "4700", priceM: "4000" },
                    { name: "Global highlights (Below Shoulder)", priceNM: "5500", priceM: "5000" },
                    { name: "Global highlights (Upto Waist)", priceNM: "6800", priceM: "6000" },
                    { name: "Balayage hair colour (Upto Shoulder)", priceNM: "5200", priceM: "4399" },
                    { name: "Balayage hair colour (Below Shoulder)", priceNM: "6500", priceM: "5899" },
                    { name: "Balayage hair colour (Upto Waist)", priceNM: "7800", priceM: "6789" },
                    { name: "Ombre hair colour (Upto Shoulder)", priceNM: "4700", priceM: "3899" },
                    { name: "Ombre hair colour (Below Shoulder)", priceNM: "5900", priceM: "4999" },
                    { name: "Ombre hair colour (Upto Waist)", priceNM: "6989", priceM: "5676" },
                ]
            },
            {
                title: "Relaxation",
                prices: [
                    { name: "Head massage", priceNM: "550", priceM: "500" },
                    { name: "Foot massage", priceNM: "750", priceM: "650" },
                    { name: "Back massage", priceNM: "700", priceM: "600" },
                    { name: "Shoulder massage", priceNM: "500", priceM: "450" },
                    { name: "Face oil massage (30 mins)", priceNM: "1200", priceM: "1000" },
                ]
            }
        ]
    }
];

const menServices = [
    {
        category: "Hands & Feet",
        items: [
            {
                title: "Men's Pedicure",
                prices: [
                    { name: "Classic", priceNM: "500", priceM: "450" },
                    { name: "Rose", priceNM: "650", priceM: "600" },
                    { name: "Aroma", priceNM: "700", priceM: "650" },
                    { name: "Chocolate", priceNM: "750", priceM: "700" },
                    { name: "Whitening", priceNM: "850", priceM: "800" },
                    { name: "Anti tan", priceNM: "1300", priceM: "1200" },
                    { name: "Bomb", priceNM: "1200", priceM: "1100" },
                    { name: "Alga", priceNM: "1800", priceM: "1600" },
                    { name: "Heal peel", priceNM: "2000", priceM: "1800" },
                ]
            },
            {
                title: "Men's Manicure",
                prices: [
                    { name: "Classic", priceNM: "350", priceM: "300" },
                    { name: "Rose", priceNM: "600", priceM: "550" },
                    { name: "Aroma", priceNM: "650", priceM: "600" },
                    { name: "Chocolate", priceNM: "700", priceM: "650" },
                    { name: "Whitening", priceNM: "800", priceM: "750" },
                    { name: "Anti tan", priceNM: "1200", priceM: "1100" },
                    { name: "Bomb", priceNM: "600", priceM: "550" },
                    { name: "Alga", priceNM: "900", priceM: "850" },
                ]
            }
        ]
    },
    {
        category: "Face & Body",
        items: [
            {
                title: "Men's Brazilian Wax",
                prices: [
                    { name: "Cheeks", priceNM: "80", priceM: "60" },
                    { name: "Nose", priceNM: "80", priceM: "60" },
                    { name: "Ear", priceNM: "100", priceM: "80" },
                    { name: "Chest", priceNM: "120", priceM: "100" },
                ]
            },
            {
                title: "Relaxation",
                prices: [
                    { name: "Hand Massage", priceNM: "450", priceM: "400" },
                    { name: "Back Massage", priceNM: "750", priceM: "700" },
                    { name: "Foot Massage", priceNM: "650", priceM: "550" },
                    { name: "Shoulder Massage", priceNM: "500", priceM: "450" },
                ]
            },
            {
                title: "Head Massage",
                prices: [
                    { name: "Coconut Oil", priceNM: "350", priceM: "300" },
                    { name: "Almond Oil", priceNM: "400", priceM: "350" },
                    { name: "Castor Oil", priceNM: "450", priceM: "400" },
                    { name: "Aroma Oil", priceNM: "400", priceM: "350" },
                    { name: "Menthol Chiller Oil", priceNM: "500", priceM: "450" },
                    { name: "Mix Oil", priceNM: "550", priceM: "500" },
                ]
            }
        ]
    },
    {
        category: "Haircut & Beard",
        items: [
            {
                title: "Hair Wash",
                prices: [
                    { name: "Hair wash", priceNM: "150", priceM: "100" },
                    { name: "Blow dry", priceNM: "200", priceM: "150" },
                    { name: "Ironing", priceNM: "300", priceM: "250" },
                    { name: "Hair Styling", priceNM: "450", priceM: "350" },
                ]
            },
            {
                title: "Haircut",
                prices: [
                    { name: "Basic hair cut", priceNM: "200", priceM: "180" },
                    { name: "Change of style", priceNM: "250", priceM: "200" },
                    { name: "Beard Styling", priceNM: "150", priceM: "120" },
                    { name: "Shave", priceNM: "100", priceM: "100" },
                    { name: "Head Shave", priceNM: "300", priceM: "250" },
                    { name: "Kids haircut", priceNM: "200", priceM: "150" },
                ]
            }
        ]
    },
    {
        category: "Spa & Color",
        items: [
            {
                title: "Hair Spa",
                prices: [
                    { name: "Basic Spa", priceNM: "1000", priceM: "900" },
                    { name: "Gold Spa", priceNM: "1400", priceM: "1299" },
                    { name: "Moroccan Spa", priceNM: "1900", priceM: "1799" },
                ]
            },
            {
                title: "Scalp Treatment",
                prices: [
                    { name: "Anti-Dandruff", priceNM: "1170", priceM: "960" },
                    { name: "Anti-Hair Fall", priceNM: "1225", priceM: "990" },
                ]
            },
            {
                title: "Hair Colour",
                prices: [
                    { name: "Global Colour Ammonia Free Loreal", priceNM: "800", priceM: "700" },
                    { name: "Per Streak", priceNM: "250", priceM: "200" },
                    { name: "Loreal Majirel", priceNM: "700", priceM: "600" },
                    { name: "Beard Colour", priceNM: "400", priceM: "350" },
                    { name: "Mustache Colour", priceNM: "150", priceM: "100" },
                    { name: "Global Highlights", priceNM: "2500", priceM: "2000" },
                    { name: "Crown Part Highlights", priceNM: "2000", priceM: "1700" },
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
                title: "Makeup",
                prices: [
                    { name: "Simple make-up with hairstyle", priceNM: "3500", priceM: "3000" },
                    { name: "Party make up with hair style", priceNM: "4200", priceM: "3799" },
                    { name: "Bridal make up for one sitting", priceNM: "4500", priceM: "4199" },
                    { name: "Normal saree draping", priceNM: "1300", priceM: "1199" },
                    { name: "Hair style", priceNM: "1000", priceM: "899" },
                ]
            },
            {
                title: "Pre-Bridal Packages",
                prices: [
                    { name: "Pre-Bridal Package-I (O2 facial, Full body Waxing, Hair spa, Full body Dtan, Manicure, Pedicure, Eyebrow, Body polish)", priceNM: "8500", priceM: "7860" },
                    { name: "Pre-Bridal Package-II (24 Carat Gold Facial, Hair Spa, Pedicure, Manicure, Full body Waxing, Full body Tan pack, Threading)", priceNM: "8500", priceM: "7860" },
                ]
            }
        ]
    }
];

// Types
interface Price {
    name: string;
    priceNM: string;
    priceM: string;
}

interface ServiceSubItem {
    title: string;
    prices: Price[];
}

interface ServiceCategory {
    category: string;
    items: ServiceSubItem[];
}

interface TransformedItem {
    name: string;
    p1?: string;
    p2?: string;
    isHeader?: boolean;
}

interface TransformedCategory {
    category: string;
    items: TransformedItem[];
}

const transformData = (originalData: ServiceCategory[]): TransformedCategory[] => {
    const transformed: TransformedCategory[] = [];
    originalData.forEach(serviceCategory => {
        const newItems: TransformedItem[] = [];
        serviceCategory.items.forEach(serviceItem => {
            // Add Title Header
            newItems.push({
                name: serviceItem.title,
                isHeader: true
            });

            serviceItem.prices.forEach(priceDetail => {
                newItems.push({
                    name: priceDetail.name,
                    p1: priceDetail.priceNM,
                    p2: priceDetail.priceM,
                });
            });
        });
        transformed.push({
            category: serviceCategory.category,
            items: newItems,
        });
    });
    return transformed;
};

// Transform data outside component to avoid recalculation
const allData = {
    "Women": transformData(womenServices),
    "Men": transformData(menServices),
    "Packages": transformData(packages),
};


// --- MEMOIZED ROW COMPONENT (Prevents unnecessary re-renders of list items) ---
const ServiceRow = memo(({ item }: { item: TransformedItem }) => {
    if (item.isHeader) {
        return <h3 className="text-2xl font-playfair font-bold text-white/90 w-full text-left pt-8 pb-3">{item.name}</h3>;
    }

    return (
        <div className="group relative flex flex-col md:flex-row justify-between items-center py-6 border-b border-white/5 hover:border-white/10 transition-colors">
            {/* Hover Glow Background - Hardware Accelerated */}
            <div className="absolute inset-x-[-2rem] inset-y-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 scale-95 group-hover:scale-100 rounded-xl will-change-transform" />

            {/* Name */}
            <span className="text-lg md:text-xl font-medium text-white/80 group-hover:text-white transition-colors w-full md:w-auto text-left pl-2">
                {item.name}
            </span>

            {/* Prices */}
            <div className="flex items-center gap-6 md:gap-12 mt-2 md:mt-0 w-full md:w-auto justify-end pr-4">
                <span className="text-white font-bold text-lg md:text-xl tabular-nums">
                    ₹{item.p1}
                </span>
                <div className="relative flex items-center min-w-[80px] justify-end">
                    <span className="text-xl md:text-2xl font-bold text-yellow-400 drop-shadow-[0_0_15px_rgba(251,191,36,0.3)] tabular-nums">
                        ₹{item.p2}
                    </span>
                    <Crown className="w-3 h-3 text-yellow-400 absolute -right-6 top-1.5 opacity-100" />
                </div>
            </div>
        </div>
    );
});
ServiceRow.displayName = "ServiceRow";


export default function ServicesPage() {
    const [activeTab, setActiveTab] = useState<keyof typeof allData>("Women");
    const [selectedCategory, setSelectedCategory] = useState(0);

    // Memoize the current list to prevent derivation on every render
    const { categories, activeItems, currentCategoryIndex } = useMemo(() => {
        const cats = allData[activeTab];
        const idx = Math.min(selectedCategory, cats.length - 1);
        return {
            categories: cats,
            currentCategoryIndex: idx,
            activeItems: cats[idx].items
        };
    }, [activeTab, selectedCategory]);

    // Simplified Variants for better performance
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.03 } // Faster stagger
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 5 }, // Reduced movement distance
        show: { opacity: 1, y: 0, transition: { duration: 0.2 } }
    };

    return (
        <main className="min-h-screen text-white relative flex flex-col font-sans selection:bg-primary/50">
            <AuroraBackground />
            <Navbar />

            {/* HEADER */}
            <div className="pt-40 pb-12 text-center relative z-10 px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-8xl font-playfair font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-6"
                >
                    SERVICES
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-primary/90 uppercase tracking-[0.4em] text-xs md:text-sm font-semibold"
                >
                    The Premium Collection
                </motion.p>
            </div>

            {/* MAIN INTERFACE */}
            <div className="flex-1 container mx-auto px-4 md:px-8 pb-24 relative z-10 flex flex-col lg:flex-row gap-12 items-start">

                {/* LEFT CONTROL PANEL */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/4 flex flex-col gap-10 lg:sticky lg:top-32"
                >
                    {/* Gender Tabs */}
                    <div className="flex p-1.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 shadow-lg">
                        {(Object.keys(allData) as Array<keyof typeof allData>).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => { setActiveTab(tab); setSelectedCategory(0); }}
                                className={`flex-1 py-3 text-xs md:text-sm font-bold uppercase tracking-widest rounded-full transition-all duration-300 ${activeTab === tab ? "bg-white text-black shadow-lg" : "text-white/60 hover:text-white"}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Category List */}
                    <div className="flex flex-col pl-2 border-l border-white/10">
                        {categories.map((cat, idx) => (
                            <button
                                key={`${activeTab}-${idx}`}
                                onClick={() => setSelectedCategory(idx)}
                                className="group relative text-left pl-6 py-4 transition-all duration-200"
                            >
                                <div className={`absolute left-[-1px] top-0 bottom-0 w-[3px] transition-all duration-300 ${currentCategoryIndex === idx ? "bg-primary scale-y-100" : "bg-transparent scale-y-0 group-hover:bg-white/20 group-hover:scale-y-50"}`} />
                                <span className={`text-lg md:text-xl font-playfair font-medium block transition-all duration-200 ${currentCategoryIndex === idx ? "text-white scale-105 origin-left" : "text-white/40 group-hover:text-white/80"}`}>
                                    {cat.category}
                                </span>
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* RIGHT CONTENT PANEL */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="w-full lg:w-3/4"
                >
                    {/* Reduced backdrop blur from 3xl to xl for significant scroll performance boost */}
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">

                        {/* Header Area */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-white/10 pb-8 gap-4">
                            <div>
                                <motion.h2
                                    key={categories[currentCategoryIndex].category}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-4xl md:text-5xl font-playfair font-bold text-white mb-3"
                                >
                                    {categories[currentCategoryIndex].category}
                                </motion.h2>
                                <p className="text-white/40 text-xs tracking-[0.2em] uppercase font-medium">
                                    Exclusive Treatments
                                </p>
                            </div>

                            <div className="hidden md:flex gap-16 pr-8">
                                <span className="text-xs font-bold tracking-widest uppercase text-white/30">Standard</span>
                                <span className="text-xs font-bold tracking-widest uppercase text-primary drop-shadow-sm">Member</span>
                            </div>
                        </div>

                        {/* Service List */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`${activeTab}-${currentCategoryIndex}`}
                                variants={containerVariants}
                                initial="hidden"
                                animate="show"
                                exit={{ opacity: 0, transition: { duration: 0.1 } }}
                                className="flex flex-col"
                            >
                                {activeItems.map((item, i) => (
                                    <motion.div key={i} variants={itemVariants}>
                                        <ServiceRow item={item} />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>

                    </div>
                </motion.div>
            </div>

            <Footer />
        </main>
    );
}