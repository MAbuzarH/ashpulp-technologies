// components/TeamSection.tsx
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
      name: 'Sarah Johnson',
      designation: 'CEO & Founder',
      image: '/team/sarah-johnson.jpg',
      linkedIn: 'https://linkedin.com/in/sarah-johnson'
    },
    {
      id: 2,
      name: 'Michael Chen',
      designation: 'Lead Developer',
      image: '/team/michael-chen.jpg',
      linkedIn: 'https://linkedin.com/in/michael-chen'
    },
    {
      id: 3,
      name: 'Amara Rodriguez',
      designation: 'UX Designer',
      image: '/team/amara-rodriguez.jpg',
      linkedIn: 'https://linkedin.com/in/amara-rodriguez'
    },
    {
      id: 4,
      name: 'James Wilson',
      designation: 'Marketing Director',
      image: '/team/james-wilson.jpg',
      linkedIn: 'https://linkedin.com/in/james-wilson'
    },
  ];

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the talented individuals who make our company exceptional. 
            Our diverse team brings creativity and expertise to every project.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
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
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-2">
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