import React from 'react';
import ArticleList from './ArticleList';
import ExampleFeeds from './ExampleFeeds';

function MainContent({ feeds, articles, loading, onAddFeed }) {
  return (
    <main className="main-content">
      {feeds.length === 0 ? (
        <div className="welcome-screen">
          <h1>Welcome to RSS Reader</h1>
          <p>Start by adding your favorite RSS feeds</p>
          <ExampleFeeds onFeedClick={onAddFeed} />
        </div>
      ) : (
        <ArticleList articles={articles} loading={loading} />
      )}
    </main>
  );
}

export default MainContent;
