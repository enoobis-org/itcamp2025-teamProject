import React, { useEffect, useState } from 'react';

const Images = () => {
  const [images, setImages] = useState([]);
  const ACCESS_KEY = 'fF7Kw8qp6_jp6ADVrIRuNaV_0H7hT7FzybZfLroc7N8';

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=Kyrgyzstan&per_page=4`,
          {
            headers: {
              Authorization: `Client-ID ${ACCESS_KEY}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const data = await response.json();
        setImages(data.results);
      } catch (error) {
        console.error('Ошибка при загрузке изображений:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginTop: '40px' }}>
      {images.length > 0 ? (
        images.map((image) => (
          <div key={image.id} style={{ width: '300px', height: '300px', overflow: 'hidden', borderRadius: '10px' }}>
            <img
              src={image.urls.small}
              alt={image.alt_description}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        ))
      ) : (
        <p>Загрузка изображений...</p>
      )}
    </div>
  );
};

export default Images;
