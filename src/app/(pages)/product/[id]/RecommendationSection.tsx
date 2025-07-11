"use client";

import { useEffect, useState } from 'react';
import { products, getProductsByKeywords, Product } from '@/lib/products';
import { recommendProducts } from '@/ai/flows/product-recommendations';
import { ProductCard } from '@/components/product-card';

export default function RecommendationSection({ currentProductCategory, currentProductId }: { currentProductCategory: string, currentProductId: string }) {
  const [recommendedProductsList, setRecommendedProductsList] = useState<Product[]>([]);

  useEffect(() => {
    async function getRecommendations() {
      const browsingHistory = products
        .filter(p => p.category === currentProductCategory)
        .map(p => p.name)
        .join(', ');

      let recommended = [];
      try {
        const recommendations = await recommendProducts({ browsingHistory });
        const recommendedNames = recommendations.recommendedProducts;
        recommended = getProductsByKeywords(recommendedNames)
          .filter(p => p.id !== currentProductId)
          .slice(0, 3);
      } catch (error) {
        console.error("AI Recommendation failed:", error);
        recommended = products
          .filter(p => p.category === currentProductCategory && p.id !== currentProductId)
          .slice(0, 3);
      }

      setRecommendedProductsList(recommended);
    }

    getRecommendations();
  }, [currentProductCategory, currentProductId]);

  if (recommendedProductsList.length === 0) return null;

  return (
    <section className="py-16 lg:py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-headline text-center mb-12">You Might Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendedProductsList.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
