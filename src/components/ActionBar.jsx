import React from 'react'
import { FaSync, FaTrash, FaFileExport } from 'react-icons/fa'

function ActionBar({ onReset, onExport, onRefresh, hasFeeds }) {
  return (
    <div className="action-bar">
      <button onClick={onRefresh} disabled={!hasFeeds} title="Refresh feeds">
        <FaSync /> Refresh
      </button>
      <button onClick={onExport} disabled={!hasFeeds} title="Export as HTML">
        <FaFileExport /> Export
      </button>
      <button 
        onClick={onReset} 
        className="reset-button" 
        disabled={!hasFeeds}
        title="Reset all feeds"
      >
        <FaTrash /> Reset
      </button>
    </div>
  )
}

export default ActionBar
