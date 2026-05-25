import React from "react";
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  Rect,
} from "react-native-svg";

export default function SupportProfileIcon({ size = 20 }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Defs>
        <LinearGradient
          id="grad"
          x1="10"
          y1="0"
          x2="20"
          y2="20"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0" stopColor="#5597FF" />
          <Stop offset="1" stopColor="#185ECE" />
        </LinearGradient>

        <ClipPath id="clip">
          <Rect width="20" height="20" />
        </ClipPath>
      </Defs>

      <G clipPath="url(#clip)">
        {/* Bottom */}
        <Path
          d="M12.401 13.147a3.958 3.958 0 0 1-4.8 0L4.018 16.726a9 9 0 0 0 11.96 0Z"
          fill="url(#grad)"
        />

        {/* Right */}
        <Path
          d="M16.726 4.019l-3.579 3.579a3.958 3.958 0 0 1 0 4.8l3.579 3.579a9 9 0 0 0 0-11.96Z"
          fill="url(#grad)"
        />

        {/* Top */}
        <Path
          d="M10 1A8.934 8.934 0 0 0 4.016 3.274l3.579 3.579a3.958 3.958 0 0 1 4.8 0l3.579-3.579A8.934 8.934 0 0 0 10 1Z"
          fill="url(#grad)"
        />

        {/* Left */}
        <Path
          d="M6.853 7.599L3.274 4.018a9 9 0 0 0 0 11.96l3.579-3.579a3.958 3.958 0 0 1 0-4.8Z"
          fill="url(#grad)"
        />
      </G>
    </Svg>
  );
}
