export type Product = {
  id: string;
  name: string;
  price: number;
  category: 'men' | 'women' | 'accessories';
  image: string;
  images: string[];
  description: string;
  details: string[];
  care: string[];
  data_ai_hint: string;
};

export const products: Product[] = [
  {
    id: '1',
    name: 'The Maharani Silk Saree',
    price: 45000,
    category: 'women',
    image: 'https://images.unsplash.com/photo-1610189334133-121808b8b03e?q=80&w=800&h=1200&fit=crop',
    images: ['https://images.unsplash.com/photo-1610189334133-121808b8b03e?q=80&w=800&h=1200&fit=crop', 'https://images.unsplash.com/photo-1617196020583-b7b4383c92b2?q=80&w=800&h=1200&fit=crop', 'https://images.unsplash.com/photo-1617196020583-b7b4383c92b2?q=80&w=800&h=1200&fit=crop', 'https://images.unsplash.com/photo-1617196020583-b7b4383c92b2?q=80&w=800&h=1200&fit=crop'],
    description: 'A timeless silhouette, handwoven from the finest Banarasi silk. This saree features intricate zari work, a testament to generations of artisanal skill.',
    details: ['Pure Banarasi Silk', 'Handwoven Zari Motifs', 'Includes unstitched blouse piece'],
    care: ['Dry clean only', 'Store in a muslin cloth', 'Avoid direct sunlight'],
    data_ai_hint: 'indian saree',
  },
  {
    id: '2',
    name: 'Chikankari Kurta',
    price: 12500,
    category: 'women',
    image: 'https://images.unsplash.com/photo-1623945392336-149b7fb40c30?q=80&w=800&h=1200&fit=crop',
    images: ['https://images.unsplash.com/photo-1623945392336-149b7fb40c30?q=80&w=800&h=1200&fit=crop', 'https://images.unsplash.com/photo-1623945392336-149b7fb40c30?q=80&w=800&h=1200&fit=crop', 'https://images.unsplash.com/photo-1623945392336-149b7fb40c30?q=80&w=800&h=1200&fit=crop'],
    description: 'Exuding understated elegance, this fine muslin kurta is adorned with delicate Chikankari embroidery, a traditional craft from Lucknow.',
    details: ['Fine Cotton Muslin', 'Hand-embroidered Chikankari', 'Pearl button detailing'],
    care: ['Hand wash separately in cold water', 'Dry in shade'],
    data_ai_hint: 'indian kurta',
  },
  {
    id: '3',
    name: 'The Maharaja Sherwani',
    price: 75000,
    category: 'men',
    image: 'https://images.unsplash.com/photo-1617196020583-b7b4383c92b2?q=80&w=800&h=1200&fit=crop',
    images: ['https://images.unsplash.com/photo-1617196020583-b7b4383c92b2?q=80&w=800&h=1200&fit=crop', 'https://images.unsplash.com/photo-1617196020583-b7b4383c92b2?q=80&w=800&h=1200&fit=crop', 'https://images.unsplash.com/photo-1617196020583-b7b4383c92b2?q=80&w=800&h=1200&fit=crop'],
    description: 'Impeccably tailored from raw silk, The Maharaja Sherwani is a masterpiece of sartorial craftsmanship, designed for the modern royal.',
    details: ['Raw Silk Fabric', 'Intricate Zardozi Embroidery', 'Comes with matching churidar'],
    care: ['Dry clean only'],
    data_ai_hint: 'indian sherwani',
  },
  {
    id: '4',
    name: 'Nehru Jacket',
    price: 18000,
    category: 'men',
    image: 'https://images.unsplash.com/photo-1615825255833-c6c7f8a49a93?q=80&w=800&h=1200&fit=crop',
    images: ['https://images.unsplash.com/photo-1615825255833-c6c7f8a49a93?q=80&w=800&h=1200&fit=crop', 'https://images.unsplash.com/photo-1615825255833-c6c7f8a49a93?q=80&w=800&h=1200&fit=crop', 'https://images.unsplash.com/photo-1615825255833-c6c7f8a49a93?q=80&w=800&h=1200&fit=crop'],
    description: 'A versatile essential for any wardrobe, this Nehru jacket is crafted from handwoven tussar silk for a rich, textured finish.',
    details: ['Tussar Silk', 'Mandarin Collar', 'Wooden Buttons'],
    care: ['Dry clean only'],
    data_ai_hint: 'nehru jacket',
  },
  {
    id: '5',
    name: 'Epoque Leather Tote',
    price: 2100,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1620781749138-c6996a63583b?q=80&w=800&h=1200&fit=crop',
    images: ['https://images.unsplash.com/photo-1620781749138-c6996a63583b?q=80&w=800&h=1200&fit=crop', 'https://images.unsplash.com/photo-1620781749138-c6996a63583b?q=80&w=800&h=1200&fit=crop', 'https://images.unsplash.com/photo-1620781749138-c6996a63583b?q=80&w=800&h=1200&fit=crop'],
    description: 'A breathtaking piece inspired by Mughal jewelry. This necklace features uncut polki diamonds (Kundan) and lustrous south sea pearls, set in 22k gold.',
    details: ['22k Gold Setting', 'Uncut Polki Diamonds', 'South Sea Pearls'],
    care: ['Protect from direct heat and moisture', 'Store in a velvet-lined box'],
    data_ai_hint: 'indian necklace',
  },
  {
    id: '6',
    name: 'Jadau Jhumka Earrings',
    price: 35000,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1599662875151-a9a3b63a6285?q=80&w=800&h=1200&fit=crop',
    images: ['https://images.unsplash.com/photo-1599662875151-a9a3b63a6285?q=80&w=800&h=1200&fit=crop', 'https://images.unsplash.com/photo-1599662875151-a9a3b63a6285?q=80&w=800&h=1200&fit=crop'],
    description: 'Classic Jhumka earrings featuring intricate Jadau work with emeralds and rubies, finished with delicate pearl drops.',
    details: ['22k Gold', 'Jadau Setting', 'Hand-finished in Jaipur'],
    care: ['Avoid contact with perfumes and lotions', 'Store in a soft pouch'],
    data_ai_hint: 'indian earrings',
  },
  {
    id: '7',
    name: 'Pashmina Shawl',
    price: 28000,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1588705330349-8b8b3219e984?q=80&w=800&h=1200&fit=crop',
    images: ['https://images.unsplash.com/photo-1588705330349-8b8b3219e984?q=80&w=800&h=1200&fit=crop', 'https://images.unsplash.com/photo-1588705330349-8b8b3219e984?q=80&w=800&h=1200&fit=crop'],
    description: 'An heirloom piece, this shawl is hand-spun from the finest Ladakhi pashmina wool and features delicate Sozni embroidery from Kashmir.',
    details: ['100% Pure Pashmina', 'Hand-spun and Handwoven', 'Kashmiri Sozni Embroidery'],
    care: ['Dry clean only', 'Store with cedar blocks to protect from moths'],
    data_ai_hint: 'pashmina shawl',
  },
  {
    id: '8',
    name: 'Bandhani Lehenga',
    price: 68000,
    category: 'women',
    image: 'https://images.unsplash.com/photo-1631621671500-8e188a105f82?q=80&w=800&h=1200&fit=crop',
    images: ['https://images.unsplash.com/photo-1631621671500-8e188a105f82?q=80&w=800&h=1200&fit=crop', 'https://images.unsplash.com/photo-1631621671500-8e188a105f82?q=80&w=800&h=1200&fit=crop'],
    description: 'Vibrant and festive, this silk lehenga features traditional Bandhani tie-dye from Gujarat, embellished with mirror work.',
    details: ['Gajji Silk', 'Authentic Bandhani Tie-Dye', 'Mirror Work Embellishment'],
    care: ['Dry clean only'],
    data_ai_hint: 'indian lehenga',
  },
  {
    id: '9',
    name: 'Jodhpuri Breeches',
    price: 22000,
    category: 'men',
    image: 'https://images.unsplash.com/photo-1542318288-826c48a12c4d?q=80&w=800&h=1200&fit=crop',
    images: ['https://images.unsplash.com/photo-1542318288-826c48a12c4d?q=80&w=800&h=1200&fit=crop', 'https://images.unsplash.com/photo-1542318288-826c48a12c4d?q=80&w=800&h=1200&fit=crop'],
    description: 'The definitive equestrian-inspired trousers, tailored for a sharp, contemporary fit. A nod to the royal heritage of Jodhpur.',
    details: ['Heavyweight Cotton Twill', 'Flared hip, fitted calf', 'Reinforced inseam'],
    care: ['Machine wash cold', 'Iron on medium heat'],
    data_ai_hint: 'jodhpuri pants',
  }
];

export const getProductById = (id: string | undefined) => products.find(p => p.id === id);
export const getProductsByCategory = (string: string | undefined) => products.filter(p => p.category === string);
export const getProductsByKeywords = (keywords: string[]) => {
  if (!keywords || keywords.length === 0) return [];
  const lowerCaseKeywords = keywords.map(k => k.toLowerCase().trim());
  return products.filter(product =>
    lowerCaseKeywords.some(keyword => product.name.toLowerCase().includes(keyword))
  );
};
