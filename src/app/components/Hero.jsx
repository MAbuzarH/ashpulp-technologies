// components/HeroSection.tsx
import Image from 'next/image';
import Link from 'next/link';



const HeroSection = () => {
  return (
    <div className="flex justify-center items-center w-full py-10">
      <div className="relative w-[95%] h-[80vh] rounded-lg overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Hero Background"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 95vw"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Content Container */}
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4 sm:px-8 md:px-16 lg:px-32">
          {/* Hero Text */}
          <h1 className="text-3xl md:text-4xl font-syne  lg:text-5xl font-bold text-white  mb-4">
            Transform Your Vision into Reality
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl ">
            We help innovative businesses build remarkable digital products 
            that make a difference in people's lives.
          </p>
          
          {/* Call to Action Button */}
          <Link href="/contact">
            <button className="bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors duration-300 transform hover:scale-105">
              Start a Project
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;