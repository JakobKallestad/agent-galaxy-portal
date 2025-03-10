
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

const AgentView = () => {
  const { appId } = useParams();
  
  // This component only serves as a redirect point - all actual content
  // will be served by your nginx proxy to different applications
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-gradient">Redirecting to App {appId}...</h1>
        <p className="text-gray-400">You'll be redirected to the application shortly.</p>
      </div>
    </div>
  );
};

export default AgentView;
