import React, { useState } from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip } from 'recharts';
import { useTheme } from '../../../contexts/ThemeContext';


const SkillsRadar = () => {
  const { isDark } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      color: "#3182ce",
      data: [
        { skill: 'React/Next.js', proficiency: 95, experience: '5+ years' },
        { skill: 'TypeScript', proficiency: 90, experience: '4+ years' },
        { skill: 'CSS/Tailwind', proficiency: 88, experience: '6+ years' },
        { skill: 'JavaScript', proficiency: 92, experience: '6+ years' },
        { skill: 'Vue.js', proficiency: 75, experience: '2+ years' },
        { skill: 'Mobile (React Native)', proficiency: 80, experience: '3+ years' }
      ]
    },
    backend: {
      title: "Backend Development",
      color: "#38a169",
      data: [
        { skill: 'Node.js', proficiency: 90, experience: '5+ years' },
        { skill: 'Python', proficiency: 85, experience: '4+ years' },
        { skill: 'Go', proficiency: 78, experience: '2+ years' },
        { skill: 'PostgreSQL', proficiency: 88, experience: '5+ years' },
        { skill: 'MongoDB', proficiency: 82, experience: '4+ years' },
        { skill: 'Redis', proficiency: 80, experience: '3+ years' }
      ]
    },
    cloud: {
      title: "Cloud & DevOps",
      color: "#805ad5",
      data: [
        { skill: 'AWS', proficiency: 92, experience: '4+ years' },
        { skill: 'Docker', proficiency: 88, experience: '4+ years' },
        { skill: 'Kubernetes', proficiency: 85, experience: '3+ years' },
        { skill: 'CI/CD', proficiency: 87, experience: '4+ years' },
        { skill: 'Terraform', proficiency: 75, experience: '2+ years' },
        { skill: 'Monitoring', proficiency: 80, experience: '3+ years' }
      ]
    },
    tools: {
      title: "Tools & Methodologies",
      color: "#ed8936",
      data: [
        { skill: 'Git/GitHub', proficiency: 95, experience: '6+ years' },
        { skill: 'Agile/Scrum', proficiency: 90, experience: '5+ years' },
        { skill: 'Testing', proficiency: 85, experience: '4+ years' },
        { skill: 'System Design', proficiency: 88, experience: '4+ years' },
        { skill: 'API Design', proficiency: 90, experience: '5+ years' },
        { skill: 'Performance Optimization', proficiency: 87, experience: '4+ years' }
      ]
    }
  };

  const currentCategory = skillCategories?.[selectedCategory];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload?.length) {
      const data = payload?.[0]?.payload;
      return (
        <div className={`p-3 rounded-lg shadow-lg border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{label}</p>
          <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Proficiency: {data?.proficiency}%</p>
          <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Experience: {data?.experience}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={`py-16 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Technical Skills</h2>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Interactive visualization of expertise across technology domains
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Category Selection */}
          <div className="space-y-4">
            <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Skill Categories</h3>
            {Object.entries(skillCategories)?.map(([key, category]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`w-full p-4 rounded-lg text-left transition-all duration-300 ${
                  selectedCategory === key
                    ? (isDark ? 'bg-blue-900/30 border-2 border-blue-700 shadow-md' : 'bg-blue-50 border-2 border-blue-200 shadow-md')
                    : (isDark ? 'bg-gray-800 border-2 border-transparent hover:bg-gray-700' : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100')
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: category?.color }}
                  ></div>
                  <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{category?.title}</span>
                </div>
              </button>
            ))}

            <div className={`mt-8 p-4 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
              <h4 className={`font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Proficiency Scale</h4>
              <div className={`space-y-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                <div className="flex justify-between">
                  <span>Beginner</span>
                  <span>0-40%</span>
                </div>
                <div className="flex justify-between">
                  <span>Intermediate</span>
                  <span>41-70%</span>
                </div>
                <div className="flex justify-between">
                  <span>Advanced</span>
                  <span>71-85%</span>
                </div>
                <div className="flex justify-between">
                  <span>Expert</span>
                  <span>86-100%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Radar Chart */}
          <div className="lg:col-span-2">
            <div className={`rounded-xl p-6 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
              <h3 className={`text-2xl font-bold mb-6 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {currentCategory?.title}
              </h3>
              
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={currentCategory?.data}>
                    <PolarGrid stroke={isDark ? "#374151" : "#e5e7eb"} />
                    <PolarAngleAxis 
                      dataKey="skill" 
                      tick={{ fontSize: 12, fill: isDark ? '#d1d5db' : '#374151' }}
                      className="text-xs"
                    />
                    <PolarRadiusAxis 
                      angle={90} 
                      domain={[0, 100]} 
                      tick={{ fontSize: 10, fill: isDark ? '#9ca3af' : '#6b7280' }}
                    />
                    <Radar
                      name="Proficiency"
                      dataKey="proficiency"
                      stroke={currentCategory?.color}
                      fill={currentCategory?.color}
                      fillOpacity={0.2}
                      strokeWidth={2}
                    />
                    <Tooltip content={<CustomTooltip />} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Skills List */}
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              {currentCategory?.data?.map((skill) => (
                <div key={skill?.skill} className={`border rounded-lg p-4 ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{skill?.skill}</h4>
                    <span className="text-sm font-medium" style={{ color: currentCategory?.color }}>
                      {skill?.proficiency}%
                    </span>
                  </div>
                  <div className={`w-full rounded-full h-2 mb-2 ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <div 
                      className="h-2 rounded-full transition-all duration-500"
                      style={{ 
                        width: `${skill?.proficiency}%`,
                        backgroundColor: currentCategory?.color 
                      }}
                    ></div>
                  </div>
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{skill?.experience}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className={`mt-16 rounded-xl p-8 ${isDark ? 'bg-gradient-to-r from-gray-800 to-gray-900' : 'bg-gradient-to-r from-blue-50 to-indigo-100'}`}>
          <div className="text-center mb-8">
            <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Skills Summary</h3>
            <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>Overall technical proficiency metrics</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className={`text-3xl font-bold mb-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>24</div>
              <div className={isDark ? 'text-gray-300' : 'text-gray-600'}>Core Technologies</div>
            </div>
            <div className="text-center">
              <div className={`text-3xl font-bold mb-2 ${isDark ? 'text-green-400' : 'text-green-600'}`}>87%</div>
              <div className={isDark ? 'text-gray-300' : 'text-gray-600'}>Average Proficiency</div>
            </div>
            <div className="text-center">
              <div className={`text-3xl font-bold mb-2 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>6+</div>
              <div className={isDark ? 'text-gray-300' : 'text-gray-600'}>Years Experience</div>
            </div>
            <div className="text-center">
              <div className={`text-3xl font-bold mb-2 ${isDark ? 'text-orange-400' : 'text-orange-600'}`}>12</div>
              <div className={isDark ? 'text-gray-300' : 'text-gray-600'}>Expert Level Skills</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsRadar;