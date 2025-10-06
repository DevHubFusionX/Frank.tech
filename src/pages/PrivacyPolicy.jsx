import { motion } from 'framer-motion'
import { Shield, Eye, Lock, Mail, Calendar, FileText } from 'lucide-react'
import ThreeBackground from '../components/ThreeBackground'

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: "When you contact me through this website, I may collect:",
      items: [
        "Name and email address from contact forms",
        "Project details and requirements", 
        "Communication history",
        "Basic analytics data (page views, device type)"
      ]
    },
    {
      icon: Shield,
      title: "How We Use Your Information",
      content: "Your information is used solely for:",
      items: [
        "Responding to inquiries and project requests",
        "Providing web development services",
        "Communicating project progress",
        "Improving website experience"
      ]
    },
    {
      icon: Lock,
      title: "Data Protection",
      content: "I take your privacy seriously:",
      items: [
        "No data is sold to third parties",
        "Secure storage of contact information",
        "Data retention only as long as necessary",
        "You can request data deletion anytime"
      ]
    },
    {
      icon: FileText,
      title: "Cookies & Analytics",
      content: "This website uses:",
      items: [
        "Essential cookies for functionality",
        "Basic analytics to improve user experience",
        "No tracking cookies or advertising",
        "You can disable cookies in your browser"
      ]
    }
  ]

  return (
    <div className="min-h-screen pt-20 relative" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      <ThreeBackground />
      
      <div className="max-w-6xl mx-auto px-6 py-16 relative z-20">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div 
            className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>Privacy Policy</h1>
          <div className="flex items-center justify-center gap-2" style={{ color: 'var(--color-text-secondary)' }}>
            <Calendar className="w-4 h-4" />
            <span>Last updated: December 2024</span>
          </div>
        </motion.div>

        {/* Intro Card */}
        <motion.div
          className="rounded-2xl p-8 mb-12 shadow-lg backdrop-blur-sm"
          style={{ 
            backgroundColor: 'var(--color-bg-secondary)', 
            border: '1px solid var(--color-border)' 
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg text-center leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            Your privacy is important to me. This policy explains how I collect, use, and protect 
            your personal information when you visit my website or use my services.
          </p>
        </motion.div>

        {/* Sections Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {sections.map((section, index) => {
            const IconComponent = section.icon
            return (
              <motion.div
                key={section.title}
                className="rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
                style={{ 
                  backgroundColor: 'var(--color-bg-secondary)', 
                  border: '1px solid var(--color-border)' 
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)' }}>{section.title}</h2>
                </div>
                
                <p className="mb-4" style={{ color: 'var(--color-text-secondary)' }}>{section.content}</p>
                
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div 
                        className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: 'var(--color-primary)' }}
                      ></div>
                      <span style={{ color: 'var(--color-text-secondary)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* Contact Section */}
        <motion.div
          className="rounded-2xl p-8 text-center text-white"
          style={{ backgroundColor: 'var(--color-primary)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Mail className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Questions About Privacy?</h2>
          <p className="text-white/80 mb-6">
            If you have any questions about this privacy policy or how your data is handled, 
            feel free to reach out.
          </p>
          <a 
            href="mailto:anyanwufranklin@gmail.com" 
            className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            style={{ color: 'var(--color-primary)' }}
          >
            <Mail className="w-4 h-4" />
            anyanwufranklin@gmail.com
          </a>
        </motion.div>
      </div>
    </div>
  )
}