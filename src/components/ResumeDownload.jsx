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
      className="relative overflow-hidden rounded-[2.5rem] p-8 sm:p-10"
      style={{
        background: 'var(--color-bg-secondary)',
        border: '1px solid var(--color-border)'
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      {/* Glass/Liquid Effect Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-50" />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-8">
          <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-500">
            <FileText className="w-8 h-8" />
          </div>
          <div className="px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 text-xs font-bold uppercase tracking-wider">
            PDF
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>My Resume</h3>
        <p className="mb-8 text-sm leading-relaxed opacity-80" style={{ color: 'var(--color-text-secondary)' }}>
          Get a detailed overview of my skills, experience, projects, and achievements in web development.
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={handleDownload}
            className="w-full bg-blue-600 text-white px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
          >
            <Download className="w-5 h-5" />
            Download CV
          </button>
          <button
            onClick={handlePreview}
            className="w-full bg-transparent border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all"
          >
            <Eye className="w-5 h-5" />
            Preview
          </button>
        </div>
      </div>
    </motion.div>
  )
}