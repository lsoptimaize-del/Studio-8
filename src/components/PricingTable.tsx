"use client";

import { motion } from "framer-motion";

interface PricingItem {
    name: string;
    priceNM: string;
    priceM: string;
}

interface PricingTableProps {
    title: string;
    services: PricingItem[];
}

export default function PricingTable({ title, services }: PricingTableProps) {
    return (
        <div className="w-full h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(255,193,7,0.15)] group/card">
            <div className="bg-white/5 px-6 py-4 flex justify-between items-center border-b border-white/5">
                <h3 className="text-xl font-playfair font-bold text-white group-hover/card:text-primary transition-colors">{title}</h3>
                <div className="flex items-center space-x-6 text-xs uppercase tracking-widest font-medium text-white/40">
                    <span>Standard</span>
                    <span className="text-primary font-bold drop-shadow-sm">Member</span>
                </div>
            </div>
            <div>
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center px-6 py-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors group"
                    >
                        <span className="text-white/90 font-medium group-hover:text-white transition-colors">{service.name}</span>
                        <div className="flex items-center space-x-8">
                            <span className="text-white/60 text-sm">{service.priceNM.startsWith('₹') ? service.priceNM : `₹${service.priceNM}`}</span>
                            <span className="text-primary font-extrabold text-base min-w-[60px] text-right drop-shadow-[0_2px_10px_rgba(251,191,36,0.2)]">{service.priceM.startsWith('₹') ? service.priceM : `₹${service.priceM}`}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
