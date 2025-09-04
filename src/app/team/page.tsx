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

    <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-400 to-neutral-900 bg-clip-text text-center text-4xl font-bold text-transparent md:text-6xl">
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-teal-500 via-blue-500 to-blue-700 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span>Our Team</span>
              </div>
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-teal-500 via-blue-500 to-blue-700 py-4">
                <span>Our Team</span>
              </div>
            </div>
            &nbsp;<span className='bg-opacity-50 bg-gradient-to-b from-neutral-400 to-neutral-900 bg-clip-text text-center text-4xl font-bold text-transparent md:text-6xl'>@MI Lab, IIIT Delhi</span>
            
          </h1>
    
          <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-400 to-neutral-900 bg-clip-text text-center  italic text-transparent text-2xl">
            
            The passionate minds driving &nbsp;
      <span className="bg-gradient-to-br from-teal-200 to-teal-500 bg-clip-text text-transparent">
        microbiome research at IIIT-Delhi.
      </span>
          </h1>
      {/* Director Section */}
<motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeIn}
  custom={1}
  className="mb-32 pt-20"
>
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 items-start">
    
    {/* Profile Image Card */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="w-[280px] h-[340px] mx-auto md:mx-0 relative overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-blue-50 to-white ring-1 ring-gray-200"
    >
      <Image
        src={director.img}
        alt={director.name}
        fill
        className="object-cover object-top"
      />
    </motion.div>

    {/* Profile Info */}
    <div className="space-y-2">
      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
        {director.name}
      </h2>

      <div className="text-base md:text-lg text-blue-700 font-medium leading-relaxed italic">
        <p>
          Founder & Director,{" "}
          <span className="font-semibold">Microbiome Informatics Lab</span>, IIIT Delhi
        </p>
        <p>Assistant Professor, IIIT Delhi</p>
        <p>
          Associate Editor,{" "}
          <span className="italic">NPJ Biofilms and Microbiomes</span>
        </p>
        <p>
          Editorial Board Member,{" "}
          <span className="italic">NPJ Systems Biology and Applications</span>
        </p>
      </div>

      <p className="text-gray-700 text-  text-justify">
        {director.bio}
      </p>

      {/* Social Links */}
     <div className="flex gap-4 text-3xl mt-2">
                  <a href={`https://www.linkedin.com/in/dr-tarini-shankar-ghosh-3b211868/`} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-blue-600 hover:text-blue-800" />
                  </a>
                  <a href={`https://scholar.google.com/citations?user=bAUS2DsAAAAJ&hl=en`} target="_blank" rel="noopener noreferrer">
                    <SiGooglescholar className="text-blue-500 hover:text-blue-700" />
                  </a>
                  <a href={`https://orcid.org/0000-0001-9570-0365`} target="_blank" rel="noopener noreferrer">
                    <SiOrcid className="text-green-600 hover:text-green-800" />
                  </a>

                  <a href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=tarini.ghosh@iiitd.ac.in`}>
                    <FaEnvelope className="text-yellow-500 hover:text-yellow-600" />
                  </a>
              </div>
    </div>
  </div>
</motion.section>


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