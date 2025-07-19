import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61578746480087', label: 'Facebook' },
    // { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/quickconnectofficial/', label: 'Instagram' },
    // { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const quickLinks = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    // { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'Social Media Marketing',
    'Graphic Design',
    'Website Development',
    'Photography',
    'UI/UX Design',
    'Video Editing',
    'Performance Marketing',
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <img 
                src="/logo.png" 
                alt="DigitalCraft Logo" 
                className="h-20 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              We build brands digitally with cutting-edge strategies and creative excellence. 
              Your success is our mission.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, color: '#FFD700' }}
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                  aria-label={social.label}
                  target='_blank'
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-yellow-500">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-yellow-500">Services</h3>
            <ul className="space-y-2">
              {services.slice(0, 5).map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-yellow-500">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-yellow-500" />
                <span className="text-gray-400 text-sm">officialquickconnect1@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-yellow-500" />
                <span className="text-gray-400 text-sm">9024807754, 8764422336</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-yellow-500" />
                <span className="text-gray-400 text-sm">99, Amar path, Adarsh Nagar, Jaipur, Rajasthan 302004</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-gray-800 mt-12 pt-3 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm text-center w-full">
            © 2025 QuickConnect. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;