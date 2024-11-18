const ACCESS_KEY = 'WKT3ri9JvpjnJrQtF2uy-Y2N6RSzsZsDDrx6S2ojpqQ';

export const getImageForArticle = async (query) => {
  try {
    const cleanQuery = query
      .replace(/[^\w\s]/g, '')
      .split(' ')
      .slice(0, 3)
      .join(' ');

    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=${encodeURIComponent(cleanQuery)}&orientation=landscape`,
      {
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`
        }
      }
    );
    
    if (!response.ok) return null;
    
    const data = await response.json();
    return {
      url: data.urls.regular,
      credit: {
        name: data.user.name,
        link: data.user.links.html
      }
    };
  } catch (error) {
    console.error('Error fetching image:', error);
    return null;
  }
};
