import React from 'react';
import Icon from '../../../components/AppIcon';

const PlatformCard = ({ platform }) => {
  const getPlatformIcon = (name) => {
    const icons = {
      'LeetCode': 'Code2',
      'HackerRank': 'Terminal',
      'Codeforces': 'Trophy',
      'CodeChef': 'Zap'
    };
    return icons?.[name] || 'Code';
  };

  const getPlatformColor = (name) => {
    const colors = {
      'LeetCode': 'from-orange-500 to-yellow-500',
      'HackerRank': 'from-green-500 to-emerald-500',
      'Codeforces': 'from-blue-500 to-indigo-500',
      'CodeChef': 'from-purple-500 to-pink-500'
    };
    return colors?.[name] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lift-hover transition-all duration-300 group">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`w-12 h-12 bg-gradient-to-br ${getPlatformColor(platform?.name)} rounded-lg flex items-center justify-center shadow-md`}>
            <Icon name={getPlatformIcon(platform?.name)} size={24} color="white" />
          </div>
          <div>
            <h3 className="text-lg font-headline text-text-primary">{platform?.name}</h3>
            <p className="text-sm text-text-secondary">@{platform?.username}</p>
          </div>
        </div>
        <a
          href={platform?.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg bg-surface hover:bg-surface-hover transition-colors duration-200"
        >
          <Icon name="ExternalLink" size={16} color="var(--color-text-secondary)" />
        </a>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-center">
          <div className="text-2xl font-headline text-brand-accent mb-1">
            {platform?.globalRank?.toLocaleString()}
          </div>
          <div className="text-xs text-text-secondary">Global Rank</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-headline text-success mb-1">
            {platform?.problemsSolved}
          </div>
          <div className="text-xs text-text-secondary">Problems Solved</div>
        </div>
      </div>
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center space-x-2">
          <div className={`w-2 h-2 rounded-full ${platform?.status === 'active' ? 'bg-success' : 'bg-warning'}`}></div>
          <span className="text-text-secondary capitalize">{platform?.status}</span>
        </div>
        <div className="text-text-secondary">
          Rating: <span className="text-brand-accent font-medium">{platform?.rating}</span>
        </div>
      </div>
      {platform?.recentAchievement && (
        <div className="mt-4 p-3 bg-surface rounded-lg border-l-4 border-success">
          <div className="flex items-center space-x-2">
            <Icon name="Award" size={16} color="var(--color-success)" />
            <span className="text-sm font-medium text-text-primary">Recent Achievement</span>
          </div>
          <p className="text-sm text-text-secondary mt-1">{platform?.recentAchievement}</p>
        </div>
      )}
    </div>
  );
};

export default PlatformCard;