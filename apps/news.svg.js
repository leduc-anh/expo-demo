import React from "react";
import Svg, {
  Circle,
  Path,
  Rect,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

const NewsIcon = ({ size = 48, ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <Circle cx="24" cy="24" r="24" fill="#E9ECF9" />
    <Path
      d="M15.2501 38C15.2501 38 16.2818 37.2561 15.7747 25.858C15.2676 14.4599 15 10 15 10L39 16.6898C39 16.6898 37.9665 32.7963 37.1935 33.5402C36.4206 34.284 15.2501 38 15.2501 38Z"
      fill="url(#paint0_linear_142_235)"
    />
    <Path
      d="M10.8661 19C13.2047 26.3355 13.5258 36.2427 16 37.2413L15.7131 37.9976C15.7131 37.9976 13.6428 38.2398 12.263 33.8903C10.8833 29.5407 9 21.8288 9 21.8288L10.8661 19Z"
      fill="#0A44C6"
    />
    <Path
      d="M35.3529 24L21.6471 22.885C21.4755 22.885 21.3109 22.8383 21.1895 22.7554C21.0682 22.6724 21 22.5598 21 22.4425C21 22.3251 21.0682 22.2126 21.1895 22.1296C21.3109 22.0466 21.4755 22 21.6471 22L35.3529 23.115C35.5245 23.115 35.6891 23.1617 35.8105 23.2446C35.9318 23.3276 36 23.4402 36 23.5575C36 23.6749 35.9318 23.7874 35.8105 23.8704C35.6891 23.9534 35.5245 24 35.3529 24Z"
      fill="#B7D5FF"
    />
    <Rect x="21" y="26" width="8" height="1" rx="0.5" fill="#B8D4FF" />
    <Rect x="21" y="29" width="8" height="1" rx="0.5" fill="#B8D4FF" />
    <Rect x="30" y="26" width="6" height="1" rx="0.5" fill="#B8D4FF" />
    <Rect x="30" y="28.7" width="6" height="1" rx="0.5" fill="#B8D4FF" />
    <Path
      d="M11 16.0484L14.5973 36.228L15.7964 36.9759C15.7964 36.9759 16.2545 37.6832 15.7964 31.4401C15.3382 25.197 13.962 12 13.962 12L11 16.0484Z"
      fill="url(#paint1_linear_142_235)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_142_235"
        x1="15"
        y1="24"
        x2="39"
        y2="24"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#609DFF" />
        <Stop offset="1" stopColor="#4D8FFF" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_142_235"
        x1="11"
        y1="24.5"
        x2="16"
        y2="24.5"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F9BE4F" />
        <Stop offset="1" stopColor="#E66614" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default NewsIcon;
