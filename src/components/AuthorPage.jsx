import React from 'react';
import { ArrowLeft, Calendar } from 'lucide-react';

const AuthorPage = ({ author, onBack }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-8 transition-colors duration-200"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Article</span>
      </button>

      {/* Author Profile */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          {/* Author Image */}
          <div className="flex-shrink-0">
            <img
              src={author.image}
              alt={author.name}
              className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-white"
            />
          </div>

          {/* Author Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {author.name}
            </h1>
            
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4 text-gray-600">
              <Calendar className="w-5 h-5" />
              <span>Joined {author.joinDate}</span>
            </div>

            <p className="text-gray-700 leading-relaxed max-w-2xl">
              {author.bio}
            </p>
          </div>
        </div>

        {/* Additional Author Stats */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">24</div>
              <div className="text-gray-600">Articles Published</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-600">1.2k</div>
              <div className="text-gray-600">Total Reactions</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">380</div>
              <div className="text-gray-600">Comments Received</div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Get in touch with {author.name}
          </h3>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
              Follow
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorPage;