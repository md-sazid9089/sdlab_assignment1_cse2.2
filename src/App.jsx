import React, { useState } from 'react';
import ArticlePage from './components/ArticlePage';
import AuthorPage from './components/AuthorPage';
import { articles, authors } from './data/dummyData';

function App() {
  const [currentView, setCurrentView] = useState('article');
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);

  const handleAuthorClick = (authorId) => {
    const author = authors.find(a => a.id === authorId);
    if (author) {
      setSelectedAuthor(author);
      setCurrentView('author');
    }
  };

  const handleBackToArticle = () => {
    setCurrentView('article');
    setSelectedAuthor(null);
  };

  const handlePageChange = (pageIndex) => {
    setCurrentArticleIndex(pageIndex);
  };

  const currentArticle = articles[currentArticleIndex];

  return (
    <div className="min-h-screen bg-gray-50">
      {currentView === 'article' ? (
        <ArticlePage
          article={currentArticle}
          onAuthorClick={handleAuthorClick}
          currentPage={currentArticleIndex}
          totalPages={articles.length}
          onPageChange={handlePageChange}
        />
      ) : (
        <AuthorPage
          author={selectedAuthor}
          onBack={handleBackToArticle}
        />
      )}
    </div>
  );
}

export default App;