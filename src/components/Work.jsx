import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Filter, Search } from 'lucide-react'
import { useState } from 'react'
import { projects, categories } from '../data/data'
import ProjectCaseStudy from './ProjectCaseStudy'

export default function Work() {
  const [selectedFilter, setSelectedFilter] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [showAll, setShowAll] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedFilter === 'All' || project.category === selectedFilter
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6)

  return (
    <section id="work" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16"
          style={{ color: 'var(--color-text-primary)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        
        {/* Filter and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedFilter === category
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:border-black transition-colors"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group cursor-pointer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg ">
                <div className="h-48 relative overflow-hidden">
                  {typeof project.image === 'string' && project.image.startsWith('bg-') ? (
                    <div className={`h-full ${project.image}`}></div>
                  ) : (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  {project.status && (
                    <span className="absolute top-4 right-4 bg-white/90 text-xs font-medium px-3 py-1 rounded-full">
                      {project.status}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open(project.liveUrl, '_blank')
                      }}
                      className="hover:scale-110 transition-transform"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-400 hover:text-black transition-colors" />
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open(project.githubUrl, '_blank')
                      }}
                      className="hover:scale-110 transition-transform"
                    >
                      <Github className="w-5 h-5 text-gray-400 hover:text-black transition-colors" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {filteredProjects.length > 6 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-primary px-8 py-3 rounded-full font-medium"
            >
              {showAll ? 'Show Less' : `Show All ${filteredProjects.length} Projects`}
            </button>
          </div>
        )}

        {/* Results Count */}
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Showing {displayedProjects.length} of {filteredProjects.length} projects
          </p>
        </div>

        {/* Project Case Study Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectCaseStudy 
              project={selectedProject} 
              onClose={() => setSelectedProject(null)} 
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}