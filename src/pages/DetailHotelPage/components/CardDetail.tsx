import { ChevronRight } from "lucide-react";
import React from "react";

interface CardProps {
  title: string;
  linkText?: string;
  children: React.ReactNode;
}

export default function CardDetail({ title, linkText, children }: CardProps) {
  return (
    <div className="relative z-40 bg-white shadow-md border border-gray-100 rounded-xl p-4 flex-1">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold">{title}</h2>
        {linkText && (
          <a href="#" className="flex items-center gap-2 text-blue-700 text-sm">
            {linkText} <ChevronRight size={16} />
          </a>
        )}
      </div>
      {children}
    </div>
  );
}
