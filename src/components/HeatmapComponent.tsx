import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

// Northeastern states data with contamination levels
const northeastStatesData = [
  { name: 'Assam', coordinates: [92.9376, 26.2006], contamination: 75, cases: 142 },
  { name: 'Meghalaya', coordinates: [91.3662, 25.4670], contamination: 45, cases: 67 },
  { name: 'Manipur', coordinates: [93.9063, 24.6637], contamination: 62, cases: 89 },
  { name: 'Mizoram', coordinates: [92.9376, 23.1645], contamination: 38, cases: 45 },
  { name: 'Nagaland', coordinates: [94.5624, 26.1584], contamination: 55, cases: 78 },
  { name: 'Tripura', coordinates: [91.9882, 23.9408], contamination: 68, cases: 95 },
  { name: 'Arunachal Pradesh', coordinates: [94.7278, 28.2180], contamination: 42, cases: 52 },
  { name: 'Sikkim', coordinates: [88.5122, 27.5330], contamination: 35, cases: 38 },
];

const getColorForLevel = (level: number) => {
  if (level < 30) return '#22c55e'; // Safe - green
  if (level < 50) return '#eab308'; // Moderate - yellow
  if (level < 70) return '#f97316'; // Warning - orange
  return '#ef4444'; // Critical - red
};

const HeatmapComponent = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [isMapInitialized, setIsMapInitialized] = useState(false);

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [92.5, 26.0],
      zoom: 6,
      pitch: 45,
    });

    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    map.current.on('load', () => {
      // Add markers for each state
      northeastStatesData.forEach((state) => {
        const color = getColorForLevel(state.contamination);
        
        // Create marker element
        const el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundColor = color;
        el.style.width = '30px';
        el.style.height = '30px';
        el.style.borderRadius = '50%';
        el.style.border = '3px solid white';
        el.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)';
        el.style.cursor = 'pointer';

        // Create popup
        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
          `<div style="padding: 8px; font-family: Inter, sans-serif;">
            <h3 style="font-weight: 600; margin-bottom: 8px; color: #1e293b;">${state.name}</h3>
            <p style="margin: 4px 0; font-size: 14px;">Contamination Level: <strong>${state.contamination}%</strong></p>
            <p style="margin: 4px 0; font-size: 14px;">Disease Cases: <strong>${state.cases}</strong></p>
            <p style="margin: 4px 0; font-size: 14px;">Status: <strong style="color: ${color};">${
              state.contamination < 30 ? 'Safe' : 
              state.contamination < 50 ? 'Moderate' :
              state.contamination < 70 ? 'Warning' : 'Critical'
            }</strong></p>
          </div>`
        );

        new mapboxgl.Marker(el)
          .setLngLat(state.coordinates as [number, number])
          .setPopup(popup)
          .addTo(map.current!);
      });
    });

    setIsMapInitialized(true);
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="space-y-4">
      {!isMapInitialized ? (
        <div className="space-y-3 p-4 bg-muted/30 rounded-lg border border-border">
          <div className="space-y-2">
            <Label htmlFor="mapbox-token">Mapbox Public Token</Label>
            <Input
              id="mapbox-token"
              type="text"
              placeholder="Enter your Mapbox public token"
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              className="font-mono text-sm"
            />
            <p className="text-xs text-muted-foreground">
              Get your token from{' '}
              <a
                href="https://mapbox.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                mapbox.com
              </a>
            </p>
          </div>
          <Button onClick={initializeMap} disabled={!mapboxToken} className="w-full">
            Initialize Map
          </Button>
        </div>
      ) : null}
      
      <div 
        ref={mapContainer} 
        className="w-full h-[500px] rounded-lg shadow-lg"
        style={{ display: isMapInitialized ? 'block' : 'none' }}
      />
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <div className="w-12 h-12 rounded-full mx-auto mb-2" style={{ backgroundColor: '#22c55e' }}></div>
          <p className="text-sm font-medium">Safe (&lt;30%)</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 rounded-full mx-auto mb-2" style={{ backgroundColor: '#eab308' }}></div>
          <p className="text-sm font-medium">Moderate (30-50%)</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 rounded-full mx-auto mb-2" style={{ backgroundColor: '#f97316' }}></div>
          <p className="text-sm font-medium">Warning (50-70%)</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 rounded-full mx-auto mb-2" style={{ backgroundColor: '#ef4444' }}></div>
          <p className="text-sm font-medium">Critical (&gt;70%)</p>
        </div>
      </div>
    </div>
  );
};

export default HeatmapComponent;