// components/TeamSection.tsx
"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Team member interface
// interface TeamMember {
//   id: number;
//   name: string;
//   designation: string;
//   image: string;
//   linkedIn: string;
// }

const TeamSection = () => {
  // Sample team member data
  const teamMembers = [
    {
      id: 1,
      name: 'Arsalan Khan',
      designation: 'Chief Executive Officer',
      image: '/lin2.jpg',
      linkedIn: '//lin1.jpg'
    },
    {
      id: 2,
      name: 'Aman Khan',
      designation: 'Chief Operating Officer',
      image: '/lin2.jpg',
      linkedIn: 'https://linkedin.com/in/michael-chen'
    },
    {
      id: 3,
      name: 'Bilal Ahmed',
      designation: 'ML/AI consultant',
      image: '/lin2.jpg',
      linkedIn: 'https://linkedin.com/in/amara-rodriguez'
    },
    {
      id: 4,
      name: 'Muddassir Khan',
      designation: 'Chief Technology Officer',
      image: '/lin2.jpg',
      linkedIn: 'https://linkedin.com/in/james-wilson'
    },
    {
      id: 5,
      name: 'Arif Khan',
      designation: 'Chief Behavioral Science Officer',
      image: '/lin2.jpg',
      linkedIn: 'https://linkedin.com/in/james-wilson'
    }
  ];

  // State for current slide and screen size
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);

  // Update slides to show based on window size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1); // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2); // Tablet: 2 cards
      } else {
        setSlidesToShow(4); // Desktop: 4 cards
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate total slides
  const totalSlides = teamMembers.length;
  const maxIndex = totalSlides - slidesToShow;

  // Navigation functions
  const nextSlide = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto-play (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, maxIndex]);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the talented individuals who make our company exceptional. 
            Our diverse team brings creativity and expertise to every project.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Carousel Track */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
                width: `${(totalSlides / slidesToShow) * 100}%`
              }}
            >
              {teamMembers.map((member) => (
                <div 
                  key={member.id} 
                  className="px-2"
                  style={{ width: `${100 / totalSlides}%` }}
                >
                  <TeamMemberCard member={member} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-100"
            aria-label="Previous slide"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-gray-700" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-100"
            aria-label="Next slide"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-gray-700" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Navigation (Optional) */}
          <div className="flex justify-center mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 mx-1 rounded-full ${
                  currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Team Member Card Component
// interface TeamMemberCardProps {
//   member: TeamMember;
// }

const TeamMemberCard = ({ member }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-2 h-full">
      {/* Team Member Image */}
      <div className="relative h-80 w-full">
        <Image
          src={member.image}
          alt={`${member.name} - ${member.designation}`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* Team Member Info */}
      <div className="p-6 text-center">
        {/* Designation in bold black */}
        <h3 className="font-bold text-black text-lg mb-1">
          {member.designation}
        </h3>
        
        {/* Name */}
        <p className="text-gray-700 mb-4">{member.name}</p>
        
        {/* LinkedIn Icon */}
        <a 
          href={member.linkedIn} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block text-blue-600 hover:text-blue-800 transition-colors"
          aria-label={`${member.name}'s LinkedIn profile`}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-6 h-6"
          >
            <path d="M19.7 3H4.3A1.3 1.3 0 003 4.3v15.4A1.3 1.3 0 004.3 21h15.4a1.3 1.3 0 001.3-1.3V4.3A1.3 1.3 0 0019.7 3zM8.339 18.338H5.667v-8.59h2.672v8.59zM7.004 8.574a1.548 1.548 0 11-.002-3.096 1.548 1.548 0 01.002 3.096zm11.335 9.764H15.67v-4.177c0-.996-.017-2.278-1.387-2.278-1.389 0-1.601 1.086-1.601 2.206v4.25h-2.667v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.779 3.203 4.092v4.711z"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default TeamSection;