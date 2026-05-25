import React from "react";
import Svg, {
  Circle,
  Rect,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

const CareIcon = ({ size = 48, ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <Circle cx="24" cy="24" r="24" fill="#E9ECF9" />
    <Rect x="13" y="14.5" width="22.8" height="9" rx="3" fill="#0032B3" />
    <Rect
      x="9"
      y="17"
      width="31"
      height="20"
      rx="4"
      fill="url(#paint0_linear_140_108)"
    />
    <Rect
      x="9"
      y="20"
      width="31"
      height="4.5"
      fill="url(#paint1_linear_140_108)"
    />
    <Rect x="14" y="26" width="2.2" height="7" fill="#A2C1FE" />
    <Rect
      x="11.5"
      y="30.7"
      width="2.2"
      height="7"
      transform="rotate(-90 11.5 30.7)"
      fill="#A2C1FE"
    />
    <Rect x="24" y="27" width="11" height="1" rx="0.5" fill="#ACD8FF" />
    <Rect x="24" y="29.5" width="7" height="1" rx="0.5" fill="#ACD8FF" />
    <Defs>
      <LinearGradient
        id="paint0_linear_140_108"
        x1="24.5"
        y1="17"
        x2="24.5"
        y2="37"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3D90FF" />
        <Stop offset="1" stopColor="#003AAC" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_140_108"
        x1="24.5"
        y1="20"
        x2="24.5"
        y2="24.5"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F1C965" />
        <Stop offset="1" stopColor="#FF8818" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default CareIcon;
