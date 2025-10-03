import { motion } from 'framer-motion'
import { 
  Code2, 
  Palette, 
  RefreshCw, 
  Sparkles, 
  Globe, 
  Server, 
  Rocket, 
  Database, 
  BarChart3, 
  Shield, 
  Link, 
  GitBranch, 
  Monitor, 
  Send, 
  Target, 
  Triangle, 
  Flame 
} from 'lucide-react'

const TechIcon = ({ IconComponent, color = 'text-gray-600' }) => (
  <IconComponent className={`w-6 h-6 ${color}`} />
)

export default function TechStack() {
  const techCategories = [
    {
      title: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      technologies: [
        { name: 'React.js', icon: <TechIcon IconComponent={Code2} color="text-blue-500" /> },
        { name: 'JavaScript', icon: <TechIcon IconComponent={Code2} color="text-yellow-500" /> },
        { name: 'Tailwind CSS', icon: <TechIcon IconComponent={Palette} color="text-cyan-500" /> },
        { name: 'Redux Toolkit', icon: <TechIcon IconComponent={RefreshCw} color="text-purple-500" /> },
        { name: 'Framer Motion', icon: <TechIcon IconComponent={Sparkles} color="text-pink-500" /> },
        { name: 'HTML5', icon: <TechIcon IconComponent={Globe} color="text-orange-500" /> }
      ]
    },
    {
      title: 'Backend',
      color: 'from-green-500 to-emerald-500',
      technologies: [
        { name: 'Node.js', icon: <TechIcon IconComponent={Server} color="text-green-500" /> },
        { name: 'Express.js', icon: <TechIcon IconComponent={Rocket} color="text-gray-700" /> },
        { name: 'MongoDB', icon: <TechIcon IconComponent={Database} color="text-green-600" /> },
        { name: 'Mongoose', icon: <TechIcon IconComponent={BarChart3} color="text-red-500" /> },
        { name: 'JWT Auth', icon: <TechIcon IconComponent={Shield} color="text-blue-600" /> },
        { name: 'REST APIs', icon: <TechIcon IconComponent={Link} color="text-indigo-500" /> }
      ]
    },
    {
      title: 'Tools & Services',
      color: 'from-purple-500 to-pink-500',
      technologies: [
        { name: 'Git & GitHub', icon: <TechIcon IconComponent={GitBranch} color="text-gray-800" /> },
        { name: 'VS Code', icon: <TechIcon IconComponent={Monitor} color="text-blue-600" /> },
        { name: 'Postman', icon: <TechIcon IconComponent={Send} color="text-orange-500" /> },
        { name: 'Figma', icon: <TechIcon IconComponent={Target} color="text-purple-500" /> },
        { name: 'Vercel', icon: <TechIcon IconComponent={Triangle} color="text-black" /> },
        { name: 'Firebase', icon: <TechIcon IconComponent={Flame} color="text-orange-600" /> }
      ]
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-black mb-4">Tech Stack</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Modern technologies I use to build scalable and performant applications
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-white rounded-lg p-6 shadow-sm border"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`bg-gradient-to-r ${category.color} text-white rounded-lg p-4 mb-6`}>
                <h3 className="text-xl font-bold text-center">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: (categoryIndex * 0.1) + (techIndex * 0.05) 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex-shrink-0">{tech.icon}</div>
                    <span className="text-sm font-medium text-gray-700">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-lg p-8 shadow-sm border">
            <h3 className="text-2xl font-bold text-black mb-4">Always Learning</h3>
            <p className="text-gray-600 mb-6">
              Currently exploring: Next.js, Serverless Architecture, AI Integration
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Next.js', 'TypeScript', 'GraphQL', 'Docker', 'AWS'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}