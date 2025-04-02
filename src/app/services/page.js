'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

// Component for Services Page
export default function ServicesPage() {
    const [activeCategory, setActiveCategory] = useState(null);
    const [expandedService, setExpandedService] = useState(null);
    const heroRef = useRef(null);
    const contentRef = useRef(null);
    const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
    const isContentInView = useInView(contentRef, { once: true, amount: 0.1 });
    
    // For parallax effect
    const { scrollYProgress } = useScroll();
    const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
    
    // Initialize activeCategory to the first category when component mounts
    useEffect(() => {
      if (servicesData.length > 0 && !activeCategory) {
        setActiveCategory(servicesData[0].id);
      }
    }, []);
    
    // Services data structure
    const servicesData = [
        {
          id: 'tech',
          title: 'Technology & IT Solutions',
          icon: '🛠️',
          color: 'from-blue-500 to-cyan-400',
          description: 'We build robust, scalable applications tailored to meet your business needs.',
          detailedDescription: 'Our technology solutions tackle complex business challenges through innovative software development, integrations, and scalable systems.',
          services: [
            {
              icon: '🛠️',
              title: 'Custom Software Development',
              description: 'Tailored software solutions to enhance efficiency and scalability.',
              features: [
                'Enterprise software solutions',
                'Cross-platform compatibility',
                'Legacy system modernization',
                'API development and integration',
                'Cloud-native applications'
              ]
            },
            {
              icon: '🌍',
              title: 'Web Development',
              description: 'High-performance, user-friendly websites optimized for engagement.',
              features: [
                'Responsive design implementation',
                'Progressive Web Apps (PWA)',
                'E-commerce platforms',
                'Content management systems',
                'Web application development'
              ]
            },
            {
              icon: '📱',
              title: 'Mobile App Development',
              description: 'Fast, feature-rich mobile applications designed for seamless cross-device performance.',
              features: [
                'Native iOS and Android development',
                'Cross-platform development',
                'UI/UX design for mobile',
                'App store optimization',
                'Mobile app maintenance and updates'
              ]
            },
            {
              icon: '⚡',
              title: 'DevOps & Cloud Solutions',
              description: 'Automated DevOps strategies to streamline development workflows and software quality.',
              features: [
                'CI/CD pipeline implementation',
                'Infrastructure as Code (IaC)',
                'Containerization with Docker & Kubernetes',
                'Monitoring and logging solutions',
                'Security automation'
              ]
            }
          ]
        },
        {
          id: 'marketing',
          title: 'Marketing & Growth Solutions',
          icon: '🚀',
          color: 'from-green-500 to-emerald-400',
          description: 'Expand your online presence with data-driven strategies that drive engagement and conversions.',
          detailedDescription: 'Our marketing solutions maximize brand reach through data analytics, creative content, and innovative digital channels.',
          services: [
            {
              icon: '📢',
              title: 'Digital Marketing',
              description: 'Boost engagement through multi-channel campaigns and targeted digital strategies.',
              features: [
                'Comprehensive digital strategy',
                'Multi-channel campaign management',
                'Conversion rate optimization',
                'Social media marketing',
                'Performance tracking and analytics'
              ]
            },
            {
              icon: '🤖',
              title: 'AI-Powered Marketing',
              description: 'Leverage AI-driven insights for targeted and automated campaigns.',
              features: [
                'Predictive analytics',
                'AI-driven audience segmentation',
                'Automated content recommendations',
                'Chatbot and virtual assistant integration',
                'Machine learning for ROI improvement'
              ]
            }
          ]
        },
        {
          id: 'data',
          title: 'Data Analytics',
          icon: '📊',
          color: 'from-purple-500 to-indigo-400',
          description: 'Transform raw data into actionable insights for growth and efficiency.',
          detailedDescription: 'We provide advanced analytics and visualization tools to help businesses make data-driven decisions.',
          services: [
            {
              icon: '📊',
              title: 'Data Visualization',
              description: 'Custom dashboards and reports for real-time business insights.',
              features: [
                'Interactive reporting tools',
                'Real-time visualization',
                'Executive KPI dashboards',
                'Multi-source data integration',
                'Automated reporting'
              ]
            },
            {
              icon: '🤖',
              title: 'Predictive Analytics',
              description: 'AI-driven insights for forecasting trends and optimizing business strategies.',
              features: [
                'Predictive modeling',
                'Trend forecasting',
                'Anomaly detection',
                'Recommendation systems',
                'Machine learning development'
              ]
            }
          ]
        },
        {
          id: 'creative',
          title: 'Creative & Experience Design',
          icon: '🎨',
          color: 'from-red-500 to-pink-400',
          description: 'Craft seamless user experiences and intuitive interfaces that captivate audiences.',
          detailedDescription: 'We create user-centric digital experiences that blend aesthetic excellence with functionality.',
          services: [
            {
              icon: '🖌️',
              title: 'UX/UI Design & Prototyping',
              description: 'User-centric interfaces with intuitive navigation and high-fidelity wireframes.',
              features: [
                'User research & personas',
                'Wireframing & prototyping',
                'Usability testing',
                'Interaction design',
                'Information architecture'
              ]
            },
            {
              icon: '🎭',
              title: 'Brand Identity & Graphic Design',
              description: 'Visual storytelling through logos, marketing materials, and digital branding.',
              features: [
                'Logo & visual identity design',
                'Brand guidelines development',
                'Marketing collateral',
                'Packaging design',
                'Motion graphics'
              ]
            }
          ]
        }
      ];
// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };
  
  const fadeInUpVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15
      }
    }
  };
  
  // Toggle service expansion
  const toggleService = (categoryId, serviceIndex) => {
    const key = `${categoryId}-${serviceIndex}`;
    setExpandedService(expandedService === key ? null : key);
  };
  
  // Identify currently active category
  const currentCategory = servicesData.find(cat => cat.id === activeCategory) || servicesData[0];
  return(
    <div>
 <div className="bg-gray-100 min-h-screen">
      {/* Hero Section with White Background */}
      <motion.section 
        ref={heroRef}
        className="bg-white pt-24 pb-16 overflow-hidden"
        style={{ 
          y: heroY,
          opacity: heroOpacity
        }}
      >
        <div className="w-[95%] mx-auto border-2 border-purple-600 p-9 rounded-2xl">
          <motion.div 
            className="text-center max-w-4xl mx-auto "
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-block text-5xl mb-4"
              animate={{ 
                rotate: [0, 10, 0, -10, 0],
                scale: [1, 1.1, 1, 1.1, 1]
              }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            >
              ⚡
            </motion.div>
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our Services
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600"
              initial={{ opacity: 0 }}
              animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Comprehensive solutions to help your business thrive in today's digital landscape.
              From technology development to creative design, we've got you covered.
            </motion.p>
            
            {/* Animated line */}
            <motion.div
              className="h-1 w-40 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto my-8"
              initial={{ width: 0 }}
              animate={isHeroInView ? { width: 160 } : { width: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            />
          </motion.div>
          
          {/* Category Navigation */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mt-12"
            variants={containerVariants}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
          >
            {servicesData.map((category, idx) => (
              <motion.button
                key={category.id}
                variants={itemVariants}
                className={`px-6 py-3 rounded-full text-base font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeCategory === category.id 
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg` 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{category.icon}</span>
                <span>{category.title}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </motion.section>
      
      {/* Main Content Section with Gray Background */}
      <section className="py-16 bg-gray-100" ref={contentRef}>
        <div className="w-[95%] mx-auto">
          <AnimatePresence mode="wait">
            {activeCategory && (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Category Overview */}
                <motion.div 
                  className="bg-white rounded-2xl shadow-xl p-8 mb-12"
                  variants={fadeInUpVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-8">
                    <motion.div 
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${currentCategory.color} flex items-center justify-center text-white text-3xl flex-shrink-0`}
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 10,
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)" 
                      }}
                    >
                      {currentCategory.icon}
                    </motion.div>
                    
                    <div>
                      <h2 className="text-3xl font-bold text-gray-800 mb-3">{currentCategory.title}</h2>
                      <p className="text-gray-600 text-lg">{currentCategory.detailedDescription}</p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Services List */}
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-8"
                >
                  {currentCategory.services.map((service, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      className="bg-white rounded-xl shadow-lg overflow-hidden"
                      whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                      layout
                    >
                      {/* Service Header - Always visible */}
                      <div 
                        className="p-6 flex flex-col md:flex-row md:items-center justify-between cursor-pointer"
                        onClick={() => toggleService(currentCategory.id, idx)}
                      >
                        <div className="flex items-start md:items-center gap-4 mb-4 md:mb-0">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${currentCategory.color} flex items-center justify-center text-white text-2xl flex-shrink-0`}>
                            {service.icon}
                          </div>
                          <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                        </div>
                        
                        <motion.button
                          className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center self-end md:self-auto"
                          whileHover={{ backgroundColor: "#f3f4f6" }}
                          whileTap={{ scale: 0.9 }}
                          animate={{ rotate: expandedService === `${currentCategory.id}-${idx}` ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </motion.button>
                      </div>
                      
                      {/* Service Details - Expandable */}
                      <AnimatePresence>
                        {expandedService === `${currentCategory.id}-${idx}` && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6">
                              <div className="h-px bg-gray-200 w-full mb-6"></div>
                              
                              <p className="text-gray-600 mb-6">{service.description}</p>
                              
                              <h4 className="font-bold text-gray-700 mb-3">Key Features:</h4>
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {service.features.map((feature, fIdx) => (
                                  <li key={fIdx} className="flex items-center">
                                    <span className="mr-2 text-green-500">✓</span>
                                    <span className="text-gray-600">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                              
                              <motion.button
                                className={`mt-8 px-5 py-2 bg-gradient-to-r ${currentCategory.color} text-white rounded-lg shadow-md`}
                                whileHover={{ 
                                  scale: 1.03,
                                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)" 
                                }}
                                whileTap={{ scale: 0.97 }}
                              >
                                Request a Quote
                              </motion.button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Our Approach Section */}
          <motion.div 
            className="mt-20 bg-white rounded-2xl shadow-xl p-8 md:p-12"
            initial={{ opacity: 0, y: 50 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.h3 
              className="text-3xl font-bold text-center text-gray-800 mb-12"
              initial={{ opacity: 0 }}
              animate={isContentInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Our Approach
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: '🔍',
                  title: 'Discovery & Strategy',
                  description: 'Understanding your needs and identifying opportunities with data-driven insights.'
                },
                {
                  icon: '✏️',
                  title: 'Design & Development',
                  description: 'Crafting innovative solutions that align with your goals and deliver long-term value.'
                },
                {
                  icon: '🚀',
                  title: 'Implementation & Support',
                  description: 'Ensuring smooth deployment and ongoing support to maintain peak performance.'
                }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.8 + (index * 0.2) }}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <motion.div 
                    className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-2xl mx-auto mb-4"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 10,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" 
                    }}
                  >
                    {step.icon}
                  </motion.div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Contact Form Section */}
          <motion.div 
            className="mt-20 bg-white rounded-2xl shadow-xl p-8 md:p-12"
            initial={{ opacity: 0, y: 50 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <motion.h3 
                  className="text-3xl font-bold text-gray-800 mb-6"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isContentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  Have an Idea? Let's Build
                </motion.h3>
                
                <motion.p 
                  className="text-gray-600 mb-8"
                  initial={{ opacity: 0 }}
                  animate={isContentInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
              >
                <span className="text-xl font-bold text-gray-800 mb-6">Let's Work Together</span>
                </motion.p>
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="brand">Brand Niche</label>
                    <input 
                      type="text" 
                      id="brand" 
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your industry or niche"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="budget">Budget (USD)</label>
                    <select 
                      id="budget" 
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select your budget</option>
                      <option value="5000-10000">$5,000 - $10,000</option>
                      <option value="10000-25000">$10,000 - $25,000</option>
                      <option value="25000-50000">$25,000 - $50,000</option>
                      <option value="50000+">$50,000+</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="details">Project Details</label>
                    <textarea 
                      id="details" 
                      rows="4" 
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your project"
                    ></textarea>
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg shadow-lg"
                    whileHover={{ 
                      scale: 1.03,
                      boxShadow: "0 15px 30px -5px rgba(59, 130, 246, 0.4)"
                    }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Start A Project
                  </motion.button>
                </form>
              
            </div>
            <div>
                image
            </div>
              </div>
          </motion.div>
          
          {/* Services Gallery - Visual Showcase */}
          <motion.div 
            className="mt-20"
            initial={{ opacity: 0 }}
            animate={isContentInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <motion.h3 
              className="text-3xl font-bold text-center text-gray-800 mb-8"
              initial={{ opacity: 0 }}
              animate={isContentInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              Our Work
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: 1.7 + (index * 0.1) }}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div className="h-48 bg-gray-300 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">
                      Project Image {index + 1}
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-gray-800 mb-2">Project Example {index + 1}</h4>
                    <p className="text-sm text-gray-600 mb-4">Showcase of our {index % 2 === 0 ? 'development' : 'design'} expertise for a client in the {['healthcare', 'finance', 'education', 'retail', 'technology', 'entertainment'][index]} industry.</p>
                    <motion.button
                      className="text-blue-600 font-medium flex items-center text-sm"
                      whileHover={{ x: 5 }}
                    >
                      View Case Study
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 ml-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M9 5l7 7-7 7" 
                        />
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* FAQ Section */}
          <motion.div 
            className="mt-20 bg-white rounded-2xl shadow-xl p-8 md:p-12"
            initial={{ opacity: 0, y: 50 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <motion.h3 
              className="text-3xl font-bold text-center text-gray-800 mb-12"
              initial={{ opacity: 0 }}
              animate={isContentInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 2.1 }}
            >
              Frequently Asked Questions
            </motion.h3>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              {[
                {
                  question: "How long does a typical project take to complete?",
                  answer: "Project timelines vary depending on scope and complexity. A simple website might take 4-6 weeks, while a complex software application could take 3-6 months. During our initial consultation, we'll provide a detailed timeline tailored to your specific needs."
                },
                {
                  question: "Do you offer ongoing support after project completion?",
                  answer: "Yes, we offer various support and maintenance packages to ensure your solution continues to function optimally. These can include regular updates, security monitoring, performance optimization, and technical support."
                },
                {
                  question: "How do you handle project pricing?",
                  answer: "We offer transparent project-based pricing or retainer options depending on your needs. After understanding your requirements, we provide detailed proposals with clear cost breakdowns. We focus on delivering value and ensuring there are no surprise costs."
                },
                {
                  question: "What technologies do you specialize in?",
                  answer: "Our team is proficient in a wide range of technologies including but not limited to React, Angular, Vue, Node.js, Python, .NET, AWS, Azure, Google Cloud, as well as mobile development frameworks like React Native and Flutter."
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 2.2 + (index * 0.1) }}
                >
                  <h4 className="text-lg font-bold text-gray-800 mb-3">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
      </section>
    </div> 

  <div className='flex items-center justify-center mt-2'>
        {/* CTA Banner */}
        <motion.div 
          className=" bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-10 text-center text-white w-[95%]"
          initial={{ opacity: 0, y: 50 }}
          animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          whileHover={{ 
            y: -5,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
          }}
        >
          <motion.h3 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={isContentInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 2.6 }}
          >
            Ready to Transform Your Business?
          </motion.h3>
          <motion.p 
            className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isContentInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 2.7 }}
          >
            Let's collaborate to create solutions that drive growth, efficiency, and innovation.
          </motion.p>
          <motion.button
            className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-lg"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Free Consultation
          </motion.button>
        </motion.div>
        </div>
        <div className='w-[95%] flex items-center justify-center'>
              {/* Testimonials */}
        <motion.div 
          className="mt-20 pb-20 w-full"
          initial={{ opacity: 0 }}
          animate={isContentInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 2.8 }}
        >
          <motion.h3 
            className="text-3xl font-bold text-center text-gray-800 mb-12"
            initial={{ opacity: 0 }}
            animate={isContentInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 2.9 }}
          >
            What Our Clients Say
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Johnson",
                company: "TechInnovate",
                role: "CTO",
                quote: "The team's expertise in custom software development transformed our operations. The solution they built has significantly improved our efficiency and customer satisfaction."
              },
              {
                name: "Michael Chen",
                company: "GrowthMarket",
                role: "Marketing Director",
                quote: "Their marketing solutions delivered exceptional results. We saw a 200% increase in qualified leads within just three months of implementing their strategy."
              },
              {
                name: "Elena Rodriguez",
                company: "DataVision",
                role: "Data Analytics Manager",
                quote: "The data dashboards they created have revolutionized how we make decisions. Complex data is now accessible and actionable across our entire organization."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 3.0 + (index * 0.1) }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <div className="mt-4 flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        </div>
    </div>
  )      



    //end of component
}  
