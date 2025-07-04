// import React, { useState } from 'react';
// import '../App.css';

// const JsonUpload = () => {
//   const [file, setFile] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleGenerate = async () => {
//     if (!file) return alert('Please upload a JSON file.');

//     const formData = new FormData();
//     formData.append('file', file); // 👈 Append the file under 'file' field

//     try {
//       setLoading(true);
//       const response = await fetch('http://localhost:3001/generate-video-json', {
//         method: 'POST',
//         body: formData,
//       });

//       if (!response.ok) throw new Error('Failed to generate video.');

//       const blob = await response.blob();
//       const url = window.URL.createObjectURL(blob);

//       // Trigger file download
//       const a = document.createElement('a');
//       a.href = url;
//       a.download = 'story-download.zip';
//       a.click();
//       window.URL.revokeObjectURL(url);
//     } catch (error) {
//       console.error(error);
//       alert('Something went wrong. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container">
//       <h1 className="title">📂 Upload JSON</h1>
//       <input
//         type="file"
//         accept=".json"
//         onChange={(e) => setFile(e.target.files[0])}
//       />
//       <button onClick={handleGenerate} disabled={loading}>
//         {loading ? 'Generating...' : 'Generate'}
//       </button>
//     </div>
//   );
// };

// export default JsonUpload;




import React, { useState } from 'react';
import '../App.css';

const JsonUpload = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!file) return alert('Please upload a JSON file.');

    const formData = new FormData();
    formData.append('file', file);

    try {
      setLoading(true);
      const response = await fetch('http://localhost:3001/generate-video-json', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Failed to generate video.');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = 'story-download.zip';
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1 className="title">📂 Upload JSON File</h1>
      <input
        type="file"
        accept=".json"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button onClick={handleGenerate} disabled={loading}>
        {loading ? 'Generating...' : 'Generate'}
      </button>
    </div>
  );
};

export default JsonUpload;
