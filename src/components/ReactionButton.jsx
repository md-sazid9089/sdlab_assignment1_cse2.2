import React from 'react';
import { ThumbsUp, Heart, Frown, Angry } from 'lucide-react';

const ReactionButton = ({
  type,
  count,
  isSelected,
  onClick
}) => {
  const getIcon = () => {
    switch (type) {
      case 'like':
        return <ThumbsUp className="w-5 h-5" />;
      case 'love':
        return <Heart className="w-5 h-5" />;
      case 'angry':
        return <Angry className="w-5 h-5" />;
      case 'sad':
        return <Frown className="w-5 h-5" />;
      default:
        return <ThumbsUp className="w-5 h-5" />;
    }
  };

  const getStyles = () => {
    const baseStyles = "flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-200 hover:scale-105";
    
    if (isSelected) {
      switch (type) {
        case 'like':
          return `${baseStyles} bg-blue-100 border-blue-300 text-blue-700`;
        case 'love':
          return `${baseStyles} bg-red-100 border-red-300 text-red-700`;
        case 'angry':
          return `${baseStyles} bg-orange-100 border-orange-300 text-orange-700`;
        case 'sad':
          return `${baseStyles} bg-gray-100 border-gray-300 text-gray-700`;
        default:
          return `${baseStyles} bg-blue-100 border-blue-300 text-blue-700`;
      }
    }
    
    return `${baseStyles} bg-white border-gray-200 text-gray-600 hover:bg-gray-50`;
  };

  return (
    <button onClick={onClick} className={getStyles()}>
      {getIcon()}
      <span className="font-medium">{count}</span>
    </button>
  );
};

export default ReactionButton;