"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  projectType: z.array(z.string()).min(1, { message: "Please select at least one project type." }),
  projectStage: z.string().min(1, { message: "Please select a project stage." }),
  projectScope: z.string().min(1, { message: "Please select a project scope." }),
  timeline: z.string().min(1, { message: "Please select a timeline." }),
  dataTypes: z.array(z.string()).min(1, { message: "Please select at least one data type." }),
  preferredTools: z.array(z.string()).optional(),
  primaryGoal: z.string().min(1, { message: "Please select a primary goal." }),
  industry: z.string().min(1, { message: "Please select an industry." }),
  customIndustry: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectType: [],
      dataTypes: [],
      preferredTools: [],
    }
  })

  const selectedIndustry = watch("industry")

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    // Here you would typically send the form data to your backend or a service like Formspree
    console.log(data)
    await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call
    reset()
    alert("Message sent successfully!")
  }

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 dark:text-white">Tell Me About Your Project</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Contact Information */}
                <div className="space-y-6">
                  <h4 className="text-lg font-medium text-indigo-600 dark:text-indigo-400">Contact Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="John Doe"
                        {...register("name")}
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="john@example.com"
                        {...register("email")}
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>}
                    </div>
                  </div>
                </div>

                {/* General Project Details */}
                <div className="space-y-6">
                  <h4 className="text-lg font-medium text-indigo-600 dark:text-indigo-400">General Project Details</h4>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      What type of project are you envisioning? (Select all that apply)
                    </label>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="projectType-software"
                          value="Custom software development"
                          className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                          {...register("projectType")}
                        />
                        <label htmlFor="projectType-software" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                          Custom software development (e.g., desktop, web, Android)
                        </label>
                      </div>
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="projectType-business"
                          value="Business application"
                          className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                          {...register("projectType")}
                        />
                        <label htmlFor="projectType-business" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                          Business application (e.g., workflow automation)
                        </label>
                      </div>
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="projectType-aiml"
                          value="AI/ML model development"
                          className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                          {...register("projectType")}
                        />
                        <label htmlFor="projectType-aiml" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                          AI/ML model development (e.g., predictive analytics)
                        </label>
                      </div>
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="projectType-data"
                          value="Data infrastructure setup"
                          className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                          {...register("projectType")}
                        />
                        <label htmlFor="projectType-data" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                          Data infrastructure setup (e.g., pipelines, databases)
                        </label>
                      </div>
                    </div>
                    {errors.projectType && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.projectType.message}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      What stage is your project in?
                    </label>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="stage-scratch"
                          value="Starting from scratch"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                          {...register("projectStage")}
                        />
                        <label htmlFor="stage-scratch" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                          Starting from scratch
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="stage-iterating"
                          value="Iterating on an existing solution"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                          {...register("projectStage")}
                        />
                        <label htmlFor="stage-iterating" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                          Iterating on an existing solution
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="stage-scaling"
                          value="Scaling/optimizing a deployed system"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                          {...register("projectStage")}
                        />
                        <label htmlFor="stage-scaling" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                          Scaling/optimizing a deployed system
                        </label>
                      </div>
                    </div>
                    {errors.projectStage && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.projectStage.message}</p>}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        What is the scope of this project?
                      </label>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="scope-onetime"
                            value="One-time deliverable"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                            {...register("projectScope")}
                          />
                          <label htmlFor="scope-onetime" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                            One-time deliverable (e.g., prototype)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="scope-ongoing"
                            value="Ongoing collaboration"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                            {...register("projectScope")}
                          />
                          <label htmlFor="scope-ongoing" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                            Ongoing collaboration (e.g., iterative development)
                          </label>
                        </div>
                      </div>
                      {errors.projectScope && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.projectScope.message}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        When do you need this completed?
                      </label>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="timeline-urgent"
                            value="Urgent (1–2 weeks)"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                            {...register("timeline")}
                          />
                          <label htmlFor="timeline-urgent" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                            Urgent (1–2 weeks)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="timeline-short"
                            value="Short-term (1–3 months)"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                            {...register("timeline")}
                          />
                          <label htmlFor="timeline-short" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                            Short-term (1–3 months)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="timeline-long"
                            value="Long-term (3+ months)"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                            {...register("timeline")}
                          />
                          <label htmlFor="timeline-long" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                            Long-term (3+ months)
                          </label>
                        </div>
                      </div>
                      {errors.timeline && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.timeline.message}</p>}
                    </div>
                  </div>
                </div>
                
                {/* Technical Requirements */}
                <div className="space-y-6">
                  <h4 className="text-lg font-medium text-indigo-600 dark:text-indigo-400">Technical Requirements</h4>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      What kind of data will be used? (Select all that apply)
                    </label>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="data-text"
                          value="Text"
                          className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                          {...register("dataTypes")}
                        />
                        <label htmlFor="data-text" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                          Text (e.g., documents, emails)
                        </label>
                      </div>
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="data-images"
                          value="Images/videos"
                          className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                          {...register("dataTypes")}
                        />
                        <label htmlFor="data-images" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                          Images/videos
                        </label>
                      </div>
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="data-numerical"
                          value="Numerical/tabular data"
                          className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                          {...register("dataTypes")}
                        />
                        <label htmlFor="data-numerical" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                          Numerical/tabular data
                        </label>
                      </div>
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="data-sensor"
                          value="Sensor/IoT data"
                          className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                          {...register("dataTypes")}
                        />
                        <label htmlFor="data-sensor" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                          Sensor/IoT data
                        </label>
                      </div>
                    </div>
                    {errors.dataTypes && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.dataTypes.message}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Do you have a preferred tool or framework? (Optional)
                    </label>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="tools-cloud"
                          value="Cloud platforms"
                          className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                          {...register("preferredTools")}
                        />
                        <label htmlFor="tools-cloud" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                          Cloud platforms (e.g., AWS, Azure)
                        </label>
                      </div>
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="tools-opensource"
                          value="Open-source libraries"
                          className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                          {...register("preferredTools")}
                        />
                        <label htmlFor="tools-opensource" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                          Open-source libraries (e.g., Python, Scikit-learn)
                        </label>
                      </div>
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="tools-none"
                          value="No preference"
                          className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                          {...register("preferredTools")}
                        />
                        <label htmlFor="tools-none" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                          No preference
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Business Context */}
                <div className="space-y-6">
                  <h4 className="text-lg font-medium text-indigo-600 dark:text-indigo-400">Business Context</h4>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      What is your primary goal?
                    </label>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="goal-automate"
                          value="Automate processes"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                          {...register("primaryGoal")}
                        />
                        <label htmlFor="goal-automate" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                          Automate processes (e.g., fraud detection)
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="goal-predict"
                          value="Predict outcomes"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                          {...register("primaryGoal")}
                        />
                        <label htmlFor="goal-predict" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                          Predict outcomes (e.g., sales forecasts)
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="goal-improve"
                          value="Improve decision-making"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                          {...register("primaryGoal")}
                        />
                        <label htmlFor="goal-improve" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                          Improve decision-making (e.g., customer insights)
                        </label>
                      </div>
                    </div>
                    {errors.primaryGoal && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.primaryGoal.message}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Which industry best fits your project?
                    </label>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="industry-healthcare"
                          value="Healthcare"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                          {...register("industry")}
                        />
                        <label htmlFor="industry-healthcare" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                          Healthcare
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="industry-finance"
                          value="Finance/Insurance"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                          {...register("industry")}
                        />
                        <label htmlFor="industry-finance" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                          Finance/Insurance
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="industry-retail"
                          value="Retail/E-commerce"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                          {...register("industry")}
                        />
                        <label htmlFor="industry-retail" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                          Retail/E-commerce
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="industry-manufacturing"
                          value="Manufacturing"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                          {...register("industry")}
                        />
                        <label htmlFor="industry-manufacturing" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                          Manufacturing
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="industry-technology"
                          value="Technology"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                          {...register("industry")}
                        />
                        <label htmlFor="industry-technology" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                          Technology
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="industry-other"
                          value="Other"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                          {...register("industry")}
                        />
                        <label htmlFor="industry-other" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                          Other
                        </label>
                      </div>
                    </div>
                    {errors.industry && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.industry.message}</p>}
                  </div>
                  
                  {selectedIndustry === "Other" && (
                    <div>
                      <label htmlFor="customIndustry" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Please specify your industry
                      </label>
                      <input
                        id="customIndustry"
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Your industry"
                        {...register("customIndustry")}
                      />
                    </div>
                  )}
                </div>
                
                {/* Additional Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Please share any additional information about your project..."
                    {...register("message")}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300 disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "Submit Project Inquiry"}
                </button>
              </form>
            </div>
          </motion.div>
          <motion.div
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 dark:text-white">Contact Information</h3>
              <div className="space-y-6">
                <a
                  href="mailto:contact@example.com"
                  className="flex items-center p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors duration-300"
                >
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-800 rounded-full mr-4">
                    <Mail className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-medium dark:text-white">Email</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">contact@example.com</p>
                  </div>
                </a>
                <a
                  href="tel:+1234567890"
                  className="flex items-center p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors duration-300"
                >
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-800 rounded-full mr-4">
                    <Phone className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-medium dark:text-white">Phone</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">+1 (234) 567-890</p>
                  </div>
                </a>
                <div className="flex items-center p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg">
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-800 rounded-full mr-4">
                    <MapPin className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-medium dark:text-white">Location</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">New York, NY</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium mb-4 dark:text-white">Why Work With Me</h4>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Expertise in cutting-edge AI/ML technologies</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Proven track record of successful deployments</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>End-to-end solution development</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Clear communication and project management</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-64 h-64 -mt-32 -ml-32 bg-indigo-300 dark:bg-indigo-700 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 bg-purple-300 dark:bg-purple-700 rounded-full opacity-20 blur-3xl"></div>
    </section>
  )
}