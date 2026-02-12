// ORDAE Brand Data
const brandsData = {
    brands: [
        {
            id: "luxe-locks",
            name: "Luxe Locks",
            category: "Wigs",
            tagline: "Premium human hair wigs, ethically sourced",
            mission: "Luxe Locks is committed to providing high-quality, ethically sourced human hair wigs that empower individuals to express their authentic selves. We believe beauty shouldn't come at the cost of exploitation.",
            description: "Premium human hair wigs with transparent sourcing and ethical practices",
            sourcing: {
                summary: "We source 100% virgin human hair from consenting donors in India and Southeast Asia. Every strand is ethically obtained through fair-trade partnerships with local communities.",
                details: [
                    "Direct partnerships with 15 ethical hair collection centers",
                    "Fair compensation to all donors (20% above market rate)",
                    "Full traceability from donor to final product",
                    "Zero chemical processing in sourcing phase"
                ]
            },
            process: [
                {
                    step: "Ethical Collection",
                    description: "Hair collected from consenting donors through fair-trade partnerships",
                    icon: "🤝"
                },
                {
                    step: "Quality Inspection",
                    description: "Each bundle inspected for texture, strength, and cuticle alignment",
                    icon: "🔍"
                },
                {
                    step: "Gentle Processing",
                    description: "Minimal processing using plant-based products only",
                    icon: "🌿"
                },
                {
                    step: "Custom Construction",
                    description: "Hand-sewn caps with breathable lace for maximum comfort",
                    icon: "✨"
                }
            ],
            bestSellers: [
                { name: "Brazilian Body Wave 20\"", price: "$289" },
                { name: "Malaysian Straight 16\"", price: "$249" },
                { name: "Indian Curly 18\"", price: "$299" },
                { name: "Vietnamese Silky 22\"", price: "$329" }
            ],
            reviews: [
                {
                    name: "Sarah M.",
                    rating: 5,
                    text: "Finally found a wig company I can trust! The quality is incredible and I love knowing exactly where my hair comes from. Worth every penny."
                },
                {
                    name: "Jessica T.",
                    rating: 5,
                    text: "The transparency is what sold me. I've tried many brands but Luxe Locks is the only one that shows you the entire sourcing journey. The wig itself is stunning."
                },
                {
                    name: "Tamara K.",
                    rating: 5,
                    text: "Beautiful, natural-looking, and ethically made. I can wear this with confidence knowing no one was exploited."
                }
            ],
            badges: ["Verified by COVENA", "Sourcing Transparency", "Review Integrity"],
            rating: 4.9,
            reviewCount: 347,
            priceRange: "$249-$329",
            beginnerFriendly: true,
            shippingSpeed: "3-5 days",
            verifiedLevel: "Gold"
        },
        {
            id: "crown-collective",
            name: "Crown Collective",
            category: "Wigs",
            tagline: "Affordable luxury wigs for every occasion",
            mission: "Crown Collective democratizes access to high-quality wigs without compromising on ethics or quality. We believe everyone deserves to feel beautiful.",
            description: "Budget-friendly synthetic and human hair blends with verified quality standards",
            sourcing: {
                summary: "We use a blend of ethically sourced human hair and premium synthetic fibers. Our hybrid approach allows us to offer accessible pricing while maintaining high quality standards.",
                details: [
                    "Partnerships with 8 certified hair suppliers in Asia",
                    "Synthetic fibers from eco-friendly manufacturing plants",
                    "Regular third-party audits of all sourcing facilities",
                    "Transparent origin labeling on every product"
                ]
            },
            process: [
                {
                    step: "Material Selection",
                    description: "Careful selection of human hair and premium heat-resistant fibers",
                    icon: "🎯"
                },
                {
                    step: "Blending Technology",
                    description: "Proprietary blending process for natural movement and shine",
                    icon: "⚡"
                },
                {
                    step: "Cap Engineering",
                    description: "Lightweight, adjustable caps designed for all-day comfort",
                    icon: "🏗️"
                },
                {
                    step: "Quality Testing",
                    description: "Every unit tested for durability, tangling, and heat resistance",
                    icon: "✅"
                }
            ],
            bestSellers: [
                { name: "Silk Touch Bob 12\"", price: "$119" },
                { name: "Natural Wave 16\"", price: "$149" },
                { name: "Pixie Perfect 8\"", price: "$99" },
                { name: "Midnight Straight 20\"", price: "$169" }
            ],
            reviews: [
                {
                    name: "Maria G.",
                    rating: 5,
                    text: "Amazing quality for the price! I was skeptical about synthetic blends but this looks so natural. Perfect for someone just starting with wigs."
                },
                {
                    name: "Linda R.",
                    rating: 4,
                    text: "Great starter wig. Easy to style and maintain. I appreciate that they're transparent about what's synthetic vs. real hair."
                },
                {
                    name: "Keisha B.",
                    rating: 5,
                    text: "I own three Crown Collective wigs now. They're affordable, look great, and I love that they're upfront about their sourcing practices."
                }
            ],
            badges: ["Verified by COVENA", "Sourcing Transparency", "Review Integrity"],
            rating: 4.7,
            reviewCount: 892,
            priceRange: "$99-$169",
            beginnerFriendly: true,
            shippingSpeed: "2-4 days",
            verifiedLevel: "Silver"
        },
        {
            id: "artisan-tresses",
            name: "Artisan Tresses",
            category: "Wigs",
            tagline: "Custom handcrafted wigs made with love",
            mission: "Artisan Tresses elevates wig-making to an art form. Each piece is custom-crafted by skilled artisans who pour their expertise and care into every strand.",
            description: "Luxury custom wigs handcrafted by master artisans with premium materials",
            sourcing: {
                summary: "We work exclusively with a small network of master hair collectors in Eastern Europe and South America. Every collection is documented, and donors receive above-market compensation.",
                details: [
                    "Exclusive partnerships with 5 master collectors",
                    "Single-donor hair bundles for ultimate consistency",
                    "Fair-trade certification for all sourcing",
                    "Complete documentation from collection to customer"
                ]
            },
            process: [
                {
                    step: "Consultation",
                    description: "Personal consultation to understand your needs and preferences",
                    icon: "💬"
                },
                {
                    step: "Hair Selection",
                    description: "Carefully curated hair selection from our premium inventory",
                    icon: "🎨"
                },
                {
                    step: "Artisan Crafting",
                    description: "Hand-ventilated by master artisans over 40+ hours",
                    icon: "👐"
                },
                {
                    step: "Final Fitting",
                    description: "Custom fitting and styling to ensure perfect results",
                    icon: "💎"
                }
            ],
            bestSellers: [
                { name: "Bespoke Lace Front 18\"", price: "$899" },
                { name: "Silk Top Custom 16\"", price: "$799" },
                { name: "Hand-Tied Volume 20\"", price: "$1,099" },
                { name: "Luxury Lace Full Cap 22\"", price: "$1,299" }
            ],
            reviews: [
                {
                    name: "Victoria L.",
                    rating: 5,
                    text: "This is not just a wig, it's a work of art. The craftsmanship is extraordinary. You can feel the care that went into every single strand."
                },
                {
                    name: "Sophia Chen",
                    rating: 5,
                    text: "Worth every cent. I've never felt more confident. The consultation process was thorough and the final result exceeded my expectations."
                },
                {
                    name: "Natasha K.",
                    rating: 5,
                    text: "Unparalleled quality. This is my third Artisan Tresses piece and I'll never go anywhere else. They truly care about their craft."
                }
            ],
            badges: ["Verified by COVENA", "Sourcing Transparency", "Review Integrity"],
            rating: 5.0,
            reviewCount: 156,
            priceRange: "$799-$1,299",
            beginnerFriendly: false,
            shippingSpeed: "10-14 days",
            verifiedLevel: "Platinum"
        },
        {
            id: "flutter-lux",
            name: "Flutter Lux",
            category: "Lashes",
            tagline: "Luxury lashes with ethical mink alternatives",
            mission: "Flutter Lux proves that luxury and ethics can coexist. We create stunning lashes using cruelty-free materials that perform better than traditional mink.",
            description: "Premium faux-mink lashes with verified cruelty-free certification",
            sourcing: {
                summary: "Our lashes are made from advanced synthetic fibers that mimic the look and feel of mink without any animal products. All materials are sourced from certified cruelty-free manufacturers.",
                details: [
                    "100% vegan synthetic fiber technology",
                    "PETA-certified cruelty-free manufacturing",
                    "Eco-friendly packaging from recycled materials",
                    "Carbon-neutral shipping program"
                ]
            },
            process: [
                {
                    step: "Fiber Engineering",
                    description: "Advanced synthetic fibers designed for softness and durability",
                    icon: "🔬"
                },
                {
                    step: "Hand Assembly",
                    description: "Each lash strip carefully assembled by trained technicians",
                    icon: "✋"
                },
                {
                    step: "Quality Control",
                    description: "Multi-point inspection for curl retention and band flexibility",
                    icon: "🔍"
                },
                {
                    step: "Sustainable Packaging",
                    description: "Packaged in biodegradable cases with recycled paper boxes",
                    icon: "📦"
                }
            ],
            bestSellers: [
                { name: "Natural Wisp Collection", price: "$24" },
                { name: "Dramatic Volume Set", price: "$28" },
                { name: "Everyday Luxe Pack (3)", price: "$65" },
                { name: "Glam Night Out", price: "$26" }
            ],
            reviews: [
                {
                    name: "Emma W.",
                    rating: 5,
                    text: "These are better than any mink lashes I've tried! So soft, lightweight, and they last forever. Plus, no guilt about animals."
                },
                {
                    name: "Priya S.",
                    rating: 5,
                    text: "I was skeptical about faux lashes but these are incredible. They look so natural and I love that they're cruelty-free."
                },
                {
                    name: "Ashley M.",
                    rating: 4,
                    text: "Great quality and I appreciate the ethical approach. They're a bit pricier than drugstore options but worth it for the quality and peace of mind."
                }
            ],
            badges: ["Verified by COVENA", "Sourcing Transparency", "Review Integrity"],
            rating: 4.8,
            reviewCount: 1243,
            priceRange: "$24-$65",
            beginnerFriendly: true,
            shippingSpeed: "1-3 days",
            verifiedLevel: "Gold"
        },
        {
            id: "wink-studio",
            name: "Wink Studio",
            category: "Lashes",
            tagline: "Professional lash extensions for at-home application",
            mission: "Wink Studio brings salon-quality lash extensions to your home. We empower everyone to achieve professional results through innovative design and clear guidance.",
            description: "DIY lash extension kits with salon-quality results and beginner-friendly application",
            sourcing: {
                summary: "We manufacture our lashes in South Korea using premium PBT fibers. Our facility is certified for fair labor practices and environmental sustainability.",
                details: [
                    "Premium Korean PBT fiber technology",
                    "Fair Labor Association certified facility",
                    "ISO 14001 environmental certification",
                    "Regular worker satisfaction audits"
                ]
            },
            process: [
                {
                    step: "Premium Fiber Selection",
                    description: "Medical-grade PBT fibers for safety and longevity",
                    icon: "💎"
                },
                {
                    step: "Precision Manufacturing",
                    description: "Automated precision cutting for consistent curl and length",
                    icon: "⚙️"
                },
                {
                    step: "Cluster Assembly",
                    description: "Individual clusters designed for easy at-home application",
                    icon: "🎯"
                },
                {
                    step: "Complete Kit Packaging",
                    description: "Everything you need included with step-by-step video tutorials",
                    icon: "📱"
                }
            ],
            bestSellers: [
                { name: "Beginner Complete Kit", price: "$45" },
                { name: "Natural Look Clusters", price: "$32" },
                { name: "Volume Mega Set", price: "$55" },
                { name: "Wispy Hybrid Mix", price: "$38" }
            ],
            reviews: [
                {
                    name: "Rachel P.",
                    rating: 5,
                    text: "Game changer! I was intimidated at first but the instructions are so clear. I get salon results at home for a fraction of the price."
                },
                {
                    name: "Megan L.",
                    rating: 5,
                    text: "The quality is outstanding. I've been using Wink Studio for 6 months and I'm never going back to strip lashes or paying for extensions."
                },
                {
                    name: "Jasmine H.",
                    rating: 4,
                    text: "Really good for beginners! There's a bit of a learning curve but once you get it, they look amazing. Customer service is super helpful too."
                }
            ],
            badges: ["Verified by COVENA", "Sourcing Transparency", "Review Integrity"],
            rating: 4.7,
            reviewCount: 2156,
            priceRange: "$32-$55",
            beginnerFriendly: true,
            shippingSpeed: "2-4 days",
            verifiedLevel: "Silver"
        },
        {
            id: "pure-canvas",
            name: "Pure Canvas",
            category: "Makeup",
            tagline: "Clean beauty, bold colors",
            mission: "Pure Canvas proves that clean beauty doesn't mean compromise. We create high-performance makeup using only verified clean ingredients that deliver professional results.",
            description: "Clean, high-performance makeup with transparent ingredient sourcing",
            sourcing: {
                summary: "Every ingredient is sourced from verified suppliers and tested for purity. We maintain relationships with organic farms and ethical mineral suppliers worldwide.",
                details: [
                    "100% clean, non-toxic ingredients",
                    "EWG Verified for safety",
                    "Direct partnerships with organic ingredient suppliers",
                    "Full ingredient origin transparency on website"
                ]
            },
            process: [
                {
                    step: "Ingredient Verification",
                    description: "Every ingredient tested and verified for purity and origin",
                    icon: "🧪"
                },
                {
                    step: "Formulation",
                    description: "Expert chemists create high-performance clean formulas",
                    icon: "🎨"
                },
                {
                    step: "Safety Testing",
                    description: "Dermatologist tested, hypoallergenic, and non-irritating",
                    icon: "🛡️"
                },
                {
                    step: "Sustainable Production",
                    description: "Manufactured in carbon-neutral facility with minimal waste",
                    icon: "🌍"
                }
            ],
            bestSellers: [
                { name: "Luminous Foundation Serum", price: "$42" },
                { name: "Velvet Matte Lipstick", price: "$28" },
                { name: "Power Pigment Palette", price: "$54" },
                { name: "Clean Glow Highlighter", price: "$34" }
            ],
            reviews: [
                {
                    name: "Lauren B.",
                    rating: 5,
                    text: "Finally, clean makeup that actually works! The foundation is my holy grail. I love knowing exactly what's in my products."
                },
                {
                    name: "Zoe K.",
                    rating: 5,
                    text: "The color payoff is incredible for clean makeup. I was worried about performance but these products rival high-end conventional brands."
                },
                {
                    name: "Nina S.",
                    rating: 5,
                    text: "My skin has never looked better. Switching to Pure Canvas cleared up my complexion while giving me the coverage I need."
                }
            ],
            badges: ["Verified by COVENA", "Sourcing Transparency", "Review Integrity"],
            rating: 4.9,
            reviewCount: 3421,
            priceRange: "$28-$54",
            beginnerFriendly: true,
            shippingSpeed: "2-3 days",
            verifiedLevel: "Gold"
        },
        {
            id: "heritage-hues",
            name: "Heritage Hues",
            category: "Makeup",
            tagline: "Celebrating diverse beauty through inclusive shades",
            mission: "Heritage Hues creates makeup for everyone, with the industry's most inclusive shade ranges and formulas designed for all skin types and tones.",
            description: "Inclusive makeup with the widest shade range and formulas for all skin types",
            sourcing: {
                summary: "We source pigments from ethical suppliers worldwide to create our expansive shade range. Every formula is developed with input from diverse beauty experts and tested on all skin tones.",
                details: [
                    "Ethical pigment sourcing from 12 countries",
                    "Inclusive shade development with diverse experts",
                    "Fair trade partnerships for natural ingredients",
                    "Community feedback program for product development"
                ]
            },
            process: [
                {
                    step: "Inclusive Development",
                    description: "Products developed with diverse beauty experts and community input",
                    icon: "🌈"
                },
                {
                    step: "Universal Testing",
                    description: "Tested on 50+ different skin tones and undertones",
                    icon: "🔬"
                },
                {
                    step: "Quality Crafting",
                    description: "Premium formulations that work for all skin types",
                    icon: "✨"
                },
                {
                    step: "Community Feedback",
                    description: "Ongoing improvement based on customer experiences",
                    icon: "💬"
                }
            ],
            bestSellers: [
                { name: "Flawless Finish Foundation (50 shades)", price: "$38" },
                { name: "Universal Glow Palette", price: "$45" },
                { name: "True Match Concealer (40 shades)", price: "$24" },
                { name: "Sunset Blush Collection", price: "$32" }
            ],
            reviews: [
                {
                    name: "Aaliyah J.",
                    rating: 5,
                    text: "Finally found my perfect shade! The foundation oxidizes beautifully on my deep skin tone. This brand actually understands diverse beauty."
                },
                {
                    name: "Camila R.",
                    rating: 5,
                    text: "The olive undertone range is incredible. I've never found such a perfect match for my complexion. Plus the formula is amazing!"
                },
                {
                    name: "Yuki T.",
                    rating: 5,
                    text: "As someone with fair Asian skin, I'm always stuck between shades that are too pink or too yellow. Heritage Hues has the perfect neutral shades!"
                }
            ],
            badges: ["Verified by COVENA", "Sourcing Transparency", "Review Integrity"],
            rating: 4.9,
            reviewCount: 5678,
            priceRange: "$24-$45",
            beginnerFriendly: true,
            shippingSpeed: "2-4 days",
            verifiedLevel: "Gold"
        }
    ]
};
