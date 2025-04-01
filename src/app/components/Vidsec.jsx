'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from 'framer-motion';

const VideoSection = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  
  // For scroll-based animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Transform values based on scroll position
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.05, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.8]);
  
  // Spring physics for smoother animations
  const springRotation = useSpring(rotation, { stiffness: 100, damping: 30 });
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 });
  
  // Motion values for interactive hover effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Handle mouse movement for 3D rotation effect
  const handleMouseMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate distance from center (normalized from -1 to 1)
    const rotateX = ((e.clientY - centerY) / rect.height) * 5;
    const rotateY = ((e.clientX - centerX) / rect.width) * -5;
    
    mouseX.set(rotateY);
    mouseY.set(rotateX);
  };
  
  // Reset mouse position when mouse leaves
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full overflow-hidden bg-black min-h-screen flex items-center justify-center py-20"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background animated patterns */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <motion.div 
          className="absolute top-0 left-0 w-full h-full"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            backgroundImage: 'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)'
          }}
        />
        
        {/* Animated rotating circles */}
        <motion.div 
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 15, repeat: Infinity, repeatType: "reverse" }
          }}
        />
        
        <motion.div 
          className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-r from-orange-500/20 to-pink-500/20 blur-3xl"
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 18, repeat: Infinity, repeatType: "reverse" }
          }}
        />
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Video Title */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            animate={{ textShadow: ['0 0 8px rgba(255,255,255,0.4)', '0 0 16px rgba(255,255,255,0.2)', '0 0 8px rgba(255,255,255,0.4)'] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Featured Video
          </motion.h2>
          <motion.div 
            className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: '6rem' } : { width: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          />
          <motion.p 
            className="text-gray-300 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Watch our latest masterpiece showcasing incredible design and innovation
          </motion.p>
        </motion.div>
        
        {/* Video Container with Rotating Animation */}
        <motion.div
          className="relative rounded-lg overflow-hidden shadow-2xl"
          style={{ 
            rotateX: mouseY,
            rotateY: mouseX,
            rotate: springRotation,
            scale: springScale,
            opacity,
            transformPerspective: 1000,
            transformStyle: "preserve-3d"
          }}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          {/* Video Border Animation */}
          <motion.div 
            className="absolute -inset-1 rounded-lg z-0"
            animate={{ 
              background: [
                'linear-gradient(0deg, #6366f1, #8b5cf6, #ec4899)',
                'linear-gradient(90deg, #8b5cf6, #ec4899, #6366f1)',
                'linear-gradient(180deg, #ec4899, #6366f1, #8b5cf6)',
                'linear-gradient(270deg, #6366f1, #ec4899, #8b5cf6)',
              ]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          
          {/* Video element */}
          <div className="relative z-10 rounded-lg overflow-hidden bg-black">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <video 
                ref={videoRef}
                controls
                className="w-full h-auto aspect-video"
                poster="/api/placeholder/1920/1080"
              >
                {/* Replace with your actual video sources */}
                <source src="/vidsec.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
            
            {/* Play button overlay that disappears on click */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center bg-black/40 group cursor-pointer"
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 0.9 }}
              onClick={() => {
                // Logic to play video and hide overlay
                if (videoRef.current) {
                  videoRef.current.play();
                  // Add code to hide this overlay if needed
                }
              }}
            >
              <motion.div
                className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 0 30px rgba(255,255,255,0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-purple-600 border-b-[15px] border-b-transparent ml-2"
                    animate={{ 
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Video Caption */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-gray-300 text-sm md:text-base">
            © 2025 | Watch in full HD for the best experience
          </p>
        </motion.div>
      </div>
      
      {/* Corner decorative elements */}
      <motion.div 
        className="absolute top-10 left-10 w-40 h-40 pointer-events-none"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]) }}
      >
        <motion.div 
          className="absolute inset-0 border-l-2 border-t-2 border-white/20"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 1, delay: 1 }}
        />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 right-10 w-40 h-40 pointer-events-none"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]) }}
      >
        <motion.div 
          className="absolute inset-0 border-r-2 border-b-2 border-white/20"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 1, delay: 1.2 }}
        />
      </motion.div>
    </section>
  );
};

export default VideoSection;