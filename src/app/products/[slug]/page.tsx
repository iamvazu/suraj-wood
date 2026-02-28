import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getProductBySlug } from '@/data/products';
import { Check, ShieldCheck, Download, ArrowRight } from 'lucide-react';
import './product.css';

type Props = {
    params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: Props) {
    const { slug } = await params;
    const product = getProductBySlug(slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="pt-24 bg-white">
            <section className="product-hero relative pt-3xl pb-4xl rounded-b-[40px] shadow-sm">
                <div className="container hero-content mx-auto max-w-[1200px] px-6">
                    <span className="caption text-primary font-bold uppercase tracking-[0.2em] mb-4 block">Engineered Material</span>
                    <h1 className="product-title text-white">{product.name}</h1>
                    <p className="product-tagline text-gray-300 max-w-2xl">{product.tagline}</p>
                    <div className="hero-ctas mt-8 flex flex-wrap gap-4">
                        <Link href="/specifications" className="btn btn-primary shadow-lg shadow-primary/30 flex items-center gap-2">
                            <Download size={18} /> Download Specifications
                        </Link>
                        <Link href="/contact" className="btn btn-ghost hover:bg-white/10 text-white flex items-center gap-2">
                            Request Physical Sample <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="section bg-white pb-3xl">
                <div className="container mx-auto px-6 product-specs-grid max-w-[1200px]">
                    <div className="main-image-wrapper">
                        <Image src={product.image} alt={product.name} fill />
                        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-semibold tracking-wider text-black shadow-sm flex items-center gap-2">
                            <ShieldCheck size={14} className="text-primary" /> 10-Year Warranty
                        </div>
                    </div>

                    <div className="details-card border border-gray-100 p-8 md:p-12">
                        <h2 className="mb-6 font-playfair text-3xl md:text-4xl text-black">The Architectural Standard in {product.finish_type}</h2>
                        <p className="body-large text-gray-600 leading-relaxed font-light">{product.description}</p>

                        <div className="details-grid mt-10">
                            <div className="detail-item">
                                <h4>Finish Type</h4>
                                <p>{product.finish_type}</p>
                            </div>
                            <div className="detail-item">
                                <h4>Thickness Options</h4>
                                <p>{product.thickness}</p>
                            </div>
                            <div className="detail-item">
                                <h4>Core Material</h4>
                                <p>{product.core}</p>
                            </div>
                            <div className="detail-item">
                                <h4>Data Sheet</h4>
                                <p className="text-primary hover:underline cursor-pointer">Available</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="features-section bg-[#FDFDFD] border-t border-gray-100 pb-4xl pt-4xl">
                <div className="container mx-auto px-6 max-w-[1200px]">
                    <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
                        <div>
                            <h3 className="mb-10 text-2xl font-playfair text-black border-b border-gray-200 pb-4">Material Characteristics</h3>
                            <ul className="features-list">
                                {product.features.map((feature, i) => (
                                    <li key={i}>
                                        <Check size={20} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-10 text-2xl font-playfair text-black border-b border-gray-200 pb-4">Recommended Applications</h3>
                            <ul className="applications-list">
                                {product.applications.map((app, i) => (
                                    <li key={i}>
                                        <div className="w-2 h-2 rounded-full bg-primary shrink-0 opacity-80" />
                                        <span className="text-gray-800">{app}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="color-palette-section border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-[1200px]">
                    <span className="caption text-primary font-bold tracking-[0.2em] text-center block uppercase">Curated Palette</span>
                    <h2 className="text-center mt-3 mb-16 text-4xl font-playfair text-black">Signature Finishes</h2>

                    <div className="color-grid">
                        {product.colors.map((color, i) => (
                            <div key={i} className="color-swatch-wrapper group">
                                <div
                                    className="color-swatch ring-1 ring-black/5"
                                    style={{ backgroundColor: color.hex }}
                                    title={`${color.name} - ${color.hex}`}
                                ></div>
                                <div className="mt-4 text-center">
                                    <p className="color-name group-hover:text-primary transition-colors">{color.name}</p>
                                    <p className="color-hex">{color.hex}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA section at the bottom */}
            <section className="section bg-black text-center text-white relative overflow-hidden py-24">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(230,57,70,0.1)_0%,transparent_70%)] pointer-events-none"></div>
                <div className="container max-w-[800px] mx-auto px-6 relative z-10">
                    <h2 className="mb-6 font-playfair text-4xl tracking-tight text-white">Specify {product.name} in your next project</h2>
                    <p className="body-large text-gray-400 mb-10 max-w-2xl mx-auto">
                        No forms, no gates. Get instant access to architectural CADs, 3D textures, and request priority physical samples directly from our engineering team.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/specifications" className="btn btn-primary px-8 py-4 shadow-[0_4px_20px_0_rgba(230,57,70,0.4)]">
                            Open Specification Library
                        </Link>
                        <Link href="/contact" className="btn btn-ghost border border-white/20 hover:border-white hover:bg-white hover:text-black hover:shadow-xl transition-all duration-300 px-8 py-4">
                            Contact Architectural Sales
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
