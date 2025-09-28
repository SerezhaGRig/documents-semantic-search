'use client'
import React from 'react'
import ReactMarkdown from 'react-markdown'

interface AnswerDisplayProps {
  content: string
}

export default function AnswerDisplay({ content }: AnswerDisplayProps) {
  return (
    <div className="bg-blue-50 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
        <svg
          className="h-5 w-5 mr-2 text-blue-600"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          />
        </svg>
        AI Generated Answer
      </h3>
      <div className="prose prose-blue max-w-none text-gray-700 leading-relaxed">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  )
}