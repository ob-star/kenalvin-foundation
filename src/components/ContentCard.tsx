import React from 'react';

interface ContentCardProps {
  title: string;
  content: string;
  className?: string;
}

const ContentCard: React.FC<ContentCardProps> = ({ title, content, className = '' }) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 ${className}`}>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-700 leading-relaxed text-lg">{content}</p>
    </div>
  );
};

export default ContentCard;