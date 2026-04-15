import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TimelineHeader = () => {
  return (
    <div className="text-center mb-12">
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-8">
        <div className="relative mb-6">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-brand-accent shadow-lift">
            <Image 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
              alt="Professional headshot"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-success rounded-full border-4 border-card flex items-center justify-center">
            <Icon name="CheckCircle" size={16} color="white" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-headline text-text-primary mb-4 kinetic-text">
          Professional Journey
        </h1>
        
        <p className="text-lg text-text-secondary max-w-2xl leading-relaxed kinetic-text">
          A comprehensive timeline showcasing career progression, skill development, and key milestones 
          that have shaped my professional growth in software development and technology leadership.
        </p>
      </div>

      {/* Journey Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="bg-card border border-border rounded-lg p-6 text-center micro-lift">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Icon name="Rocket" size={24} className="text-blue-600" />
          </div>
          <h3 className="text-lg font-headline text-text-primary mb-2">Career Growth</h3>
          <p className="text-sm text-text-secondary">
            From junior developer to technical lead, showcasing continuous learning and advancement
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 text-center micro-lift">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Icon name="Target" size={24} className="text-green-600" />
          </div>
          <h3 className="text-lg font-headline text-text-primary mb-2">Key Achievements</h3>
          <p className="text-sm text-text-secondary">
            Major milestones, successful projects, and recognition earned throughout the journey
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 text-center micro-lift">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Icon name="Brain" size={24} className="text-purple-600" />
          </div>
          <h3 className="text-lg font-headline text-text-primary mb-2">Skill Evolution</h3>
          <p className="text-sm text-text-secondary">
            Technology adoption, certification achievements, and expertise development over time
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimelineHeader;