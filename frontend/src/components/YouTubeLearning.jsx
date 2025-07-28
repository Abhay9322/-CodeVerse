import React, { useState, useEffect } from 'react';
import axios from 'axios';

const YouTubeLearning = () => {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const API_KEY = 'AIzaSyD6NwpraXG-ab1AbSttAHu0HcwocyHFfuE'; // 🔒 Suggest moving this to .env

  useEffect(() => {
    if (!isSearching) fetchRandomVideos();
  }, [isSearching]);

  const fetchRandomVideos = async () => {
    try {
      const { data } = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          channelId: 'UCeVMnSShP_Iviwkknt83cww',
          part: 'snippet',
          maxResults: 5,
          type: 'video',
          order: 'date',
          key: API_KEY,
        },
      });
      setVideos(data.items);
    } catch (error) {
      console.error('Error Fetching Random Videos:', error);
    }
  };

  const fetchVideosBySearch = async (term) => {
    try {
      const { data } = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          q: term,
          channelId: 'UC8butISFwT-Wl7EV0hUK0BQ',
          part: 'snippet',
          maxResults: 10,
          type: 'video',
          key: API_KEY,
        },
      });
      setVideos(data.items);
    } catch (error) {
      console.error('Error Fetching Videos:', error);
    }
  };

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term.trim()) {
      setIsSearching(true);
      fetchVideosBySearch(term);
    } else {
      setIsSearching(false);
    }
  };

  const handleVideoSelect = (videoId) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      fontFamily: 'Poppins',
      backgroundColor: '#f8f8f8',
      padding: '20px'
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>
        Learn with <span style={{ color: '#FF6347' }}>YouTube</span>
      </h1>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search For Videos..."
          value={searchTerm}
          onChange={handleSearchChange}
          style={{
            width: '300px',
            padding: '10px',
            fontSize: '16px',
            border: '2px solid #000',
            borderRadius: '5px'
          }}
        />
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {videos.length === 0 ? (
          <p>No videos found.</p>
        ) : (
          videos.map((video) => (
            <div
              key={video.id.videoId}
              onClick={() => handleVideoSelect(video.id.videoId)}
              style={{
                width: 'calc(50% - 10px)',
                cursor: 'pointer',
                backgroundColor: '#fff',
                borderRadius: '15px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                style={{ width: '100%', height: 'auto' }}
              />
              <div style={{ padding: '10px' }}>
                <h3 style={{ margin: '0 0 5px', fontSize: '18px' }}>{video.snippet.title}</h3>
                <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>
                  {video.snippet.description.length > 100
                    ? video.snippet.description.slice(0, 100) + '...'
                    : video.snippet.description}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default YouTubeLearning;
