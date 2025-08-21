import React from 'react'
import { motion } from 'framer-motion'
import { Home, MapPin, Phone, Clock, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre', href: '#about' },
    { name: 'Acomodações', href: '#services' },
    { name: 'Contato', href: '#contact' }
  ]

  const contactInfo = [
    { icon: Phone, text: '(12) 99706-7553' },
    { icon: MapPin, text: 'Centro Histórico, Paraty - RJ' },
    { icon: Clock, text: 'Atendimento: 8h às 22h' }
  ]

  const handleLinkClick = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5512997067553?text=Olá! Gostaria de informações sobre a Casa Hotel Paraíso Paraty.', '_blank')
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pb-20">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl">
                  <Home className="w-7 h-7 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-xl text-white">
                    Casa Hotel
                  </span>
                  <span className="font-display font-medium text-sm text-primary-200">
                    Paraíso Paraty
                  </span>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Sua experiência única de hospedagem no coração histórico de Paraty. 
                Especialistas em receber grupos e famílias com todo conforto e carinho 
                que você merece.
              </p>

              <motion.button
                onClick={handleWhatsAppClick}
                className="btn-primary bg-green-600 hover:bg-green-700 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp</span>
              </motion.button>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display font-bold text-lg mb-6 text-white">
                Links Rápidos
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-gray-300 hover:text-primary-300 transition-colors duration-300 font-medium"
                    >
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display font-bold text-lg mb-6 text-white">
                Contato
              </h3>
              <ul className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <motion.li
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <IconComponent className="w-4 h-4 text-primary-400" />
                      <span className="text-gray-300 text-sm">{info.text}</span>
                    </motion.li>
                  )
                })}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700"></div>

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              className="flex items-center space-x-2 text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span>© {currentYear} Casa Hotel Paraíso Paraty. Todos os direitos reservados.</span>
            </motion.div>

            <motion.div
              className="flex items-center space-x-2 text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span>Criado com</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>por</span>
              <a 
                href="https://papum.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 transition-colors duration-300"
              >
                <em>Papum</em>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Back to Top */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-primary-500 to-accent-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Home className="w-5 h-5" />
        </motion.button>
      </div>
    </footer>
  )
}