import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from '@/lib/utils';
import { 
  Bot, Sparkles, Star, Search, Code, PenTool, 
  BarChart, Lightbulb, Clock, Languages, Scale, 
  Figma, Mail, CheckSquare, Heart
} from 'lucide-react';

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
  const [isHovered, setIsHovered] = useState(false);
  
  const colorMap = {
    blue: 'from-blue-500 to-blue-700',
    purple: 'from-purple-500 to-purple-700',
    green: 'from-green-500 to-green-700',
    orange: 'from-orange-500 to-orange-700',
    pink: 'from-pink-500 to-pink-700',
  };
  
  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const getIconForCategory = () => {
    switch(category.toLowerCase()) {
      case 'research':
      case 'productivity':
        return { icon: <Search className="h-12 w-12 text-white" />, bgClass: 'icon-bg-productivity' };
      case 'development':
      case 'code':
        return { icon: <Code className="h-12 w-12 text-white" />, bgClass: 'icon-bg-code' };
      case 'writing':
      case 'content':
        return { icon: <PenTool className="h-12 w-12 text-white" />, bgClass: 'icon-bg-writing' };
      case 'analytics':
      case 'data':
        return { icon: <BarChart className="h-12 w-12 text-white" />, bgClass: 'icon-bg-analytics' };
      case 'creativity':
        return { icon: <Lightbulb className="h-12 w-12 text-white" />, bgClass: 'icon-bg-creativity' };
      case 'time':
      case 'meetings':
        return { icon: <Clock className="h-12 w-12 text-white" />, bgClass: 'icon-bg-productivity' };
      case 'language':
      case 'translation':
        return { icon: <Languages className="h-12 w-12 text-white" />, bgClass: 'icon-bg-language' };
      case 'legal':
        return { icon: <Scale className="h-12 w-12 text-white" />, bgClass: 'icon-bg-legal' };
      case 'design':
        return { icon: <Figma className="h-12 w-12 text-white" />, bgClass: 'icon-bg-design' };
      case 'communication':
      case 'email':
        return { icon: <Mail className="h-12 w-12 text-white" />, bgClass: 'icon-bg-communication' };
      case 'task':
      case 'management':
        return { icon: <CheckSquare className="h-12 w-12 text-white" />, bgClass: 'icon-bg-task' };
      case 'health':
      case 'fitness':
        return { icon: <Heart className="h-12 w-12 text-white" />, bgClass: 'icon-bg-health' };
      default:
        return { icon: <Bot className="h-12 w-12 text-white" />, bgClass: `bg-gradient-to-br ${colorMap[color]}` };
    }
  };

  const { icon, bgClass } = getIconForCategory();

  return (
    <Link 
      to={`/agent/${id}`} 
      className="block group agent-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className={cn(
        "overflow-hidden transition-all duration-300 ease-in-out h-full relative",
        "border-white/10 bg-black/40 backdrop-blur-sm",
        isHovered ? "transform scale-105 shadow-[0_0_25px_rgba(147,51,234,0.5)] border-purple-500/40" : "hover:shadow-lg hover:shadow-primary/20 hover:border-primary/20",
        "glow-animation"
      )}>
        <div className="agent-card-shine" />
        
        {isHovered && (
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 z-0"></div>
        )}
        
        <div className="aspect-[4/3] relative overflow-hidden">
          {!isLoaded && imageUrl && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/60">
              <div className="animate-pulse">
                <Bot className="h-10 w-10 text-gray-400" />
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
              bgClass,
              "float-animation"
            )}>
              {icon}
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
        
        <CardContent className="p-4 relative z-10">
          <div className="space-y-2">
            <Badge variant="outline" className="bg-white/5 text-gray-300 border-white/10">
              {category}
            </Badge>
            <h3 className="font-medium text-lg leading-tight text-balance text-white">{title}</h3>
            <p className="text-sm text-gray-400 line-clamp-2">{description}</p>
          </div>
        </CardContent>
        
        <CardFooter className="p-4 pt-0 text-xs text-gray-500 relative z-10">
          <div className="flex items-center gap-1 opacity-70">
            <Bot className="h-3 w-3" />
            <span>AI Agent</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default AgentCard;
