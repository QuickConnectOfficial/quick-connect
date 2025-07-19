import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  TrendingUp,
  Calendar,
  CheckCircle
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We push boundaries and embrace cutting-edge technologies to deliver exceptional results.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Every project is a labor of love. We pour our hearts into creating meaningful brand experiences.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of partnership. Your success is our shared mission.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We never settle for good enough. Excellence is our standard, not our goal.'
    }
  ];

  const timeline = [
    {
      year: '2020',
      title: 'The Beginning',
      description: 'Founded with a vision to revolutionize digital marketing for small businesses.'
    },
    {
      year: '2021',
      title: 'First Major Win',
      description: 'Helped our first client achieve 300% ROI, establishing our reputation for results.'
    },
    {
      year: '2022',
      title: 'Team Expansion',
      description: 'Grew to a team of 15 specialists across design, development, and marketing.'
    },
    {
      year: '2023',
      title: 'Industry Recognition',
      description: 'Won "Digital Agency of the Year" and expanded to serve Fortune 500 companies.'
    },
    {
      year: '2024',
      title: 'Going All In',
      description: 'Launched smart campaigns, added new services, and grew faster than ever.'
    },
    {
      year: '2025',
      title: 'The Impact Year',
      description: 'Positioned as a trusted digital growth partner — leading with strategy, speed, and results.'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Industry Awards' },
    { number: '25', label: 'Countries Served' },
    { number: '98%', label: 'Client Satisfaction' }
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
              About <span className="text-yellow-500">DigitalCraft</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're not just another digital agency. We're your partners in building 
              extraordinary brands that resonate, engage, and convert in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-8">
                <div>
                  <Target className="text-yellow-500 mb-4" size={48} />
                  <h2 className="text-3xl font-bold text-black mb-4">Our Mission</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    To empower businesses of all sizes with innovative digital solutions 
                    that drive growth, build meaningful connections, and create lasting impact 
                    in an ever-evolving digital landscape.
                  </p>
                </div>
                <div>
                  <Eye className="text-yellow-500 mb-4" size={48} />
                  <h2 className="text-3xl font-bold text-black mb-4">Our Vision</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    To be the world's most trusted digital partner, known for transforming 
                    brands through creativity, technology, and strategic thinking that 
                    delivers measurable results.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-8 text-black">
                <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
                <div className="space-y-4">
                  {[
                    'Data-driven strategies that deliver results',
                    'Creative excellence that stands out',
                    'Transparent communication and reporting',
                    'Dedicated team of industry experts',
                    'Proven track record of success'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle size={20} className="text-black" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we work with our clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <value.icon className="text-yellow-500 mx-auto mb-6" size={48} />
                <h3 className="text-xl font-bold text-black mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to industry leadership - here's how we've grown
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-yellow-500 h-full hidden lg:block" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:space-x-8`}
                >
                  <div className="flex-1 lg:text-right text-center mb-4 lg:mb-0">
                    {index % 2 === 0 ? (
                      <div className="bg-white p-6 rounded-2xl shadow-lg">
                        <div className="flex items-center justify-center lg:justify-end space-x-3 mb-4">
                          <Calendar className="text-yellow-500" size={24} />
                          <span className="text-2xl font-bold text-yellow-500">{item.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    ) : null}
                  </div>
                  
                  <div className="w-4 h-4 bg-yellow-500 rounded-full border-4 border-white shadow-lg z-10 hidden lg:block" />
                  
                  <div className="flex-1 lg:text-left text-center">
                    {index % 2 !== 0 ? (
                      <div className="bg-white p-6 rounded-2xl shadow-lg">
                        <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
                          <Calendar className="text-yellow-500" size={24} />
                          <span className="text-2xl font-bold text-yellow-500">{item.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    ) : null}
                  </div>

                  {/* Mobile Layout */}
                  {/* <div className="lg:hidden bg-white p-6 rounded-2xl shadow-lg w-full">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                      <Calendar className="text-yellow-500" size={24} />
                      <span className="text-2xl font-bold text-yellow-500">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div> */}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Numbers that speak to our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-4">
                  {achievement.number}
                </div>
                <div className="text-gray-400 text-lg">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;