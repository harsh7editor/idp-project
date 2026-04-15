import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import ProjectCard from './ProjectCard';

const MobileProjectCarousel = ({ projects, onViewDetails, onViewDemo, onViewCode }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const categories = [
    { id: 'all', label: 'All Projects', count: projects?.length },
    { id: 'Web App', label: 'Web Apps', count: projects?.filter(p => p?.type === 'Web App')?.length },
    { id: 'Mobile App', label: 'Mobile', count: projects?.filter(p => p?.type === 'Mobile App')?.length },
    { id: 'API', label: 'APIs', count: projects?.filter(p => p?.type === 'API')?.length }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects?.filter(project => project?.type === activeCategory);

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  const nextProject = () => {
    if (currentIndex < filteredProjects?.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevProject = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToProject = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="lg:hidden">
      {/* Category Tabs */}
      <div className="mb-6">
        <div className="flex overflow-x-auto pb-2 scrollbar-hide">
          <div className="flex space-x-2 px-4">
            {categories?.map((category) => (
              <button
                key={category?.id}
                onClick={() => setActiveCategory(category?.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category?.id
                    ? 'bg-blue-600 text-white' :'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category?.label}
                <span className="ml-2 text-xs opacity-75">
                  {category?.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
      {filteredProjects?.length > 0 ? (
        <>
          {/* Carousel Container */}
          <div className="relative px-4">
            <div 
              ref={carouselRef}
              className="overflow-hidden"
            >
              <motion.div
                className="flex transition-transform duration-300 ease-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`
                }}
              >
                {filteredProjects?.map((project, index) => (
                  <div key={project?.id} className="w-full flex-shrink-0 pr-4">
                    <ProjectCard
                      project={project}
                      onViewDetails={onViewDetails}
                      onViewDemo={onViewDemo}
                      onViewCode={onViewCode}
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Arrows */}
            {filteredProjects?.length > 1 && (
              <>
                <button
                  onClick={prevProject}
                  disabled={currentIndex === 0}
                  className={`absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    currentIndex === 0
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed' :'bg-white text-gray-700 shadow-lg hover:shadow-xl'
                  }`}
                >
                  <Icon name="ChevronLeft" size={20} />
                </button>

                <button
                  onClick={nextProject}
                  disabled={currentIndex === filteredProjects?.length - 1}
                  className={`absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    currentIndex === filteredProjects?.length - 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed' :'bg-white text-gray-700 shadow-lg hover:shadow-xl'
                  }`}
                >
                  <Icon name="ChevronRight" size={20} />
                </button>
              </>
            )}
          </div>

          {/* Pagination Dots */}
          {filteredProjects?.length > 1 && (
            <div className="flex justify-center mt-6 space-x-2">
              {filteredProjects?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-blue-600 w-6' :'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Project Counter */}
          <div className="text-center mt-4 text-sm text-gray-500">
            {currentIndex + 1} of {filteredProjects?.length} projects
          </div>
        </>
      ) : (
        <div className="text-center py-16 px-4">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="FolderOpen" size={24} className="text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No projects in this category</h3>
          <p className="text-gray-600 text-sm">
            Try selecting a different category to see more projects.
          </p>
        </div>
      )}
    </div>
  );
};

export default MobileProjectCarousel;