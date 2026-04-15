import React from 'react';
import Icon from '../../../components/AppIcon';

const FilterTabs = ({ activeFilter, onFilterChange, counts }) => {
  const filters = [
    { id: 'all', label: 'All', icon: 'List', count: counts?.all },
    { id: 'education', label: 'Education', icon: 'GraduationCap', count: counts?.education },
    { id: 'work', label: 'Work', icon: 'Briefcase', count: counts?.work },
    { id: 'project', label: 'Projects', icon: 'Code2', count: counts?.project },
    { id: 'certification', label: 'Certifications', icon: 'Award', count: counts?.certification }
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {filters?.map((filter) => (
        <button
          key={filter?.id}
          onClick={() => onFilterChange(filter?.id)}
          className={`
            flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300
            ${activeFilter === filter?.id
              ? 'bg-brand-accent text-white shadow-lift'
              : 'bg-surface text-text-secondary hover:bg-surface-hover hover:text-brand-primary'
            }
          `}
        >
          <Icon 
            name={filter?.icon} 
            size={16} 
            color={activeFilter === filter?.id ? 'white' : 'currentColor'} 
          />
          <span>{filter?.label}</span>
          <span className={`
            inline-flex items-center justify-center w-5 h-5 text-xs rounded-full
            ${activeFilter === filter?.id
              ? 'bg-white/20 text-white' :'bg-brand-accent/10 text-brand-accent'
            }
          `}>
            {filter?.count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;