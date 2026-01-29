import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`bg-white rounded-xl shadow-md p-8 flex flex-col transition-all duration-300 ${
        hover ? 'hover:shadow-xl hover:scale-105' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
