'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight, Download, Layers, Droplet, Shield, Clock } from 'lucide-react';
import './page.css';

export default function Home() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <>
      {/* 1. Hero Section */}
      <section className="hero">
        <Image src="/hero_kitchen.png" alt="Premium Modular Kitchen with Suraj Wood Acrylic" fill className="hero-bg" priority />
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-container">
            <motion.div variants={fadeUpVariant} className="flex items-center gap-sm mb-md">
              <span className="h-px w-8 bg-primary block"></span>
              <span className="caption text-white tracking-widest uppercase">The Architect&apos;s Standard</span>
            </motion.div>

            <motion.h1 variants={fadeUpVariant} className="hero-headline text-white text-h1">
              Specify with Certainty.<br />
              <span className="text-primary">Design without Limits.</span>
            </motion.h1>

            <motion.p variants={fadeUpVariant} className="hero-subheadline text-gray-200">
              Suraj Wood engineers the highest-grade acrylic panels for modern interiors. We reject closed ecosystems. Access our complete library of technical specifications, CAD files, and material data instantly—no gates, no forms.
            </motion.p>

            <motion.div variants={fadeUpVariant} className="hero-ctas mt-xl">
              <Link href="/products/acrylux" className="btn btn-primary">
                Explore Collections <ArrowRight size={18} className="ml-2" />
              </Link>
              <a href="/specifications" className="btn btn-ghost text-white">
                Download Open Spec Sheet (PDF) <Download size={16} className="ml-2" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        <div className="trust-bar bg-black border-t border-gray-800">
          <div className="container trust-bar-track py-sm">
            <span className="text-gray flex items-center gap-2"><Shield size={16} className="text-primary" /> ISO 9001 Certified</span>
            <span className="text-gray flex items-center gap-2"><Clock size={16} className="text-primary" /> 15+ Years Excellence</span>
            <span className="text-gray flex items-center gap-2"><Layers size={16} className="text-primary" /> Structural Integrity</span>
            <span className="text-gray flex items-center gap-2"><Droplet size={16} className="text-primary" /> Moisture Resistant Core</span>
          </div>
        </div>
      </section>

      {/* 2. Philosophy & Engineering */}
      <section className="section bg-white pb-3xl">
        <div className="container diff-grid mt-2xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="diff-text pr-xl">
            <motion.span variants={fadeUpVariant} className="caption text-primary font-semibold tracking-widest">ENGINEERING PHILOSOPHY</motion.span>
            <motion.h2 variants={fadeUpVariant} className="diff-heading text-h2 mt-sm">Built for the Demands of Modern Architecture.</motion.h2>
            <motion.p variants={fadeUpVariant} className="body-large text-gray-300 mt-md">
              We believe great design requires great data. That&apos;s why Suraj Wood operates on an Open Specification model. While the industry standardizes hiding technical data behind sales calls, we publish every tolerance, load-bearing metric, and finish composition publicly.
            </motion.p>
            <motion.p variants={fadeUpVariant} className="body-large text-gray-300 mt-sm">
              True premium quality has nothing to hide.
            </motion.p>

            <motion.div variants={fadeUpVariant} className="mt-xl">
              <Link href="/contact" className="btn btn-secondary group">
                Read Our Manifesto <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="stats-grid">
            <div className="stat-card bg-gray-100 hover:bg-white transition-colors border border-transparent hover:border-gray-200">
              <h3 className="stat-num">5</h3>
              <p className="stat-label">Engineered Finishes</p>
            </div>
            <div className="stat-card bg-gray-100 hover:bg-white transition-colors border border-transparent hover:border-gray-200">
              <h3 className="stat-num">50+</h3>
              <p className="stat-label">Curated Colorways</p>
            </div>
            <div className="stat-card bg-gray-100 hover:bg-white transition-colors border border-transparent hover:border-gray-200">
              <h3 className="stat-num">0</h3>
              <p className="stat-label">Gated Specifications</p>
            </div>
            <div className="stat-card bg-gray-100 hover:bg-white transition-colors border border-transparent hover:border-gray-200">
              <h3 className="stat-num">1.5<span className="text-lg">mm</span></h3>
              <p className="stat-label">Premium Thickness Standard</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Product Collections */}
      <section className="section bg-black text-white collections-section pt-4xl pb-4xl">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="flex flex-col md:flex-row md:justify-between md:items-end mb-2xl max-w-container">
            <div>
              <span className="caption text-primary font-semibold tracking-widest">MATERIAL LIBRARY</span>
              <h2 className="section-title text-white text-h2 mt-sm mb-0">Five Finishes.<br />Infinite Possibilities.</h2>
            </div>
            <p className="body-large text-gray-300 max-w-sm mt-md md:mt-0">
              Discover the perfect surface logic for your next interior project. Engineered for scratch resistance, color fastness, and tactile brilliance.
            </p>
          </motion.div>

          <div className="collections-scroll scroll-smooth hide-scrollbar mt-3xl">
            <Link href="/products/acrylux" className="col-card card bg-gray-900 border-gray-800 hover:border-primary group transition-all block">
              <div className="col-img-wrapper overflow-hidden">
                <Image src="/matte_kitchen.png" alt="ACRYLUX Satin Finish" fill className="col-img group-hover:scale-105 transition-transform duration-700" />
                <span className="col-tag">SATIN FINISH</span>
              </div>
              <h3 className="col-title mt-lg text-white group-hover:text-primary transition-colors">ACRYLUX</h3>
              <p className="body-large text-sm text-gray-300 mt-sm line-clamp-2">Smooth, refined, and versatile. Understated elegance for modern interiors.</p>
              <div className="mt-md pt-md border-t border-gray-800">
                <p className="small text-gray-400 font-mono tracking-wide">1.0mm - 3.0mm | 18mm MDF Core</p>
              </div>
            </Link>

            <Link href="/products/acrysilk" className="col-card card bg-gray-900 border-gray-800 hover:border-primary group transition-all block">
              <div className="col-img-wrapper bg-black overflow-hidden">
                <Image src="/satin_wardrobe.png" alt="ACRYSILK Soft Satin" fill className="col-img group-hover:scale-105 transition-transform duration-700" />
                <span className="col-tag">SOFT SATIN</span>
              </div>
              <h3 className="col-title mt-lg text-white group-hover:text-primary transition-colors">ACRYSILK</h3>
              <p className="body-large text-sm text-gray-300 mt-sm line-clamp-2">Silky appearance with subtle sheen. Perfect for minimalist, soft spaces.</p>
              <div className="mt-md pt-md border-t border-gray-800">
                <p className="small text-gray-400 font-mono tracking-wide">1.0mm - 2.0mm | Anti-Microbial</p>
              </div>
            </Link>

            <Link href="/products/acrymatte" className="col-card card bg-gray-900 border-gray-800 hover:border-primary group transition-all block">
              <div className="col-img-wrapper bg-black overflow-hidden">
                <Image src="/matte_kitchen.png" alt="ACRYMATTE Finish" fill className="col-img group-hover:scale-105 transition-transform duration-700" />
                <span className="col-tag">AFP MATTE</span>
              </div>
              <h3 className="col-title mt-lg text-white group-hover:text-primary transition-colors">ACRYMATTE</h3>
              <p className="body-large text-sm text-gray-300 mt-sm line-clamp-2">Non-reflective sophistication. Advanced anti-fingerprint tech for heavy use.</p>
              <div className="mt-md pt-md border-t border-gray-800">
                <p className="small text-gray-400 font-mono tracking-wide">1.5mm - 3.0mm | Anti-Fingerprint</p>
              </div>
            </Link>

            <Link href="/products/acryglass" className="col-card card bg-gray-900 border-gray-800 hover:border-primary group transition-all block">
              <div className="col-img-wrapper bg-black overflow-hidden">
                <Image src="/hero_kitchen.png" alt="ACRYGLASS Finish" fill className="col-img group-hover:scale-105 transition-transform duration-700" />
                <span className="col-tag">HIGH GLOSS</span>
              </div>
              <h3 className="col-title mt-lg text-white group-hover:text-primary transition-colors">ACRYGLASS</h3>
              <p className="body-large text-sm text-gray-300 mt-sm line-clamp-2">90+ Gloss level mirror-like reflectivity. Visual depth and brilliant luxury.</p>
              <div className="mt-md pt-md border-t border-gray-800">
                <p className="small text-gray-400 font-mono tracking-wide">1.0mm - 2.0mm | Glass-Effect</p>
              </div>
            </Link>
          </div>
          <div className="scroll-indicator small text-gray mt-xl">SWIPE TO EXPLORE ⟶</div>
        </div>
      </section>

      {/* 4. Open Spec Library */}
      <section className="section bg-gray-100">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-container mx-auto">
            <motion.span variants={fadeUpVariant} className="caption text-primary font-semibold tracking-widest text-center block">THE OPEN SOURCE INITIATIVE</motion.span>
            <motion.h2 variants={fadeUpVariant} className="section-title text-h2 text-center mt-sm mb-lg">Access Data Instantly.</motion.h2>
            <motion.p variants={fadeUpVariant} className="body-large text-gray-400 max-w-lg mx-auto text-center mb-3xl">
              Architects shouldn&apos;t have to schedule a sales call to do their job. We&apos;ve open-sourced our entire technical library. Download what you need, when you need it.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="features-grid">
            <motion.div variants={fadeUpVariant} className="feature-item spec-card bg-white border border-gray-200">
              <div className="feature-icon mb-lg text-primary bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">📋</div>
              <h3 className="text-black mb-sm text-xl font-semibold">Technical Data Sheets</h3>
              <p className="body-large text-sm text-gray-300 mb-2">Core density, structural tolerances, thermal resistance parameters, and ISO lab test results.</p>
              <Link href="/specifications" className="text-primary font-medium text-sm mt-4 inline-flex items-center hover:underline">Get PDFs <ArrowRight size={14} className="ml-1" /></Link>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="feature-item spec-card bg-white border border-gray-200">
              <div className="feature-icon mb-lg text-primary bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">🎨</div>
              <h3 className="text-black mb-sm text-xl font-semibold">Color Intel</h3>
              <p className="body-large text-sm text-gray-300 mb-2">High-fidelity HEX/RGB master lists. Calibrated print-ready swatches for accurate render representations.</p>
              <Link href="/specifications" className="text-primary font-medium text-sm mt-4 inline-flex items-center hover:underline">Get Swatches <ArrowRight size={14} className="ml-1" /></Link>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="feature-item spec-card bg-white border border-gray-200">
              <div className="feature-icon mb-lg text-primary bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">📐</div>
              <h3 className="text-black mb-sm text-xl font-semibold">CAD & Textures</h3>
              <p className="body-large text-sm text-gray-300 mb-2">Seamless 4K diffuse, roughness, and normal maps for V-Ray, Corona, and Unreal Engine integrations.</p>
              <Link href="/specifications" className="text-primary font-medium text-sm mt-4 inline-flex items-center hover:underline">Get 3D Assets <ArrowRight size={14} className="ml-1" /></Link>
            </motion.div>
          </motion.div>

          <div className="mt-3xl flex flex-col items-center">
            <Link href="/specifications" className="btn btn-primary shadow-xl">Enter The Open Spec Library <ArrowRight size={18} className="ml-2" /></Link>
          </div>
        </div>
      </section>

      {/* 5. Applications */}
      <section className="section bg-white pt-4xl pb-4xl">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-2xl flex flex-col md:flex-row justify-between items-end">
            <div>
              <span className="caption text-primary font-semibold tracking-widest block mb-sm">SPATIAL DEPLOYMENT</span>
              <h2 className="section-title text-h2 mb-0">Engineered for<br />Every Context.</h2>
            </div>
            <Link href="/contact" className="hidden md:inline-flex btn btn-ghost mt-md pb-1 border-b-2 border-primary">Discuss a Custom Project</Link>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="apps-masonry">
            <motion.div variants={fadeUpVariant} className="app-card relative group">
              <Image src="/hero_kitchen.png" alt="Modular Kitchens" fill className="app-img group-hover:scale-110 transition-transform duration-1000" />
              <div className="app-overlay">
                <h3 className="text-white text-2xl font-semibold mb-2 transform group-hover:-translate-y-2 transition-transform">Gastronomic Spaces</h3>
                <p className="body-large text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-500">Impenetrable, heat-resistant, easy-clean core surfaces built for intense culinary environments.</p>
              </div>
            </motion.div>
            <motion.div variants={fadeUpVariant} className="app-card relative group">
              <Image src="/satin_wardrobe.png" alt="Wardrobes" fill className="app-img group-hover:scale-110 transition-transform duration-1000" />
              <div className="app-overlay">
                <h3 className="text-white text-2xl font-semibold mb-2 transform group-hover:-translate-y-2 transition-transform">Bespoke Storage</h3>
                <p className="body-large text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-500">Premium scratch-resistant finishes that elevate residential dressing rooms and commercial retail closets.</p>
              </div>
            </motion.div>
            <motion.div variants={fadeUpVariant} className="app-card relative group">
              <Image src="/matte_kitchen.png" alt="Living Spaces" fill className="app-img group-hover:scale-110 transition-transform duration-1000" />
              <div className="app-overlay">
                <h3 className="text-white text-2xl font-semibold mb-2 transform group-hover:-translate-y-2 transition-transform">Living Architecture</h3>
                <p className="body-large text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-500">Seamless integration into media walls, monolithic furniture pieces, and modern paneled focal points.</p>
              </div>
            </motion.div>
            <motion.div variants={fadeUpVariant} className="app-card relative group">
              <Image src="/satin_wardrobe.png" alt="Commercial" fill className="app-img group-hover:scale-110 transition-transform duration-1000" />
              <div className="app-overlay">
                <h3 className="text-white text-2xl font-semibold mb-2 transform group-hover:-translate-y-2 transition-transform">Commercial Sectors</h3>
                <p className="body-large text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-500">High-traffic durability meeting high-end aesthetics for hospitality desks and corporate workspaces.</p>
              </div>
            </motion.div>
          </motion.div>

          <Link href="/contact" className="md:hidden btn btn-secondary w-full mt-xl flex justify-center border-primary text-primary">Discuss a Custom Project</Link>
        </div>
      </section>

      {/* 9. CTA Banner */}
      <section className="cta-banner py-4xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="container cta-banner-content relative z-10">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="text-white text-h2 mb-md font-playfair tracking-tight">Ready to Specify Suraj Wood?</motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="body-large text-white/90 mb-xl max-w-2xl text-center">
            Elevate your next architectural project. Request our premium sample kit, download open specifications, or speak directly to a materials engineer today. No obligations.
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="flex-stack-md text-center">
            <Link href="/contact" className="btn btn-black bg-black text-white hover:bg-white hover:text-black border-2 border-black hover:border-white shadow-2xl hover:shadow-primary/30">
              Request Free Sample Kit
            </Link>
            <p className="small text-white/80 mt-md font-medium tracking-wide uppercase">Dedicated Support: +91-98XXX-XXXXX</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
