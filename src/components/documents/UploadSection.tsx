'use client'

import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Loader } from '@/components/ui/Loader'
import { useDocuments } from '@/lib/hooks'

export default function UploadSection() {
  const { uploadDocument, isUploading } = useDocuments()

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      uploadDocument(acceptedFiles[0])
    }
  }, [uploadDocument])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    disabled: isUploading,
    multiple: false,
  })

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
        ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'}`}
    >
      <input {...getInputProps()} />
      
      <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      
      {isUploading ? (
        <div className="mt-4">
          <Loader />
          <p className="mt-2 text-sm text-gray-600">Uploading...</p>
        </div>
      ) : isDragActive ? (
        <p className="mt-4 text-blue-600">Drop the file here...</p>
      ) : (
        <>
          <p className="mt-4 text-gray-600">
            Drag and drop a file here, or click to select. Supported formats(.pdf, .txt, csv, .docx)
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Choose File
          </button>
        </>
      )}
    </div>
  )
}