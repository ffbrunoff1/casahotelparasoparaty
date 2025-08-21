import React from 'react'
import { motion } from 'framer-motion'
import { Home, Users, Heart, MapPin, Star, Calendar, Coffee, Wifi } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Home,
      title: 'Acomodações Especiais',
      description: 'Quartos espaçosos e confortáveis, perfeitos para grupos e famílias que buscam qualidade e comodidade.'
    },
    {
      icon: Users,
      title: 'Ideal para Grupos',
      description: 'Estrutura pensada especialmente para receber grupos de amigos e famílias, proporcionando momentos únicos.'
    },
    {
      icon: Heart,
      title: 'Atendimento Familiar',
      description: 'Recepção calorosa e atendimento personalizado, fazendo você se sentir em casa durante toda a estadia.'
    },
    {
      icon: MapPin,
      title: 'Localização Privilegiada',
      description: 'Situado no coração histórico de Paraty, próximo às principais atrações e ao centro histórico da cidade.'
    }
  ]

  const amenities = [
    { icon: Wifi, name: 'Wi-Fi Gratuito' },
    { icon: Coffee, name: 'Café da Manhã' },
    { icon: Calendar, name: 'Recepção 24h' },
    { icon: Star, name: 'Serviço Premium' }
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-primary-50">
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
            Sobre o <span className="text-gradient">Casa Hotel Paraíso</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Localizado na encantadora cidade histórica de Paraty, nosso hotel oferece uma experiência única de hospedagem, 
            especialmente pensada para grupos e famílias que buscam conforto, qualidade e momentos inesquecíveis.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-display font-bold text-gray-900 mb-6">
              Uma Experiência Única em Paraty
            </h3>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                O Casa Hotel Paraíso Paraty nasceu do sonho de proporcionar aos nossos hóspedes uma experiência 
                autêntica na histórica cidade de Paraty. Nossa paixão por hospitalidade e pela rica cultura local 
                se reflete em cada detalhe do nosso atendimento.
              </p>
              <p>
                Especializados em hospedagem para grupos e famílias, entendemos a importância de criar um ambiente 
                acolhedor onde memórias preciosas são construídas. Nossa estrutura foi pensada para oferecer o 
                máximo de conforto e conveniência para nossos hóspedes.
              </p>
              <p>
                Localizado estrategicamente no coração de Paraty, você estará a poucos passos das principais 
                atrações históricas, restaurantes tradicionais e do charme único que apenas esta cidade colonial 
                pode oferecer.
              </p>
            </div>

            {/* Amenities */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Comodidades Disponíveis</h4>
              <div className="grid grid-cols-2 gap-4">
                {amenities.map((amenity, index) => {
                  const IconComponent = amenity.icon
                  return (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <IconComponent className="w-5 h-5 text-primary-500" />
                      <span className="text-gray-700 font-medium">{amenity.name}</span>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-2xl">
              <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-primary-400 to-accent-400 p-8 flex items-center justify-center">
                <div className="text-center text-white">
                  <Home className="w-24 h-24 mx-auto mb-4 opacity-80" />
                  <h4 className="text-2xl font-bold mb-2">Casa Hotel Paraíso</h4>
                  <p className="text-primary-100">Sua casa em Paraty</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-20"></div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
            Pronto para uma experiência única em Paraty?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Venha descobrir por que somos a escolha ideal para grupos e famílias que buscam conforto, 
            qualidade e uma localização privilegiada no coração histórico de Paraty.
          </p>
          <motion.button
            onClick={() => {
              const element = document.querySelector('#contact')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary text-lg px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Entre em Contato
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}