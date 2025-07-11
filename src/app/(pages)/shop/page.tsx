import { products } from '@/lib/products';
import { ProductCard } from '@/components/product-card';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shop | Époque Luxe',
  description: 'Explore our latest collections of luxury fashion.',
};

interface ShopPageProps {
  searchParams?: { category?: string };
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const category = searchParams?.category;
  const filteredProducts = category ? products.filter(p => p.category === category) : products;

  const title = category 
    ? category === 'accessories' ? 'Jewelry' : category.charAt(0).toUpperCase() + category.slice(1)
    : 'All Collections';

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline tracking-tight text-foreground">{title}</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Discover pieces that blend timeless heritage with modern sensibilities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}