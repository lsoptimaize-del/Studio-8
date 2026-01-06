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
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6 flex items-center justify-center gap-3">
              Why Choose <img src="/logo.png" alt="Studio 8" className="h-12 w-12 md:h-20 md:w-20 rounded-full bg-white/10 inline-block" />
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">Experience a new standard of beauty and grooming where luxury meets expertise.</p>
          </SectionReveal>

          {[
            { title: "Unisex Services", desc: "Expert grooming for both men and women in a comfortable environment.", icon: Scissors, img: "/why-unisex.png" },
            { title: "Premium Products", desc: "We exclusively use Loreal, O3+, and Rica for the best results.", icon: Diamond, img: "/why-products.png" },
            { title: "Member Benefits", desc: "Exclusive pricing and priority booking for our members.", icon: Crown, img: "/why-members.png" },
          ].map((item, i) => (
            <SectionReveal key={i} delay={i * 0.2}>
              <div className="relative h-96 rounded-2xl overflow-hidden group border border-white/10">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30 opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 flex flex-col items-center justify-center h-full text-center">
                  <div className="w-20 h-20 mb-6 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-300 shadow-xl">
                    <item.icon className="w-8 h-8 text-primary group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-white/80 leading-relaxed max-w-xs">{item.desc}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Featured Services */}
      <section className="min-h-screen flex flex-col justify-center py-12 bg-black/30 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <SectionReveal className="text-center mb-8">
            <span className="text-primary text-sm font-bold uppercase tracking-widest mb-2 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white">Featured Treatments</h2>
          </SectionReveal>

          <SectionReveal>
            <FeaturedCarousel />
          </SectionReveal>
        </div>
      </section>

      {/* Membership CTA */}
      {/* Membership CTA */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black z-0" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          <SectionReveal className="relative bg-[#0F0F0F] border border-white/5 rounded-[2rem] p-8 md:p-12 overflow-hidden group">
            {/* Glow Effect */}
            <div className="absolute -top-[200px] -right-[200px] w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full pointer-events-none group-hover:bg-primary/30 transition-colors duration-1000" />

            <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
              {/* Text Side */}
              <div className="w-full md:w-1/2 text-center md:text-left z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                  <Crown className="w-3 h-3" />
                  <span>Elite Access</span>
                </div>

                <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6 leading-tight">
                  Unlock the <span className="bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] bg-clip-text text-transparent italic">Gold Standard</span> of Beauty.
                </h2>

                <p className="text-white/60 text-lg mb-8 leading-relaxed">
                  Join our exclusive membership program to enjoy priority booking, members-only pricing, and complimentary luxury treatments.
                </p>

                <div className="flex flex-col sm:flex-row items-center cursor-pointer gap-6">
                  <a href="https://wa.me/919686947430" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest rounded-lg hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                    Apply for Membership
                  </a>
                  <div className="flex items-center gap-2 text-white/50 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Limited slots available</span>
                  </div>
                </div>
              </div>

              {/* Visual Side - "The Card" */}
              <div className="w-full md:w-1/2 flex justify-center md:justify-end relative perspective-1000">
                <div className="relative w-full max-w-sm aspect-[1.586/1] rounded-2xl bg-gradient-to-br from-neutral-900 via-[#D4AF37]/10 to-black border border-[#D4AF37]/50 shadow-2xl p-6 flex flex-col justify-between overflow-hidden group-hover:scale-105 transition-transform duration-700">
                  {/* Card Shine */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 via-white/0 to-[#D4AF37]/20 opacity-50" />
                  <div className="absolute -inset-full bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent rotate-45 transform translate-x-[-150%] md:group-hover:translate-x-[150%] transition-transform duration-1000" />

                  {/* Card Content */}
                  <div className="flex justify-between items-start relative z-10">
                    <div className="space-y-1">
                      <p className="text-xs text-[#D4AF37]/80 uppercase tracking-[0.2em]">Membership</p>
                      <h3 className="text-2xl font-playfair font-bold text-[#D4AF37] italic">Gold Tier</h3>
                    </div>
                    <img src="/logo.png" alt="Logo" className="w-10 h-10 opacity-80" />
                  </div>

                  <div className="relative z-10">
                    <div className="flex gap-3 mb-4">
                      <div className="w-12 h-8 rounded bg-[#D4AF37]/20 border border-[#D4AF37]/30" />
                      <div className="w-4 h-8 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/20" />
                    </div>
                    <p className="font-mono text-[#D4AF37]/80 tracking-widest text-sm sm:text-base">0000  8888  XXXX  XXXX</p>
                  </div>
                </div>

                {/* Decorative Elements around card */}
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#D4AF37]/20 blur-3xl rounded-full" />
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
