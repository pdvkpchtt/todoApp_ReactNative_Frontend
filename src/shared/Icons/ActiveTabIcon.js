import Animated from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const ActiveTabIcon = ({ fill, ...props }) => (
  <AnimatedSvg
    xmlns="http://www.w3.org/2000/svg"
    width={110}
    height={60}
    fill="none"
    {...props}
  >
    <Path
      fill={fill}
      d="M20 0H0c11.046 0 20 8.953 20 20v5c0 19.33 15.67 35 35 35s35-15.67 35-35v-5c0-11.045 8.954-20 20-20H20z"
    />
  </AnimatedSvg>
);
export default ActiveTabIcon;
