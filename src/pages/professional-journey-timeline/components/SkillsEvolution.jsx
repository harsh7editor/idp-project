import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SkillsEvolution = ({ skillsData }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills', icon: 'Code2' },
    { id: 'frontend', label: 'Frontend', icon: 'Monitor' },
    { id: 'backend', label: 'Backend', icon: 'Server' },
    { id: 'database', label: 'Database', icon: 'Database' },
    { id: 'tools', label: 'Tools', icon: 'Wrench' },
    { id: 'cloud', label: 'Cloud', icon: 'Cloud' }
  ];

  const filteredSkills = selectedCategory === 'all' 
    ? skillsData 
    : skillsData?.filter(skill => skill?.category === selectedCategory);

  const getProficiencyColor = (level) => {
    switch (level) {
      case 'Expert': return 'bg-green-500';
      case 'Advanced': return 'bg-blue-500';
      case 'Intermediate': return 'bg-yellow-500';
      case 'Beginner': return 'bg-gray-500';
      default: return 'bg-gray-400';
    }
  };

  const getProficiencyWidth = (level) => {
    switch (level) {
      case 'Expert': return 'w-full';
      case 'Advanced': return 'w-4/5';
      case 'Intermediate': return 'w-3/5';
      case 'Beginner': return 'w-2/5';
      default: return 'w-1/5';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-micro">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-headline text-text-primary">Skills Evolution</h3>
        <Icon name="TrendingUp" size={20} className="text-brand-accent" />
      </div>
      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories?.map((category) => (
          <button
            key={category?.id}
            onClick={() => setSelectedCategory(category?.id)}
            className={`
              flex items-center space-x-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200
              ${selectedCategory === category?.id
                ? 'bg-brand-accent text-white' :'bg-surface text-text-secondary hover:bg-surface-hover'
              }
            `}
          >
            <Icon 
              name={category?.icon} 
              size={14} 
              color={selectedCategory === category?.id ? 'white' : 'currentColor'} 
            />
            <span>{category?.label}</span>
          </button>
        ))}
      </div>
      {/* Skills Grid */}
      <div className="space-y-4">
        {filteredSkills?.map((skill, index) => (
          <div key={index} className="group">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-surface rounded-lg flex items-center justify-center">
                  <Icon name="Code" size={16} className="text-brand-accent" />
                </div>
                <div>
                  <h4 className="font-medium text-text-primary">{skill?.name}</h4>
                  <p className="text-xs text-text-muted">
                    Started: {new Date(skill.startDate)?.getFullYear()}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className={`
                  inline-flex items-center px-2 py-1 rounded-full text-xs font-medium
                  ${skill?.proficiency === 'Expert' ? 'bg-green-100 text-green-800' :
                    skill?.proficiency === 'Advanced' ? 'bg-blue-100 text-blue-800' :
                    skill?.proficiency === 'Intermediate'? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
                  }
                `}>
                  {skill?.proficiency}
                </span>
                <p className="text-xs text-text-muted mt-1">
                  {skill?.yearsOfExperience} years
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-surface rounded-full h-2 mb-2">
              <div 
                className={`h-2 rounded-full transition-all duration-500 group-hover:opacity-80 ${getProficiencyColor(skill?.proficiency)} ${getProficiencyWidth(skill?.proficiency)}`}
              ></div>
            </div>

            {/* Milestones */}
            {skill?.milestones && skill?.milestones?.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {skill?.milestones?.map((milestone, idx) => (
                  <span 
                    key={idx}
                    className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-muted text-text-muted"
                  >
                    {milestone}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      {filteredSkills?.length === 0 && (
        <div className="text-center py-8">
          <Icon name="Search" size={48} className="text-text-muted mx-auto mb-4" />
          <p className="text-text-muted">No skills found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default SkillsEvolution;