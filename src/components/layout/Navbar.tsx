import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, Wine, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'Início', path: '/' },
  { name: 'Whisky', path: '/whisky' },
  { name: 'Vodka', path: '/vodka' },
  { name: 'Gin', path: '/gin' },
  { name: 'Rum', path: '/rum' },
  { name: 'Tequila', path: '/tequila' },
  { name: 'Cachaça', path: '/cachaca' },
  { name: 'Vinho', path: '/vinho' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="glass fixed inset-x-0 top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-2">
            <Wine className="text-gold size-8 transition-transform group-hover:rotate-12" />
            <span className="font-display text-gradient-gold text-xl font-semibold md:text-2xl">Arte & Coquetel</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'font-body rounded-md px-4 py-2 text-sm transition-all duration-300',
                  location.pathname === item.path ? 'text-gold bg-gold/10' : 'text-foreground/70 hover:text-gold hover:bg-gold/5',
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="text-gold lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn('overflow-hidden transition-all duration-300 lg:hidden', isOpen ? 'max-h-96 pb-4' : 'max-h-0')}>
          <div className="flex flex-col gap-1">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'font-body rounded-md px-4 py-3 text-sm transition-all duration-300',
                  location.pathname === item.path ? 'text-gold bg-gold/10' : 'text-foreground/70 hover:text-gold hover:bg-gold/5',
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
