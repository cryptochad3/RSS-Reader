export const generateHtml = (articles) => {
  const template = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>RSS Feed Export</title>
  <style>
    body { font-family: system-ui, -apple-system, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
    article { margin-bottom: 30px; border-bottom: 1px solid #eee; padding-bottom: 20px; }
    img { max-width: 100%; height: auto; border-radius: 8px; }
    .meta { color: #666; font-size: 0.9em; margin: 10px 0; }
    a { color: #2563eb; text-decoration: none; }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <h1>RSS Feed Export</h1>
  <p>Exported on: ${new Date().toLocaleString()}</p>
  ${articles.map(article => `
    <article>
      ${article.image ? `
        <img src="${article.image.url}" alt="${article.title}">
        <div class="meta">
          Photo by <a href="${article.image.credit.link}">${article.image.credit.name}</a> on Unsplash
        </div>
      ` : ''}
      <h2><a href="${article.link}">${article.title}</a></h2>
      <div class="meta">
        ${article.feedTitle} • ${new Date(article.pubDate).toLocaleDateString()}
      </div>
      <div>${article.description}</div>
    </article>
  `).join('')}
</body>
</html>
  `.trim();

  return template;
};

export const downloadHtml = (articles) => {
  const html = generateHtml(articles);
  const blob = new Blob([html], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `rss-export-${new Date().toISOString().split('T')[0]}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
