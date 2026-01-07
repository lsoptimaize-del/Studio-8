import Link from "next/link";
import { Instagram, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#0a0412]  border-t border-white/5 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
                    {/* Brand */}
                    <div className="space-y-4 flex flex-col items-center">
                        <h3 className="text-3xl font-playfair font-bold text-white tracking-widest flex items-center justify-center gap-2">
                            <img src="/logo.png" alt="Studio 8" className="h-24 w-24 rounded-full bg-white/10" />
                        </h3>
                        <p className="text-white/60 text-sm leading-relaxed max-w-xs text-center">
                            Experience the art of luxury grooming. Unisex salon services tailored for your unique style and elegance.
                        </p>
                    </div>

                    {/* Links - Moved up for mobile priority */}
                    <div className="space-y-4 order-2 md:order-none flex flex-col items-center">
                        <h4 className="text-lg font-playfair font-bold text-white">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-white/60 flex flex-col items-center">
                            <li><Link href="/services" className="hover:text-primary transition-colors">Services Menu</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Book Appointment</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4 order-3 md:order-none flex flex-col items-center">
                        <h4 className="text-lg font-playfair font-bold text-white">Contact Us</h4>
                        <div className="flex items-center justify-center space-x-3 text-white/70">
                            <Phone className="w-4 h-4 text-primary" />
                            <span>+91 96869 47430</span>
                        </div>
                        <div className="flex flex-col items-center space-y-3 text-white/70">
                            <div className="flex items-center space-x-2">
                                <MapPin className="w-4 h-4 text-primary shrink-0" />
                                <span>Locations</span>
                            </div>
                            <div className="space-y-4 text-center">
                                <a href="https://maps.app.goo.gl/X7AKXWByhUm9FHES6" target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition-colors max-w-xs mx-auto">
                                    Shop 13-14, Sri Swastik Plaza (SSP), 3, Hobli, Kodigehalli, Krishnarajapuram, Bengaluru, Karnataka 560067
                                </a>
                                <a href="https://maps.app.goo.gl/6eYob5WFF8ktggkL8" target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition-colors max-w-xs mx-auto">
                                    Shabari mansion, 1/1, 2nd Cross Rd, Belathur, Kadugodi, Bengaluru, Karnataka 560067
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
                    <p>&copy; {new Date().getFullYear()} Studio 8. All rights reserved.</p>
                    <div className="flex items-center gap-2 mt-4 md:mt-0">

                        <a
                            href="https://www.lsoptimaize.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition-opacity inline-block"
                        >
                            <img src="/lso-logo.png" alt="LS OptimAIze" className="h-25 w-auto" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
