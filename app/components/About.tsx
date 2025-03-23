"use client"

import { motion } from "framer-motion"
import { Users, Award, Code2, Brain, Cpu, Star } from "lucide-react"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

const stats = [
  {
    icon: Users,
    value: "20+",
    label: "Happy Clients",
    description: "Across Global Companies"
  },
  {
    icon: Award,
    value: "15+",
    label: "ML Models Deployed",
    description: "In Production"
  },
  {
    icon: Code2,
    value: "50K+",
    label: "Lines of Code",
    description: "Clean & Efficient"
  },
  {
    icon: Star,
    value: "98%",
    label: "Success Rate",
    description: "In Project Delivery"
  }
]

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-indigo-50/50 dark:from-gray-900 dark:to-indigo-900/30"></div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="About Me" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                Transforming Ideas into Intelligent Solutions
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                As a passionate AI/ML Engineer with over 5 years of experience, I specialize in turning complex data challenges into scalable AI solutions. My expertise spans the entire machine learning lifecycle, from data engineering to model deployment.
              </p>

              <div className="flex items-center gap-2 mb-4">
                <Brain className="w-5 h-5 text-indigo-500" />
                <span className="font-semibold">Core Focus Areas:</span>
              </div>
              
              <ul className="list-none space-y-3">
                <li className="flex items-start gap-2">
                  <Cpu className="w-5 h-5 text-indigo-500 mt-1" />
                  <span>Building and optimizing machine learning models for real-world applications</span>
                </li>
                <li className="flex items-start gap-2">
                  <Cpu className="w-5 h-5 text-indigo-500 mt-1" />
                  <span>Developing robust ETL pipelines and data processing workflows</span>
                </li>
                <li className="flex items-start gap-2">
                  <Cpu className="w-5 h-5 text-indigo-500 mt-1" />
                  <span>Implementing NLP solutions and conversational AI systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <Cpu className="w-5 h-5 text-indigo-500 mt-1" />
                  <span>Cloud-native ML infrastructure and MLOps practices</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <stat.icon className="w-6 h-6 text-indigo-500" />
                  <h4 className="font-semibold text-gray-900 dark:text-white">{stat.label}</h4>
                </div>
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">
                  {stat.value}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 p-6 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Recent Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-indigo-500 mt-1" />
              <p className="text-gray-600 dark:text-gray-300">
                Reduced model inference time by 40% through optimization
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-indigo-500 mt-1" />
              <p className="text-gray-600 dark:text-gray-300">
                Implemented MLOps practices reducing deployment time by 60%
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-indigo-500 mt-1" />
              <p className="text-gray-600 dark:text-gray-300">
                Developed AI solutions saving clients $500K annually
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

