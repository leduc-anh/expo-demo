import React from "react";
import Svg, {
  Circle,
  Path,
  Rect,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

const EmployeeIcon = ({ size = 48, ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <Circle cx="24" cy="24" r="24" fill="#E9ECF9" />
    <Path
      d="M34.2752 20.9606C34.281 20.744 34.4583 20.5714 34.675 20.5714H37.2921C37.5215 20.5714 37.7039 20.7639 37.6915 20.993L36.7551 38.3155C36.7437 38.5277 36.5682 38.6939 36.3557 38.6939H34.2069C33.9817 38.6939 33.8009 38.5081 33.807 38.2831L34.2752 20.9606Z"
      fill="url(#paint0_linear_143_258)"
    />
    <Rect
      x="15.1836"
      y="17.6326"
      width="20.5714"
      height="13.7143"
      rx="2"
      fill="url(#paint1_linear_143_258)"
    />
    <Path
      d="M12.8701 26.0779C12.8007 25.7656 13.0383 25.4694 13.3582 25.4694H23.5002C23.7763 25.4694 24.0002 25.2456 24.0002 24.9694V23.0306C24.0002 22.7545 24.224 22.5306 24.5002 22.5306H36.2195C36.5016 22.5306 36.7278 22.7638 36.7193 23.0458L36.2598 38.2091C36.2516 38.4792 36.0302 38.6939 35.76 38.6939H16.0747C15.8404 38.6939 15.6375 38.5311 15.5866 38.3024L12.8701 26.0779Z"
      fill="url(#paint2_linear_143_258)"
    />
    <Path
      d="M12.2446 9.30615C12.2446 9.30615 12.2446 10.7755 13.2242 12.7347C14.2038 14.6939 15.6731 15.6735 15.6731 15.6735L9.3058 19.5919C9.3058 19.5919 7.48656 18.6123 6.36703 16.6531C5.24749 14.6939 5.38743 12.7347 5.38743 12.7347L12.2446 9.30615Z"
      fill="#488FFF"
    />
    <Path
      d="M42.4519 13.4719C42.4519 13.4719 41.7328 14.5248 41.1426 15.6735C40.5525 16.8222 40.6529 18.1225 40.6529 18.1225L36.6015 15.9797C36.6015 15.9797 36.4438 14.8259 36.9863 13.6162C37.5288 12.4065 38.5001 11.7458 38.5001 11.7458L42.4519 13.4719Z"
      fill="#1052CD"
    />
    <Rect
      x="29.3877"
      y="35.7551"
      width="5.2898"
      height="1.27347"
      rx="0.636735"
      fill="#98C1FF"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_143_258"
        x1="35.7551"
        y1="20.5714"
        x2="35.7551"
        y2="38.6939"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#5787DF" />
        <Stop offset="1" stopColor="#053FA6" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_143_258"
        x1="25.4693"
        y1="17.6326"
        x2="25.4693"
        y2="31.3469"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset="0.0240998" stopColor="#EDD055" />
        <Stop offset="0.182755" stopColor="#FAAF1B" />
        <Stop offset="0.500114" stopColor="#FC8006" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_143_258"
        x1="24.7349"
        y1="22.5306"
        x2="24.7349"
        y2="38.6939"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3C8AF0" />
        <Stop offset="1" stopColor="#1157D3" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default EmployeeIcon;
