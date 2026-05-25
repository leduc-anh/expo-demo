import React from "react";
import Svg, {
  Circle,
  Path,
  Rect,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

const RewardIcon = ({ size = 48, ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <Circle cx="24" cy="24" r="24" fill="#E9ECF9" />
    <Path
      d="M12.7407 18C12.7407 16.8954 13.6362 16 14.7407 16H37.1111C38.2157 16 39.1111 16.8954 39.1111 18V31.5556C39.1111 31.5556 39.0446 32.5926 37.9259 34.0741C36.9735 35.3354 35.7205 35.8867 35.2027 36.0715C35.0448 36.1278 34.8781 36.1481 34.7105 36.1481H14.7407C13.6362 36.1481 12.7407 35.2527 12.7407 34.1481V18Z"
      fill="url(#paint0_linear_140_31)"
    />
    <Path
      d="M23.176 32.9716C23.176 29.0679 20.8108 25.7709 17.8038 25.5668H15.3077C12.1997 25.6683 11.125 29.1076 11.125 33.0743C11.125 37.0398 12.1905 40.1431 15.2985 40.3263L15.3364 40.3368H17.7418C20.7476 40.0323 23.176 36.8753 23.176 32.9716Z"
      fill="url(#paint1_linear_140_31)"
    />
    <Path
      d="M15.171 40.2784C18.2652 40.2784 20.7728 36.9756 20.7728 32.9016C20.7728 28.8288 18.2652 25.5259 15.171 25.5259C12.0779 25.5259 9.57031 28.8288 9.57031 32.9016C9.57031 36.9756 12.0779 40.2784 15.171 40.2784Z"
      fill="url(#paint2_linear_140_31)"
    />
    <Path
      d="M14.8828 40.0322C17.8175 40.0322 20.1953 36.8659 20.1953 32.9599C20.1953 29.0539 17.8175 25.8876 14.8828 25.8876C11.9493 25.8876 9.57031 29.0539 9.57031 32.9599C9.57031 36.8659 11.9493 40.0322 14.8828 40.0322Z"
      fill="url(#paint3_linear_140_31)"
    />
    <Path
      d="M14.3536 38.455C16.5121 38.455 18.2619 36.0341 18.2619 33.0475C18.2619 30.0608 16.5121 27.64 14.3536 27.64C12.1951 27.64 10.4453 30.0608 10.4453 33.0475C10.4453 36.0341 12.1951 38.455 14.3536 38.455Z"
      fill="url(#paint4_linear_140_31)"
    />
    <Path
      d="M14.5957 38.2764C16.6199 38.2764 18.2618 35.9641 18.2618 33.1116C18.2618 30.2591 16.6199 27.9468 14.5957 27.9468C12.5704 27.9468 10.9297 30.2591 10.9297 33.1116C10.9297 35.9641 12.5704 38.2764 14.5957 38.2764Z"
      fill="url(#paint5_linear_140_31)"
    />
    <Path
      d="M9.90685 32.5516C10.0883 32.5889 10.2754 32.5901 10.458 32.5574C10.6107 29.6174 12.4156 27.2957 14.6223 27.2957C16.8474 27.2957 18.6638 29.6559 18.7901 32.6321C18.9876 32.6589 19.1885 32.6531 19.3848 32.6169C19.5811 32.6181 19.7775 32.5866 19.9635 32.5236C19.704 28.7727 17.5547 25.9902 14.6682 25.9902C11.7818 25.9902 9.85863 28.6036 9.5957 32.3474C9.67378 32.4501 9.78285 32.5212 9.90685 32.5516Z"
      fill="white"
      fillOpacity={0.1}
    />
    <Path
      d="M17.7338 32.7371C17.6363 30.2381 16.2011 28.2571 14.4455 28.2571C12.6889 28.2571 11.2307 30.2696 11.1538 32.7942C13.3204 33.3169 15.5776 33.2971 17.7338 32.7371Z"
      fill="white"
      fillOpacity={0.2}
    />
    <Path
      d="M20.052 41.9689C20.052 42.1661 18.3987 42.3259 16.3527 42.3259C14.3067 42.3259 12.6533 42.1661 12.6533 41.9689C12.6533 41.7729 14.3067 41.6131 16.3527 41.6131C18.3987 41.6131 20.052 41.7729 20.052 41.9689Z"
      fill="black"
      fillOpacity={0.1}
    />
    <Path
      d="M31.7036 12.4494H35.111C35.111 12.4494 36.5412 12.3012 37.9258 13.6345C39.3105 14.9679 39.111 16.3012 39.111 16.3012V31.7037C39.111 31.7037 39.2592 31.5507 38.074 30.963C36.8888 30.3753 35.111 30.2271 35.111 30.2271H31.7036V12.4494Z"
      fill="#488FFF"
    />
    <Rect
      x="16.2964"
      y="18.6667"
      width="13.6296"
      height="1.48148"
      rx="0.740741"
      fill="#ABCAFF"
    />
    <Rect
      x="16.8887"
      y="22.2222"
      width="13.037"
      height="1.48148"
      rx="0.740741"
      fill="#ABCAFF"
    />
    <Rect
      x="24.5928"
      y="25.7778"
      width="5.33333"
      height="1.48148"
      rx="0.740741"
      fill="#ABCAFF"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_140_31"
        x1="47.8518"
        y1="26.0741"
        x2="21.4815"
        y2="26.0741"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#1443A8" />
        <Stop offset="1" stopColor="#3682F7" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_140_31"
        x1="17.1505"
        y1="25.5668"
        x2="17.1505"
        y2="40.3368"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFC021" />
        <Stop offset="0.225" stopColor="#F0B02E" />
        <Stop offset="0.607" stopColor="#FF810C" />
        <Stop offset="1" stopColor="#F96002" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_140_31"
        x1="15.171"
        y1="25.5259"
        x2="15.171"
        y2="40.2784"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset="0.068" stopColor="#FDBC05" />
        <Stop offset="1" stopColor="#FFA41E" />
      </LinearGradient>
      <LinearGradient
        id="paint3_linear_140_31"
        x1="14.8828"
        y1="25.8876"
        x2="14.8828"
        y2="40.0322"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFC73F" />
        <Stop offset="0.325" stopColor="#FEC345" />
        <Stop offset="0.691" stopColor="#FFBB39" />
        <Stop offset="1" stopColor="#FFBC33" />
      </LinearGradient>
      <LinearGradient
        id="paint4_linear_140_31"
        x1="14.3536"
        y1="38.4561"
        x2="14.3536"
        y2="27.64"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#E9C338" />
        <Stop offset="0.497" stopColor="#FC9610" />
        <Stop offset="1" stopColor="#FF6202" />
      </LinearGradient>
      <LinearGradient
        id="paint5_linear_140_31"
        x1="14.5957"
        y1="27.9468"
        x2="14.5957"
        y2="38.2764"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FDB548" />
        <Stop offset="0.319" stopColor="#FCB647" />
        <Stop offset="0.702" stopColor="#FFA224" />
        <Stop offset="1" stopColor="#FFA21E" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default RewardIcon;
