export const fetchFeed = async (url) => {
  try {
    const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}`);
    if (!response.ok) throw new Error('Failed to fetch feed');
    return await response.json();
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    throw error;
  }
};
