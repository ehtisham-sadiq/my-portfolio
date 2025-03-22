"use client"

import { Briefcase, Calendar, MapPin } from "lucide-react"
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
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
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
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden group"
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-indigo-200 dark:bg-indigo-700 rounded-bl-full z-0 opacity-50 
                transition-transform duration-300 group-hover:scale-110"
              ></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2 dark:text-white flex items-center">{exp.company}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {exp.location}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {exp.period}
                </p>
                <p className="text-xl font-medium mb-4 dark:text-gray-200 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2" />
                  {exp.role}
                </p>
                <ul className="list-none space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start">
                      <span className="text-indigo-500 mr-2">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
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

