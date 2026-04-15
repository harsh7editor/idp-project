import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import PlatformCard from './components/PlatformCard';
import AchievementBadge from './components/AchievementBadge';
import ProblemsCounter from './components/ProblemsCounter';
import ContestHistory from './components/ContestHistory';
import SolvingChart from './components/SolvingChart';
import FeaturedSolution from './components/FeaturedSolution';
import Icon from '../../components/AppIcon';

const CodingAchievementsArena = () => {
  // Mock data for platforms
  const platforms = [
    {
      name: "LeetCode",
      username: "devpro_coder",
      globalRank: 1247,
      problemsSolved: 892,
      rating: 2156,
      status: "active",
      profileUrl: "https://leetcode.com/devpro_coder",
      recentAchievement: "Solved 50 problems in Dynamic Programming"
    },
    {
      name: "HackerRank",
      username: "devpro_coder",
      globalRank: 523,
      problemsSolved: 456,
      rating: 2834,
      status: "active",
      profileUrl: "https://hackerrank.com/devpro_coder",
      recentAchievement: "Achieved 5-star rating in Algorithms"
    },
    {
      name: "Codeforces",
      username: "devpro_coder",
      globalRank: 2891,
      problemsSolved: 234,
      rating: 1789,
      status: "active",
      profileUrl: "https://codeforces.com/profile/devpro_coder",
      recentAchievement: "Reached Expert level (1600+ rating)"
    },
    {
      name: "CodeChef",
      username: "devpro_coder",
      globalRank: 1567,
      problemsSolved: 178,
      rating: 1923,
      status: "inactive",
      profileUrl: "https://codechef.com/users/devpro_coder",
      recentAchievement: null
    }
  ];

  // Mock data for achievements
  const achievements = [
    {
      id: 1,
      title: "Top 5% Global",
      description: "Ranked in top 5% globally across all platforms",
      category: "ranking",
      tier: "legendary",
      earnedDate: "Dec 2024",
      isNew: true
    },
    {
      id: 2,
      title: "500+ Problems",
      description: "Solved over 500 coding problems",
      category: "problems",
      tier: "epic",
      earnedDate: "Nov 2024",
      isNew: false,
      progress: { current: 892, total: 1000 }
    },
    {
      id: 3,
      title: "100-Day Streak",
      description: "Maintained 100+ day solving streak",
      category: "streak",
      tier: "rare",
      earnedDate: "Oct 2024",
      isNew: false
    },
    {
      id: 4,
      title: "Contest Master",
      description: "Participated in 50+ programming contests",
      category: "contest",
      tier: "epic",
      earnedDate: "Sep 2024",
      isNew: false
    },
    {
      id: 5,
      title: "Speed Demon",
      description: "Solved problems in under 5 minutes average",
      category: "speed",
      tier: "rare",
      earnedDate: "Aug 2024",
      isNew: false
    },
    {
      id: 6,
      title: "Consistency King",
      description: "Daily problem solving for 6 months",
      category: "consistency",
      tier: "common",
      earnedDate: "Jul 2024",
      isNew: false
    }
  ];

  // Mock data for problems breakdown
  const problemsBreakdown = [
    { difficulty: "Easy", count: 342, percentage: 38 },
    { difficulty: "Medium", count: 456, percentage: 51 },
    { difficulty: "Hard", count: 94, percentage: 11 }
  ];

  // Mock data for contests
  const contests = [
    {
      name: "Weekly Contest 378",
      platform: "LeetCode",
      date: "Dec 17, 2024",
      rank: 156,
      participants: 25847,
      problemsSolved: 3,
      totalProblems: 4
    },
    {
      name: "Codeforces Round 918",
      platform: "Codeforces",
      date: "Dec 15, 2024",
      rank: 1247,
      participants: 18934,
      problemsSolved: 2,
      totalProblems: 5
    },
    {
      name: "December Challenge",
      platform: "CodeChef",
      date: "Dec 10, 2024",
      rank: 89,
      participants: 12456,
      problemsSolved: 4,
      totalProblems: 6
    },
    {
      name: "World CodeSprint",
      platform: "HackerRank",
      date: "Dec 8, 2024",
      rank: 23,
      participants: 8934,
      problemsSolved: 5,
      totalProblems: 5
    },
    {
      name: "Biweekly Contest 119",
      platform: "LeetCode",
      date: "Dec 5, 2024",
      rank: 234,
      participants: 19876,
      problemsSolved: 2,
      totalProblems: 4
    }
  ];

  // Mock data for solving patterns
  const solvingData = [
    { month: "Jul", problems: 45 },
    { month: "Aug", problems: 67 },
    { month: "Sep", problems: 89 },
    { month: "Oct", problems: 123 },
    { month: "Nov", problems: 156 },
    { month: "Dec", problems: 178 }
  ];

  const languageData = [
    { language: "Python", count: 456 },
    { language: "Java", count: 234 },
    { language: "C++", count: 189 },
    { language: "JavaScript", count: 123 },
    { language: "Go", count: 67 }
  ];

  // Mock data for featured solutions
  const featuredSolutions = [
    {
      title: "Two Sum",
      difficulty: "Easy",
      platform: "LeetCode",
      upvotes: 234,
      problemUrl: "https://leetcode.com/problems/two-sum",
      approach: `Using a hash map to store the complement of each number as we iterate through the array. This allows us to find the target sum in a single pass with O(1) lookup time for each element.`,
      language: "Python",
      code: `def twoSum(nums, target):
    num_map = {}
    
    for i, num in enumerate(nums):
        complement = target - num
        
        if complement in num_map:
            return [num_map[complement], i]
        
        num_map[num] = i
    
    return []`,
      timeComplexity: "O(n)",
      spaceComplexity: "O(n)",
      tags: ["Array", "Hash Table", "Two Pointers"]
    },
    {
      title: "Longest Palindromic Substring",
      difficulty: "Medium",
      platform: "LeetCode",
      upvotes: 189,
      problemUrl: "https://leetcode.com/problems/longest-palindromic-substring",
      approach: `Using the expand around centers technique. For each character (and between characters for even-length palindromes), we expand outward while characters match, keeping track of the longest palindrome found.`,
      language: "Java",
      code: `public String longestPalindrome(String s) {
    if (s == null || s.length() < 1) return "";
    
    int start = 0, end = 0;
    
    for (int i = 0; i < s.length(); i++) {
        int len1 = expandAroundCenter(s, i, i);
        int len2 = expandAroundCenter(s, i, i + 1);
        int len = Math.max(len1, len2);
        
        if (len > end - start) {
            start = i - (len - 1) / 2;
            end = i + len / 2;
        }
    }
    
    return s.substring(start, end + 1);
}

private int expandAroundCenter(String s, int left, int right) {
    while (left >= 0 && right < s.length() && 
           s.charAt(left) == s.charAt(right)) {
        left--;
        right++;
    }
    return right - left - 1;
}`,
      timeComplexity: "O(n²)",
      spaceComplexity: "O(1)",
      tags: ["String", "Dynamic Programming", "Expand Around Centers"]
    },
    {
      title: "Merge k Sorted Lists",
      difficulty: "Hard",
      platform: "LeetCode",
      upvotes: 156,
      problemUrl: "https://leetcode.com/problems/merge-k-sorted-lists",
      approach: `Using a divide and conquer approach similar to merge sort. We recursively merge pairs of lists until we have a single sorted list. This is more efficient than merging lists one by one.`,
      language: "C++",
      code: `ListNode* mergeKLists(vector<ListNode*>& lists) {
    if (lists.empty()) return nullptr;
    
    while (lists.size() > 1) {
        vector<ListNode*> mergedLists;
        
        for (int i = 0; i < lists.size(); i += 2) {
            ListNode* l1 = lists[i];
            ListNode* l2 = (i + 1 < lists.size()) ? lists[i + 1] : nullptr;
            mergedLists.push_back(mergeTwoLists(l1, l2));
        }
        
        lists = mergedLists;
    }
    
    return lists[0];
}

ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
    ListNode dummy(0);
    ListNode* current = &dummy;
    
    while (l1 && l2) {
        if (l1->val <= l2->val) {
            current->next = l1;
            l1 = l1->next;
        } else {
            current->next = l2;
            l2 = l2->next;
        }
        current = current->next;
    }
    
    current->next = l1 ? l1 : l2;
    return dummy.next;
}`,
      timeComplexity: "O(n log k)",
      spaceComplexity: "O(1)",
      tags: ["Linked List", "Divide and Conquer", "Heap", "Merge Sort"]
    }
  ];

  const totalProblems = platforms?.reduce((sum, platform) => sum + platform?.problemsSolved, 0);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Coding Achievements Arena - DevPortfolio Pro</title>
        <meta name="description" content="Comprehensive showcase of competitive programming achievements, rankings, and coding solutions across multiple platforms." />
      </Helmet>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Icon name="Trophy" size={48} color="white" />
                <h1 className="text-4xl md:text-5xl font-headline kinetic-text">
                  Coding Achievements Arena
                </h1>
              </div>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                A comprehensive showcase of competitive programming excellence, featuring live rankings, 
                achievement badges, and elegant solutions across multiple coding platforms.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-headline mb-2">{totalProblems?.toLocaleString()}</div>
                  <div className="text-white/80 text-sm">Problems Solved</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-headline mb-2">156</div>
                  <div className="text-white/80 text-sm">Contests Joined</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-headline mb-2">12</div>
                  <div className="text-white/80 text-sm">Top 10 Finishes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-headline mb-2">94.2%</div>
                  <div className="text-white/80 text-sm">Acceptance Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Platform Cards */}
          <section className="mb-12">
            <h2 className="text-2xl font-headline text-text-primary mb-6">Platform Rankings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {platforms?.map((platform, index) => (
                <PlatformCard key={index} platform={platform} />
              ))}
            </div>
          </section>

          {/* Achievement Badges */}
          <section className="mb-12">
            <h2 className="text-2xl font-headline text-text-primary mb-6">Achievement Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {achievements?.map((achievement) => (
                <AchievementBadge key={achievement?.id} achievement={achievement} />
              ))}
            </div>
          </section>

          {/* Problems Counter and Contest History */}
          <section className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ProblemsCounter 
                totalProblems={totalProblems} 
                breakdown={problemsBreakdown} 
              />
              <ContestHistory contests={contests} />
            </div>
          </section>

          {/* Solving Patterns Chart */}
          <section className="mb-12">
            <SolvingChart 
              solvingData={solvingData} 
              languageData={languageData} 
            />
          </section>

          {/* Featured Solutions */}
          <section className="mb-12">
            <FeaturedSolution solutions={featuredSolutions} />
          </section>

          {/* Call to Action */}
          <section className="text-center py-12">
            <div className="bg-gradient-to-r from-brand-accent to-success rounded-2xl p-8 text-white">
              <Icon name="Code2" size={48} color="white" className="mx-auto mb-4" />
              <h2 className="text-2xl font-headline mb-4">Ready to Collaborate?</h2>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Impressed by the coding achievements? Let's discuss how these problem-solving skills 
                can contribute to your next project or team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-white text-brand-accent rounded-lg font-medium hover:bg-white/90 transition-colors duration-200">
                  View All Solutions
                </button>
                <button className="px-6 py-3 border border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-colors duration-200">
                  Contact for Opportunities
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default CodingAchievementsArena;