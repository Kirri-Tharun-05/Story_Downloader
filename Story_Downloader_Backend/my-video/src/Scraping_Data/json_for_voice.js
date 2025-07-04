const fs = require('fs');

const inputFile = 'scraped-text-and-images.json';
const outputFile = 'voice.json';

const scrapedData = JSON.parse(fs.readFileSync(inputFile, 'utf-8'));

let output = {};
let slideCounter = 1;

scrapedData.pages.slice(0, -1).forEach((page) => {
  const texts = page.texts || [];

  for (const textObj of texts) {
    const content = textObj.content.trim();

    // Use meaningful h1, h2, h3 or long p tags as quote content
    if (["h1", "h2", "h3"].includes(textObj.tag) || content.length > 30) {
      const key = `s${slideCounter}paragraph1`;
      output[key] = content;
      slideCounter++;
      break; // Use only the first suitable text per page
    }
  }
});

// Save as flat key-value JSON
fs.writeFileSync(outputFile, JSON.stringify(output, null, 2), 'utf-8');
console.log(`✅ Converted successfully to '${outputFile}'`);
