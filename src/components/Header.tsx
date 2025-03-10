
import React, { useEffect, useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Plus, Sparkles } from 'lucide-react';
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400 flex items-center">
              <Sparkles className="h-5 w-5 mr-2 text-blue-400" />
              AI Agent Hub
            </span>
          </h1>
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 ml-2 animate-pulse">
            Beta
          </Badge>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="text-gray-300 hidden md:flex items-center gap-2 border-white/10 bg-white/5 hover:bg-white/10">
            <Search className="h-4 w-4" />
            <span>Search</span>
            <kbd className="ml-2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-white/10 bg-black/40 px-1.5 font-mono text-[10px] font-medium text-gray-300 opacity-100">
              <span className="text-xs">⌘</span>K
            </kbd>
          </Button>
          
          <Button size="sm" className="gap-1 animate-slide-in-right bg-gradient-to-r from-blue-600 to-purple-600 border-none hover:opacity-90">
            <Plus className="h-4 w-4" />
            <span>New Agent</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
