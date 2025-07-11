"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, ShoppingCart, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useCart } from '@/hooks/use-cart';
import { useAuth } from '@/hooks/use-auth';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navigation = [
  { name: 'Shop', href: '/shop' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

function UserNav() {
    const { user, signOut } = useAuth();
  
    if (!user) {
      return (
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>
      );
    }
  
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-10 w-10 rounded-full">
            <Avatar className="h-10 w-10">
              <AvatarImage src={user.photoURL ?? ''} alt={user.displayName ?? 'User'} />
              <AvatarFallback>{user.displayName?.[0] ?? 'U'}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{user.displayName}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={signOut}>
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const { cart, setSheetOpen } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const cartItemCount = mounted ? cart.reduce((acc, item) => acc + item.quantity, 0) : 0;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroSection = document.getElementById('hero-section');
      const heroBottom = heroSection ? heroSection.getBoundingClientRect().bottom : 0;
      
      setIsScrolled(scrollPosition > 10);
      setIsHeroVisible(heroBottom > 80); // 80px is header height
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-sm border-b border-border" : "bg-transparent",
      isHeroVisible && !isMenuOpen ? "text-white" : "text-foreground"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-1">
             {/* Left navigation for larger screens */}
             <nav className="hidden md:flex items-center space-x-8">
                {navigation.slice(0, 2).map((item) => (
                  <Link key={item.name} href={item.href} className="text-sm font-medium hover:text-foreground/80 transition-colors">
                    {item.name}
                  </Link>
                ))}
              </nav>
          </div>

          <div className="flex-shrink-0 px-4">
            <Link href="/" className={cn(
              "text-2xl font-headline font-bold tracking-wider transition-opacity duration-300",
              isHeroVisible ? "opacity-0" : "opacity-100"
            )}>
              Samraat
            </Link>
          </div>

          <div className="flex-1 flex items-center justify-end space-x-4">
             {/* Right navigation for larger screens */}
             <nav className="hidden md:flex items-center space-x-8">
                {navigation.slice(2).map((item) => (
                  <Link key={item.name} href={item.href} className="text-sm font-medium hover:text-foreground/80 transition-colors">
                    {item.name}
                  </Link>
                ))}
              </nav>
            <Button variant="ghost" size="icon" className="hover:bg-white/10 relative" onClick={() => setSheetOpen(true)}>
              <ShoppingCart className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {cartItemCount}
                </span>
              )}
              <span className="sr-only">Shopping Cart</span>
            </Button>

            <UserNav />

            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="hover:bg-white/10">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                <span className="sr-only">Open menu</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border text-foreground">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-foreground hover:bg-muted" onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
