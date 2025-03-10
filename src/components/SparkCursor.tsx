
import React, { useEffect, useState, useRef } from 'react';

interface Spark {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  life: number;
  maxLife: number;
  speedX: number;
  speedY: number;
}

const SparkCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [sparks, setSparks] = useState<Spark[]>([]);
  const [linkHovered, setLinkHovered] = useState(false);
  const animationFrameId = useRef<number | null>(null);
  const lastSparkTime = useRef<number>(0);

  // Spark colors
  const sparkColors = [
    '#9b87f5', // Primary Purple
    '#D946EF', // Magenta Pink
    '#F97316', // Bright Orange
    '#0EA5E9', // Ocean Blue
    '#33C3F0', // Sky Blue
    '#FEC6A1', // Soft Orange
    '#D6BCFA', // Light Purple
    '#E5DEFF', // Soft Purple
  ];

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);

      // Create new sparks (less frequently to avoid too many particles)
      const now = Date.now();
      if (now - lastSparkTime.current > 50) { // Only create sparks every 50ms
        createSparks(e.clientX, e.clientY, 2);
        lastSparkTime.current = now;
      }
    };

    const mouseLeave = () => {
      setHidden(true);
    };

    const mouseEnter = () => {
      setHidden(false);
    };

    const handleLinkHoverStart = () => setLinkHovered(true);
    const handleLinkHoverEnd = () => setLinkHovered(false);
    
    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseleave', mouseLeave);
    window.addEventListener('mouseenter', mouseEnter);
    
    const interactiveElements = document.querySelectorAll('a, button, .agent-card');
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleLinkHoverStart);
      element.addEventListener('mouseleave', handleLinkHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseleave', mouseLeave);
      window.removeEventListener('mouseenter', mouseEnter);
      
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleLinkHoverStart);
        element.removeEventListener('mouseleave', handleLinkHoverEnd);
      });
      
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  const createSparks = (x: number, y: number, count: number) => {
    const newSparks: Spark[] = [];
    
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 2 + 1;
      
      newSparks.push({
        id: Date.now() + i,
        x,
        y,
        size: Math.random() * 4 + 1,
        color: sparkColors[Math.floor(Math.random() * sparkColors.length)],
        life: 0,
        maxLife: Math.random() * 20 + 10,
        speedX: Math.cos(angle) * speed,
        speedY: Math.sin(angle) * speed,
      });
    }
    
    setSparks(prev => [...prev, ...newSparks]);
  };

  useEffect(() => {
    const updateSparks = () => {
      setSparks(prevSparks => 
        prevSparks
          .map(spark => ({
            ...spark,
            x: spark.x + spark.speedX,
            y: spark.y + spark.speedY,
            life: spark.life + 1,
            size: spark.size * (1 - spark.life / spark.maxLife),
          }))
          .filter(spark => spark.life < spark.maxLife)
      );
      
      animationFrameId.current = requestAnimationFrame(updateSparks);
    };
    
    animationFrameId.current = requestAnimationFrame(updateSparks);
    
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <>
      {/* Spark trail effect */}
      {sparks.map(spark => (
        <div
          key={spark.id}
          className="fixed pointer-events-none rounded-full transform -translate-x-1/2 -translate-y-1/2 z-[9999]"
          style={{
            left: `${spark.x}px`,
            top: `${spark.y}px`,
            width: `${spark.size}px`,
            height: `${spark.size}px`,
            backgroundColor: spark.color,
            opacity: 1 - spark.life / spark.maxLife,
          }}
        />
      ))}
      
      {/* Main cursor */}
      <div
        className={`cursor-spotlight ${linkHovered ? 'cursor-spotlight-hover' : ''} ${hidden ? 'opacity-0' : 'opacity-100'}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      
      {/* Cursor dot */}
      <div
        className={`cursor-dot ${hidden ? 'opacity-0' : 'opacity-100'}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  );
};

export default SparkCursor;
