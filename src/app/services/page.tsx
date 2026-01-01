"use client";

import { useState, useMemo, memo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Crown } from "lucide-react";

// --- OPTIMIZED BACKGROUND (Memoized & GPU Accelerated) ---
const AuroraBackground = memo(function AuroraBackground() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-black transform-gpu">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-black to-purple-950/30" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.2),rgba(0,0,0,0))]" />

            {/* Blob 1 */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    rotate: [0, 90, 0]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-[30%] -left-[10%] w-[70vw] h-[70vw] bg-purple-900/20 rounded-full blur-[100px] will-change-transform"
            />

            {/* Blob 2 */}
            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.4, 0.2],
                    x: [0, 100, 0]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute top-[20%] -right-[10%] w-[60vw] h-[60vw] bg-indigo-900/20 rounded-full blur-[100px] will-change-transform"
            />

            {/* Blob 3 */}
            <motion.div
                animate={{
                    opacity: [0.1, 0.3, 0.1],
                    y: [0, -50, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 left-[20%] w-[80vw] h-[40vh] bg-gradient-to-t from-primary/10 to-transparent blur-[80px] will-change-transform"
            />

            {/* Noise Texture - Static */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
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
            <div className="flex items-center gap-16 mt-2 md:mt-0 w-full md:w-auto justify-between md:justify-end pr-4">
                <span className="text-white/40 text-sm md:text-base font-medium tabular-nums">
                    ₹{item.p1}
                </span>
                <div className="relative flex items-center min-w-[80px] justify-end">
                    <span className="text-xl md:text-2xl font-bold text-primary drop-shadow-[0_0_15px_rgba(251,191,36,0.3)] tabular-nums group-hover:text-amber-300 transition-colors">
                        ₹{item.p2}
                    </span>
                    <Crown className="w-3 h-3 text-primary absolute -right-6 top-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0" />
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
        <main className="min-h-screen bg-black text-white relative flex flex-col font-sans selection:bg-primary/50 overflow-x-hidden">
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