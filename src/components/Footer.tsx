import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer bg-black pt-4xl pb-lg relative overflow-hidden border-t border-gray-900">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_top_right,rgba(230,57,70,0.05)_0%,transparent_60%)] pointer-events-none"></div>

            <div className="container max-w-container mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-xl mb-3xl">
                    <div className="lg:col-span-4 pr-xl">
                        <Link href="/" className="inline-block mb-lg">
                            <Image src="/logo-white.png" alt="Suraj Wood" width={160} height={40} className="object-contain h-auto opacity-90 hover:opacity-100 transition-opacity" />
                        </Link>
                        <p className="body-large text-gray-300 mb-xl max-w-sm">
                            The Architect&apos;s Standard in premium acrylic surface materials. We believe in open specifications and transparent engineering.
                        </p>

                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">In</a>
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">Ig</a>
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">Tw</a>
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">P</a>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-white text-sm font-semibold tracking-widest uppercase mb-lg">Material Logic</h4>
                        <ul className="flex flex-col gap-4">
                            <li><Link href="/products/acrylux" className="text-gray-400 hover:text-primary transition-colors text-sm font-medium">ACRYLUX Satin</Link></li>
                            <li><Link href="/products/acrysilk" className="text-gray-400 hover:text-primary transition-colors text-sm font-medium">ACRYSILK Soft</Link></li>
                            <li><Link href="/products/acrymatte" className="text-gray-400 hover:text-primary transition-colors text-sm font-medium">ACRYMATTE AFP</Link></li>
                            <li><Link href="/products/acryglass" className="text-gray-400 hover:text-primary transition-colors text-sm font-medium">ACRYGLASS Gloss</Link></li>
                            <li><Link href="/products/acryglass-matte" className="text-gray-400 hover:text-primary transition-colors text-sm font-medium">ACRYGLASS Frosted</Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-white text-sm font-semibold tracking-widest uppercase mb-lg">Open Source</h4>
                        <ul className="flex flex-col gap-4">
                            <li><Link href="/specifications" className="text-gray-400 hover:text-primary transition-colors text-sm font-medium flex justify-between items-center group">Spec Library <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /></Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm font-medium flex justify-between items-center group">CAD Assets <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /></Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm font-medium flex justify-between items-center group">Test Reports <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /></Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm font-medium flex justify-between items-center group">Material Science <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /></Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-4">
                        <h4 className="text-white text-sm font-semibold tracking-widest uppercase mb-lg">Direct Contact</h4>
                        <div className="flex flex-col gap-6">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 w-8 h-8 rounded bg-gray-900 flex items-center justify-center shrink-0">
                                    <MapPin size={14} className="text-primary" />
                                </div>
                                <div>
                                    <h5 className="text-white text-sm font-medium mb-1">Corporate Headquarters</h5>
                                    <p className="text-gray-400 text-sm leading-relaxed">Suraj Wood Products Pvt. Ltd.<br />B1/36, Mian Wali Nagar, Paschim Vihar<br />New Delhi - 110087</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="mt-1 w-8 h-8 rounded bg-gray-900 flex items-center justify-center shrink-0">
                                    <Phone size={14} className="text-primary" />
                                </div>
                                <div>
                                    <h5 className="text-white text-sm font-medium mb-1">Architectural Support</h5>
                                    <p className="text-gray-400 text-sm hover:text-primary cursor-pointer transition-colors">+91 98XXX XXXXX</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-xl border-t border-gray-900 flex flex-col md:flex-row items-center justify-between gap-md">
                    <p className="small text-gray-500 font-mono tracking-tight text-center md:text-left">
                        © {new Date().getFullYear()} SURAJ WOOD PRODUCTS PVT. LTD. ALL RIGHTS RESERVED. CIN: U20290DL2009PTC194763
                    </p>
                    <div className="flex gap-lg">
                        <Link href="#" className="text-xs text-gray-500 hover:text-white uppercase tracking-wider font-semibold transition-colors">Privacy Stack</Link>
                        <Link href="#" className="text-xs text-gray-500 hover:text-white uppercase tracking-wider font-semibold transition-colors">Terms of Spec</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
