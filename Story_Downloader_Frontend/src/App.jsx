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
