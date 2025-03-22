"use client"

import * as pdfjs from 'pdfjs-dist'

// Set the PDF.js worker source
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

/**
 * Extract text content from a PDF file
 * @param pdfPath Path to the PDF file
 * @returns A string containing the extracted text, or null if extraction failed
 */
export async function extractTextFromPDF(pdfPath: string): Promise<string | null> {
  try {
    // Load the PDF document
    const loadingTask = pdfjs.getDocument(pdfPath)
    const pdf = await loadingTask.promise
    
    let fullText = ""
    
    // Iterate through each page and extract text
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i)
      const textContent = await page.getTextContent()
      const pageText = textContent.items
        .map((item: any) => item.str)
        .join(" ")
      
      fullText += pageText + "\n\n"
    }
    
    return fullText
  } catch (error) {
    console.error("Error extracting text from PDF:", error)
    return null
  }
} 