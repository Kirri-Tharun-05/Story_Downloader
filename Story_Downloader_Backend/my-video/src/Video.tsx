// import { Composition, Sequence, AbsoluteFill,getInputProps} from 'remotion';
// import { Scene } from './Url_Scraped_Stories/Scene';
// import type { AMPStoryData } from './types/ampStoryData';

// // import backgroundMusic from '../public/backgroundMusic.mp3'

// const durationPerScene = 150; // 5 seconds at 30fps


// export const RemotionVideo = () => {
//   const input = getInputProps() as unknown as AMPStoryData;
//   const pages = input.pages || [];
//   console.log('📦 Received pages:', input);

//   return (
//     <>
//       <Composition
//         id="FullStory"
//         component={DynamicStory}
//         durationInFrames={pages.length * durationPerScene}
//         fps={30}
//         width={720}
//         height={1280}
//         defaultProps={{ pages }}
//       />

//       {pages.map((page, index) => (
//         <Composition
//           key={`Slide${index + 1}`}
//           id={`Slide${index + 1}`}
//           component={Scene}
//           durationInFrames={durationPerScene}
//           fps={30}
//           width={720}
//           height={1280}
//           defaultProps={{
//             page,
//             index,
//             audioOffset: index * durationPerScene,
//           }}
//         />
//       ))}
//     </>
//   );
// };

// export const DynamicStory = ({ pages }: { pages: AMPStoryData['pages'] }) => {
//   return (
//     <AbsoluteFill>
//       {pages.map((page, index) => (
//         <Sequence
//           key={page.id || index}
//           from={index * durationPerScene}
//           durationInFrames={durationPerScene}
//         >
//           <Scene
//             page={page}
//             index={index}
//             audioOffset={index * durationPerScene}
//           />
//         </Sequence>
//       ))}
//     </AbsoluteFill>
//   );
// };

// import { Composition, Sequence, AbsoluteFill, getInputProps } from 'remotion';
// import { Scene } from './Url_Scraped_Stories/Scene';
// import type { AMPStoryData } from './types/ampStoryData';

// const durationPerScene = 150;

// export const RemotionVideo = () => {
//   const input = getInputProps() as Partial<AMPStoryData> & {
//     page?: AMPStoryData['pages'][0];
//     index?: number;
//     audioOffset?: number;
//   };

//   const isFullStory = Array.isArray(input.pages);
//   const pages = input.pages || (input.page ? [input.page] : []);

//   if (!pages.length) {
//     throw new Error('❌ No pages or page data provided to RemotionVideo');
//   }

//   return (
//     <>
//       {/* Only register FullStory if pages[] is provided */}
//       {isFullStory && (
//         <Composition
//           id="FullStory"
//           component={DynamicStory}
//           durationInFrames={pages.length * durationPerScene}
//           fps={30}
//           width={720}
//           height={1280}
//           defaultProps={{ pages }}
//         />
//       )}

//       {/* Always register individual slides */}
//       {pages.map((page, index) => (
//         <Composition
//           key={`Slide${index + 1}`}
//           id={`Slide${index + 1}`}
//           component={Scene}
//           durationInFrames={durationPerScene}
//           fps={30}
//           width={720}
//           height={1280}
//           defaultProps={{
//             page,
//             index,
//             audioOffset: index * durationPerScene,
//           }}
//         />
//       ))}
//     </>
//   );
// };

// export const DynamicStory = ({ pages }: { pages: AMPStoryData['pages'] }) => {
//   return (
//     <AbsoluteFill>
//       {pages.map((page, index) => (
//         <Sequence
//           key={page.id || index}
//           from={index * durationPerScene}
//           durationInFrames={durationPerScene}
//         >
//           <Scene
//             page={page}
//             index={index}
//             audioOffset={index * durationPerScene}
//           />
//         </Sequence>
//       ))}
//     </AbsoluteFill>
//   );
// };


// template 1

// import { Composition, Sequence, AbsoluteFill, getInputProps } from 'remotion';
// // import { Scene} from './Url_Scraped_Stories/Scene';
// import { Scene} from './Url_Scraped_Stories/Scene';
// import type { AMPStoryData } from './types/ampStoryData';

// const durationPerScene = 150;

// export const RemotionVideo = () => {
//   const input = getInputProps() as Partial<AMPStoryData> & {
//     page?: AMPStoryData['pages'][0];
//     index?: number;
//     audioOffset?: number;
//   };

//   const isFullStory = Array.isArray(input.pages);
//   const pages = input.pages || (input.page ? [input.page] : []);

//   if (!pages.length) {
//     throw new Error('❌ No pages or page data provided to RemotionVideo');
//   }

//   // When rendering a single slide, start from the given index
//   const baseIndex = input.index ?? 0;

//   return (
//     <>
//       {/* Only register FullStory if pages[] is provided */}
//       {isFullStory && (
//         <Composition
//           id="FullStory"
//           component={DynamicStory}
//           durationInFrames={pages.length * durationPerScene}
//           fps={30}
//           width={720}
//           height={1280}
//           defaultProps={{ pages }}
//         />
//       )}

//       {/* Register slide(s) using accurate index */}
//       {pages.map((page, i) => {
//         const index = baseIndex + i;

//         return (
//           <Composition
//             key={`Slide${index + 1}`}
//             id={`Slide${index + 1}`}
//             component={Scene}
//             durationInFrames={durationPerScene}
//             fps={30}
//             width={720}
//             height={1280}
//             defaultProps={{
//               page,
//               index,
//               audioOffset: index * durationPerScene,
//             }}
//           />
//         );
//       })}
//     </>
//   );
// };

// export const DynamicStory = ({ pages }: { pages: AMPStoryData['pages'] }) => {
//   return (
//     <AbsoluteFill>
//       {pages.map((page, index) => (
//         <Sequence
//           key={page.id || index}
//           from={index * durationPerScene}
//           durationInFrames={durationPerScene}
//         >
//           <Scene
//             page={page}
//             index={index}
//             audioOffset={index * durationPerScene}
//           />
//         </Sequence>
//       ))}
//     </AbsoluteFill>
//   );
// };


// Template2 

// import {
//   Composition,
//   Sequence,
//   AbsoluteFill,
//   getInputProps,
// } from 'remotion';
// import { AdvancedScene } from './Url_Scraped_Stories/Scene';
// import type { AMPStoryData } from './types/ampStoryData';

// const DEFAULT_DURATION = 150; // 5 seconds at 30 FPS
// const FPS = 30;

// export const RemotionVideo = () => {
//   const input = getInputProps() as Partial<AMPStoryData> & {
//     page?: AMPStoryData['pages'][0];
//     index?: number;
//     audioOffset?: number;
//   };

//   const isFullStory = Array.isArray(input.pages);
//   const pages = input.pages || (input.page ? [input.page] : []);

//   if (!pages.length) {
//     throw new Error('❌ No pages or page data provided to RemotionVideo');
//   }

//   const baseIndex = input.index ?? 0;

//   // 🔢 Calculate dynamic durations
//   const durations = pages.map((p) =>
//     p.voiceOverDuration && p.voiceOverDuration * FPS > DEFAULT_DURATION
//       ? Math.ceil(p.voiceOverDuration * FPS)
//       : DEFAULT_DURATION
//   );

//   const totalDuration = durations.reduce((a, b) => a + b, 0);

//   return (
//     <>
//       {isFullStory && (
//         <Composition
//           id="FullStory"
//           component={DynamicStory}
//           durationInFrames={totalDuration}
//           fps={FPS}
//           width={720}
//           height={1280}
//           defaultProps={{ pages }}
//         />
//       )}

//       {pages.map((page, i) => {
//         const index = baseIndex + i;
//         const durationInFrames = durations[i];

//         return (
//           <Composition
//             key={`Slide${index + 1}`}
//             id={`Slide${index + 1}`}
//             component={AdvancedScene}
//             durationInFrames={durationInFrames}
//             fps={FPS}
//             width={720}
//             height={1280}
//             defaultProps={{
//               page,
//               index,
//               audioOffset: index * DEFAULT_DURATION, // Background music stays aligned
//               voiceOverUrl: page.voiceOverAudio,
//               duration: durationInFrames,
//             }}
//           />
//         );
//       })}
//     </>
//   );
// };

// // ✅ Updated DynamicStory with <Sequence> for each page
// export const DynamicStory = ({ pages }: { pages: AMPStoryData['pages'] }) => {
//   const durations = pages.map((p) =>
//     p.voiceOverDuration && p.voiceOverDuration * FPS > DEFAULT_DURATION
//       ? Math.ceil(p.voiceOverDuration * FPS)
//       : DEFAULT_DURATION
//   );

//   let startFrame = 0;

//   return (
//     <AbsoluteFill>
//       {pages.map((page, index) => {
//         const duration = durations[index];
//         const audioOffset = startFrame;
//         const sequence = (
//           <Sequence
//             key={page.id}
//             from={startFrame}
//             durationInFrames={duration}
//           >
//             <AdvancedScene
//               page={page}
//               index={index}
//               audioOffset={audioOffset}
//               voiceOverUrl={page.voiceOverAudio}
//               duration={duration}
//               totalSlides={pages.length}
//             />
//           </Sequence>
//         );
//         startFrame += duration;
//         return sequence;
//       })}
//     </AbsoluteFill>
//   );
// };

import {
  Composition,
  Sequence,
  AbsoluteFill,
  getInputProps,
} from 'remotion';
import { AdvancedScene } from './Url_Scraped_Stories/Scene';
import type { AMPStoryData } from './types/ampStoryData';

const FPS = 30;
const TEXT_ANIMATION_FRAMES = 45; // Wait for text to finish animating
const POST_AUDIO_HOLD = 30; // Hold 1s after voice-over

export const RemotionVideo = () => {
  const input = getInputProps() as Partial<AMPStoryData> & {
    page?: AMPStoryData['pages'][0];
    index?: number;
    audioOffset?: number;
    videoUrl?: string;
    musicUrl?: string;
  };

  const isFullStory = Array.isArray(input.pages);
  const pages = input.pages || (input.page ? [input.page] : []);

  if (!pages.length) {
    throw new Error('❌ No pages or page data provided to RemotionVideo');
  }

  const baseIndex = input.index ?? 0;

  // 🎯 Dynamic duration = text animation + voice + hold
  const durations = pages.map((p, i) => {
    const voiceOverSec = p.voiceOverDuration ?? 5;
    const voiceFrames = Math.ceil(voiceOverSec * FPS);
    const totalFrames = TEXT_ANIMATION_FRAMES + voiceFrames + POST_AUDIO_HOLD;
    return totalFrames;
  });

  const totalDuration = durations.reduce((a, b) => a + b, 0);

  return (
    <>
      {isFullStory && (
        <Composition
          id="FullStory"
          component={DynamicStory}
          durationInFrames={totalDuration}
          fps={FPS}
          width={720}
          height={1280}
          defaultProps={{ pages,videoUrl: input.videoUrl, musicUrl: input.musicUrl  }}
        />
      )}

      {pages.map((page, i) => {
        const index = baseIndex + i;
        const durationInFrames = durations[i];

        return (
          <Composition
            key={`Slide${index + 1}`}
            id={`Slide${index + 1}`}
            component={AdvancedScene}
            durationInFrames={durationInFrames}
            fps={FPS}
            width={720}
            height={1280}
            defaultProps={{
              page,
              index,
              audioOffset: index * 150, // background music alignment
              voiceOverUrl: page.voiceOverAudio,
              duration: durationInFrames,
              videoUrl: page.id === 'custom_slide' ? input.videoUrl : undefined ,
              musicUrl: input.musicUrl
            }}
          />
        );
      })}
    </>
  );
};

// 🎬 Full story composed of all pages in sequence
export const DynamicStory = ({ pages,videoUrl,musicUrl }: { pages: AMPStoryData['pages'];  videoUrl?: string;  musicUrl?: string; }) => {
  const durations = pages.map((p) => {
    const voiceOverSec = p.voiceOverDuration ?? 5;
    const voiceFrames = Math.ceil(voiceOverSec * FPS);
    return TEXT_ANIMATION_FRAMES + voiceFrames + POST_AUDIO_HOLD;
  });

  let startFrame = 0;

  return (
    <AbsoluteFill>
      {pages.map((page, index) => {
        const duration = durations[index];
        const sequence = (
          <Sequence
            key={page.id}
            from={startFrame}
            durationInFrames={duration}
          >
            <AdvancedScene
              page={page}
              index={index}
              audioOffset={startFrame}
              voiceOverUrl={page.voiceOverAudio}
              duration={duration}
              totalSlides={pages.length}
              videoUrl={page.id === 'custom_slide' ? videoUrl : undefined} 
              musicUrl={musicUrl}
            />
          </Sequence>
        );
        startFrame += duration;
        return sequence;
      })}
    </AbsoluteFill>
  );
};



// import {
//   Composition,
//   Sequence,
//   AbsoluteFill,
//   Audio,
//   getInputProps,
// } from 'remotion';
// import { AdvancedScene } from './Url_Scraped_Stories/Scene';
// import type { AMPStoryData } from './types/ampStoryData';
// import backgroundMusic from '../public/backgroundMusic.mp3';

// const FPS = 30;
// const TEXT_REVEAL_BUFFER = 45; // frames (1.5 sec for text reveal)
// const POST_VOICEOVER_BUFFER = 30; // frames (1 sec after voice-over)
// const SLIDE_OVERLAP = 15; // frames to overlap slides

// export const RemotionVideo = () => {
//   const input = getInputProps() as Partial<AMPStoryData> & {
//     page?: AMPStoryData['pages'][0];
//     index?: number;
//     audioOffset?: number;
//   };

//   const isFullStory = Array.isArray(input.pages);
//   const pages = input.pages || (input.page ? [input.page] : []);

//   if (!pages.length) {
//     throw new Error('❌ No pages or page data provided to RemotionVideo');
//   }

//   const baseIndex = input.index ?? 0;

//   const durations = pages.map((p) => {
//     const voiceDurationFrames = Math.ceil((p.voiceOverDuration || 0) * FPS);
//     const total = TEXT_REVEAL_BUFFER + voiceDurationFrames + POST_VOICEOVER_BUFFER;
//     return Math.max(total, 90); // Ensure a minimum slide duration
//   });

//   const totalDuration = durations.reduce((sum, dur, i) => {
//     return sum + (i === 0 ? dur : dur - SLIDE_OVERLAP);
//   }, 0);

//   return (
//     <>
//       {isFullStory && (
//         <Composition
//           id="FullStory"
//           component={DynamicStory}
//           durationInFrames={totalDuration}
//           fps={FPS}
//           width={720}
//           height={1280}
//           defaultProps={{ pages }}
//         />
//       )}

//       {pages.map((page, i) => {
//         const index = baseIndex + i;
//         const durationInFrames = durations[i];

//         return (
//           <Composition
//             key={`Slide${index + 1}`}
//             id={`Slide${index + 1}`}
//             component={AdvancedScene}
//             durationInFrames={durationInFrames}
//             fps={FPS}
//             width={720}
//             height={1280}
//             defaultProps={{
//               page,
//               index,
//               audioOffset: 0,
//               voiceOverUrl: page.voiceOverAudio,
//               duration: durationInFrames,
//             }}
//           />
//         );
//       })}
//     </>
//   );
// };

// export const DynamicStory = ({ pages }: { pages: AMPStoryData['pages'] }) => {
//   const durations = pages.map((p) => {
//     const voiceDurationFrames = Math.ceil((p.voiceOverDuration || 0) * FPS);
//     return Math.max(TEXT_REVEAL_BUFFER + voiceDurationFrames + POST_VOICEOVER_BUFFER, 90);
//   });

//   let startFrame = 0;

//   return (
//     <AbsoluteFill>
//       {/* ✅ Global Background Music across slides */}
//       <Audio src={backgroundMusic} startFrom={0} volume={0.3} />

//       {pages.map((page, index) => {
//         const duration = durations[index];
//         const voiceOverStart = TEXT_REVEAL_BUFFER;
//         const audioOffset = startFrame;

//         const sequence = (
//           <Sequence
//             key={page.id}
//             from={startFrame}
//             durationInFrames={duration}
//           >
//             <AdvancedScene
//               page={page}
//               index={index}
//               audioOffset={0} // This is for background music; managed globally now
//               voiceOverUrl={page.voiceOverAudio}
//               duration={duration}
//               localFrame={0} // Will use current frame in scene
//               voiceStartFrame={voiceOverStart}
//             />
//           </Sequence>
//         );

//         startFrame += duration - SLIDE_OVERLAP; // Add overlap
//         return sequence;
//       })}
//     </AbsoluteFill>
//   );
// };
