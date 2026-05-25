import Svg, { Path } from "react-native-svg";

const ArrowRightIcon = ({ size = 20 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <Path
        d="M7.016,4.504A0.518,0.518 0,0 1,7.337 4.616L12.304,8.611a0.512,0.512 0,0 1,0 0.8L7.359,13.383a0.512,0.512 0,1 1,-0.641 -0.8L11.166,9.01 6.695,5.414a0.512,0.512 0,0 1,0.321 -0.911Z"
        fill="#111"
        fillOpacity={0.65}
      />
    </Svg>
  );
};

export default ArrowRightIcon;
