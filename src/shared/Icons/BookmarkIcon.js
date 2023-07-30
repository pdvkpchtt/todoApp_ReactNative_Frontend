import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import { useSelector } from "react-redux";
import ChangeTheme from "../../configs/ChangeTheme";

const AnimatedPath = Animated.createAnimatedComponent(Path);

const BookmarkIcon = ({ fill = "#fff", active, ...props }) => {
  const theme = useSelector((state) => state.theme.theme);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(active ? 0.8 : 0, {
        duration: 100,
      }),
    };
  }, [active]);

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      {...props}
    >
      <AnimatedPath
        fill={ChangeTheme(theme).subAccent}
        d="m7 17.97l5-2.15l5 2.15V5H7z"
        style={animatedStyle}
      />
      <Path
        fill={ChangeTheme(theme).accent}
        d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3l7 3V5c0-1.1-.9-2-2-2zm0 14.97l-5-2.14l-5 2.14V5h10v12.97z"
      />
    </Svg>
  );
};
export default BookmarkIcon;
