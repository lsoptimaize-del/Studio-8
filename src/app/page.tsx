import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import { SectionReveal } from "@/components/MotionWrapper";
import { Scissors, Sparkles, Diamond, Crown, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      {/* Why Choose Us */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <SectionReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">Why Choose <span className="text-primary">Studio 8</span></h2>
            <p className="text-white/60 max-w-2xl mx-auto">Experience a new standard of beauty and grooming where luxury meets expertise.</p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Unisex Services", desc: "Expert grooming for both men and women in a comfortable environment.", icon: Scissors },
              { title: "Premium Products", desc: "We exclusively use Loreal, O3+, and Rica for the best results.", icon: Diamond },
              { title: "Member Benefits", desc: "Exclusive pricing and priority booking for our members.", icon: Crown },
            ].map((item, i) => (
              <SectionReveal key={i} delay={i * 0.2}>
                <div className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all hover:bg-white/10 group text-center h-full">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-white/60">{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-black/30 relative">
        <div className="container mx-auto px-6">
          <SectionReveal className="text-center mb-12">
            <span className="text-primary text-sm font-bold uppercase tracking-widest mb-2 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white">Featured Treatments</h2>
          </SectionReveal>

          <SectionReveal>
            <FeaturedCarousel />
          </SectionReveal>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 z-0" />
        <div className="container mx-auto px-6 relative z-10">
          <SectionReveal className="bg-gradient-to-r from-primary/20 to-purple-900/20 rounded-3xl p-12 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">Become a Member Today</h2>
              <p className="text-white/70 max-w-lg mb-6">Unlock exclusive discounts on all services, priority booking, and special offers with our membership program.</p>
              <ul className="space-y-2 text-white/60 text-sm mb-6 inline-block text-left">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary mr-2" /> Save on every visit</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary mr-2" /> Premium product access</li>
              </ul>
            </div>
            <a href="/contact" className="px-8 py-4 bg-primary text-black font-bold uppercase tracking-wide rounded hover:bg-white hover:text-black transition-all shadow-lg shadow-primary/20 whitespace-nowrap">
              Join Membership
            </a>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
