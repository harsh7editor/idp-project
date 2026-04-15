import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const ProblemsCounter = ({ totalProblems, breakdown }) => {
  const [animatedTotal, setAnimatedTotal] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = totalProblems / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= totalProblems) {
        setAnimatedTotal(totalProblems);
        clearInterval(timer);
      } else {
        setAnimatedTotal(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [totalProblems]);

  const getDifficultyColor = (difficulty) => {
    const colors = {
      'Easy': 'text-success',
      'Medium': 'text-warning',
      'Hard': 'text-error'
    };
    return colors?.[difficulty] || 'text-text-secondary';
  };

  const getDifficultyBg = (difficulty) => {
    const colors = {
      'Easy': 'bg-success/10',
      'Medium': 'bg-warning/10',
      'Hard': 'bg-error/10'
    };
    return colors?.[difficulty] || 'bg-surface';
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center space-x-3 mb-2">
          <Icon name="Target" size={32} color="var(--color-brand-accent)" />
          <h2 className="text-2xl font-headline text-text-primary">Problems Solved</h2>
        </div>
        <div className="text-5xl font-headline text-brand-accent mb-2 kinetic-text">
          {animatedTotal?.toLocaleString()}
        </div>
        <p className="text-text-secondary">Total across all platforms</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {breakdown?.map((item, index) => (
          <div key={index} className={`${getDifficultyBg(item?.difficulty)} rounded-lg p-4 text-center`}>
            <div className={`text-2xl font-headline ${getDifficultyColor(item?.difficulty)} mb-1`}>
              {item?.count}
            </div>
            <div className="text-sm text-text-secondary mb-2">{item?.difficulty}</div>
            <div className="w-full bg-border rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all duration-1000 ${
                  item?.difficulty === 'Easy' ? 'bg-success' :
                  item?.difficulty === 'Medium' ? 'bg-warning' : 'bg-error'
                }`}
                style={{ width: `${item?.percentage}%` }}
              ></div>
            </div>
            <div className="text-xs text-text-secondary mt-1">{item?.percentage}%</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-4 bg-surface rounded-lg">
          <div className="text-xl font-headline text-success mb-1">94.2%</div>
          <div className="text-sm text-text-secondary">Acceptance Rate</div>
        </div>
        <div className="text-center p-4 bg-surface rounded-lg">
          <div className="text-xl font-headline text-brand-accent mb-1">47</div>
          <div className="text-sm text-text-secondary">Current Streak</div>
        </div>
      </div>
    </div>
  );
};

export default ProblemsCounter;