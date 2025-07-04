const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const ENTRY_FILE = "src/index.ts";
const slidesJsonPath = path.resolve(__dirname, "../Scraping_Data/scraped-text-and-images.json");
const rawData = fs.readFileSync(slidesJsonPath, "utf-8");
const json = JSON.parse(rawData);
const slides = json.pages;

if (!Array.isArray(slides)) {
  console.error("❌ Invalid data: pages array not found.");
  process.exit(1);
}

console.log(`📄 Found ${slides.length} slides.`);

const outDir = path.resolve(__dirname, "../../out");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// 1. Render individual slides
slides.forEach((page, index) => {
  const compId = `Slide${index + 1}`;
  const outputPath = path.resolve(outDir, `slide${index + 1}.mp4`);

  const props = JSON.stringify({
    page,
    index,
    audioOffset: index * 150,
  });

  try {
    console.log(`🎬 Rendering ${compId} to ${outputPath}...`);
    execSync(
      `npx remotion render ${ENTRY_FILE} ${compId} ${outputPath} --props="${props.replace(/"/g, '\\"')}"`,
      { stdio: "inherit", shell: true }
    );
    console.log(`✅ Finished rendering ${compId}`);
  } catch (err) {
    console.error(`❌ Failed to render ${compId}:`, err.message);
  }
});

// 2. Render full video
const fullVideoOutputPath = path.resolve(outDir, "full_video.mp4");
const fullProps = JSON.stringify({ pages: slides });

try {
  console.log(`🎬 Rendering full video to ${fullVideoOutputPath}...`);
  execSync(
    `npx remotion render ${ENTRY_FILE} FullStory ${fullVideoOutputPath} --props="${fullProps.replace(/"/g, '\\"')}"`,
    { stdio: "inherit", shell: true }
  );
  console.log(`✅ Finished rendering full video.`);
} catch (err) {
  console.error(`❌ Failed to render full video:`, err.message);
}
