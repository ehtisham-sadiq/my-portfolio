"use client"

import { motion } from "framer-motion"
import { Brain, Database, Bot, BarChart } from "lucide-react"
import Image from "next/image"

export default function Services() {
  const services = [
    {
      icon: <Brain className="w-12 h-12 text-indigo-500" />,
      title: "Machine Learning Solutions",
      description:
        "Custom ML models and algorithms tailored to your business needs, from predictive analytics to recommendation systems.",
    },
    {
      icon: <Bot className="w-12 h-12 text-pink-500" />,
      title: "Agents and RAG",
      description:
        "Advanced AI agents and Retrieval-Augmented Generation (RAG) systems for intelligent automation and knowledge processing.",
    },
    {
      icon: <Bot className="w-12 h-12 text-purple-500" />,
      title: "NLP & Conversational AI",
      description:
        "Advanced natural language processing solutions including chatbots, text classification, and knowledge extraction systems.",
    },
    {
      icon: <Database className="w-12 h-12 text-blue-500" />,
      title: "Data Engineering & ETL",
      description:
        "Robust data pipelines and ETL workflows to transform raw data into valuable insights for your business.",
    },
    {
      icon: <BarChart className="w-12 h-12 text-teal-500" />,
      title: "AI Strategy & Consulting",
      description:
        "Expert guidance on implementing AI solutions, from proof of concept to production deployment and scaling.",
    },
  ]

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="text-2xl font-semibold ml-4 dark:text-white">{service.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-64 h-64 -mt-32 -ml-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}

