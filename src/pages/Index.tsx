
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import PortalGrid from '@/components/PortalGrid';
import SparkCursor from '@/components/SparkCursor';

const Index = () => {
  // This effect helps create a smooth entrance animation
  useEffect(() => {
    document.body.classList.add('animate-fade-in');
    return () => {
      document.body.classList.remove('animate-fade-in');
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100">
      {/* Cursor effect moved to its own component */}
      <SparkCursor />
      
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8 inline-block animate-fade-in">
            <div className="px-3 py-1 backdrop-blur-md bg-white/5 border border-white/10 rounded-full text-blue-300 text-sm font-medium mb-4 inline-block">
              Discover the power of AI agents
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gradient mb-4 animate-slide-up">
            Your Personal AI Agent Hub
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-slide-up delay-75">
            All your AI assistants in one elegant, unified workspace. Simplify your workflow and boost productivity.
          </p>
        </div>
      </section>
      
      {/* Main Portal Grid */}
      <PortalGrid />
      
      {/* Footer */}
      <footer className="py-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} AI Agent Hub. Designed with precision and care.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
