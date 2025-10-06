import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'
import { useMemo } from 'react'
import Newsletter from './Newsletter'

export default function Blog() {
  const articles = useMemo(() => [
    {
      title: 'Building Scalable MERN Applications',
      excerpt: 'Best practices for structuring and optimizing full-stack applications with MongoDB, Express, React, and Node.js.',
      date: 'Dec 15, 2024',
      readTime: '5 min read',
      category: 'Development',
      image: 'bg-gradient-to-br from-blue-500 to-purple-600'
    },
    {
      title: 'JWT Authentication in Node.js',
      excerpt: 'Complete guide to implementing secure authentication systems with JSON Web Tokens and email OTP verification.',
      date: 'Dec 10, 2024',
      readTime: '7 min read',
      category: 'Security',
      image: 'bg-gradient-to-br from-green-500 to-teal-600'
    },
    {
      title: 'AI Tools for Modern Web Development',
      excerpt: 'Exploring how AI-driven tools are transforming the development workflow and boosting productivity.',
      date: 'Dec 5, 2024',
      readTime: '4 min read',
      category: 'AI & Tech',
      image: 'bg-gradient-to-br from-orange-500 to-red-600'
    }
  ], [])

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-black mb-4">Latest Articles</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sharing insights on web development, modern technologies, and best practices
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={`article-${index}`}
              className="bg-white rounded-lg overflow-hidden shadow-sm border group cursor-pointer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={`h-48 ${article.image}`}></div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-gray-700 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                  <div className="flex items-center gap-1 text-sm font-medium text-black group-hover:gap-2 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        
        <motion.div
          className="text-center mt-12 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button className="btn-secondary px-8 py-3 rounded-full font-medium">
            View All Articles
          </button>
        </motion.div>
        
        <Newsletter />
      </div>
    </section>
  )
}