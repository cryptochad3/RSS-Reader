const FEEDS_KEY = 'rss_feeds'

export const loadFeeds = () => {
  const saved = localStorage.getItem(FEEDS_KEY)
  return saved ? JSON.parse(saved) : []
}

export const saveFeeds = (feeds) => {
  localStorage.setItem(FEEDS_KEY, JSON.stringify(feeds))
}
