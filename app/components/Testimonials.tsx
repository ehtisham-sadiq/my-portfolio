"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  image: string
  content: string
  project: string
  metrics?: string
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      role: "Head of AI Research",
      company: "HealthcareAI Solutions",
      image: "/testimonials/sarah-chen.jpg",
      project: "Liver Disease Prediction System",
      metrics: "93.8% accuracy, 0.17 log loss",
      content: "Ehtisham's work on our liver disease prediction system was transformative. He implemented an XGBoost model that achieved 93.8% accuracy and 0.17 log loss, significantly outperforming our previous models. His expertise in feature engineering and model optimization helped us identify key predictors we hadn't considered before. The system now helps doctors make faster, more accurate decisions for patient care."
    },
    {
      id: 2,
      name: "Alex Thompson",
      role: "CTO",
      company: "FinTech Innovations",
      image: "/testimonials/alex-thompson.jpg",
      project: "Transaction Categorization System",
      metrics: "90.5% precision, 95.6% ROC-AUC",
      content: "Working with Ehtisham on our transaction categorization system was a game-changer. He developed a Random Forest classifier that achieved 90.5% precision and 95.6% ROC-AUC, processing over 1 million transactions daily. His implementation of real-time feature engineering and automated retraining pipelines reduced our maintenance overhead by 60%. The system now provides personalized financial insights to our users with unprecedented accuracy."
    },
    {
      id: 3,
      name: "Dr. Tim Rodriguez",
      role: "Director of Data Science",
      company: "Global Retail Analytics",
      image: "/testimonials/tim.jpg",
      project: "Customer Churn Prediction",
      metrics: "87% accuracy, 40% reduction in churn",
      content: "Ehtisham's contribution to our customer churn prediction system was exceptional. He developed a hybrid model combining LSTM networks with traditional ML algorithms that achieved 87% accuracy. His innovative approach to handling temporal patterns in customer behavior helped us reduce churn by 40% within the first quarter of implementation. The system now processes data from 2 million customers in real-time, providing actionable insights to our retention team."
    },
    {
      id: 4,
      name: "David Kumar",
      role: "Lead ML Engineer",
      company: "AI Manufacturing Solutions",
      image: "/testimonials/david-kumar.jpg",
      project: "Predictive Maintenance System",
      metrics: "92% accuracy, 45% reduction in downtime",
      content: "Ehtisham's work on our predictive maintenance system revolutionized our manufacturing operations. He implemented a multi-modal deep learning system that combines sensor data with maintenance logs, achieving 92% accuracy in predicting equipment failures. His solution reduced unplanned downtime by 45% and saved us over $500K annually in maintenance costs. The system's real-time monitoring capabilities have been crucial for our 24/7 operations."
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Client Success Stories
        </motion.h2>

        <div className="relative">
          <motion.div
            className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Testimonial Image */}
            <div className="lg:w-1/3 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                  <Image
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    width={256}
                    height={256}
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      // Fallback for missing images
                      const target = e.target as HTMLImageElement;
                      target.src = "https://via.placeholder.com/256x256?text=Profile";
                    }}
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-indigo-600 text-white p-4 rounded-full shadow-lg">
                  <Quote className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="lg:w-2/3">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium">
                    {testimonials[activeIndex].project}
                  </span>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  {testimonials[activeIndex].content}
                </p>
                {testimonials[activeIndex].metrics && (
                  <div className="mt-4 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                    <p className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
                      Key Metrics: {testimonials[activeIndex].metrics}
                    </p>
                  </div>
                )}
                <div className="flex items-center mt-6">
                  <div>
                    <h4 className="font-bold text-xl dark:text-white">{testimonials[activeIndex].name}</h4>
                    <p className="text-indigo-600 dark:text-indigo-400">
                      {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex justify-end mt-6 gap-3">
                <button
                  onClick={prevTestimonial}
                  className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors duration-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-10 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-indigo-600 w-6"
                    : "bg-gray-300 dark:bg-gray-700"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 -mt-32 -ml-32 bg-indigo-300 dark:bg-indigo-700 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 bg-purple-300 dark:bg-purple-700 rounded-full opacity-20 blur-3xl"></div>
    </section>
  )
} 