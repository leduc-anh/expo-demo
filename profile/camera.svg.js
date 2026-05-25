import Svg, { Path, G, ClipPath, Defs, Rect } from "react-native-svg";

const CameraIcon = ({ size = 32 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <Path
        d="M16,16m-16,0a16,16 0,1 1,32 0a16,16 0,1 1,-32 0"
        fill="#838083"
      />

      <Path
        d="M16,16m-15.5,0a15.5,15.5 0,1 1,31 0a15.5,15.5 0,1 1,-31 0"
        fill="none"
        stroke="#ffffff"
        strokeWidth={1}
      />

      <G clipPath="url(#clip)">
        <Path
          d="M24.221,23.11L7.778,23.11A0.778,0.778 0,0 1,7 22.331v-10.1A0.778,0.778 0,0 1,7.778 11.45L11.387,11.45l1.827,-1.944c0.139,-0.144 0.247,-0.261 0.387,-0.261h4.666c0.144,0 0.247,0.117 0.387,0.261L20.482,11.45h3.74a0.778,0.778 0,0 1,0.778 0.774v10.1A0.778,0.778 0,0 1,24.221 23.11ZM16,12.976a4.266,4.266 0,1 0,4.23 4.3v-0.036A4.248,4.248 0,0 0,16 12.976ZM22.61,12.985a0.8,0.8 0,1 0,0.788 0.81v-0.014a0.792,0.792 0,0 0,-0.783 -0.8ZM16,19.906a2.66,2.66 0,1 1,2.646 -2.678s0,0.009 0,0.013A2.655,2.655 0,0 1,16 19.906Z"
          fill="#ffffff"
        />
      </G>

      <Defs>
        <ClipPath id="clip">
          <Rect x="7" y="7" width="18" height="18" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default CameraIcon;
