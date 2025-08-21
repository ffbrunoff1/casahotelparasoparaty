import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, MapPin, Phone, Home } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Início', href: '#hero', icon: Home },
    { name: 'Sobre', href: '#about', icon: MapPin },
    { name: 'Acomodações', href: '#services', icon: Home },
    { name: 'Contato', href: '#contact', icon: Phone }
  ]

  const handleMenuClick = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  const LogoComponent = () => (
    <motion.div 
      className="flex items-center space-x-3"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl">
        <Home className="w-7 h-7 text-white" />
      </div>
      <div className="flex flex-col">
        <span className={`font-display font-bold text-xl transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
          Casa Hotel
        </span>
        <span className={`font-display font-medium text-sm transition-colors duration-300 ${isScrolled ? 'text-primary-600' : 'text-primary-200'}`}>
          Paraíso Paraty
        </span>
      </div>
    </motion.div>
  )

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg backdrop-blur-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <LogoComponent />

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.button
                  key={item.name}
                  onClick={() => handleMenuClick(item.href)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-primary-600 hover:bg-primary-50' 
                      : 'text-white hover:text-primary-200 hover:bg-white hover:bg-opacity-10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{item.name}</span>
                </motion.button>
              )
            })}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white hover:bg-opacity-10'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-2 bg-white bg-opacity-95 backdrop-blur-lg rounded-lg mt-2">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.button
                  key={item.name}
                  onClick={() => handleMenuClick(item.href)}
                  className="flex items-center space-x-3 w-full px-4 py-3 text-left text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="font-medium">{item.name}</span>
                </motion.button>
              )
            })}
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}