import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Eye' },
    { id: 'technical', label: 'Technical Details', icon: 'Code' },
    { id: 'results', label: 'Results & Impact', icon: 'TrendingUp' },
    { id: 'gallery', label: 'Gallery', icon: 'Image' }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project?.gallery?.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project?.gallery?.length - 1 : prev - 1
    );
  };

  const renderOverviewTab = () => (
    <div className="space-y-6">
      {/* Project Header */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{project?.title}</h3>
        <p className="text-gray-600 leading-relaxed">{project?.fullDescription}</p>
      </div>

      {/* Problem Statement */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <Icon name="AlertCircle" size={20} className="text-orange-500" />
          Problem Statement
        </h4>
        <p className="text-gray-600 leading-relaxed">{project?.problemStatement}</p>
      </div>

      {/* Solution Approach */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <Icon name="Lightbulb" size={20} className="text-yellow-500" />
          Solution Approach
        </h4>
        <p className="text-gray-600 leading-relaxed">{project?.solutionApproach}</p>
      </div>

      {/* Key Features */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <Icon name="Star" size={20} className="text-blue-500" />
          Key Features
        </h4>
        <ul className="space-y-2">
          {project?.keyFeatures?.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const renderTechnicalTab = () => (
    <div className="space-y-6">
      {/* Architecture */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <Icon name="Layers" size={20} className="text-purple-500" />
          Architecture Overview
        </h4>
        <p className="text-gray-600 leading-relaxed mb-4">{project?.architecture}</p>
        
        {project?.architectureDiagram && (
          <div className="bg-gray-50 rounded-lg p-4">
            <Image
              src={project?.architectureDiagram}
              alt="Architecture Diagram"
              className="w-full h-auto rounded-lg"
            />
          </div>
        )}
      </div>

      {/* Tech Stack */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <Icon name="Wrench" size={20} className="text-blue-500" />
          Technology Stack
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {project?.techStack?.map((tech, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
              <span className="text-sm font-medium text-gray-700">{tech}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Code Snippets */}
      {project?.codeSnippets && (
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Icon name="Code2" size={20} className="text-green-500" />
            Code Highlights
          </h4>
          <div className="space-y-4">
            {project?.codeSnippets?.map((snippet, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">{snippet?.language}</span>
                  <span className="text-xs text-gray-500">{snippet?.description}</span>
                </div>
                <pre className="text-sm text-green-400 overflow-x-auto">
                  <code>{snippet?.code}</code>
                </pre>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Challenges */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <Icon name="Zap" size={20} className="text-red-500" />
          Technical Challenges
        </h4>
        <div className="space-y-3">
          {project?.challenges?.map((challenge, index) => (
            <div key={index} className="border-l-4 border-red-200 pl-4">
              <h5 className="font-medium text-gray-900">{challenge?.title}</h5>
              <p className="text-gray-600 text-sm mt-1">{challenge?.description}</p>
              <p className="text-green-600 text-sm mt-2">
                <strong>Solution:</strong> {challenge?.solution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderResultsTab = () => (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Icon name="BarChart3" size={20} className="text-blue-500" />
          Performance Metrics
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project?.metrics?.map((metric, index) => (
            <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg">
                  <Icon 
                    name={metric?.type === 'performance' ? 'Zap' : 
                          metric?.type === 'users' ? 'Users' :
                          metric?.type === 'revenue' ? 'DollarSign' : 'TrendingUp'} 
                    size={20} 
                    className="text-blue-600" 
                  />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{metric?.value}</div>
                  <div className="text-sm text-gray-600">{metric?.label}</div>
                  {metric?.improvement && (
                    <div className="text-xs text-green-600 font-medium">
                      +{metric?.improvement} improvement
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Before/After Comparison */}
      {project?.beforeAfter && (
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Icon name="GitCompare" size={20} className="text-green-500" />
            Before vs After
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h5 className="font-medium text-red-600">Before</h5>
              <ul className="space-y-2">
                {project?.beforeAfter?.before?.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Icon name="X" size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h5 className="font-medium text-green-600">After</h5>
              <ul className="space-y-2">
                {project?.beforeAfter?.after?.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* User Feedback */}
      {project?.testimonials && (
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Icon name="MessageSquare" size={20} className="text-purple-500" />
            User Feedback
          </h4>
          <div className="space-y-4">
            {project?.testimonials?.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-600 italic mb-3">"{testimonial?.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-medium text-sm">
                      {testimonial?.author?.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 text-sm">{testimonial?.author}</div>
                    <div className="text-gray-500 text-xs">{testimonial?.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderGalleryTab = () => (
    <div className="space-y-6">
      {/* Image Carousel */}
      {project?.gallery && project?.gallery?.length > 0 && (
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Icon name="Image" size={20} className="text-indigo-500" />
            Project Screenshots
          </h4>
          
          <div className="relative">
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={project?.gallery?.[currentImageIndex]}
                alt={`Screenshot ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            
            {project?.gallery?.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                >
                  <Icon name="ChevronLeft" size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                >
                  <Icon name="ChevronRight" size={20} />
                </button>
              </>
            )}
          </div>
          
          {/* Thumbnail Navigation */}
          {project?.gallery?.length > 1 && (
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
              {project?.gallery?.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentImageIndex 
                      ? 'border-blue-500' :'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Icon name="Folder" size={24} className="text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{project?.title}</h2>
                  <p className="text-sm text-gray-500">{project?.type} • {project?.timeline}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                {project?.demoUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project?.demoUrl, '_blank')}
                    iconName="ExternalLink"
                    iconPosition="left"
                  >
                    Live Demo
                  </Button>
                )}
                
                {project?.githubUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project?.githubUrl, '_blank')}
                    iconName="Github"
                    iconPosition="left"
                  >
                    Code
                  </Button>
                )}
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  iconName="X"
                />
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                {tabs?.map((tab) => (
                  <button
                    key={tab?.id}
                    onClick={() => setActiveTab(tab?.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab?.id
                        ? 'border-blue-500 text-blue-600' :'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Icon name={tab?.icon} size={16} />
                      {tab?.label}
                    </div>
                  </button>
                ))}
              </nav>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              {activeTab === 'overview' && renderOverviewTab()}
              {activeTab === 'technical' && renderTechnicalTab()}
              {activeTab === 'results' && renderResultsTab()}
              {activeTab === 'gallery' && renderGalleryTab()}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;