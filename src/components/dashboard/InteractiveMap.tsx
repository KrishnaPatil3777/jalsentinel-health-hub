import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const stateData = {
  'Assam': { color: '#ef4444', cases: 245, level: 'critical' },
  'Manipur': { color: '#ef4444', cases: 189, level: 'critical' },
  'Meghalaya': { color: '#60a5fa', cases: 67, level: 'moderate' },
  'Tripura': { color: '#3b82f6', cases: 45, level: 'low' },
  'Nagaland': { color: '#93c5fd', cases: 34, level: 'low' },
  'Mizoram': { color: '#60a5fa', cases: 52, level: 'moderate' },
  'Arunachal Pradesh': { color: '#93c5fd', cases: 38, level: 'low' },
};

const InteractiveMap = () => {
  const [selectedState, setSelectedState] = useState<string>('All States');
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-foreground">Water-Borne Disease Cases</h2>
        <Select value={selectedState} onValueChange={setSelectedState}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="By State" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All States">All States</SelectItem>
            {Object.keys(stateData).map((state) => (
              <SelectItem key={state} value={state}>{state}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="relative bg-card rounded-lg p-8 border border-border">
        <svg viewBox="0 0 800 600" className="w-full h-auto">
          {/* Assam */}
          <path
            d="M 350 250 L 450 240 L 480 270 L 460 310 L 420 320 L 380 300 Z"
            fill={selectedState === 'All States' || selectedState === 'Assam' ? stateData['Assam'].color : '#e5e7eb'}
            stroke="white"
            strokeWidth="2"
            className="transition-all duration-300 cursor-pointer hover:opacity-80"
            onMouseEnter={() => setHoveredState('Assam')}
            onMouseLeave={() => setHoveredState(null)}
          />
          
          {/* Manipur */}
          <path
            d="M 480 330 L 520 320 L 540 360 L 520 390 L 480 380 Z"
            fill={selectedState === 'All States' || selectedState === 'Manipur' ? stateData['Manipur'].color : '#e5e7eb'}
            stroke="white"
            strokeWidth="2"
            className="transition-all duration-300 cursor-pointer hover:opacity-80"
            onMouseEnter={() => setHoveredState('Manipur')}
            onMouseLeave={() => setHoveredState(null)}
          />
          
          {/* Meghalaya */}
          <path
            d="M 320 320 L 380 310 L 400 350 L 360 370 L 310 360 Z"
            fill={selectedState === 'All States' || selectedState === 'Meghalaya' ? stateData['Meghalaya'].color : '#e5e7eb'}
            stroke="white"
            strokeWidth="2"
            className="transition-all duration-300 cursor-pointer hover:opacity-80"
            onMouseEnter={() => setHoveredState('Meghalaya')}
            onMouseLeave={() => setHoveredState(null)}
          />
          
          {/* Tripura */}
          <path
            d="M 420 380 L 460 370 L 470 410 L 440 430 L 410 420 Z"
            fill={selectedState === 'All States' || selectedState === 'Tripura' ? stateData['Tripura'].color : '#e5e7eb'}
            stroke="white"
            strokeWidth="2"
            className="transition-all duration-300 cursor-pointer hover:opacity-80"
            onMouseEnter={() => setHoveredState('Tripura')}
            onMouseLeave={() => setHoveredState(null)}
          />
          
          {/* Nagaland */}
          <path
            d="M 490 240 L 550 230 L 570 270 L 540 300 L 500 290 Z"
            fill={selectedState === 'All States' || selectedState === 'Nagaland' ? stateData['Nagaland'].color : '#e5e7eb'}
            stroke="white"
            strokeWidth="2"
            className="transition-all duration-300 cursor-pointer hover:opacity-80"
            onMouseEnter={() => setHoveredState('Nagaland')}
            onMouseLeave={() => setHoveredState(null)}
          />
          
          {/* Mizoram */}
          <path
            d="M 470 410 L 510 400 L 520 450 L 490 470 L 460 460 Z"
            fill={selectedState === 'All States' || selectedState === 'Mizoram' ? stateData['Mizoram'].color : '#e5e7eb'}
            stroke="white"
            strokeWidth="2"
            className="transition-all duration-300 cursor-pointer hover:opacity-80"
            onMouseEnter={() => setHoveredState('Mizoram')}
            onMouseLeave={() => setHoveredState(null)}
          />
          
          {/* Arunachal Pradesh */}
          <path
            d="M 400 150 L 500 140 L 550 180 L 520 220 L 460 230 L 420 200 Z"
            fill={selectedState === 'All States' || selectedState === 'Arunachal Pradesh' ? stateData['Arunachal Pradesh'].color : '#e5e7eb'}
            stroke="white"
            strokeWidth="2"
            className="transition-all duration-300 cursor-pointer hover:opacity-80"
            onMouseEnter={() => setHoveredState('Arunachal Pradesh')}
            onMouseLeave={() => setHoveredState(null)}
          />
        </svg>

        {hoveredState && (
          <div className="absolute top-4 right-4 bg-card border border-border rounded-lg p-4 shadow-lg animate-fade-in">
            <h4 className="font-semibold text-foreground">{hoveredState}</h4>
            <p className="text-sm text-muted-foreground">Cases: {stateData[hoveredState as keyof typeof stateData].cases}</p>
            <p className="text-sm text-muted-foreground capitalize">Level: {stateData[hoveredState as keyof typeof stateData].level}</p>
          </div>
        )}
      </div>

      <div className="flex items-center gap-4 justify-center flex-wrap">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: '#93c5fd' }}></div>
          <span className="text-sm text-muted-foreground">Low Risk</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: '#60a5fa' }}></div>
          <span className="text-sm text-muted-foreground">Moderate Risk</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: '#3b82f6' }}></div>
          <span className="text-sm text-muted-foreground">High Risk</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: '#ef4444' }}></div>
          <span className="text-sm text-muted-foreground">Critical Risk</span>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
