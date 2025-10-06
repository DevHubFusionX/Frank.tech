import { motion } from 'framer-motion'
import { Download, Mail, Phone, MapPin, Globe, Github, Linkedin, Code, Award, Briefcase, GraduationCap, User } from 'lucide-react'
import cvFile from '../assets/Franklyn_Anyanwu_FullStack_Developer_CV.pdf'
export default function InteractiveCV() {

const handleDownload = () => {
    const link = document.createElement('a')
    link.href = cvFile
    link.download = 'Franklyn_Anyanwu_FullStack_Developer_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const personalInfo = {
    name: "Franklyn Anyanwu",
    title: "Full-Stack MERN Developer",
    email: "fanyanwu83@gmail.com",
    phone: "+234 8030531624",
    location: "Nigeria",
    website: "https://franklin-anyanwu.vercel.app/",
    github: "https://github.com/franklynux",
    linkedin: "https://linkedin.com/in/franklyn-anyanwu"
  }

  const summary = "Passionate Full-Stack MERN Developer with expertise in building scalable web applications. Experienced in React.js, Node.js, MongoDB, and modern web technologies. Strong problem-solving skills with a focus on clean code, user experience, and performance optimization."

  const skills = {
    "Frontend": ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
    "Backend": ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "JWT Authentication", "Socket.io"],
    "Database": ["MongoDB", "Mongoose", "MySQL", "PostgreSQL", "Redis"],
    "Tools & Others": ["Git", "Docker", "AWS", "Vercel", "Postman", "VS Code", "Figma", "Agile/Scrum"]
  }

  const experience = [
    {
      title: "Full-Stack Developer",
      company: "Freelance",
      period: "2023 - Present",
      location: "Remote",
      achievements: [
        "Developed 15+ responsive web applications using MERN stack",
        "Implemented secure authentication systems with JWT and OAuth",
        "Optimized application performance resulting in 40% faster load times",
        "Collaborated with clients to deliver projects on time and within budget"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Various Projects",
      period: "2022 - 2023",
      location: "Remote",
      achievements: [
        "Built modern, responsive user interfaces using React.js and Tailwind CSS",
        "Integrated third-party APIs and payment gateways (Stripe, PayPal)",
        "Implemented real-time features using WebSocket and Socket.io",
        "Maintained 95%+ client satisfaction rate"
      ]
    }
  ]

  const projects = [
    {
      name: "HubFusionX CMS",
      description: "Custom Content Management System with role-based access control",
      technologies: ["React.js", "Node.js", "MongoDB", "JWT"],
      link: "https://fusionx-nine.vercel.app"
    },
    {
      name: "E-commerce Platform",
      description: "Full-featured online store with payment integration",
      technologies: ["React.js", "Express.js", "Stripe", "MongoDB"],
      link: "#"
    },
    {
      name: "Real-time Chat App",
      description: "WebSocket-based messaging application",
      technologies: ["React.js", "Socket.io", "Node.js", "MongoDB"],
      link: "#"
    }
  ]

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University Name",
      period: "2018 - 2022",
      location: "Nigeria"
    }
  ]

  const certifications = [
    "MongoDB Certified Developer",
    "AWS Cloud Practitioner",
    "React.js Certification",
    "Node.js Certification"
  ]

  return (
    <div className="min-h-screen py-12" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="rounded-2xl shadow-lg p-8 mb-8"
          style={{ backgroundColor: 'var(--color-bg-primary)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <User className="w-16 h-16 text-white" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>{personalInfo.name}</h1>
              <h2 className="text-2xl text-blue-600 mb-4">{personalInfo.title}</h2>
              <div className="flex flex-wrap justify-center md:justify-start gap-4" style={{ color: 'var(--color-text-secondary)' }}>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  <a href={personalInfo.website} className="text-blue-600 hover:underline">Portfolio</a>
                </div>
              </div>
            </div>
            <button onClick={handleDownload} className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="w-4 h-4" />
              Download PDF
            </button>
          </div>
        </motion.div>

        {/* Summary */}
        <motion.div
          className="rounded-2xl shadow-lg p-8 mb-8"
          style={{ backgroundColor: 'var(--color-bg-primary)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--color-text-primary)' }}>
            <User className="w-6 h-6 text-blue-600" />
            Professional Summary
          </h3>
          <p className="leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{summary}</p>
        </motion.div>

        {/* Skills */}
        <motion.div
          className="rounded-2xl shadow-lg p-8 mb-8"
          style={{ backgroundColor: 'var(--color-bg-primary)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: 'var(--color-text-primary)' }}>
            <Code className="w-6 h-6 text-blue-600" />
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category}>
                <h4 className="text-lg font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          className="rounded-2xl shadow-lg p-8 mb-8"
          style={{ backgroundColor: 'var(--color-bg-primary)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: 'var(--color-text-primary)' }}>
            <Briefcase className="w-6 h-6 text-blue-600" />
            Professional Experience
          </h3>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h4 className="text-xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>{job.title}</h4>
                  <span className="text-blue-600 font-medium">{job.period}</span>
                </div>
                <p className="mb-3" style={{ color: 'var(--color-text-secondary)' }}>{job.company} • {job.location}</p>
                <ul className="space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span style={{ color: 'var(--color-text-secondary)' }}>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          className="rounded-2xl shadow-lg p-8 mb-8"
          style={{ backgroundColor: 'var(--color-bg-primary)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: 'var(--color-text-primary)' }}>
            <Code className="w-6 h-6 text-blue-600" />
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="rounded-lg p-6 hover:shadow-md transition-shadow" style={{ border: '1px solid var(--color-border)' }}>
                <h4 className="text-lg font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>{project.name}</h4>
                <p className="mb-4" style={{ color: 'var(--color-text-secondary)' }}>{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 rounded text-sm" style={{ backgroundColor: 'var(--color-bg-tertiary)', color: 'var(--color-text-primary)' }}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-blue-600 hover:underline flex items-center gap-1"
                >
                  <Globe className="w-4 h-4" />
                  View Project
                </a>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education & Certifications */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="rounded-2xl shadow-lg p-8"
            style={{ backgroundColor: 'var(--color-bg-primary)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: 'var(--color-text-primary)' }}>
              <GraduationCap className="w-6 h-6 text-blue-600" />
              Education
            </h3>
            {education.map((edu, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold" style={{ color: 'var(--color-text-primary)' }}>{edu.degree}</h4>
                <p style={{ color: 'var(--color-text-secondary)' }}>{edu.institution}</p>
                <p className="text-blue-600 font-medium">{edu.period}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="rounded-2xl shadow-lg p-8"
            style={{ backgroundColor: 'var(--color-bg-primary)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: 'var(--color-text-primary)' }}>
              <Award className="w-6 h-6 text-blue-600" />
              Certifications
            </h3>
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-blue-600" />
                  <span style={{ color: 'var(--color-text-secondary)' }}>{cert}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  )
}