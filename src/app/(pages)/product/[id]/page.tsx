import { notFound } from 'next/navigation';
import { getProductById } from '@/lib/products';
import ProductPageClient from './ProductPageClient';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);
  if (!product) {
    return { title: 'Product Not Found' };
  }
  return {
    title: `${product.name} | Samraat`,
    description: product.description,
  };
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  return <ProductPageClient product={product} />;
}
