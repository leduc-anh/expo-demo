import Svg, { Circle, Line } from "react-native-svg";

const ListIcon = ({ size = 28, color = "#000" }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 400 339" fill="none">
      <Circle cx="44" cy="44" r="34" stroke={color} strokeWidth="28" />
      <Line x1="81" y1="41" x2="382" y2="41" stroke={color} strokeWidth="28" />
      <Circle cx="44" cy="295" r="34" stroke={color} strokeWidth="28" />
      <Line
        x1="81"
        y1="292"
        x2="382"
        y2="292"
        stroke={color}
        strokeWidth="28"
      />
      <Circle cx="44" cy="171" r="34" stroke={color} strokeWidth="28" />
      <Line
        x1="81"
        y1="168"
        x2="382"
        y2="168"
        stroke={color}
        strokeWidth="28"
      />
    </Svg>
  );
};

export default ListIcon;
