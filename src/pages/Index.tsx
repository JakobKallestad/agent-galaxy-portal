
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import PortalGrid from '@/components/PortalGrid';

const Index = () => {
  // This effect helps create a smooth entrance animation
  useEffect(() => {
    document.body.classList.add('animate-fade-in');
    return () => {
      document.body.classList.remove('animate-fade-in');
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-blue-50/50">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8 inline-block animate-fade-in">
            <div className="px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-blue-600 text-sm font-medium mb-4 inline-block">
              Discover the power of AI agents
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-4 animate-slide-up">
            Your Personal AI Agent Hub
          </h1>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 animate-slide-up delay-75">
            All your AI assistants in one elegant, unified workspace. Simplify your workflow and boost productivity.
          </p>
        </div>
      </section>
      
      {/* Main Portal Grid */}
      <PortalGrid />
      
      {/* Footer */}
      <footer className="py-8 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} AI Agent Hub. Designed with precision and care.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
