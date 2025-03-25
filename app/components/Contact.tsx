"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import AnimatedSectionHeader from "./AnimatedSectionHeader"
import emailjs from '@emailjs/browser'

// Define validation schema
const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(10, "Please provide some details about your project")
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setIsError(false);
    
    try {
      // Configure with your EmailJS service, template and user IDs
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        from_phone: data.phone,
        project_type: data.projectType,
        message: data.message,
        to_email: "ehtisham.selfwork@gmail.com", // Your email here
        reply_to: data.email,
      };
      
      // Send email to you (the developer)
      await emailjs.send(
        "service_xxxxxxx",  // Your actual EmailJS service ID from the dashboard
        "template_yyyyyyy", // Your "Portfolio Project Inquiry" template ID
        templateParams,
        "public_key_zzzzzzzzzzzzz" // Your public key from Account > API Keys
      );
      
      // Send confirmation email to client
      await emailjs.send(
        "service_xxxxxxx",  // Same service ID
        "template_wwwwwww", // Your "Portfolio Client Confirmation" template ID
        {
          to_name: data.name,
          to_email: data.email,
          project_type: data.projectType,
          message: "Thank you for your inquiry! I've received your project details and will get back to you within 24-48 hours."
        },
        "public_key_zzzzzzzzzzzzz" // Same public key
      );
      
      setIsSuccess(true);
      reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
      
    } catch (error) {
      console.error("Error sending email:", error);
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-900/30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Get In Touch" />
        
        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          {/* Contact Form */}
          <motion.div
            className="lg:w-2/3 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6 dark:text-white">Tell Me About Your Project</h3>
            
            {/* Success Message */}
            {isSuccess && (
              <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-lg flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                <p>Thank you! Your project inquiry has been successfully submitted. I'll get back to you soon!</p>
              </div>
            )}
            
            {/* Error Message */}
            {isError && (
              <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-lg flex items-start">
                <AlertCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                <p>There was an error submitting your inquiry. Please try again or contact me directly via email.</p>
              </div>
            )}
            
            <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name *
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
                    Your Email *
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
              
              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Phone Number *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Phone className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="+1 (555) 123-4567"
                    {...register("phone")}
                  />
                </div>
                {errors.phone && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.phone.message}</p>}
              </div>
              
              {/* Project Type */}
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Project Type *
                </label>
                <select
                  id="projectType"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  {...register("projectType")}
                >
                  <option value="">Select a project type</option>
                  <option value="AI/ML Development">AI/ML Development</option>
                  <option value="Data Engineering & ETL">Data Engineering & ETL</option>
                  <option value="Web/Mobile Application">Web/Mobile Application</option>
                  <option value="MLOps & Cloud Infrastructure">MLOps & Cloud Infrastructure</option>
                  <option value="Consulting">Consulting</option>
                  <option value="Other">Other</option>
                </select>
                {errors.projectType && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.projectType.message}</p>}
              </div>
              
              {/* Project Details */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Please briefly describe your project, goals, and any specific requirements..."
                  {...register("message")}
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message.message}</p>}
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 disabled:opacity-70 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Submit Project Inquiry
                  </>
                )}
              </button>
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-8 text-white shadow-lg h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="mb-8 text-indigo-100">
                  Feel free to reach out! I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 mr-3 text-indigo-300 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg">Location</h4>
                      <p className="text-indigo-100">Lahore, Pakistan</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 mr-3 text-indigo-300 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg">Email</h4>
                      <a href="mailto:your@email.com" className="text-indigo-100 hover:text-white transition-colors">your@email.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 mr-3 text-indigo-300 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg">Phone</h4>
                      <a href="tel:+12345678901" className="text-indigo-100 hover:text-white transition-colors">+1 (234) 567-8901</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-16">
                <h4 className="font-semibold mb-2">Response Time</h4>
                <p className="text-sm text-indigo-100">I typically respond to inquiries within 24-48 hours.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}