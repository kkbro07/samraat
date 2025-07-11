import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

function SocialIcon({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground transition-colors">
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-lg font-headline font-semibold">Époque Luxe</h3>
            <p className="mt-2 text-sm text-muted-foreground">Timeless elegance, redefined.</p>
          </div>
          <div className="grid grid-cols-2 md:col-span-2 gap-8">
            <div>
              <h4 className="font-semibold text-foreground">Explore</h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="/shop" className="text-muted-foreground hover:text-foreground">Shop All</Link></li>
                <li><Link href="/shop?category=men" className="text-muted-foreground hover:text-foreground">Men</Link></li>
                <li><Link href="/shop?category=women" className="text-muted-foreground hover:text-foreground">Women</Link></li>
                <li><Link href="/shop?category=accessories" className="text-muted-foreground hover:text-foreground">Jewelry</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">About</h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="/about" className="text-muted-foreground hover:text-foreground">Our Story</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact Us</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground">FAQs</Link></li>
              </ul>
            </div>
          </div>
          <div className="md:col-span-1">
            <h4 className="font-semibold text-foreground">Join Our Newsletter</h4>
            <p className="mt-2 text-sm text-muted-foreground">Receive exclusive updates on new collections and special offers.</p>
            <form className="mt-4 flex gap-2">
              <Input type="email" placeholder="Your email address" className="flex-1 bg-white" />
              <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground">Subscribe</Button>
            </form>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Samraat. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <SocialIcon href="#">
              {/* Placeholder for Instagram Icon */}
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 012.792 2.792c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-2.792 2.792c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-2.792-2.792c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218 1.791.465 2.427a4.902 4.902 0 012.792-2.792c.636-.247 1.363.416 2.427.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0-2a7 7 0 110 14 7 7 0 010-14zm6.406-1.18a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" clipRule="evenodd" /></svg>
            </SocialIcon>
            <SocialIcon href="#">
                {/* Placeholder for Twitter/X Icon */}
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M13.6 2.475c-.27.43-1.037 1.793-1.037 1.793s-1.48-1.48-2.96-1.037c-1.184.222-2.074 1.184-2.37 2.37-1.037 3.85.815 6.96 4.444 9.925C15.14 20.25 18.25 17.14 18.25 13.5c0-2.222-1.48-3.7-3.26-3.7-.963 0-1.85.444-2.37 1.184h.074c.296-.444.815-.815 1.48-.815 1.11 0 1.85.815 1.85 1.85s-.74 1.85-1.85 1.85c-1.48 0-2.814-1.48-3.333-3.185-1.63-5.333 1.11-8.518 5.407-8.518.74 0 1.333.148 1.85.444z"/></svg>
            </SocialIcon>
             <SocialIcon href="#">
                {/* Placeholder for Facebook Icon */}
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
}
