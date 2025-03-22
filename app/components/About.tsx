"use client"

import { motion } from "framer-motion"
import { Brain, Database, Cloud, Cpu } from "lucide-react"
import Image from "next/image"

export default function About() {
  const skills = [
    {
      icon: <Brain className="w-8 h-8 text-indigo-500" />,
      title: "Machine Learning",
      description: "Neural Networks, Scikit-learn, XGBoost",
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-500" />,
      title: "NLP",
      description: "BERT, LangChain, LLMs, RAG",
    },
    {
      icon: <Database className="w-8 h-8 text-blue-500" />,
      title: "Data Engineering",
      description: "ETL, Prefect, Apache Spark",
    },
    {
      icon: <Cloud className="w-8 h-8 text-teal-500" />,
      title: "Cloud Platforms",
      description: "AWS, GCP, SageMaker",
    },
  ]

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              As a passionate AI/ML Engineer, I specialize in designing, deploying, and optimizing machine learning
              applications. With a strong foundation in ETL workflows, feature engineering, NLP, and predictive
              analytics, I create scalable AI solutions that deliver exceptional business impact.
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              My expertise extends to cloud platforms like AWS and GCP, and I'm proficient in using Docker, Kubernetes,
              and MLOps practices. I'm committed to leading cross-functional teams and staying up-to-date with the
              latest industry trends to deliver cutting-edge AI solutions.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2 grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {skills.map((skill, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                {skill.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2 dark:text-white">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}

