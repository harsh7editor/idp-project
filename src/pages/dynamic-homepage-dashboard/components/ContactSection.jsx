import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';
import { useTheme } from '../../../contexts/ThemeContext';

const ContactSection = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    projectType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e?.target?.name]: e?.target?.value
    });
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Thank you for your message! I\'ll get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
      projectType: ''
    });
    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      icon: 'Mail',
      title: 'Email',
      value: 'harshkori389@gmail.com',
      description: 'Best for detailed project discussions',
      action: 'mailto:harshkori389@gmail.com'
    },
    {
      icon: 'Phone',
      title: 'Phone',
      value: '+91 7987134875',
      description: 'Available Mon-Fri, 9AM-6PM PST',
      action: 'tel:+91 7987134875'
    },
    {
      icon: 'MessageCircle',
      title: 'LinkedIn',
      value: 'linkedin.com/in/harsh-kori-ba2413247/',
      description: 'Professional networking and opportunities',
      action: 'https://www.linkedin.com/in/harsh-kori-ba2413247/'
    },
    {
      icon: 'Calendar',
      title: 'Schedule Call',
      value: 'Book a 30-min consultation',
      description: 'Free initial project discussion',
      action: 'https://calendly.com/alexchen-dev'
    }
  ];

  const availability = {
    status: 'available',
    message: 'Available for new projects',
    nextAvailable: 'January 2024',
    responseTime: '< 24 hours',
    timezone: 'PST (UTC-8)'
  };

  return (
    <div className={`py-16 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Let's Work Together</h2>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Ready to bring your ideas to life? I'm available for freelance projects, 
            consulting, and full-time opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <div className="space-y-6">
            <div className={`rounded-xl shadow-lg p-6 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Get In Touch</h3>
              
              <div className="space-y-4">
                {contactMethods?.map((method) => (
                  <a
                    key={method?.title}
                    href={method?.action}
                    target={method?.action?.startsWith('http') ? '_blank' : '_self'}
                    rel={method?.action?.startsWith('http') ? 'noopener noreferrer' : ''}
                    className={`flex items-start space-x-4 p-4 rounded-lg transition-colors group ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}
                  >
                    <div className={`p-2 rounded-lg transition-colors ${isDark ? 'bg-blue-900/50 group-hover:bg-blue-800/50' : 'bg-blue-100 group-hover:bg-blue-200'}`}>
                      <Icon name={method?.icon} size={20} color={isDark ? "#60a5fa" : "#3182ce"} />
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{method?.title}</h4>
                      <p className={`text-sm mb-1 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{method?.value}</p>
                      <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{method?.description}</p>
                    </div>
                    <Icon name="ExternalLink" size={16} color="#9ca3af" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className={`rounded-xl shadow-lg p-6 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Availability</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    availability?.status === 'available' ? 'bg-green-400 animate-pulse' : 'bg-orange-400'
                  }`}></div>
                  <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{availability?.message}</span>
                </div>
                
                <div className={`space-y-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <div className="flex justify-between">
                    <span>Next Available:</span>
                    <span className="font-medium">{availability?.nextAvailable}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Response Time:</span>
                    <span className="font-medium">{availability?.responseTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Timezone:</span>
                    <span className="font-medium">{availability?.timezone}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className={`rounded-xl shadow-lg p-8 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Full Name"
                    type="text"
                    name="name"
                    value={formData?.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    name="email"
                    value={formData?.email}
                    onChange={handleInputChange}
                    placeholder="your.email@company.com"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Company (Optional)"
                    type="text"
                    name="company"
                    value={formData?.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                  />
                  <Input
                    label="Project Type"
                    type="text"
                    name="projectType"
                    value={formData?.projectType}
                    onChange={handleInputChange}
                    placeholder="Web App, Mobile, Consulting, etc."
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    value={formData?.message}
                    onChange={handleInputChange}
                    rows={6}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${isDark ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'}`}
                    placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                    required
                  ></textarea>
                </div>

                <div className="flex items-center space-x-4">
                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    loading={isSubmitting}
                    iconName="Send"
                    iconPosition="right"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                  
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    I'll respond within 24 hours
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-16 text-center">
          <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Connect on Social</h3>
          <div className="flex justify-center space-x-6">
            {[
              { name: 'GitHub', icon: 'Github', url: 'https://github.com/harsh7editor' },
              { name: 'LinkedIn', icon: 'Linkedin', url: 'https://www.linkedin.com/in/harsh-kori-ba2413247/' },
              { name: 'Twitter', icon: 'Twitter', url: 'https://x.com/HarshKori49408' },
              { name: 'Dev.to', icon: 'FileText', url: '' }
            ]?.map((social) => (
              <a
                key={social?.name}
                href={social?.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group ${isDark ? 'bg-gray-800' : 'bg-white'}`}
              >
                <Icon name={social?.icon} size={24} color={isDark ? "#60a5fa" : "#3182ce"} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;