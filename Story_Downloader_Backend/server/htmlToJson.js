// backend/htmlToJson.js
// import * as cheerio from 'cheerio';

// export function parseAmpStoryHtml(html) {
//   const $ = cheerio.load(html);
//   const pages = [];

//   $('amp-story-page').each((_, pageEl) => {
//     const $page = $(pageEl);
//     const pageId = $page.attr('id');
//     const backgroundAudio = $page.attr('background-audio');
//     const autoAdvanceAfter = $page.attr('auto-advance-after');

//     const images = [];
//     const texts = [];
//     const seenTexts = new Set();

//     $page.find('amp-img').each((_, imgEl) => {
//       const $img = $(imgEl);
//       images.push({
//         type: 'image',
//         src: $img.attr('src'),
//         layout: $img.attr('layout'),
//         alt: $img.attr('alt')
//       });
//     });

//     $page.find('h1,h2,h3,h4,h5,h6,p').each((_, el) => {
//       const content = $(el).text().trim();
//       if (content && !seenTexts.has(content)) {
//         seenTexts.add(content);
//         texts.push({
//           type: 'text',
//           tag: el.tagName,
//           content
//         });
//       }
//     });

//     pages.push({
//       id: pageId,
//       backgroundAudio,
//       autoAdvanceAfter,
//       images,
//       texts
//     });
//   });

//   const metadata = {
//     title: $('amp-story').attr('title') || '',
//     publisher: $('amp-story').attr('publisher') || '',
//     publisherLogo: $('amp-story').attr('publisher-logo-src') || '',
//     backgroundAudio: $('amp-story').attr('background-audio') || ''
//   };

//   return { metadata, pages };
// }



import * as cheerio from 'cheerio';

export function parseAmpStoryHtml(html) {
  const $ = cheerio.load(html);
  const pages = [];

  const allPages = $('amp-story-page').toArray();
  const usablePages = allPages.slice(0, -2); // Exclude last 2 slides

  usablePages.forEach((pageEl) => {
    const $page = $(pageEl);
    const pageId = $page.attr('id');
    const backgroundAudio = $page.attr('background-audio');
    const autoAdvanceAfter = $page.attr('auto-advance-after');

    const images = [];
    const texts = [];
    const seenTexts = new Set();

    $page.find('amp-img').each((_, imgEl) => {
      const $img = $(imgEl);
      images.push({
        type: 'image',
        src: $img.attr('src'),
        layout: $img.attr('layout'),
        alt: $img.attr('alt')
      });
    });

    $page.find('h1,h2,h3,h4,h5,h6,p').each((_, el) => {
      const content = $(el).text().trim();
      if (content && !seenTexts.has(content)) {
        seenTexts.add(content);
        texts.push({
          type: 'text',
          tag: el.tagName,
          content
        });
      }
    });

    pages.push({
      id: pageId,
      backgroundAudio,
      autoAdvanceAfter,
      images,
      texts
    });
  });

  // Add custom last slide
  pages.push({
    id: "custom_slide",
    backgroundAudio: "https://cdn.suvichaar.org/media/tts_407078a4ff494fb5bed8c35050ffd1a7.mp3",
    autoAdvanceAfter: "7s",
    images: [
      {
        type: "image",
        src: "https://media.suvichaar.org/media/designasset/brandasset/logo/suvichaarwhitelogoprimaryhori.png",
        layout: "fill",
        alt: "Suvichaarlogo"
      }
    ],
    texts: [
      {
        type: "text",
        tag: "h3",
        content: "Get Such\nInspirational\nContent"
      },
      {
        type: "text",
        tag: "p",
        content: "Like | Subscribe | Share\nwww.suvichaar.org"
      }
    ]
  });

  const metadata = {
    title: $('amp-story').attr('title') || '',
    publisher: $('amp-story').attr('publisher') || '',
    publisherLogo: $('amp-story').attr('publisher-logo-src') || '',
    backgroundAudio: $('amp-story').attr('background-audio') || ''
  };

  return { metadata, pages };
}
