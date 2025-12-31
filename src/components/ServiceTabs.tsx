"use client";

import { motion } from "framer-motion";

export default function ServiceTabs({
    activeTab,
    setActiveTab
}: {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}) {
    const tabs = ["Women", "Men", "Packages"];

    return (
        <div className="flex justify-center mb-12">
            <div className="flex bg-white/5 p-1 rounded-full border border-white/10">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className="relative px-8 py-2 rounded-full text-sm uppercase tracking-wide font-medium transition-colors z-10 focus:outline-none"
                    >
                        {activeTab === tab && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-primary rounded-full"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                        <span className={`relative z-10 ${activeTab === tab ? "text-black font-bold" : "text-white/60 hover:text-white"}`}>
                            {tab}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}
