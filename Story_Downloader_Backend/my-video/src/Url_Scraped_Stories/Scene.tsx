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




import {
  AbsoluteFill,
  Img,
  interpolate,
  useCurrentFrame,
  Easing,
  Audio,
} from 'remotion';
import type { AMPStoryPage } from '../types/ampStoryData';
import quort from '../../public/quort.webp';
import fallbackImage from '../../public/1.webp'; // optional backup image
import backgroundMusic from '../../public/backgroundMusic.mp3';

export interface SceneProps {
  page: AMPStoryPage;
  index: number;
  audioOffset: number;
}

export const Scene: React.FC<SceneProps> = ({ page, index, audioOffset }) => {
  const frame = useCurrentFrame();

  const scale = interpolate(frame, [0, 100], [1, 1.1], {
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });

  // const backgroundImage = page.images?.[0]?.src;
  // const logoImage = page.images?.[1]?.src;
  // const layout = page.images?.[0]?.layout ?? 'fill';

  // const imgStyle =
  //   layout === 'fill'
  //     ? {
  //         position: 'absolute',
  //         width: '100%',
  //         height: '100%',
  //         objectFit: 'cover',
  //       }
  //     : {
  //         width: '100%',
  //         height: 'auto',
  //         objectFit: 'contain',
  //       };

  // Filter out only the relevant images
  const backgroundImage = page.images.find(
    (img) =>
      img.alt !== 'white-quotation.png' &&
      !img.alt?.toLowerCase().includes('suvichaar')
  );

  const logoImage = page.images.find(
    (img) => img.alt?.toLowerCase().includes('suvichaar')
  );

  // Style based on layout
  const layout = backgroundImage?.layout ?? 'fill';

  const imgStyle =
    layout === 'fill'
      ? {
        position: 'absolute',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }
      : {
        width: '100%',
        height: 'auto',
        objectFit: 'contain',
      };


  const initialTextDelay = 10;
  const delayPerLine = 25;
  const animationDuration = 30;

  return (
    <AbsoluteFill style={{ backgroundColor: 'black' }}>
      {/* ✅ Dynamic Background with fallback handling */}
      {backgroundImage ? (
        // <Img
        //   src={backgroundImage}
        //   fallback={fallbackImage}
        <Img
          src={backgroundImage?.src ?? fallbackImage}
          fallback={fallbackImage}
          style={{
            ...imgStyle,
            transform: `scale(${scale})`,
            opacity: 0.6,
          }}
        />
      ) : (
        <div
          style={{
            ...imgStyle,
            backgroundColor: 'black',
            opacity: 0.6,
          }}
        />
      )}

      {/* ✅ Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '50%',
          backgroundImage:
            'linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* ✅ Background Audio */}
      <Audio src={backgroundMusic} startFrom={audioOffset} loop={false} />

      {/* ✅ Text Block with Quote */}
      <div
        style={{
          position: 'absolute',
          bottom: 20,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '3rem',
          zIndex: 2,
        }}
      >
        {/* Quote Icon */}
        <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
          <Img
            src={quort}
            style={{
              width: 80,
              height: 80,
              opacity: interpolate(frame, [initialTextDelay, initialTextDelay + 20], [0, 1], {
                extrapolateRight: 'clamp',
                easing: Easing.bezier(0.22, 1, 0.36, 1),
              }),
              transform: `translateY(${interpolate(
                frame,
                [initialTextDelay, initialTextDelay + 20],
                [30, 0],
                { extrapolateRight: 'clamp', easing: Easing.bezier(0.22, 1, 0.36, 1) }
              )}px)`,
            }}
          />
        </div>

        {/* Animated Text */}
        {page.texts.map((text, i) => {
          const start = initialTextDelay + i * delayPerLine;
          const end = start + animationDuration;

          const opacity = interpolate(frame, [start, end], [0, 1], {
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.22, 1, 0.36, 1),
          });

          const translateY = interpolate(frame, [start, end], [20, 0], {
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.22, 1, 0.36, 1),
          });

          return (
            <div
              key={i}
              style={{
                fontFamily: text.tag.startsWith('h') ? 'sans-serif' : 'cursive',
                color: 'white',
                fontSize: text.tag.startsWith('h') ? 37 : '2rem',
                lineHeight: '1.4',
                textAlign: 'center',
                margin: 10,
                padding: '0 0 2rem 0',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                fontWeight: text.tag.startsWith('h') ? 'bold' : 'normal',
                opacity,
                transform: `translateY(${translateY}px)`,
              }}
            >
              {text.content}
            </div>
          );
        })}
      </div>

      {/* ✅ Dynamic Logo (Optional) */}
      <div
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          zIndex: 999,
        }}
      >
        {logoImage && (
          // <Img
          //   src={logoImage}
          //   fallback={fallbackImage}
          <Img
            src={logoImage?.src ?? fallbackImage}
            fallback={fallbackImage}
            style={{
              width: '50%',
            }}
          />
        )}
      </div>
    </AbsoluteFill>
  );
};
