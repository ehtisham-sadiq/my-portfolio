"use client"

import { GraduationCap, Calendar, Award, MapPin, ExternalLink } from "lucide-react"
import Image from "next/image"
import AnimatedSectionHeader from "./AnimatedSectionHeader"
import { motion } from "framer-motion"

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "Punjab University College of Information Technology",
      period: "Oct 2017 – May 2021",
      location: "Lahore, Pakistan",
    },
  ]

  const certificates = [
    "Python for Data Engineering – DataCamp",
    "Machine Learning Specialization – Coursera",
    "Deep Learning Specialization – Coursera",
  ]

  return (
    <section
      id="education"
      className="py-20 relative overflow-hidden"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-purple-900 transition-colors duration-300"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-300/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-300/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Education & Certificates" />
        
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-purple-200 dark:bg-purple-700 rounded-br-full z-0 opacity-50 transition-transform duration-300 group-hover:scale-110"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-4">
                <GraduationCap className="w-4 h-4" />
                Academic Background
              </div>
              
              {education.map((edu, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  
                  <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
                    {edu.institution}
                  </h4>
                  
                  <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-300">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </span>
                  </div>
                  
                  <div className="pt-4">
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg">
                      <p className="text-gray-700 dark:text-gray-300 font-medium">
                        Focused on software development, algorithms, data structures, and AI/ML fundamentals with a strong emphasis on practical application.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certificates Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-200 dark:bg-indigo-700 rounded-bl-full z-0 opacity-50 transition-transform duration-300 group-hover:scale-110"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-4">
                <Award className="w-4 h-4" />
                Professional Certifications
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Continuous Learning & Skill Enhancement
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                {certificates.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-lg border border-gray-100 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {cert}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Professional development in AI/ML and data engineering
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}

