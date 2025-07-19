import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Clock,
  Users,
  Target,
  TrendingUp
} from 'lucide-react';

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const serviceData = {
    'social-media-marketing': {
      title: 'Social Media Marketing',
      subtitle: 'Build Your Brand Presence Across All Platforms',
      description: 'Transform your social media presence with strategic content, community management, and data-driven campaigns that build authentic connections and drive business growth.',
      features: [
        'Content Strategy & Planning',
        'Community Management',
        'Paid Social Advertising',
        'Influencer Partnerships',
        'Analytics & Reporting',
        'Brand Voice Development',
        'Crisis Management',
        'Competitor Analysis'
      ],
      benefits: [
        'Increased brand awareness and visibility',
        'Higher engagement rates and community growth',
        'Improved customer relationships and loyalty',
        'Better ROI on advertising spend',
        'Enhanced brand reputation management'
      ],
      process: [
        {
          title: 'Audit & Strategy',
          description: 'Comprehensive analysis of your current social presence and competitive landscape.'
        },
        {
          title: 'Content Planning',
          description: 'Development of content calendar and brand voice guidelines.'
        },
        {
          title: 'Community Building',
          description: 'Active engagement and community management across platforms.'
        },
        {
          title: 'Performance Optimization',
          description: 'Continuous monitoring and optimization based on analytics.'
        }
      ],
      pricing: {
        starter: '$2,500/month',
        professional: '$5,000/month',
        enterprise: '$10,000/month'
      },
      timeline: '2-4 weeks setup, ongoing management',
      caseStudy: {
        client: 'TechStart Inc.',
        result: '300% increase in engagement, 150% growth in followers',
        description: 'Helped a B2B tech startup build their social media presence from scratch, resulting in significant lead generation and brand awareness.'
      }
    },
    'graphic-design': {
      title: 'Graphic Design',
      subtitle: 'Visual Identity That Speaks to Your Audience',
      description: 'Create stunning visual identities and marketing materials that capture your brand essence and communicate your message effectively across all touchpoints.',
      features: [
        'Brand Identity Design',
        'Logo Design & Branding',
        'Marketing Collaterals',
        'Digital Graphics',
        'Print Design',
        'Brand Guidelines',
        'Packaging Design',
        'Infographic Design'
      ],
      benefits: [
        'Professional brand image and credibility',
        'Consistent visual communication',
        'Increased brand recognition',
        'Higher conversion rates',
        'Competitive market advantage'
      ],
      process: [
        {
          title: 'Brand Discovery',
          description: 'Understanding your brand values, target audience, and design preferences.'
        },
        {
          title: 'Concept Development',
          description: 'Creating initial design concepts and mood boards.'
        },
        {
          title: 'Design Refinement',
          description: 'Iterating on designs based on feedback and requirements.'
        },
        {
          title: 'Final Delivery',
          description: 'Delivering final files and brand guidelines for implementation.'
        }
      ],
      pricing: {
        starter: '$1,500/project',
        professional: '$3,500/project',
        enterprise: '$7,500/project'
      },
      timeline: '2-3 weeks per project',
      caseStudy: {
        client: 'Fashion Forward',
        result: 'Complete brand transformation, 200% increase in brand recognition',
        description: 'Redesigned the complete visual identity for a fashion retailer, resulting in improved brand perception and customer engagement.'
      }
    },
    'website-development': {
      title: 'Website Development',
      subtitle: 'Modern Websites That Convert',
      description: 'Build responsive, high-performance websites that not only look stunning but also drive conversions and provide exceptional user experiences.',
      features: [
        'Custom Web Development',
        'Responsive Design',
        'E-commerce Solutions',
        'CMS Integration',
        'SEO Optimization',
        'Performance Optimization',
        'Security Implementation',
        'Third-party Integrations'
      ],
      benefits: [
        'Professional online presence',
        'Improved user experience',
        'Higher search engine rankings',
        'Increased conversion rates',
        'Mobile-friendly accessibility'
      ],
      process: [
        {
          title: 'Planning & Strategy',
          description: 'Defining project scope, requirements, and technical specifications.'
        },
        {
          title: 'Design & Prototyping',
          description: 'Creating wireframes, mockups, and interactive prototypes.'
        },
        {
          title: 'Development & Testing',
          description: 'Building the website with thorough testing across devices.'
        },
        {
          title: 'Launch & Support',
          description: 'Deploying the website and providing ongoing maintenance.'
        }
      ],
      pricing: {
        starter: '$5,000/project',
        professional: '$12,000/project',
        enterprise: '$25,000/project'
      },
      timeline: '6-12 weeks per project',
      caseStudy: {
        client: 'GrowthCorp',
        result: '400% increase in online conversions, 50% faster load times',
        description: 'Developed a custom e-commerce platform that significantly improved user experience and conversion rates.'
      }
    },
    'photography': {
      title: 'Photography',
      subtitle: 'Professional Imagery That Tells Your Story',
      description: 'Capture your brand essence with professional photography that showcases your products, team, and story in the most compelling way.',
      features: [
        'Product Photography',
        'Corporate Headshots',
        'Event Photography',
        'Brand Photography',
        'Lifestyle Photography',
        'Photo Retouching',
        'Image Optimization',
        'Creative Direction'
      ],
      benefits: [
        'Professional brand image',
        'Higher engagement on social media',
        'Improved marketing materials',
        'Better website conversion',
        'Authentic brand storytelling'
      ],
      process: [
        {
          title: 'Pre-Production Planning',
          description: 'Discussing concepts, locations, and shot requirements.'
        },
        {
          title: 'Photo Shoot',
          description: 'Professional photography session with creative direction.'
        },
        {
          title: 'Post-Production',
          description: 'Photo editing, retouching, and optimization.'
        },
        {
          title: 'Final Delivery',
          description: 'Delivering high-resolution images in various formats.'
        }
      ],
      pricing: {
        starter: '$800/session',
        professional: '$1,500/session',
        enterprise: '$3,000/session'
      },
      timeline: '1-2 weeks per session',
      caseStudy: {
        client: 'Artisan Bakery',
        result: '250% increase in social media engagement, improved brand perception',
        description: 'Created a comprehensive photo library that elevated the bakery\'s visual marketing across all channels.'
      }
    },
    'ui-ux-design': {
      title: 'UI/UX Design',
      subtitle: 'User Experiences That Delight',
      description: 'Design intuitive, user-centered interfaces that provide exceptional experiences and drive engagement across web and mobile platforms.',
      features: [
        'User Research & Testing',
        'Wireframing & Prototyping',
        'Interface Design',
        'Mobile App Design',
        'Usability Testing',
        'Information Architecture',
        'Interaction Design',
        'Design Systems'
      ],
      benefits: [
        'Improved user satisfaction',
        'Higher conversion rates',
        'Reduced bounce rates',
        'Better accessibility',
        'Competitive advantage'
      ],
      process: [
        {
          title: 'Research & Discovery',
          description: 'Understanding user needs, behaviors, and pain points.'
        },
        {
          title: 'Design & Prototyping',
          description: 'Creating wireframes, mockups, and interactive prototypes.'
        },
        {
          title: 'Testing & Validation',
          description: 'User testing and iterating based on feedback.'
        },
        {
          title: 'Implementation Support',
          description: 'Working with developers to ensure proper implementation.'
        }
      ],
      pricing: {
        starter: '$3,000/project',
        professional: '$7,500/project',
        enterprise: '$15,000/project'
      },
      timeline: '4-8 weeks per project',
      caseStudy: {
        client: 'FinTech Startup',
        result: '60% improvement in user retention, 40% increase in conversions',
        description: 'Redesigned a mobile banking app interface, significantly improving user experience and engagement metrics.'
      }
    },
    'video-editing': {
      title: 'Video Editing',
      subtitle: 'Compelling Video Content That Captivates',
      description: 'Create engaging video content that tells your story, showcases your products, and connects with your audience across all platforms.',
      features: [
        'Promotional Videos',
        'Social Media Content',
        'Corporate Videos',
        'Product Demonstrations',
        'Motion Graphics',
        'Color Grading',
        'Audio Enhancement',
        'Multi-platform Optimization'
      ],
      benefits: [
        'Higher engagement rates',
        'Improved brand storytelling',
        'Better social media performance',
        'Professional brand image',
        'Increased conversion rates'
      ],
      process: [
        {
          title: 'Pre-Production',
          description: 'Planning, scripting, and storyboard development.'
        },
        {
          title: 'Production Support',
          description: 'Guidance during filming and content capture.'
        },
        {
          title: 'Post-Production',
          description: 'Editing, motion graphics, and audio enhancement.'
        },
        {
          title: 'Final Delivery',
          description: 'Optimized videos for various platforms and formats.'
        }
      ],
      pricing: {
        starter: '$1,200/video',
        professional: '$2,500/video',
        enterprise: '$5,000/video'
      },
      timeline: '1-3 weeks per video',
      caseStudy: {
        client: 'E-commerce Brand',
        result: '500% increase in video engagement, 30% boost in sales',
        description: 'Created a series of product videos that significantly improved online sales and customer engagement.'
      }
    },
    'performance-marketing': {
      title: 'Performance Marketing',
      subtitle: 'Data-Driven Campaigns That Maximize ROI',
      description: 'Drive measurable results with strategic performance marketing campaigns that optimize every dollar spent and accelerate business growth.',
      features: [
        'PPC Campaign Management',
        'Conversion Optimization',
        'Analytics & Attribution',
        'A/B Testing',
        'ROI Optimization',
        'Audience Targeting',
        'Campaign Automation',
        'Cross-platform Integration'
      ],
      benefits: [
        'Measurable ROI and results',
        'Lower customer acquisition costs',
        'Higher conversion rates',
        'Better audience targeting',
        'Scalable growth strategies'
      ],
      process: [
        {
          title: 'Strategy Development',
          description: 'Analyzing goals, audience, and competitive landscape.'
        },
        {
          title: 'Campaign Setup',
          description: 'Creating and launching optimized campaigns across platforms.'
        },
        {
          title: 'Optimization',
          description: 'Continuous testing and optimization for better performance.'
        },
        {
          title: 'Reporting & Analysis',
          description: 'Regular reporting and strategic recommendations.'
        }
      ],
      pricing: {
        starter: '$3,500/month',
        professional: '$7,500/month',
        enterprise: '$15,000/month'
      },
      timeline: '1-2 weeks setup, ongoing optimization',
      caseStudy: {
        client: 'SaaS Company',
        result: '250% increase in qualified leads, 40% reduction in CAC',
        description: 'Optimized performance marketing campaigns that significantly improved lead quality and reduced acquisition costs.'
      }
    }
  };

  const service = serviceData[serviceId];

  if (!service) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black mb-4">Service Not Found</h1>
          <Link to="/services" className="text-yellow-500 hover:text-yellow-600">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-yellow-500 mb-8 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Services</span>
            </Link>
            
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              {service.title}
            </h1>
            <p className="text-2xl text-yellow-600 font-semibold mb-8">
              {service.subtitle}
            </p>
            <p className="text-xl text-gray-600 max-w-4xl leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="text-3xl font-bold text-black mb-8">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-black mb-6">Service Details</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="text-yellow-500" size={20} />
                  <div>
                    <div className="font-semibold text-black">Timeline</div>
                    <div className="text-gray-600 text-sm">{service.timeline}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="text-yellow-500" size={20} />
                  <div>
                    <div className="font-semibold text-black">Starting Price</div>
                    <div className="text-gray-600 text-sm">{service.pricing.starter}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="text-yellow-500" size={20} />
                  <div>
                    <div className="font-semibold text-black">Dedicated Team</div>
                    <div className="text-gray-600 text-sm">Expert specialists</div>
                  </div>
                </div>
              </div>
              
              <Link
                to="/contact"
                className="w-full bg-black text-white py-3 rounded-full text-center font-semibold hover:bg-yellow-500 hover:text-black transition-all duration-300 mt-8 block"
              >
                Get Started
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-black mb-6">Key Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's how our {service.title.toLowerCase()} service will benefit your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg text-center"
              >
                <Star className="text-yellow-500 mx-auto mb-4" size={32} />
                <p className="text-gray-700 font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-black mb-6">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures exceptional results every time
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-yellow-500 text-black w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-black mb-6">Pricing Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing to match your needs and budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(service.pricing).map(([tier, price], index) => (
              <motion.div
                key={tier}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-8 shadow-lg ${
                  tier === 'professional' ? 'ring-2 ring-yellow-500 scale-105' : ''
                }`}
              >
                <h3 className="text-2xl font-bold text-black mb-4 capitalize">{tier}</h3>
                <div className="text-3xl font-bold text-yellow-500 mb-6">{price}</div>
                <Link
                  to="/contact"
                  className={`w-full py-3 rounded-full text-center font-semibold transition-all duration-300 block ${
                    tier === 'professional'
                      ? 'bg-yellow-500 text-black hover:bg-yellow-600'
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  Choose {tier}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black text-white rounded-2xl p-12 text-center"
          >
            <TrendingUp className="text-yellow-500 mx-auto mb-6" size={48} />
            <h2 className="text-3xl font-bold mb-6">Success Story</h2>
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">
              {service.caseStudy.client}
            </h3>
            <p className="text-2xl font-bold mb-6">{service.caseStudy.result}</p>
            <p className="text-gray-300 max-w-3xl mx-auto">
              {service.caseStudy.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-black mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a custom solution that drives results.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300"
            >
              <span>Start Your Project</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;