import React, { useState } from 'react';
import ReactionButton from './ReactionButton';
import CommentSection from './CommentSection';
import Pagination from './Pagination';
import Breadcrumb from './Breadcrumb';

const ArticlePage = ({
  article,
  onAuthorClick,
  currentPage,
  totalPages,
  onPageChange
}) => {
  const [selectedReaction, setSelectedReaction] = useState(null);
  const [newComment, setNewComment] = useState('');

  const handleReactionClick = (reaction) => {
    setSelectedReaction(selectedReaction === reaction ? null : reaction);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      // In a real app, this would submit to a backend
      console.log('Submitting comment:', newComment);
      setNewComment('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <Breadcrumb section={article.section} subsection={article.subsection} />
      
      {/* Article Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
          {article.title}
        </h1>
        
        {/* Featured Image */}
        <div className="mb-6">
          <img
            src={article.featuredImage}
            alt={article.title}
            className="w-full h-96 object-cover rounded-lg shadow-md"
          />
        </div>
        
        {/* Author Info */}
        <div className="flex items-center space-x-4 py-4 border-b border-gray-200">
          <img
            src={article.author.image}
            alt={article.author.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <button
              onClick={() => onAuthorClick(article.author.id)}
              className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
            >
              {article.author.name}
            </button>
            <p className="text-gray-500 text-sm">{article.date}</p>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="prose prose-lg max-w-none mb-8">
        {article.content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-6 text-gray-700 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </article>

      {/* Reactions */}
      <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
        <div className="flex items-center space-x-4">
          <ReactionButton
            type="like"
            count={article.reactions.like}
            isSelected={selectedReaction === 'like'}
            onClick={() => handleReactionClick('like')}
          />
          <ReactionButton
            type="love"
            count={article.reactions.love}
            isSelected={selectedReaction === 'love'}
            onClick={() => handleReactionClick('love')}
          />
          <ReactionButton
            type="angry"
            count={article.reactions.angry}
            isSelected={selectedReaction === 'angry'}
            onClick={() => handleReactionClick('angry')}
          />
          <ReactionButton
            type="sad"
            count={article.reactions.sad}
            isSelected={selectedReaction === 'sad'}
            onClick={() => handleReactionClick('sad')}
          />
        </div>
      </div>

      {/* Comments Section */}
      <CommentSection
        comments={article.comments}
        onAuthorClick={onAuthorClick}
        newComment={newComment}
        onCommentChange={setNewComment}
        onCommentSubmit={handleCommentSubmit}
      />

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default ArticlePage;