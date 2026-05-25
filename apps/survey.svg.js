import React from "react";
import Svg, {
  Circle,
  Path,
  Rect,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

const SurveyIcon = ({ size = 48, ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <Circle cx="24" cy="24" r="24" fill="#E9ECF9" />
    <Path
      d="M27.5745 17.8723L33.1915 31.6595L41.8723 33.1915V34.7234L28.5957 36.7659L12.2553 35.7447L7.14893 18.8936L7.65956 18.383L27.5745 17.8723Z"
      fill="#1644B1"
    />
    <Path
      d="M27.0639 17.3617L33.1916 31.6596L12.7661 34.2128L7.65967 18.383L27.0639 17.3617Z"
      fill="#448AFE"
    />
    <Path
      d="M41.8721 33.1915L33.1913 31.6595L13.2764 34.2127L29.1062 35.7447L41.8721 33.1915Z"
      fill="#054BC2"
    />
    <Path
      d="M31.6597 14.8085V30.6383L13.7874 32.1702L12.7661 13.2766L31.6597 14.8085Z"
      fill="url(#paint0_linear_142_178)"
    />
    <Rect
      x="15.3193"
      y="19.4042"
      width="9.19149"
      height="1.32766"
      fill="#FFD28A"
    />
    <Rect
      x="15.3193"
      y="25.0213"
      width="9.19149"
      height="1.32766"
      fill="#FFD28A"
    />
    <Rect
      x="36.7661"
      y="6.12769"
      width="5.10638"
      height="5.10638"
      fill="#458EFF"
    />
    <Rect
      x="42.8936"
      y="12.2553"
      width="3.06383"
      height="3.06383"
      fill="#FD9B16"
    />
    <Rect
      x="36.7661"
      y="17.3617"
      width="5.10638"
      height="5.10638"
      fill="#0A47C9"
    />
    <Path
      d="M26.4529 18.8936L27.5743 19.9149L29.6168 17.8723L30.6381 18.8936L27.5743 21.9574L25.5317 19.9149L26.4529 18.8936Z"
      fill="white"
    />
    <Path
      d="M26.4529 24L27.5743 25.0213L29.6168 22.9787L30.6381 24L27.5743 27.0638L25.5317 25.0213L26.4529 24Z"
      fill="white"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_142_178"
        x1="13.2768"
        y1="18.383"
        x2="25.5321"
        y2="28.0851"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FECF4A" />
        <Stop offset="1" stopColor="#FF7700" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default SurveyIcon;
