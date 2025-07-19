import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Palette, 
  Code, 
  Camera, 
  Target, 
  Video,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'social-media-marketing',
      icon: Smartphone,
      title: 'Social Media Marketing',
      description: 'Build your brand presence across all social platforms with strategic content and community management.',
      features: [
        'Content Strategy & Planning',
        'Community Management',
        'Paid Social Advertising',
        'Influencer Partnerships',
        'Analytics & Reporting'
      ],
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      price: 'Starting at $2,500/month'
    },
    {
      id: 'graphic-design',
      icon: Palette,
      title: 'Graphic Design',
      description: 'Visual identity that speaks to your audience and creates lasting brand impressions.',
      features: [
        'Brand Identity Design',
        'Marketing Collaterals',
        'Digital Graphics',
        'Print Design',
        'Brand Guidelines'
      ],
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
      price: 'Starting at $1,500/project'
    },
    {
      id: 'website-development',
      icon: Code,
      title: 'Website Development',
      description: 'Modern, responsive websites that convert visitors into customers.',
      features: [
        'Custom Web Development',
        'E-commerce Solutions',
        'CMS Integration',
        'SEO Optimization',
        'Performance Optimization'
      ],
      color: 'text-green-500',
      bgColor: 'bg-green-50',
      price: 'Starting at $5,000/project'
    },
    {
      id: 'photography',
      icon: Camera,
      title: 'Photography',
      description: 'Professional imagery that tells your story and showcases your brand beautifully.',
      features: [
        'Product Photography',
        'Corporate Headshots',
        'Event Photography',
        'Brand Photography',
        'Photo Retouching'
      ],
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
      price: 'Starting at $800/session'
    },
    {
      id: 'ui-ux-design',
      icon: Target,
      title: 'UI/UX Design',
      description: 'User experiences that delight and engage, driving conversions and satisfaction.',
      features: [
        'User Research & Testing',
        'Wireframing & Prototyping',
        'Interface Design',
        'Mobile App Design',
        'Usability Testing'
      ],
      color: 'text-red-500',
      bgColor: 'bg-red-50',
      price: 'Starting at $3,000/project'
    },
    {
      id: 'video-editing',
      icon: Video,
      title: 'Video Editing',
      description: 'Compelling video content that captivates audiences and drives engagement.',
      features: [
        'Promotional Videos',
        'Social Media Content',
        'Corporate Videos',
        'Motion Graphics',
        'Color Grading'
      ],
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-50',
      price: 'Starting at $1,200/video'
    },
    {
      id: 'performance-marketing',
      icon: TrendingUp,
      title: 'Performance Marketing',
      description: 'Data-driven campaigns that maximize ROI and accelerate business growth.',
      features: [
        'PPC Campaign Management',
        'Conversion Optimization',
        'Analytics & Attribution',
        'A/B Testing',
        'ROI Optimization'
      ],
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      price: 'Starting at $3,500/month'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We dive deep into your business, goals, and challenges to understand your unique needs.'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'We develop a comprehensive strategy tailored to your objectives and target audience.'
    },
    {
      step: '03',
      title: 'Execution',
      description: 'Our expert team brings the strategy to life with precision and creativity.'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'We continuously monitor, analyze, and optimize for maximum performance and ROI.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Our <span className="text-yellow-500">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive digital solutions designed to elevate your brand, 
              engage your audience, and drive measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className={`${service.bgColor} p-8`}>
                  <service.icon className={`${service.color} mb-6`} size={48} />
                  <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  {/* <div className="text-lg font-semibold text-black">{service.price}</div> */}
                </div>
                
                <div className="p-8">
                  {/* <h4 className="text-lg font-semibold text-black mb-4">What's Included:</h4> */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures every project delivers exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-yellow-500 text-black w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
                Why Choose Our Services?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Expert Team',
                    description: 'Industry professionals with years of experience and proven track records.'
                  },
                  {
                    title: 'Custom Solutions',
                    description: 'Tailored strategies that align with your unique business goals and challenges.'
                  },
                  {
                    title: 'Measurable Results',
                    description: 'Data-driven approach with transparent reporting and clear ROI metrics.'
                  },
                  {
                    title: 'Ongoing Support',
                    description: 'Continuous optimization and support to ensure long-term success.'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <Star className="text-yellow-500 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-8 text-black"
            >
              <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
              <p className="text-lg mb-8">
                Let's discuss your project and create a custom solution that drives results.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle size={20} />
                  <span>Free consultation call</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle size={20} />
                  <span>Custom strategy proposal</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle size={20} />
                  <span>No obligation quote</span>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300 mt-8"
              >
                <span>Start Your Project</span>
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;