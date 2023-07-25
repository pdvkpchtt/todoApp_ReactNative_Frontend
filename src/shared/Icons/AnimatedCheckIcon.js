import Animated, {
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";

const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const AnimatedPath = Animated.createAnimatedComponent(Path);

const AnimatedCheckIcon = ({ active, ...props }) => {
  const animatedCheckStyle = useAnimatedStyle(() => {
    return {
      opacity: withSpring(active ? 1 : 0, { duration: 250, damping: 35 }),
      // scaleX: withSpring(active ? 1 : 0, { duration: 250, damping: 35 }),
      // scaleY: withSpring(active ? 1 : 0, { duration: 250, damping: 35 }),
    };
  }, [active]);

  return (
    <AnimatedSvg
      xmlns="http://www.w3.org/2000/svg"
      width="40px"
      height="40px"
      viewBox="0 0 24 24"
      {...props}
    >
      <AnimatedPath
        fill="none"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        style={animatedCheckStyle}
        d="m4 12l6 6L20 6"
      />
    </AnimatedSvg>
  );
};

export default AnimatedCheckIcon;
