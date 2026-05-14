import React from 'react';

interface GaugeProps {
  value: number;
  color?: string;
  showLabels?: boolean;
  min?: string;
  max?: string;
}

const Gauge: React.FC<GaugeProps> = ({ 
  value, 
  color = "#ef4d23", 
  showLabels = false, 
  min, 
  max 
}) => {
  const totalTicks = 40;
  const activeTicks = Math.round((value / 100) * totalTicks);
  const radius = 80;
  const centerX = 100;
  const centerY = 100;

  return (
    <div className="w-full max-w-[260px] mx-auto">
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        {/* Arc Ticks */}
        {Array.from({ length: totalTicks }).map((_, i) => {
          // Angle in radians: from PI (180 deg) to 2*PI (360 deg)
          const angle = Math.PI + (i / (totalTicks - 1)) * Math.PI;
          const x1 = centerX + (radius - 10) * Math.cos(angle);
          const y1 = centerY + (radius - 10) * Math.sin(angle);
          const x2 = centerX + radius * Math.cos(angle);
          const y2 = centerY + radius * Math.sin(angle);
          
          const isActive = i < activeTicks;

          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={isActive ? color : "#d4d4d8"}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          );
        })}
        
        {/* Center Text */}
        <text 
          x={centerX} 
          y={centerY + 5} 
          textAnchor="middle" 
          className="text-[22px] font-semibold fill-[#0b0f1a]"
        >
          {value}%
        </text>
      </svg>
      
      {showLabels && (
        <div className="flex justify-between mt-[-10px] px-2 text-[11px] text-neutral-500 font-medium">
          <span>{min}</span>
          <span>{max}</span>
        </div>
      )}
    </div>
  );
};

export default Gauge;
