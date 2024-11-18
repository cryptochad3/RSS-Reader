import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { fetchFeed } from './utils/rss';

function App() {
  const [feeds, setFeeds] = useState([]);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const refreshFeeds = async (feedsList) => {
    setLoading(true);
    const allArticles = [];
    
    for (const feed of feedsList) {
      try {
        const feedData = await fetchFeed(feed.url);
        allArticles.push(...feedData.items.map(item => ({
          ...item,
          feedTitle: feed.title
        })));
      } catch (error) {
        console.error(`Error fetching feed ${feed.url}:`, error);
      }
    }

    setArticles(allArticles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate)));
    setLoading(false);
  };

  const addFeed = async (url, title) => {
    if (feeds.some(feed => feed.url === url)) {
      alert('This feed is already added!');
      return;
    }

    const newFeeds = [...feeds, { url, title }];
    setFeeds(newFeeds);
    await refreshFeeds(newFeeds);
  };

  const removeFeed = (url) => {
    const newFeeds = feeds.filter(feed => feed.url !== url);
    setFeeds(newFeeds);
    refreshFeeds(newFeeds);
  };

  const resetAll = () => {
    if (window.confirm('Are you sure you want to reset? This will remove all feeds.')) {
      setFeeds([]);
      setArticles([]);
    }
  };

  return (
    <div className="app">
      <Sidebar 
        feeds={feeds}
        onAddFeed={addFeed}
        onRemoveFeed={removeFeed}
        onReset={resetAll}
        onRefresh={() => refreshFeeds(feeds)}
      />
      <MainContent 
        feeds={feeds}
        articles={articles}
        loading={loading}
        onAddFeed={addFeed}
      />
    </div>
  );
}

export default App;
