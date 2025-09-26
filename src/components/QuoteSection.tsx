import React from 'react';
import { Quote } from 'lucide-react';

interface QuoteSectionProps {
  quote: string;
  author: string;
}

const QuoteSection: React.FC<QuoteSectionProps> = ({ quote, author }) => {
  return (
    <div className="  ">
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center py-16 px-4  justify-center bg-gradient-to-r from-orange-600/60 to-orange-900/60">
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