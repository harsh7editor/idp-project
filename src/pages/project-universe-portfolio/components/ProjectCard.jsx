import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails, onViewDemo, onViewCode }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const getMetricIcon = (type) => {
    switch (type) {
      case 'performance': return 'Zap';
      case 'users': return 'Users';
      case 'revenue': return 'DollarSign';
      case 'conversion': return 'TrendingUp';
      default: return 'BarChart3';
    }
  };

  const getMetricColor = (type) => {
    switch (type) {
      case 'performance': return 'text-yellow-600';
      case 'users': return 'text-blue-600';
      case 'revenue': return 'text-green-600';
      case 'conversion': return 'text-purple-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
    >
      {/* Project Image */}
      <div className="relative h-48 bg-gray-100 overflow-hidden">
        <Image
          src={project?.image}
          alt={project?.title}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <Icon name="Image" size={32} className="text-gray-400" />
          </div>
        )}
        
        {/* Project Type Badge */}
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
            project?.type === 'Web App' ? 'bg-blue-100 text-blue-800' :
            project?.type === 'Mobile App' ? 'bg-green-100 text-green-800' :
            project?.type === 'API'? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'
          }`}>
            {project?.type}
          </span>
        </div>

        {/* Featured Badge */}
        {project?.featured && (
          <div className="absolute top-3 right-3">
            <div className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <Icon name="Star" size={12} />
              Featured
            </div>
          </div>
        )}
      </div>
      {/* Project Content */}
      <div className="p-6">
        {/* Title and Description */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {project?.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
            {project?.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project?.techStack?.slice(0, 4)?.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
              >
                {tech}
              </span>
            ))}
            {project?.techStack?.length > 4 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md">
                +{project?.techStack?.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Key Metrics */}
        {project?.metrics && project?.metrics?.length > 0 && (
          <div className="mb-4">
            <div className="grid grid-cols-2 gap-3">
              {project?.metrics?.slice(0, 2)?.map((metric, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Icon 
                    name={getMetricIcon(metric?.type)} 
                    size={16} 
                    className={getMetricColor(metric?.type)}
                  />
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      {metric?.value}
                    </div>
                    <div className="text-xs text-gray-500">
                      {metric?.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Project Meta */}
        <div className="mb-4 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Icon name="Calendar" size={12} />
              {project?.timeline}
            </div>
            <div className="flex items-center gap-1">
              <Icon name="Users" size={12} />
              {project?.teamSize} {project?.teamSize === 1 ? 'person' : 'people'}
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="User" size={12} />
            {project?.role}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button
            variant="default"
            size="sm"
            onClick={() => onViewDetails(project)}
            className="flex-1"
            iconName="Eye"
            iconPosition="left"
          >
            View Details
          </Button>
          
          {project?.demoUrl && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => onViewDemo(project?.demoUrl)}
              iconName="ExternalLink"
              iconPosition="left"
            >
              Demo
            </Button>
          )}
          
          {project?.githubUrl && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onViewCode(project?.githubUrl)}
              iconName="Github"
              iconSize={16}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;