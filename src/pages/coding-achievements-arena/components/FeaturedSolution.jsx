import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FeaturedSolution = ({ solutions }) => {
  const [selectedSolution, setSelectedSolution] = useState(0);

  const getDifficultyColor = (difficulty) => {
    const colors = {
      'Easy': 'text-success bg-success/10',
      'Medium': 'text-warning bg-warning/10',
      'Hard': 'text-error bg-error/10'
    };
    return colors?.[difficulty] || 'text-text-secondary bg-surface';
  };

  const getComplexityColor = (complexity) => {
    if (complexity?.includes('O(1)') || complexity?.includes('O(log')) return 'text-success';
    if (complexity?.includes('O(n)')) return 'text-warning';
    return 'text-error';
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Icon name="Code2" size={24} color="var(--color-brand-accent)" />
          <h2 className="text-xl font-headline text-text-primary">Featured Solutions</h2>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setSelectedSolution(Math.max(0, selectedSolution - 1))}
            disabled={selectedSolution === 0}
            className="p-2 rounded-lg bg-surface hover:bg-surface-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            <Icon name="ChevronLeft" size={16} />
          </button>
          <span className="text-sm text-text-secondary px-2">
            {selectedSolution + 1} / {solutions?.length}
          </span>
          <button
            onClick={() => setSelectedSolution(Math.min(solutions?.length - 1, selectedSolution + 1))}
            disabled={selectedSolution === solutions?.length - 1}
            className="p-2 rounded-lg bg-surface hover:bg-surface-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            <Icon name="ChevronRight" size={16} />
          </button>
        </div>
      </div>
      {solutions?.[selectedSolution] && (
        <div className="space-y-6">
          {/* Problem Header */}
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-headline text-text-primary mb-2">
                {solutions?.[selectedSolution]?.title}
              </h3>
              <div className="flex items-center space-x-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(solutions?.[selectedSolution]?.difficulty)}`}>
                  {solutions?.[selectedSolution]?.difficulty}
                </span>
                <span className="text-sm text-text-secondary">
                  {solutions?.[selectedSolution]?.platform}
                </span>
                <div className="flex items-center space-x-1">
                  <Icon name="ThumbsUp" size={14} color="var(--color-success)" />
                  <span className="text-sm text-success">{solutions?.[selectedSolution]?.upvotes}</span>
                </div>
              </div>
            </div>
            <a
              href={solutions?.[selectedSolution]?.problemUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-surface hover:bg-surface-hover transition-colors duration-200"
            >
              <Icon name="ExternalLink" size={16} color="var(--color-text-secondary)" />
            </a>
          </div>

          {/* Approach Explanation */}
          <div className="bg-surface rounded-lg p-4">
            <h4 className="font-medium text-text-primary mb-2">Approach</h4>
            <p className="text-sm text-text-secondary leading-relaxed">
              {solutions?.[selectedSolution]?.approach}
            </p>
          </div>

          {/* Code Solution */}
          <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Icon name="Code" size={16} color="#10b981" />
                <span className="text-sm text-green-400 font-code">
                  {solutions?.[selectedSolution]?.language}
                </span>
              </div>
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                <Icon name="Copy" size={16} />
              </button>
            </div>
            <pre className="text-sm text-gray-300 font-code overflow-x-auto">
              <code>{solutions?.[selectedSolution]?.code}</code>
            </pre>
          </div>

          {/* Complexity Analysis */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-surface rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Clock" size={16} color="var(--color-brand-accent)" />
                <span className="text-sm font-medium text-text-primary">Time Complexity</span>
              </div>
              <span className={`text-lg font-code ${getComplexityColor(solutions?.[selectedSolution]?.timeComplexity)}`}>
                {solutions?.[selectedSolution]?.timeComplexity}
              </span>
            </div>
            <div className="p-4 bg-surface rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="HardDrive" size={16} color="var(--color-brand-accent)" />
                <span className="text-sm font-medium text-text-primary">Space Complexity</span>
              </div>
              <span className={`text-lg font-code ${getComplexityColor(solutions?.[selectedSolution]?.spaceComplexity)}`}>
                {solutions?.[selectedSolution]?.spaceComplexity}
              </span>
            </div>
          </div>

          {/* Tags */}
          <div>
            <h4 className="text-sm font-medium text-text-primary mb-2">Tags</h4>
            <div className="flex flex-wrap gap-2">
              {solutions?.[selectedSolution]?.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-brand-accent/10 text-brand-accent text-xs rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedSolution;