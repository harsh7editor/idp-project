import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import Icon from '../../../components/AppIcon';

const SolvingChart = ({ solvingData, languageData }) => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload?.length) {
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-lift">
          <p className="text-sm font-medium text-text-primary">{`${label}`}</p>
          <p className="text-sm text-brand-accent">
            {`Problems: ${payload?.[0]?.value}`}
          </p>
        </div>
      );
    }
    return null;
  };

  const LanguageTooltip = ({ active, payload, label }) => {
    if (active && payload && payload?.length) {
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-lift">
          <p className="text-sm font-medium text-text-primary">{`${label}`}</p>
          <p className="text-sm text-brand-accent">
            {`Solutions: ${payload?.[0]?.value}`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center space-x-3 mb-6">
        <Icon name="TrendingUp" size={24} color="var(--color-brand-accent)" />
        <h2 className="text-xl font-headline text-text-primary">Solving Patterns</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Solving Trend Chart */}
        <div>
          <h3 className="text-lg font-medium text-text-primary mb-4">Monthly Progress</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={solvingData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis 
                  dataKey="month" 
                  stroke="var(--color-text-secondary)"
                  fontSize={12}
                />
                <YAxis 
                  stroke="var(--color-text-secondary)"
                  fontSize={12}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line 
                  type="monotone" 
                  dataKey="problems" 
                  stroke="var(--color-brand-accent)" 
                  strokeWidth={3}
                  dot={{ fill: 'var(--color-brand-accent)', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: 'var(--color-brand-accent)', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Language Distribution */}
        <div>
          <h3 className="text-lg font-medium text-text-primary mb-4">Language Preference</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={languageData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis 
                  dataKey="language" 
                  stroke="var(--color-text-secondary)"
                  fontSize={12}
                />
                <YAxis 
                  stroke="var(--color-text-secondary)"
                  fontSize={12}
                />
                <Tooltip content={<LanguageTooltip />} />
                <Bar 
                  dataKey="count" 
                  fill="var(--color-brand-accent)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      {/* Category Strengths */}
      <div className="mt-8">
        <h3 className="text-lg font-medium text-text-primary mb-4">Problem Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Algorithms', count: 234, percentage: 85 },
            { name: 'Data Structures', count: 189, percentage: 78 },
            { name: 'Dynamic Programming', count: 156, percentage: 92 },
            { name: 'Graph Theory', count: 98, percentage: 71 }
          ]?.map((category, index) => (
            <div key={index} className="p-4 bg-surface rounded-lg text-center">
              <div className="text-lg font-headline text-brand-accent mb-1">
                {category?.count}
              </div>
              <div className="text-sm text-text-primary mb-2">{category?.name}</div>
              <div className="w-full bg-border rounded-full h-2">
                <div 
                  className="bg-brand-accent h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${category?.percentage}%` }}
                ></div>
              </div>
              <div className="text-xs text-text-secondary mt-1">{category?.percentage}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolvingChart;