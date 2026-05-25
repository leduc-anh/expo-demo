import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const IconLogoutNew = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Defs>
      <LinearGradient
        id="grad_0"
        x1={15.3763}
        y1={5.4984}
        x2={18.553}
        y2={14.7294}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#5597ff" />
        <Stop offset={1} stopColor="#185ece" />
      </LinearGradient>
      <LinearGradient
        id="grad_1"
        x1={5.25}
        y1={0.9995}
        x2={8.1375}
        y2={25.6069}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#5597ff" />
        <Stop offset={1} stopColor="#185ece" />
      </LinearGradient>
      <LinearGradient
        id="grad_2"
        x1={7.9632}
        y1={0.9986}
        x2={12.2265}
        y2={7.8355}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#5597ff" />
        <Stop offset={1} stopColor="#185ece" />
      </LinearGradient>
      <LinearGradient
        id="grad_3"
        x1={10.6848}
        y1={11.7136}
        x2={12.8565}
        y2={18.5989}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#5597ff" />
        <Stop offset={1} stopColor="#185ece" />
      </LinearGradient>
    </Defs>
    <Path
      d="M15.729,12.086a0.558,0.558 0,0 1,0 -0.8L17.58,9.439L11.812,9.439a0.563,0.563 0,0 1,0 -1.126L17.58,8.313L15.729,6.458a0.562,0.562 0,0 1,0.8 -0.794L19.338,8.476a0.564,0.564 0,0 1,0 0.795L16.524,12.084a0.56,0.56 0,0 1,-0.4 0.167A0.567,0.567 0,0 1,15.729 12.086Z"
      fill="url(#grad_0)"
    />
    <Path
      d="M7.5,19a1.546,1.546 0,0 1,-0.465 -0.07l-4.514,-1.5A1.514,1.514 0,0 1,1.5 16L1.5,2.5A1.5,1.5 0,0 1,3 1a1.547,1.547 0,0 1,0.465 0.07l4.513,1.5A1.514,1.514 0,0 1,9 4v13.5A1.5,1.5 0,0 1,7.5 19Z"
      fill="url(#grad_1)"
    />
    <Path
      d="M12.938,6a0.563,0.563 0,0 1,-0.562 -0.562L12.376,3.062a0.939,0.939 0,0 0,-0.937 -0.938L3,2.124a0.562,0.562 0,1 1,0 -1.125h8.438A2.064,2.064 0,0 1,13.5 3.062L13.5,5.437A0.563,0.563 0,0 1,12.938 6ZM12.938,6"
      fill="url(#grad_2)"
    />
    <Path
      d="M11.438,16.75h-3a0.562,0.562 0,1 1,0 -1.125h3a0.939,0.939 0,0 0,0.937 -0.938L12.375,12.31a0.563,0.563 0,1 1,1.125 0v2.375A2.064,2.064 0,0 1,11.438 16.75ZM11.438,16.75"
      fill="url(#grad_3)"
    />
  </Svg>
);

export default IconLogoutNew;
