'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Image from 'next/image';

const TechHeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true });
  
  // For parallax scrolling effect
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
  
  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Animation variants
  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
        when: "beforeChildren"
      }
    }
  };
  
  const childVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20
      }
    }
  };
  
  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: i => ({ 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
        delay: i * 0.1 + 0.5
      }
    })
  };
  
  const techIcons = [
    { name: 'AI', icon: '/ai-icon.svg', color: 'bg-purple-700' },
    { name: 'Cloud', icon: '/cloud-icon.svg', color: 'bg-blue-600' },
    { name: 'Security', icon: '/security-icon.svg', color: 'bg-red-600' },
    { name: 'IoT', icon: '/iot-icon.svg', color: 'bg-green-600' },
  ];
  
  return (
    
    <section ref={heroRef} className="relative  rounded-3xl bg-gray-900 overflow-hidden min-h-screen  flex items-center py-20">
      {/* Particle Background Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() + 0.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/90 to-gray-800 pointer-events-none"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      
      {/* Main Content Area */}
      <div className="w-[95%] mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={parentVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            style={{ opacity }}
          >
            <motion.div variants={childVariants} className="inline-block mb-3 px-3 py-1 bg-gray-800 rounded-full">
              <span className="text-sm font-medium text-white">Transforming Digital Landscapes</span>
            </motion.div>
            
            <motion.h1 
              variants={childVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Innovating Technology<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">For Tomorrow's World</span>
            </motion.h1>
            
            <motion.p 
              variants={childVariants}
              className="text-lg text-gray-300 mb-8 max-w-xl"
            >
              We combine cutting-edge technology with strategic thinking to create solutions that empower businesses to thrive in the digital era.
            </motion.p>
            
            <motion.div variants={childVariants} className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Explore Solutions
              </button>
              <button className="px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors">
                Contact Us
              </button>
            </motion.div>
            
            <motion.div variants={childVariants} className="mt-12">
              <p className="text-gray-400 mb-3">Trusted by industry leaders</p>
              <div className="flex flex-wrap gap-6 items-center">
                {/* Replace with actual client logos */}
                {['Microsoft', 'Amazon', 'Google', 'IBM'].map((company, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 + (i * 0.1) }}
                    className="text-gray-500 font-semibold"
                  >
                    {company}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Visual Element */}
          <div className="relative min-h-[400px]">
            {/* 3D Sphere Animation */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              style={{ y }}
            >
              <div className="relative w-80 h-80">
                {/* Core sphere */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full -translate-x-1/2 -translate-y-1/2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 0.9, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <div className="absolute inset-4 bg-gray-900 rounded-full"></div>
                </motion.div>
                
                {/* Orbiting elements */}
                {techIcons.map((tech, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={iconVariants}
                    initial="hidden"
                    animate={isLoaded ? "visible" : "hidden"}
                    className="absolute"
                    style={{
                      top: `${50 + 35 * Math.sin(i * (Math.PI / 2))}%`,
                      left: `${50 + 35 * Math.cos(i * (Math.PI / 2))}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <div className={`w-16 h-16 ${tech.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                      <span className="text-2xl font-bold">{tech.name}</span>
                    </div>
                  </motion.div>
                ))}
                
                {/* Connecting lines */}
                <svg className="absolute inset-0 w-full h-full" style={{ mixBlendMode: 'luminosity' }}>
                  {techIcons.map((_, i) => (
                    <motion.line
                      key={i}
                      x1="50%"
                      y1="50%"
                      x2={`${50 + 35 * Math.cos(i * (Math.PI / 2))}%`}
                      y2={`${50 + 35 * Math.sin(i * (Math.PI / 2))}%`}
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 + (i * 0.1) }}
                    />
                  ))}
                </svg>
                
                {/* Particle system */}
                {Array.from({ length: 20 }).map((_, i) => (
                  <motion.div
                    key={`particle-${i}`}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    initial={{
                      top: '50%',
                      left: '50%',
                      opacity: 0
                    }}
                    animate={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      opacity: [0, 0.8, 0],
                    }}
                    transition={{
                      duration: Math.random() * 5 + 5,
                      repeat: Infinity,
                      delay: Math.random() * 2
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Stats Section */}
        <motion.div 
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {[
            { value: '10+', label: 'Years Experience' },
            { value: '200+', label: 'Successful Projects' },
            { value: '50+', label: 'Tech Experts' },
            { value: '95%', label: 'Client Satisfaction' },
          ].map((stat, i) => (
            <motion.div 
              key={i} 
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.9 + (i * 0.1) }}
            >
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Bottom Wave Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0">
          <path 
            fill="#111827" 
            fillOpacity="1" 
            d="M0,192L48,186.7C96,181,192,171,288,181.3C384,192,480,224,576,213.3C672,203,768,149,864,144C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
    
  );
};

export default TechHeroSection;