import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      title: 'Freelance Full-Stack Developer',
      company: 'Remote',
      period: 'Jan 2024 – Present',
      location: 'Remote',
      achievements: [
        'Designed and developed full-stack web applications using the MERN stack',
        'Delivered responsive, SEO-friendly user interfaces with improved user engagement',
        'Optimized application performance by 30%+ through modern techniques',
        'Partnered with clients to translate Figma mockups into functional solutions'
      ]
    },
    {
      title: 'Web Development Student',
      company: 'NIIT Lagos, Agbara',
      period: '2024 – Present',
      location: 'Lagos, Nigeria',
      achievements: [
        'Focused on frontend technologies (React, JavaScript) and backend development',
        'Hands-on training in building REST APIs and working with MongoDB',
        'Learning full-stack application deployment and modern development practices'
      ]
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-black text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>
        
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative flex gap-8 mb-12 last:mb-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative z-10 w-4 h-4 bg-black rounded-full mt-2"></div>
              
              <div className="flex-1 bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-black">{exp.title}</h3>
                    <p className="text-gray-600 font-medium">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end mt-2 md:mt-0">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-600 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}