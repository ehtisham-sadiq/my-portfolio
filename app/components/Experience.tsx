"use client"

import { Briefcase, Calendar, MapPin, Award, Wrench, Star } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

export default function Experience() {
  const experiences = [
    {
      company: "Rivon.ai",
      location: "Bahawalpur, Pakistan",
      period: "Sep 2024 - Present",
      role: "Technical Lead – AI & Database Engineering",
      responsibilities: [
        "Led a team of 8 software engineers across three major AI/ML projects, ensuring timely delivery and adherence to best practices.",
        "Developed AI-Driven Startup Advisor using RAG, LangChain, and OpenAI, reducing market research time by 50% via automated scraping pipelines, empowering 1.5K+ founders to optimize growth strategies.",
        "Leading AI-driven interview platform using OpenAI, and FastAPI, achieving 96.8% API uptime, integrated STT/TTS pipelines (35% latency reduction), driving 4.7/5 user satisfaction.",
        "Built dynamic data pipeline orchestration tool at Altosphere, boosting data transfer speeds by 40% with gRPC, deployed multiple ML models on AWS Sagemaker, created an automated PDF extraction pipeline using Textract, and implemented anomaly detection for wind energy time series.",
      ],
      technologies: [
        "OpenAI", "LangChain", "RAG", "FastAPI", "AWS Sagemaker",
        "gRPC", "Textract", "STT/TTS", "Python", "PostgreSQL"
      ],
      highlights: [
        "50% reduction in market research time",
        "96.8% API uptime",
        "35% latency reduction",
        "40% faster data transfer"
      ]
    },
    {
      company: "Vacon.ai",
      location: "Lahore, Pakistan",
      period: "June 2022 - Sep 2024",
      role: "Senior Software Engineer",
      responsibilities: [
        "Led a team of 3 engineers to develop a compliant, scalable SaaS debt-collection platform, increasing revenue by 1200%.",
        "Streamlined data ingestion and processing by 50% via asynchronous microservices using SQLAlchemy, Celery, and Redis.",
        "Architected and managed end-to-end ETL pipelines using Prefect, reducing manual intervention by 70%, integrating validations with usaddress and Twilio to automate data cleaning, and transformation.",
        "Integrated ML APIs with Kickbox and Amazon SES for dynamic, agency-specific communications.",
        "Automated credit underwriting with AWS Textract, PDFMiner, PyPDF2, delivering AI predictions for 3 large banks in under 2 months.",
      ],
    },
    {
      company: "Blink Co Technologies Ltd.",
      location: "Lahore, Pakistan",
      period: "Dec 2020 - June 2022",
      role: "ML Engineer",
      responsibilities: [
        "Developed AI & NLP solutions: built a conversational AI assistant with SpaCy, CRF, BERT, served via Flask on AWS EC2.",
        "Trained/deployed Deep Learning (DenseNN, LSTM) for text classification using Pytorch on AWS SageMaker.",
        "Built a Knowledge Extraction pipeline for 100k+ documents with BeautifulSoup, NER, and Topic Modeling (Gensim, TextRazor).",
        "Designed a Predictive Analytics PoC for oil well failures using MLE, MAP, and EM Algorithm with NumPy, SciPy, Scikit-learn.",
      ],
    },
    {
      company: "Zep Analytics",
      location: "Remote",
      period: "Oct 2019 - July 2020",
      role: "Data Science Intern",
      responsibilities: [
        "Implemented clustering methods (k-means, Gaussian Mixture Models) in Python for insurance price modeling.",
        "Automated weekly reports using pywin32, openpyxl, pandas, reducing manual efforts by 60%.",
        "Performed data preparation and feature engineering for pricing models and client churn prediction using Pandas, MongoDB, and AWS Redshift.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Neural Network Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-900/30 opacity-60"></div>
      <div className="absolute inset-0" style={{ 
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.15) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Professional Experience" />
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
            >
              {/* Decorative Gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-indigo-500/10 to-purple-500/10 rounded-full -mr-32 -mt-32 transform group-hover:scale-110 transition-transform duration-500"></div>

              <div className="relative z-10">
                {/* Header Section */}
                <div className="flex flex-wrap items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.company}
                    </h3>
                    <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                      {exp.role}
                    </h4>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Key Metrics */}
                {exp.highlights && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {exp.highlights.map((highlight, idx) => (
                      <div key={idx} className="bg-indigo-50 dark:bg-indigo-900/30 p-3 rounded-lg">
                        <div className="flex items-center">
                          <Star className="w-5 h-5 text-indigo-500 mr-2" />
                          <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                            {highlight}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Responsibilities */}
                <div className="space-y-3 mb-6">
                  {exp.responsibilities.map((resp, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3 group/item"
                    >
                      <span className="text-indigo-500 font-bold mt-1">•</span>
                      <p className="text-gray-700 dark:text-gray-300 group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors duration-200">
                        {resp}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Technologies */}
                {exp.technologies && (
                  <div className="mt-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Wrench className="w-5 h-5 text-indigo-500" />
                      <h5 className="font-semibold text-gray-900 dark:text-white">
                        Technologies & Tools
                      </h5>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 }}
                          className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm rounded-full"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}

