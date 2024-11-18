import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

function AddFeed({ onAdd }) {
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url && title) {
      onAdd(url, title);
      setUrl('');
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-feed-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Feed Title"
        required
      />
      <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="RSS Feed URL"
        required
      />
      <button type="submit">
        <FaPlus /> Add Feed
      </button>
    </form>
  );
}

export default AddFeed;
