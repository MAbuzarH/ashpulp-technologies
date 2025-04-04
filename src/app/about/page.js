// app/about/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata = {
  title: 'About Us | Our Company',
  description: 'Learn about our company history, mission, and values',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className=" w-full flex items-center justify-around ">
        <div className="relative h-80 md:h-96 overflow-hidden w-[95%] rounded-2xl">
            
        <Image
          src="/connecting-h.jpg" 
          alt="Our team working together"
          fill
         priority
          className="object-cover "
        />
        <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
            About Our Company
          </h1>
        </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-4xl mx-auto p-8 md:p-12">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <div className="w-16 h-1 mx-auto bg-blue-600 mb-6"></div>
          <p className="text-xl text-gray-600">
          To empower businesses and individuals with transformative technology solutions that maximize growth, efficiency, and profitability through the strategic use of AI, data analytics, software/web development, and digital marketing.
          </p>
        </div>

        {/* Company Story */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
          <div className="w-16 h-1 bg-blue-600 mb-6"></div>
          <p className="text-gray-600 mb-4">
            Founded in 2025, our company began with a vision to bridge the gap between complex technology and everyday business needs. What started as a small team of passionate developers has grown into a diverse group of professionals dedicated to creating meaningful digital experiences.
          </p>
          <p className="text-gray-600 mb-4">
            Through years of innovation and collaboration, we've helped hundreds of businesses transform their digital presence and operational efficiency. Our journey has been marked by continuous learning and adaptation to the ever-evolving technological landscape.
          </p>
          <p className="text-gray-600">
            Today, we stand as a leader in custom software development, committed to excellence and client satisfaction in everything we do.
          </p>
        </div>

        {/* Team Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Innovation</h3>
            <p className="text-gray-600">We embrace new ideas and technologies to solve complex problems in creative ways.</p>
          </div>
          <div className="bg-white p-6 shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Collaboration</h3>
            <p className="text-gray-600">We believe in the power of teamwork and partnership to achieve extraordinary results.</p>
          </div>
          <div className="bg-white p-6 shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Integrity</h3>
            <p className="text-gray-600">We conduct business with honesty, transparency, and unwavering ethical standards.</p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Development Comparison</h2>
          <div className="w-16 h-1 bg-blue-600 mb-6"></div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white border border-gray-300">
              <thead className="bg-black text-white">
                <tr>
                  <th className="border border-gray-300 p-3 text-left">Factor</th>
                  <th className="border border-gray-300 p-3 text-left">Low/No-Code</th>
                  <th className="border border-gray-300 p-3 text-left">Custom Build</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">Initial Cost</td>
                  <td className="border border-gray-300 p-3">Low</td>
                  <td className="border border-gray-300 p-3">High</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">Recurring Cost</td>
                  <td className="border border-gray-300 p-3">High (subscription/license fees)</td>
                  <td className="border border-gray-300 p-3">Low (hosting, minimal recurring fees)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">Scalability</td>
                  <td className="border border-gray-300 p-3">Limited (becomes expensive at scale)</td>
                  <td className="border border-gray-300 p-3">High (can be designed for scalability)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">Customization</td>
                  <td className="border border-gray-300 p-3">Limited</td>
                  <td className="border border-gray-300 p-3">Unlimited</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">Time to Market</td>
                  <td className="border border-gray-300 p-3">Fast</td>
                  <td className="border border-gray-300 p-3">Slow</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">Maintenance</td>
                  <td className="border border-gray-300 p-3">Managed by platform</td>
                  <td className="border border-gray-300 p-3">Managed by client (potentially expensive)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">Vendor Lock-In</td>
                  <td className="border border-gray-300 p-3">High</td>
                  <td className="border border-gray-300 p-3">None (you own the code)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">Long-Term Cost Predictability</td>
                  <td className="border border-gray-300 p-3">Unpredictable (pricing changes, add-ons)</td>
                  <td className="border border-gray-300 p-3">Predictable (once built, costs stabilize)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}