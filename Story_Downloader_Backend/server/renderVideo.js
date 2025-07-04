// import { execSync } from 'child_process';
// import fs from 'fs';
// import path from 'path';
// import os from 'os';

// import { fileURLToPath } from 'url';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const entryFilePath = path.join(__dirname, '../my-video/src/index.ts');
// if (!fs.existsSync(entryFilePath)) {
//   console.error(`❌ ENTRY_FILE not found at: ${entryFilePath}`);
// } else {
//   console.log(`✅ ENTRY_FILE found at: ${entryFilePath}`);
// }

// // Helper to write JSON to temp file and return path
// const writeTempJsonFile = (data) => {
//   const tempFilePath = path.join(os.tmpdir(), `remotion-props-${Date.now()}.json`);
//   fs.writeFileSync(tempFilePath, JSON.stringify(data));
//   console.log(`📝 Temp JSON file written to: ${tempFilePath}`);
//   return tempFilePath;
// };

// const renderSlide = (slideIndex, outputPath, pages) => {
//   try {
//     const propsObj = {
//       page: pages[slideIndex],
//       index: slideIndex,
//       audioOffset: slideIndex * 150,
//     };
//     const propsPath = writeTempJsonFile(propsObj);

//     console.log(`🎬 Rendering Slide ${slideIndex + 1} to ${outputPath}...`);
//     execSync(
//       `npx remotion render "${entryFilePath}" Slide${slideIndex + 1} "${outputPath}" --props="${propsPath}"`,
//       { stdio: 'inherit' }
//     );
//     console.log(`✅ Slide ${slideIndex + 1} rendered.`);
//   } catch (err) {
//     console.error(`❌ Failed to render Slide ${slideIndex + 1}:`, err.message);
//   }
// };

// const renderFullVideo = (outputPath, pages) => {
//   try {
//     const propsPath = writeTempJsonFile({ pages });

//     console.log(`🎬 Rendering full video to ${outputPath}...`);
//     execSync(
//       `npx remotion render "${entryFilePath}" FullStory "${outputPath}" --props="${propsPath}"`,
//       { stdio: 'inherit' }
//     );
//     console.log(`✅ Full video rendered.`);
//   } catch (err) {
//     console.error(`❌ Failed to render full video:`, err.message);
//   }
// };

// const renderImage = (slideIndex, outputPath, frame, pages) => {
//   try {
//     const propsObj = {
//       page: pages[slideIndex],
//       index: slideIndex,
//       audioOffset: slideIndex * 150,
//     };
//     const propsPath = writeTempJsonFile(propsObj);

//     console.log(`🖼️ Rendering image for Slide ${slideIndex + 1} to ${outputPath}...`);
//     execSync(
//       `npx remotion still "${entryFilePath}" Slide${slideIndex + 1} "${outputPath}" --frame=${frame} --props="${propsPath}"`,
//       { stdio: 'inherit' }
//     );
//     console.log(`✅ Slide ${slideIndex + 1} image rendered.`);
//   } catch (err) {
//     console.error(`❌ Failed to render image for Slide ${slideIndex + 1}:`, err.message);
//   }
// };

// export const renderFullProject = async (pages) => {
//   console.log('📄 Number of Pages:', pages.length);

//   const outDir = path.resolve(__dirname, '../../out');
//   const imageDir = path.join(outDir, 'images');

//   if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
//   if (!fs.existsSync(imageDir)) fs.mkdirSync(imageDir, { recursive: true });

//   const outputs = [];

//   for (let i = 0; i < pages.length; i++) {
//     const slidePath = path.join(outDir, `slide${i + 1}.mp4`);
//     const imagePath = path.join(imageDir, `slide${i + 1}.png`);

//     renderSlide(i, slidePath, pages);
//     outputs.push({ path: slidePath });

//     renderImage(i, imagePath, Math.floor(150 / 2), pages);
//     outputs.push({ path: imagePath });
//   }

//   const fullVideoPath = path.join(outDir, 'full_video.mp4');
//   renderFullVideo(fullVideoPath, pages);
//   outputs.push({ path: fullVideoPath });

//   return outputs;
// };





// import { execSync } from 'child_process';
// import fs from 'fs';
// import path from 'path';
// import os from 'os';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// // Absolute path to Remotion CLI binary
// const remotionBin = path.resolve(__dirname, '../my-video/node_modules/.bin/remotion');

// // Entry file for Remotion
// const entryFilePath = path.join(__dirname, '../my-video/src/index.ts');
// if (!fs.existsSync(entryFilePath)) {
//   console.error(`❌ ENTRY_FILE not found at: ${entryFilePath}`);
// } else {
//   console.log(`✅ ENTRY_FILE found at: ${entryFilePath}`);
// }

// // Helper to write JSON to a temporary file
// const writeTempJsonFile = (data) => {
//   const tempFilePath = path.join(os.tmpdir(), `remotion-props-${Date.now()}.json`);
//   fs.writeFileSync(tempFilePath, JSON.stringify(data));
//   console.log(`📝 Temp JSON file written to: ${tempFilePath}`);
//   return tempFilePath;
// };


// // writing the code to send the random video link to remotion.dev folder
// const videoLinksPath = path.resolve('./video_links.json');
// const videoLinksJson = JSON.parse(fs.readFileSync(videoLinksPath, 'utf-8'));
// const videoLinks = videoLinksJson.video_links;

// // Get a random link
// const getRandomVideo = () => {
//   return videoLinks[Math.floor(Math.random() * videoLinks.length)];
// };


// const renderSlide = (slideIndex, outputPath, pages) => {
//   try {
//     const propsObj = {
//       page: pages[slideIndex],
//       index: slideIndex,
//       audioOffset: slideIndex * 150,
//       videoUrl: getRandomVideo(),
//     };
//     const propsPath = writeTempJsonFile(propsObj);

//     console.log(`🎬 Rendering Slide ${slideIndex + 1} to ${outputPath}...`);
//     execSync(
//       `"${remotionBin}" render "${entryFilePath}" Slide${slideIndex + 1} "${outputPath}" --props="${propsPath}" --concurrency=4`,
//       { stdio: 'inherit' }
//     );
//     console.log(`✅ Slide ${slideIndex + 1} rendered.`);
//   } catch (err) {
//     console.error(`❌ Failed to render Slide ${slideIndex + 1}:`, err.message);
//   }
// };

// const renderFullVideo = (outputPath, pages) => {
//   try {
//     const propsPath = writeTempJsonFile({ pages,videoUrl: getRandomVideo(), });

//     console.log(`🎬 Rendering full video to ${outputPath}...`);
//     execSync(
//       `"${remotionBin}" render "${entryFilePath}" FullStory "${outputPath}" --props="${propsPath}" --concurrency=4`,
//       { stdio: 'inherit' }
//     );
//     console.log(`✅ Full video rendered.`);
//   } catch (err) {
//     console.error(`❌ Failed to render full video:`, err.message);
//   }
// };

// const renderImage = (slideIndex, outputPath, frame, pages) => {
//   try {
//     const propsObj = {
//       page: pages[slideIndex],
//       index: slideIndex,
//       audioOffset: slideIndex * 150,
//       videoUrl: getRandomVideo(),
//     };
//     const propsPath = writeTempJsonFile(propsObj);

//     console.log(`🖼️ Rendering image for Slide ${slideIndex + 1} to ${outputPath}...`);
//     execSync(
//       `"${remotionBin}" still "${entryFilePath}" Slide${slideIndex + 1} "${outputPath}" --frame=${frame} --props="${propsPath}" --concurrency=4`,
//       { stdio: 'inherit' }
//     );
//     console.log(`✅ Slide ${slideIndex + 1} image rendered.`);
//   } catch (err) {
//     console.error(`❌ Failed to render image for Slide ${slideIndex + 1}:`, err.message);
//   }
// };



// export const renderFullProject = async (pages) => {
//   console.log('📄 Number of Pages:', pages.length);

//   const outDir = path.resolve(__dirname, '../../out');
//   const imageDir = path.join(outDir, 'images');
//   const videoDir = path.join(outDir, 'videos');

//   if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
//   if (!fs.existsSync(imageDir)) fs.mkdirSync(imageDir, { recursive: true });
//   if (!fs.existsSync(videoDir)) fs.mkdirSync(videoDir, { recursive: true });

//   const outputs = [];

//   for (let i = 0; i < pages.length; i++) {
//     const slidePath = path.join(videoDir, `slide${i + 1}.mp4`);
//     const imagePath = path.join(imageDir, `slide${i + 1}.png`);

//     renderSlide(i, slidePath, pages);
//     outputs.push({ path: slidePath });

//     renderImage(i, imagePath, Math.floor(150 / 2), pages);
//     outputs.push({ path: imagePath });
//   }

//   const fullVideoPath = path.join(outDir, 'full_video.mp4');
//   renderFullVideo(fullVideoPath, pages);
//   outputs.push({ path: fullVideoPath });

//   return outputs;
// };




import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import os from 'os';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Absolute path to Remotion CLI binary
const remotionBin = path.resolve(__dirname, '../my-video/node_modules/.bin/remotion');

// Entry file for Remotion
const entryFilePath = path.join(__dirname, '../my-video/src/index.ts');
if (!fs.existsSync(entryFilePath)) {
  console.error(`❌ ENTRY_FILE not found at: ${entryFilePath}`);
} else {
  console.log(`✅ ENTRY_FILE found at: ${entryFilePath}`);
}

// Helper to write JSON to a temporary file
const writeTempJsonFile = (data) => {
  const tempFilePath = path.join(os.tmpdir(), `remotion-props-${Date.now()}.json`);
  fs.writeFileSync(tempFilePath, JSON.stringify(data));
  console.log(`📝 Temp JSON file written to: ${tempFilePath}`);
  return tempFilePath;
};

// Load video links
const videoLinksPath = path.resolve('./video_links.json');
const videoLinksJson = JSON.parse(fs.readFileSync(videoLinksPath, 'utf-8'));
const videoLinks = videoLinksJson.video_links;

// Load music links
const musicLinksPath = path.resolve('./music_links.json');
const musicLinks = JSON.parse(fs.readFileSync(musicLinksPath, 'utf-8')).music_links;

// Get a random video
const getRandomVideo = () => {
  return videoLinks[Math.floor(Math.random() * videoLinks.length)];
};

// Get a random music track
const getRandomMusic = () => {
  return musicLinks[Math.floor(Math.random() * musicLinks.length)];
};

// Render a single slide video
const renderSlide = (slideIndex, outputPath, pages, sharedVideoUrl, sharedMusicUrl) => {
  try {
    const propsObj = {
      page: pages[slideIndex],
      index: slideIndex,
      audioOffset: slideIndex * 150,
      videoUrl: sharedVideoUrl,
      musicUrl: sharedMusicUrl,
    };
    const propsPath = writeTempJsonFile(propsObj);

    console.log(`🎬 Rendering Slide ${slideIndex + 1} to ${outputPath}...`);
    execSync(
      `"${remotionBin}" render "${entryFilePath}" Slide${slideIndex + 1} "${outputPath}" --props="${propsPath}" --concurrency=4 --gl=angle`,
      { stdio: 'inherit' }
    );
    console.log(`✅ Slide ${slideIndex + 1} rendered.`);
  } catch (err) {
    console.error(`❌ Failed to render Slide ${slideIndex + 1}:`, err.message);
  }
};

// Render a single image for a slide
const renderImage = (slideIndex, outputPath, frame, pages, sharedVideoUrl, sharedMusicUrl) => {
  try {
    const propsObj = {
      page: pages[slideIndex],
      index: slideIndex,
      audioOffset: slideIndex * 150,
      videoUrl: sharedVideoUrl,
      musicUrl: sharedMusicUrl,
    };
    const propsPath = writeTempJsonFile(propsObj);

    console.log(`🖼️ Rendering image for Slide ${slideIndex + 1} to ${outputPath}...`);
    execSync(
      `"${remotionBin}" still "${entryFilePath}" Slide${slideIndex + 1} "${outputPath}" --frame=${frame} --props="${propsPath}" --concurrency=4 --gl=angle`,
      { stdio: 'inherit' }
    );
    console.log(`✅ Slide ${slideIndex + 1} image rendered.`);
  } catch (err) {
    console.error(`❌ Failed to render image for Slide ${slideIndex + 1}:`, err.message);
  }
};

// Render the full video
const renderFullVideo = (outputPath, pages, sharedVideoUrl, sharedMusicUrl) => {
  try {
    const propsPath = writeTempJsonFile({
      pages,
      videoUrl: sharedVideoUrl,
      musicUrl: sharedMusicUrl,
    });

    console.log(`🎬 Rendering full video to ${outputPath}...`);
    execSync(
      `"${remotionBin}" render "${entryFilePath}" FullStory "${outputPath}" --props="${propsPath}" --concurrency=4 --gl=angle`,
      { stdio: 'inherit' }
    );
    console.log(`✅ Full video rendered.`);
  } catch (err) {
    console.error(`❌ Failed to render full video:`, err.message);
  }
};

// Master function to render everything for a batch (slides + images + full video)
export const renderFullProject = async (pages) => {
  console.log('📄 Number of Pages:', pages.length);

  const outDir = path.resolve(__dirname, '../../out');
  const imageDir = path.join(outDir, 'images');
  const videoDir = path.join(outDir, 'videos');

  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  if (!fs.existsSync(imageDir)) fs.mkdirSync(imageDir, { recursive: true });
  if (!fs.existsSync(videoDir)) fs.mkdirSync(videoDir, { recursive: true });

  // Shared values for this ZIP batch
  const sharedVideoUrl = getRandomVideo();
  const sharedMusicUrl = getRandomMusic();

  console.log(`🎥 Selected Video URL: ${sharedVideoUrl}`);
  console.log(`🎵 Selected Music URL: ${sharedMusicUrl}`);

  const outputs = [];

  for (let i = 0; i < pages.length; i++) {
    const slidePath = path.join(videoDir, `slide${i + 1}.mp4`);
    const imagePath = path.join(imageDir, `slide${i + 1}.png`);

    renderSlide(i, slidePath, pages, sharedVideoUrl, sharedMusicUrl);
    outputs.push({ path: slidePath });

    renderImage(i, imagePath, Math.floor(150 / 2), pages, sharedVideoUrl, sharedMusicUrl);
    outputs.push({ path: imagePath });
  }

  const fullVideoPath = path.join(outDir, 'full_video.mp4');
  renderFullVideo(fullVideoPath, pages, sharedVideoUrl, sharedMusicUrl);
  outputs.push({ path: fullVideoPath });

  return outputs;
};
