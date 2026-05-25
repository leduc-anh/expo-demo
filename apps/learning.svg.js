import React from "react";
import Svg, {
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

const LearningIcon = ({ size = 48, ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <Circle cx="24" cy="24" r="24" fill="#E9ECF9" />
    <Path
      d="M13 25H35V33C35 33 34 36.5 24 36.5C14 36.5 13 33 13 33V25Z"
      fill="url(#paint0_linear_140_71)"
    />
    <Path
      d="M24 12L39.5 21L22.5 31L7 22L24 12Z"
      fill="url(#paint1_linear_140_71)"
    />
    <Path
      d="M39 21L41.5 22.5L24.5 32L22 30.5L39 21Z"
      fill="url(#paint2_linear_140_71)"
    />
    <Path
      d="M23.5603 20.881C23.6476 20.8304 23.7545 20.8272 23.8448 20.8723L25.2022 21.551C25.4158 21.6578 25.4251 21.9593 25.2184 22.0789L16.3499 27.2133C16.2572 27.267 16.2002 27.3659 16.2002 27.473V34.5C16.2002 34.6657 16.0659 34.8 15.9002 34.8H14.5002C14.3345 34.8 14.2002 34.6657 14.2002 34.5V26.473C14.2002 26.3659 14.2572 26.267 14.3499 26.2133L23.5603 20.881Z"
      fill="url(#paint3_linear_140_71)"
    />
    <Path
      d="M14.0966 33.3626C14.1579 33.148 14.3541 33 14.5773 33H15.823C16.0463 33 16.2425 33.148 16.3038 33.3626L17.1194 36.2171C17.1693 36.3917 17.1169 36.578 16.9558 36.6619C16.6753 36.808 16.1298 37 15.2002 37C14.2706 37 13.725 36.808 13.4446 36.6619C13.2835 36.578 13.2311 36.3917 13.281 36.2171L14.0966 33.3626Z"
      fill="url(#paint4_linear_140_71)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_140_71"
        x1="35"
        y1="30.75"
        x2="13"
        y2="30.75"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset="0.00967653" stopColor="#0040D9" />
        <Stop offset="0.822186" stopColor="#064CC9" />
        <Stop offset="1" stopColor="#03185E" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_140_71"
        x1="23.25"
        y1="12"
        x2="23.25"
        y2="31"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#438DFF" />
        <Stop offset="1" stopColor="#478BFF" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_140_71"
        x1="31.75"
        y1="21"
        x2="31.75"
        y2="32"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#AED1F5" />
        <Stop offset="1" stopColor="#BDD1F2" />
      </LinearGradient>
      <LinearGradient
        id="paint3_linear_140_71"
        x1="24.4502"
        y1="16.8"
        x2="24.4502"
        y2="27.8"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFD635" />
        <Stop offset="1" stopColor="#EB944B" />
      </LinearGradient>
      <LinearGradient
        id="paint4_linear_140_71"
        x1="15.2002"
        y1="33"
        x2="15.2002"
        y2="37"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F6801C" />
        <Stop offset="1" stopColor="#FD5E00" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default LearningIcon;
