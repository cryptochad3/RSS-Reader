import React from 'react';

const EXAMPLE_FEEDS = [
  {
    title: 'BBC News',
    url: 'http://feeds.bbci.co.uk/news/rss.xml',
    description: 'Latest news from BBC'
  },
  {
    title: 'TechCrunch',
    url: 'https://techcrunch.com/feed/',
    description: 'Technology news and analysis'
  },
  {
    title: 'NASA',
    url: 'https://www.nasa.gov/rss/dyn/breaking_news.rss',
    description: 'Space and astronomy updates'
  }
];

function ExampleFeeds({ onFeedClick }) {
  return (
    <div className="example-feeds">
      <h2>Try these example feeds:</h2>
      <div className="example-grid">
        {EXAMPLE_FEEDS.map((feed) => (
          <button
            key={feed.url}
            className="example-feed-card"
            onClick={() => onFeedClick(feed.url, feed.title)}
          >
            <h3>{feed.title}</h3>
            <p>{feed.description}</p>
            <span className="url">{feed.url}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default ExampleFeeds;
