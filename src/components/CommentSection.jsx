import React, { useState } from 'react';
import ReactionButton from './ReactionButton';
import { Send } from 'lucide-react';

const CommentSection = ({
  comments,
  onAuthorClick,
  newComment,
  onCommentChange,
  onCommentSubmit
}) => {
  const [commentReactions, setCommentReactions] = useState({});

  const handleCommentReaction = (commentId, reaction) => {
    setCommentReactions(prev => ({
      ...prev,
      [commentId]: prev[commentId] === reaction ? null : reaction
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">
        {comments.length} Comment{comments.length !== 1 ? 's' : ''}
      </h3>

      {/* Comment Input */}
      <div className="mb-8">
        <div className="flex space-x-4">
          <div className="flex-1">
            <textarea
              value={newComment}
              onChange={(e) => onCommentChange(e.target.value)}
              placeholder="Write your comment..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              rows={3}
            />
          </div>
          <button
            onClick={onCommentSubmit}
            disabled={!newComment.trim()}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 flex items-center space-x-2 h-fit"
          >
            <Send className="w-4 h-4" />
            <span>Post</span>
          </button>
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="border-b border-gray-100 pb-6 last:border-b-0">
            {/* Comment Header */}
            <div className="flex items-center space-x-3 mb-3">
              <img
                src={comment.author.image}
                alt={comment.author.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <button
                  onClick={() => onAuthorClick(comment.author.id)}
                  className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
                >
                  {comment.author.name}
                </button>
                <p className="text-gray-500 text-sm">{comment.date}</p>
              </div>
            </div>

            {/* Comment Content */}
            <p className="text-gray-700 mb-4 leading-relaxed ml-13">
              {comment.content}
            </p>

            {/* Comment Reactions */}
            <div className="flex items-center space-x-3 ml-13">
              <ReactionButton
                type="like"
                count={comment.reactions.like}
                isSelected={commentReactions[comment.id] === 'like'}
                onClick={() => handleCommentReaction(comment.id, 'like')}
              />
              <ReactionButton
                type="love"
                count={comment.reactions.love}
                isSelected={commentReactions[comment.id] === 'love'}
                onClick={() => handleCommentReaction(comment.id, 'love')}
              />
              <button className="text-gray-500 hover:text-blue-600 text-sm font-medium transition-colors duration-200">
                Reply
              </button>
              <button className="text-gray-500 hover:text-red-600 text-sm font-medium transition-colors duration-200">
                Report
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;