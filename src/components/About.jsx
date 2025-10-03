import { motion } from 'framer-motion'
import profileImage from '../assets/ChatGPT Image Oct 2, 2025, 03_43_24 AM.png'

export default function About() {
  const skills = [
    'React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript (ES6+)', 'Redux Toolkit',
    'Tailwind CSS', 'Firebase', 'REST APIs', 'JWT Auth', 'Git', 'Figma'
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="grid md:grid-cols-2 gap-8 md:gap-16 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>About Me</h2>
            <p className="text-gray-600 text-lg mb-6">
              I'm Anyanwu Franklin, an 18-year-old results-driven Full-Stack MERN Developer with a strong
              track record of designing, developing, and deploying high-performance web applications.
              I specialize in building secure authentication systems, RESTful APIs, and optimized user interfaces.
            </p>
            <p className="text-gray-600 text-lg mb-6">
              Currently freelancing since January 2024, I've optimized application performance by 30%+
              through code splitting, lazy loading, and modern development practices. I partner with
              clients to translate Figma mockups into functional digital solutions.
            </p>
            <p className="text-gray-600 text-lg mb-8">
              When I'm not coding, I'm exploring AI applications in web development, contributing to
              open-source projects, and continuously learning Next.js and advanced MERN stack solutions.
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white hover:text-gray-900 rounded-full text-sm font-medium text-gray-700 border cursor-pointer"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="w-80 h-80 mx-auto overflow-hidden rounded-2xl shadow-lg">
              <img 
                src={profileImage} 
                alt="Anyanwu Franklin - Full-Stack Developer" 
                className="w-full h-full object-cover "
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}