import React from 'react';

function FeaturedContent() {
  const articles = [
    {
      title: 'Age of Wonders 4 Open Beta - Tiger 1.3 Update',
      author: 'FangirlCrazily',
      date: 'Yesterday at 14:00',
      image: 'link_to_image_1',
    },
    {
      title: 'Console Edition Development Diary #74',
      author: 'MrFreake_PDX',
      date: 'Friday at 16:30',
      image: 'link_to_image_2',
    },
    {
      title: 'DevBlog #67 | Foundry Fridays: Update 2 Timeline',
      author: 'Aldrahill',
      date: 'Friday at 16:02',
      image: 'link_to_image_3',
    },
  ];

  return (
    <section style={{ padding: '2rem', backgroundColor: '#161b22', color: 'white' }}>
      <h2>Featured Content</h2>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {articles.map((article, index) => (
          <div key={index} style={{ flex: 1, border: '1px solid white', borderRadius: '8px', overflow: 'hidden' }}>
            <img src={article.image} alt={article.title} style={{ width: '100%' }} />
            <div style={{ padding: '1rem' }}>
              <h3>{article.title}</h3>
              <p>{article.author} - {article.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedContent;
