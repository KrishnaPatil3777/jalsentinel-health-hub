import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';

// Default Tableau Public dashboard URL (example)
const DEFAULT_TABLEAU_URL = 'https://public.tableau.com/views/WaterQualityDashboard/Dashboard1?:showVizHome=no&:embed=true';

const HeatmapComponent = () => {
  const [tableauUrl, setTableauUrl] = useState(DEFAULT_TABLEAU_URL);
  const [customUrl, setCustomUrl] = useState('');
  const [showUrlInput, setShowUrlInput] = useState(false);

  const handleUpdateUrl = () => {
    if (customUrl.trim()) {
      setTableauUrl(customUrl);
      setShowUrlInput(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Live Tableau Dashboard - Interactive water quality analytics
        </p>
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => setShowUrlInput(!showUrlInput)}
        >
          {showUrlInput ? 'Cancel' : 'Change Dashboard URL'}
        </Button>
      </div>

      {showUrlInput && (
        <Card className="p-4 space-y-3 bg-muted/30">
          <div className="space-y-2">
            <Label htmlFor="tableau-url">Tableau Dashboard URL</Label>
            <Input
              id="tableau-url"
              type="text"
              placeholder="https://public.tableau.com/views/..."
              value={customUrl}
              onChange={(e) => setCustomUrl(e.target.value)}
              className="font-mono text-sm"
            />
            <p className="text-xs text-muted-foreground">
              Enter your Tableau Public or Tableau Server embed URL. 
              Make sure to include ?:embed=true parameter.
            </p>
          </div>
          <Button onClick={handleUpdateUrl} disabled={!customUrl.trim()} className="w-full">
            Update Dashboard
          </Button>
        </Card>
      )}
      
      <div className="w-full h-[600px] rounded-lg shadow-lg overflow-hidden border border-border bg-card">
        <iframe
          src={tableauUrl}
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          className="w-full h-full"
          title="Tableau Water Quality Dashboard"
        />
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <div className="w-12 h-12 rounded-full mx-auto mb-2" style={{ backgroundColor: '#22c55e' }}></div>
          <p className="text-sm font-medium">Safe</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 rounded-full mx-auto mb-2" style={{ backgroundColor: '#eab308' }}></div>
          <p className="text-sm font-medium">Moderate</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 rounded-full mx-auto mb-2" style={{ backgroundColor: '#f97316' }}></div>
          <p className="text-sm font-medium">Warning</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 rounded-full mx-auto mb-2" style={{ backgroundColor: '#ef4444' }}></div>
          <p className="text-sm font-medium">Critical</p>
        </div>
      </div>
    </div>
  );
};

export default HeatmapComponent;