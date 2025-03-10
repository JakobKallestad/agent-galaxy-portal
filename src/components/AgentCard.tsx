
import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from '@/lib/utils';
import { Bot, Sparkles, Star } from 'lucide-react';

export interface AgentCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  category: string;
  isFeatured?: boolean;
  isNew?: boolean;
  color?: 'blue' | 'purple' | 'green' | 'orange' | 'pink';
}

const AgentCard: React.FC<AgentCardProps> = ({
  id,
  title,
  description,
  imageUrl,
  category,
  isFeatured = false,
  isNew = false,
  color = 'blue'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const colorMap = {
    blue: 'from-blue-400 to-blue-600',
    purple: 'from-purple-400 to-purple-600',
    green: 'from-green-400 to-green-600',
    orange: 'from-orange-400 to-orange-600',
    pink: 'from-pink-400 to-pink-600',
  };
  
  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <a href={`/agent/${id}`} className="block group">
      <Card className={cn(
        "overflow-hidden transition-all duration-300 ease-in-out h-full agent-card",
        "hover:shadow-md hover:shadow-primary/10 hover:border-primary/20",
        "border-slate-100 bg-white",
      )}>
        <div className="agent-card-shine" />
        
        <div className="aspect-[4/3] relative overflow-hidden">
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-50">
              <div className="animate-pulse">
                <Bot className="h-10 w-10 text-slate-200" />
              </div>
            </div>
          )}
          
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={title}
              className={cn(
                "w-full h-full object-cover agent-card-image",
                !isLoaded && "opacity-0"
              )}
              onLoad={handleImageLoad}
            />
          ) : (
            <div className={cn(
              "w-full h-full flex items-center justify-center agent-card-image",
              `bg-gradient-to-br ${colorMap[color]}`,
            )}>
              <Bot className="h-12 w-12 text-white" />
            </div>
          )}
          
          {(isFeatured || isNew) && (
            <div className="absolute top-3 right-3 flex gap-2">
              {isFeatured && (
                <Badge className="bg-yellow-500/90 text-white border-none flex items-center gap-1 animate-float">
                  <Star className="h-3 w-3" />
                  <span>Featured</span>
                </Badge>
              )}
              {isNew && (
                <Badge className="bg-primary/90 text-white border-none flex items-center gap-1 animate-pulse">
                  <Sparkles className="h-3 w-3" />
                  <span>New</span>
                </Badge>
              )}
            </div>
          )}
        </div>
        
        <CardContent className="p-4">
          <div className="space-y-2">
            <Badge variant="outline" className="bg-slate-50 text-slate-600 border-slate-100">
              {category}
            </Badge>
            <h3 className="font-medium text-lg leading-tight text-balance">{title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          </div>
        </CardContent>
        
        <CardFooter className="p-4 pt-0 text-xs text-muted-foreground">
          <div className="flex items-center gap-1 opacity-70">
            <Bot className="h-3 w-3" />
            <span>AI Agent</span>
          </div>
        </CardFooter>
      </Card>
    </a>
  );
};

export default AgentCard;
