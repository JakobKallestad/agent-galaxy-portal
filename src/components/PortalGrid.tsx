
import React, { useRef, useEffect } from 'react';
import AgentCard, { AgentCardProps } from './AgentCard';

// Sample data for agent cards with categories matching the icons
const sampleAgents: AgentCardProps[] = [
  {
    id: '1',
    title: 'Research Assistant',
    description: 'Helps you research topics, find information, and summarize articles',
    category: 'Research',
    isFeatured: true,
    color: 'blue'
  },
  {
    id: '2',
    title: 'Code Generator',
    description: 'Creates code snippets and helps you debug programming issues',
    category: 'Development',
    isNew: true,
    color: 'purple'
  },
  {
    id: '3',
    title: 'Content Writer',
    description: 'Creates engaging content for blogs, social media and marketing',
    category: 'Writing',
    color: 'green'
  },
  {
    id: '4',
    title: 'Data Analyzer',
    description: 'Analyzes data sets and generates insights and visualizations',
    category: 'Analytics',
    color: 'orange'
  },
  {
    id: '5',
    title: 'Creative Assistant',
    description: 'Helps with brainstorming, idea generation, and creative projects',
    category: 'Creativity',
    color: 'pink'
  },
  {
    id: '6',
    title: 'Meeting Summarizer',
    description: 'Takes notes and creates summaries of your meetings and calls',
    category: 'Meetings',
    isNew: true,
    color: 'blue'
  },
  {
    id: '7',
    title: 'Language Translator',
    description: 'Translates text between multiple languages with high accuracy',
    category: 'Language',
    color: 'green'
  },
  {
    id: '8',
    title: 'Legal Assistant',
    description: 'Provides information on legal topics and helps with document review',
    category: 'Legal',
    color: 'purple'
  },
  {
    id: '9',
    title: 'Design Helper',
    description: 'Assists with UI/UX design ideas and provides design feedback',
    category: 'Design',
    isFeatured: true,
    color: 'pink'
  },
  {
    id: '10',
    title: 'Email Composer',
    description: 'Drafts professional emails and replies based on your instructions',
    category: 'Communication',
    color: 'orange'
  },
  {
    id: '11',
    title: 'Task Manager',
    description: 'Helps you organize tasks, set priorities, and manage your time',
    category: 'Task',
    color: 'blue'
  },
  {
    id: '12',
    title: 'Fitness Coach',
    description: 'Creates workout plans and provides nutrition advice',
    category: 'Health',
    isNew: true,
    color: 'green'
  }
];

const PortalGrid = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            gridRef.current?.classList.add('stagger-animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => {
      if (gridRef.current) {
        observer.unobserve(gridRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center space-y-4">
          <div className="inline-block mb-2">
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded"></div>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl leading-tight text-gradient animate-fade-in">
            Your AI Agent Workspace
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto animate-slide-up delay-75">
            Access all your AI agents in one place, designed to enhance your productivity
          </p>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full opacity-20 animate-float"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                background: `hsl(${Math.random() * 360}, 70%, 60%)`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 5 + 5}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        <div 
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {sampleAgents.map((agent) => (
            <AgentCard key={agent.id} {...agent} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortalGrid;
