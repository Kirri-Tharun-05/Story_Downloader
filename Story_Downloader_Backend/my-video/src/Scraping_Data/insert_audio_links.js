const fs = require('fs');

// Load files
const scraped = JSON.parse(fs.readFileSync('scraped-text-and-images.json', 'utf-8'));
const audioData = JSON.parse(fs.readFileSync('Output_data.json', 'utf-8'));

// Insert audio URLs into voiceOverAudio field
let slideIndex = 1;

scraped.pages.forEach((page) => {
  const key = `s${slideIndex}paragraph1`;
  if (audioData[key] && audioData[key].audio_url) {
    page.voiceOverAudio = audioData[key].audio_url;
    slideIndex++;
  } else {
    // Just in case: preserve empty or default value if no match
    page.voiceOverAudio = page.voiceOverAudio || "";
  }
});

// Save the updated file
fs.writeFileSync('scraped-text-and-images.json', JSON.stringify(scraped, null, 2), 'utf-8');
console.log('✅ Audio URLs inserted and saved as scraped-text-and-images.json');
