"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Product } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCart } from '@/hooks/use-cart';
import { useToast } from '@/hooks/use-toast';
import RecommendationSection from './RecommendationSection';
import { cn } from '@/lib/utils';

export default function ProductPageClient({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { toast } = useToast();
  const [selectedSize, setSelectedSize] = useState<string>('');

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: 'Please select a size',
        variant: 'destructive'
      });
      return;
    }
    addItem({
      ...product,
      size: selectedSize,
    });
    toast({
      title: 'Added to cart',
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <>
      <div className="bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-32 sm:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Product Images */}
            <div className="grid grid-cols-2 gap-4">
              {product.images.slice(0, 4).map((src, index) => (
                <div key={index} className="overflow-hidden">
                  <Image
                    src={src}
                    alt={`${product.name} view ${index + 1}`}
                    width={800}
                    height={1200}
                    className="w-full h-full object-cover"
                    data-ai-hint={product.data_ai_hint}
                  />
                </div>
              ))}
            </div>

            {/* Product Details */}
            <div className="lg:sticky lg:top-24 self-start">
              <h1 className="text-3xl lg:text-4xl font-headline text-foreground">{product.name}</h1>
              <p className="mt-2 text-3xl font-semibold font-headline text-foreground">₹{product.price.toLocaleString()}</p>
              
              <Separator className="my-6" />

              <p className="text-base text-muted-foreground leading-relaxed">{product.description}</p>
              
              <div className="mt-8 space-y-6">
                <div>
                  <label htmlFor="size-select" className="text-sm font-medium text-foreground">Size</label>
                  <Select onValueChange={setSelectedSize} value={selectedSize}>
                    <SelectTrigger id="size-select" className="mt-2">
                      <SelectValue placeholder="Select a size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="xs">XS</SelectItem>
                      <SelectItem value="s">S</SelectItem>
                      <SelectItem value="m">M</SelectItem>
                      <SelectItem value="l">L</SelectItem>
                      <SelectItem value="xl">XL</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={handleAddToCart} size="lg" className="w-full h-12 text-base bg-accent hover:bg-accent/90 text-accent-foreground rounded-none">Add to Cart</Button>
              </div>

              <Accordion type="single" collapsible className="w-full mt-8">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Description & Details</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      {product.details.map((detail, i) => <li key={i}>{detail}</li>)}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Care Instructions</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      {product.care.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Delivery & Returns</AccordionTrigger>
                  <AccordionContent>
                    Complimentary shipping on all orders. Returns are accepted within 30 days of purchase. Please see our full return policy for more details.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      <RecommendationSection currentProductCategory={product.category} currentProductId={product.id} />
    </>
  );
}
