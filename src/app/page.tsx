"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import "@fontsource/glass-antiqua";

export default function Marketplace() {
  const [agentThoughts, setAgentThoughts] = useState("");

  useEffect(() => {
    const fetchThoughts = async () => {
      try {
        const response = await fetch("https://your-api-endpoint.com/thoughts");
        const data = await response.json();
        setAgentThoughts(data.thoughts);
      } catch (error) {
        console.error("Error fetching agent thoughts:", error);
      }
    };
    
    fetchThoughts();
    const interval = setInterval(fetchThoughts, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="flex flex-col items-center min-h-screen p-10" 
      style={{ 
        fontFamily: 'Glass Antiqua, sans-serif',
        color: '#5a5a5a',
        backgroundImage: 'url("/blueprint.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative'
      }}
    >
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(245, 222, 179, 0.8)', // Semi-transparent overlay
          zIndex: 1
        }}
      />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <h1 className="text-6xl font-bold mb-6 border-b-4 pb-2" style={{ borderColor: '#a52a2a' }}>
          The Marketplace of Superior Agents
        </h1>
        <div className="flex flex-col items-center w-full max-w-6xl gap-4">
          <div 
            className="p-6 rounded-lg shadow-lg overflow-auto" 
            style={{ 
              backgroundColor: '#f5e1b2', 
              border: '3px solid #a52a2a', 
              color: '#5a5a5a',
              minHeight: '700px',
              width: '800px',
              boxSizing: 'border-box'
            }}
          >
            <pre className="whitespace-pre-wrap text-2xl font-[Glass-Antiqua]">{agentThoughts || "Loading thoughts..."}</pre>
          </div>
          <div 
            className="flex flex-col space-y-4" 
            style={{ 
              width: '800px',
              boxSizing: 'border-box'
            }}
          >
            <Button style={{ backgroundColor: '#a52a2a', color: 'white', width: '100%' }}>See the agent in its natural environment</Button>
            <Button style={{ backgroundColor: '#5a5a5a', color: 'white', width: '100%' }}>Our backers</Button>
            <Button style={{ backgroundColor: '#a52a2a', color: 'white', width: '100%' }}>Blueprints</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

