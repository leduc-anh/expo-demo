import Svg, {
  G,
  Mask,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  Rect,
} from "react-native-svg";

const UserIcon = (props) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_130_17)">
      <Mask
        id="mask0_130_17"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={24}
        height={24}
      >
        <Path d="M24 0H0V24H24V0Z" fill="white" />
      </Mask>
      <G mask="url(#mask0_130_17)">
        <Path
          d="M20.0076 15.8424C17.6213 14.3766 14.8755 13.6006 12.075 13.6006C9.27444 13.6006 6.52867 14.3766 4.14237 15.8424C3.7061 16.1257 3.34794 16.514 3.10074 16.9717C2.85355 17.4294 2.72524 17.9418 2.72757 18.462V22.9092H21.4284V18.462C21.4299 17.9413 21.3007 17.4285 21.0524 16.9708C20.8042 16.5131 20.4449 16.1251 20.0076 15.8424Z"
          fill="url(#paint0_linear_130_17)"
        />
        <Path
          d="M15.9348 2.68801C16.6975 3.45079 17.2169 4.4226 17.4273 5.48056C17.6377 6.53851 17.5296 7.63509 17.1168 8.63164C16.704 9.62819 16.0049 10.4799 15.108 11.0792C14.2111 11.6785 13.1567 11.9983 12.078 11.9983C10.9994 11.9983 9.94491 11.6785 9.04802 11.0792C8.15113 10.4799 7.45207 9.62819 7.03925 8.63164C6.62643 7.63509 6.51838 6.53851 6.72877 5.48056C6.93916 4.4226 7.45854 3.45079 8.22123 2.68801C8.72769 2.18149 9.32896 1.77969 9.99071 1.50556C10.6525 1.23143 11.3617 1.09033 12.078 1.09033C12.7943 1.09033 13.5036 1.23143 14.1653 1.50556C14.8271 1.77969 15.4284 2.18149 15.9348 2.68801Z"
          fill="url(#paint1_linear_130_17)"
        />
      </G>
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_130_17"
        x1={12.0776}
        y1={13.6007}
        x2={21.4299}
        y2={28.7922}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#5597FF" />
        <Stop offset={1} stopColor="#185ECE" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_130_17"
        x1={12.0777}
        y1={13.6007}
        x2={21.43}
        y2={28.7922}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#5597FF" />
        <Stop offset={1} stopColor="#185ECE" />
      </LinearGradient>
      <ClipPath id="clip0_130_17">
        <Rect width={24} height={24} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default UserIcon;
