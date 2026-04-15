import React from 'react';
import Icon from '../../../components/AppIcon';

const AchievementBadge = ({ achievement }) => {
  const getBadgeColor = (tier) => {
    const colors = {
      'legendary': 'from-yellow-400 via-yellow-500 to-orange-500',
      'epic': 'from-purple-500 via-purple-600 to-indigo-600',
      'rare': 'from-blue-500 via-blue-600 to-cyan-600',
      'common': 'from-gray-400 via-gray-500 to-gray-600'
    };
    return colors?.[tier] || colors?.common;
  };

  const getBadgeIcon = (category) => {
    const icons = {
      'ranking': 'Trophy',
      'streak': 'Flame',
      'problems': 'Target',
      'contest': 'Medal',
      'speed': 'Zap',
      'consistency': 'Calendar'
    };
    return icons?.[category] || 'Award';
  };

  return (
    <div className="group relative">
      <div className={`bg-gradient-to-br ${getBadgeColor(achievement?.tier)} p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3 backdrop-blur-sm">
            <Icon name={getBadgeIcon(achievement?.category)} size={24} color="white" />
          </div>
          <h3 className="text-white font-headline text-sm mb-1">{achievement?.title}</h3>
          <p className="text-white/80 text-xs leading-tight">{achievement?.description}</p>
          {achievement?.progress && (
            <div className="w-full mt-3">
              <div className="flex justify-between text-xs text-white/80 mb-1">
                <span>Progress</span>
                <span>{achievement?.progress?.current}/{achievement?.progress?.total}</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div 
                  className="bg-white rounded-full h-2 transition-all duration-500"
                  style={{ width: `${(achievement?.progress?.current / achievement?.progress?.total) * 100}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </div>
      {achievement?.isNew && (
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-success rounded-full flex items-center justify-center shadow-lg">
          <Icon name="Sparkles" size={12} color="white" />
        </div>
      )}
      <div className="absolute bottom-2 right-2 text-xs text-white/60 font-code">
        {achievement?.earnedDate}
      </div>
    </div>
  );
};

export default AchievementBadge;