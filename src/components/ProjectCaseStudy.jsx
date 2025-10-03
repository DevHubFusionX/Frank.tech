import { motion } from 'framer-motion'
import { ExternalLink, Github, Calendar, Users, Code, Zap } from 'lucide-react'
import { caseStudies } from '../data/data'

export default function ProjectCaseStudy({ project, onClose }) {
  if (!project) return null

  const study = caseStudies[project.title]

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-bold text-black mb-2">{project.title}</h2>
              <p className="text-gray-600">{study.overview}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-black transition-colors"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Project Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Calendar className="w-6 h-6 mx-auto mb-2 text-blue-500" />
              <p className="text-sm text-gray-600">Timeline</p>
              <p className="font-semibold">{study.timeline}</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Users className="w-6 h-6 mx-auto mb-2 text-green-500" />
              <p className="text-sm text-gray-600">Team</p>
              <p className="font-semibold">{study.team}</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Code className="w-6 h-6 mx-auto mb-2 text-purple-500" />
              <p className="text-sm text-gray-600">Technologies</p>
              <p className="font-semibold">{study.technologies.length}</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Zap className="w-6 h-6 mx-auto mb-2 text-orange-500" />
              <p className="text-sm text-gray-600">Features</p>
              <p className="font-semibold">{study.features.length}</p>
            </div>
          </div>

          {/* Screenshots */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-4">Screenshots</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {study.screenshots.map((screenshot, index) => (
                <div key={index} className="relative">
                  <div className={`h-48 ${screenshot.color} rounded-lg`}></div>
                  <p className="text-center mt-2 text-sm font-medium">{screenshot.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Challenge & Solution */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Challenge</h3>
              <p className="text-gray-600">{study.challenge}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Solution</h3>
              <p className="text-gray-600">{study.solution}</p>
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xl font-bold text-black mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {study.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-xl font-bold text-black mb-4">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {study.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div>
            <h3 className="text-xl font-bold text-black mb-4">Results & Impact</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {study.results.map((result, index) => (
                <div key={index} className="text-center p-4 bg-green-50 rounded-lg">
                  <p className="font-semibold text-green-800">{result}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-4 pt-4 border-t border-gray-200">
            <button className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
              <ExternalLink className="w-5 h-5" />
              Live Demo
            </button>
            <button className="flex items-center gap-2 px-6 py-3 border border-black text-black rounded-lg hover:bg-black hover:text-white transition-colors">
              <Github className="w-5 h-5" />
              View Code
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}