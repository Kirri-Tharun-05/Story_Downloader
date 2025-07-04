// This is your entry file! Refer to it when you render:
// npx remotion render <entry-file> HelloWorld out/video.mp4

import "@fontsource/mukta/400.css";
import "@fontsource/mukta/600.css";
import "@fontsource/mukta/700.css";

import { registerRoot } from "remotion";
import { RemotionVideo } from "./Video";

registerRoot(RemotionVideo);
