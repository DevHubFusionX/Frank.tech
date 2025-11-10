import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react'

export default function Education() {
  const education = [
    {
      institution: 'NIIT Lagos, Agbara',
      program: 'Web Development Program',
      period: '2024 – Present',
      location: 'Lagos, Nigeria',
      status: 'In Progress',
      description: 'Comprehensive training in modern web development technologies and best practices',
      curriculum: [
        'Frontend Technologies (React, JavaScript)',
        'Backend Development (Node.js, Express)',
        'Database Management (MongoDB)',
        'REST API Development',
        'Full-Stack Application Deployment',
        'Modern Development Practices'
      ],
      achievements: [
        'Hands-on project-based learning',
        'Industry-standard development workflow',
        'Real-world application deployment'
      ]
    }
  ]

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-black text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>
        
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg p-8 shadow-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-6 flex-col md:flex-row">
              <div className="bg-black text-white p-3 rounded-lg">
                <GraduationCap className="w-8 h-8" />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-black">{edu.program}</h3>
                    <p className="text-lg text-gray-600 font-medium">{edu.institution}</p>
                  </div>
                  <div className="flex items-center gap-4 mt-2 md:mt-0">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      {edu.status}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <MapPin className="w-4 h-4" />
                    {edu.location}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{edu.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-black mb-3 flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      Curriculum
                    </h4>
                    <ul className="space-y-2">
                      {edu.curriculum.map((item, i) => (
                        <li key={i} className="text-gray-600 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-black mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-600 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}