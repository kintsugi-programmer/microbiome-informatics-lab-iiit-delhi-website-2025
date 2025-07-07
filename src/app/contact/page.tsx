'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaFacebook,
} from 'react-icons/fa6';

const ReachOutPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    Phone: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [responseType, setResponseType] = useState<'success' | 'error' | ''>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
const validateForm = () => {
  const { name, email, Phone, subject, message } = formData;

  // Check if any field is empty
  if (!name || !email || !Phone || !subject || !message) {
    setResponseMessage('Please fill in all fields.');
    setResponseType('error');
    return false;
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setResponseMessage('Please enter a valid email address.');
    setResponseType('error');
    return false;
  }

  // Validate phone number (basic check for 10 digits)
  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(Phone)) {
    setResponseMessage('Please enter a valid 10-digit phone number.');
    setResponseType('error');
    return false;
  }

  return true;
};
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);
  setResponseMessage('');
  setResponseType('');

  if (!validateForm()) {
    setLoading(false);
    return;
  }

  try {
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      setResponseMessage(result.message || 'Message sent successfully!');
      setResponseType('success');
      setFormData({ name: '', email: '', Phone: '', subject: '', message: '' });
    } else {
      setResponseMessage(result.message || 'Something went wrong. Please try again.');
      setResponseType('error');
    }
  } catch (error) {
    setResponseMessage('An error occurred while sending the email.');
    setResponseType('error');
  }

  setLoading(false);
};


  return (
    <div className="relative min-h-screen bg-white text-black px-6 py-20 overflow-hidden">
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-teal-500/10 blur-2xl rounded-full"></div>

      <div className="flex flex-col items-center mb-12 z-10">
        <Link href="/">
        <Image
          src="/art/9.png"
          alt="MI Lab Logo"
          width={150}
          height={96}
          className="hover:scale-110 transition-transform duration-300 "
        /></Link>
          <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-400 to-neutral-900 bg-clip-text text-center text-4xl font-bold text-transparent md:text-6xl">
           Contact <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-teal-500 via-blue-500 to-blue-700 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span>Microbiome Informatics Lab</span>
              </div>
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-teal-500 via-blue-500 to-blue-700 py-4">
                <span>Microbiome Informatics Lab</span>
              </div>
            </div>
            &nbsp;<span className='bg-opacity-50 bg-gradient-to-b from-neutral-400 to-neutral-900 bg-clip-text text-center text-4xl font-bold text-transparent md:text-6xl'>IIIT Delhi</span>
            
          </h1>
        <p className="text-gray-400 text-center mt-2 max-w-xl italic">
          &quot;Have a question or want to collaborate? We&apos;d love to hear from you.&quot;
        </p>
      </div>

     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto z-10">
  {/* Left Column - Contact Form */}
  <div className="bg-white/80 border border-gray-800 p-6 rounded-xl shadow-lg">
    <h2 className="text-xl font-semibold mb-4">📩 Send us a Message</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <LabelInput id="name" value={formData.name} onChange={handleChange} placeholder="Your Full Name" />
      <LabelInput id="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" />
      <LabelInput id="Phone" value={formData.Phone} onChange={handleChange} placeholder="Your Contact Number" />
      <LabelInput id="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" />
      <LabelInput id="message" isTextarea value={formData.message} onChange={handleChange} placeholder="Your message..." />
      <button className="p-[3px] relative w-full mt-2">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-600  rounded-full" />
        <div className="w-full px-6 py-2 bg-white rounded-full font-bold relative z-10 text-black hover:bg-transparent hover:text-white text-center transition">
          {loading ? 'Sending...' : 'Send'}
        </div>
      </button>
      {responseMessage && (
        <div className={`mt-3 text-sm text-center px-4 py-2 rounded-md font-medium ${
          responseType === 'success'
            ? 'bg-blue-500/10 text-blue-300 border border-blue-500/20'
            : 'bg-red-500/10 text-red-300 border border-red-500/20'
        }`}>
          {responseMessage}
        </div>
      )}
    </form>
  </div>

  {/* Right Column with 2 rows */}
  <div className="flex flex-col gap-8">
    {/* Address Box */}
    <div className="bg-white/80 border border-gray-800 p-6 rounded-xl shadow-lg flex flex-col justify-between h-full">
      <h2 className="text-xl font-semibold ">📍 Our Address</h2>
      <p>Microbiome Informatics Lab, A-312, R&D Building,</p>
            <p>Indraprastha Institute of Information Technology Delhi, Okhla Phase III</p>
            <p>New Delhi, 110020</p>
            <p className="pt-2">
              📧{' '}
              <a
                href="mailto:tarini.ghosh@iiitd.ac.in"
                className="underline hover:text-teal-400 transition"
              >
                tarini.ghosh@iiitd.ac.in
              </a>
            </p>
      <div className="bg-white/80 border border-gray-800 p-3 rounded-xl shadow-lg mt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7009.719299921993!2d77.26209249357909!3d28.543938000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e45d85d3e3%3A0x691393414902968e!2sIIIT-Delhi%20R%26D%20Building!5e0!3m2!1sen!2sin!4v1751752572243!5m2!1sen!2sin"
          width="100%"
          height="250"
          className="rounded-md w-full border border-gray-600"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>

    {/* Connect With Us */}
    <div className="bg-white/80 border border-gray-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">🌐 Connect With Us</h2>
      <div className="flex gap-5 text-2xl text-gray-400">
        <Link href="https://www.linkedin.com/in/dr-tarini-shankar-ghosh-3b211868" target="_blank">
          <FaLinkedin className="hover:text-blue-400 hover:scale-110 transition duration-300" />
        </Link>
        <Link href="https://instagram.com" target="_blank">
          <FaInstagram className="hover:text-pink-500 hover:scale-110 transition duration-300" />
        </Link>
        <Link href="https://twitter.com" target="_blank">
          <FaXTwitter className="hover:text-yellow-300 hover:scale-110 transition duration-300" />
        </Link>
        <Link href="https://youtube.com" target="_blank">
          <FaYoutube className="hover:text-red-500 hover:scale-110 transition duration-300" />
        </Link>
        <Link href="https://facebook.com" target="_blank">
          <FaFacebook className="hover:text-blue-500 hover:scale-110 transition duration-300" />
        </Link>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

const LabelInput = ({
  id,
  type = 'text',
  isTextarea,
  value,
  onChange,
  placeholder,
}: {
  id: string;
  type?: string;
  isTextarea?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder: string;
}) => {
  return (
    <div>
      <label htmlFor={id} className="block mb-1 text-sm font-medium text-black capitalize">
        {id}
      </label>
      {isTextarea ? (
        <textarea
          id={id}
          rows={5}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="block w-full rounded-lg p-2.5 bg-white/[0.96] border border-gray-600 placeholder-gray-400 text-teal-600 text-sm focus:ring-blue-500 focus:border-blue-500"
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="block w-full rounded-lg p-2.5 bg-white/[0.96] border border-gray-600 placeholder-gray-400 text-blue-400 text-sm focus:ring-blue-500 focus:border-blue-500"
        />
      )}
    </div>
  );
};

export default ReachOutPage;
