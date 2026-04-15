import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';


const ActivityFeed = () => {
  const activities = [
    {
      id: 1,
      type: "commit",
      repository: "react-dashboard-pro",
      message: "Implement real-time analytics dashboard with WebSocket integration",
      timestamp: "2 hours ago",
      additions: 156,
      deletions: 23
    },
    {
      id: 2,
      type: "pr",
      repository: "open-source-ui-kit",
      message: "Add accessibility improvements to form components",
      timestamp: "5 hours ago",
      status: "merged"
    },
    {
      id: 3,
      type: "commit",
      repository: "microservices-api",
      message: "Optimize database queries for 40% performance improvement",
      timestamp: "1 day ago",
      additions: 89,
      deletions: 45
    },
    {
      id: 4,
      type: "release",
      repository: "portfolio-website",
      message: "Release v2.1.0 with enhanced mobile responsiveness",
      timestamp: "2 days ago",
      version: "v2.1.0"
    },
    {
      id: 5,
      type: "commit",
      repository: "ai-chat-assistant",
      message: "Integrate OpenAI GPT-4 with custom prompt engineering",
      timestamp: "3 days ago",
      additions: 234,
      deletions: 12
    }
  ];

  const getActivityIcon = (type) => {
    switch (type) {
      case 'commit': return 'GitCommit';
      case 'pr': return 'GitPullRequest';
      case 'release': return 'Tag';
      default: return 'Activity';
    }
  };

  const getActivityColor = (type) => {
    switch (type) {
      case 'commit': return 'text-blue-600';
      case 'pr': return 'text-green-600';
      case 'release': return 'text-purple-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Recent Activity</h3>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span>Live from GitHub</span>
        </div>
      </div>
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {activities?.map((activity) => (
          <div key={activity?.id} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <div className={`p-2 rounded-lg bg-gray-100 ${getActivityColor(activity?.type)}`}>
              <Icon name={getActivityIcon(activity?.type)} size={16} />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <span className="font-medium text-gray-900">{activity?.repository}</span>
                {activity?.version && (
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                    {activity?.version}
                  </span>
                )}
                {activity?.status === 'merged' && (
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                    Merged
                  </span>
                )}
              </div>
              
              <p className="text-gray-700 text-sm mb-2">{activity?.message}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{activity?.timestamp}</span>
                {(activity?.additions || activity?.deletions) && (
                  <div className="flex items-center space-x-3 text-xs">
                    {activity?.additions && (
                      <span className="text-green-600">+{activity?.additions}</span>
                    )}
                    {activity?.deletions && (
                      <span className="text-red-600">-{activity?.deletions}</span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-gray-200">
        <Button variant="outline" fullWidth iconName="ExternalLink" iconPosition="right">
          View Full GitHub Profile
        </Button>
      </div>
    </div>
  );
};

export default ActivityFeed;