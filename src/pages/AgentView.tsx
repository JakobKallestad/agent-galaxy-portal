
import React from 'react';
import { useParams } from 'react-router-dom';

const AgentView = () => {
  const { agentId } = useParams();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-gradient">Agent View: {agentId}</h1>
        <p className="text-gray-400">This is a placeholder for the agent view page.</p>
      </div>
    </div>
  );
};

export default AgentView;
