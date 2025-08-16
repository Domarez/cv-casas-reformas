import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Settings } from "lucide-react";
import AOS from 'aos';

interface AnimationSettings {
  duration: number;
  enabled: boolean;
  easing: string;
}

const AnimationControls = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AnimationSettings>({
    duration: 1000,
    enabled: true,
    easing: 'ease-in-out'
  });

  useEffect(() => {
    const saved = localStorage.getItem('animationSettings');
    if (saved) {
      const parsed = JSON.parse(saved);
      setSettings(parsed);
      updateAOS(parsed);
    }
  }, []);

  const updateAOS = (newSettings: AnimationSettings) => {
    if (newSettings.enabled) {
      AOS.init({
        duration: newSettings.duration,
        once: true,
        offset: 100,
        easing: newSettings.easing,
      });
    } else {
      AOS.init({
        duration: 0,
        disable: true,
      });
    }
    AOS.refresh();
  };

  const handleSettingChange = (key: keyof AnimationSettings, value: any) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    localStorage.setItem('animationSettings', JSON.stringify(newSettings));
    updateAOS(newSettings);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <Card className="mb-4 p-6 w-80 shadow-elegant bg-card/95 backdrop-blur">
          <h3 className="text-lg font-semibold mb-4 text-foreground">
            Controles de Animación
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-foreground">
                Animaciones habilitadas
              </label>
              <Switch
                checked={settings.enabled}
                onCheckedChange={(checked) => handleSettingChange('enabled', checked)}
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Velocidad: {settings.duration}ms
              </label>
              <Slider
                value={[settings.duration]}
                onValueChange={(value) => handleSettingChange('duration', value[0])}
                min={200}
                max={3000}
                step={100}
                className="w-full"
                disabled={!settings.enabled}
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Tipo de animación
              </label>
              <select
                value={settings.easing}
                onChange={(e) => handleSettingChange('easing', e.target.value)}
                className="w-full p-2 border rounded-md bg-background text-foreground"
                disabled={!settings.enabled}
              >
                <option value="ease">Ease</option>
                <option value="ease-in">Ease In</option>
                <option value="ease-out">Ease Out</option>
                <option value="ease-in-out">Ease In Out</option>
                <option value="linear">Linear</option>
                <option value="ease-in-back">Ease In Back</option>
                <option value="ease-out-back">Ease Out Back</option>
              </select>
            </div>
          </div>
        </Card>
      )}
      
      <Button
        variant="cta"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full p-3 shadow-accent"
      >
        <Settings className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default AnimationControls;