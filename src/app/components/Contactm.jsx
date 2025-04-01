// components/ContactSection.tsx
'use client';

import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    description: '',
    isHuman: false
  });

  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target).checked : undefined;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-l from-blue-300 to-teal-300 rounded-full opacity-20 blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto max-w-5xl relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it. Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-gray-100">
          {/* Row 1: Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative">
              <label 
                className={`absolute left-4 transition-all duration-300 ${
                  focused === 'name' || formData.name 
                    ? 'text-sm text-blue-600 -top-2.5 bg-white px-1' 
                    : 'text-gray-500 top-3'
                }`}
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused(null)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                required
              />
            </div>
            <div className="relative">
              <label 
                className={`absolute left-4 transition-all duration-300 ${
                  focused === 'email' || formData.email 
                    ? 'text-sm text-blue-600 -top-2.5 bg-white px-1' 
                    : 'text-gray-500 top-3'
                }`}
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused(null)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                required
              />
            </div>
          </div>

          {/* Row 2: Phone and Budget */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative">
              <label 
                className={`absolute left-4 transition-all duration-300 ${
                  focused === 'phone' || formData.phone 
                    ? 'text-sm text-blue-600 -top-2.5 bg-white px-1' 
                    : 'text-gray-500 top-3'
                }`}
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => setFocused('phone')}
                onBlur={() => setFocused(null)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </div>
            <div className="relative">
              <label 
                className={`absolute left-4 transition-all duration-300 ${
                  focused === 'budget' || formData.budget 
                    ? 'text-sm text-blue-600 -top-2.5 bg-white px-1' 
                    : 'text-gray-500 top-3'
                }`}
                htmlFor="budget"
              >
                Project Budget
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                onFocus={() => setFocused('budget')}
                onBlur={() => setFocused(null)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none transition-all duration-300 bg-white"
              >
                <option value="" disabled hidden></option>
                <option value="less-5k">Less than $5,000</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-20k">$10,000 - $20,000</option>
                <option value="20k-50k">$20,000 - $50,000</option>
                <option value="more-50k">$50,000+</option>
              </select>
              <div className="absolute right-4 top-3.5 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          {/* Row 3: Project Description */}
          <div className="mb-6 relative">
            <label 
              className={`absolute left-4 transition-all duration-300 ${
                focused === 'description' || formData.description 
                  ? 'text-sm text-blue-600 -top-2.5 bg-white px-1' 
                  : 'text-gray-500 top-3'
              }`}
              htmlFor="description"
            >
              Project Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              onFocus={() => setFocused('description')}
              onBlur={() => setFocused(null)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 min-h-[120px] resize-y"
              required
            ></textarea>
          </div>

          {/* Human detector checkbox */}
          <div className="mb-8">
            <label className="flex items-center space-x-3 cursor-pointer group">
              <div className="relative">
                <input
                  type="checkbox"
                  name="isHuman"
                  checked={formData.isHuman}
                  onChange={handleChange}
                  className="opacity-0 absolute h-6 w-6"
                  required
                />
                <div className="w-6 h-6 border-2 border-gray-300 rounded group-hover:border-blue-500 transition-colors flex items-center justify-center">
                  {formData.isHuman && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </div>
              <span className="text-gray-700 select-none">I confirm I am a human and not a robot</span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Contact Information */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">(123) 456-7890</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-600">info@yourcompany.com</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-gray-600">123 Business Street, Suite 100<br />City, State 12345</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;