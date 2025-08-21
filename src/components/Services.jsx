import React from 'react'
import { motion } from 'framer-motion'
import { Home, Users, Bed, Wifi, Coffee, Car, MapPin, Star, Phone, Calendar } from 'lucide-react'

export default function Services() {
  const accommodations = [
    {
      icon: Home,
      title: 'Quartos Familiares',
      description: 'Espaçosos quartos projetados especialmente para famílias, com múltiplas camas e área de convivência.',
      features: ['Até 6 pessoas', 'Área de estar', 'Banheiro privativo', 'Wi-Fi gratuito']
    },
    {
      icon: Users,
      title: 'Suítes para Grupos',
      description: 'Acomodações amplas ideais para grupos de amigos, com configuração flexível e comodidades completas.',
      features: ['Até 8 pessoas', 'Camas individuais e duplas', 'Espaço de convivência', 'Frigobar']
    },
    {
      icon: Bed,
      title: 'Apartamentos Completos',
      description: 'Unidades independentes com cozinha equipada, perfeitas para estadias mais longas.',
      features: ['Cozinha completa', 'Sala de estar', 'Lavanderia', 'Varanda privativa']
    }
  ]

  const amenities = [
    { icon: Wifi, name: 'Wi-Fi Gratuito', description: 'Internet de alta velocidade em todas as áreas' },
    { icon: Coffee, name: 'Café da Manhã', description: 'Café da manhã regional servido diariamente' },
    { icon: Car, name: 'Estacionamento', description: 'Vagas disponíveis para hóspedes' },
    { icon: MapPin, name: 'Localização Central', description: 'No coração histórico de Paraty' },
    { icon: Star, name: 'Serviço Premium', description: 'Atendimento personalizado e dedicado' },
    { icon: Calendar, name: 'Recepção 24h', description: 'Suporte disponível a qualquer hora' }
  ]

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5512997067553?text=Olá! Gostaria de conhecer as acomodações da Casa Hotel Paraíso Paraty.', '_blank')
  }

  return (
    <section id="services" className="section-padding bg-white">
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
            Nossas <span className="text-gradient">Acomodações</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Oferecemos diferentes tipos de acomodações especialmente pensadas para grupos e famílias, 
            com todo o conforto e comodidade que você precisa para uma estadia inesquecível em Paraty.
          </motion.p>
        </motion.div>

        {/* Accommodations Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {accommodations.map((accommodation, index) => {
            const IconComponent = accommodation.icon
            return (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white to-primary-50 p-8 rounded-2xl shadow-lg card-hover border border-primary-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                  {accommodation.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {accommodation.description}
                </p>

                <div className="space-y-3 mb-8">
                  {accommodation.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.2) + (featureIndex * 0.1) }}
                      viewport={{ once: true }}
                    >
                      <Star className="w-4 h-4 text-secondary-500" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  onClick={handleWhatsAppClick}
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone className="w-4 h-4" />
                  <span>Consultar Disponibilidade</span>
                </motion.button>
              </motion.div>
            )
          })}
        </div>

        {/* Amenities Section */}
        <motion.div
          className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Comodidades e Serviços
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tudo pensado para garantir o máximo conforto durante sua estadia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((amenity, index) => {
              const IconComponent = amenity.icon
              return (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md card-hover"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {amenity.name}
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {amenity.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Location Highlight */}
        <motion.div
          className="text-center mt-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <MapPin className="w-12 h-12 mx-auto mb-4 text-secondary-300" />
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Localização Privilegiada
          </h3>
          <p className="text-lg text-primary-100 mb-6 max-w-3xl mx-auto leading-relaxed">
            Situados no coração histórico de Paraty, você estará a poucos passos das principais 
            atrações, restaurantes tradicionais, lojas de artesanato e do famoso centro histórico 
            com suas ruas de pedra e arquitetura colonial preservada.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-300 mb-2">5 min</div>
              <div className="text-primary-100">Centro Histórico</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-300 mb-2">10 min</div>
              <div className="text-primary-100">Cais de Paraty</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-300 mb-2">15 min</div>
              <div className="text-primary-100">Praias Próximas</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}