"use client"

import { motion } from "framer-motion"
import { Brain, Database, Code2, Cloud, Cpu, Bot, BarChart, Cog, Star, Zap, CheckCircle } from "lucide-react"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

const skillCategories = [
  {
    title: "AI/ML Engineering",
    icon: Brain,
    gradient: "from-blue-500 to-indigo-500",
    description: "Expertise in developing cutting-edge AI solutions and ML models",
    skills: [
      { name: "Deep Learning", level: 95, tools: ["TensorFlow", "PyTorch", "Keras"] },
      { name: "Natural Language Processing", level: 90, tools: ["BERT", "GPT", "SpaCy", "NLTK"] },
      { name: "Computer Vision", level: 85, tools: ["OpenCV", "CNN", "Object Detection"] },
      { name: "Machine Learning", level: 95, tools: ["Scikit-learn", "XGBoost", "LightGBM"] }
    ],
    achievements: [
      "Reduced model inference time by 40%",
      "Achieved 96.8% accuracy in production",
      "Processed 100K+ documents daily"
    ]
  },
  {
    title: "Data Engineering",
    icon: Database,
    gradient: "from-purple-500 to-pink-500",
    description: "Building robust data pipelines and scalable data infrastructure",
    skills: [
      { name: "ETL Pipeline Development", level: 90, tools: ["Airflow", "Prefect", "dbt"] },
      { name: "Big Data Processing", level: 85, tools: ["Spark", "Hadoop", "Kafka"] },
      { name: "Database Management", level: 90, tools: ["PostgreSQL", "MongoDB", "Redis"] },
      { name: "Data Warehousing", level: 85, tools: ["Snowflake", "Redshift", "BigQuery"] }
    ],
    achievements: [
      "Processed 1TB+ data daily",
      "Reduced pipeline latency by 60%",
      "99.9% data accuracy achieved"
    ]
  },
  {
    title: "Cloud & MLOps",
    icon: Cloud,
    gradient: "from-green-500 to-teal-500",
    description: "Deploying and scaling ML solutions in production",
    skills: [
      { name: "Cloud Platforms", level: 90, tools: ["AWS", "GCP", "Azure"] },
      { name: "Containerization", level: 85, tools: ["Docker", "Kubernetes", "ECS"] },
      { name: "CI/CD", level: 90, tools: ["Jenkins", "GitHub Actions", "GitLab CI"] },
      { name: "Monitoring", level: 85, tools: ["Prometheus", "Grafana", "CloudWatch"] }
    ],
    achievements: [
      "Maintained 99.9% uptime",
      "Reduced deployment time by 70%",
      "Automated 90% of MLOps tasks"
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Neural Network Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-indigo-50/30 dark:from-gray-900 dark:to-indigo-900/30"></div>
      <div className="absolute inset-0" style={{ 
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.15) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Technical Expertise" />
        
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Transforming Ideas into Intelligent Solutions
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            With over 5 years of experience in AI/ML engineering, I specialize in building scalable, 
            production-ready solutions that drive business value. My expertise spans the entire ML lifecycle, 
            from data engineering to model deployment.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient}`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-6">
                {category.skills.map((skill, idx) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: idx * 0.1 }}
                        className={`h-full bg-gradient-to-r ${category.gradient}`}
                      />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.tools.map((tool) => (
                        <span
                          key={tool}
                          className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Achievements */}
              <div className="mt-8">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {category.achievements.map((achievement) => (
                    <li key={achievement} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Let's collaborate to transform your ideas into powerful AI solutions.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Zap className="w-5 h-5" />
              Start a Project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

