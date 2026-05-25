import Svg, {
  Circle,
  Rect,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

const DisciplineIcon = ({ size = 48, ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <Circle cx="24" cy="24" r="24" fill="#E9ECF9" />
    <Rect
      x="19.7632"
      y="19.4884"
      width="10"
      height="10"
      transform="rotate(-42 19.7632 19.4884)"
      fill="url(#paint0_linear_140_55)"
    />
    <Rect
      x="17.6816"
      y="18.6713"
      width="12"
      height="2"
      rx="1"
      transform="rotate(-42 17.6816 18.6713)"
      fill="#0E51CC"
    />
    <Path
      d="M15.0435 17.1125C14.6218 16.7108 14.6313 16.0351 15.0641 15.6453L23.8443 7.73964C24.284 7.34366 24.9696 7.4141 25.3197 7.89123L26.1865 9.07269C26.3826 9.33996 26.4335 9.68702 26.3224 9.99934L25.9408 11.0722C25.8851 11.2288 25.7913 11.369 25.6678 11.4803L18.6063 17.8384C18.4869 17.946 18.3433 18.0231 18.1877 18.0634L17.0379 18.3608C16.7034 18.4474 16.3479 18.3551 16.0977 18.1168L15.0435 17.1125Z"
      fill="url(#paint1_linear_140_55)"
    />
    <Path
      d="M28.314 31.9691C28.6831 32.3818 29.3171 32.416 29.7285 32.0456L38.6845 23.9816C39.0787 23.6267 39.1272 23.0258 38.795 22.6122L37.9277 21.5325C37.6698 21.2114 37.2414 21.0812 36.8484 21.2047L35.4318 21.6496C35.295 21.6926 35.1689 21.7645 35.0623 21.8605L27.9729 28.2439C27.8545 28.3505 27.7632 28.4839 27.7068 28.633L27.215 29.932C27.0829 30.281 27.1561 30.6745 27.4049 30.9527L28.314 31.9691Z"
      fill="url(#paint2_linear_140_55)"
    />
    <Rect
      x="25.7109"
      y="27.589"
      width="12"
      height="2"
      rx="1"
      transform="rotate(-42 25.7109 27.589)"
      fill="#0E51CC"
    />
    <Rect
      x="9.87988"
      y="32.424"
      width="16"
      height="4.6"
      transform="rotate(-42 9.87988 32.424)"
      fill="#4989F9"
    />
    <Rect
      x="7.35303"
      y="33.3536"
      width="2.5"
      height="7"
      transform="rotate(-42 7.35303 33.3536)"
      fill="#4C87FF"
    />
    <Path
      d="M23.1191 18.6478L28.3212 13.9639L32.3359 18.4228L27.1339 23.1067L23.1191 18.6478Z"
      fill="url(#paint3_linear_140_55)"
    />
    <Path
      d="M21.5 34.5H36.5L39 38.5L38.9999 39.5H18.9999V38.5L21.5 34.5Z"
      fill="#0649C8"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_140_55"
        x1="24.7632"
        y1="19.4884"
        x2="24.7632"
        y2="29.4884"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3486FF" />
        <Stop offset="1" stopColor="#0253D8" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_140_55"
        x1="15.6"
        y1="17.8541"
        x2="26.004"
        y2="8.48626"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3D8EFF" />
        <Stop offset="1" stopColor="#438AFB" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_140_55"
        x1="27.6446"
        y1="31.2307"
        x2="38.0487"
        y2="21.8629"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3D8EFF" />
        <Stop offset="1" stopColor="#438AFB" />
      </LinearGradient>
      <LinearGradient
        id="paint3_linear_140_55"
        x1="25.1265"
        y1="20.8773"
        x2="30.3285"
        y2="16.1933"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F2BD32" />
        <Stop offset="1" stopColor="#D96B1C" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default DisciplineIcon;
