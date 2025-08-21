import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, Mail, Send, Check, AlertCircle } from 'lucide-react'
import ReCAPTCHA from 'react-google-recaptcha'

export default function Contact() {
  const recaptchaRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    guests: '',
    checkin: '',
    checkout: ''
  })
  const [status, setStatus] = useState({ message: '', isError: false })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      content: '(12) 99706-7553',
      action: () => window.open('tel:+5512997067553', '_self')
    },
    {
      icon: MapPin,
      title: 'Localização',
      content: 'Centro Histórico, Paraty - RJ',
      action: () => window.open('https://maps.google.com?q=Paraty,RJ', '_blank')
    },
    {
      icon: Clock,
      title: 'Atendimento',
      content: 'Diariamente das 8h às 22h',
      action: null
    }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const token = await recaptchaRef.current.executeAsync()
      
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: `Mensagem: ${formData.message}\n\nDetalhes da Reserva:\nNúmero de hóspedes: ${formData.guests}\nCheck-in: ${formData.checkin}\nCheck-out: ${formData.checkout}`,
        recipientEmail: '',
        token: token
      }

      const response = await fetch('https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })

      if (response.ok) {
        setStatus({ message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.', isError: false })
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          guests: '',
          checkin: '',
          checkout: ''
        })
      } else {
        throw new Error('Erro ao enviar mensagem')
      }
    } catch (error) {
      setStatus({ message: 'Erro ao enviar mensagem. Tente novamente.', isError: true })
    } finally {
      setIsSubmitting(false)
      recaptchaRef.current.reset()
    }
  }

  const handleWhatsAppClick = () => {
    const message = `Olá! Gostaria de fazer uma reserva na Casa Hotel Paraíso Paraty.
    
Detalhes:
- Nome: ${formData.name || 'Não informado'}
- Número de hóspedes: ${formData.guests || 'Não informado'}
- Check-in: ${formData.checkin || 'Não informado'}
- Check-out: ${formData.checkout || 'Não informado'}
- Mensagem: ${formData.message || 'Solicito informações sobre disponibilidade e valores'}`
    
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/5512997067553?text=${encodedMessage}`, '_blank')
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Reserve Sua <span className="text-gradient">Estadia</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Entre em contato conosco para fazer sua reserva ou esclarecer dúvidas. 
            Estamos prontos para proporcionar uma experiência única em Paraty.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-8">
              Informações de Contato
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <motion.div
                    key={index}
                    className={`flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md ${info.action ? 'cursor-pointer card-hover' : ''}`}
                    onClick={info.action}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>
                      <p className="text-gray-600">{info.content}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* WhatsApp CTA */}
            <motion.div
              className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-xl text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-3">Reserva Rápida via WhatsApp</h4>
              <p className="text-green-100 mb-4">
                Para uma resposta mais rápida, entre em contato conosco diretamente pelo WhatsApp
              </p>
              <motion.button
                onClick={handleWhatsAppClick}
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-4 h-4" />
                <span>Chamar no WhatsApp</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">
              Formulário de Contato
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
                    placeholder="(12) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                    Hóspedes
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
                  >
                    <option value="">Selecione</option>
                    <option value="1-2">1-2 pessoas</option>
                    <option value="3-4">3-4 pessoas</option>
                    <option value="5-6">5-6 pessoas</option>
                    <option value="7-8">7-8 pessoas</option>
                    <option value="9+">9+ pessoas</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="checkin" className="block text-sm font-medium text-gray-700 mb-2">
                    Check-in
                  </label>
                  <input
                    type="date"
                    id="checkin"
                    name="checkin"
                    value={formData.checkin}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="checkout" className="block text-sm font-medium text-gray-700 mb-2">
                    Check-out
                  </label>
                  <input
                    type="date"
                    id="checkout"
                    name="checkout"
                    value={formData.checkout}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300 resize-none"
                  placeholder="Conte-nos mais sobre sua estadia desejada, preferências especiais ou dúvidas..."
                />
              </div>

              {status.message && (
                <motion.div
                  className={`flex items-center space-x-2 p-4 rounded-lg ${
                    status.isError 
                      ? 'bg-red-50 text-red-700 border border-red-200' 
                      : 'bg-green-50 text-green-700 border border-green-200'
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {status.isError ? (
                    <AlertCircle className="w-5 h-5" />
                  ) : (
                    <Check className="w-5 h-5" />
                  )}
                  <span>{status.message}</span>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Enviar Mensagem</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey="6Lc7xpsrAAAAAKh0I1boee2JN1oO8iF_yd0ihl79"
          size="invisible"
        />
      </div>
    </section>
  )
}