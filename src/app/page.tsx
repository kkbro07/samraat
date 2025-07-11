import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { ParallaxSection } from '@/components/parallax-section';

// Featured Categories Data
const featuredCategories = [
  { name: 'Women', href: '/shop?category=women', image: 'https://images.unsplash.com/photo-1617196020583-b7b4383c92b2?q=80&w=800&h=1000&fit=crop', data_ai_hint: 'indian queen fashion' },
  { name: 'Men', href: '/shop?category=men', image: 'https://images.unsplash.com/photo-1615825255833-c6c7f8a49a93?q=80&w=800&h=1000&fit=crop', data_ai_hint: 'indian king fashion' },
  { name: 'Jewelry', href: '/shop?category=accessories', image: '/placeholder-royal-necklace.png', data_ai_hint: 'AI-generated image of a royal Indian necklace' },
]; 

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      {/*
        The ParallaxSection component handles the fixed background effect.
        The content within the ParallaxSection will scroll over the background image.
        The height of the section is controlled by the 'className' prop.
        The dataAiHint is used for potential AI image generation in the future.
        applyContentEffects is used to apply scroll-based effects to the content.
      */}
      {/* AI-Generated Image Gallery */}
      {/* Brand Story Snippet */}
      {/*
        This section provides a brief overview of the Samraat brand story.
        It includes a heading, a descriptive paragraph, and a button linking to the About page.
      */}
      <ParallaxSection
        id="hero-section"
        src="https://images.unsplash.com/photo-1544998292-b423146a1658?q=80&w=1920&h=1080&fit=crop"
        alt="Hero background image of an Indian palace"
        className="h-screen"
        priority
        dataAiHint="indian palace"
        applyContentEffects={true}
      >
        <div className="fixed top-1/2 left-1/2 w-full text-center pointer-events-none">
          <h1 id="hero-title" className="text-8xl md:text-9xl lg:text-[10rem] font-extrabold tracking-tight text-white font-headline">
            Samraat
          </h1>
        </div>
      </ParallaxSection>

      {/* Featured Categories */}
      <section className="py-16 lg:py-24 bg-background">
        {/*
          This section showcases featured product categories with images and links.
          It uses a grid layout to display the categories.
        */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCategories.map((category) => (
              <Link href={category.href} key={category.name} className="group relative overflow-hidden">
                <Image
                  src={category.image}
                  alt={`Shop ${category.name}`}
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint={category.data_ai_hint}
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-8 left-8">
                  <h2 className="text-3xl font-headline text-white">{category.name}</h2>
                  <p className="mt-1 text-white/90 underline underline-offset-4">Shop Collection</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Editorial Banner */}
      {/*
        This section features an editorial quote with a parallax background image.
        It uses the ParallaxSection component for the background effect.
        The text is centered and styled to be visually appealing.
      */}
      <ParallaxSection
        src="https://images.unsplash.com/photo-1608501821300-4f99e58bba77?q=80&w=1600&h=800&fit=crop"
        alt="Editorial fashion campaign with Indian themes"
        className="py-32 lg:py-48 text-center text-white"
        dataAiHint="india landscape"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-4xl md:text-5xl font-headline italic">"Style is the armor to survive the reality of everyday life."</h3>
            <p className="mt-4 text-lg">- Bill Cunningham</p>
        </div>
      </ParallaxSection>

      {/* AI-Generated Image Gallery */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-headline tracking-tight text-foreground mb-12">Samraat in Focus</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Replace with actual AI-generated images */}
            <div className="relative group overflow-hidden rounded-lg aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1597178540209-eb7cd8192554?q=80&w=800&h=800&fit=crop" // Placeholder
                alt="Samraat clothing image 1"
                width={800}
                height={800}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                data-ai-hint="Samraat regal women's wear, outdoor setting, golden hour"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">Regal Elegance</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1612303699525-d979f728a59e?q=80&w=800&h=800&fit=crop" // Placeholder
                alt="Samraat clothing image 2"
                width={800}
                height={800}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                data-ai-hint="Samraat modern men's wear, urban background, daylight"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">Modern Maharaja</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1594841054548-c949e29d3630?q=80&w=800&h=800&fit=crop" // Placeholder
                alt="Samraat clothing image 3"
                width={800}
                height={800}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                data-ai-hint="Samraat vibrant textile, close-up shot, studio lighting"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">Textile Artistry</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story Snippet */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-headline tracking-tight text-foreground">A Legacy of Power</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Époque Luxe was born from a desire to merge classical artistry with contemporary vision. We believe in clothing as a form of self-expression, crafted with meticulous attention to detail and an unwavering commitment to quality.
          </p>
          <Button asChild variant="link" className="mt-6 text-base text-primary hover:text-primary/80">
            <Link href="/about">Discover Our Story <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
