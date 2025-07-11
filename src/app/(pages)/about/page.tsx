import Image from 'next/image';
import { ParallaxSection } from '@/components/parallax-section';
import { AnimatedSection } from '@/components/animated-section';

export const metadata = {
  title: 'Our Story | Samraat',
  description: 'Discover the philosophy and craftsmanship behind Samraat.',
};

export default function AboutPage() {
  return (
    <div className="bg-background overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-base font-semibold text-primary">Our Philosophy</p>
          <h1 className="mt-2 text-4xl md:text-6xl font-headline tracking-tight text-foreground">Where Legacy Meets Luxury</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Époque Luxe was founded on the principle that clothing is not merely worn, but lived in. It is a second skin, a form of expression, an extension of the soul. We are dedicated to creating pieces that are not only beautiful but also imbued with a story and a sense of permanence in a transient world.
          </p>
        </div>
      </div>

      <ParallaxSection
        src="https://images.unsplash.com/photo-1629726343583-d9718b3e8f3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxmYXNoaW9uJTIwZGVzaWduZXJ8ZW58MHx8fHwxNzUyMjMxOTU4fDA&ixlib=rb-4.1.0&q=80&w=1080"
        alt="Craftsmanship at Époque Luxe"
        className="h-[60vh] my-16 lg:my-24"
        dataAiHint="indian artisan"
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-headline text-foreground">The Art of Command</h2>
              <p className="mt-4 text-muted-foreground">
                Every garment begins with the finest textiles, handwoven in the villages of India, sourced from artisans who share our commitment to quality and authority. Our ateliers are home to craftspeople who have honed their skills over generations, transforming exquisite fabrics like Banarasi silk and fine muslin into wearable art. The touch of a master hand is evident in every thread, every block print, and every intricate embroidery.
              </p>
            </div>
            <div className="aspect-square relative">
              <Image
                src="https://images.unsplash.com/photo-1596222779758-001090c412ae?q=80&w=1080&fit=crop"
                alt="Detailed shot of Indian fabric"
                fill
                objectFit="cover"
                className="rounded-lg shadow-md"
                data-ai-hint="royal fabric"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="right">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto mt-16 lg:mt-24">
            <div className="md:order-2">
              <h2 className="text-3xl font-headline text-foreground">A Sovereign Vision</h2>
              <p className="mt-4 text-muted-foreground">
                Our aesthetic is one of understated grandeur and absolute authority. We draw inspiration from the regal history of the Mauryas, the vibrant colors of Rajasthan, and the serene power of the Himalayan foothills. The result is a collection that feels both contemporary and classic, designed to be revered for generations.
              </p>
            </div>
            <div className="aspect-square relative md:order-1">
              <Image
                src="https://images.unsplash.com/photo-1598013824387-a2559d9f5bbb?q=80&w=1080&fit=crop"
                alt="Artistic Indian fashion shot"
                fill
                objectFit="cover"
                className="rounded-lg shadow-md"
                data-ai-hint="regal fashion"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>

       <div className="h-24 sm:h-32"></div>

    </div>
  );
}
