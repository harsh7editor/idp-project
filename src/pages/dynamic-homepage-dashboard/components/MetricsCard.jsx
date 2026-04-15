import React from 'react';
import Icon from '../../../components/AppIcon';
import { useTheme } from '../../../contexts/ThemeContext';

const MetricsCard = ({ title, value, icon, trend, trendValue, color = "blue" }) => {
  const { isDark } = useTheme();

  const colorClasses = {
    blue: {
      light: "bg-blue-50 border-blue-200 text-blue-900",
      dark: "bg-blue-900/20 border-blue-700/30 text-blue-100"
    },
    green: {
      light: "bg-green-50 border-green-200 text-green-900",
      dark: "bg-green-900/20 border-green-700/30 text-green-100"
    },
    purple: {
      light: "bg-purple-50 border-purple-200 text-purple-900",
      dark: "bg-purple-900/20 border-purple-700/30 text-purple-100"
    },
    orange: {
      light: "bg-orange-50 border-orange-200 text-orange-900",
      dark: "bg-orange-900/20 border-orange-700/30 text-orange-100"
    }
  };

  const iconColors = {
    blue: isDark ? "#60a5fa" : "#3182ce",
    green: isDark ? "#4ade80" : "#38a169",
    purple: isDark ? "#a78bfa" : "#805ad5",
    orange: isDark ? "#fb923c" : "#ed8936"
  };

  const currentColorClass = isDark ? colorClasses?.[color]?.dark : colorClasses?.[color]?.light;

  return (
    <div className={`${currentColorClass} border rounded-xl p-6 transition-all duration-300 hover:shadow-lg dark:hover:shadow-xl hover:scale-105`}>
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${isDark ? 'bg-gray-800/50' : 'bg-white'} shadow-sm`}>
          <Icon name={icon} size={24} color={iconColors?.[color]} />
        </div>
        {trend && (
          <div className={`flex items-center space-x-1 ${trend === 'up' ? (isDark ? 'text-green-400' : 'text-green-600') : (isDark ? 'text-red-400' : 'text-red-600')}`}>
            <Icon name={trend === 'up' ? 'TrendingUp' : 'TrendingDown'} size={16} />
            <span className="text-sm font-medium">{trendValue}</span>
          </div>
        )}
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-1 kinetic-text">{value}</h3>
        <p className={`text-sm ${isDark ? 'opacity-80' : 'opacity-75'}`}>{title}</p>
      </div>
    </div>
  );
};

export default MetricsCard;