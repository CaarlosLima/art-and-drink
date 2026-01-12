import { Wine } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerLinks = [
  { name: 'Receitas', path: '/receitas' },
  { name: 'História', path: '/historia' },
  { name: 'Glossário', path: '/glossario' },
];

export const Footer = () => {
  return (
    <footer className="from-background to-card relative overflow-hidden bg-gradient-to-b">
      {/* Decorative top border */}
      <div className="via-gold/50 absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent" />

      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="bg-gold absolute left-1/4 top-0 size-64 rounded-full blur-3xl" />
        <div className="bg-gold absolute bottom-0 right-1/4 size-48 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 py-16">
        {/* Main content */}
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Brand */}
          <Link to="/" className="group flex items-center gap-3">
            <div className="relative">
              <Wine className="text-gold size-10 transition-transform duration-500 group-hover:rotate-12" />
              <div className="bg-gold/20 absolute inset-0 rounded-full opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
            </div>
            <span className="font-display text-gradient-gold text-2xl font-semibold">Arte & Coquetel</span>
          </Link>

          {/* Tagline */}
          <p className="text-muted-foreground font-body max-w-md text-sm leading-relaxed">
            Explorando a arte e a história por trás de cada bebida, uma receita de cada vez.
          </p>

          {/* Decorative divider */}
          <div className="flex w-full max-w-xs items-center gap-4">
            <div className="to-gold/30 h-px flex-1 bg-gradient-to-r from-transparent" />
            <div className="bg-gold/50 size-2 rotate-45" />
            <div className="to-gold/30 h-px flex-1 bg-gradient-to-l from-transparent" />
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-8">
            {footerLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className="font-body text-foreground/70 hover:text-gold group relative text-sm transition-colors duration-300"
              >
                {link.name}
                <span className="bg-gold absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom section */}
        <div className="border-border/50 mt-12 flex flex-col items-center justify-center gap-4 border-t pt-8 md:flex-row">
          <p className="text-muted-foreground/70 font-body text-xs">© {new Date().getFullYear()} Arte & Coquetel. Beba com responsabilidade.</p>
        </div>
      </div>
    </footer>
  );
};
