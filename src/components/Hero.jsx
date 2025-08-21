import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Users, Heart, Star, Phone, Calendar } from 'lucide-react'

export default function Hero() {
  const features = [
    { icon: Users, text: 'Ideal para Grupos' },
    { icon: Heart, text: 'Ambiente Familiar' },
    { icon: MapPin, text: 'Centro de Paraty' },
    { icon: Star, text: 'Experiência Única' }
  ]

  const handleContactClick = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5512997067553?text=Olá! Gostaria de fazer uma reserva na Casa Hotel Paraíso Paraty.', '_blank')
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-transparent to-accent-900 opacity-40"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-white bg-opacity-10 rounded-full"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 right-16 w-24 h-24 bg-secondary-400 bg-opacity-20 rounded-full"
          animate={{
            y: [0, 20, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 right-10 w-16 h-16 bg-accent-400 bg-opacity-15 rounded-full"
          animate={{
            y: [0, -30, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Casa Hotel
            <span className="block text-secondary-300">Paraíso Paraty</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-primary-100 mb-8 font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hospedagem especial para grupos e famílias no coração histórico de Paraty
          </motion.p>

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={index}
                  className="flex flex-col items-center p-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg border border-white border-opacity-20"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <IconComponent className="w-6 h-6 text-secondary-300 mb-2" />
                  <span className="text-sm font-medium text-center">{feature.text}</span>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              onClick={handleWhatsAppClick}
              className="btn-primary flex items-center space-x-2 text-lg px-8 py-4 bg-secondary-500 hover:bg-secondary-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              <span>Reservar Agora</span>
            </motion.button>

            <motion.button
              onClick={handleContactClick}
              className="btn-secondary flex items-center space-x-2 text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="w-5 h-5" />
              <span>Saiba Mais</span>
            </motion.button>
          </motion.div>

          {/* Location Badge */}
          <motion.div
            className="mt-8 inline-flex items-center space-x-2 px-4 py-2 bg-white bg-opacity-15 backdrop-blur-sm rounded-full border border-white border-opacity-30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <MapPin className="w-4 h-4 text-secondary-300" />
            <span className="text-sm font-medium">Paraty, Rio de Janeiro</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white border-opacity-50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white bg-opacity-70 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}