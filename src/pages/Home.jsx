import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  Users, 
  Award, 
  TrendingUp,
  Palette,
  Code,
  Camera,
  Video,
  Clock,
  Shield,
  Zap,
  ThumbsUp,
  Target,
  Smartphone,
  Play,
  TrendingUpIcon,
} from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'Social Media Marketing',
      description: 'Build your brand presence across all social platforms',
      color: 'text-blue-500'
    },
    {
      icon: Palette,
      title: 'Graphic Designing',
      description: 'Visual identity that speaks to your audience',
      color: 'text-purple-500'
    },
    {
      icon: Code,
      title: 'Website Development',
      description: 'Modern, responsive websites that convert',
      color: 'text-green-500'
    },
    {
      icon: Camera,
      title: 'Photography',
      description: 'Professional imagery that tells your story',
      color: 'text-orange-500'
    },
    {
      icon: Target,
      title: 'UI/UX Design',
      description: 'User experiences that delight and engage',
      color: 'text-red-500'
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Compelling video content that captivates',
      color: 'text-indigo-500'
    },
    {
      icon: TrendingUpIcon,
      title: 'Performance Marketing',
      description: 'Data-driven campaigns that maximize ROI and accelerate business growth',
      color: 'text-yellow-600'
    }
  ];

  const stats = [
    { icon: Users, number: '500+', label: 'Happy Clients' },
    { icon: Award, number: '50+', label: 'Awards Won' },
    { icon: TrendingUp, number: '200%', label: 'Average ROI' },
    { icon: Star, number: '4.9', label: 'Client Rating' }
  ];

  const whyChooseUsReasons = [
    {
      icon: Clock,
      count: '24/7',
      title: 'Dedicated Support',
      description: 'Round-the-clock assistance to ensure your projects never miss a beat'
    },
    {
      icon: Shield,
      count: '10X',
      title: 'Growth Mindset',
      description: 'Our focus is simple: scale your brand and multiply your results.'
    },
    {
      icon: Zap,
      count: '48hr',
      title: 'Rapid Turnaround',
      description: 'Fast delivery without compromising on quality or attention to detail'
    },
    {
      icon: ThumbsUp,
      count: '98%',
      title: 'Client Retention',
      description: 'Our clients stay with us because we deliver consistent, exceptional results'
    }
  ];


  const testimonials = [
    {
      name: 'Rathore Saab',
      text: 'Finding a skilled video editor was a challenge until I came across this team. They truly understand creativity, storytelling, and smooth transitions. The edits are always on point, delivered on time, and perfectly match my vision. Highly recommended for high-quality video editing! ',
      rating: 5
    },
    {
      name: 'Vasu Dadhich',
      text: 'Highly satisfied with the social media marketing services! The team delivered excellent results, boosting our online presence and engagement. Highly recommend!',
      rating: 5
    },
    {
      name: 'Hansu Meena',
      text: 'Excellent service! They helped me boost my online presence and increase sales. Their team is knowledgeable, responsive, and result-driven. Highly recommend!',
      rating: 5
    },
    {
      name: 'Anil Jaat',
      text: 'This is the best digital marketing agency I have ever visit in jaipur . The work of these employees were extraordinary',
      rating: 5
    },
    {
      name: 'Vishal Singh',
      text: 'One of the best digital marketing agencies in Jaipur. Their team is highly professional, creative, and results-driven. From SEO to social media marketing, they provide top-notch services with excellent support. Highly recommended for businesses looking to grow their online presence!',
      rating: 5
    },
    {
      name: 'Surendra Bairwa',
      text: 'Excellent digital marketing services! The team is professional, results-driven, and helped boost my online presence. Highly recommend for SEO, social media, and overall brand growth in Jaipur!',
      rating: 5
    },
    {
      name: 'Lokesh Yadav',
      text: 'Excellent Google Ads management! Well-optimized campaigns, great ROI, and quality leads. Highly recommend for effective online advertising!',
      rating: 5
    },
    {
      name: 'Sumit Kumawat',
      text: 'They completely transformed our Instagram and Facebook pages. From eye-catching visuals to creative captions, everything looked so professional and on-brand. Within weeks, we started seeing more inquiries, more bookings, and a lot more engagement! Highly recommended!',
      rating: 5
    },
    {
      name: 'Mukesh Jangid',
      text: 'Best digital marketing agency in jaipur. I am workikg with this agency last 2 year. Fully satisfied!',
      rating: 5
    },
  ];

  const portfolioPreview = [
    {
      title: 'TechStart Branding',
      category: 'Brand Identity',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'E-commerce Platform',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Social Campaign',
      category: 'Social Media',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-4"
            >
              🚀 Award-Winning Digital Agency
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-black leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              We Build Brands{' '}
              <span className="text-yellow-500 relative">
                Digitally
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-yellow-500"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                />
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              We create bold strategies, scroll-stopping content, and high-performing campaigns that grow your brand — faster, louder, and smarter.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Link
                to="/contact"
                className="group bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-500 hover:text-black transition-all duration-300 flex items-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute top-20 left-10 w-20 h-20 bg-yellow-500/10 rounded-full blur-xl"
              animate={{
                y: [0, -20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-32 h-32 bg-black/5 rounded-full blur-2xl"
              animate={{
                y: [0, 20, 0],
                scale: [1, 0.9, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="mx-auto mb-4 text-yellow-500" size={40} />
                <motion.div 
                  className="text-3xl md:text-4xl font-bold mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

       {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/why.webp"
                  alt="Why Choose Us"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating achievement badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 -right-6 bg-yellow-500 text-black p-6 rounded-2xl shadow-xl"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold">5+ Years</div>
                  <div className="text-sm font-semibold">Excellence</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                {/* <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-4"
                >
                  Why Choose Us
                </motion.div> */}
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-4xl md:text-5xl font-bold text-black mb-6"
                >
                  Why Choose Us
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl text-gray-600 mb-8"
                >
                  Our proven track record and commitment to innovation make us the perfect partner for your digital transformation journey.
                </motion.p>
              </div>

              <div className="space-y-6">
                {whyChooseUsReasons.map((reason, index) => (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    whileHover={{ x: 10 }}
                    className="flex items-start space-x-4 group"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-black transition-all duration-300">
                        <reason.icon size={24} className="text-yellow-500 group-hover:text-black transition-colors" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-2xl font-bold text-yellow-500">{reason.count}</span>
                        <h3 className="text-xl font-bold text-black">{reason.title}</h3>
                      </div>
                      <p className="text-gray-600">{reason.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="pt-6"
              >
                <Link
                  to="/about"
                  className="inline-flex items-center space-x-2 bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-500 hover:text-black transition-all duration-300 group"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy to execution, we offer comprehensive digital solutions 
              that drive growth and build lasting brand connections.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <service.icon className={`${service.color} mb-6 group-hover:scale-110 transition-transform`} size={48} />
                </motion.div>
                <h3 className="text-xl font-bold text-black mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  to="/services"
                  className="text-yellow-500 font-semibold hover:text-yellow-600 transition-colors flex items-center space-x-2 group"
                >
                  <span>Learn More</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Featured Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover some of our latest projects and see how we've helped brands 
              achieve remarkable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {portfolioPreview.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-yellow-400">{project.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* <div className="text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center space-x-2 bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-500 hover:text-black transition-all duration-300"
            >
              <span>View All Work</span>
              <ArrowRight size={20} />
            </Link>
          </div> */}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black text-white border-b-yellow-100 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A proven methodology that ensures every project delivers exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discover & Define', description: 'We understand your brand, goals, and audience.' },
              { step: '02', title: 'Plan & Strategize', description: 'We craft a smart, ROI-driven marketing strategy.' },
              { step: '03', title: 'Execute & Optimize', description: 'We launch campaigns and fine-tune for performance' },
              { step: '04', title: 'Report & Scale', description: 'We track results and scale what works best.' }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-yellow-500 text-black w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
     <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          className="min-h-[300px]"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.name}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-500 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center space-x-4">
               
                  <div>
                    <div className="font-semibold text-black">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    
      {/* CTA Section */}
      {/* <section className="py-20 bg-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              Ready to Transform Your Brand?
            </h2>
            <p className="text-xl text-black/80 max-w-2xl mx-auto">
              Let's create something extraordinary together. Your success story starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300"
              >
                <span>Let's Talk</span>
                <ArrowRight size={20} />
              </Link>
              <div className="flex items-center space-x-4 text-black">
                <CheckCircle size={20} />
                <span className="font-medium">Free consultation • No commitment</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
