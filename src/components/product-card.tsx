import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/products';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className={cn("group", className)}>
      <div className="overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={800}
          height={1200}
          className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          data-ai-hint={product.data_ai_hint}
        />
      </div>
      <div className="mt-4 text-left">
        <h3 className="text-md font-body text-foreground">{product.name}</h3>
        <p className="mt-1 text-lg font-semibold font-headline text-foreground">₹{product.price.toLocaleString()}</p>
      </div>
    </Link>
  );
}
