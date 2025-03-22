"use client"

import { GoogleGenerativeAI } from "@google/generative-ai"
import { pdfContent } from "../utils/pdfContent"

// Initialize the Gemini API with your API key
// In production, this should be stored in environment variables
const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY || ""
const genAI = new GoogleGenerativeAI(API_KEY)

/**
 * Process a user query using the Gemini API and PDF content
 * @param input The user's question
 * @returns A string response from the Gemini model
 */
export async function processQuery(input: string): Promise<string> {
  try {
    // Use the pre-extracted PDF content
    if (!API_KEY) {
      throw new Error("API key not configured")
    }

    // Create a context-aware prompt
    const prompt = `
      You are an AI assistant for Ehtisham Sadiq, a Senior AI/ML Engineer.
      Use this information about Ehtisham:
      ${pdfContent}
      
      Please answer the following question about Ehtisham in a clear, concise manner and readable format:
      ${input}
      
      If you can't find specific information in the provided content, use the general context about Ehtisham's role and expertise.
    `

    // Get the generative model - using gemini-1.0-pro instead of gemini-pro
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" })
    
    try {
      const result = await model.generateContent(prompt)
      return result.response.text()
    } catch (modelError) {
      console.error("Model error:", modelError)
      return "I apologize, but I'm having trouble generating a response right now. Please try again later."
    }
  } catch (error) {
    console.error("Error in processQuery:", error)
    if (!API_KEY) {
      return "Chat functionality is currently unavailable. Please make sure the API key is configured."
    }
    return "Sorry, I encountered an error. Please try again later."
  }
} 