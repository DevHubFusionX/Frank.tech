import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import emailjs from 'emailjs-com'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    try {
      const publicKey = import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_KEY
      if (!publicKey) {
        console.error('EmailJS public key not found in environment variables')
        return
      }
      emailjs.init(publicKey)
    } catch (error) {
      console.error('Failed to initialize EmailJS:', error)
    }
  }, [])

  const onSubmit = async (data) => {
    setIsSubmitting(true)

    try {
      // Validate environment variables
      const serviceId = import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is incomplete. Please contact the administrator.')
      }

      // Validate form data
      if (!data.name?.trim() || !data.email?.trim() || !data.message?.trim()) {
        throw new Error('Please fill in all required fields.')
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name.trim(),
          from_email: data.email.trim(),
          message: data.message.trim(),
          to_name: 'Anyanwu Franklin'
        },
        publicKey
      )

      setIsSubmitted(true)
      reset()
    } catch (error) {
      console.error('Email send failed:', error)
      const errorMessage = error.message || 'Failed to send message. Please try again or contact us directly.'
      alert(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 ">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16"
          style={{ color: 'var(--color-text-primary)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-black mb-6">Let's Work Together</h3>
            <p className="text-gray-600 text-lg mb-8">
              Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-600">fanyanwu83@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-gray-600">+234 912 739 1830</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-gray-600">+234 803 053 1624</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-600">Lagos, Nigeria</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-black mb-2">Message Sent!</h3>
                <p className="text-gray-600 mb-4">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-secondary px-6 py-2 rounded-lg font-medium"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <div>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    placeholder="Your Name"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors ${errors.name ? 'border-red-500' : 'border-gray-400 focus:border-black'
                      }`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    type="email"
                    placeholder="Your Email"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors ${errors.email ? 'border-red-500' : 'border-gray-400 focus:border-black'
                      }`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    placeholder="Your Message"
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors resize-none ${errors.message ? 'border-red-500' : 'border-gray-400 focus:border-black'
                      }`}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}