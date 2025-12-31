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
        <div className="w-full bg-white/5 backdrop-blur-sm border border-white/5 rounded-xl overflow-hidden mb-8">
            <div className="bg-white/10 px-6 py-4 flex justify-between items-center border-b border-white/5">
                <h3 className="text-xl font-playfair font-bold text-white">{title}</h3>
                <div className="flex items-center space-x-6 text-xs uppercase tracking-widest font-medium text-white/50">
                    <span>Standard</span>
                    <span className="text-primary font-bold">Member</span>
                </div>
            </div>
            <div>
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center px-6 py-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors group"
                    >
                        <span className="text-white/80 group-hover:text-white transition-colors">{service.name}</span>
                        <div className="flex items-center space-x-8">
                            <span className="text-white/50 text-sm">{service.priceNM.startsWith('₹') ? service.priceNM : `₹${service.priceNM}`}</span>
                            <span className="text-primary font-bold text-base min-w-[60px] text-right">{service.priceM.startsWith('₹') ? service.priceM : `₹${service.priceM}`}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
