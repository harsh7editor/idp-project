import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const FilterBar = ({ 
  searchTerm, 
  onSearchChange, 
  selectedFilters, 
  onFilterChange, 
  onClearFilters,
  projectCounts 
}) => {
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const techSuggestions = [
    'React', 'Node.js', 'Python', 'TypeScript', 'JavaScript', 'Vue.js', 'Angular',
    'Express.js', 'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Docker', 'AWS',
    'Firebase', 'Next.js', 'Tailwind CSS', 'GraphQL', 'REST API', 'Socket.io'
  ];

  const filterCategories = [
    {
      key: 'type',
      label: 'Project Type',
      options: ['Web App', 'Mobile App', 'API', 'Desktop App', 'Library']
    },
    {
      key: 'industry',
      label: 'Industry',
      options: ['E-commerce', 'Healthcare', 'Finance', 'Education', 'Entertainment', 'SaaS']
    },
    {
      key: 'complexity',
      label: 'Complexity',
      options: ['Simple', 'Medium', 'Complex', 'Enterprise']
    }
  ];

  const handleSearchInput = (value) => {
    onSearchChange(value);
    
    if (value?.length > 0) {
      const suggestions = techSuggestions?.filter(tech =>
        tech?.toLowerCase()?.includes(value?.toLowerCase())
      )?.slice(0, 5);
      setSearchSuggestions(suggestions);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    onSearchChange(suggestion);
    setShowSuggestions(false);
  };

  const toggleFilter = (category, value) => {
    const currentFilters = selectedFilters?.[category] || [];
    const newFilters = currentFilters?.includes(value)
      ? currentFilters?.filter(f => f !== value)
      : [...currentFilters, value];
    
    onFilterChange(category, newFilters);
  };

  const getActiveFilterCount = () => {
    return Object.values(selectedFilters)?.reduce((count, filters) => count + filters?.length, 0);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
      {/* Search Bar */}
      <div className="relative mb-6">
        <div className="relative">
          <Input
            type="search"
            placeholder="Search projects by name, technology, or keyword..."
            value={searchTerm}
            onChange={(e) => handleSearchInput(e?.target?.value)}
            className="pl-10 pr-4"
          />
          <Icon 
            name="Search" 
            size={20} 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        </div>

        {/* Search Suggestions */}
        <AnimatePresence>
          {showSuggestions && searchSuggestions?.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-10 mt-1"
            >
              {searchSuggestions?.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="w-full text-left px-4 py-2 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Icon name="Hash" size={14} className="text-gray-400" />
                    <span className="text-sm text-gray-700">{suggestion}</span>
                  </div>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* Quick Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className="text-sm font-medium text-gray-700">Quick Filters:</span>
        
        {['React', 'Node.js', 'Python', 'TypeScript']?.map((tech) => (
          <button
            key={tech}
            onClick={() => handleSearchInput(tech)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              searchTerm === tech
                ? 'bg-blue-100 text-blue-800 border border-blue-200' :'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {tech}
          </button>
        ))}
      </div>
      {/* Filter Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
            iconName={showAdvancedFilters ? "ChevronUp" : "ChevronDown"}
            iconPosition="right"
          >
            Advanced Filters
            {getActiveFilterCount() > 0 && (
              <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">
                {getActiveFilterCount()}
              </span>
            )}
          </Button>

          {getActiveFilterCount() > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearFilters}
              iconName="X"
              iconPosition="left"
            >
              Clear All
            </Button>
          )}
        </div>

        <div className="text-sm text-gray-500">
          {projectCounts?.total} projects
          {projectCounts?.filtered !== projectCounts?.total && (
            <span className="ml-1">
              ({projectCounts?.filtered} filtered)
            </span>
          )}
        </div>
      </div>
      {/* Advanced Filters */}
      <AnimatePresence>
        {showAdvancedFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-6 pt-6 border-t border-gray-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filterCategories?.map((category) => (
                <div key={category?.key}>
                  <h4 className="text-sm font-medium text-gray-900 mb-3">
                    {category?.label}
                  </h4>
                  <div className="space-y-2">
                    {category?.options?.map((option) => (
                      <label
                        key={option}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={(selectedFilters?.[category?.key] || [])?.includes(option)}
                          onChange={() => toggleFilter(category?.key, option)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FilterBar;