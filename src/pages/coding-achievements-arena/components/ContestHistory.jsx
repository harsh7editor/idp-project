import React from 'react';
import Icon from '../../../components/AppIcon';

const ContestHistory = ({ contests }) => {
  const getRankColor = (rank) => {
    if (rank <= 10) return 'text-yellow-500';
    if (rank <= 50) return 'text-gray-400';
    if (rank <= 100) return 'text-orange-600';
    return 'text-text-secondary';
  };

  const getRankIcon = (rank) => {
    if (rank <= 3) return 'Crown';
    if (rank <= 10) return 'Medal';
    if (rank <= 50) return 'Award';
    return 'Trophy';
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Icon name="Calendar" size={24} color="var(--color-brand-accent)" />
          <h2 className="text-xl font-headline text-text-primary">Contest Participation</h2>
        </div>
        <div className="text-sm text-text-secondary">
          {contests?.length} contests participated
        </div>
      </div>
      <div className="space-y-4">
        {contests?.map((contest, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-surface rounded-lg hover:bg-surface-hover transition-colors duration-200">
            <div className="flex items-center space-x-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                contest?.rank <= 10 ? 'bg-yellow-100' : 
                contest?.rank <= 50 ? 'bg-gray-100' : 'bg-surface'
              }`}>
                <Icon 
                  name={getRankIcon(contest?.rank)} 
                  size={20} 
                  color={contest?.rank <= 10 ? '#eab308' : contest?.rank <= 50 ? '#6b7280' : 'var(--color-text-secondary)'} 
                />
              </div>
              <div>
                <h3 className="font-medium text-text-primary">{contest?.name}</h3>
                <div className="flex items-center space-x-4 text-sm text-text-secondary">
                  <span>{contest?.platform}</span>
                  <span>•</span>
                  <span>{contest?.date}</span>
                  <span>•</span>
                  <span>{contest?.participants?.toLocaleString()} participants</span>
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className={`text-lg font-headline ${getRankColor(contest?.rank)}`}>
                #{contest?.rank}
              </div>
              <div className="text-sm text-text-secondary">
                {contest?.problemsSolved}/{contest?.totalProblems} solved
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-center p-4 bg-surface rounded-lg">
          <div className="text-xl font-headline text-brand-accent mb-1">12</div>
          <div className="text-sm text-text-secondary">Top 10 Finishes</div>
        </div>
        <div className="text-center p-4 bg-surface rounded-lg">
          <div className="text-xl font-headline text-success mb-1">156</div>
          <div className="text-sm text-text-secondary">Total Contests</div>
        </div>
        <div className="text-center p-4 bg-surface rounded-lg">
          <div className="text-xl font-headline text-warning mb-1">2.3k</div>
          <div className="text-sm text-text-secondary">Avg Rank</div>
        </div>
      </div>
    </div>
  );
};

export default ContestHistory;