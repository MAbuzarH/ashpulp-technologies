'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const FeaturedVideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  return (
    <section ref={sectionRef} className="py-20 bg-gray-900 text-white">
      <div className="w-[95%] mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See Our Technology in Action
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Watch our featured video to discover how our innovative solutions are transforming businesses and setting new standards in the tech industry.
          </p>
        </div>
        
        {/* Video Container */}
        <motion.div 
          className="relative rounded-xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          {/* Video Border Glow Effect */}
          <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 blur-sm opacity-50"></div>
          
          <div className="relative aspect-video bg-gray-800 rounded-xl overflow-hidden">
            {/* Video Element */}
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster="/api/placeholder/1920/1080"
              onEnded={() => setIsPlaying(false)}
            >
              <source src="your-video-source.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Play Button Overlay */}
            {!isPlaying && (
              <div 
                className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer"
                onClick={handlePlayVideo}
              >
                <div className="relative">
                  {/* Play Button */}
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-y-[10px] border-y-transparent border-l-[18px] border-l-gray-900 ml-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Video Controls (shown when playing) */}
            {isPlaying && (
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <button 
                  className="p-2 bg-white/20 backdrop-blur-sm rounded-full"
                  onClick={handlePlayVideo}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </motion.div>
        
        {/* Video Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <motion.div 
            className="bg-gray-800 rounded-xl p-6 border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Product Showcase</h3>
                <p className="text-gray-400">An in-depth look at our flagship product and its powerful capabilities.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-gray-800 rounded-xl p-6 border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Innovation Process</h3>
                <p className="text-gray-400">Learn about our approach to developing cutting-edge technology solutions.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-gray-800 rounded-xl p-6 border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">ROI Analysis</h3>
                <p className="text-gray-400">See how our solutions deliver measurable results and exceptional return on investment.</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Additional Information Section */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Why This Matters</h3>
            <p className="text-gray-400 mb-6">
              In today's rapidly evolving technological landscape, staying ahead requires innovative solutions that not only address current challenges but anticipate future needs. Our featured video demonstrates how we're helping businesses achieve digital transformation with minimal disruption and maximum impact.
            </p>
            <ul className="space-y-3">
              {[
                "End-to-end implementation process",
                "Real-world client success stories",
                "Expert insights from our technical team",
                "Future roadmap and upcoming features"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <button className="px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Schedule a Demo
              </button>
            </div>
          </div>
          
          <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-6">Featured Resources</h3>
            
            <div className="space-y-6">
              {[
                {
                  title: "Technology White Paper",
                  description: "In-depth analysis of our technology stack and implementation methodology.",
                  icon: "document"
                },
                {
                  title: "Case Study Collection",
                  description: "Real-world examples of successful implementations across various industries.",
                  icon: "briefcase"
                },
                {
                  title: "Technical Webinar",
                  description: "Join our experts for a deep dive into the featured technology solutions.",
                  icon: "presentation"
                }
              ].map((resource, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-gray-700 flex items-center justify-center flex-shrink-0">
                    {resource.icon === "document" && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    )}
                    {resource.icon === "briefcase" && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )}
                    {resource.icon === "presentation" && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{resource.title}</h4>
                    <p className="text-sm text-gray-400">{resource.description}</p>
                    <a href="#" className="text-sm text-blue-400 hover:text-blue-300 mt-1 inline-block">
                      Access Resource →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVideoSection;