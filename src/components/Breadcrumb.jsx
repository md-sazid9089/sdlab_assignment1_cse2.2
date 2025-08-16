import React from 'react';
import { ChevronRight } from 'lucide-react';

const Breadcrumb = ({ section, subsection }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
      <span className="hover:text-blue-600 cursor-pointer transition-colors duration-200">
        {section}
      </span>
      <ChevronRight className="w-4 h-4" />
      <span className="hover:text-blue-600 cursor-pointer transition-colors duration-200">
        {subsection}
      </span>
    </nav>
  );
};

export default Breadcrumb;