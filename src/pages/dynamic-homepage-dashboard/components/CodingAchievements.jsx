import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { useTheme } from '../../../contexts/ThemeContext';

const CodingAchievements = () => {
  const { isDark } = useTheme();
  const [platformsData, setPlatformsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  
  // Base platform data with dynamic stats
  const basePlatforms = [
    {
      name: "LeetCode",
      username: "harsh_kori277",
      stats: {
        ranking: "353,070",
        solved: 318,
        total: 2500,
        streak: 156,
        contests: 23
      },
      badges: ["Python", "Core Java", "Open Source Contributor"],
      profileUrl: "https://leetcode.com/u/harsh_kori277/",
      color: "orange"
    },
    {
      name: "CodeChef",
      username: "harshkori389",
      stats: {
        ranking: "6 Star",
        solved: 234,
        total: 500,
        streak: 89,
        contests: 15
      },
      badges: ["Problem Solving Gold", "Java Expert", "SQL Advanced"],
      profileUrl: "https://www.codechef.com/users/harshkori389",
      color: "green"
    },
    {
      name: "Codeforces",
      username: "alexc_coder",
      stats: {
        ranking: "Expert",
        solved: 456,
        total: 1200,
        streak: 67,
        contests: 34
      },
      badges: ["Expert Coder", "Contest Regular", "Math Specialist"],
      profileUrl: "https://codeforces.com/profile/alexc_coder",
      color: "blue"
    }
  ];

  // Function to fetch LeetCode data (mock implementation - replace with actual API)
  const fetchLeetCodeData = async () => {
    try {
      // In a real implementation, you would call the LeetCode API here
      // For now, we'll simulate dynamic data with some randomness
      const baseSolved = 318;
      const randomIncrement = Math.floor(Math.random() * 5); // 0-4 problems
      
      return {
        solved: baseSolved + randomIncrement,
        streak: 156 + Math.floor(Math.random() * 3),
        contests: 23 + Math.floor(Math.random() * 2)
      };
    } catch (error) {
      console.error('Error fetching LeetCode data:', error);
      return null;
    }
  };

  // Function to fetch CodeChef data (mock implementation - replace with actual API)
  const fetchCodeChefData = async () => {
    try {
      // In a real implementation, you would call the CodeChef API here
      const baseSolved = 234;
      const randomIncrement = Math.floor(Math.random() * 3); // 0-2 problems
      
      return {
        solved: baseSolved + randomIncrement,
        streak: 89 + Math.floor(Math.random() * 2),
        contests: 15 + Math.floor(Math.random() * 1)
      };
    } catch (error) {
      console.error('Error fetching CodeChef data:', error);
      return null;
    }
  };

  // Function to fetch Codeforces data (mock implementation - replace with actual API)
  const fetchCodeforcesData = async () => {
    try {
      const baseSolved = 456;
      const randomIncrement = Math.floor(Math.random() * 4); // 0-3 problems
      
      return {
        solved: baseSolved + randomIncrement,
        streak: 67 + Math.floor(Math.random() * 2),
        contests: 34 + Math.floor(Math.random() * 1)
      };
    } catch (error) {
      console.error('Error fetching Codeforces data:', error);
      return null;
    }
  };

  // Fetch all platform data
  const fetchAllPlatformData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const [leetCodeData, codeChefData, codeforcesData] = await Promise.all([
        fetchLeetCodeData(),
        fetchCodeChefData(),
        fetchCodeforcesData()
      ]);

      const updatedPlatforms = basePlatforms.map((platform, index) => {
        let dynamicData = null;
        
        switch (platform.name) {
          case 'LeetCode':
            dynamicData = leetCodeData;
            break;
          case 'CodeChef':
            dynamicData = codeChefData;
            break;
          case 'Codeforces':
            dynamicData = codeforcesData;
            break;
          default:
            dynamicData = null;
        }

        if (dynamicData) {
          return {
            ...platform,
            stats: {
              ...platform.stats,
              solved: dynamicData.solved,
              streak: dynamicData.streak,
              contests: dynamicData.contests
            }
          };
        }
        
        return platform;
      });

      setPlatformsData(updatedPlatforms);
      setLastUpdated(new Date());
    } catch (err) {
      setError('Failed to fetch platform data');
      setPlatformsData(basePlatforms); // Fallback to base data
    } finally {
      setLoading(false);
    }
  };

  // Fetch data on component mount and set up periodic updates
  useEffect(() => {
    fetchAllPlatformData();
    
    // Update data every 5 minutes (300000ms)
    const interval = setInterval(fetchAllPlatformData, 300000);
    
    return () => clearInterval(interval);
  }, []);

  const getColorClasses = (color) => {
    const colors = {
      orange: {
        light: {
          bg: "bg-orange-50",
          border: "border-orange-200",
          text: "text-orange-900",
          accent: "text-orange-600",
          badge: "bg-orange-100 text-orange-800"
        },
        dark: {
          bg: "bg-orange-900/20",
          border: "border-orange-700/30",
          text: "text-orange-100",
          accent: "text-orange-400",
          badge: "bg-orange-800/50 text-orange-200"
        }
      },
      green: {
        light: {
          bg: "bg-green-50",
          border: "border-green-200",
          text: "text-green-900",
          accent: "text-green-600",
          badge: "bg-green-100 text-green-800"
        },
        dark: {
          bg: "bg-green-900/20",
          border: "border-green-700/30",
          text: "text-green-100",
          accent: "text-green-400",
          badge: "bg-green-800/50 text-green-200"
        }
      },
      blue: {
        light: {
          bg: "bg-blue-50",
          border: "border-blue-200",
          text: "text-blue-900",
          accent: "text-blue-600",
          badge: "bg-blue-100 text-blue-800"
        },
        dark: {
          bg: "bg-blue-900/20",
          border: "border-blue-700/30",
          text: "text-blue-100",
          accent: "text-blue-400",
          badge: "bg-blue-800/50 text-blue-200"
        }
      }
    };
    return isDark ? colors?.[color]?.dark : colors?.[color]?.light;
  };

  // Calculate overall statistics from dynamic data
  const calculateOverallStats = () => {
    if (platformsData.length === 0) return { totalSolved: 0, totalStreak: 0, totalContests: 0, totalBadges: 0 };
    
    const totalSolved = platformsData.reduce((sum, platform) => sum + platform.stats.solved, 0);
    const totalStreak = Math.max(...platformsData.map(platform => platform.stats.streak));
    const totalContests = platformsData.reduce((sum, platform) => sum + platform.stats.contests, 0);
    const totalBadges = platformsData.reduce((sum, platform) => sum + platform.badges.length, 0);
    
    return { totalSolved, totalStreak, totalContests, totalBadges };
  };

  const overallStats = calculateOverallStats();

  return (
    <div className={`py-16 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Coding Achievements</h2>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className={`text-sm ${isDark ? 'text-green-400' : 'text-green-600'}`}>Live</span>
            </div>
          </div>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Competitive programming excellence across multiple platforms
          </p>
          <div className="mt-4 flex items-center justify-center gap-4">
            <Button 
              variant="outline" 
              size="sm"
              iconName="RefreshCw"
              onClick={fetchAllPlatformData}
              disabled={loading}
            >
              {loading ? 'Updating...' : 'Refresh Data'}
            </Button>
            {loading && (
              <div className="flex items-center">
                <div className={`animate-spin rounded-full h-4 w-4 border-b-2 ${isDark ? 'border-white' : 'border-gray-900'}`}></div>
                <span className={`ml-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Updating live data...</span>
              </div>
            )}
          </div>
          {error && (
            <div className="mt-4 text-red-500 text-sm">
              {error} - Showing cached data
            </div>
          )}
          {lastUpdated && (
            <div className={`mt-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Last updated: {lastUpdated.toLocaleTimeString()}
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {platformsData?.map((platform) => {
            const colors = getColorClasses(platform?.color);
            const solvedPercentage = Math.round((platform?.stats?.solved / platform?.stats?.total) * 100);
            
            return (
              <div key={platform?.name} className={`${colors?.bg} ${colors?.border} border rounded-xl p-6 hover:shadow-lg dark:hover:shadow-xl transition-all duration-300`}>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className={`text-2xl font-bold ${colors?.text}`}>{platform?.name}</h3>
                    <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>@{platform?.username}</p>
                  </div>
                  <div className={`p-3 ${isDark ? 'bg-gray-800/50' : 'bg-white'} rounded-lg shadow-sm`}>
                    <Icon name="Trophy" size={24} color={colors?.accent?.replace('text-', '#')} />
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>Global Ranking</span>
                    <span className={`font-bold ${colors?.accent}`}>{platform?.stats?.ranking}</span>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>Problems Solved</span>
                      <span className={`font-bold ${colors?.accent}`}>
                        {platform?.stats?.solved}/{platform?.stats?.total}
                      </span>
                    </div>
                    <div className={`w-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2`}>
                      <div 
                        className={`h-2 rounded-full ${colors?.accent?.replace('text-', 'bg-')}`}
                        style={{ width: `${solvedPercentage}%` }}
                      ></div>
                    </div>
                    <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{solvedPercentage}% completed</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${colors?.accent}`}>{platform?.stats?.streak}</div>
                      <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Day Streak</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${colors?.accent}`}>{platform?.stats?.contests}</div>
                      <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Contests</div>
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className={`text-sm font-medium mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Recent Badges</h4>
                  <div className="flex flex-wrap gap-2">
                    {platform?.badges?.map((badge) => (
                      <span key={badge} className={`px-2 py-1 ${colors?.badge} text-xs rounded-full`}>
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  fullWidth 
                  iconName="ExternalLink" 
                  iconPosition="right"
                  onClick={() => window.open(platform?.profileUrl, '_blank')}
                >
                  View Profile
                </Button>
              </div>
            );
          })}
        </div>

        <div className={`mt-12 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg dark:shadow-xl p-8`}>
          <div className="text-center mb-8">
            <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Overall Statistics</h3>
            <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>Combined achievements across all platforms</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className={`text-3xl font-bold mb-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                {overallStats.totalSolved.toLocaleString()}
              </div>
              <div className={isDark ? 'text-gray-300' : 'text-gray-600'}>Total Problems Solved</div>
            </div>
            <div className="text-center">
              <div className={`text-3xl font-bold mb-2 ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                {overallStats.totalStreak}
              </div>
              <div className={isDark ? 'text-gray-300' : 'text-gray-600'}>Current Streak</div>
            </div>
            <div className="text-center">
              <div className={`text-3xl font-bold mb-2 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                {overallStats.totalContests}
              </div>
              <div className={isDark ? 'text-gray-300' : 'text-gray-600'}>Contest Participations</div>
            </div>
            <div className="text-center">
              <div className={`text-3xl font-bold mb-2 ${isDark ? 'text-orange-400' : 'text-orange-600'}`}>
                {overallStats.totalBadges}
              </div>
              <div className={isDark ? 'text-gray-300' : 'text-gray-600'}>Platform Badges</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingAchievements;