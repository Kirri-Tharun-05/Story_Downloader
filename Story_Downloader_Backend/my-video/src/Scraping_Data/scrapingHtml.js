const axios = require('axios');
const fs = require('fs');

async function fetchAmpHtml(url, outputPath = 'scraped-story.html') {
  try {
    const response = await axios.get(url);
    const html = response.data;

    fs.writeFileSync(outputPath, html, 'utf8');
    console.log(`✅ AMP HTML saved to ${outputPath}`);
  } catch (error) {
    console.error('Error fetching AMP story:', error.message);
  }
}

// Run it
// fetchAmpHtml('https://suvichaar.org/stories/beyond-the-home-runs-profound-insights-by-babe-ruth_9BeMkE9xqx_G');
// fetchAmpHtml('https://suvichaar.org/stories/the-best-bertrand-russell-quotes-on-rational-living_1OxHAowSwu_G');
// fetchAmpHtml('https://suvichaar.org/stories/unveiling-wisdom-match-the-insightful-quotes-to-kristin-neff_-nWhd-EWRR_G');
// fetchAmpHtml('https://suvichaar.org/stories/axiom-mission-4---a-new-era-in-commercial-space-future_F68VuR8o-6_G');
// fetchAmpHtml('https://suvichaar.org/stories/audrey-hepburns-guide-to-happiness-and-possibility_DO9CkRNfoM_G');
// fetchAmpHtml('https://suvichaar.org/stories/walt-disneys-wisdom-balancing-success-family-and-future-minds_YggWZDMNge_G');


// Try 1
// fetchAmpHtml('https://suvichaar.org/stories/zoe-saldana-blending-life-strength-and-music-into-acting_vcGMYeE7fC_G');


//story 1
// fetchAmpHtml('https://suvichaar.org/stories/zoe-saldana-blending-life-strength-and-music-into-acting_vcGMYeE7fC_G');

// //story 2
// fetchAmpHtml('https://suvichaar.org/stories/walt-disneys-wisdom-balancing-success-family-and-future-minds_YggWZDMNge_G');

//story 3
// fetchAmpHtml('https://suvichaar.org/stories/vin-diesel-the-artistic-journey-of-a-perfectionist_81_NFiK1FD_G');


//story 4
// fetchAmpHtml('https://suvichaar.org/stories/unveiling-wisdom-match-the-insightful-quotes-to-kristin-neff_-nWhd-EWRR_G');

//story 5
// fetchAmpHtml('https://suvichaar.org/stories/unveiling-wisdom-deciphering-the-insights-of-dave-ramsey_XVv7Kg52lf_G');

//story 6
// fetchAmpHtml('https://suvichaar.org/stories/unveiling-the-shadows-the-enigmatic-world-of-edgar-allan-poe_69h0ZqDSnR_G');

//story 7
// fetchAmpHtml('https://suvichaar.org/stories/unveiling-the-mindset-of-resilience-wisdom-from-david-goggins_d7dCSClK8U_G');


//story 8
// fetchAmpHtml('https://suvichaar.org/stories/unveiling-the-hacker-mindset-insights-by-kevin-mitnick_8HhYYrNff5_G');

//story 9
// fetchAmpHtml('https://suvichaar.org/stories/unveiling-hidden-truths-deep-insights-by-noam-chomsky_MMislPwZAR_G');

//story 10
// fetchAmpHtml('https://suvichaar.org/stories/unlocking-success-with-dwayne-johnson-determination-humility-and-hard-work_DMY3JQNtIs_G');


//story 11
// fetchAmpHtml('https://suvichaar.org/stories/amrita-pritams-pen-articulating-the-pain--power-of-a-generation_IvT_7c9rWT_G');

//story 12
// fetchAmpHtml('https://suvichaar.org/stories/lata-mangeshkar-the-nightingales-timeless-legacy_OgjXnGyBey_G');

//story 13
// fetchAmpHtml('https://suvichaar.org/stories/kudrat-by-naman-jain-a-poetry-to-save-nature_RgYAAx_byr_G');



// for live
fetchAmpHtml('https://suvichaar.org/stories/us-airstrikes-on-iran-spark-worldwar-trend_IkXmWSoB91_G');

