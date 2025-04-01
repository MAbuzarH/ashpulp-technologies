'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, useAnimation, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const StatsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const controls = useAnimation();
  
  // Refs for each stat counter
  const experienceRef = useRef(null);
  const clientsRef = useRef(null);
  const companiesRef = useRef(null);
  
  const [experienceCount, setExperienceCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [companiesCount, setCompaniesCount] = useState(0);
  
  const experienceInView = useInView(experienceRef, { once: true });
  const clientsInView = useInView(clientsRef, { once: true });
  const companiesInView = useInView(companiesRef, { once: true });
  
  // Parallax effect for image
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const headingY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  
  // Start animations when section is in view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);
  
  // Counter animation for experience
  useEffect(() => {
    if (experienceInView) {
      let start = 0;
      const end = 10;
      const duration = 2000; // 2 seconds
      const frameDuration = 1000 / 60; // 60fps
      const totalFrames = Math.round(duration / frameDuration);
      const increment = end / totalFrames;
      
      const timer = setInterval(() => {
        start += increment;
        setExperienceCount(Math.min(Math.floor(start), end));
        
        if (start >= end) {
          clearInterval(timer);
        }
      }, frameDuration);
      
      return () => clearInterval(timer);
    }
  }, [experienceInView]);
  
  // Counter animation for clients
  useEffect(() => {
    if (clientsInView) {
      let start = 0;
      const end = 100;
      const duration = 2500; // 2.5 seconds
      const frameDuration = 1000 / 60;
      const totalFrames = Math.round(duration / frameDuration);
      const increment = end / totalFrames;
      
      const timer = setInterval(() => {
        start += increment;
        setClientsCount(Math.min(Math.floor(start), end));
        
        if (start >= end) {
          clearInterval(timer);
        }
      }, frameDuration);
      
      return () => clearInterval(timer);
    }
  }, [clientsInView]);
  
  // Counter animation for companies
  useEffect(() => {
    if (companiesInView) {
      let start = 0;
      const end = 2;
      const duration = 1500; // 1.5 seconds
      const frameDuration = 1000 / 60;
      const totalFrames = Math.round(duration / frameDuration);
      const increment = end / totalFrames;
      
      const timer = setInterval(() => {
        start += increment;
        setCompaniesCount(Math.min(Math.floor(start), end));
        
        if (start >= end) {
          clearInterval(timer);
        }
      }, frameDuration);
      
      return () => clearInterval(timer);
    }
  }, [companiesInView]);
  
  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.8
    },
    visible: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };
  
  // Text reveal animation for headings
  const textRevealVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };
  
  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: 90
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 10
      }
    }
  };
  
  // Split heading text for letter animation
  const headingText = "Our Achievements";
  const headingLetters = headingText.split("");
  
  return (
    <section 
      ref={sectionRef} 
      className="py-20  overflow-hidden relative"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-24 h-24 rounded-full bg-indigo-100 opacity-60"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-purple-100 opacity-60"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
            rotate: [0, -8, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-amber-100 opacity-60"
          animate={{
            x: [0, 25, 0],
            y: [0, -15, 0],
            rotate: [0, 15, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
      
      {/* Main content */}
      <div className="w-[95%] mx-auto max-w-7xl ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Stats column */}
          <motion.div 
            className="w-full md:w-1/2 flex flex-col space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            style={{ y: headingY }}
          >
            {/* Animated heading */}
            <motion.h2 
              className="text-5xl md:text-6xl font-bold text-gray-800 perspective-1000 mb-8" 
              variants={textRevealVariants}
            >
              {headingLetters.map((letter, index) => (
                <motion.span 
                  key={index} 
                  variants={letterVariants}
                  className="inline-block text-[1.4rem] sm:text-[2.1rem] md:text-[2rem] lg:text-[2.4rem] text-gray-600"
                  style={{ 
                    transformStyle: "preserve-3d",
                    display: letter === " " ? "inline" : "inline-block"

                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.h2>
            
            {/* Stats items */}
            <motion.div 
              ref={experienceRef}
              variants={itemVariants} 
              className="bg-white p-6 rounded-xl shadow-lg flex items-center transform hover:scale-105 transition-transform duration-300"
              whileHover={{
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                y: -5
              }}
            >
              <motion.div 
                className="mr-4 w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "loop", ease: "linear" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
              <div>
                <h3 className="text-4xl font-bold text-gray-800 flex items-baseline">
                  <span className="mr-1">{experienceCount}</span>
                  <span className="text-indigo-600">+</span>
                </h3>
                <p className="text-gray-600">years of experience</p>
              </div>
            </motion.div>
            
            <motion.div 
              ref={clientsRef}
              variants={itemVariants} 
              className="bg-white p-6 rounded-xl shadow-lg flex items-center transform hover:scale-105 transition-transform duration-300"
              whileHover={{
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                y: -5
              }}
            >
              <motion.div 
                className="mr-4 w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 0, -10, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </motion.div>
              <div>
                <h3 className="text-4xl font-bold text-gray-800 flex items-baseline">
                  <span className="mr-1">{clientsCount}</span>
                  <span className="text-purple-600">+</span>
                </h3>
                <p className="text-gray-600">satisfied clients</p>
              </div>
            </motion.div>
            
            <motion.div 
              ref={companiesRef}
              variants={itemVariants} 
              className="bg-white p-6 rounded-xl shadow-lg flex items-center transform hover:scale-105 transition-transform duration-300"
              whileHover={{
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                y: -5
              }}
            >
              <motion.div 
                className="mr-4 w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center"
                animate={{
                  y: [0, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </motion.div>
              <div>
                <h3 className="text-4xl font-bold text-gray-800 flex items-baseline">
                  <span className="mr-1">{companiesCount}</span>
                  <span className="text-amber-600">+</span>
                </h3>
                <p className="text-gray-600">companies</p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Image column */}
          <motion.div 
            className="w-full md:w-[45%]"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.5,
              type: "spring",
              stiffness: 50
            }}
            style={{ y: imageY }}
          >
            <motion.div 
              className="relative overflow-hidden rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image container with animation effects */}
              <motion.div 
                className="w-full h-full  "
                initial={{ filter: "blur(10px)" }}
                animate={{ filter: "blur(0px)" }}
                transition={{ duration: 1.5, delay: 0.8 }}
              >
                {/* Replace with your actual image path */}
                <Image 
                  src="/laptopt.jpg" 
                  alt="Our achievements illustrated" 
                  width={800} 
                  height={600}
                  priority
                  className="w-full h-auto object-cover"
                />
                
              </motion.div>
              
              {/* Decorative overlays for visual effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/40 mix-blend-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 1 }}
              />
              
              <motion.div 
                className="absolute inset-0 border-4 border-white/30 rounded-2xl"
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              />
              
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              />
              
              {/* Decorative accents */}
              <motion.div 
                className="absolute top-6 right-6 w-20 h-20 rounded-full border-4 border-white/30"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 10, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
              />
              
              <motion.div 
                className="absolute bottom-6 left-6 w-12 h-12 rounded-full border-2 border-white/50"
                animate={{
                  scale: [1, 1.2, 1],
                  x: [0, 10, 0],
                  y: [0, -5, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;