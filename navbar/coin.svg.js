import Svg, { G, Path } from "react-native-svg";

const CoinIcon = ({ color = "#8e8c8f" }) => (
  <Svg
    width={22}
    height={22}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <G>
      <Path d="M11,11m-11,0a11,11 0,1 1,22 0a11,11 0,1 1,-22 0" fill={color} />
      <Path
        d="M11,11m-8.8,0a8.8,8.8 0,1 1,17.6 0a8.8,8.8 0,1 1,-17.6 0"
        fill={color}
        stroke="#000000"
        strokeOpacity={0}
        strokeWidth={1}
      />
      <Path
        d="M11,11m-8.3,0a8.3,8.3 0,1 1,16.6 0a8.3,8.3 0,1 1,-16.6 0"
        fill="#000000"
        fillOpacity={0}
        stroke="#fff"
        strokeWidth={1}
      />
      <Path
        d="M11,7.333L11,7.333A1.1,1.1 0,0 1,12.1 8.433L12.1,13.566A1.1,1.1 0,0 1,11 14.666L11,14.666A1.1,1.1 0,0 1,9.9 13.566L9.9,8.433A1.1,1.1 0,0 1,11 7.333z"
        fill="#fafafa"
      />
    </G>
  </Svg>
);

export default CoinIcon;
