import React from 'react';
import { Quote } from 'lucide-react';

interface QuoteSectionProps {
  quote: string;
  author: string;
}

const QuoteSection: React.FC<QuoteSectionProps> = ({ quote, author }) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-teal-600 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <Quote className="w-12 h-12 text-blue-200 mx-auto mb-6" />
        <blockquote className="text-2xl md:text-3xl font-medium text-white mb-6 leading-relaxed">
          {quote}
        </blockquote>
        <cite className="text-blue-200 text-lg font-medium">— {author}</cite>
      </div>
    </div>
  );
};

export default QuoteSection;