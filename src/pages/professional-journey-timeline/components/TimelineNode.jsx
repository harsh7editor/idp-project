import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TimelineNode = ({ item, index, isLast }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getTypeIcon = (type) => {
    switch (type) {
      case 'education': return 'GraduationCap';
      case 'work': return 'Briefcase';
      case 'project': return 'Code2';
      case 'certification': return 'Award';
      default: return 'Circle';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'education': return 'bg-blue-500';
      case 'work': return 'bg-green-500';
      case 'project': return 'bg-purple-500';
      case 'certification': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  const formatDate = (date) => {
    return new Date(date)?.toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div className="relative flex items-start group">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-6 top-16 w-0.5 h-full bg-border group-hover:bg-brand-accent transition-colors duration-300"></div>
      )}
      {/* Timeline Node */}
      <div className={`relative z-10 w-12 h-12 rounded-full ${getTypeColor(item?.type)} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        <Icon name={getTypeIcon(item?.type)} size={20} color="white" />
      </div>
      {/* Content Card */}
      <div className="ml-6 flex-1 bg-card border border-border rounded-lg shadow-micro hover:shadow-lift transition-all duration-300 micro-lift">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  item?.type === 'education' ? 'bg-blue-100 text-blue-800' :
                  item?.type === 'work' ? 'bg-green-100 text-green-800' :
                  item?.type === 'project'? 'bg-purple-100 text-purple-800' : 'bg-orange-100 text-orange-800'
                }`}>
                  {item?.type?.charAt(0)?.toUpperCase() + item?.type?.slice(1)}
                </span>
                <span className="text-sm text-text-muted">
                  {formatDate(item?.startDate)} - {item?.endDate ? formatDate(item?.endDate) : 'Present'}
                </span>
              </div>
              <h3 className="text-xl font-headline text-text-primary mb-1">{item?.title}</h3>
              <p className="text-brand-accent font-medium">{item?.organization}</p>
              {item?.location && (
                <p className="text-sm text-text-muted flex items-center mt-1">
                  <Icon name="MapPin" size={14} className="mr-1" />
                  {item?.location}
                </p>
              )}
            </div>
            {item?.logo && (
              <div className="w-16 h-16 bg-surface rounded-lg flex items-center justify-center ml-4">
                <Image 
                  src={item?.logo} 
                  alt={`${item?.organization} logo`}
                  className="w-12 h-12 object-contain"
                />
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-text-secondary mb-4 leading-relaxed">{item?.description}</p>

          {/* Key Highlights */}
          {item?.highlights && item?.highlights?.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-medium text-text-primary mb-2">Key Highlights</h4>
              <ul className="space-y-1">
                {item?.highlights?.slice(0, isExpanded ? undefined : 3)?.map((highlight, idx) => (
                  <li key={idx} className="flex items-start text-sm text-text-secondary">
                    <Icon name="CheckCircle" size={14} className="mr-2 mt-0.5 text-success flex-shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
              {item?.highlights?.length > 3 && !isExpanded && (
                <p className="text-sm text-text-muted mt-2">
                  +{item?.highlights?.length - 3} more highlights
                </p>
              )}
            </div>
          )}

          {/* Technologies */}
          {item?.technologies && item?.technologies?.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-medium text-text-primary mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {item?.technologies?.slice(0, isExpanded ? undefined : 6)?.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-surface text-text-secondary border border-border"
                  >
                    {tech}
                  </span>
                ))}
                {item?.technologies?.length > 6 && !isExpanded && (
                  <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-muted text-text-muted">
                    +{item?.technologies?.length - 6} more
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Achievements */}
          {item?.achievements && item?.achievements?.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-medium text-text-primary mb-2">Achievements</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {item?.achievements?.slice(0, isExpanded ? undefined : 4)?.map((achievement, idx) => (
                  <div key={idx} className="flex items-center space-x-2 p-2 bg-surface rounded-lg">
                    <Icon name="Trophy" size={16} className="text-orange-500 flex-shrink-0" />
                    <span className="text-sm text-text-secondary">{achievement}</span>
                  </div>
                ))}
              </div>
              {item?.achievements?.length > 4 && !isExpanded && (
                <p className="text-sm text-text-muted mt-2">
                  +{item?.achievements?.length - 4} more achievements
                </p>
              )}
            </div>
          )}

          {/* Expand/Collapse Button */}
          {((item?.highlights && item?.highlights?.length > 3) || 
            (item?.technologies && item?.technologies?.length > 6) || 
            (item?.achievements && item?.achievements?.length > 4)) && (
            <div className="pt-4 border-t border-border">
              <Button
                variant="ghost"
                size="sm"
                iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
                iconPosition="right"
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-brand-accent hover:text-brand-primary"
              >
                {isExpanded ? 'Show Less' : 'Show More'}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineNode;