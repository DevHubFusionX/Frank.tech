import { motion } from 'framer-motion'
import { Download, FileText, Eye } from 'lucide-react'
import cvFile from '../assets/Franklyn_Anyanwu_FullStack_Developer_CV.pdf'

export default function ResumeDownload() {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = cvFile
    link.download = 'Franklyn_Anyanwu_FullStack_Developer_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handlePreview = () => {
    window.open(cvFile, '_blank')
  }

  return (
    <motion.div
      className="bg-gray-800  text-white rounded-xl p-8"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-white/20 p-3 rounded-lg">
          <FileText className="w-8 h-8" />
        </div>
        <div>
          <h3 className="text-2xl font-bold">My Resume</h3>
          <p className="text-blue-100">Download my complete CV</p>
        </div>
      </div>
      
      <p className="text-blue-100 mb-6">
        Get a detailed overview of my skills, experience, projects, and achievements in web development.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-3">
        <button
        
          onClick={handleDownload}
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-blue-50 transition-colors"
        >
          <Download className="w-5 h-5" />
          Download CV
        </button>
        <button
          onClick={handlePreview}
          className="border border-white text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-white/10 transition-colors"
        >
          <Eye className="w-5 h-5" />
          Preview
        </button>
      </div>
    </motion.div>
  )
}