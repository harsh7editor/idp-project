import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import ThemeToggle, { CompactThemeToggle, SmartThemeToggle } from '../components/ui/ThemeToggle';
import Button from '../components/ui/Button';
import Icon from '../components/AppIcon';

const DarkModeDemo = () => {
  const { theme, isDark, isLight } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Dark Mode Demo
          </h1>
          <p className="text-xl text-muted-foreground">
            Experience the seamless transition between light and dark themes
          </p>
        </div>

        {/* Theme Toggle Showcase */}
        <div className="bg-card border border-border rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-card-foreground mb-6">
            Theme Toggle Components
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Default Toggle */}
            <div className="text-center">
              <h3 className="text-lg font-medium text-card-foreground mb-4">Default Toggle</h3>
              <ThemeToggle variant="default" size="md" />
            </div>

            {/* Compact Toggle */}
            <div className="text-center">
              <h3 className="text-lg font-medium text-card-foreground mb-4">Compact Toggle</h3>
              <CompactThemeToggle />
            </div>

            {/* Smart Toggle */}
            <div className="text-center">
              <h3 className="text-lg font-medium text-card-foreground mb-4">Smart Toggle</h3>
              <SmartThemeToggle />
            </div>
          </div>
        </div>

        {/* Current Theme Status */}
        <div className="bg-card border border-border rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-card-foreground mb-6">
            Current Theme Status
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-accent rounded-lg">
              <Icon 
                name={isDark ? "Moon" : "Sun"} 
                size={32} 
                className="mx-auto mb-2 text-primary" 
              />
              <p className="text-sm font-medium text-accent-foreground">
                Current Theme: <span className="font-bold">{theme}</span>
              </p>
            </div>
            
            <div className="text-center p-4 bg-accent rounded-lg">
              <Icon 
                name="Eye" 
                size={32} 
                className="mx-auto mb-2 text-primary" 
              />
              <p className="text-sm font-medium text-accent-foreground">
                Mode: <span className="font-bold">{isDark ? 'Dark' : 'Light'}</span>
              </p>
            </div>
            
            <div className="text-center p-4 bg-accent rounded-lg">
              <Icon 
                name="Palette" 
                size={32} 
                className="mx-auto mb-2 text-primary" 
              />
              <p className="text-sm font-medium text-accent-foreground">
                Status: <span className="font-bold">{isLight ? 'Light Active' : 'Dark Active'}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Color Palette Showcase */}
        <div className="bg-card border border-border rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-card-foreground mb-6">
            Color Palette
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-lg mx-auto mb-2"></div>
              <p className="text-sm text-muted-foreground">Primary</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-lg mx-auto mb-2"></div>
              <p className="text-sm text-muted-foreground">Secondary</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-lg mx-auto mb-2"></div>
              <p className="text-sm text-muted-foreground">Accent</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-muted rounded-lg mx-auto mb-2"></div>
              <p className="text-sm text-muted-foreground">Muted</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-success rounded-lg mx-auto mb-2"></div>
              <p className="text-sm text-muted-foreground">Success</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-warning rounded-lg mx-auto mb-2"></div>
              <p className="text-sm text-muted-foreground">Warning</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-error rounded-lg mx-auto mb-2"></div>
              <p className="text-sm text-muted-foreground">Error</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-destructive rounded-lg mx-auto mb-2"></div>
              <p className="text-sm text-muted-foreground">Destructive</p>
            </div>
          </div>
        </div>

        {/* Button Variants */}
        <div className="bg-card border border-border rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-card-foreground mb-6">
            Button Variants
          </h2>
          
          <div className="flex flex-wrap gap-4">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="error">Error</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </div>

        {/* Typography Showcase */}
        <div className="bg-card border border-border rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-card-foreground mb-6">
            Typography
          </h2>
          
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Heading 1</h1>
            <h2 className="text-3xl font-semibold text-foreground">Heading 2</h2>
            <h3 className="text-2xl font-medium text-foreground">Heading 3</h3>
            <p className="text-lg text-foreground">
              This is a paragraph with <strong className="text-primary">primary text</strong> and 
              <span className="text-muted-foreground"> muted text</span>.
            </p>
            <p className="text-sm text-muted-foreground">
              Small text for captions and secondary information.
            </p>
          </div>
        </div>

        {/* Back to Dashboard */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            iconName="ArrowLeft" 
            iconPosition="left"
            onClick={() => window.history.back()}
          >
            Back to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DarkModeDemo;

