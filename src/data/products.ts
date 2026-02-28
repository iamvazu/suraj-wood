export type Product = {
    id: string;
    slug: string;
    name: string;
    tagline: string;
    description: string;
    finish_type: string;
    thickness: string;
    core: string;
    features: string[];
    applications: string[];
    colors: { name: string; hex: string }[];
    image: string;
};

export const products: Product[] = [
    {
        id: "acrylux",
        slug: "acrylux",
        name: "ACRYLUX",
        tagline: "Smooth, refined, and versatile.",
        description: "The industry standard for premium satin-finish acrylic panels. Acrylux provides an understated elegance ideal for modern interiors, offering a smooth touch and subtle reflection that diffuses light beautifully across the surface.",
        finish_type: "Satin Finish",
        thickness: "1.0mm - 3.0mm",
        core: "18mm MDF / HDHMR",
        features: ["Scratch Resistant", "UV Stable", "Easy to Clean", "Edge-banding Compatible"],
        applications: ["Modular Kitchens", "Wardrobes", "Bathroom Vanities", "Living Room Units"],
        colors: [
            { name: "Frost White", hex: "#F8F9FA" },
            { name: "Cashmere", hex: "#E5E0D8" },
            { name: "Graphite", hex: "#4A4A4A" },
            { name: "Navy Blue", hex: "#1C2833" },
            { name: "Emerald", hex: "#0E6655" }
        ],
        image: "/matte_kitchen.png"
    },
    {
        id: "acrysilk",
        slug: "acrysilk",
        name: "ACRYSILK",
        tagline: "Ultra-smooth, silky appearance.",
        description: "Engineered for spaces that demand a touch of soft luxury. Acrysilk features a microscopic surface texture that feels like silk to the touch while providing an incredibly durable, low-reflectivity finish.",
        finish_type: "Soft Satin",
        thickness: "1.0mm - 2.0mm",
        core: "18mm Premium MDF",
        features: ["Silky Smooth Texture", "Micro-Scratch Resistant", "Anti-Bacterial Surface", "Color Fastness"],
        applications: ["Premium Wardrobes", "Bedroom Furniture", "Boutique Retail", "Office Partitions"],
        colors: [
            { name: "Silk White", hex: "#FDFAF6" },
            { name: "Latte", hex: "#D7CCC8" },
            { name: "Sage", hex: "#81C784" },
            { name: "Dusty Rose", hex: "#F48FB1" }
        ],
        image: "/satin_wardrobe.png"
    },
    {
        id: "acrymatte",
        slug: "acrymatte",
        name: "ACRYMATTE",
        tagline: "Non-reflective sophistication with power.",
        description: "The ultimate anti-fingerprint surface. Acrymatte absorbs light rather than reflecting it, creating deep, rich colors that stay clean. Ideal for high-traffic areas and touch-heavy surfaces in residential and commercial settings.",
        finish_type: "Anti-Fingerprint Matte",
        thickness: "1.5mm - 3.0mm",
        core: "18mm HDHMR (Water Resistant)",
        features: ["Anti-Fingerprint (AFP)", "Thermal Healing of Micro-Scratches", "Zero Glare", "Impact Resistant"],
        applications: ["High-Traffic Kitchens", "Tabletops", "Commercial Counters", "Institutional Furniture"],
        colors: [
            { name: "Pure Matte White", hex: "#FFFFFF" },
            { name: "Matte Black", hex: "#121212" },
            { name: "Charcoal", hex: "#37474F" },
            { name: "Midnight Blue", hex: "#1A237E" },
            { name: "Terracotta", hex: "#BF360C" }
        ],
        image: "/matte_kitchen.png"
    },
    {
        id: "acryglass",
        slug: "acryglass",
        name: "ACRYGLASS",
        tagline: "Mirror-like reflectivity. Glass effect luxury.",
        description: "Get the breathtaking luxury of back-painted glass without the weight, fragility, or fabrication difficulties. Acryglass offers a seamless, high-gloss surface that creates an illusion of depth and expands the visual space of any room.",
        finish_type: "High Gloss / Glass Effect",
        thickness: "1.0mm - 2.0mm",
        core: "18mm MDF / Birch Plywood",
        features: ["90+ Gloss Level", "Mirror-like Finish", "Shatterproof (vs Glass)", "Seamless Edges"],
        applications: ["Luxury Kitchens", "Feature Walls", "Bar Fronts", "Retail Displays"],
        colors: [
            { name: "Glass White", hex: "#F4F6F7" },
            { name: "Piano Black", hex: "#000000" },
            { name: "Ruby Red", hex: "#B71C1C" },
            { name: "Champagne", hex: "#F5B041" }
        ],
        image: "/hero_kitchen.png"
    },
    {
        id: "acryglass-matte",
        slug: "acryglass-matte",
        name: "ACRYGLASS MATTE",
        tagline: "Solid strength meets refined matte glass aesthetic.",
        description: "The architectural choice for muted luxury. Combining the robust durability of high-end acrylic with the sophisticated, frosted aesthetic of acid-etched matte glass. It diffuses ambient light to create a soft, glowing presence in modern designs.",
        finish_type: "Frosted Matte Glass Effect",
        thickness: "1.5mm - 3.0mm",
        core: "18mm HDHMR",
        features: ["Acid-Etched Glass Look", "Diffused Light Reflection", "Smudge Resistant", "High Impact Strength"],
        applications: ["Architectural Elements", "Wardrobe Shutters", "Partition Walls", "Bathroom Modules"],
        colors: [
            { name: "Frosted Glacier", hex: "#E8F8F5" },
            { name: "Smoked Gray", hex: "#5D6D7E" },
            { name: "Bronze Matte", hex: "#A04000" },
            { name: "Olive Frosted", hex: "#556B2F" }
        ],
        image: "/satin_wardrobe.png"
    }
];

export function getProductBySlug(slug: string): Product | undefined {
    return products.find(p => p.slug === slug);
}
