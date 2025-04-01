'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

// Sample project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with secure payment processing and inventory management.',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB'],
    imageUrl: '/project1.jpg', // Replace with your actual image paths
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'An elegant portfolio website showcasing creative work with smooth animations and responsive design.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    imageUrl: '/project2.jpg',
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A productivity application for organizing tasks with real-time collaboration features.',
    tags: ['Next.js', 'Firebase', 'Redux', 'Material UI'],
    imageUrl: '/project3.jpg',
  },
  {
    id: 4,
    title: 'Social Media Dashboard',
    description: 'A comprehensive analytics dashboard to track social media performance across multiple platforms.',
    tags: ['React', 'D3.js', 'GraphQL', 'Tailwind CSS'],
    imageUrl: '/project4.jpg',
  },
];

// Project Card Component
const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px 0px" });
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.2,
        ease: [0.25, 0.1, 0.25, 1.0] 
      }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        {/* Using a placeholder image since actual images aren't available */}
        <div className="relative h-full w-full bg-gradient-to-r from-gray-300 to-gray-400">
          <div className="absolute inset-0 flex items-center justify-center text-white/30 text-xl font-bold">
            {project.title} Preview
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <motion.h3 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
          className="text-xl font-bold mb-2 text-gray-800"
        >
          {project.title}
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, delay: index * 0.2 + 0.4 }}
          className="text-gray-600 mb-4"
        >
          {project.description}
        </motion.p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag, tagIndex) => (
            <motion.span
              key={tagIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: index * 0.2 + 0.5 + (tagIndex * 0.1) }}
              className="px-3 py-1 text-xs font-semibold bg-gray-100 text-gray-700 rounded-full"
            >
              {tag}
            </motion.span>
          ))}
        </div>
        
        <motion.button
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, delay: index * 0.2 + 0.7 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
        >
          View Project
        </motion.button>
      </div>
    </motion.div>
  );
};

// Main Projects Section Component
export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });
  
  return (
    <section className="bg-gray-100 py-20">
      <div className="w-[95%] mx-auto max-w-7xl" ref={sectionRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold text-gray-800 mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '120px' } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-gray-800 mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Discover a selection of my recent work showcasing creative solutions
            and technical expertise across various domains.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors duration-300"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}