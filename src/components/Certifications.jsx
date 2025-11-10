import { motion } from 'framer-motion'
import { Award, Calendar, ExternalLink } from 'lucide-react'

export default function Certifications() {
  const certifications = [
    {
      title: 'NIIT Web Development Certificate',
      issuer: 'NIIT Lagos',
      date: 'Expected 2024',
      status: 'In Progress',
      description: 'Comprehensive certification in full-stack web development using MERN stack',
      skills: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      color: 'bg-gradient-to-br from-blue-500 to-purple-600',
      certificateUrl: null
    },
    {
      title: 'JavaScript ES6+ Proficiency',
      issuer: 'Self-Certified',
      date: '2024',
      status: 'Completed',
      description: 'Advanced JavaScript concepts and modern ES6+ features implementation',
      skills: ['ES6+', 'Async/Await', 'Modules', 'Arrow Functions'],
      color: 'bg-gradient-to-br from-yellow-500 to-orange-600',
      certificateUrl: null
    },
    {
      title: 'React.js Development',
      issuer: 'Project-Based Learning',
      date: '2024',
      status: 'Completed',
      description: 'Advanced React concepts including hooks, context, and state management',
      skills: ['React Hooks', 'Redux Toolkit', 'Context API', 'Component Design'],
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      certificateUrl: null
    },
    {
      title: 'MongoDB Database Design',
      issuer: 'Hands-on Experience',
      date: '2024',
      status: 'Completed',
      description: 'Database design, optimization, and integration with Node.js applications',
      skills: ['MongoDB', 'Mongoose', 'Database Design', 'Aggregation'],
      color: 'bg-gradient-to-br from-green-500 to-teal-600',
      certificateUrl: null
    }
  ]

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
          <h2 className="text-4xl font-bold text-black mb-4">Certifications & Achievements</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Continuous learning and skill development in modern web technologies
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="bg-white rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`h-32 ${cert.color} relative`}>
                <div className="absolute top-4 right-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="absolute bottom-4 left-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    cert.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {cert.status}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2">{cert.title}</h3>
                <p className="text-gray-600 font-medium mb-2">{cert.issuer}</p>
                
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <Calendar className="w-4 h-4" />
                  {cert.date}
                </div>
                
                <p className="text-gray-600 mb-4">{cert.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
                
                {cert.certificateUrl && (
                  <a 
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View Certificate</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}