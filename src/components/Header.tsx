
import React, { useEffect, useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-6 transition-all duration-200 ease-in-out",
      scrolled ? "glass-nav" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-medium tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
              AI Agent Hub
            </span>
          </h1>
          <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200 ml-2 animate-scale-in">
            Beta
          </Badge>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="text-muted-foreground hidden md:flex items-center gap-2 border-none bg-secondary/80">
            <Search className="h-4 w-4" />
            <span>Search</span>
            <kbd className="ml-2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-slate-200 bg-slate-100 px-1.5 font-mono text-[10px] font-medium text-slate-600 opacity-100">
              <span className="text-xs">⌘</span>K
            </kbd>
          </Button>
          
          <Button size="sm" className="gap-1 animate-slide-in-right">
            <Plus className="h-4 w-4" />
            <span>New Agent</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
