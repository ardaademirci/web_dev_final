// src/components/NewsThumbnails.js
import React from 'react';

const NewsThumbnails = () => {
  // Mock data for demonstration
  const newsData = [
    { id: 1, title: 'News Title 1', description: 'Short description of news 1' },
    { id: 2, title: 'News Title 2', description: 'Short description of news 2' },
    // Add more news items as needed
  ];

  return (
    <div>
      {newsData.map(news => (
        <div key={news.id}>
          <h2>{news.title}</h2>
          <p>{news.description}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsThumbnails;
