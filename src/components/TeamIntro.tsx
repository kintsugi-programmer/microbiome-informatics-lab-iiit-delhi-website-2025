'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaUsers, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

const TeamPageCard = () => {
  // All team members data
  const allTeamMembers = [
    { name: 'Dr. Tarini Shankar Ghosh', role: 'Director', img: '/img/tarini.png' },
    { name: 'Omprakash Shete', role: 'PhD Scholar', img: '/img/team/omprakash.jpg' },
    { name: 'Dr. Nidhi P Raval', role: 'Project Scientist', img: '/img/team/nidhi.jpg' },
    { name: 'Sourav Goswami', role: 'PhD Scholar', img: '/img/team/sourav.jpg' },
    { name: 'Alisha Ansari', role: 'PhD Scholar', img: '/img/team/alisha.jpeg' },
    { name: 'Shivangi Verma', role: 'PhD Scholar', img: '/img/team/shivangi.jpg' },
    { name: 'Deepak Kandhal', role: 'PhD Scholar', img: '/img/team/deepak.jpg' }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="w-full"
    >
      <Link href="/team" className="block group">
        <motion.div
          whileHover={{ y: -4, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="bg-white border rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-cyan-400"
        >
          {/* Horizontal Layout */}
          <div className="flex flex-col lg:flex-row items-center gap-8">
            
            {/* Left Section - Header & Description */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="bg-gradient-to-r from-teal-500 via-blue-500 to-blue-700 bg-clip-text text-transparent text-2xl md:text-3xl font-bold mb-2">
                Our Team <span className="text-gray-700">@MI Lab</span>
              </h1>
              
              <p className="text-gray-600 italic mb-4 text-sm md:text-base">
                The passionate minds driving{" "}
                <span className="bg-gradient-to-br from-teal-400 to-teal-600 bg-clip-text text-transparent font-medium">
                  microbiome research at IIIT-Delhi.
                </span>
              </p>

              {/* Stats Row */}
              <div className="flex justify-center lg:justify-start gap-6 mb-4">
                <div className="text-center">
                  <div className="text-xl font-bold text-cyan-700">{allTeamMembers.length - 1}+</div>
                  <div className="text-xs text-gray-500">Researchers</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-700">1</div>
                  <div className="text-xs text-gray-500">Director</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-teal-700">6+</div>
                  <div className="text-xs text-gray-500">Focus Areas</div>
                </div>
              </div>
            </div>

            {/* Center Section - Team Member Mini Icons */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-700 mb-4 text-center">Research Team</h3>
              <div className="flex flex-wrap justify-center gap-3 mb-4">
                {allTeamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ 
                      delay: index * 0.1, 
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200 
                    }}
                    whileHover={{ 
                      scale: 1.2, 
                      zIndex: 10,
                      y: -3
                    }}
                    className="relative group/avatar"
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 relative overflow-hidden rounded-full shadow-md ring-2 ring-white group-hover:ring-cyan-300 transition-all duration-300">
                      <Image
                        src={member.img}
                        alt={member.name}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-20">
                      {member.name.split(' ').slice(0, 2).join(' ')}
                      <br />
                      <span className="text-gray-300 text-xs">{member.role}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Research Focus Tags */}
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  'Human Microbiome',
                  'Machine Learning',
                  'Metagenomics',
                  'Biomarkers'
                ].map((area, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-teal-50 to-blue-50 text-gray-600 rounded-full text-xs font-medium border border-teal-100"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Section - CTA Button */}
            <div className="flex-shrink-0">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.0 }}
                className="pointer-events-auto rounded-xl bg-teal-500 px-6 py-3 font-extrabold uppercase text-neutral-50 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-100 flex items-center gap-2"
              >
                <FaUsers />
                Meet Team
                <motion.div
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <FaArrowRight className="text-sm" />
                </motion.div>
              </motion.button>
            </div>

          </div>

          {/* Bottom Research Areas (Mobile/Tablet) */}
          <div className="mt-6 lg:hidden">
            <h3 className="text-center text-sm font-semibold text-gray-600 mb-3">Research Focus Areas</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                'Computational Biology',
                'Personalized Medicine',
                'Biomarker Discovery'
              ].map((area, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gradient-to-r from-teal-50 to-blue-50 text-gray-600 rounded-full text-xs font-medium border border-teal-100"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Subtle Background Elements */}
          <div className="absolute top-4 right-4 text-2xl opacity-10 pointer-events-none">
            🧬
          </div>
          <div className="absolute bottom-4 left-4 text-xl opacity-10 pointer-events-none">
            🔬
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default TeamPageCard;