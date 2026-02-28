'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 max-w-[1440px] flex items-center justify-between">
        <Link href="/" className="relative z-10 flex items-center gap-3">
          <Image src={scrolled ? "/logo.png" : "/logo-white.png"} alt="Suraj Wood" width={180} height={50} className={`transition-all duration-300 ${scrolled ? 'scale-95' : 'scale-100'} object-contain h-auto`} priority />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="relative group">
            <button className={`flex items-center gap-1 text-sm font-medium tracking-wide uppercase transition-colors ${scrolled ? 'text-gray-900 hover:text-primary' : 'text-gray-900 md:text-white hover:text-primary'}`}>
              Collections <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-white rounded-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] p-4 min-w-[240px] border border-gray-100 flex flex-col">
                <Link href="/products/acrylux" className="px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg transition-colors font-medium">ACRYLUX <span className="text-gray-400 font-normal text-xs block mt-1">Satin Finish</span></Link>
                <Link href="/products/acrysilk" className="px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg transition-colors font-medium">ACRYSILK <span className="text-gray-400 font-normal text-xs block mt-1">Soft Satin</span></Link>
                <Link href="/products/acrymatte" className="px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg transition-colors font-medium">ACRYMATTE <span className="text-gray-400 font-normal text-xs block mt-1">Anti-Fingerprint</span></Link>
                <Link href="/products/acryglass" className="px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg transition-colors font-medium">ACRYGLASS <span className="text-gray-400 font-normal text-xs block mt-1">High Gloss</span></Link>
              </div>
            </div>
          </div>
          <Link href="/applications/modular-kitchens" className={`text-sm font-medium tracking-wide uppercase transition-colors ${scrolled ? 'text-gray-900 hover:text-primary' : 'text-gray-900 md:text-white hover:text-primary'}`}>Applications</Link>
          <Link href="/specifications" className={`text-sm font-medium tracking-wide uppercase transition-colors ${scrolled ? 'text-gray-900 hover:text-primary' : 'text-gray-900 md:text-white hover:text-primary'}`}>Open Specs</Link>

          <Link href="/contact" className="ml-4 btn btn-primary py-3 px-6 text-sm">
            Request Sample
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button className={`md:hidden relative z-10 p-2 -mr-2 transition-colors ${scrolled || isOpen ? 'text-gray-900' : 'text-white'}`} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '100vh' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute top-0 left-0 w-full bg-white flex flex-col pt-24 px-6 overflow-hidden md:hidden shadow-2xl"
            >
              <div className="flex flex-col gap-6 text-xl font-medium">
                <div className="pb-4 border-b border-gray-100">
                  <span className="text-sm font-semibold tracking-widest text-primary mb-4 block">COLLECTIONS</span>
                  <div className="flex flex-col gap-3 pl-4">
                    <Link href="/products/acrylux" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-black transition-colors">Acrylux</Link>
                    <Link href="/products/acrysilk" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-black transition-colors">Acrysilk</Link>
                    <Link href="/products/acrymatte" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-black transition-colors">Acrymatte</Link>
                    <Link href="/products/acryglass" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-black transition-colors">Acryglass</Link>
                  </div>
                </div>
                <Link href="/applications" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Applications</Link>
                <Link href="/specifications" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Open Specifications</Link>
                <Link href="/contact" onClick={() => setIsOpen(false)} className="mt-8 btn btn-primary justify-center w-full">Request Sample Kit</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
