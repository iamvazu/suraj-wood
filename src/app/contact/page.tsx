'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import './contact.css';

export default function Contact() {
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
            <section className="contact-hero pb-4xl bg-black pt-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_top_right,rgba(230,57,70,0.08)_0%,transparent_60%)] pointer-events-none z-0"></div>
                <div className="container contact-wrapper mx-auto max-w-container relative z-10">
                    {/* Left Column: Info */}
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="contact-info pr-xl">
                        <div className="contact-header mb-2xl">
                            <motion.span variants={fadeUpVariant} className="caption text-primary font-semibold uppercase tracking-widest mb-md block">CONNECT WITH ENGINEERING</motion.span>
                            <motion.h1 variants={fadeUpVariant} className="text-h1 text-white mb-md font-playfair tracking-tight">Let&apos;s Build Something Beautiful.</motion.h1>
                            <motion.p variants={fadeUpVariant} className="body-large text-gray-300 max-w-xl">
                                Whether you require deep open specifications, a precise sample kit, or consultation on custom dimensional runs, our material engineers are directly accessible. No intermediaries.
                            </motion.p>
                        </div>

                        <motion.div variants={staggerContainer} className="flex flex-col gap-xl mt-xl">
                            <motion.div variants={fadeUpVariant} className="flex gap-lg items-start">
                                <div className="p-3 bg-gray-900 rounded-lg text-primary shrink-0 mt-1">
                                    <MapPin size={24} />
                                </div>
                                <div className="info-block">
                                    <h3 className="text-white text-xl font-medium mb-2">Corporate Headquarters & Labs</h3>
                                    <p className="text-gray-400 leading-relaxed">Suraj Wood Tower, Industrial Estate Phase II<br />New Delhi, NCR, India - 110020</p>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeUpVariant} className="flex gap-lg items-start">
                                <div className="p-3 bg-gray-900 rounded-lg text-primary shrink-0 mt-1">
                                    <Phone size={24} />
                                </div>
                                <div className="info-block">
                                    <h3 className="text-white text-xl font-medium mb-2">Direct Engineering Lines</h3>
                                    <a href="tel:+919876543210" className="text-gray-400 hover:text-primary transition-colors block mb-1">+91 98765 43210 (Architectural Sales)</a>
                                    <a href="tel:+919876543211" className="text-gray-400 hover:text-primary transition-colors block">+91 98765 43211 (Technical Support)</a>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeUpVariant} className="flex gap-lg items-start">
                                <div className="p-3 bg-gray-900 rounded-lg text-primary shrink-0 mt-1">
                                    <Mail size={24} />
                                </div>
                                <div className="info-block">
                                    <h3 className="text-white text-xl font-medium mb-2">Email Logistics</h3>
                                    <a href="mailto:specs@surajwood.com" className="text-gray-400 hover:text-primary transition-colors block mb-1">specs@surajwood.com (Instant Spec Engine)</a>
                                    <a href="mailto:hello@surajwood.com" className="text-gray-400 hover:text-primary transition-colors block">hello@surajwood.com (General Enquiries)</a>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div variants={fadeUpVariant} className="social-links mt-2xl flex gap-4">
                            <a href="#" className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all" aria-label="LinkedIn">in</a>
                            <a href="#" className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all" aria-label="Instagram">ig</a>
                            <a href="#" className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all" aria-label="Twitter">tw</a>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="contact-form-wrapper mt-3xl lg:mt-0">
                        <div className="contact-form-card bg-white/5 backdrop-blur-xl border border-white/10 p-2xl rounded-3xl shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[80px] rounded-full"></div>
                            <h2 className="mb-xl text-white font-playfair text-3xl tracking-tight relative z-10">Request Sample Kit</h2>
                            <form className="form-grid relative z-10">
                                <div className="form-group flex flex-col gap-2">
                                    <label htmlFor="firstName" className="text-xs uppercase tracking-widest text-gray-400 font-medium">First Name *</label>
                                    <input type="text" id="firstName" className="form-input bg-transparent border-b border-gray-700 text-white pb-3 focus:border-primary placeholder:text-gray-600 rounded-none h-auto px-0" placeholder="John" required />
                                </div>
                                <div className="form-group flex flex-col gap-2">
                                    <label htmlFor="lastName" className="text-xs uppercase tracking-widest text-gray-400 font-medium">Last Name *</label>
                                    <input type="text" id="lastName" className="form-input bg-transparent border-b border-gray-700 text-white pb-3 focus:border-primary placeholder:text-gray-600 rounded-none h-auto px-0" placeholder="Doe" required />
                                </div>
                                <div className="form-group full-width flex flex-col gap-2 mt-sm">
                                    <label htmlFor="email" className="text-xs uppercase tracking-widest text-gray-400 font-medium">Work Email *</label>
                                    <input type="email" id="email" className="form-input bg-transparent border-b border-gray-700 text-white pb-3 focus:border-primary placeholder:text-gray-600 rounded-none h-auto px-0" placeholder="john.doe@architecture.com" required />
                                </div>
                                <div className="form-group full-width flex flex-col gap-2 mt-sm">
                                    <label htmlFor="company" className="text-xs uppercase tracking-widest text-gray-400 font-medium">Company / Firm</label>
                                    <input type="text" id="company" className="form-input bg-transparent border-b border-gray-700 text-white pb-3 focus:border-primary placeholder:text-gray-600 rounded-none h-auto px-0" placeholder="Studio Architecture Ltd" />
                                </div>
                                <div className="form-group full-width flex flex-col gap-2 mt-sm">
                                    <label htmlFor="interest" className="text-xs uppercase tracking-widest text-gray-400 font-medium">Primary Material Interest</label>
                                    <select id="interest" className="form-input bg-transparent border-b border-gray-700 text-white pb-3 focus:border-primary cursor-pointer rounded-none h-auto px-0" defaultValue="">
                                        <option value="" disabled className="text-gray-900">Select Primary Interest</option>
                                        <option value="acrylux" className="text-gray-900">ACRYLUX (Satin Finish)</option>
                                        <option value="acrysilk" className="text-gray-900">ACRYSILK (Soft Satin)</option>
                                        <option value="acrymatte" className="text-gray-900">ACRYMATTE (Matte Finish)</option>
                                        <option value="acryglass" className="text-gray-900">ACRYGLASS (High Gloss)</option>
                                        <option value="acryglass-matte" className="text-gray-900">ACRYGLASS MATTE (Matte Glass)</option>
                                        <option value="general" className="text-gray-900">General Consultation</option>
                                    </select>
                                </div>
                                <div className="form-group full-width flex flex-col gap-2 mt-sm">
                                    <label htmlFor="message" className="text-xs uppercase tracking-widest text-gray-400 font-medium">Project Context</label>
                                    <textarea id="message" className="form-textarea bg-transparent border-b border-gray-700 text-white pb-3 focus:border-primary placeholder:text-gray-600 rounded-none px-0 mt-2 min-h-[100px] resize-y" placeholder="Briefly describe your project scale or specific requirements..." required></textarea>
                                </div>
                                <div className="form-group full-width mt-xl">
                                    <button type="submit" className="w-full btn btn-primary flex justify-center items-center py-4 text-base shadow-[0_4px_14px_0_rgba(230,57,70,0.39)]">
                                        Send Request <ArrowRight size={18} className="ml-2" />
                                    </button>
                                    <p className="caption text-gray-500 mt-md text-center">Engineering SLA: We respond within 12 business hours.</p>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Visual Infrastructure */}
            <section className="bg-black text-white pb-4xl">
                <div className="container max-w-container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-md opacity-80 hover:opacity-100 transition-opacity duration-500">
                        <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden group">
                            <Image src="/hero_kitchen.png" alt="Office Interior" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <div className="absolute bottom-6 left-6">
                                <span className="caption text-primary tracking-widest">FACILITIES</span>
                                <h3 className="text-white text-xl font-medium mt-1">Global Design Center</h3>
                            </div>
                        </div>
                        <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden group">
                            <Image src="/matte_kitchen.png" alt="Manufacturing" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <div className="absolute bottom-6 left-6">
                                <span className="caption text-primary tracking-widest">INFRASTRUCTURE</span>
                                <h3 className="text-white text-xl font-medium mt-1">Manufacturing Hub</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
