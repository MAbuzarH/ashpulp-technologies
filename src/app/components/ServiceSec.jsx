'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [expandedService, setExpandedService] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  // Services data structure
  const servicesData = [
    {
      id: 'tech',
      title: 'Technology & IT Solutions',
      icon: '🛠️',
      color: 'from-blue-500 to-cyan-400',
      description: 'We build robust, scalable applications tailored to meet your business needs.',
      services: [
        {
          icon: '🛠️',
          title: 'Custom Software Development',
          description: 'We develop tailored software solutions designed to meet unique business needs, enhance operational efficiency, and scale as your business grows. Our applications are built for flexibility, seamless integration, and long-term adaptability.'
        },
        {
          icon: '🌍',
          title: 'Web Development',
          description: 'We create high-performance, user-centric websites that deliver seamless navigation, strong visual identity, and optimized functionality. Our web solutions ensure a responsive and engaging digital experience.'
        },
        {
          icon: '📱',
          title: 'Mobile Application Development',
          description: 'We build fast, reliable, and feature-rich mobile applications tailored to your audience. Designed for seamless cross-device performance, our apps enhance engagement, usability, and business impact.'
        },
        {
          icon: '⚡',
          title: 'Development & Operations (DevOps)',
          description: 'We implement automated DevOps strategies to streamline development workflows, enhance software quality, and accelerate deployment cycles. Our approach integrates continuous integration, continuous delivery (CI/CD), and cloud automation for maximum efficiency.'
        },
        {
          icon: '🕶️',
          title: 'AR & VR Development',
          description: 'We create immersive AR and VR experiences that redefine user engagement. By merging creativity with cutting-edge technology, our solutions deliver next-level interactive digital environments.'
        },
        {
          icon: '📊',
          title: 'Consulting Services',
          description: 'We offer expert consulting services to help businesses navigate the complexities of digital transformation. Our strategic guidance covers technology adoption, data-driven decision-making, and software optimization to drive innovation, streamline operations, and maximize ROI.'
        }
      ]
    },
    {
      id: 'marketing',
      title: 'Marketing & Growth Solutions',
      icon: '🚀',
      color: 'from-green-500 to-emerald-400',
      description: 'Expand your online presence with data-driven strategies that drive engagement and conversions.',
      services: [
        {
          icon: '📢',
          title: 'Digital Marketing',
          description: 'Expand your online presence with data-driven strategies that drive engagement and conversions.'
        },
        {
          icon: '🤖',
          title: 'AI Marketing',
          description: 'Leverage AI-powered automation and analytics to enhance campaign performance and audience targeting.'
        },
        {
          icon: '⚙️',
          title: 'Marketing Automation',
          description: 'Streamline your marketing efforts with smart automation tools for email, social media, and ad campaigns.'
        },
        {
          icon: '📈',
          title: 'Search Engine Marketing (SEM)',
          description: 'Boost visibility and traffic with expert search engine advertising and optimization.'
        },
        {
          icon: '📬',
          title: 'Email Marketing',
          description: 'Craft high-converting email campaigns that nurture leads and build lasting customer relationships.'
        },
        {
          icon: '📝',
          title: 'Content Marketing',
          description: 'Create compelling, SEO-optimized content that positions your brand as an industry leader.'
        }
      ]
    },
    {
      id: 'data',
      title: 'Data Analytics',
      icon: '📊',
      color: 'from-purple-500 to-indigo-400',
      description: 'Transform raw data into meaningful insights for growth and efficiency.',
      services: [
        {
          icon: '📊',
          title: 'Data Visualization & Dashboard Management',
          description: 'Interactive dashboards that simplify complex data for better decision-making.'
        },
        {
          icon: '🤖',
          title: 'Predictive Analytics & Machine Learning',
          description: 'AI-driven insights to forecast trends and optimize business strategies.'
        },
        {
          icon: '📌',
          title: 'Customizable Dashboards',
          description: 'Tailored analytics dashboards that provide real-time, actionable data.'
        },
        {
          icon: '📊',
          title: 'Statistical Modeling',
          description: 'Advanced analytics techniques to uncover hidden patterns and drive strategic decisions.'
        },
        {
          icon: '📈',
          title: 'Business Intelligence Analytics',
          description: 'Transform raw data into meaningful insights for growth and efficiency.'
        }
      ]
    },
    {
      id: 'creative',
      title: 'Creative & Experience Design',
      icon: '🎨',
      color: 'from-red-500 to-pink-400',
      description: 'Craft seamless user experiences and intuitive interfaces that captivate audiences.',
      services: [
        {
          icon: '🖌️',
          title: 'UX/UI Design & Prototyping',
          description: 'Craft seamless user experiences and intuitive interfaces that captivate audiences. We design interactive prototypes and high-fidelity wireframes to optimize usability and engagement.'
        },
        {
          icon: '🎭',
          title: 'Brand Identity & Graphic Design',
          description: 'Elevate your brand with visually compelling designs, from logos and marketing materials to packaging and digital assets that create a lasting impression.'
        },
        {
          icon: '🖥️',
          title: '3D Modeling & Rendering',
          description: 'Bring ideas to life with high-quality 3D visualization, architectural rendering, and product modeling. Perfect for e-commerce, real estate, gaming, and animation.'
        },
        {
          icon: '📝',
          title: 'Content Design & UGC',
          description: 'Enhance engagement with strategic content design that integrates user-generated content, interactive experiences, and storytelling-driven visuals to boost authenticity and brand loyalty.'
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
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 12
      }
    }
  };
  
  const dropdownVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { 
      height: "auto", 
      opacity: 1,
      transition: {
        height: {
          type: "spring",
          stiffness: 40,
          damping: 15
        },
        opacity: {
          duration: 0.3
        }
      }
    }
  };
  
  // Toggle category expansion
  const toggleCategory = (categoryId) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
    setExpandedService(null); // Close any open services when changing category
  };

  // Toggle service expansion
  const toggleService = (serviceIndex) => {
    setExpandedService(expandedService === serviceIndex ? null : serviceIndex);
  };
  
  return (
    <section ref={sectionRef} className="py-20  overflow-hidden">
      <div className="w-[95%] max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-block text-2xl mb-2"
            animate={{ 
              rotate: [0, 10, 0, -10, 0],
              scale: [1, 1.2, 1, 1.2, 1]
            }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            ⚡
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Services
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-blue-600 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            We deliver innovative solutions to help your business thrive in today's digital landscape
          </motion.p>
        </motion.div>
        
        {/* Service Categories Accordion */}
        <motion.div 
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {servicesData.map((category, catIndex) => (
            <motion.div 
              key={category.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              {/* Category Header */}
              <motion.div 
                className={`px-6 py-4 cursor-pointer ${activeCategory === category.id ? `bg-gradient-to-r ${category.color} text-white` : 'bg-white hover:bg-gray-50'}`}
                onClick={() => toggleCategory(category.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{category.icon}</span>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  <motion.div
                    animate={{ rotate: activeCategory === category.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M19 9l-7 7-7-7" 
                      />
                    </svg>
                  </motion.div>
                </div>
                
                {/* Category description - always visible */}
                <p className={`mt-1 text-sm ${activeCategory === category.id ? 'text-white/90' : 'text-gray-500'}`}>
                  {category.description}
                </p>
              </motion.div>
              
              {/* Category Content */}
              <AnimatePresence>
                {activeCategory === category.id && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownVariants}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-gray-50">
                      <div className="space-y-4">
                        {category.services.map((service, serviceIndex) => (
                          <motion.div 
                            key={serviceIndex}
                            className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: serviceIndex * 0.1 }}
                            whileHover={{ y: -2, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                          >
                            {/* Service Header */}
                            <div 
                              className="px-4 py-3 cursor-pointer flex items-center justify-between"
                              onClick={() => toggleService(catIndex + "-" + serviceIndex)}
                            >
                              <div className="flex items-center space-x-3">
                                <div className={`w-8 h-8 rounded-md bg-gradient-to-br ${category.color} flex items-center justify-center text-white text-sm`}>
                                  {service.icon}
                                </div>
                                <h4 className="font-medium text-gray-800">{service.title}</h4>
                              </div>
                              <motion.div
                                animate={{ rotate: expandedService === catIndex + "-" + serviceIndex ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="w-5 h-5 flex items-center justify-center"
                              >
                                <svg 
                                  xmlns="http://www.w3.org/2000/svg" 
                                  className="h-4 w-4 text-gray-500" 
                                  fill="none" 
                                  viewBox="0 0 24 24" 
                                  stroke="currentColor"
                                >
                                  <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M19 9l-7 7-7-7" 
                                  />
                                </svg>
                              </motion.div>
                            </div>
                            
                            {/* Service Details */}
                            <AnimatePresence>
                              {expandedService === catIndex + "-" + serviceIndex && (
                                <motion.div
                                  initial="hidden"
                                  animate="visible"
                                  exit="hidden"
                                  variants={dropdownVariants}
                                >
                                  <div className="px-4 pb-4 pt-1">
                                    <div className="h-px bg-gray-100 w-full mb-3"></div>
                                    <p className="text-gray-600 text-sm">{service.description}</p>
                                    <motion.button
                                      className={`mt-4 px-3 py-1.5 text-sm bg-gradient-to-r ${category.color} text-white rounded-md shadow-sm`}
                                      whileHover={{ scale: 1.03 }}
                                      whileTap={{ scale: 0.97 }}
                                    >
                                      Learn More
                                    </motion.button>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      
        {/* Our Approach Section */}
        <motion.div 
          className="mt-20 bg-gray-50 rounded-xl shadow-lg p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.h3 
            className="text-2xl font-bold text-center text-gray-800 mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            Our Approach
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1 + (index * 0.2) }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-xl mx-auto mb-4"
                  whileHover={{ 
                    scale: 1.1, 
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" 
                  }}
                >
                  {step.icon}
                </motion.div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* CTA Section */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.h3 
            className="text-2xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            Have an Idea? Let's Build
          </motion.h3>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            We are dedicated to building solutions that enhance growth, streamline processes, and deliver measurable results.
          </motion.p>
          <motion.button
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 15px 30px -5px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Start A Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;