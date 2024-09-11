import { useState, useEffect } from 'react'

const toastColors = {
  green: 'bg-green-500',
  red: 'bg-red-500',
}
// Toast Component
export function Toast({ message, show, onClose, color }) {
  useEffect(() => {
    if (show) {
      // Automatically hide toast after 3 seconds
      const timer = setTimeout(onClose, 3000)
      return () => clearTimeout(timer)
    }
  }, [show, onClose])

  if (!show) return null

  return (
    <div
      className={`h-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 ${toastColors[color]} text-white p-3 rounded-md shadow-lg`}
    >
      <div className="h-full w-full text-center">
        <h2 className="text-2xl">{message}</h2>
      </div>
    </div>
  )
}
