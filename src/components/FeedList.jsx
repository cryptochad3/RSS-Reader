import React from 'react'
import { FaTrash, FaSync } from 'react-icons/fa'

function FeedList({ feeds, onRemove, onRefresh }) {
  return (
    <div className="feed-list">
      <div className="feed-list-header">
        <h2>Feeds</h2>
        <button onClick={onRefresh} className="refresh-button">
          <FaSync />
        </button>
      </div>
      <ul>
        {feeds.map((feed) => (
          <li key={feed.url}>
            <span>{feed.title}</span>
            <button onClick={() => onRemove(feed.url)} className="remove-button">
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FeedList
