'use client';
import React from 'react';
import Image from 'next/image';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { SiGooglescholar, SiOrcid } from 'react-icons/si';

// Director data - in a real app, this would come from props or a data file
const directorData = {
  name: "Dr. Tarini Shankar Ghosh",
  role: "Group Leader",
  img: "/img/tarini.png",
  linkedin: "https://www.linkedin.com/in/dr-tarini-shankar-ghosh-3b211868",
  email: "tarini.ghosh@iiitd.ac.in",
  bio: "I am a computational microbiologist focussing on the human microbiome. Using a combination of publicly available data as well as in-house generated microbiome data from specific India sub-populations, I aim to use a range of data-driven statistical, machine-learning and deep learning-based approaches to unearth the basis of resilience, assembly and stability of the human microbiome, investigate the basis of the inter-personal variability of the microbiome and utilize these insights to formulate and propose data-driven personalized and/or sub-population-level microbiome-targeted/microbiome-derived diagnostics and therapeutics. I have spearheaded a range of studies focusing on the role of gut microbiome in aging and life-style; interaction between disease-associated and aging-associated microbiome changes and; the most importantly the role of the gut microbiome as a transducer in modulating the role of a healthy diet on different aspects of host clinical phenotypes like frailty, improved cognition and behaviour."
};

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

const DirectorProfile = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen px-4 md:px-20 py-16 font-sans">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-400 to-neutral-900 bg-clip-text text-center text-4xl font-bold text-transparent md:text-6xl">
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-teal-500 via-blue-500 to-blue-700 [text-shadow:0_0_rgba(0,0,0,0.1)]">
              <span>Lab Director</span>
            </div>
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-teal-500 via-blue-500 to-blue-700 py-4">
              <span>Lab Director</span>
            </div>
          </div>
          <span className='bg-opacity-50 bg-gradient-to-b from-neutral-400 to-neutral-900 bg-clip-text text-center text-4xl font-bold text-transparent md:text-6xl'>&nbsp;@MI Lab</span>
        </h1>
        
        <h2 className="bg-opacity-50 bg-gradient-to-b from-neutral-400 to-neutral-900 bg-clip-text text-center italic text-transparent text-2xl mt-4">
          Leading &nbsp;
          <span className="bg-gradient-to-br from-teal-200 to-teal-500 bg-clip-text text-transparent">
            microbiome research at IIIT-Delhi.
          </span>
        </h2>
      </div>

      {/* Director Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={1}
        className="max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 items-start">
          
          {/* Profile Image Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="w-[280px] h-[340px] mx-auto md:mx-0 relative overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-blue-50 to-white ring-1 ring-gray-200"
          >
            <Image
              src={directorData.img}
              alt={directorData.name}
              fill
              className="object-cover object-top"
            />
          </motion.div>

          {/* Profile Info */}
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              {directorData.name}
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

            <p className="text-gray-700 text-justify">
              {directorData.bio}
            </p>

            {/* Social Links */}
            <div className="flex gap-4 text-3xl mt-6">
              <a href={directorData.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-600 hover:text-blue-800 transition-colors" />
              </a>
              <a href="https://scholar.google.com/citations?user=bAUS2DsAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                <SiGooglescholar className="text-blue-500 hover:text-blue-700 transition-colors" />
              </a>
              <a href="https://orcid.org/0000-0001-9570-0365" target="_blank" rel="noopener noreferrer">
                <SiOrcid className="text-green-600 hover:text-green-800 transition-colors" />
              </a>
              <a href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${directorData.email}`}>
                <FaEnvelope className="text-yellow-500 hover:text-yellow-600 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default DirectorProfile;