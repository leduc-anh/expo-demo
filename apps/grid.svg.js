import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const GridIcon = ({ size = 28, color = "#000" }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}>
      <Defs>
        <ClipPath id="clip">
          <Path d="M0,0h24v24h-24z" />
        </ClipPath>
      </Defs>

      <G clipPath="url(#clip)">
        <Path
          d="M11.04,3.4a0.4,0.4 0,0 0,-0.4 -0.4L3.4,3A0.4,0.4 0,0 0,3 3.4L3,10.64a0.4,0.4 0,0 0,0.4 0.4L10.64,11.04a0.4,0.4 0,0 0,0.4 -0.4ZM10.24,10.24L3.8,10.24L3.8,3.8L10.24,3.8ZM10.24,10.24"
          fill={color}
          stroke={color}
          strokeWidth={0.6}
        />

        <Path
          d="M21,3.4a0.4,0.4 0,0 0,-0.4 -0.4L13.36,3A0.4,0.4 0,0 0,12.96 3.4L12.96,10.64a0.4,0.4 0,0 0,0.4 0.4L20.6,11.04a0.4,0.4 0,0 0,0.4 -0.4ZM20.2,10.24L13.76,10.24L13.76,3.8L20.2,3.8ZM20.2,10.24"
          fill={color}
          stroke={color}
          strokeWidth={0.6}
        />

        <Path
          d="M11.04,13.36a0.4,0.4 0,0 0,-0.4 -0.4L3.4,12.96a0.4,0.4 0,0 0,-0.4 0.4v7.24a0.4,0.4 0,0 0,0.4 0.4L10.64,21a0.4,0.4 0,0 0,0.4 -0.4ZM10.24,20.16L3.8,20.16v-6.4L10.24,13.76ZM10.24,20.16"
          fill={color}
          stroke={color}
          strokeWidth={0.6}
        />

        <Path
          d="M21,13.36a0.4,0.4 0,0 0,-0.4 -0.4h-7.24a0.4,0.4 0,0 0,-0.4 0.4v7.24a0.4,0.4 0,0 0,0.4 0.4h7.24a0.4,0.4 0,0 0,0.4 -0.4ZM20.2,20.16h-6.44v-6.4h6.44ZM20.2,20.16"
          fill={color}
          stroke={color}
          strokeWidth={0.6}
        />
      </G>
    </Svg>
  );
};

export default GridIcon;
