import React from 'react';
import Icon from '../../../components/AppIcon';

const CareerStats = ({ stats }) => {
  const statItems = [
    {
      icon: 'Calendar',
      label: 'Years of Experience',
      value: stats?.yearsOfExperience,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: 'Briefcase',
      label: 'Companies Worked',
      value: stats?.companiesWorked,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: 'Code2',
      label: 'Projects Completed',
      value: stats?.projectsCompleted,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: 'Award',
      label: 'Certifications',
      value: stats?.certifications,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      icon: 'Users',
      label: 'Team Members Led',
      value: stats?.teamMembersLed,
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      icon: 'TrendingUp',
      label: 'Technologies Mastered',
      value: stats?.technologiesMastered,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
      {statItems?.map((item, index) => (
        <div 
          key={index}
          className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-lift transition-all duration-300 micro-lift"
        >
          <div className={`w-12 h-12 ${item?.bgColor} rounded-lg flex items-center justify-center mx-auto mb-3`}>
            <Icon name={item?.icon} size={20} className={item?.color} />
          </div>
          <div className="text-2xl font-bold text-text-primary mb-1">
            {typeof item?.value === 'number' ? item?.value?.toLocaleString() : item?.value}
          </div>
          <div className="text-xs text-text-muted font-medium">
            {item?.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CareerStats;