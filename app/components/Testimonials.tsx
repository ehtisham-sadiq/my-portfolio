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
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechInnovate",
      image: "/testimonials/person1.jpg",
      content: "Ehtisham's expertise in AI and machine learning transformed our data analytics capabilities. His solutions helped us reduce processing time by 40% while improving accuracy. A true professional who delivers exceptional results."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager",
      company: "DataVision Inc.",
      image: "/testimonials/person2.jpg",
      content: "Working with Ehtisham was a game-changer for our product development. His deep understanding of ML models and ability to translate complex requirements into practical solutions accelerated our time-to-market significantly."
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "Director of AI",
      company: "FutureTech Solutions",
      image: "/testimonials/person3.jpg",
      content: "Ehtisham's work on our NLP project exceeded all expectations. His attention to detail and innovative approach to solving complex problems resulted in a system with 95% accuracy. I highly recommend his services."
    },
    {
      id: 4,
      name: "James Wilson",
      role: "CEO",
      company: "SmartSystems",
      image: "/testimonials/person4.jpg",
      content: "Ehtisham helped us implement an end-to-end ML pipeline that revolutionized our business operations. His technical expertise combined with business acumen makes him an invaluable partner for any AI project."
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
          What People Say
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
                <p className="text-lg text-gray-700 dark:text-gray-300 italic mb-6">
                  "{testimonials[activeIndex].content}"
                </p>
                <div className="flex items-center">
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