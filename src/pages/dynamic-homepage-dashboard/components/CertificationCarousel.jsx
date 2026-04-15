import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import { useTheme } from '../../../contexts/ThemeContext';

const CertificationCarousel = () => {
  const { isDark } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const certifications = [
    {
      id: 1,
      title: "AWS Solutions Architect Professional",
      issuer: "Amazon Web Services",
      date: "December 2023",
      credentialId: "AWS-SAP-2023-AC789",
      verificationUrl: "https://aws.amazon.com/verification/AWS-SAP-2023-AC789",
      logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=100&fit=crop",
      description: "Advanced cloud architecture design and implementation expertise",
      skills: ["Cloud Architecture", "Security", "Cost Optimization", "Migration"]
    },
    {
      id: 2,
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "October 2023",
      credentialId: "GCP-PD-2023-AC456",
      verificationUrl: "https://cloud.google.com/certification/verify/GCP-PD-2023-AC456",
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop",
      description: "Full-stack application development on Google Cloud Platform",
      skills: ["App Engine", "Cloud Functions", "BigQuery", "Kubernetes"]
    },
    {
      id: 3,
      title: "Kubernetes Certified Application Developer",
      issuer: "Cloud Native Computing Foundation",
      date: "September 2023",
      credentialId: "CKAD-2023-AC123",
      verificationUrl: "https://cncf.io/certification/verify/CKAD-2023-AC123",
      logo: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=100&h=100&fit=crop",
      description: "Container orchestration and cloud-native application development",
      skills: ["Kubernetes", "Docker", "Helm", "Service Mesh"]
    },
    {
      id: 4,
      title: "MongoDB Certified Developer",
      issuer: "MongoDB Inc.",
      date: "August 2023",
      credentialId: "MDB-DEV-2023-AC321",
      verificationUrl: "https://university.mongodb.com/verify/MDB-DEV-2023-AC321",
      logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop",
      description: "Advanced database design and optimization techniques",
      skills: ["NoSQL", "Aggregation", "Indexing", "Sharding"]
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % certifications?.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, certifications?.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % certifications?.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + certifications?.length) % certifications?.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentCert = certifications?.[currentIndex];

  return (
    <div className={`py-16 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Professional Certifications</h2>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Verified expertise across cloud platforms and modern technologies
          </p>
        </div>

        <div className={`relative rounded-2xl p-8 lg:p-12 ${isDark ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'}`}>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className={`w-16 h-16 rounded-full overflow-hidden shadow-lg ${isDark ? 'bg-gray-700' : 'bg-white'}`}>
                  <Image 
                    src={currentCert?.logo} 
                    alt={`${currentCert?.issuer} logo`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{currentCert?.title}</h3>
                  <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{currentCert?.issuer}</p>
                </div>
              </div>

              <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{currentCert?.description}</p>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Icon name="Calendar" size={16} color={isDark ? "#9ca3af" : "#6b7280"} />
                  <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Earned: {currentCert?.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={16} color={isDark ? "#9ca3af" : "#6b7280"} />
                  <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>ID: {currentCert?.credentialId}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {currentCert?.skills?.map((skill) => (
                  <span key={skill} className={`px-3 py-1 text-sm rounded-full ${isDark ? 'bg-blue-800/50 text-blue-200' : 'bg-blue-100 text-blue-800'}`}>
                    {skill}
                  </span>
                ))}
              </div>

              <Button 
                variant="default" 
                iconName="ExternalLink" 
                iconPosition="right"
                onClick={() => window.open(currentCert?.verificationUrl, '_blank')}
              >
                Verify Credential
              </Button>
            </div>

            <div className="relative">
              <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-2xl p-8 text-center`}>
                <div className={`w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <Image 
                    src={currentCert?.logo} 
                    alt={`${currentCert?.issuer} certification badge`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{currentCert?.title}</h4>
                <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{currentCert?.issuer}</p>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  <p>Credential ID: {currentCert?.credentialId}</p>
                  <p>Issued: {currentCert?.date}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <button 
              onClick={prevSlide}
              className={`p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow ${isDark ? 'bg-gray-800' : 'bg-white'}`}
            >
              <Icon name="ChevronLeft" size={20} color={isDark ? "#60a5fa" : "#3182ce"} />
            </button>

            <div className="flex space-x-2">
              {certifications?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? (isDark ? 'bg-blue-400' : 'bg-blue-600') : (isDark ? 'bg-gray-600' : 'bg-gray-300')
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={nextSlide}
              className={`p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow ${isDark ? 'bg-gray-800' : 'bg-white'}`}
            >
              <Icon name="ChevronRight" size={20} color={isDark ? "#60a5fa" : "#3182ce"} />
            </button>
          </div>

          {/* Auto-play indicator */}
          <div className={`absolute top-4 right-4 flex items-center space-x-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400 animate-pulse' : (isDark ? 'bg-gray-500' : 'bg-gray-400')}`}></div>
            <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationCarousel;