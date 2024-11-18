import React from 'react';
import { FaRss, FaSync, FaTrash } from 'react-icons/fa';
import AddFeed from './AddFeed';

function Sidebar({ feeds, onAddFeed, onRemoveFeed, onReset, onRefresh }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <FaRss className="logo" />
        <h1>RSS Reader</h1>
      </div>

      <AddFeed onAdd={onAddFeed} />

      <div className="sidebar-actions">
        <button 
          onClick={onRefresh}
          disabled={feeds.length === 0}
          className="action-button"
        >
          <FaSync /> Refresh
        </button>
        <button 
          onClick={onReset}
          disabled={feeds.length === 0}
          className="action-button danger"
        >
          <FaTrash /> Reset
        </button>
      </div>

      <div className="feeds-list">
        <h2>Your Feeds</h2>
        {feeds.map((feed) => (
          <div key={feed.url} className="feed-item">
            <span>{feed.title}</span>
            <button 
              onClick={() => onRemoveFeed(feed.url)}
              className="remove-button"
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
