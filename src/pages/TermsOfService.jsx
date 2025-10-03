import { motion } from 'framer-motion'
import { FileText, Code, CreditCard, Clock, Copyright, Wrench, Mail, Calendar } from 'lucide-react'
import ThreeBackground from '../components/ThreeBackground'

export default function TermsOfService() {
  const sections = [
    {
      icon: Code,
      title: "Services Provided",
      content: "I provide comprehensive web development services including:",
      items: [
        "Full-stack web application development",
        "Frontend and backend development",
        "Website design and optimization",
        "Technical consultation and code review",
        "API development and integration",
        "Database design and optimization"
      ]
    },
    {
      icon: CreditCard,
      title: "Payment Terms",
      content: "Clear and fair payment structure:",
      items: [
        "50% deposit required before project start",
        "Final 50% due upon project completion",
        "Additional revisions may incur extra charges",
        "Payment via bank transfer or agreed methods",
        "Invoices payable within 14 days",
        "Late payment fees may apply after 30 days"
      ]
    },
    {
      icon: Clock,
      title: "Project Timeline",
      content: "Timeline expectations and delivery:",
      items: [
        "Timelines provided are estimates based on scope",
        "Delays may occur due to scope changes",
        "Client feedback response time affects delivery",
        "Major scope changes require timeline revision",
        "Regular progress updates provided",
        "Emergency support available for critical issues"
      ]
    },
    {
      icon: Copyright,
      title: "Intellectual Property",
      content: "Rights and ownership details:",
      items: [
        "Full ownership transferred upon final payment",
        "Right to showcase work in portfolio retained",
        "Third-party licenses remain with original owners",
        "Source code provided upon project completion",
        "Documentation and training materials included",
        "No unauthorized use of proprietary methods"
      ]
    },
    {
      icon: Wrench,
      title: "Support & Maintenance",
      content: "Post-launch support and maintenance:",
      items: [
        "30 days of free bug fixes included",
        "Extended support packages available",
        "Security updates and patches provided",
        "Performance monitoring and optimization",
        "Backup and recovery services available",
        "Training and documentation provided"
      ]
    },
    {
      icon: FileText,
      title: "Terms & Conditions",
      content: "General terms and legal considerations:",
      items: [
        "Terms subject to change with notice",
        "Confidentiality maintained for all projects",
        "Force majeure events may affect delivery",
        "Disputes resolved through professional mediation",
        "Applicable law: Local jurisdiction",
        "Terms effective upon project agreement"
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
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mb-6">
            <FileText className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>Terms of Service</h1>
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
            These terms outline the agreement between us for web development services. 
            By engaging my services, you agree to these terms and conditions.
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
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)' }}>{section.title}</h2>
                </div>
                
                <p className="mb-4" style={{ color: 'var(--color-text-secondary)' }}>{section.content}</p>
                
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mt-2 flex-shrink-0"></div>
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
          className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Mail className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Questions About Terms?</h2>
          <p className="text-green-100 mb-6">
            If you have any questions about these terms or need clarification on any service details, 
            don't hesitate to get in touch.
          </p>
          <a 
            href="mailto:anyanwufranklin@gmail.com" 
            className="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-full font-medium hover:bg-green-50 transition-colors"
          >
            <Mail className="w-4 h-4" />
            anyanwufranklin@gmail.com
          </a>
        </motion.div>
      </div>
    </div>
  )
}