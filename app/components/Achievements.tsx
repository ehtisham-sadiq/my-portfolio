"use client"

import { motion } from "framer-motion"
import { Award, TrendingUp, PieChart } from "lucide-react"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

export default function Achievements() {
  const achievements = [
    {
      icon: <TrendingUp className="w-12 h-12 text-indigo-500" />,
      title: "AI-Driven Survival Prediction for Liver Patients",
      description: "Engineered an XGBoost model to predict cirrhosis outcomes with 93.8% accuracy and 0.17 log loss.",
    },
    {
      icon: <PieChart className="w-12 h-12 text-purple-500" />,
      title: "AI for Smarter Personal Finance Tracking",
      description:
        "Built a Random Forest classifier to auto-categorize bank transactions with 90.5% precision and 95.6% ROC-AUC.",
    },
    {
      icon: <Award className="w-12 h-12 text-blue-500" />,
      title: "Seamlessly Unifying Brand Identities Through NLP",
      description:
        "Built a brand-alignment solution using advanced text normalization, named entity recognition, fuzzy matching, and clustering.",
    },
  ]

  return (
    <section
      id="achievements"
      className="py-20 bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Key Achievements" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4">{achievement.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-center dark:text-white">{achievement.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

