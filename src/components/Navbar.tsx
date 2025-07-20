import { Home, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageToggle } from './LanguageToggle';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Heart className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold text-foreground">FreshStart</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <a href="/">
              <Home className="h-4 w-4 mr-2" />
              Home
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href="/browse">Browse</a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href="/post">Post Item</a>
          </Button>
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
}