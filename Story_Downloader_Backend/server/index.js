// // backend/index.js
// import express from 'express';
// import cors from 'cors';
// import archiver from 'archiver';
// import fs from 'fs';
// import { fetchAmpHtml } from './scrapHtml.js';
// import { parseAmpStoryHtml } from './htmlToJson.js';
// import { renderFullProject } from './renderVideo.js';
// import path from "path"


// const app = express();
// const PORT = process.env.PORT || 3001;
// const path_f = path.join(process.cwd(), "..", "..", "Story_Downloader_Frontend", "dist")

// app.use(cors());
// app.use(express.json());
// app.use(express.static(path_f));


// const jsonPath = path.resolve('./storyJsonTest.json');

// // ✅ Read and parse the file
// const rawJson = fs.readFileSync(jsonPath, 'utf-8');
// const data = JSON.parse(rawJson);

// console.log("Data ---->", data);

// app.post('/generate-video', async (req, res) => {
//   const { url } = req.body;
//   console.log(url);

//   // if (!url) {
//   //   return res.status(400).json({ error: 'Missing URL' });
//   // }

//   try {
//     // 🔥 1. Fetch AMP HTML
//     // const html = await fetchAmpHtml(url);

//     // 🔍 2. Parse HTML to JSON
//     // const storyData = parseAmpStoryHtml(html);
//     // console.log(storyData);
//     // const { pages } = storyData;
//     const { pages } = data;

//     if (!pages || !Array.isArray(pages)) {
//       return res.status(400).json({ error: 'Failed to parse story data' });
//     }

//     // 🎬 3. Render video and images via Remotion
//     const outputs = await renderFullProject(pages);

//     // 📦 4. Zip and return
//     res.attachment('story-download.zip');
//     const archive = archiver('zip');
//     archive.pipe(res);

//     // outputs.forEach(file => {
//     //   archive.file(file.path, { name: file.path.split('/').pop() });
//     // });

//     // outputs.forEach(file => {
//     //   const filename = path.basename(file.path);
//     //   archive.file(file.path, { name: `story/${filename}` });
//     // });
//     outputs.forEach(file => {
//       const filename = path.basename(file.path);

//       if (file.path.includes(`${path.sep}images${path.sep}`)) {
//         archive.file(file.path, { name: `Story/images/${filename}` });
//       } else if (file.path.includes(`${path.sep}videos${path.sep}`)) {
//         archive.file(file.path, { name: `Story/videos/${filename}` });
//       } else {
//         archive.file(file.path, { name: `Story/${filename}` });
//       }
//     });

//     await archive.finalize();
//   } catch (err) {
//     console.error('❌ Backend error:', err.message);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// console.log(path_f)
// app.use("*", async (req, res) => {
//   return res.sendFile(path.join(path_f, "index.html"))
// })

// app.listen(PORT, () => {
//   console.log(`✅ Backend running on http://localhost:${PORT}`);
// });


// // backend/index.js
// import express from 'express';
// import cors from 'cors';
// import archiver from 'archiver';
// import fs from 'fs';
// import { fetchAmpHtml } from './scrapHtml.js';
// import { parseAmpStoryHtml } from './htmlToJson.js';
// import { renderFullProject } from './renderVideo.js';
// import path from "path"
// import getAudioDurationInSeconds from 'get-audio-duration';
// import fetch from 'node-fetch';



// const app = express();
// const PORT = process.env.PORT || 3001;
// const path_f = path.join(process.cwd(), "..", "..", "Story_Downloader_Frontend", "dist")

// app.use(cors());
// app.use(express.json());
// app.use(express.static(path_f));


// const jsonPath = path.resolve('./storyJsonTest.json');

// // ✅ Read and parse the file
// const rawJson = fs.readFileSync(jsonPath, 'utf-8');
// const data = JSON.parse(rawJson);

// console.log("Data ---->", data);


// async function getVoiceOverDurations(pages, defaultDuration = 5) {
//   const updatedPages = await Promise.all(
//     pages.map(async (page) => {
//       if (page.voiceOverAudio) {
//         try {
//           const response = await fetch(page.voiceOverAudio);
//           const buffer = await response.arrayBuffer();
//           const duration = await getAudioDurationInSeconds(Buffer.from(buffer));
//           return {
//             ...page,
//             voiceOverDuration: Math.ceil(duration), // in seconds
//           };
//         } catch (err) {
//           console.warn(`⚠️ Failed to get duration for ${page.voiceOverAudio}, using default`);
//         }
//       }
//       return {
//         ...page,
//         voiceOverDuration: defaultDuration,
//       };
//     })
//   );
//   return updatedPages;
// }


// app.post('/generate-video', async (req, res) => {
//   const { url } = req.body;
//   console.log(url);

//   // if (!url) {
//   //   return res.status(400).json({ error: 'Missing URL' });
//   // }

//   try {
//     // 🔥 1. Fetch AMP HTML
//     // const html = await fetchAmpHtml(url);

//     // 🔍 2. Parse HTML to JSON
//     // const storyData = parseAmpStoryHtml(html);
//     // console.log(storyData);
//     // const { pages } = storyData;
//     // const { pages } = data;
//     const rawPages = data.pages;
//     const pages = await getVoiceOverDurations(rawPages);

//     if (!pages || !Array.isArray(pages)) {
//       return res.status(400).json({ error: 'Failed to parse story data' });
//     }

//     // 🎬 3. Render video and images via Remotion
//     const outputs = await renderFullProject(pages);

//     // 📦 4. Zip and return
//     res.attachment('story-download.zip');
//     const archive = archiver('zip');
//     archive.pipe(res);

//     // outputs.forEach(file => {
//     //   archive.file(file.path, { name: file.path.split('/').pop() });
//     // });

//     // outputs.forEach(file => {
//     //   const filename = path.basename(file.path);
//     //   archive.file(file.path, { name: `story/${filename}` });
//     // });
//     outputs.forEach(file => {
//       const filename = path.basename(file.path);

//       if (file.path.includes(`${path.sep}images${path.sep}`)) {
//         archive.file(file.path, { name: `Story/images/${filename}` });
//       } else if (file.path.includes(`${path.sep}videos${path.sep}`)) {
//         archive.file(file.path, { name: `Story/videos/${filename}` });
//       } else {
//         archive.file(file.path, { name: `Story/${filename}` });
//       }
//     });

//     await archive.finalize();
//   } catch (err) {
//     console.error('❌ Backend error:', err.message);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// console.log(path_f)
// app.use("*", async (req, res) => {
//   return res.sendFile(path.join(path_f, "index.html"))
// })

// app.listen(PORT, () => {
//   console.log(`✅ Backend running on http://localhost:${PORT}`);
// });


// import express from 'express';
// import cors from 'cors';
// import archiver from 'archiver';
// import fs from 'fs';
// import path from 'path';
// import os from 'os';
// import { fetchAmpHtml } from './scrapHtml.js';
// import { parseAmpStoryHtml } from './htmlToJson.js';
// import { renderFullProject } from './renderVideo.js';
// import { getAudioDurationInSeconds } from 'get-audio-duration';
// import fetch from 'node-fetch';

// const app = express();
// const PORT = process.env.PORT || 3001;
// const path_f = path.join(process.cwd(), "..", "..", "Story_Downloader_Frontend", "dist");

// app.use(cors());
// app.use(express.json());
// app.use(express.static(path_f));

// const jsonPath = path.resolve('./storyJsonTest2.json');

// // ✅ Read and parse the static JSON file
// const rawJson = fs.readFileSync(jsonPath, 'utf-8');
// const data = JSON.parse(rawJson);

// // ✅ Helper: Download audio temporarily and get duration
// async function getDurationFromUrlTemporarily(url) {
//   try {
//     const res = await fetch(url);
//     if (!res.ok) throw new Error(`HTTP ${res.status}`);
//     const buffer = Buffer.from(await res.arrayBuffer());

//     const tempFilePath = path.join(os.tmpdir(), `audio_${Date.now()}.mp3`);
//     fs.writeFileSync(tempFilePath, buffer);

//     const duration = await getAudioDurationInSeconds(tempFilePath);
//     fs.unlinkSync(tempFilePath); // Clean up

//     return duration;
//   } catch (err) {
//     console.warn(`⚠️ Failed to get duration for ${url}: ${err.message}`);
//     return null;
//   }
// }

// // ✅ Adds voiceOverDuration to each page
// async function getVoiceOverDurations(pages, defaultDuration = 5) {
//   const updatedPages = await Promise.all(
//     pages.map(async (page) => {
//       if (page.voiceOverAudio) {
//         const duration = await getDurationFromUrlTemporarily(page.voiceOverAudio);
//         return {
//           ...page,
//           voiceOverDuration: duration ? Math.ceil(duration) : defaultDuration,
//         };
//       }
//       return {
//         ...page,
//         voiceOverDuration: defaultDuration,
//       };
//     })
//   );
//   return updatedPages;
// }

// // ✅ Main video generation endpoint
// app.post('/generate-video', async (req, res) => {
//   const { url } = req.body;
//   console.log("Received URL:", url);

//   try {
//     // 🔍 Either parse from URL or use local data
//     // const html = await fetchAmpHtml(url);
//     // const storyData = parseAmpStoryHtml(html);
//     const rawPages = data.pages;

//     const pages = await getVoiceOverDurations(rawPages);

//     if (!pages || !Array.isArray(pages)) {
//       return res.status(400).json({ error: 'Invalid or missing story pages' });
//     }

//     // 🎬 Render video using Remotion
//     const outputs = await renderFullProject(pages);

//     // 📦 Return as ZIP
//     res.attachment('story-download.zip');
//     const archive = archiver('zip');
//     archive.pipe(res);

//     outputs.forEach(file => {
//       const filename = path.basename(file.path);
//       const folder = file.path.includes(`${path.sep}videos${path.sep}`) ? 'videos'
//                    : file.path.includes(`${path.sep}images${path.sep}`) ? 'images'
//                    : '';
//       archive.file(file.path, { name: folder ? `Story/${folder}/${filename}` : `Story/${filename}` });
//     });

//     await archive.finalize();
//   } catch (err) {
//     console.error('❌ Backend error:', err.message);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// // ✅ Serve frontend
// app.use("*", async (req, res) => {
//   return res.sendFile(path.join(path_f, "index.html"));
// });

// app.listen(PORT, () => {
//   console.log(`✅ Backend running on http://localhost:${PORT}`);
// });



/// if not wokk then de comment the upper code 


import express from 'express';
import cors from 'cors';
import archiver from 'archiver';
import fs from 'fs';
import path from 'path';
import os from 'os';
import { fileURLToPath } from 'url';

import { fetchAmpHtml } from './scrapHtml.js';
import { parseAmpStoryHtml } from './htmlToJson.js';
import { renderFullProject } from './renderVideo.js';
import { getAudioDurationInSeconds } from 'get-audio-duration';
import fetch from 'node-fetch';
import multer from 'multer';
import { convertJsonToAmpFormat } from './convertjsonFormat.js'; // ✅ your converter

const app = express();
const PORT = process.env.PORT || 3001;

// ------------------ Resolve Paths ------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 📦 Path to frontend dist folder
const frontendPath = path.join(__dirname, '..', '..', 'Story_Downloader_Frontend', 'dist');

// 📄 Static fallback JSON (optional for dev)
const jsonPath = path.join(__dirname, 'storyJsonTest2.json');

// ✅ Serve built frontend files
app.use(express.static(frontendPath));
app.use(cors());
app.use(express.json());

// ------------------ Utilities ------------------

async function getDurationFromUrlTemporarily(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buffer = Buffer.from(await res.arrayBuffer());

    const tempFilePath = path.join(os.tmpdir(), `audio_${Date.now()}.mp3`);
    fs.writeFileSync(tempFilePath, buffer);

    const duration = await getAudioDurationInSeconds(tempFilePath);
    fs.unlinkSync(tempFilePath);

    return duration;
  } catch (err) {
    console.warn(`⚠️ Failed to get duration for ${url}: ${err.message}`);
    return null;
  }
}

async function getVoiceOverDurations(pages, defaultDuration = 5) {
  const updatedPages = await Promise.all(
    pages.map(async (page) => {
      if (page.voiceOverAudio) {
        const duration = await getDurationFromUrlTemporarily(page.voiceOverAudio);
        return {
          ...page,
          voiceOverDuration: duration ? Math.ceil(duration) : defaultDuration,
        };
      }
      return {
        ...page,
        voiceOverDuration: defaultDuration,
      };
    })
  );
  return updatedPages;
}


// ------------------Video Generation Via JSON ------------------


const upload = multer({ dest: 'uploads/' });


// app.post('/generate-video-json', async (req, res) => {
//   const { url } = req.body;

//   console.log("📩 Received URL:", url);

//   try {
//     // Option 1: Dynamic (uncomment to enable scraping)
//     // const html = await fetchAmpHtml(url);
//     const storyData = convertJsonToAmpFormat(html);
//     const rawPages = storyData.pages;

//     // Option 2: Static (dev/test mode)
//     // const rawJson = fs.readFileSync(jsonPath, 'utf-8');
//     // const data = JSON.parse(rawJson);
//     // const rawPages = data.pages;

//     if (!rawPages || !Array.isArray(rawPages)) {
//       return res.status(400).json({ error: 'Invalid or missing story pages' });
//     }

//     const pages = await getVoiceOverDurations(rawPages);

//     // 🎬 Render using Remotion
//     const outputs = await renderFullProject(pages);

//     // 📦 Return files as ZIP
//     res.attachment('story-download.zip');
//     const archive = archiver('zip');
//     archive.pipe(res);

//     outputs.forEach(file => {
//       const filename = path.basename(file.path);
//       const folder = file.path.includes(`${path.sep}videos${path.sep}`) ? 'videos'
//                    : file.path.includes(`${path.sep}images${path.sep}`) ? 'images'
//                    : '';
//       archive.file(file.path, {
//         name: folder ? `Story/${folder}/${filename}` : `Story/${filename}`
//       });
//     });

//     await archive.finalize();
//   } catch (err) {
//     console.error('❌ Backend error:', err.message);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });




app.post('/generate-video-json', upload.single('file'), async (req, res) => {
  try {
    // ✅ 1. Ensure file exists
    if (!req.file) {
      return res.status(400).json({ error: 'No JSON file uploaded.' });
    }

    const filePath = req.file.path;

    // ✅ 2. Read and parse uploaded JSON file
    const rawJson = fs.readFileSync(filePath, 'utf-8');
    const userJson = JSON.parse(rawJson);

    // ✅ 3. Convert user JSON to AMP story format
    const storyData = convertJsonToAmpFormat(userJson);
    const rawPages = storyData.pages;

    // ✅ 4. Validate pages
    if (!rawPages || !Array.isArray(rawPages)) {
      fs.unlinkSync(filePath);
      return res.status(400).json({ error: 'Converted story is invalid or missing pages.' });
    }

    fs.unlinkSync(filePath); // ✅ Clean up uploaded temp file

    // ✅ 5. Add voiceOver durations
    const pages = await getVoiceOverDurations(rawPages);

    // ✅ 6. Render with Remotion
    const outputs = await renderFullProject(pages);

    // ✅ 7. Return as zip
    res.attachment('story-download.zip');
    const archive = archiver('zip');
    archive.pipe(res);

    outputs.forEach(file => {
      const filename = path.basename(file.path);
      const folder = file.path.includes(`${path.sep}videos${path.sep}`) ? 'videos'
                   : file.path.includes(`${path.sep}images${path.sep}`) ? 'images'
                   : '';
      archive.file(file.path, {
        name: folder ? `Story/${folder}/${filename}` : `Story/${filename}`
      });
    });

    await archive.finalize();
  } catch (err) {
    console.error('❌ generate-video-json error:', err.message);
    res.status(500).json({ error: 'Failed to process uploaded JSON.' });
  }
});


// ------------------Video Generation Via URL ------------------

app.post('/generate-video-url', async (req, res) => {
  const { url } = req.body;

  console.log("📩 Received URL:", url);

  try {
    // Option 1: Dynamic (uncomment to enable scraping)
    const html = await fetchAmpHtml(url);
    const storyData = parseAmpStoryHtml(html);
    const rawPages = storyData.pages;

    // Option 2: Static (dev/test mode)
    // const rawJson = fs.readFileSync(jsonPath, 'utf-8');
    // const data = JSON.parse(rawJson);
    // const rawPages = data.pages;

    if (!rawPages || !Array.isArray(rawPages)) {
      return res.status(400).json({ error: 'Invalid or missing story pages' });
    }

    const pages = await getVoiceOverDurations(rawPages);

    // 🎬 Render using Remotion
    const outputs = await renderFullProject(pages);

    // 📦 Return files as ZIP
    res.attachment('story-download.zip');
    const archive = archiver('zip');
    archive.pipe(res);

    outputs.forEach(file => {
      const filename = path.basename(file.path);
      const folder = file.path.includes(`${path.sep}videos${path.sep}`) ? 'videos'
                   : file.path.includes(`${path.sep}images${path.sep}`) ? 'images'
                   : '';
      archive.file(file.path, {
        name: folder ? `Story/${folder}/${filename}` : `Story/${filename}`
      });
    });

    await archive.finalize();
  } catch (err) {
    console.error('❌ Backend error:', err.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ------------------ Fallback for React Router ------------------

app.get('*', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

// ------------------ Start Server ------------------

app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
