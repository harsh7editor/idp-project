import React, { useState, useMemo } from 'react';
import Header from '../../components/ui/Header';
import TimelineHeader from './components/TimelineHeader';
import CareerStats from './components/CareerStats';
import FilterTabs from './components/FilterTabs';
import TimelineNode from './components/TimelineNode';
import SkillsEvolution from './components/SkillsEvolution';
import Icon from '../../components/AppIcon';

const ProfessionalJourneyTimeline = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Mock timeline data
  const timelineData = [
    {
      id: 1,
      type: 'education',
      title: 'Bachelor of Computer Science',
      organization: 'Stanford University',
      location: 'Stanford, CA',
      startDate: '2018-09-01',
      endDate: '2022-05-15',
      description: 'Comprehensive computer science education with focus on software engineering, algorithms, and system design. Graduated Magna Cum Laude with a GPA of 3.8/4.0.',
      logo: 'https://images.unsplash.com/photo-1562774053-701939374585?w=100&h=100&fit=crop',
      highlights: [
        'Graduated Magna Cum Laude with 3.8 GPA',
        'President of Computer Science Student Association',
        'Led team of 8 students in senior capstone project',
        'Published research paper on machine learning optimization',
        'Dean\'s List for 6 consecutive semesters',
        'Teaching Assistant for Data Structures course'
      ],
      technologies: ['Java', 'Python', 'C++', 'JavaScript', 'SQL', 'React', 'Node.js', 'MongoDB'],
      achievements: [
        'Outstanding Senior Project Award',
        'Computer Science Department Excellence Award',
        'Phi Beta Kappa Honor Society',
        'ACM Programming Contest Regional Finalist'
      ]
    },
    {
      id: 2,
      type: 'work',
      title: 'Software Engineering Intern',
      organization: 'Google',
      location: 'Mountain View, CA',
      startDate: '2021-06-01',
      endDate: '2021-08-31',
      description: 'Developed and optimized search algorithms for Google Search infrastructure. Worked on improving query processing performance and implemented new ranking features.',
      logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop',
      highlights: [
        'Improved search query processing speed by 15%',
        'Implemented new ranking algorithm feature',
        'Collaborated with senior engineers on core search infrastructure',
        'Presented findings to engineering leadership team',
        'Mentored 2 junior interns during the program'
      ],
      technologies: ['C++', 'Python', 'MapReduce', 'Bigtable', 'Protocol Buffers', 'TensorFlow'],
      achievements: [
        'Intern of the Month - July 2021',
        'Patent application filed for algorithm optimization',
        'Full-time offer extended',
        'Intern presentation winner'
      ]
    },
    {
      id: 3,
      type: 'certification',
      title: 'AWS Solutions Architect Professional',
      organization: 'Amazon Web Services',
      location: 'Online',
      startDate: '2022-03-01',
      endDate: '2022-03-15',
      description: 'Advanced certification demonstrating expertise in designing distributed systems on AWS. Covers complex architectural patterns, security, and cost optimization.',
      logo: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=100&h=100&fit=crop',
      highlights: [
        'Scored 920/1000 on certification exam',
        'Completed 40+ hours of advanced training',
        'Hands-on experience with 25+ AWS services',
        'Designed reference architectures for enterprise clients'
      ],
      technologies: ['AWS', 'CloudFormation', 'Lambda', 'EC2', 'RDS', 'S3', 'VPC', 'IAM'],
      achievements: [
        'Top 5% scorer globally',
        'AWS Community Builder recognition',
        'Technical blog post featured by AWS'
      ]
    },
    {
      id: 4,
      type: 'work',
      title: 'Senior Software Engineer',
      organization: 'Meta (Facebook)',
      location: 'Menlo Park, CA',
      startDate: '2022-07-01',
      endDate: '2024-02-28',
      description: 'Led development of core infrastructure components for Facebook\'s news feed algorithm. Managed a team of 5 engineers and drove technical decisions for high-scale systems.',
      logo: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&h=100&fit=crop',
      highlights: [
        'Reduced news feed loading time by 25%',
        'Led team of 5 engineers across 3 time zones',
        'Architected microservices handling 10B+ requests daily',
        'Implemented ML-powered content ranking system',
        'Mentored 8 junior engineers during tenure',
        'Drove adoption of new development practices across org'
      ],
      technologies: ['React', 'GraphQL', 'Python', 'Hack', 'MySQL', 'Redis', 'Kafka', 'Docker', 'Kubernetes'],
      achievements: [
        'Exceeds Expectations performance rating 2 years running',
        'Technical Leadership Award 2023',
        'Patent filed for ML ranking algorithm',
        'Promoted to Senior Engineer after 18 months',
        'Hackathon winner - Internal Tools category'
      ]
    },
    {
      id: 5,
      type: 'project',
      title: 'Open Source Contribution - React Performance Tools',
      organization: 'Facebook Open Source',
      location: 'Remote',
      startDate: '2023-01-01',
      endDate: '2023-06-30',
      description: 'Major contributor to React DevTools performance profiler. Added new features for memory leak detection and component render optimization analysis.',
      logo: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop',
      highlights: [
        'Contributed 50+ commits to React DevTools',
        'Added memory leak detection feature',
        'Improved profiler performance by 40%',
        'Collaborated with React core team',
        'Feature used by 2M+ developers worldwide'
      ],
      technologies: ['React', 'JavaScript', 'Chrome Extensions', 'WebAssembly', 'Node.js'],
      achievements: [
        'React Contributor recognition',
        'Feature highlighted in React 18.2 release notes',
        'Conference talk at React Conf 2023',
        '500+ GitHub stars on contributed features'
      ]
    },
    {
      id: 6,
      type: 'certification',
      title: 'Certified Kubernetes Administrator',
      organization: 'Cloud Native Computing Foundation',
      location: 'Online',
      startDate: '2023-09-01',
      endDate: '2023-09-15',
      description: 'Hands-on certification demonstrating expertise in Kubernetes cluster administration, troubleshooting, and best practices for production deployments.',
      logo: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=100&h=100&fit=crop',
      highlights: [
        'Passed hands-on practical exam',
        'Administered clusters with 100+ nodes',
        'Implemented security best practices',
        'Optimized resource utilization by 30%'
      ],
      technologies: ['Kubernetes', 'Docker', 'Helm', 'Prometheus', 'Grafana', 'Istio'],
      achievements: [
        'Perfect score on security section',
        'CNCF Ambassador nomination',
        'Kubernetes meetup speaker'
      ]
    },
    {
      id: 7,
      type: 'work',
      title: 'Principal Software Engineer',
      organization: 'Stripe',
      location: 'San Francisco, CA',
      startDate: '2024-03-01',
      endDate: null,
      description: 'Leading architecture and development of next-generation payment processing infrastructure. Managing cross-functional teams and driving technical strategy for global payment systems.',
      logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop',
      highlights: [
        'Architecting payment infrastructure for 50+ countries',
        'Leading team of 12 engineers across 4 countries',
        'Reduced payment processing latency by 35%',
        'Implemented fraud detection ML models',
        'Driving adoption of event-driven architecture',
        'Mentoring senior engineers and tech leads'
      ],
      technologies: ['Go', 'Ruby', 'PostgreSQL', 'Redis', 'Kafka', 'Kubernetes', 'Terraform', 'AWS'],
      achievements: [
        'Promoted to Principal Engineer in 8 months',
        'Technical Excellence Award Q2 2024',
        'Led successful migration of legacy systems',
        'Reduced infrastructure costs by $2M annually',
        'Patent pending for fraud detection algorithm'
      ]
    }
  ];

  // Mock skills evolution data
  const skillsEvolutionData = [
    {
      name: 'React',
      category: 'frontend',
      proficiency: 'Expert',
      yearsOfExperience: 5,
      startDate: '2019-01-01',
      milestones: ['First React app', 'React Hooks adoption', 'Performance optimization', 'Open source contributor']
    },
    {
      name: 'Node.js',
      category: 'backend',
      proficiency: 'Expert',
      yearsOfExperience: 4,
      startDate: '2020-03-01',
      milestones: ['REST APIs', 'GraphQL implementation', 'Microservices', 'Performance tuning']
    },
    {
      name: 'Python',
      category: 'backend',
      proficiency: 'Advanced',
      yearsOfExperience: 6,
      startDate: '2018-09-01',
      milestones: ['Data structures', 'Web frameworks', 'ML libraries', 'System automation']
    },
    {
      name: 'AWS',
      category: 'cloud',
      proficiency: 'Expert',
      yearsOfExperience: 3,
      startDate: '2021-06-01',
      milestones: ['EC2 basics', 'Serverless architecture', 'Solutions Architect cert', 'Enterprise deployments']
    },
    {
      name: 'Kubernetes',
      category: 'tools',
      proficiency: 'Advanced',
      yearsOfExperience: 2,
      startDate: '2022-07-01',
      milestones: ['Container basics', 'Cluster management', 'CKA certification', 'Production deployments']
    },
    {
      name: 'PostgreSQL',
      category: 'database',
      proficiency: 'Advanced',
      yearsOfExperience: 4,
      startDate: '2020-01-01',
      milestones: ['Basic queries', 'Performance optimization', 'Replication setup', 'Sharding strategies']
    }
  ];

  // Mock career stats
  const careerStats = {
    yearsOfExperience: 6,
    companiesWorked: 4,
    projectsCompleted: 25,
    certifications: 8,
    teamMembersLed: 15,
    technologiesMastered: 30
  };

  // Filter timeline data
  const filteredTimeline = useMemo(() => {
    if (activeFilter === 'all') return timelineData;
    return timelineData?.filter(item => item?.type === activeFilter);
  }, [activeFilter]);

  // Calculate filter counts
  const filterCounts = useMemo(() => {
    const counts = {
      all: timelineData?.length,
      education: 0,
      work: 0,
      project: 0,
      certification: 0
    };

    timelineData?.forEach(item => {
      if (counts?.hasOwnProperty(item?.type)) {
        counts[item.type]++;
      }
    });

    return counts;
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header Section */}
          <TimelineHeader />

          {/* Career Stats */}
          <CareerStats stats={careerStats} />

          {/* Filter Tabs */}
          <FilterTabs 
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            counts={filterCounts}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Timeline */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {filteredTimeline?.length > 0 ? (
                  filteredTimeline?.map((item, index) => (
                    <TimelineNode 
                      key={item?.id}
                      item={item}
                      index={index}
                      isLast={index === filteredTimeline?.length - 1}
                    />
                  ))
                ) : (
                  <div className="text-center py-12">
                    <Icon name="Search" size={48} className="text-text-muted mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-text-primary mb-2">No items found</h3>
                    <p className="text-text-muted">
                      No timeline items match the selected filter. Try selecting a different category.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Skills Evolution Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <SkillsEvolution skillsData={skillsEvolutionData} />
              </div>
            </div>
          </div>

          {/* Journey Summary */}
          <div className="mt-16 bg-card border border-border rounded-lg p-8 text-center">
            <Icon name="MapPin" size={48} className="text-brand-accent mx-auto mb-4" />
            <h3 className="text-2xl font-headline text-text-primary mb-4">
              The Journey Continues
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
              This timeline represents not just career milestones, but a continuous journey of learning, 
              growth, and contribution to the technology community. Each experience has shaped my approach 
              to problem-solving and leadership in software development.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <div className="flex items-center space-x-2 text-sm text-text-muted">
                <Icon name="Calendar" size={16} />
                <span>Updated: {new Date()?.toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-text-muted">
                <Icon name="TrendingUp" size={16} />
                <span>Always Growing</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfessionalJourneyTimeline;