'use client';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaXTwitter,
} from 'react-icons/fa6';

const Footer = () => {
  const footerLinks = {
    initiatives2: [
            { label: 'Teaching', href: '/teaching' },
      { label: 'Resources', href: '/resources' },
      { label: 'FAQs', href: '/resources#FAQs' },
      // { label: 'Important Links', href: '/resources#ImpLinks' },
      { label: 'Contact Us', href: '/contact' },
    ],
    usefulLinks: [
      { label: 'Home', href: '/' },
      { label: 'Our Team', href: '/team' },
       { label: 'Research', href: '/research' },
      { label: 'Publications', href: '/publications' },
      
    ],
  };

  return (
    <footer className="w-full bg-white text-black px-6 md:px-12 pt-20 pb-10 text-sm">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
        {/* Logo + Subscribe + Socials */}
        <div className="col-span-2 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <Link href="/">
            <Image
              src="/logo.png"
              alt="Microbiome Informatics Lab IIITD Logo"
              width={200}
              height={80}
              className="transition-transform duration-300 hover:scale-110"
            /></Link>
          </div>
{/* 
          
          <div>
            <p className="text-base font-semibold mb-2">Subscribe to Our Newsletters</p>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const emailInput = e.currentTarget.email;
                const email = emailInput.value;

                try {
                  const res = await fetch('/api/subscribe', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email }),
                  });

                  const result = await res.json();
                  if (res.ok) {
                    alert(result.message || 'Subscribed successfully!');
                    emailInput.value = '';
                  } else {
                    alert(result.message || 'Something went wrong.');
                  }
                } catch (err) {
                  console.error(err);
                  alert('Subscription failed.');
                }
              }}
              className="flex items-center border border-zinc-900 rounded-full overflow-hidden max-w-sm"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="bg-white text-black px-4 py-2 flex-1 outline-none placeholder:text-zinc-900"
              />
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 font-bold hover:bg-teal-400 hover:text-black transition"
              >
                →
              </button>
            </form>
          </div> 
          
          */}

          {/* Social Icons */}
          <div>
            <p className="text-base font-semibold mb-2">Follow us</p>
            <div className="flex gap-4 text-xl">
              <Link href="https://www.linkedin.com/in/dr-tarini-shankar-ghosh-3b211868" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="hover:text-teal-400 hover:scale-110 transition duration-300 cursor-pointer" />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:text-pink-500 hover:scale-110 transition duration-300 cursor-pointer" />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="hover:text-yellow-300 hover:scale-110 transition duration-300 cursor-pointer" />
              </Link>
              <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="hover:text-red-500 hover:scale-110 transition duration-300 cursor-pointer" />
              </Link>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="hover:text-blue-500 hover:scale-110 transition duration-300 cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div className="space-y-2">
          <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
          <ul className="space-y-2 text-zinc-900">
            {footerLinks.usefulLinks.map(({ label, href }) => (
              <li key={label} className="hover:text-purple-500 hover:translate-x-1 transition duration-200">
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* More Links */}
        <div className="space-y-2">
          <h4 className="text-lg font-semibold mb-4">More</h4>
          <ul className="space-y-2 text-zinc-900">
            {footerLinks.initiatives2.map(({ label, href }) => (
              <li key={label} className="hover:text-blue-500 hover:translate-x-1 transition duration-200">
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-2">
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <div className="text-zinc-900 leading-relaxed space-y-1">
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
          </div>
        </div>

        {/* Map */}
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7009.719299921993!2d77.26209249357909!3d28.543938000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e45d85d3e3%3A0x691393414902968e!2sIIIT-Delhi%20R%26D%20Building!5e0!3m2!1sen!2sin!4v1751752572243!5m2!1sen!2sin"
width="100" height="250"
            className="rounded-md w-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-zinc-900 mt-12 pt-6 border-t border-zinc-900">
        &copy; {new Date().getFullYear()} Microbiome Informatics Lab IIIT Delhi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
