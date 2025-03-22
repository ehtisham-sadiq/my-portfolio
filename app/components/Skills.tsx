"use client"

import { motion } from "framer-motion"
import { Brain, Database, Code, Cloud, Cpu, Bot, BarChart, FileText, Zap, Microscope } from "lucide-react"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

const SkillIcon = ({ icon: Icon, color }: { icon: any; color: string }) => (
  <div className={`p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg`}>
    <Icon className={`w-6 h-6 ${color}`} />
  </div>
)

const skills = [
  {
    icon: Brain,
    name: "Machine Learning",
    tech: "Scikit-learn, Neural Networks, XGBoost",
    description: "Building and deploying supervised learning models, regression analysis, and explainable AI (XAI).",
    color: "text-indigo-500",
  },
  {
    icon: Bot,
    name: "Natural Language Processing",
    tech: "BERT, SpaCy, Hugging Face, LangChain",
    description: "Implementing text classification, chatbots, and RAG systems with state-of-the-art language models.",
    color: "text-purple-500",
  },
  {
    icon: Database,
    name: "Data Engineering",
    tech: "ETL, Prefect, SQLAlchemy, Apache Spark",
    description: "Building robust data pipelines and automating data processing workflows for ML applications.",
    color: "text-blue-500",
  },
  {
    icon: Cloud,
    name: "Cloud Platforms",
    tech: "AWS, GCP, SageMaker",
    description: "Deploying and managing ML models and data pipelines on cloud infrastructure.",
    color: "text-teal-500",
  },
  {
    icon: Code,
    name: "Programming",
    tech: "Python, SQL, JavaScript, Bash",
    description: "Developing efficient and maintainable code for data processing and ML applications.",
    color: "text-green-500",
  },
  {
    icon: Zap,
    name: "Deep Learning",
    tech: "PyTorch, TensorFlow, Keras",
    description: "Implementing DNNs, RNNs, and CNNs for complex pattern recognition tasks.",
    color: "text-yellow-500",
  },
  {
    icon: FileText,
    name: "Speech AI",
    tech: "ASR, STT/TTS, Speech Processing",
    description: "Building speech recognition and synthesis systems for conversational AI applications.",
    color: "text-orange-500",
  },
  {
    icon: Cpu,
    name: "MLOps",
    tech: "Docker, Kubernetes, MLflow",
    description: "Implementing CI/CD pipelines and infrastructure for ML model deployment and monitoring.",
    color: "text-red-500",
  },
  {
    icon: BarChart,
    name: "Data Visualization",
    tech: "Matplotlib, Seaborn, Plotly",
    description: "Creating insightful visualizations to communicate complex data patterns and model results.",
    color: "text-pink-500",
  },
  {
    icon: Microscope,
    name: "Research & Analysis",
    tech: "Time Series, Feature Engineering",
    description: "Conducting data analysis and research to develop innovative ML solutions for complex problems.",
    color: "text-cyan-500",
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900"></div>

      {/* Skill Illustrations */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="skill-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M50 30 L50 70 M30 50 L70 50" stroke="currentColor" strokeWidth="2" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#skill-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Technical Skills" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <SkillIcon icon={skill.icon} color={skill.color} />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{skill.tech}</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

