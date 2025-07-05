import { useState } from 'react';
import axios from 'axios';
import '../App.css';

const UrlDownload = () => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleDownload = async () => {
    setError('');
    if (!url) return setError('Please enter a URL.');
    if (!isValidUrl(url)) return setError('Invalid URL format.');

    try {
      setIsLoading(true);
      const response = await axios.post(
        '/generate-video-url',
        { url },
        { responseType: 'blob' }
      );

      const blob = new Blob([response.data], { type: 'application/zip' });
      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = 'story.zip';
      a.click();
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <h1 className="title">🌐 URL Downloader</h1>
      <input
        type="text"
        placeholder="Paste the story URL here..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className={`url-input ${error ? 'input-error' : ''}`}
      />
      {error && <p className="error-msg">{error}</p>}
      <button onClick={handleDownload} disabled={isLoading}>
        {isLoading ? <span className="spinner"></span> : 'Download'}
      </button>
    </div>
  );
};

export default UrlDownload;
