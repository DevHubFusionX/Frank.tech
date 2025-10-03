import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import ThreeBackground from './ThreeBackground'


export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'What technologies do you specialize in?',
      answer: 'I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) along with modern tools like Tailwind CSS, Redux Toolkit, Firebase, and JWT authentication. I also work with deployment platforms like Vercel, Render, and Netlify.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity. A simple website takes 1-2 weeks, while a full-stack application with authentication and database integration typically takes 3-4 weeks. I provide detailed timelines during the planning phase.'
    },
    {
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes! I offer ongoing support and maintenance services. This includes bug fixes, updates, performance monitoring, and feature additions. Support packages can be customized based on your needs.'
    },
    {
      question: 'Can you work with existing designs or do you create new ones?',
      answer: 'I can work with both! I excel at converting Figma designs into functional web applications, but I can also create new designs from scratch based on your requirements and brand guidelines.'
    },
    {
      question: 'What is your development process?',
      answer: 'My process includes: Discovery & Planning → Design & Wireframing → Development → Testing & Optimization → Deployment → Support. I maintain regular communication throughout and provide progress updates.'
    },
    {
      question: 'Do you optimize for performance and SEO?',
      answer: 'Absolutely! I implement performance optimization techniques like code splitting, lazy loading, and image optimization, typically achieving 30%+ performance improvements. I also ensure SEO-friendly structure and responsive design.'
    },
    {
      question: 'What are your rates and payment terms?',
      answer: 'My rates vary based on project complexity and timeline. I offer both fixed-price projects and hourly rates. Payment is typically structured as 50% upfront and 50% upon completion, with milestone payments for larger projects.'
    },
    {
      question: 'How do you handle project communication?',
      answer: 'I maintain regular communication through your preferred channels (email, WhatsApp, Slack). I provide weekly progress updates, am available for calls when needed, and use project management tools for transparency.'
    }
  ]

  return (
    <section className="py-20">
      <ThreeBackground />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-black mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Common questions about my services, process, and working together
          </p>
        </motion.div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg border shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-black pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="btn-primary px-8 py-3 rounded-full font-medium">
            Get in Touch
          </button>
        </motion.div>
      </div>
    </section>
  )
}