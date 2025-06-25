// backend/index.js
import express from 'express';
import cors from 'cors';
import archiver from 'archiver';
import fs from 'fs';
import { fetchAmpHtml } from './scrapHtml.js';
import { parseAmpStoryHtml } from './htmlToJson.js';
import { renderFullProject } from './renderVideo.js';
import path from "path"

const app = express();
const PORT = process.env.PORT || 3001;
const path_f = path.join(process.cwd(), "..", "..", "Story_Downloader_Frontend", "dist")

app.use(cors());
app.use(express.json());
app.use(express.static(path_f));

app.post('/generate-video', async (req, res) => {
  const { url } = req.body;
  console.log(url);

  if (!url) {
    return res.status(400).json({ error: 'Missing URL' });
  }

  try {
    // 🔥 1. Fetch AMP HTML
    const html = await fetchAmpHtml(url);

    // 🔍 2. Parse HTML to JSON
    const storyData = parseAmpStoryHtml(html);
    console.log(storyData);
    const { pages } = storyData;

    if (!pages || !Array.isArray(pages)) {
      return res.status(400).json({ error: 'Failed to parse story data' });
    }

    // 🎬 3. Render video and images via Remotion
    const outputs = await renderFullProject(pages);

    // 📦 4. Zip and return
    res.attachment('story-download.zip');
    const archive = archiver('zip');
    archive.pipe(res);

    // outputs.forEach(file => {
    //   archive.file(file.path, { name: file.path.split('/').pop() });
    // });

    // outputs.forEach(file => {
    //   const filename = path.basename(file.path);
    //   archive.file(file.path, { name: `story/${filename}` });
    // });
    outputs.forEach(file => {
      const filename = path.basename(file.path);

      if (file.path.includes(`${path.sep}images${path.sep}`)) {
        archive.file(file.path, { name: `Story/images/${filename}` });
      } else if (file.path.includes(`${path.sep}videos${path.sep}`)) {
        archive.file(file.path, { name: `Story/videos/${filename}` });
      } else {
        archive.file(file.path, { name: `Story/${filename}` });
      }
    });

    await archive.finalize();
  } catch (err) {
    console.error('❌ Backend error:', err.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

console.log(path_f)
app.use("*", async (req, res) => {
  return res.sendFile(path.join(path_f, "index.html"))
})

app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
