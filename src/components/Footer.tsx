import Link from "next/link";
import { Instagram, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#0a0412]  border-t border-white/5 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-3xl font-playfair font-bold text-white tracking-widest flex items-center gap-2">
                            <img src="/logo.png" alt="Studio 8" className="h-24 w-24 rounded-full bg-white/10" />
                        </h3>
                        <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                            Experience the art of luxury grooming. Unisex salon services tailored for your unique style and elegance.
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-playfair font-bold text-white">Contact Us</h4>
                        <div className="flex items-center space-x-3 text-white/70">
                            <Phone className="w-4 h-4 text-primary" />
                            <span>+91 91495 10872</span>
                        </div>
                        <div className="flex items-start space-x-3 text-white/70">
                            <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" />
                            <div className="space-y-4">
                                <a href="https://maps.app.goo.gl/X7AKXWByhUm9FHES6" target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition-colors">
                                    Shop 13-14, Sri Swastik Plaza (SSP), 3, Hobli, Kodigehalli, Krishnarajapuram, Bengaluru, Karnataka 560067
                                </a>
                                <a href="https://maps.app.goo.gl/6eYob5WFF8ktggkL8" target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition-colors">
                                    Shabari mansion, 1/1, 2nd Cross Rd, Belathur, Kadugodi, Bengaluru, Karnataka 560067
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-playfair font-bold text-white">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-white/60">
                            <li><Link href="/services" className="hover:text-primary transition-colors">Services Menu</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Book Appointment</Link></li>
                        </ul>
                        <div className="flex space-x-4 pt-4">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all cursor-pointer">
                                <Instagram className="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
                    <p>&copy; {new Date().getFullYear()} Studio 8. All rights reserved.</p>
                    <a
                        href="https://lsoptimaize.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors mt-2 md:mt-0"
                    >
                        Designed by LS OptimAIze
                    </a>
                </div>
            </div>
        </footer>
    );
}
