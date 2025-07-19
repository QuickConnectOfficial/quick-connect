import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Share2, User } from 'lucide-react';
import blogData from '../data/blogData.json';

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogData.find(post => post.slug === slug);

  if (!post) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-yellow-500 hover:text-yellow-600">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getReadTime = (content) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  const formatContent = (content) => {
    // Simple markdown-like formatting
    return content
      .split('\n\n')
      .map((paragraph, index) => {
        if (paragraph.startsWith('## ')) {
          return (
            <h2 key={index} className="text-2xl font-bold text-black mt-8 mb-4">
              {paragraph.replace('## ', '')}
            </h2>
          );
        }
        if (paragraph.startsWith('# ')) {
          return (
            <h1 key={index} className="text-3xl font-bold text-black mt-8 mb-4">
              {paragraph.replace('# ', '')}
            </h1>
          );
        }
        return (
          <p key={index} className="text-gray-700 leading-relaxed mb-6">
            {paragraph}
          </p>
        );
      });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-yellow-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-yellow-500 mb-8 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Blog</span>
            </Link>
            
            <div className="flex items-center space-x-6 text-gray-500 text-sm mb-6">
              <div className="flex items-center space-x-2">
                <Calendar size={16} />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <span>{getReadTime(post.content)} min read</span>
              </div>
              <div className="flex items-center space-x-2">
                <User size={16} />
                <span>DigitalCraft Team</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              {post.excerpt}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-3"
            >
              <div className="prose prose-lg max-w-none">
                {formatContent(post.content)}
              </div>
              
              {/* Share Section */}
              <div className="border-t border-gray-200 pt-8 mt-12">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">Share this article</h3>
                    <p className="text-gray-600">Help others discover this content</p>
                  </div>
                  <button className="flex items-center space-x-2 bg-yellow-500 text-black px-4 py-2 rounded-full hover:bg-yellow-600 transition-colors">
                    <Share2 size={16} />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </motion.article>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-1"
            >
              {/* Related Posts */}
              <div className="bg-gray-50 rounded-2xl p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-black mb-6">Related Articles</h3>
                <div className="space-y-4">
                  {blogData
                    .filter(relatedPost => relatedPost.id !== post.id)
                    .slice(0, 3)
                    .map((relatedPost) => (
                      <Link
                        key={relatedPost.id}
                        to={`/blog/${relatedPost.slug}`}
                        className="block group"
                      >
                        <div className="flex space-x-3">
                          <img
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                          />
                          <div>
                            <h4 className="text-sm font-medium text-black group-hover:text-yellow-500 transition-colors line-clamp-2">
                              {relatedPost.title}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1">
                              {formatDate(relatedPost.date)}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Never Miss an Update</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights on digital marketing and design trends.
            </p>
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-full text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button className="bg-yellow-500 text-black px-6 py-3 rounded-r-full font-semibold hover:bg-yellow-600 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;