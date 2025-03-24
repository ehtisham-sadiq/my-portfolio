"use client"

import { motion } from "framer-motion"
import { Brain, Database, Code2, Cloud, Cpu, Bot, BarChart, Cog, Zap } from "lucide-react"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

const services = [
  {
    icon: Brain,
    title: "AI/ML Solutions Development",
    description: "End-to-end development of custom AI and machine learning solutions tailored to your business needs.",
    features: [
      "Custom ML Model Development",
      "Natural Language Processing",
      "Computer Vision Solutions",
      "Predictive Analytics"
    ],
    technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI"],
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    icon: Database,
    title: "Data Engineering & ETL",
    description: "Robust data pipeline development and optimization for efficient data processing and analysis.",
    features: [
      "ETL Pipeline Development",
      "Data Warehouse Design",
      "Real-time Data Processing",
      "Data Quality Management"
    ],
    technologies: ["Apache Spark", "Airflow", "PostgreSQL", "MongoDB"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Cloud,
    title: "MLOps & Cloud Solutions",
    description: "Streamlined deployment and management of ML models in production environments.",
    features: [
      "ML Pipeline Automation",
      "Model Monitoring & Maintenance",
      "Cloud Infrastructure Setup",
      "Performance Optimization"
    ],
    technologies: ["AWS", "Docker", "Kubernetes", "MLflow"],
    gradient: "from-green-500 to-teal-500"
  },
  {
    icon: Bot,
    title: "Conversational AI",
    description: "Building intelligent chatbots and conversational interfaces powered by advanced NLP.",
    features: [
      "Custom Chatbot Development",
      "Intent Recognition",
      "Multilingual Support",
      "Voice Integration"
    ],
    technologies: ["LangChain", "BERT", "Rasa", "FastAPI"],
    gradient: "from-orange-500 to-red-500"
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-indigo-50/30 dark:from-gray-900 dark:to-indigo-900/30"></div>
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="neural-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill="currentColor" />
              <path d="M50 10 L50 90 M10 50 L90 50" stroke="currentColor" strokeWidth="0.5" fill="none" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#neural-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="My Services" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Service Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <Zap className="w-4 h-4 text-indigo-500" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {service.technologies.map((tech, idx) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className={`px-3 py-1 text-sm text-white rounded-full bg-gradient-to-r ${service.gradient}`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Hover Effect Decoration */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 to-purple-500/0 rounded-2xl transition-opacity duration-300 group-hover:opacity-10"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

