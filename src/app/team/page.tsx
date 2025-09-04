'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import teamData from '@/data/TeamMembers.json';
import { motion, AnimatePresence } from 'framer-motion';
import { SiGooglescholar, SiOrcid } from 'react-icons/si';

// Team Member Type
interface TeamMember {
  name: string;
  role: string;
  img: string;
  linkedin: string;
  instagram: string;
  email: string;
  profile?: string;
  bio?: string;
  experience?: string[];
  googleScholar?: string;
  orcid?: string;
}

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const director: TeamMember = teamData.director;
  const members: TeamMember[] = teamData.members;

  return (
    <div className="bg-white text-gray-900 min-h-screen px-4 md:px-20 py-28 font-sans">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={0}
        className="text-center mb-20"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-4">
          Meet Our Team
        </h1>
        <p className="text-lg text-gray-600">
          The passionate minds driving microbiome research at IIIT-Delhi.
        </p>
      </motion.div>

      {/* Director Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={1}
        className="mb-28"
      >
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 items-center">
          <div className="flex justify-center md:justify-start">
            <div className="w-[180px] h-[220px] relative overflow-hidden rounded-xl shadow-md">
              <Image
                src={director.img}
                alt={director.name}
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
              Director at MI Lab
            </h2>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
              {director.name}
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
              {director.bio}
            </p>
            <div className="flex gap-4 text-lg">
              <a href={director.linkedin} target="_blank">
                <FaLinkedin className="text-blue-600 hover:text-blue-800" />
              </a>
              <a href={director.instagram} target="_blank">
                <FaInstagram className="text-pink-500 hover:text-pink-700" />
              </a>
              <a href={`mailto:${director.email}`}>
                <FaEnvelope className="text-yellow-500 hover:text-yellow-600" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Team Members Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={1}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold mb-10 text-center text-cyan-700">Research Team</h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {members.map((member, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              onClick={() => setSelectedMember(member)}
              className="bg-white border rounded-2xl p-6 shadow hover:shadow-lg transition-all hover:-translate-y-2 hover:border-cyan-400 duration-300 cursor-pointer text-center"
            >
              <div className="w-[210px] h-[240px] relative overflow-hidden rounded-xl mx-auto mb-4 shadow-sm">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <h2 className="text-xl font-semibold">{member.name}</h2>
              <p className="text-sm text-gray-500 mb-2">{member.role}</p>
              <div className="flex justify-center gap-4 text-2xl mt-2">
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-blue-600 hover:text-blue-800" />
                  </a>
                )}
                {member.googleScholar && (
                  <a href={member.googleScholar} target="_blank" rel="noopener noreferrer">
                    <SiGooglescholar className="text-blue-500 hover:text-blue-700" />
                  </a>
                )}
                {member.orcid && (
                  <a href={member.orcid} target="_blank" rel="noopener noreferrer">
                    <SiOrcid className="text-green-600 hover:text-green-800" />
                  </a>
                )}
                {member.email && (
                  <a href={`mailto:${member.email}`}>
                    <FaEnvelope className="text-yellow-500 hover:text-yellow-600" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-center items-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              className="bg-white rounded-3xl shadow-xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="md:w-1/2 p-6 flex justify-center items-center bg-gradient-to-br from-teal-50 to-white">
                <div className="w-[250px] h-[300px] relative overflow-hidden rounded-xl shadow-md">
                  <Image
                    src={selectedMember.img}
                    alt={selectedMember.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <div className="md:w-1/2 p-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{selectedMember.name}</h2>
                  <p className="text-sm text-gray-500 mb-2">{selectedMember.role}</p>
                  {selectedMember.bio && (
                    <p className="text-sm text-gray-700 mt-2 leading-relaxed">{selectedMember.bio}</p>
                  )}
                  {selectedMember.profile && (
                    <a
                      href={selectedMember.profile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm mt-2 text-blue-600 hover:underline"
                    >
                      View Portfolio
                    </a>
                  )}
                  {selectedMember.experience && selectedMember.experience.length > 0 && (
                    <div className="mt-4">
                      <h3 className="text-sm font-semibold text-gray-800 mb-1">Experience</h3>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        {selectedMember.experience.map((exp, idx) => (
                          <li key={idx}>{exp}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="mt-6 flex gap-4 text-2xl">
                  {selectedMember.linkedin && (
                    <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="text-blue-600 hover:text-blue-800" />
                    </a>
                  )}
                  {selectedMember.googleScholar && (
                    <a href={selectedMember.googleScholar} target="_blank" rel="noopener noreferrer">
                      <SiGooglescholar className="text-blue-500 hover:text-blue-700" />
                    </a>
                  )}
                  {selectedMember.orcid && (
                    <a href={selectedMember.orcid} target="_blank" rel="noopener noreferrer">
                      <SiOrcid className="text-green-600 hover:text-green-800" />
                    </a>
                  )}
                  {selectedMember.instagram && (
                    <a href={selectedMember.instagram} target="_blank" rel="noopener noreferrer">
                      <FaInstagram className="text-pink-500 hover:text-pink-700" />
                    </a>
                  )}
                  {selectedMember.email && (
                    <a href={`mailto:${selectedMember.email}`}>
                      <FaEnvelope className="text-yellow-500 hover:text-yellow-700" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TeamPage;