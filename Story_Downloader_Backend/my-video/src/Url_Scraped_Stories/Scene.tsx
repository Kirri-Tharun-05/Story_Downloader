// import {
//   AbsoluteFill,
//   Img,
//   interpolate,
//   useCurrentFrame,
//   Easing,
//   Audio,
// } from 'remotion';
// import type { AMPStoryPage } from '../types/ampStoryData';
// import quort from '../../public/quort.webp';
// import logo from '../../public/logo.webp';
// import image1 from '../../public/1.webp';

// import backgroundMusic from '../../public/backgroundMusic.mp3';

// export interface SceneProps {
//   page: AMPStoryPage;
//   index: number;
//   audioOffset: number; // Audio offset passed as prop
// }

// export const Scene: React.FC<SceneProps> = ({ page, index, audioOffset }) => {
//   const frame = useCurrentFrame();

//   // Set scale animation for background image
//   const scale = interpolate(frame, [0, 100], [1, 1.1], {
//     extrapolateRight: 'clamp',
//     easing: Easing.bezier(0.22, 1, 0.36, 1),
//   });

//   // Text animation configuration
//   const initialTextDelay = 10; // Delay before text starts animating
//   const delayPerLine = 25;
//   const animationDuration = 30;

//   return (
//     <AbsoluteFill style={{ backgroundColor: 'black' }}>
//       {/* Background Image */}
//       <Img
//         src={image1}
//         style={{
//           position: 'absolute',
//           width: '100%',
//           height: '100%',
//           objectFit: 'cover',
//           transform: `scale(${scale})`,
//           opacity: 0.6,
//         }}
//       />

//       {/* Gradient Overlay */}
//       <div
//         style={{
//           position: 'absolute',
//           bottom: 0,
//           width: '100%',
//           height: '50%',
//           backgroundImage:
//             'linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0) 100%)',
//           pointerEvents: 'none',
//         }}
//       />

//       {/* Add Audio with startFrom */}
//       <Audio
//         src={backgroundMusic}
//         startFrom={audioOffset} // Set the audio offset for each slide
//         loop={false} // Music won't loop, but you can set this to true if you want
//       />

//       {/* Text and Quote */}
//       <div
//         style={{
//           position: 'absolute',
//           bottom: 20,
//           width: '100%',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           padding: '3rem',
//           zIndex: 2,
//         }}
//       >
//         {/* Quote Icon */}
//         <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
//           <Img
//             src={quort}
//             style={{
//               width: 80,
//               height: 80,
//               opacity: interpolate(frame, [initialTextDelay, initialTextDelay + 20], [0, 1], {
//                 extrapolateRight: 'clamp',
//                 easing: Easing.bezier(0.22, 1, 0.36, 1),
//               }),
//               transform: `translateY(${interpolate(
//                 frame,
//                 [initialTextDelay, initialTextDelay + 20],
//                 [30, 0],
//                 { extrapolateRight: 'clamp', easing: Easing.bezier(0.22, 1, 0.36, 1) }
//               )}px)`,
//             }}
//           />
//         </div>

//         {/* Animated Text Lines */}
//         {page.texts.map((text, i) => {
//           const start = initialTextDelay + i * delayPerLine;
//           const end = start + animationDuration;

//           const opacity = interpolate(frame, [start, end], [0, 1], {
//             extrapolateRight: 'clamp',
//             easing: Easing.bezier(0.22, 1, 0.36, 1),
//           });

//           const translateY = interpolate(frame, [start, end], [20, 0], {
//             extrapolateRight: 'clamp',
//             easing: Easing.bezier(0.22, 1, 0.36, 1),
//           });

//           return (
//             <div
//               key={i}
//               style={{
//                 fontFamily: text.tag.startsWith('h') ? 'sans-serif' : 'cursive',
//                 color: 'white',
//                 fontSize: text.tag.startsWith('h') ? 37 : '2rem',
//                 lineHeight: '1.4',
//                 textAlign: 'center',
//                 margin: 10,
//                 padding: '0 0 2rem 0',
//                 textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
//                 fontWeight: text.tag.startsWith('h') ? 'bold' : 'normal',
//                 opacity,
//                 transform: `translateY(${translateY}px)`,
//               }}
//             >
//               {text.content}
//             </div>
//           );
//         })}
//       </div>

//       {/* Logo */}
//       <div
//         style={{
//           position: 'absolute',
//           top: 20,
//           right: 20,
//           zIndex: 999,
//         }}
//       >
//         <Img
//           src={logo}
//           style={{
//             width: '50%',
//           }}
//         />
//       </div>
//     </AbsoluteFill>
//   );
// };



// Template 1



// import {
//   AbsoluteFill,
//   Img,
//   interpolate,
//   useCurrentFrame,
//   Easing,
//   Audio,
// } from 'remotion';
// import type { AMPStoryPage } from '../types/ampStoryData';
// import quort from '../../public/quort.webp';
// import fallbackImage from '../../public/1.webp'; // optional backup image
// import backgroundMusic from '../../public/backgroundMusic.mp3';

// export interface SceneProps {
//   page: AMPStoryPage;
//   index: number;
//   audioOffset: number;
// }

// export const Scene: React.FC<SceneProps> = ({ page, index, audioOffset }) => {
//   const frame = useCurrentFrame();

//   const scale = interpolate(frame, [0, 100], [1, 1.1], {
//     extrapolateRight: 'clamp',
//     easing: Easing.bezier(0.22, 1, 0.36, 1),
//   });

//   // const backgroundImage = page.images?.[0]?.src;
//   // const logoImage = page.images?.[1]?.src;
//   // const layout = page.images?.[0]?.layout ?? 'fill';

//   // const imgStyle =
//   //   layout === 'fill'
//   //     ? {
//   //         position: 'absolute',
//   //         width: '100%',
//   //         height: '100%',
//   //         objectFit: 'cover',
//   //       }
//   //     : {
//   //         width: '100%',
//   //         height: 'auto',
//   //         objectFit: 'contain',
//   //       };

//   // Filter out only the relevant images
//   const backgroundImage = page.images.find(
//     (img) =>
//       img.alt !== 'white-quotation.png' &&
//       !img.alt?.toLowerCase().includes('suvichaar')
//   );

//   const logoImage = page.images.find(
//     (img) => img.alt?.toLowerCase().includes('suvichaar')
//   );

//   // Style based on layout
//   const layout = backgroundImage?.layout ?? 'fill';

//   const imgStyle =
//     layout === 'fill'
//       ? {
//         position: 'absolute',
//         width: '100%',
//         height: '100%',
//         objectFit: 'cover',
//       }
//       : {
//         width: '100%',
//         height: 'auto',
//         objectFit: 'contain',
//       };


//   const initialTextDelay = 10;
//   const delayPerLine = 25;
//   const animationDuration = 30;

//   return (
//     <AbsoluteFill style={{ backgroundColor: 'black' }}>
//       {/* ✅ Dynamic Background with fallback handling */}
//       {backgroundImage ? (
//         // <Img
//         //   src={backgroundImage}
//         //   fallback={fallbackImage}
//         <Img
//           src={backgroundImage?.src ?? fallbackImage}
//           fallback={fallbackImage}
//           style={{
//             ...imgStyle,
//             transform: `scale(${scale})`,
//             opacity: 0.6,
//           }}
//         />
//       ) : (
//         <div
//           style={{
//             ...imgStyle,
//             backgroundColor: 'black',
//             opacity: 0.6,
//           }}
//         />
//       )}

//       {/* ✅ Gradient Overlay */}
// <div
//   style={{
//     position: 'absolute',
//     bottom: 0,
//     width: '100%',
//     height: '50%',
//     backgroundImage:
//       'linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0) 100%)',
//     pointerEvents: 'none',
//   }}
// />

//       {/* ✅ Background Audio */}
//       <Audio src={backgroundMusic} startFrom={audioOffset} loop={false} />

//       {/* ✅ Text Block with Quote */}
//       <div
//         style={{
//           position: 'absolute',
//           bottom: 20,
//           width: '100%',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           padding: '3rem',
//           zIndex: 2,
//         }}
//       >
//         {/* Quote Icon */}
//         <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
//           <Img
//             src={quort}
//             style={{
//               width: 80,
//               height: 80,
//               opacity: interpolate(frame, [initialTextDelay, initialTextDelay + 20], [0, 1], {
//                 extrapolateRight: 'clamp',
//                 easing: Easing.bezier(0.22, 1, 0.36, 1),
//               }),
//               transform: `translateY(${interpolate(
//                 frame,
//                 [initialTextDelay, initialTextDelay + 20],
//                 [30, 0],
//                 { extrapolateRight: 'clamp', easing: Easing.bezier(0.22, 1, 0.36, 1) }
//               )}px)`,
//             }}
//           />
//         </div>

//         {/* Animated Text */}
//         {page.texts.map((text, i) => {
//           const start = initialTextDelay + i * delayPerLine;
//           const end = start + animationDuration;

//           const opacity = interpolate(frame, [start, end], [0, 1], {
//             extrapolateRight: 'clamp',
//             easing: Easing.bezier(0.22, 1, 0.36, 1),
//           });

//           const translateY = interpolate(frame, [start, end], [20, 0], {
//             extrapolateRight: 'clamp',
//             easing: Easing.bezier(0.22, 1, 0.36, 1),
//           });

//           return (
//             <div
//               key={i}
//               style={{
//                 fontFamily: text.tag.startsWith('h') ? 'sans-serif' : 'cursive',
//                 color: 'white',
//                 fontSize: text.tag.startsWith('h') ? 37 : '2rem',
//                 lineHeight: '1.4',
//                 textAlign: 'center',
//                 margin: 10,
//                 padding: '0 0 2rem 0',
//                 textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
//                 fontWeight: text.tag.startsWith('h') ? 'bold' : 'normal',
//                 opacity,
//                 transform: `translateY(${translateY}px)`,
//               }}
//             >
//               {text.content}
//             </div>
//           );
//         })}
//       </div>

//       {/* ✅ Dynamic Logo (Optional) */}
// <div
//   style={{
//     position: 'absolute',
//     top: 20,
//     right: 20,
//     zIndex: 999,
//   }}
// >
//   {logoImage && (
//     // <Img
//     //   src={logoImage}
//     //   fallback={fallbackImage}
//     <Img
//       src={logoImage?.src ?? fallbackImage}
//       fallback={fallbackImage}
//       style={{
//         width: '50%',
//       }}
//     />
//   )}
// </div>
//     </AbsoluteFill>
//   );
// };



// Template 2


// import {
//   AbsoluteFill,
//   Audio,
//   Img,
//   interpolate,
//   useCurrentFrame,
//   Easing,
// } from 'remotion';
// import type { AMPStoryPage } from '../types/ampStoryData';
// import fallbackImage from '../../public/1.webp';
// import backgroundMusic from '../../public/backgroundMusic.mp3';
// import quort from '../../public/quort.webp';

// export interface SceneProps {
//   page: AMPStoryPage;
//   index: number;
//   audioOffset: number;
//   localFrame?: number;
//   voiceOverUrl?: string;
//   duration?: number; // in frames
// }

// export const AdvancedScene: React.FC<SceneProps> = ({
//   page,
//   index,
//   audioOffset,
//   localFrame,
//   voiceOverUrl,
//   duration = 150,
// }) => {
//   const globalFrame = useCurrentFrame();
//   const frame = localFrame ?? globalFrame;

//   const backgroundImage = page.images.find((img) => img.alt !== 'white-quotation.png');
//   const logoImage = page.images.find((img) => img.alt?.toLowerCase().includes('suvichaar'));
//   const layout = backgroundImage?.layout ?? 'fill';


//   // extracting Authorname
//   const rawAuthorText = page.texts.find((text) => text.tag === 'p')?.content || '';
//   const authorText = rawAuthorText.replace(/^[-–—]\s*/, '');

//   const imgStyle = layout === 'fill'
//     ? { position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }
//     : { width: '100%', height: 'auto', objectFit: 'contain' };

//   const whiteFade = interpolate(frame, [0, 20], [1, 0], { extrapolateRight: 'clamp' });
//   const imageOpacity = index === 0
//     ? interpolate(frame, [0, 30], [0, 1], { extrapolateRight: 'clamp' })
//     : 1;

//   const imageTranslateX = index === 0
//     ? 0
//     : interpolate(frame, [0, 30, duration - 30, duration], [100, 0, 0, -100], {
//       extrapolate: 'clamp',
//       easing: Easing.bezier(0.22, 1, 0.36, 1),
//     });

//   const textTranslateEnter = interpolate(frame, [15, 45], [50, 0], {
//     extrapolateRight: 'clamp',
//     easing: Easing.bezier(0.22, 1, 0.36, 1),
//   });

//   const textTranslateExit = interpolate(
//     frame,
//     [duration - 30, duration],
//     [0, -100],
//     {
//       extrapolate: 'clamp',
//       easing: Easing.bezier(0.22, 1, 0.36, 1),
//     }
//   );

//   const textTranslateX = frame < duration - 30 ? textTranslateEnter : textTranslateExit;

//   const textOpacity = interpolate(
//     frame,
//     [15, 45, duration - 30, duration],
//     [0, 1, 1, 0],
//     {
//       extrapolate: 'clamp',
//       easing: Easing.bezier(0.42, 0, 0.58, 1),
//     }
//   );

//   return (
//     <AbsoluteFill style={{ backgroundColor: 'black' }}>
//       {/* ✅ Background image */}
//       <div
//         style={{
//           ...imgStyle,
//           transform: `translateX(${imageTranslateX}%)`,
//           opacity: imageOpacity,
//         }}
//       >

//         <Img
//           src={backgroundImage?.src ?? fallbackImage}
//           fallback={fallbackImage}
//           style={imgStyle}
//         />
//         {/* ✅ Bottom gradient overlay */}
//         <div
//           style={{
//             position: 'absolute',
//             bottom: 0,
//             width: '100%',
//             height: '50%',
//             backgroundImage:
//               'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))',
//             pointerEvents: 'none',
//           }}
//         />
//       </div>

//       {/* ✅ First slide white overlay */}
//       {index === 0 && (
//         <div
//           style={{
//             ...imgStyle,
//             backgroundColor: 'white',
//             opacity: whiteFade,
//             zIndex: 10,
//           }}
//         />
//       )}

//       {/* 🎵 Background Music */}
//       <Audio src={backgroundMusic} startFrom={audioOffset} volume={0.3} />

//       {/* 🗣️ Voice-over */}
//       {voiceOverUrl && <Audio src={voiceOverUrl} startFrom={0} volume={1} />}

//       {/* ✅ Text + quote */}
//       {/* <div
//         style={{
//           position: 'absolute',
//           bottom: 40,
//           left: 0,
//           right: 0,
//           padding: '3rem',
//           zIndex: 20,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           transform: `translateX(${textTranslateX}%)`,
//           opacity: textOpacity,
//         }}
//       >
//         <Img src={quort} style={{ width: 60, height: 60, marginBottom: 20 }} />
//         {page.texts.map((text, i) => (
//           <div
//             key={i}
//             style={{
//               fontFamily: 'serif',
//               fontSize: text.tag.startsWith('h') ? 38 : 28,
//               fontWeight: text.tag.startsWith('h') ? 'bold' : 'normal',
//               color: 'white',
//               textAlign: 'center',
//               margin: '1rem 0',
//               lineHeight: 1.4,
//               textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
//             }}
//           >
//             {text.content}
//           </div>
//         ))}
//       </div> */}

//       {/* ✅ Text + quote - now mid-right aligned like first screenshot */}
//       {/* ✅ Bottom-left aligned text like screenshot */}
//       <div
//         style={{
//           position: 'absolute',
//           bottom: '12%',
//           left: '5%',
//           transform: `translateX(${textTranslateX}%)`,
//           padding: '0 2rem',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'flex-start',
//           textAlign: 'left',
//           zIndex: 20,
//           opacity: textOpacity,
//         }}
//       >
//         {/* Quotation icon */}
//         {/* <Img src={quort} style={{ width: '100', height: '100', marginBottom: 10, transform: 'rotate(180deg)' }} /> */}
//         {/* <div style={{ whiteSpace:'nowrap' }}>
//         <Img
//           src={quort}
//           style={{
//             position: 'absolute',
//             display: 'inline-block',
//             top: -230,
//             left: -70,
//             width: '100',
//             height: '100',
//             transform: 'rotate(180deg)',
//             zIndex: 100, // Behind the quote text
//             opacity: 1, // Make it watermark-style
//           }}
//         />

//           <div
//             style={{
//               display: 'inline-block',
//               verticalAlign: 'middle',
//               fontFamily: 'Mukta, sans-serif',
//               fontSize: 24,
//               fontWeight: 500,
//               color: 'white',
//               textTransform: 'uppercase',
//               textShadow: '1px 1px 3px rgba(0,0,0,0.4)',
//             }}
//           >
//             {authorText}
//           </div>
//         </div> */}

//         <div
//           style={{
//             position: 'relative', // Needed to position children absolutely inside
//             marginBottom: '1rem',
//           }}
//         >
//           {/* Quote Image - absolutely placed */}
//           <Img
//             src={quort}
//             style={{
//               position: 'absolute',
//               top: -170,
//               left: -100,
//               width: '100',
//               height: '100',
//               transform: 'rotate(180deg)',
//               zIndex: 1, // Behind text
//               opacity: 1,
//               pointerEvents: 'none', // Allow clicks to pass through if needed
//             }}
//           />

//           {/* Author Text - placed normally */}
//           <div
//             style={{
//               fontFamily: 'Mukta, sans-serif',
//               fontSize: 40,
//               fontWeight: 500,
//               color: 'white',
//               textTransform: 'uppercase',
//               textShadow: '1px 1px 3px rgba(0,0,0,0.4)',
//               position: 'relative', // Stacks on top of image
//               zIndex: 2,
//               paddingLeft: '8rem',
//               marginTop: '-1.5rem',
//               // marginBottom:'2rem' // shift text to avoid overlapping non-transparent part
//             }}
//           >
//             {authorText}
//           </div>
//         </div>



//         {/* Render each text */}
//         {/* {page.texts.map((text, i) => (
//           <div
//             key={i}
//             style={{
//               fontFamily: 'Mukta, sans-serif',
//               fontSize: text.tag.startsWith('h') ? 45 : 35, // Author name smaller
//               fontWeight: text.tag.startsWith('h') ? 700 : 500,
//               color: 'white',
//               margin: i === 0 ? '0 0 0.5rem 0' : '0.5rem 0',
//               lineHeight: 1.4,
//               textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
//               letterSpacing: text.tag.startsWith('h') ? '0.05em' : '0.03em',
//               textTransform: text.tag.startsWith('h') ? 'uppercase' : 'none',
//             }}
//           >
//             {text.content}
//           </div>
//         ))} */}


//         {page.texts
//           .filter((text) => {
//             // Keep everything except <p> tags for pages other than the first
//             if (index !== 0 && text.tag === 'p') {
//               return false;
//             }
//             return true;
//           })
//           .map((text, i) => (
//             <div
//               key={i}
//               style={{
//                 fontFamily: 'Mukta, sans-serif',
//                 fontSize: text.tag.startsWith('h') ? 43 : 35,
//                 fontWeight: text.tag.startsWith('h') ? 700 : 500,
//                 color: 'white',
//                 margin: i === 0 ? '0 0 0.5rem 0' : '0.5rem 0',
//                 lineHeight: 1.4,
//                 textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
//                 letterSpacing: text.tag.startsWith('h') ? '0.05em' : '0.03em',
//                 textTransform: text.tag.startsWith('h') ? 'uppercase' : 'none',
//               }}
//             >
//               {text.content}
//             </div>
//           ))}


//       </div>




//       {/* ✅ Logo */}
//       <div
//         style={{
//           position: 'absolute',
//           top: 70,
//           right: 150,
//           zIndex: 999,
//         }}
//       >
//         {logoImage && (
//           <Img
//             src={logoImage?.src ?? fallbackImage}
//             fallback={fallbackImage}
//             style={{ width: '70%' }}
//           />
//         )}
//       </div>
//     </AbsoluteFill>
//   );
// };




// import {
//   AbsoluteFill,
//   Audio,
//   Img,
//   interpolate,
//   useCurrentFrame,
//   Easing,
// } from 'remotion';
// import type { AMPStoryPage } from '../types/ampStoryData';
// import fallbackImage from '../../public/1.webp';
// import backgroundMusic from '../../public/backgroundMusic.mp3';
// import quort from '../../public/quort.webp';

// export interface SceneProps {
//   page: AMPStoryPage;
//   index: number;
//   audioOffset: number;
//   localFrame?: number;
//   voiceOverUrl?: string;
//   duration?: number; // in frames
// }

// export const AdvancedScene: React.FC<SceneProps> = ({
//   page,
//   index,
//   audioOffset,
//   localFrame,
//   voiceOverUrl,
//   duration = 150,
// }) => {
//   const globalFrame = useCurrentFrame();
//   const frame = localFrame ?? globalFrame;

//   const backgroundImage = page.images.find((img) => img.alt !== 'white-quotation.png');
//   const logoImage = page.images.find((img) => img.alt?.toLowerCase().includes('suvichaar'));
//   const layout = backgroundImage?.layout ?? 'fill';

//   const rawAuthorText = page.texts.find((text) => text.tag === 'p')?.content || '';
//   const authorText = rawAuthorText.replace(/^[-–—]\s*/, '');

//   const imgStyle = layout === 'fill'
//     ? { position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }
//     : { width: '100%', height: 'auto', objectFit: 'contain' };

//   const whiteFade = interpolate(frame, [0, 20], [1, 0], { extrapolateRight: 'clamp' });
//   const imageOpacity = index === 0
//     ? interpolate(frame, [0, 30], [0, 1], { extrapolateRight: 'clamp' })
//     : 1;

//   const imageTranslateX = index === 0
//     ? 0
//     : interpolate(frame, [0, 30, duration - 30, duration], [100, 0, 0, -100], {
//       extrapolate: 'clamp',
//       easing: Easing.bezier(0.22, 1, 0.36, 1),
//     });

//   const textTranslateEnter = interpolate(frame, [15, 45], [50, 0], {
//     extrapolateRight: 'clamp',
//     easing: Easing.bezier(0.22, 1, 0.36, 1),
//   });

//   const textTranslateExit = interpolate(frame, [duration - 30, duration], [0, -100], {
//     extrapolate: 'clamp',
//     easing: Easing.bezier(0.22, 1, 0.36, 1),
//   });

//   const textTranslateX = frame < duration - 30 ? textTranslateEnter : textTranslateExit;

//   const textOpacity = interpolate(
//     frame,
//     [15, 45, duration - 30, duration],
//     [0, 1, 1, 0],
//     {
//       extrapolate: 'clamp',
//       easing: Easing.bezier(0.42, 0, 0.58, 1),
//     }
//   );

//   return (
//     <AbsoluteFill style={{ backgroundColor: 'black' }}>
//       <div
//         style={{
//           ...imgStyle,
//           transform: `translateX(${imageTranslateX}%)`,
//           opacity: imageOpacity,
//         }}
//       >
//         <Img src={backgroundImage?.src ?? fallbackImage} fallback={fallbackImage} style={imgStyle} />
//         <div
//           style={{
//             position: 'absolute',
//             bottom: 0,
//             width: '100%',
//             height: '50%',
//             backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))',
//             pointerEvents: 'none',
//           }}
//         />
//       </div>

//       {index === 0 && (
//         <div
//           style={{
//             ...imgStyle,
//             backgroundColor: 'white',
//             opacity: whiteFade,
//             zIndex: 10,
//           }}
//         />
//       )}

//       <Audio src={backgroundMusic} startFrom={audioOffset} volume={0.3} />
//       {voiceOverUrl && <Audio src={voiceOverUrl} startFrom={0} volume={1} />}

//       {index === 0 ? (
//         <div
//           style={{
//             position: 'absolute',
//             bottom: '15%',
//             left: 0,
//             right: 0,
//             padding: '3rem',
//             zIndex: 20,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             transform: `translateX(${textTranslateX}%)`,
//             opacity: textOpacity,
//           }}
//         >
//           {/* Quote image with transparent space, placed behind */}
//           <Img
//             src={quort}
//             style={{
//               position: 'absolute',
//               top: -150, // adjust to control overlap
//               width: 230,
//               height: 230,
//               transform: 'rotate(180deg)',
//               zIndex: 1,
//               opacity: 1,
//               pointerEvents: 'none',
//             }}
//           />

//           {/* Text over the transparent part */}
//           {page.texts
//             .filter((text) => !text.tag.startsWith('p')) // exclude all <p> tags
//             .map((text, i) => (
//               <div
//                 key={i}
//                 style={{
//                   fontFamily: 'Mukta, sans-serif',
//                   fontSize: text.tag.startsWith('h') ? 43 : 35,
//                   fontWeight: text.tag.startsWith('h') ? 700 : 500,
//                   color: 'white',
//                   textAlign: 'center',
//                   margin: '1rem 0',
//                   lineHeight: 1.4,
//                   textTransform: 'uppercase',
//                   textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
//                   zIndex: 2,
//                   position: 'relative',
//                 }}
//               >
//                 {text.content}
//               </div>
//             ))}
//         </div>
//       ) : (
//         <div
//           style={{
//             position: 'absolute',
//             bottom: '20%',
//             left: '5%',
//             transform: `translateX(${textTranslateX}%)`,
//             padding: '0 2rem',
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'flex-start',
//             textAlign: 'left',
//             zIndex: 20,
//             opacity: textOpacity,
//           }}
//         >
//           <div
//             style={{
//               position: 'relative',
//               marginBottom: '1rem',
//             }}
//           >
//             <Img
//               src={quort}
//               style={{
//                 position: 'absolute',
//                 top: -120,
//                 left: -80,
//                 width: 230,
//                 height: 230,
//                 transform: 'rotate(180deg)',
//                 zIndex: 1,
//                 opacity: 1,
//                 pointerEvents: 'none',
//               }}
//             />
//             <div
//               style={{
//                 fontFamily: 'Mukta, sans-serif',
//                 fontSize: 40,
//                 fontWeight: 500,
//                 color: 'white',
//                 textTransform: 'uppercase',
//                 textShadow: '1px 1px 3px rgba(0,0,0,0.4)',
//                 position: 'relative',
//                 zIndex: 2,
//                 paddingLeft: '6rem',
//                 marginTop: '-1.5rem',
//               }}
//             >
//               {authorText}
//             </div>
//           </div>
//           {page.texts
//             .filter((text) => !(index !== 0 && text.tag === 'p'))
//             .map((text, i) => (
//               <div
//                 key={i}
//                 style={{
//                   fontFamily: 'Mukta, sans-serif',
//                   fontSize: text.tag.startsWith('h') ? 36 : 35,
//                   fontWeight: text.tag.startsWith('h') ? 700 : 500,
//                   color: 'white',
//                   margin: i === 0 ? '0 0 0.5rem 0' : '0.5rem 0',
//                   lineHeight: 1.4,
//                   textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
//                   letterSpacing: text.tag.startsWith('h') ? '0.05em' : '0.03em',
//                   textTransform: text.tag.startsWith('h') ? 'uppercase' : 'none',
//                 }}
//               >
//                 {text.content}
//               </div>
//             ))}
//         </div>
//       )}

//       <div
//         style={{
//           position: 'absolute',
//           top: 70,
//           right: 150,
//           zIndex: 999,
//         }}
//       >
//         {logoImage && (
//           <Img
//             src={logoImage?.src ?? fallbackImage}
//             fallback={fallbackImage}
//             style={{ width: '70%' }}
//           />
//         )}
//       </div>
//     </AbsoluteFill>
//   );
// };

// import {
//   AbsoluteFill,
//   Audio,
//   Img,
//   interpolate,
//   useCurrentFrame,
//   Easing,
// } from 'remotion';
// import type { AMPStoryPage } from '../types/ampStoryData';
// import fallbackImage from '../../public/1.webp';
// import backgroundMusic from '../../public/backgroundMusic.mp3';
// import quort from '../../public/quort.webp';

// export interface SceneProps {
//   page: AMPStoryPage;
//   index: number;
//   audioOffset: number;
//   localFrame?: number;
//   voiceOverUrl?: string;
//   duration?: number; // in frames
//   totalSlides: number; // added prop
// }

// export const AdvancedScene: React.FC<SceneProps> = ({
//   page,
//   index,
//   audioOffset,
//   localFrame,
//   voiceOverUrl,
//   duration = 150,
//   totalSlides,
// }) => {
//   // 🔁 Skip rendering the last slide
//   if (index === totalSlides - 1) {
//     return null;
//   }

//   const globalFrame = useCurrentFrame();
//   const frame = localFrame ?? globalFrame;

//   const backgroundImage = page.images.find((img) => img.alt !== 'white-quotation.png');
//   const logoImage = page.images.find((img) =>
//     img.alt?.toLowerCase().includes('suvichaar')
//   );
//   const layout = backgroundImage?.layout ?? 'fill';

//   const rawAuthorText = page.texts.find((text) => text.tag === 'p')?.content || '';
//   const authorText = rawAuthorText.replace(/^[-–—]\s*/, '');

//   const imgStyle =
//     layout === 'fill'
//       ? {
//           position: 'absolute',
//           width: '100%',
//           height: '100%',
//           objectFit: 'cover',
//         }
//       : { width: '100%', height: 'auto', objectFit: 'contain' };

//   const whiteFade = interpolate(frame, [0, 20], [1, 0], {
//     extrapolateRight: 'clamp',
//   });

//   const imageOpacity =
//     index === 0
//       ? interpolate(frame, [0, 30], [0, 1], { extrapolateRight: 'clamp' })
//       : 1;

//   const imageTranslateX =
//     index === 0
//       ? 0
//       : interpolate(frame, [0, 30, duration - 30, duration], [100, 0, 0, -100], {
//           extrapolate: 'clamp',
//           easing: Easing.bezier(0.22, 1, 0.36, 1),
//         });

//   const textTranslateEnter = interpolate(frame, [15, 45], [50, 0], {
//     extrapolateRight: 'clamp',
//     easing: Easing.bezier(0.22, 1, 0.36, 1),
//   });

//   const textTranslateExit = interpolate(frame, [duration - 30, duration], [0, -100], {
//     extrapolate: 'clamp',
//     easing: Easing.bezier(0.22, 1, 0.36, 1),
//   });

//   const textTranslateX = frame < duration - 30 ? textTranslateEnter : textTranslateExit;

//   const textOpacity = interpolate(
//     frame,
//     [15, 45, duration - 30, duration],
//     [0, 1, 1, 0],
//     {
//       extrapolate: 'clamp',
//       easing: Easing.bezier(0.42, 0, 0.58, 1),
//     }
//   );

//   return (
//     <AbsoluteFill style={{ backgroundColor: 'black' }}>
//       <div
//         style={{
//           ...imgStyle,
//           transform: `translateX(${imageTranslateX}%)`,
//           opacity: imageOpacity,
//         }}
//       >
//         <Img
//           src={backgroundImage?.src ?? fallbackImage}
//           fallback={fallbackImage}
//           style={imgStyle}
//         />
//         <div
//           style={{
//             position: 'absolute',
//             bottom: 0,
//             width: '100%',
//             height: '50%',
//             backgroundImage:
//               'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))',
//             pointerEvents: 'none',
//           }}
//         />
//       </div>

//       {index === 0 && (
//         <div
//           style={{
//             ...imgStyle,
//             backgroundColor: 'white',
//             opacity: whiteFade,
//             zIndex: 10,
//           }}
//         />
//       )}

//       <Audio src={backgroundMusic} startFrom={audioOffset} volume={0.3} />
//       {voiceOverUrl && <Audio src={voiceOverUrl} startFrom={0} volume={1} />}

//       {index === 0 ? (
//         <div
//           style={{
//             position: 'absolute',
//             bottom: '15%',
//             left: 0,
//             right: 0,
//             padding: '3rem',
//             zIndex: 20,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             transform: `translateX(${textTranslateX}%)`,
//             opacity: textOpacity,
//           }}
//         >
//           <Img
//             src={quort}
//             style={{
//               position: 'absolute',
//               top: -150,
//               width: 230,
//               height: 230,
//               transform: 'rotate(180deg)',
//               zIndex: 1,
//               opacity: 1,
//               pointerEvents: 'none',
//             }}
//           />

//           {page.texts
//             .filter((text) => !text.tag.startsWith('p'))
//             .map((text, i) => (
//               <div
//                 key={i}
//                 style={{
//                   fontFamily: 'Mukta, sans-serif',
//                   fontSize: text.tag.startsWith('h') ? 43 : 35,
//                   fontWeight: text.tag.startsWith('h') ? 700 : 500,
//                   color: 'white',
//                   textAlign: 'center',
//                   margin: '1rem 0',
//                   lineHeight: 1.4,
//                   textTransform: 'uppercase',
//                   textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
//                   zIndex: 2,
//                   position: 'relative',
//                 }}
//               >
//                 {text.content}
//               </div>
//             ))}
//         </div>
//       ) : (
//         <div
//           style={{
//             position: 'absolute',
//             bottom: '20%',
//             left: '5%',
//             transform: `translateX(${textTranslateX}%)`,
//             padding: '0 2rem',
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'flex-start',
//             textAlign: 'left',
//             zIndex: 20,
//             opacity: textOpacity,
//           }}
//         >
//           <div style={{ position: 'relative', marginBottom: '1rem' }}>
//             <Img
//               src={quort}
//               style={{
//                 position: 'absolute',
//                 top: -120,
//                 left: -80,
//                 width: 230,
//                 height: 230,
//                 transform: 'rotate(180deg)',
//                 zIndex: 1,
//                 opacity: 1,
//                 pointerEvents: 'none',
//               }}
//             />
//             <div
//               style={{
//                 fontFamily: 'Mukta, sans-serif',
//                 fontSize: 40,
//                 fontWeight: 500,
//                 color: 'white',
//                 textTransform: 'uppercase',
//                 textShadow: '1px 1px 3px rgba(0,0,0,0.4)',
//                 position: 'relative',
//                 zIndex: 2,
//                 paddingLeft: '6rem',
//                 marginTop: '-1.5rem',
//               }}
//             >
//               {authorText}
//             </div>
//           </div>
//           {page.texts
//             .filter((text) => !(index !== 0 && text.tag === 'p'))
//             .map((text, i) => (
//               <div
//                 key={i}
//                 style={{
//                   fontFamily: 'Mukta, sans-serif',
//                   fontSize: text.tag.startsWith('h') ? 36 : 35,
//                   fontWeight: text.tag.startsWith('h') ? 700 : 500,
//                   color: 'white',
//                   margin: i === 0 ? '0 0 0.5rem 0' : '0.5rem 0',
//                   lineHeight: 1.4,
//                   textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
//                   letterSpacing: text.tag.startsWith('h') ? '0.05em' : '0.03em',
//                   textTransform: text.tag.startsWith('h') ? 'uppercase' : 'none',
//                 }}
//               >
//                 {text.content}
//               </div>
//             ))}
//         </div>
//       )}

//       <div
//         style={{
//           position: 'absolute',
//           top: 70,
//           right: 150,
//           zIndex: 999,
//         }}
//       >
//         {logoImage && (
//           <Img
//             src={logoImage?.src ?? fallbackImage}
//             fallback={fallbackImage}
//             style={{ width: '70%' }}
//           />
//         )}
//       </div>
//     </AbsoluteFill>
//   );
// };


// import {
//   AbsoluteFill,
//   Audio,
//   Img,
//   interpolate,
//   useCurrentFrame,
//   Easing,
//   Video,
//   Sequence
// } from 'remotion';
// import type { AMPStoryPage } from '../types/ampStoryData';
// import fallbackImage from '../../public/1.webp';
// import backgroundMusic from '../../public/backgroundMusic.mp3';
// import quort from '../../public/quort.webp';

// export interface SceneProps {
//   page: AMPStoryPage;
//   index: number;
//   audioOffset: number;
//   localFrame?: number;
//   voiceOverUrl?: string;
//   duration?: number; // in frames
//   totalSlides: number; // added prop
// }

// export const AdvancedScene: React.FC<SceneProps> = ({
//   page,
//   index,
//   audioOffset,
//   localFrame,
//   voiceOverUrl,
//   duration = 150,
//   totalSlides,
// }) => {
//   const globalFrame = useCurrentFrame();
//   const frame = localFrame ?? globalFrame;

//   // ❌ Skip the actual last slide (11th slide if totalSlides is 11)
//   if (index === totalSlides - 1) {
//     return null;
//   }

//   // ✅ Custom final (10th) slide with video + fixed text
//   if (index === totalSlides - 2) {
//     return (
//       <AbsoluteFill style={{ backgroundColor: 'black' }}>
//         <Video
//           src="https://cdn.suvichaar.org/media/videos/portrait_857195-hd_1280_720_25fps.mp4"
//           startFrom={0}
//           endAt={duration}
//           playbackRate={1}
//           muted
//           loop
//           style={{
//             position: 'absolute',
//             width: '100%',
//             height: '100%',
//             objectFit: 'cover',
//           }}
//         />

//         <Audio
//           src="https://cdn.suvichaar.org/media/tts_407078a4ff494fb5bed8c35050ffd1a7.mp3"
//           volume={1}
//         />

//         <div
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//             alignItems: 'center',
//             padding: '2rem',
//             textAlign: 'center',
//             color: 'white',
//             fontFamily: 'Mukta, sans-serif',
//             textShadow: '2px 2px 6px rgba(0,0,0,0.6)',
//           }}
//         >
//           <div style={{ fontSize: 48, fontWeight: 700, marginBottom: '1rem' }}>
//             suvichaar
//           </div>
//           <div style={{ fontSize: 28, fontWeight: 600, marginBottom: '2rem' }}>
//             GET SUCH <br /> INSPIRATIONAL <br /> CONTENT
//           </div>
//           <div style={{ fontSize: 18, fontWeight: 500 }}>
//             LIKE | SUBSCRIBE | SHARE
//             <br />
//             WWW.SUVICHAAR.ORG
//           </div>
//         </div>
//       </AbsoluteFill>
//     );
//   }

//   const backgroundImage = page.images.find((img) => img.alt !== 'white-quotation.png');
//   const logoImage = page.images.find((img) =>
//     img.alt?.toLowerCase().includes('suvichaar')
//   );
//   const layout = backgroundImage?.layout ?? 'fill';

//   const rawAuthorText = page.texts.find((text) => text.tag === 'p')?.content || '';
//   const authorText = rawAuthorText.replace(/^[-–—]\s*/, '');

//   const imgStyle =
//     layout === 'fill'
//       ? {
//         position: 'absolute',
//         width: '100%',
//         height: '100%',
//         objectFit: 'cover',
//       }
//       : { width: '100%', height: 'auto', objectFit: 'contain' };

//   const whiteFade = interpolate(frame, [0, 20], [1, 0], {
//     extrapolateRight: 'clamp',
//   });

//   const imageOpacity =
//     index === 0
//       ? interpolate(frame, [0, 30], [0, 1], { extrapolateRight: 'clamp' })
//       : 1;

//   const imageTranslateX =
//     index === 0
//       ? 0
//       : interpolate(frame, [0, 30, duration - 30, duration], [100, 0, 0, -100], {
//         extrapolate: 'clamp',
//         easing: Easing.bezier(0.22, 1, 0.36, 1),
//       });

//   const textTranslateEnter = interpolate(frame, [15, 45], [50, 0], {
//     extrapolateRight: 'clamp',
//     easing: Easing.bezier(0.22, 1, 0.36, 1),
//   });

//   const textTranslateExit = interpolate(frame, [duration - 30, duration], [0, -100], {
//     extrapolate: 'clamp',
//     easing: Easing.bezier(0.22, 1, 0.36, 1),
//   });

//   const textTranslateX = frame < duration - 30 ? textTranslateEnter : textTranslateExit;

//   const textOpacity = interpolate(
//     frame,
//     [15, 45, duration - 30, duration],
//     [0, 1, 1, 0],
//     {
//       extrapolate: 'clamp',
//       easing: Easing.bezier(0.42, 0, 0.58, 1),
//     }
//   );

//   return (
//     <AbsoluteFill style={{ backgroundColor: 'black' }}>
//       <div
//         style={{
//           ...imgStyle,
//           transform: `translateX(${imageTranslateX}%)`,
//           opacity: imageOpacity,
//         }}
//       >
//         <Img
//           src={backgroundImage?.src ?? fallbackImage}
//           fallback={fallbackImage}
//           style={imgStyle}
//         />
//         <div
//           style={{
//             position: 'absolute',
//             bottom: 0,
//             width: '100%',
//             height: '50%',
//             backgroundImage:
//               'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))',
//             pointerEvents: 'none',
//           }}
//         />
//       </div>

//       {index === 0 && (
//         <div
//           style={{
//             ...imgStyle,
//             backgroundColor: 'white',
//             opacity: whiteFade,
//             zIndex: 10,
//           }}
//         />
//       )}

//       <Audio src={backgroundMusic} startFrom={audioOffset} volume={0.3} />
//       {/* {voiceOverUrl && <Audio src={voiceOverUrl} startFrom={0} volume={1} />} */}
//       {voiceOverUrl && (
//         <Sequence from={45}>
//           <Audio src={voiceOverUrl} startFrom={0} volume={1} />
//         </Sequence>
//       )}

//       {index === 0 ? (
//         <div
//           style={{
//             position: 'absolute',
//             bottom: '15%',
//             left: 0,
//             right: 0,
//             padding: '3rem',
//             zIndex: 20,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             transform: `translateX(${textTranslateX}%)`,
//             opacity: textOpacity,
//           }}
//         >
//           <Img
//             src={quort}
//             style={{
//               position: 'absolute',
//               top: -150,
//               width: 230,
//               height: 230,
//               transform: 'rotate(180deg)',
//               zIndex: 1,
//               opacity: 1,
//               pointerEvents: 'none',
//             }}
//           />

//           {page.texts
//             .filter((text) => !text.tag.startsWith('p'))
//             .map((text, i) => (
//               <div
//                 key={i}
//                 style={{
//                   fontFamily: 'Mukta, sans-serif',
//                   fontSize: text.tag.startsWith('h') ? 43 : 35,
//                   fontWeight: text.tag.startsWith('h') ? 700 : 500,
//                   color: 'white',
//                   textAlign: 'center',
//                   margin: '1rem 0',
//                   lineHeight: 1.4,
//                   textTransform: 'uppercase',
//                   textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
//                   zIndex: 2,
//                   position: 'relative',
//                 }}
//               >
//                 {text.content}
//               </div>
//             ))}
//         </div>
//       ) : (
//         <div
//           style={{
//             position: 'absolute',
//             bottom: '20%',
//             left: '5%',
//             transform: `translateX(${textTranslateX}%)`,
//             padding: '0 2rem',
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'flex-start',
//             textAlign: 'left',
//             zIndex: 20,
//             opacity: textOpacity,
//           }}
//         >
//           <div style={{ position: 'relative', marginBottom: '1rem' }}>
//             <Img
//               src={quort}
//               style={{
//                 position: 'absolute',
//                 top: -120,
//                 left: -80,
//                 width: 230,
//                 height: 230,
//                 transform: 'rotate(180deg)',
//                 zIndex: 1,
//                 opacity: 1,
//                 pointerEvents: 'none',
//               }}
//             />
//             <div
//               style={{
//                 fontFamily: 'Mukta, sans-serif',
//                 fontSize: 40,
//                 fontWeight: 500,
//                 color: 'white',
//                 textTransform: 'uppercase',
//                 textShadow: '1px 1px 3px rgba(0,0,0,0.4)',
//                 position: 'relative',
//                 zIndex: 2,
//                 paddingLeft: '6rem',
//                 marginTop: '-1.5rem',
//               }}
//             >
//               {authorText}
//             </div>
//           </div>
//           {page.texts
//             .filter((text) => !(index !== 0 && text.tag === 'p'))
//             .map((text, i) => (
//               <div
//                 key={i}
//                 style={{
//                   fontFamily: 'Mukta, sans-serif',
//                   fontSize: text.tag.startsWith('h') ? 36 : 35,
//                   fontWeight: text.tag.startsWith('h') ? 700 : 500,
//                   color: 'white',
//                   margin: i === 0 ? '0 0 0.5rem 0' : '0.5rem 0',
//                   lineHeight: 1.4,
//                   textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
//                   letterSpacing: text.tag.startsWith('h') ? '0.05em' : '0.03em',
//                   textTransform: text.tag.startsWith('h') ? 'uppercase' : 'none',
//                 }}
//               >
//                 {text.content}
//               </div>
//             ))}
//         </div>
//       )}

//       <div
//         style={{
//           position: 'absolute',
//           top: 70,
//           right: 150,
//           zIndex: 999,
//         }}
//       >
//         {logoImage && (
//           <Img
//             src={logoImage?.src ?? fallbackImage}
//             fallback={fallbackImage}
//             style={{ width: '70%' }}
//           />
//         )}
//       </div>
//     </AbsoluteFill>
//   );
// };



// import {
//   AbsoluteFill,
//   Audio,
//   Img,
//   interpolate,
//   useCurrentFrame,
//   Easing,
//   Video,
//   Sequence
// } from 'remotion';
// import type { AMPStoryPage } from '../types/ampStoryData';
// import fallbackImage from '../../public/1.webp';
// import backgroundMusic from '../../public/backgroundMusic.mp3';
// import quort from '../../public/quort.webp';

// export interface SceneProps {
//   page: AMPStoryPage;
//   index: number;
//   audioOffset: number;
//   localFrame?: number;
//   voiceOverUrl?: string;
//   duration?: number; // in frames
//   totalSlides: number; // added prop
// }

// export const AdvancedScene: React.FC<SceneProps> = ({
//   page,
//   index,
//   audioOffset,
//   localFrame,
//   voiceOverUrl,
//   duration = 150,
//   totalSlides,
// }) => {
//   const globalFrame = useCurrentFrame();
//   const frame = localFrame ?? globalFrame;

//   // ✅ If this is the last slide, render custom slide
//   const isCustomSlide = index === totalSlides - 1;
//   if (isCustomSlide) {
//     return (
//       <AbsoluteFill style={{ backgroundColor: 'black' }}>
//         <Video
//           src="https://cdn.suvichaar.org/media/videos/portrait_857195-hd_1280_720_25fps.mp4"
//           startFrom={0}
//           endAt={duration}
//           playbackRate={1}
//           muted
//           loop
//           style={{
//             position: 'absolute',
//             width: '100%',
//             height: '100%',
//             objectFit: 'cover',
//           }}
//         />

//         {voiceOverUrl && <Audio src={voiceOverUrl} volume={1} />}

//         <div
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//             alignItems: 'center',
//             padding: '2rem',
//             textAlign: 'center',
//             color: 'white',
//             fontFamily: 'Mukta, sans-serif',
//             textShadow: '2px 2px 6px rgba(0,0,0,0.6)',
//           }}
//         >
//           <div style={{ fontSize: 48, fontWeight: 700, marginBottom: '1rem' }}>
//             suvichaar
//           </div>
//           <div style={{ fontSize: 28, fontWeight: 600, marginBottom: '2rem' }}>
//             GET SUCH <br /> INSPIRATIONAL <br /> CONTENT
//           </div>
//           <div style={{ fontSize: 18, fontWeight: 500 }}>
//             LIKE | SUBSCRIBE | SHARE
//             <br />
//             WWW.SUVICHAAR.ORG
//           </div>
//         </div>
//       </AbsoluteFill>
//     );
//   }

//   const backgroundImage = page.images.find((img) => img.alt !== 'white-quotation.png');
//   const logoImage = page.images.find((img) =>
//     img.alt?.toLowerCase().includes('suvichaar')
//   );
//   const layout = backgroundImage?.layout ?? 'fill';

//   const rawAuthorText = page.texts.find((text) => text.tag === 'p')?.content || '';
//   const authorText = rawAuthorText.replace(/^[-–—]\s*/, '');

//   const imgStyle =
//     layout === 'fill'
//       ? {
//           position: 'absolute',
//           width: '100%',
//           height: '100%',
//           objectFit: 'cover',
//         }
//       : { width: '100%', height: 'auto', objectFit: 'contain' };

//   const whiteFade = interpolate(frame, [0, 20], [1, 0], {
//     extrapolateRight: 'clamp',
//   });

//   const imageOpacity =
//     index === 0
//       ? interpolate(frame, [0, 30], [0, 1], { extrapolateRight: 'clamp' })
//       : 1;

//   const imageTranslateX =
//     index === 0
//       ? 0
//       : interpolate(frame, [0, 30, duration - 30, duration], [100, 0, 0, -100], {
//           extrapolate: 'clamp',
//           easing: Easing.bezier(0.22, 1, 0.36, 1),
//         });

//   const textTranslateEnter = interpolate(frame, [15, 45], [50, 0], {
//     extrapolateRight: 'clamp',
//     easing: Easing.bezier(0.22, 1, 0.36, 1),
//   });

//   const textTranslateExit = interpolate(frame, [duration - 30, duration], [0, -100], {
//     extrapolate: 'clamp',
//     easing: Easing.bezier(0.22, 1, 0.36, 1),
//   });

//   const textTranslateX = frame < duration - 30 ? textTranslateEnter : textTranslateExit;

//   const textOpacity = interpolate(
//     frame,
//     [15, 45, duration - 30, duration],
//     [0, 1, 1, 0],
//     {
//       extrapolate: 'clamp',
//       easing: Easing.bezier(0.42, 0, 0.58, 1),
//     }
//   );

//   return (
//     <AbsoluteFill style={{ backgroundColor: 'black' }}>
//       <div
//         style={{
//           ...imgStyle,
//           transform: `translateX(${imageTranslateX}%)`,
//           opacity: imageOpacity,
//         }}
//       >
//         <Img
//           src={backgroundImage?.src ?? fallbackImage}
//           fallback={fallbackImage}
//           style={imgStyle}
//         />
//         <div
//           style={{
//             position: 'absolute',
//             bottom: 0,
//             width: '100%',
//             height: '50%',
//             backgroundImage:
//               'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))',
//             pointerEvents: 'none',
//           }}
//         />
//       </div>

//       {index === 0 && (
//         <div
//           style={{
//             ...imgStyle,
//             backgroundColor: 'white',
//             opacity: whiteFade,
//             zIndex: 10,
//           }}
//         />
//       )}

//       <Audio src={backgroundMusic} startFrom={audioOffset} volume={0.3} />
//       {voiceOverUrl && (
//         <Sequence from={45}>
//           <Audio src={voiceOverUrl} startFrom={0} volume={1} />
//         </Sequence>
//       )}

//       {index === 0 ? (
//         <div
//           style={{
//             position: 'absolute',
//             bottom: '15%',
//             left: 0,
//             right: 0,
//             padding: '3rem',
//             zIndex: 20,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             transform: `translateX(${textTranslateX}%)`,
//             opacity: textOpacity,
//           }}
//         >
//           <Img
//             src={quort}
//             style={{
//               position: 'absolute',
//               top: -150,
//               width: 230,
//               height: 230,
//               transform: 'rotate(180deg)',
//               zIndex: 1,
//               opacity: 1,
//               pointerEvents: 'none',
//             }}
//           />

//           {page.texts
//             .filter((text) => !text.tag.startsWith('p'))
//             .map((text, i) => (
//               <div
//                 key={i}
//                 style={{
//                   fontFamily: 'Mukta, sans-serif',
//                   fontSize: text.tag.startsWith('h') ? 43 : 35,
//                   fontWeight: text.tag.startsWith('h') ? 700 : 500,
//                   color: 'white',
//                   textAlign: 'center',
//                   margin: '1rem 0',
//                   lineHeight: 1.4,
//                   textTransform: 'uppercase',
//                   textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
//                   zIndex: 2,
//                   position: 'relative',
//                 }}
//               >
//                 {text.content}
//               </div>
//             ))}
//         </div>
//       ) : (
//         <div
//           style={{
//             position: 'absolute',
//             bottom: '20%',
//             left: '5%',
//             transform: `translateX(${textTranslateX}%)`,
//             padding: '0 2rem',
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'flex-start',
//             textAlign: 'left',
//             zIndex: 20,
//             opacity: textOpacity,
//           }}
//         >
//           <div style={{ position: 'relative', marginBottom: '1rem' }}>
//             <Img
//               src={quort}
//               style={{
//                 position: 'absolute',
//                 top: -120,
//                 left: -80,
//                 width: 230,
//                 height: 230,
//                 transform: 'rotate(180deg)',
//                 zIndex: 1,
//                 opacity: 1,
//                 pointerEvents: 'none',
//               }}
//             />
//             <div
//               style={{
//                 fontFamily: 'Mukta, sans-serif',
//                 fontSize: 40,
//                 fontWeight: 500,
//                 color: 'white',
//                 textTransform: 'uppercase',
//                 textShadow: '1px 1px 3px rgba(0,0,0,0.4)',
//                 position: 'relative',
//                 zIndex: 2,
//                 paddingLeft: '6rem',
//                 marginTop: '-1.5rem',
//               }}
//             >
//               {authorText}
//             </div>
//           </div>
//           {page.texts
//             .filter((text) => !(index !== 0 && text.tag === 'p'))
//             .map((text, i) => (
//               <div
//                 key={i}
//                 style={{
//                   fontFamily: 'Mukta, sans-serif',
//                   fontSize: text.tag.startsWith('h') ? 36 : 35,
//                   fontWeight: text.tag.startsWith('h') ? 700 : 500,
//                   color: 'white',
//                   margin: i === 0 ? '0 0 0.5rem 0' : '0.5rem 0',
//                   lineHeight: 1.4,
//                   textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
//                   letterSpacing: text.tag.startsWith('h') ? '0.05em' : '0.03em',
//                   textTransform: text.tag.startsWith('h') ? 'uppercase' : 'none',
//                 }}
//               >
//                 {text.content}
//               </div>
//             ))}
//         </div>
//       )}

//       <div
//         style={{
//           position: 'absolute',
//           top: 70,
//           right: 150,
//           zIndex: 999,
//         }}
//       >
//         {logoImage && (
//           <Img
//             src={logoImage?.src ?? fallbackImage}
//             fallback={fallbackImage}
//             style={{ width: '70%' }}
//           />
//         )}
//       </div>
//     </AbsoluteFill>
//   );
// };




// import {
//   AbsoluteFill,
//   Audio,
//   Img,
//   interpolate,
//   useCurrentFrame,
//   Easing,
//   Video,
//   Sequence
// } from 'remotion';
// import type { AMPStoryPage } from '../types/ampStoryData';
// import fallbackImage from '../../public/1.webp';
// import backgroundMusic from '../../public/backgroundMusic.mp3';
// import quort from '../../public/quort.webp';

// export interface SceneProps {
//   page: AMPStoryPage;
//   index: number;
//   audioOffset: number;
//   localFrame?: number;
//   voiceOverUrl?: string;
//   duration?: number;
//   totalSlides: number;
// }

// export const AdvancedScene: React.FC<SceneProps> = ({
//   page,
//   index,
//   audioOffset,
//   localFrame,
//   voiceOverUrl,
//   duration = 150,
//   totalSlides,
// }) => {
//   const globalFrame = useCurrentFrame();
//   const frame = localFrame ?? globalFrame;

//   const isFirstSlide = index === 0;
//   const isLastSlide = index === totalSlides - 1;

//   const backgroundImage = page.images.find((img) => img.alt !== 'white-quotation.png');
//   const logoImage = page.images.find((img) =>
//     img.alt?.toLowerCase().includes('suvichaar')
//   );
//   const layout = backgroundImage?.layout ?? 'fill';

//   const rawAuthorText = page.texts.find((text) => text.tag === 'p')?.content || '';
//   const authorText = rawAuthorText.replace(/^[-–—]\s*/, '');

//   const imgStyle =
//     layout === 'fill'
//       ? {
//           position: 'absolute',
//           width: '100%',
//           height: '100%',
//           objectFit: 'cover',
//         }
//       : { width: '100%', height: 'auto', objectFit: 'contain' };

//   const whiteFade = interpolate(frame, [0, 20], [1, 0], {
//     extrapolateRight: 'clamp',
//   });

//   const imageOpacity =
//     isFirstSlide
//       ? interpolate(frame, [0, 30], [0, 1], { extrapolateRight: 'clamp' })
//       : 1;

//   const imageTranslateX =
//     isFirstSlide
//       ? 0
//       : interpolate(frame, [0, 30, duration - 30, duration], [100, 0, 0, -100], {
//           extrapolate: 'clamp',
//           easing: Easing.bezier(0.22, 1, 0.36, 1),
//         });

//   const textTranslateEnter = interpolate(frame, [15, 45], [50, 0], {
//     extrapolateRight: 'clamp',
//     easing: Easing.bezier(0.22, 1, 0.36, 1),
//   });

//   const textTranslateExit = interpolate(frame, [duration - 30, duration], [0, -100], {
//     extrapolate: 'clamp',
//     easing: Easing.bezier(0.22, 1, 0.36, 1),
//   });

//   const textTranslateX = frame < duration - 30 ? textTranslateEnter : textTranslateExit;

//   const textOpacity = interpolate(
//     frame,
//     [15, 45, duration - 30, duration],
//     [0, 1, 1, 0],
//     {
//       extrapolate: 'clamp',
//       easing: Easing.bezier(0.42, 0, 0.58, 1),
//     }
//   );

//   return (
//     <AbsoluteFill style={{ backgroundColor: 'black' }}>
//       {isLastSlide ? (
//         <Video
//           src="https://cdn.suvichaar.org/media/videos/portrait_857195-hd_1280_720_25fps.mp4"
//           startFrom={0}
//           endAt={duration}
//           playbackRate={1}
//           muted
//           loop
//           style={{
//             position: 'absolute',
//             width: '100%',
//             height: '100%',
//             objectFit: 'cover',
//           }}
//         />
//       ) : (
//         <div
//           style={{
//             ...imgStyle,
//             transform: `translateX(${imageTranslateX}%)`,
//             opacity: imageOpacity,
//           }}
//         >
//           <Img
//             src={backgroundImage?.src ?? fallbackImage}
//             fallback={fallbackImage}
//             style={imgStyle}
//           />
//           <div
//             style={{
//               position: 'absolute',
//               bottom: 0,
//               width: '100%',
//               height: '50%',
//               backgroundImage:
//                 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))',
//               pointerEvents: 'none',
//             }}
//           />
//         </div>
//       )}

//       {isFirstSlide && (
//         <div
//           style={{
//             ...imgStyle,
//             backgroundColor: 'white',
//             opacity: whiteFade,
//             zIndex: 10,
//           }}
//         />
//       )}

//       <Audio src={backgroundMusic} startFrom={audioOffset} volume={0.3} />
//       {voiceOverUrl && (
//         <Sequence from={45}>
//           <Audio src={voiceOverUrl} startFrom={0} volume={1} />
//         </Sequence>
//       )}

//       {isFirstSlide || isLastSlide ? (
//         <div
//           style={{
//             position: 'absolute',
//             bottom: '15%',
//             left: 0,
//             right: 0,
//             padding: '3rem',
//             zIndex: 20,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             transform: `translateX(${textTranslateX}%)`,
//             opacity: textOpacity,
//           }}
//         >
//           {page.texts.map((text, i) => (
//             <div
//               key={i}
//               style={{
//                 fontFamily: 'Mukta, sans-serif',
//                 fontSize: text.tag.startsWith('h') ? 42 : 28,
//                 fontWeight: text.tag.startsWith('h') ? 700 : 500,
//                 color: 'white',
//                 textAlign: 'center',
//                 margin: '1rem 0',
//                 lineHeight: 1.4,
//                 textTransform: 'uppercase',
//                 textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
//                 whiteSpace: 'pre-line',
//               }}
//             >
//               {text.content}
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div
//           style={{
//             position: 'absolute',
//             bottom: '20%',
//             left: '5%',
//             transform: `translateX(${textTranslateX}%)`,
//             padding: '0 2rem',
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'flex-start',
//             textAlign: 'left',
//             zIndex: 20,
//             opacity: textOpacity,
//           }}
//         >
//           <div style={{ position: 'relative', marginBottom: '1rem' }}>
//             <Img
//               src={quort}
//               style={{
//                 position: 'absolute',
//                 top: -120,
//                 left: -80,
//                 width: 230,
//                 height: 230,
//                 transform: 'rotate(180deg)',
//                 zIndex: 1,
//                 opacity: 1,
//                 pointerEvents: 'none',
//               }}
//             />
//             <div
//               style={{
//                 fontFamily: 'Mukta, sans-serif',
//                 fontSize: 40,
//                 fontWeight: 500,
//                 color: 'white',
//                 textTransform: 'uppercase',
//                 textShadow: '1px 1px 3px rgba(0,0,0,0.4)',
//                 position: 'relative',
//                 zIndex: 2,
//                 paddingLeft: '6rem',
//                 marginTop: '-1.5rem',
//               }}
//             >
//               {authorText}
//             </div>
//           </div>
//           {page.texts
//             .filter((text) => !(index !== 0 && text.tag === 'p'))
//             .map((text, i) => (
//               <div
//                 key={i}
//                 style={{
//                   fontFamily: 'Mukta, sans-serif',
//                   fontSize: text.tag.startsWith('h') ? 36 : 35,
//                   fontWeight: text.tag.startsWith('h') ? 700 : 500,
//                   color: 'white',
//                   margin: i === 0 ? '0 0 0.5rem 0' : '0.5rem 0',
//                   lineHeight: 1.4,
//                   textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
//                   letterSpacing: text.tag.startsWith('h') ? '0.05em' : '0.03em',
//                   textTransform: text.tag.startsWith('h') ? 'uppercase' : 'none',
//                 }}
//               >
//                 {text.content}
//               </div>
//             ))}
//         </div>
//       )}

//       {!isLastSlide && logoImage && (
//         <div
//           style={{
//             position: 'absolute',
//             top: 70,
//             right: 150,
//             zIndex: 999,
//           }}
//         >
//           <Img
//             src={logoImage?.src ?? fallbackImage}
//             fallback={fallbackImage}
//             style={{ width: '70%' }}
//           />
//         </div>
//       )}
//     </AbsoluteFill>
//   );
// };


// import {
//   AbsoluteFill,
//   Audio,
//   Img,
//   interpolate,
//   useCurrentFrame,
//   Easing,
//   Video,
//   Sequence
// } from 'remotion';
// import type { AMPStoryPage } from '../types/ampStoryData';
// import fallbackImage from '../../public/1.webp';
// import backgroundMusic from '../../public/backgroundMusic.mp3';
// import quort from '../../public/quort.webp';

// export interface SceneProps {
//   page: AMPStoryPage;
//   index: number;
//   audioOffset: number;
//   localFrame?: number;
//   voiceOverUrl?: string;
//   duration?: number; // in frames
//   totalSlides: number;
// }

// export const AdvancedScene: React.FC<SceneProps> = ({
//   page,
//   index,
//   audioOffset,
//   localFrame,
//   voiceOverUrl,
//   duration = 150,
//   totalSlides,
// }) => {
//   const globalFrame = useCurrentFrame();
//   const frame = localFrame ?? globalFrame;

//   const isFirstSlide = index === 0;
//   const isLastSlide = index === totalSlides - 1;

//   const backgroundImage = page.images.find((img) => img.alt !== 'white-quotation.png');
//   const logoImage = page.images.find((img) =>
//     img.alt?.toLowerCase().includes('suvichaar')
//   );
//   const layout = backgroundImage?.layout ?? 'fill';

//   const rawAuthorText = page.texts.find((text) => text.tag === 'p')?.content || '';
//   const authorText = rawAuthorText.replace(/^[-–—]\s*/, '');

//   const imgStyle =
//     layout === 'fill'
//       ? {
//           position: 'absolute',
//           width: '100%',
//           height: '100%',
//           objectFit: 'cover',
//         }
//       : { width: '100%', height: 'auto', objectFit: 'contain' };

//   const whiteFade = interpolate(frame, [0, 20], [1, 0], {
//     extrapolateRight: 'clamp',
//   });

//   const imageOpacity =
//     isFirstSlide
//       ? interpolate(frame, [0, 30], [0, 1], { extrapolateRight: 'clamp' })
//       : 1;

//   const imageTranslateX =
//     isFirstSlide
//       ? 0
//       : interpolate(frame, [0, 30, duration - 30, duration], [100, 0, 0, -100], {
//           extrapolate: 'clamp',
//           easing: Easing.bezier(0.22, 1, 0.36, 1),
//         });

//   const textTranslateEnter = interpolate(frame, [15, 45], [50, 0], {
//     extrapolateRight: 'clamp',
//     easing: Easing.bezier(0.22, 1, 0.36, 1),
//   });

//   const textTranslateExit = interpolate(frame, [duration - 30, duration], [0, -100], {
//     extrapolate: 'clamp',
//     easing: Easing.bezier(0.22, 1, 0.36, 1),
//   });

//   const textTranslateX = frame < duration - 30 ? textTranslateEnter : textTranslateExit;

//   const textOpacity = interpolate(
//     frame,
//     [15, 45, duration - 30, duration],
//     [0, 1, 1, 0],
//     {
//       extrapolate: 'clamp',
//       easing: Easing.bezier(0.42, 0, 0.58, 1),
//     }
//   );

//   return (
//     <AbsoluteFill style={{ backgroundColor: 'black' }}>
//       {/* ✅ LAST SLIDE VIDEO BACKGROUND */}
//       {isLastSlide ? (
//         <Video
//           src="https://cdn.suvichaar.org/media/videos/portrait_857195-hd_1280_720_25fps.mp4"
//           startFrom={0}
//           endAt={duration}
//           playbackRate={1}
//           muted
//           loop
//           style={{
//             position: 'absolute',
//             width: '100%',
//             height: '100%',
//             objectFit: 'cover',
//           }}
//         />
//       ) : (
//         // ✅ IMAGE BACKGROUND FOR FIRST + MIDDLE SLIDES
//         <div
//           style={{
//             ...imgStyle,
//             transform: `translateX(${imageTranslateX}%)`,
//             opacity: imageOpacity,
//           }}
//         >
//           <Img
//             src={backgroundImage?.src ?? fallbackImage}
//             fallback={fallbackImage}
//             style={imgStyle}
//           />
//           <div
//             style={{
//               position: 'absolute',
//               bottom: 0,
//               width: '100%',
//               height: '50%',
//               backgroundImage:
//                 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))',
//               pointerEvents: 'none',
//             }}
//           />
//         </div>
//       )}

//       {/* ✅ WHITE FADE FOR FIRST SLIDE ONLY */}
//       {isFirstSlide && (
//         <div
//           style={{
//             ...imgStyle,
//             backgroundColor: 'white',
//             opacity: whiteFade,
//             zIndex: 10,
//           }}
//         />
//       )}

//       {/* ✅ AUDIO LAYERS */}
//       <Audio src={backgroundMusic} startFrom={audioOffset} volume={0.3} />
//       {voiceOverUrl && (
//         <Sequence from={45}>
//           <Audio src={voiceOverUrl} startFrom={0} volume={1} />
//         </Sequence>
//       )}

//       {/* ✅ TEXT POSITIONING */}
//       {isFirstSlide ? (
//         // 🟩 FIRST SLIDE LAYOUT (unchanged)
//         <div
//           style={{
//             position: 'absolute',
//             bottom: '15%',
//             left: 0,
//             right: 0,
//             padding: '3rem',
//             zIndex: 20,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             transform: `translateX(${textTranslateX}%)`,
//             opacity: textOpacity,
//           }}
//         >
//           <Img
//             src={quort}
//             style={{
//               position: 'absolute',
//               top: -150,
//               width: 230,
//               height: 230,
//               transform: 'rotate(180deg)',
//               zIndex: 1,
//               opacity: 1,
//               pointerEvents: 'none',
//             }}
//           />
//           {page.texts
//             .filter((text) => !text.tag.startsWith('p'))
//             .map((text, i) => (
//               <div
//                 key={i}
//                 style={{
//                   fontFamily: 'Mukta, sans-serif',
//                   fontSize: text.tag.startsWith('h') ? 43 : 35,
//                   fontWeight: text.tag.startsWith('h') ? 700 : 500,
//                   color: 'white',
//                   textAlign: 'center',
//                   margin: '1rem 0',
//                   lineHeight: 1.4,
//                   textTransform: 'uppercase',
//                   textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
//                   zIndex: 2,
//                   position: 'relative',
//                 }}
//               >
//                 {text.content}
//               </div>
//             ))}
//         </div>
//       ) : isLastSlide ? (
//         // 🟦 LAST SLIDE LAYOUT (with video + simple center text)
//         <div
//           style={{
//             position: 'absolute',
//             bottom: '10%',
//             left: 0,
//             right: 0,
//             padding: '2rem',
//             zIndex: 20,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             textAlign: 'center',
//             transform: `translateX(${textTranslateX}%)`,
//             opacity: textOpacity,
//           }}
//         >
//           {page.texts.map((text, i) => (
//             <div
//               key={i}
//               style={{
//                 fontFamily: 'Mukta, sans-serif',
//                 fontSize: text.tag.startsWith('h') ? 38 : 22,
//                 fontWeight: text.tag.startsWith('h') ? 700 : 500,
//                 color: 'white',
//                 margin: '1rem 0',
//                 lineHeight: 1.5,
//                 textTransform: 'uppercase',
//                 textShadow: '2px 2px 5px rgba(0,0,0,0.5)',
//                 whiteSpace: 'pre-line',
//               }}
//             >
//               {text.content}
//             </div>
//           ))}
//         </div>
//       ) : (
//         // 🟨 DEFAULT SLIDE LAYOUT
//         <div
//           style={{
//             position: 'absolute',
//             bottom: '20%',
//             left: '5%',
//             transform: `translateX(${textTranslateX}%)`,
//             padding: '0 2rem',
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'flex-start',
//             textAlign: 'left',
//             zIndex: 20,
//             opacity: textOpacity,
//           }}
//         >
//           <div style={{ position: 'relative', marginBottom: '1rem' }}>
//             <Img
//               src={quort}
//               style={{
//                 position: 'absolute',
//                 top: -120,
//                 left: -80,
//                 width: 230,
//                 height: 230,
//                 transform: 'rotate(180deg)',
//                 zIndex: 1,
//                 opacity: 1,
//                 pointerEvents: 'none',
//               }}
//             />
//             <div
//               style={{
//                 fontFamily: 'Mukta, sans-serif',
//                 fontSize: 40,
//                 fontWeight: 500,
//                 color: 'white',
//                 textTransform: 'uppercase',
//                 textShadow: '1px 1px 3px rgba(0,0,0,0.4)',
//                 position: 'relative',
//                 zIndex: 2,
//                 paddingLeft: '6rem',
//                 marginTop: '-1.5rem',
//               }}
//             >
//               {authorText}
//             </div>
//           </div>
//           {page.texts
//             .filter((text) => !(index !== 0 && text.tag === 'p'))
//             .map((text, i) => (
//               <div
//                 key={i}
//                 style={{
//                   fontFamily: 'Mukta, sans-serif',
//                   fontSize: text.tag.startsWith('h') ? 36 : 35,
//                   fontWeight: text.tag.startsWith('h') ? 700 : 500,
//                   color: 'white',
//                   margin: i === 0 ? '0 0 0.5rem 0' : '0.5rem 0',
//                   lineHeight: 1.4,
//                   textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
//                   letterSpacing: text.tag.startsWith('h') ? '0.05em' : '0.03em',
//                   textTransform: text.tag.startsWith('h') ? 'uppercase' : 'none',
//                 }}
//               >
//                 {text.content}
//               </div>
//             ))}
//         </div>
//       )}

//       {/* ✅ LOGO (skip on last slide) */}
//       {!isLastSlide && logoImage && (
//         <div
//           style={{
//             position: 'absolute',
//             top: 70,
//             right: 150,
//             zIndex: 999,
//           }}
//         >
//           <Img
//             src={logoImage?.src ?? fallbackImage}
//             fallback={fallbackImage}
//             style={{ width: '70%' }}
//           />
//         </div>
//       )}
//     </AbsoluteFill>
//   );
// };


// import {
//   AbsoluteFill,
//   Audio,
//   Img,
//   interpolate,
//   useCurrentFrame,
//   Easing,
//   Video,
//   Sequence,
// } from 'remotion';
// import type { AMPStoryPage } from '../types/ampStoryData';
// import fallbackImage from '../../public/1.webp';
// import backgroundMusic from '../../public/backgroundMusic.mp3';
// import quort from '../../public/quort.webp';

// export interface SceneProps {
//   page: AMPStoryPage;
//   index: number;
//   audioOffset: number;
//   localFrame?: number;
//   voiceOverUrl?: string;
//   duration?: number;
//   totalSlides: number;
// }

// export const AdvancedScene: React.FC<SceneProps> = ({
//   page,
//   index,
//   audioOffset,
//   localFrame,
//   voiceOverUrl,
//   duration = 150,
//   totalSlides,
// }) => {
//   const globalFrame = useCurrentFrame();
//   const frame = localFrame ?? globalFrame;

//   const isFirstSlide = index === 0;
//   // const isLastSlide = index === totalSlides - 1;
//   // At the top of the component:
//   const isLastSlide = page.id === 'custom_slide' || index === totalSlides - 1;


//   const backgroundImage = page.images.find((img) => img.alt !== 'white-quotation.png');
//   const logoImage = page.images.find((img) =>
//     img.alt?.toLowerCase().includes('suvichaar')
//   );
//   const layout = backgroundImage?.layout ?? 'fill';

//   const rawAuthorText = page.texts.find((text) => text.tag === 'p')?.content || '';
//   const authorText = rawAuthorText.replace(/^[-–—]\s*/, '');

//   const imgStyle =
//     layout === 'fill'
//       ? {
//         position: 'absolute',
//         width: '100%',
//         height: '100%',
//         objectFit: 'cover',
//       }
//       : { width: '100%', height: 'auto', objectFit: 'contain' };

//   const whiteFade = interpolate(frame, [0, 20], [1, 0], {
//     extrapolateRight: 'clamp',
//   });

//   const imageOpacity =
//     isFirstSlide
//       ? interpolate(frame, [0, 30], [0, 1], { extrapolateRight: 'clamp' })
//       : 1;

//   const imageTranslateX =
//     isFirstSlide
//       ? 0
//       : interpolate(frame, [0, 30, duration - 30, duration], [100, 0, 0, -100], {
//         extrapolate: 'clamp',
//         easing: Easing.bezier(0.22, 1, 0.36, 1),
//       });

//   const textTranslateEnter = interpolate(frame, [15, 45], [50, 0], {
//     extrapolateRight: 'clamp',
//     easing: Easing.bezier(0.22, 1, 0.36, 1),
//   });

//   const textTranslateExit = interpolate(frame, [duration - 30, duration], [0, -100], {
//     extrapolate: 'clamp',
//     easing: Easing.bezier(0.22, 1, 0.36, 1),
//   });

//   const textTranslateX = frame < duration - 30 ? textTranslateEnter : textTranslateExit;

//   const textOpacity = interpolate(
//     frame,
//     [15, 45, duration - 30, duration],
//     [0, 1, 1, 0],
//     {
//       extrapolate: 'clamp',
//       easing: Easing.bezier(0.42, 0, 0.58, 1),
//     }
//   );

//   // Voice-over timing
//   const VOICE_OVER_START = 45;
//   const voiceOverDuration = duration - VOICE_OVER_START - 30; // reserve 30 frames for exit
//   const voiceOverEndFrame = VOICE_OVER_START + voiceOverDuration;

//   // Fade to black
//   const fadeOutStart = voiceOverEndFrame + 30;
//   const blackFadeOpacity = interpolate(
//     frame,
//     [fadeOutStart, fadeOutStart + 20],
//     [0, 1],
//     {
//       extrapolateLeft: 'clamp',
//       extrapolateRight: 'clamp',
//     }
//   );

//   return (
//     <AbsoluteFill style={{ backgroundColor: 'black' }}>
//       {isLastSlide ? (
//         <Video
//           src="https://cdn.suvichaar.org/media/videos/portrait_857195-hd_1280_720_25fps.mp4"
//           startFrom={0}
//           muted
//           loop
//           playbackRate={1}
//           style={{
//             position: 'absolute',
//             width: '100%',
//             height: '100%',
//             objectFit: 'cover',
//           }}
//         />
//       ) : (
//         <div
//           style={{
//             ...imgStyle,
//             transform: `translateX(${imageTranslateX}%)`,
//             opacity: imageOpacity,
//           }}
//         >
//           <Img
//             src={backgroundImage?.src ?? fallbackImage}
//             fallback={fallbackImage}
//             style={imgStyle}
//           />
//           <div
//             style={{
//               position: 'absolute',
//               bottom: 0,
//               width: '100%',
//               height: '50%',
//               backgroundImage:
//                 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))',
//               pointerEvents: 'none',
//             }}
//           />
//         </div>
//       )}

//       {isFirstSlide && (
//         <div
//           style={{
//             ...imgStyle,
//             backgroundColor: 'white',
//             opacity: whiteFade,
//             zIndex: 10,
//           }}
//         />
//       )}

//       {/* Audio Layers */}
//       <Audio src={backgroundMusic} startFrom={audioOffset} volume={0.3} />
//       {voiceOverUrl && (
//         <Sequence from={VOICE_OVER_START}>
//           <Audio src={voiceOverUrl} startFrom={0} volume={1} />
//         </Sequence>
//       )}

//       {/* TEXT */}
//       {isFirstSlide ? (
//         // FIRST SLIDE
//         <div
//           style={{
//             position: 'absolute',
//             bottom: '15%',
//             left: 0,
//             right: 0,
//             padding: '3rem',
//             zIndex: 20,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             transform: `translateX(${textTranslateX}%)`,
//             opacity: textOpacity,
//           }}
//         >
//           <Img
//             src={quort}
//             style={{
//               position: 'absolute',
//               top: -150,
//               width: 230,
//               height: 230,
//               transform: 'rotate(180deg)',
//               zIndex: 1,
//               opacity: 1,
//               pointerEvents: 'none',
//             }}
//           />
//           {page.texts
//             .filter((text) => !text.tag.startsWith('p'))
//             .map((text, i) => (
//               <div
//                 key={i}
//                 style={{
//                   fontFamily: 'Mukta, sans-serif',
//                   fontSize: text.tag.startsWith('h') ? 43 : 35,
//                   fontWeight: text.tag.startsWith('h') ? 700 : 500,
//                   color: 'white',
//                   textAlign: 'center',
//                   margin: '1rem 0',
//                   lineHeight: 1.4,
//                   textTransform: 'uppercase',
//                   textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
//                   zIndex: 2,
//                   position: 'relative',
//                 }}
//               >
//                 {text.content}
//               </div>
//             ))}
//         </div>
//       ) : isLastSlide ? (
//         // LAST SLIDE
//         <div
//           style={{
//             position: 'absolute',
//             bottom: '10%',
//             left: 0,
//             right: 0,
//             padding: '2rem',
//             zIndex: 20,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             textAlign: 'center',
//             transform: `translateX(${textTranslateX}%)`,
//             opacity: textOpacity,
//           }}
//         >
//           {page.texts.map((text, i) => (
//             <div
//               key={i}
//               style={{
//                 fontFamily: 'Mukta, sans-serif',
//                 fontSize: text.tag.startsWith('h') ? 38 : 22,
//                 fontWeight: text.tag.startsWith('h') ? 700 : 500,
//                 color: 'white',
//                 margin: '1rem 0',
//                 lineHeight: 1.5,
//                 textTransform: 'uppercase',
//                 textShadow: '2px 2px 5px rgba(0,0,0,0.5)',
//                 whiteSpace: 'pre-line',
//               }}
//             >
//               {text.content}
//             </div>
//           ))}
//         </div>
//       ) : (
//         // MIDDLE SLIDES
//         <div
//           style={{
//             position: 'absolute',
//             bottom: '20%',
//             left: '5%',
//             transform: `translateX(${textTranslateX}%)`,
//             padding: '0 2rem',
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'flex-start',
//             textAlign: 'left',
//             zIndex: 20,
//             opacity: textOpacity,
//           }}
//         >
//           <div style={{ position: 'relative', marginBottom: '1rem' }}>
//             <Img
//               src={quort}
//               style={{
//                 position: 'absolute',
//                 top: -120,
//                 left: -80,
//                 width: 230,
//                 height: 230,
//                 transform: 'rotate(180deg)',
//                 zIndex: 1,
//                 opacity: 1,
//                 pointerEvents: 'none',
//               }}
//             />
//             <div
//               style={{
//                 fontFamily: 'Mukta, sans-serif',
//                 fontSize: 40,
//                 fontWeight: 500,
//                 color: 'white',
//                 textTransform: 'uppercase',
//                 textShadow: '1px 1px 3px rgba(0,0,0,0.4)',
//                 position: 'relative',
//                 zIndex: 2,
//                 paddingLeft: '6rem',
//                 marginTop: '-1.5rem',
//               }}
//             >
//               {authorText}
//             </div>
//           </div>
//           {page.texts
//             .filter((text) => !(index !== 0 && text.tag === 'p'))
//             .map((text, i) => (
//               <div
//                 key={i}
//                 style={{
//                   fontFamily: 'Mukta, sans-serif',
//                   fontSize: text.tag.startsWith('h') ? 36 : 35,
//                   fontWeight: text.tag.startsWith('h') ? 700 : 500,
//                   color: 'white',
//                   margin: i === 0 ? '0 0 0.5rem 0' : '0.5rem 0',
//                   lineHeight: 1.4,
//                   textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
//                   letterSpacing: text.tag.startsWith('h') ? '0.05em' : '0.03em',
//                   textTransform: text.tag.startsWith('h') ? 'uppercase' : 'none',
//                 }}
//               >
//                 {text.content}
//               </div>
//             ))}
//         </div>
//       )}

//       {/* LOGO (hide on last slide) */}
//       {!isLastSlide && logoImage && (
//         <div
//           style={{
//             position: 'absolute',
//             top: 70,
//             right: 150,
//             zIndex: 999,
//           }}
//         >
//           <Img
//             src={logoImage?.src ?? fallbackImage}
//             fallback={fallbackImage}
//             style={{ width: '70%' }}
//           />
//         </div>
//       )}

//       {/* Fade to black overlay (only for last slide) */}
//       {isLastSlide && (
//         <div
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             backgroundColor: 'black',
//             opacity: blackFadeOpacity,
//             transition: 'opacity 0.5s ease-out',
//           }}
//         />
//       )}
//     </AbsoluteFill>
//   );
// };





// import {
//   AbsoluteFill,
//   Audio,
//   Img,
//   interpolate,
//   useCurrentFrame,
//   Easing,
//   Video,
//   Sequence,
// } from 'remotion';
// import type { AMPStoryPage } from '../types/ampStoryData';
// import fallbackImage from '../../public/1.webp';
// import backgroundMusic from '../../public/backgroundMusic.mp3';
// import quort from '../../public/quort.webp';

// export interface SceneProps {
//   page: AMPStoryPage;
//   index: number;
//   audioOffset: number;
//   localFrame?: number;
//   voiceOverUrl?: string;
//   duration?: number;
//   totalSlides: number;
// }

// export const AdvancedScene: React.FC<SceneProps> = ({
//   page,
//   index,
//   audioOffset,
//   localFrame,
//   voiceOverUrl,
//   duration = 150,
//   totalSlides,
// }) => {
//   const globalFrame = useCurrentFrame();
//   const frame = localFrame ?? globalFrame;

//   const isFirstSlide = index === 0;
//   const isLastSlide = page.id === 'custom_slide' || index === totalSlides - 1;

//   const backgroundImage = page.images.find((img) => img.alt !== 'white-quotation.png');
//   const logoImage = page.images.find((img) =>
//     img.alt?.toLowerCase().includes('suvichaar')
//   );
//   const layout = backgroundImage?.layout ?? 'fill';

//   const rawAuthorText = page.texts.find((text) => text.tag === 'p')?.content || '';
//   const authorText = rawAuthorText.replace(/^[-–—]\s*/, '');

//   const imgStyle =
//     layout === 'fill'
//       ? {
//         position: 'absolute',
//         width: '100%',
//         height: '100%',
//         objectFit: 'cover',
//       }
//       : { width: '100%', height: 'auto', objectFit: 'contain' };

//   const whiteFade = interpolate(frame, [0, 20], [1, 0], {
//     extrapolateRight: 'clamp',
//   });

//   const imageOpacity =
//     isFirstSlide
//       ? interpolate(frame, [0, 30], [0, 1], { extrapolateRight: 'clamp' })
//       : 1;

//   const imageTranslateX =
//     isFirstSlide
//       ? 0
//       : interpolate(frame, [0, 30, duration - 30, duration], [100, 0, 0, -100], {
//         extrapolate: 'clamp',
//         easing: Easing.bezier(0.22, 1, 0.36, 1),
//       });

//   const textTranslateEnter = interpolate(frame, [15, 45], [50, 0], {
//     extrapolateRight: 'clamp',
//     easing: Easing.bezier(0.22, 1, 0.36, 1),
//   });

//   const textTranslateExit = interpolate(frame, [duration - 30, duration], [0, -100], {
//     extrapolate: 'clamp',
//     easing: Easing.bezier(0.22, 1, 0.36, 1),
//   });

//   const textTranslateX = frame < duration - 30 ? textTranslateEnter : textTranslateExit;

//   const textOpacity = interpolate(
//     frame,
//     [15, 45, duration - 30, duration],
//     [0, 1, 1, 0],
//     {
//       extrapolate: 'clamp',
//       easing: Easing.bezier(0.42, 0, 0.58, 1),
//     }
//   );

//   const VOICE_OVER_START = 45;
//   const voiceOverDuration = duration - VOICE_OVER_START - 30;
//   const voiceOverEndFrame = VOICE_OVER_START + voiceOverDuration;
//   const fadeOutStart = voiceOverEndFrame + 30;
//   const blackFadeOpacity = interpolate(
//     frame,
//     [fadeOutStart, fadeOutStart + 20],
//     [0, 1],
//     {
//       extrapolateLeft: 'clamp',
//       extrapolateRight: 'clamp',
//     }
//   );

//   return (
//     <AbsoluteFill style={{ backgroundColor: 'black' }}>
//       {isLastSlide ? (
//         <>
//           <Video
//             src="https://cdn.suvichaar.org/media/videos/portrait_857195-hd_1280_720_25fps.mp4"
//             startFrom={0}
//             muted
//             loop
//             playbackRate={1}
//             style={{
//               position: 'absolute',
//               width: '100%',
//               height: '100%',
//               objectFit: 'cover',
//             }}
//           />
//           <div
//             style={{
//               position: 'absolute',
//               top: 0,
//               left: 0,
//               right: 0,
//               bottom: 0,
//               backgroundColor: 'rgba(0, 0, 0, 0.4)',
//               zIndex: 0,
//             }}
//           /> </>
//       ) : (
//         <div
//           style={{
//             ...imgStyle,
//             transform: `translateX(${imageTranslateX}%)`,
//             opacity: imageOpacity,
//           }}
//         >
//           <Img
//             src={backgroundImage?.src ?? fallbackImage}
//             fallback={fallbackImage}
//             style={imgStyle}
//           />
//           <div
//             style={{
//               position: 'absolute',
//               bottom: 0,
//               width: '100%',
//               height: '50%',
//               backgroundImage:
//                 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))',
//               pointerEvents: 'none',
//             }}
//           />
//         </div>
//       )}

//       {isFirstSlide && (
//         <div
//           style={{
//             ...imgStyle,
//             backgroundColor: 'white',
//             opacity: whiteFade,
//             zIndex: 10,
//           }}
//         />
//       )}

//       <Audio src={backgroundMusic} startFrom={audioOffset} volume={0.3} />
//       {voiceOverUrl && (
//         <Sequence from={VOICE_OVER_START}>
//           <Audio src={voiceOverUrl} startFrom={0} volume={1} />
//         </Sequence>
//       )}

//       {isFirstSlide ? (
//         <div
//           style={{
//             position: 'absolute',
//             bottom: '15%',
//             left: 0,
//             right: 0,
//             padding: '3rem',
//             zIndex: 20,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             transform: `translateX(${textTranslateX}%)`,
//             opacity: textOpacity,
//           }}
//         >
//           <Img
//             src={quort}
//             style={{
//               position: 'absolute',
//               top: -150,
//               width: 230,
//               height: 230,
//               transform: 'rotate(180deg)',
//               zIndex: 1,
//               opacity: 1,
//               pointerEvents: 'none',
//             }}
//           />
//           {page.texts
//             .filter((text) => !text.tag.startsWith('p'))
//             .map((text, i) => (
//               <div
//                 key={i}
//                 style={{
//                   fontFamily: 'Mukta, sans-serif',
//                   fontSize: text.tag.startsWith('h') ? 43 : 35,
//                   fontWeight: text.tag.startsWith('h') ? 700 : 500,
//                   color: 'white',
//                   textAlign: 'center',
//                   margin: '1rem 0',
//                   lineHeight: 1.4,
//                   textTransform: 'uppercase',
//                   textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
//                   zIndex: 2,
//                   position: 'relative',
//                 }}
//               >
//                 {text.content}
//               </div>
//             ))}
//         </div>
//       ) : isLastSlide ? (
//         <div
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             justifyContent: 'center',
//             padding: '2rem',
//             textAlign: 'center',
//             transform: `translateX(${textTranslateX}%)`,
//             opacity: textOpacity,
//           }}
//         >

//           {logoImage && (
//             <Img
//               src={logoImage.src}
//               fallback={fallbackImage}
//               style={{
//                 width: 660,
//                 marginTop: '-6rem',
//                 marginBottom: '4rem',
//                 marginRight: '4rem',
//                 objectFit: 'contain',
//                 zIndex: 1,
//               }}
//             />
//           )}
//           {page.texts
//             .filter((t) => t.tag.startsWith('h'))
//             .map((text, i) => (
//               <div
//                 key={i}
//                 style={{
//                   fontFamily: 'Mukta, sans-serif',
//                   fontSize: 68,
//                   fontWeight: 500,
//                   color: 'white',
//                   lineHeight: 1.4,
//                   // paddingTop:'4rem',
//                   marginBottom: '8rem',
//                   textTransform: 'uppercase',
//                   textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
//                   whiteSpace: 'pre-line',
//                   letterSpacing: '2px',
//                   zIndex: 1,
//                 }}
//               >
//                 {text.content}
//               </div>
//             ))}
//           {page.texts
//             .filter((t) => t.tag === 'p')
//             .map((text, i) => (
//               <div
//                 key={i}
//                 style={{
//                   fontFamily: 'Mukta, sans-serif',
//                   fontSize: 35,
//                   fontWeight: 500,
//                   color: 'white',
//                   lineHeight: 1.6,
//                   textTransform: 'uppercase',
//                   textShadow: '1px 1px 3px rgba(0,0,0,0.4)',
//                   whiteSpace: 'pre-line',
//                   letterSpacing: '2px',
//                   zIndex: 1,
//                 }}
//               >
//                 {text.content}
//               </div>
//             ))}
//         </div>
//       ) : (
//         <div
//           style={{
//             position: 'absolute',
//             bottom: '20%',
//             left: '5%',
//             transform: `translateX(${textTranslateX}%)`,
//             padding: '0 2rem',
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'flex-start',
//             textAlign: 'left',
//             zIndex: 20,
//             opacity: textOpacity,
//           }}
//         >
//           <div style={{ position: 'relative', marginBottom: '1rem' }}>
//             <Img
//               src={quort}
//               style={{
//                 position: 'absolute',
//                 top: -120,
//                 left: -80,
//                 width: 230,
//                 height: 230,
//                 transform: 'rotate(180deg)',
//                 zIndex: 1,
//                 opacity: 1,
//                 pointerEvents: 'none',
//               }}
//             />
//             <div
//               style={{
//                 fontFamily: 'Mukta, sans-serif',
//                 fontSize: 40,
//                 fontWeight: 500,
//                 color: 'white',
//                 textTransform: 'uppercase',
//                 textShadow: '1px 1px 3px rgba(0,0,0,0.4)',
//                 position: 'relative',
//                 zIndex: 2,
//                 paddingLeft: '6rem',
//                 marginTop: '-1.5rem',
//               }}
//             >
//               {authorText}
//             </div>
//           </div>
//           {page.texts
//             .filter((text) => !(index !== 0 && text.tag === 'p'))
//             .map((text, i) => (
//               <div
//                 key={i}
//                 style={{
//                   fontFamily: 'Mukta, sans-serif',
//                   fontSize: text.tag.startsWith('h') ? 36 : 35,
//                   fontWeight: text.tag.startsWith('h') ? 700 : 500,
//                   color: 'white',
//                   margin: i === 0 ? '0 0 0.5rem 0' : '0.5rem 0',
//                   lineHeight: 1.4,
//                   textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
//                   letterSpacing: text.tag.startsWith('h') ? '0.05em' : '0.03em',
//                   textTransform: text.tag.startsWith('h') ? 'uppercase' : 'none',
//                 }}
//               >
//                 {text.content}
//               </div>
//             ))}
//         </div>
//       )}

//       {!isLastSlide && logoImage && (
//         <div
//           style={{
//             position: 'absolute',
//             top: 70,
//             right: 150,
//             zIndex: 999,
//           }}
//         >
//           <Img
//             src={logoImage?.src ?? fallbackImage}
//             fallback={fallbackImage}
//             style={{ width: '70%' }}
//           />
//         </div>
//       )}

//       {isLastSlide && (
//         <div
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             backgroundColor: 'black',
//             opacity: blackFadeOpacity,
//             transition: 'opacity 0.5s ease-out',
//           }}
//         />
//       )}
//     </AbsoluteFill>
//   );
// };

import {
  AbsoluteFill,
  Audio,
  Img,
  interpolate,
  useCurrentFrame,
  Easing,
  Video,
  Sequence,
} from 'remotion';
import type { AMPStoryPage } from '../types/ampStoryData';
import fallbackImage from '../../public/1.webp';
import backgroundMusic from '../../public/backgroundMusic.mp3';
import quort from '../../public/quort.webp';

export interface SceneProps {
  page: AMPStoryPage;
  index: number;
  audioOffset: number;
  localFrame?: number;
  voiceOverUrl?: string;
  duration?: number;
  totalSlides: number;
  videoUrl?: string;
  musicUrl?: string;
}

export const AdvancedScene: React.FC<SceneProps> = ({
  page,
  index,
  audioOffset,
  localFrame,
  voiceOverUrl,
  duration = 150,
  totalSlides,
  videoUrl,
  musicUrl,
}) => {
  const globalFrame = useCurrentFrame();
  const frame = localFrame ?? globalFrame;

  const isFirstSlide = index === 0;
  const isLastSlide = page.id === 'custom_slide' || index === totalSlides - 1;

  const backgroundImage = page.images.find((img) => img.alt !== 'white-quotation.png');
  const logoImage = page.images.find((img) =>
    img.alt?.toLowerCase().includes('suvichaar')
  );
  const layout = backgroundImage?.layout ?? 'fill';

  const rawAuthorText = page.texts.find((text) => text.tag === 'p')?.content || '';
  const authorText = rawAuthorText.replace(/^[-–—]\s*/, '');

  const imgStyle =
    layout === 'fill'
      ? {
        position: 'absolute',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }
      : { width: '100%', height: 'auto', objectFit: 'contain' };

  const whiteFade = interpolate(frame, [0, 20], [1, 0], {
    extrapolateRight: 'clamp',
  });

  const imageOpacity =
    isFirstSlide
      ? interpolate(frame, [0, 20], [0, 1], { extrapolateRight: 'clamp' })
      : 1;

  const imageTranslateX =
    isFirstSlide
      ? 0
      : interpolate(frame, [0, 20, duration - 15, duration], [100, 0, 0, -100], {
        extrapolate: 'clamp',
        easing: Easing.bezier(0.22, 1, 0.36, 1),
      });

  const textTranslateEnter = interpolate(frame, [15, 35], [50, 0], {
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });
  // const textTranslateEnter = interpolate(frame, [15, 45], [50, 0], {
  //   extrapolateRight: 'clamp',
  //   easing: Easing.bezier(0.22, 1, 0.36, 1),
  // });
  const textTranslateExit = interpolate(frame, [duration - 15, duration], [0, -100], {
    extrapolate: 'clamp',
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });

  const textTranslateX = frame < duration - 15 ? textTranslateEnter : textTranslateExit;

  const textOpacity = interpolate(
    frame,
    [0, 20, duration - 15, duration],
    [0, 1, 1, 0],
    {
      extrapolate: 'clamp',
      easing: Easing.bezier(0.42, 0, 0.58, 1),
    }
  );

  const VOICE_OVER_START = 20;
  const voiceOverDuration = duration - VOICE_OVER_START - 15;
  const voiceOverEndFrame = VOICE_OVER_START + voiceOverDuration;
  const fadeOutStart = voiceOverEndFrame + 10;
  const blackFadeOpacity = interpolate(
    frame,
    [fadeOutStart, fadeOutStart + 10],
    [0, 1],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );

  return (
    <AbsoluteFill style={{ backgroundColor: 'black' }}>
      {isLastSlide ? (
        <>
          {videoUrl && (
            <Video
              src={videoUrl}
              startFrom={0}
              muted
              loop
              playbackRate={1}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          )}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              zIndex: 0,
            }}
          />
        </>
      ) : (
        <div
          style={{
            ...imgStyle,
            transform: `translateX(${imageTranslateX}%)`,
            opacity: imageOpacity,
          }}
        >
          <Img
            src={backgroundImage?.src ?? fallbackImage}
            fallback={fallbackImage}
            style={imgStyle}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              height: '50%',
              backgroundImage:
                'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))',
              pointerEvents: 'none',
            }}
          />
        </div>
      )}

      {isFirstSlide && (
        <div
          style={{
            ...imgStyle,
            backgroundColor: 'white',
            opacity: whiteFade,
            zIndex: 10,
          }}
        />
      )}

      {musicUrl && (
        <Audio src={musicUrl} startFrom={audioOffset} volume={0.2} />
      )}
      {voiceOverUrl && (
        <Sequence from={VOICE_OVER_START}>
          <Audio src={voiceOverUrl} startFrom={0} volume={2} />
        </Sequence>
      )}

      {/* TEXT RENDERING */}
      {isFirstSlide ? (
        <TextBlockCenter
          textTranslateX={textTranslateX}
          textOpacity={textOpacity}
          page={page}
        />
      ) : isLastSlide ? (
        <TextBlockLastSlide
          textTranslateX={textTranslateX}
          textOpacity={textOpacity}
          page={page}
          logoImage={logoImage}
        />
      ) : (
        <TextBlockLeftSlide
          textTranslateX={textTranslateX}
          textOpacity={textOpacity}
          authorText={authorText}
          page={page}
        />
      )}

      {/* Logo in top-right on all slides except last */}
      {!isLastSlide && logoImage && (
        <div
          style={{
            position: 'absolute',
            top: 70,
            right: 150,
            zIndex: 999,
          }}
        >
          <Img
            src={logoImage?.src ?? fallbackImage}
            fallback={fallbackImage}
            style={{ width: '70%' }}
          />
        </div>
      )}

      {isLastSlide && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'black',
            opacity: blackFadeOpacity,
            transition: 'opacity 0.5s ease-out',
          }}
        />
      )}
    </AbsoluteFill>
  );
};

const TextBlockCenter = ({ textTranslateX, textOpacity, page }) => (
  <div
    style={{
      position: 'absolute',
      bottom: '15%',
      left: 0,
      right: 0,
      padding: '3rem',
      zIndex: 20,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      transform: `translateX(${textTranslateX}%)`,
      opacity: textOpacity,
    }}
  >
    <Img
      src={quort}
      style={{
        position: 'absolute',
        top: -150,
        width: 230,
        height: 230,
        transform: 'rotate(180deg)',
        zIndex: 1,
        opacity: 1,
        pointerEvents: 'none',
      }}
    />
    {page.texts
      .filter((text) => !text.tag.startsWith('p'))
      .map((text, i) => (
        <div
          key={i}
          style={{
            fontFamily: 'Mukta, sans-serif',
            fontSize: text.tag.startsWith('h') ? 43 : 35,
            fontWeight: text.tag.startsWith('h') ? 700 : 500,
            color: 'white',
            textAlign: 'center',
            margin: '1rem 0',
            lineHeight: 1.4,
            textTransform: 'uppercase',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            zIndex: 2,
            position: 'relative',
          }}
        >
          {text.content}
        </div>
      ))}
  </div>
);

const TextBlockLastSlide = ({ textTranslateX, textOpacity, page, logoImage }) => (
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      textAlign: 'center',
      transform: `translateX(${textTranslateX}%)`,
      opacity: textOpacity,
    }}
  >
    {logoImage && (
      <Img
        src={logoImage.src}
        fallback={fallbackImage}
        style={{
          width: 660,
          marginTop: '-6rem',
          marginBottom: '4rem',
          marginRight: '4rem',
          objectFit: 'contain',
          zIndex: 1,
        }}
      />
    )}
    {page.texts
      .filter((t) => t.tag.startsWith('h'))
      .map((text, i) => (
        <div
          key={i}
          style={{
            fontFamily: 'Mukta, sans-serif',
            fontSize: 68,
            fontWeight: 500,
            color: 'white',
            lineHeight: 1.4,
            marginBottom: '8rem',
            textTransform: 'uppercase',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            whiteSpace: 'pre-line',
            letterSpacing: '2px',
            zIndex: 1,
          }}
        >
          {text.content}
        </div>
      ))}
    {page.texts
      .filter((t) => t.tag === 'p')
      .map((text, i) => (
        <div
          key={i}
          style={{
            fontFamily: 'Mukta, sans-serif',
            fontSize: 35,
            fontWeight: 500,
            color: 'white',
            lineHeight: 1.6,
            textTransform: 'uppercase',
            textShadow: '1px 1px 3px rgba(0,0,0,0.4)',
            whiteSpace: 'pre-line',
            letterSpacing: '2px',
            zIndex: 1,
          }}
        >
          {text.content}
        </div>
      ))}
  </div>
);

const TextBlockLeftSlide = ({ textTranslateX, textOpacity, authorText, page }) => (
  <div
    style={{
      position: 'absolute',
      bottom: '20%',
      left: '5%',
      transform: `translateX(${textTranslateX}%)`,
      padding: '0 2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      textAlign: 'left',
      zIndex: 20,
      opacity: textOpacity,
    }}
  >
    <div style={{ position: 'relative', marginBottom: '1rem' }}>
      <Img
        src={quort}
        style={{
          position: 'absolute',
          top: -120,
          left: -80,
          width: 230,
          height: 230,
          transform: 'rotate(180deg)',
          zIndex: 1,
          opacity: 1,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          fontFamily: 'Mukta, sans-serif',
          fontSize: 40,
          fontWeight: 500,
          color: 'white',
          textTransform: 'uppercase',
          textShadow: '1px 1px 3px rgba(0,0,0,0.4)',
          position: 'relative',
          zIndex: 2,
          paddingLeft: '6rem',
          marginTop: '-1.5rem',
        }}
      >
        {authorText}
      </div>
    </div>
    {page.texts
      .filter((text) => !(text.tag === 'p'))
      .map((text, i) => (
        <div
          key={i}
          style={{
            fontFamily: 'Mukta, sans-serif',
            fontSize: text.tag.startsWith('h') ? 36 : 35,
            fontWeight: text.tag.startsWith('h') ? 700 : 500,
            color: 'white',
            margin: i === 0 ? '0 0 0.5rem 0' : '0.5rem 0',
            lineHeight: 1.4,
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            letterSpacing: text.tag.startsWith('h') ? '0.05em' : '0.03em',
            textTransform: text.tag.startsWith('h') ? 'uppercase' : 'none',
          }}
        >
          {text.content}
        </div>
      ))}
  </div>
);
