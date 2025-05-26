// components/ui/GridBox.tsx
import React from 'react';

interface GridBoxProps {
  children: React.ReactNode;
  className?: string; // For additional custom classes if needed
}

export default function GridBox({ children, className }: GridBoxProps) {
  return (
    <div className={`
        p-4 bg-gray-100 rounded-lg shadow-md
        hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600
        transition duration-300 ease-in-out transform hover:scale-105
        text-gray-800 dark:text-gray-200
        ${className || ''}
    `}>
      {children}
    </div>
  );
}