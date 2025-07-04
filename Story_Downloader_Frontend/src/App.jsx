// import { useState } from 'react';
// import axios from 'axios';
// import './App.css';

// function App() {
//   const [url, setUrl] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');

//   const isValidUrl = (string) => {
//     try {
//       new URL(string);
//       return true;
//     } catch (_) {
//       return false;
//     }
//   };

//   const handleDownload = async () => {
//     setError('');
//     console.log(url)
//     if (!url) {
//       setError('Please enter a URL.');
//       return;
//     }

//     if (!isValidUrl(url)) {
//       setError('Invalid URL format.');
//       return;
//     }

//     try {
//       setIsLoading(true);
//       const response = await axios.post(
//         '/generate-video',
//         { url: url },
//         { responseType: 'blob' }
//       );

//       const blob = new Blob([response.data], { type: 'application/zip' });
//       const downloadUrl = window.URL.createObjectURL(blob);
//       const a = document.createElement('a');
//       a.href = downloadUrl;
//       a.download = 'story.zip';
//       a.click();
//     } catch (err) {
//       setError('Something went wrong. Try again.');
//       console.error(err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="container">
//       <h1 className="title">📥 Story Downloader</h1>

//       <input
//         type="text"
//         placeholder="Paste the URL here..."
//         value={url}
//         onChange={(e) => setUrl(e.target.value)}
//         className={`url-input ${error ? 'input-error' : ''}`}
//       />

//       {error && <p className="error-msg">{error}</p>}

//       <button
//         className="download-btn"
//         onClick={handleDownload}
//         disabled={isLoading}
//       >
//         {isLoading ? <span className="spinner"></span> : 'Download'}
//       </button>
//     </div>
//   );
// }

// export default App;




import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import JsonUpload from './pages/JsonUpload';
import UrlDownload from './pages/UrlDownload';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/json" element={<JsonUpload />} />
        <Route path="/url" element={<UrlDownload />} />
      </Routes>
    </Router>
  );
};

export default App;
