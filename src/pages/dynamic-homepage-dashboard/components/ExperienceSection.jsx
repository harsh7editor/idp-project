import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import { useTheme } from '../../../contexts/ThemeContext';

const ExperienceSection = () => {
    const { isDark } = useTheme();

    const experiences = [
        {
            id: 1,
            company: "CSRBOX",
            role: "Software Engineer Intern",
            industry: "Business Consulting & Services",
            location: "Ahmedabad, Gujarat",
            period: "Jun 2023 – Aug 2024",
            icon: "Briefcase",
            color: "blue",
            achievements: [
                "Developed scalable and secure RESTful backend services using Java/Spring Boot and Node.js, supporting multi-tenant SaaS applications.",
                "Enhanced system performance by 30% through optimized SQL queries, indexing strategies, and Redis-based caching.",
                "Implemented secure payment integrations, ensuring 99.9% application uptime and reliable transactional workflows.",
                "Strengthened deployment stability by integrating CI/CD automation, log monitoring, and proactive error alerting, reducing production issues by 25%.",
                "Worked across cross-functional teams (Backend, QA, DevOps) in an Agile SDLC, translating requirements into deliverable, high-quality features."
            ]
        },
        {
            id: 2,
            company: "Google Summer of Code 2025",
            role: "Open Source Developer",
            project: "InVesalius",
            location: "Remote (Jabalpur, India)",
            period: "Aug 2025 – Sep 2025",
            icon: "Code",
            color: "green",
            achievements: [
                "Optimized backend modules improving performance by 15% through algorithm enhancements and clean Java/Python code.",
                "Increased automated test coverage by 20% by writing unit and integration tests across core components.",
                "Designed and implemented CI/CD workflows using GitHub Actions, reducing deployment time by 30%.",
                "Collaborated with distributed engineering teams and maintained production-grade, version-controlled workflows."
            ]
        }
    ];

    const colorClasses = {
        blue: {
            gradient: isDark
                ? 'from-blue-900 to-indigo-900'
                : 'from-blue-50 to-indigo-50',
            iconBg: isDark ? 'bg-blue-800' : 'bg-blue-100',
            iconColor: isDark ? 'text-blue-300' : 'text-blue-600',
            headerGradient: 'from-blue-600 to-indigo-600',
            border: isDark ? 'border-blue-800' : 'border-blue-200',
            checkBg: isDark ? 'bg-blue-800' : 'bg-blue-100',
            checkIcon: isDark ? 'text-blue-300' : 'text-blue-600'
        },
        green: {
            gradient: isDark
                ? 'from-green-900 to-emerald-900'
                : 'from-green-50 to-emerald-50',
            iconBg: isDark ? 'bg-green-800' : 'bg-green-100',
            iconColor: isDark ? 'text-green-300' : 'text-green-600',
            headerGradient: 'from-green-600 to-emerald-600',
            border: isDark ? 'border-green-800' : 'border-green-200',
            checkBg: isDark ? 'bg-green-800' : 'bg-green-100',
            checkIcon: isDark ? 'text-green-300' : 'text-green-600'
        }
    };

    return (
        <div className={`py-16 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                            <Icon name="Award" size={24} className="text-white" />
                        </div>
                        <h2 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Professional Experience
                        </h2>
                    </div>
                    <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
                        Real-world impact through innovative solutions and open-source contributions
                    </p>
                </motion.div>

                {/* Experience Timeline */}
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`bg-gradient-to-br ${colorClasses[exp.color].gradient} rounded-2xl shadow-xl border ${colorClasses[exp.color].border} overflow-hidden`}
                        >
                            <div className="p-8">
                                {/* Header */}
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                    <div className="flex items-start gap-4">
                                        <div className={`w-14 h-14 ${colorClasses[exp.color].iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                            <Icon name={exp.icon} size={28} className={colorClasses[exp.color].iconColor} />
                                        </div>
                                        <div>
                                            <h3 className={`text-2xl font-bold bg-gradient-to-r ${colorClasses[exp.color].headerGradient} bg-clip-text text-transparent mb-1`}>
                                                {exp.company}
                                            </h3>
                                            {exp.project && (
                                                <p className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                                                    Project: {exp.project}
                                                </p>
                                            )}
                                            {exp.industry && (
                                                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                                    {exp.industry}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-start md:items-end gap-2">
                                        <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${isDark ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-sm font-semibold ${isDark ? 'text-gray-200' : 'text-gray-800'} shadow-sm`}>
                                            <Icon name="Calendar" size={16} />
                                            {exp.period}
                                        </span>
                                        <span className={`inline-flex items-center gap-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                            <Icon name="MapPin" size={16} />
                                            {exp.location}
                                        </span>
                                    </div>
                                </div>

                                {/* Role Badge */}
                                <div className="mb-6">
                                    <span className={`inline-block px-4 py-2 rounded-lg font-semibold text-lg ${isDark ? 'bg-gray-800/60 text-white' : 'bg-white/90 text-gray-900'} shadow-sm`}>
                                        {exp.role}
                                    </span>
                                </div>

                                {/* Achievements */}
                                <div className={`${isDark ? 'bg-gray-800/40' : 'bg-white/60'} backdrop-blur-sm rounded-xl p-6 border ${isDark ? 'border-gray-700' : 'border-white'}`}>
                                    <h4 className={`font-bold text-lg mb-4 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                        <Icon name="Target" size={20} className={colorClasses[exp.color].iconColor} />
                                        Key Achievements & Responsibilities
                                    </h4>
                                    <ul className="space-y-3">
                                        {exp.achievements.map((achievement, idx) => (
                                            <motion.li
                                                key={idx}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                                className="flex items-start gap-3"
                                            >
                                                <div className={`w-6 h-6 ${colorClasses[exp.color].checkBg} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                                    <Icon name="Check" size={14} className={colorClasses[exp.color].checkIcon} />
                                                </div>
                                                <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} text-base leading-relaxed`}>
                                                    {achievement}
                                                </p>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${isDark ? 'bg-gradient-to-r from-purple-900 to-pink-900 text-white' : 'bg-gradient-to-r from-purple-100 to-pink-100 text-gray-900'} font-medium`}>
                        <Icon name="TrendingUp" size={20} />
                        <span>Continuously building impactful solutions</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ExperienceSection;
