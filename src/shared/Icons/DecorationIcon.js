import Animated, {
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import { useSelector } from "react-redux";

const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const AnimatedPath = Animated.createAnimatedComponent(Path);

const DecorationIcon = ({ fill, ...props }) => {
  const theme = useSelector((state) => state.theme.theme);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: withSpring(!theme.includes("_dark") ? "-360deg" : "0deg", {
            duration: 250,
            damping: 35,
          }),
        },
      ],
    };
  }, [theme]);

  const animatedStyleMoon = useAnimatedStyle(() => {
    return {
      opacity: withSpring(theme.includes("_dark") ? 1 : 0, {
        duration: 250,
        damping: 35,
      }),
    };
  }, [theme]);

  const animatedStyleSun = useAnimatedStyle(() => {
    return {
      opacity: withSpring(!theme.includes("_dark") ? 1 : 0, {
        duration: 250,
        damping: 35,
      }),
    };
  }, [theme]);

  return (
    <>
      <AnimatedSvg
        xmlns="http://www.w3.org/2000/svg"
        width="30px"
        height="30px"
        viewBox="0 0 256 256"
        style={animatedStyle}
        {...props}
      >
        <AnimatedPath
          fill="white"
          style={animatedStyleMoon}
          d="M236.37 139.4a12 12 0 0 0-12-3A84.07 84.07 0 0 1 119.6 31.59a12 12 0 0 0-15-15a108.86 108.86 0 0 0-54.91 38.48A108 108 0 0 0 136 228a107.09 107.09 0 0 0 64.93-21.69a108.86 108.86 0 0 0 38.44-54.94a12 12 0 0 0-3-11.97Zm-49.88 47.74A84 84 0 0 1 68.86 69.51a84.93 84.93 0 0 1 23.41-21.22Q92 52.13 92 56a108.12 108.12 0 0 0 108 108q3.87 0 7.71-.27a84.79 84.79 0 0 1-21.22 23.41Z"
        />
        <AnimatedPath
          fill="white"
          style={animatedStyleSun}
          d="M116 32V16a12 12 0 0 1 24 0v16a12 12 0 0 1-24 0Zm80 96a68 68 0 1 1-68-68a68.07 68.07 0 0 1 68 68Zm-24 0a44 44 0 1 0-44 44a44.05 44.05 0 0 0 44-44ZM51.51 68.49a12 12 0 1 0 17-17l-12-12a12 12 0 0 0-17 17Zm0 119l-12 12a12 12 0 0 0 17 17l12-12a12 12 0 1 0-17-17ZM196 72a12 12 0 0 0 8.49-3.51l12-12a12 12 0 0 0-17-17l-12 12A12 12 0 0 0 196 72Zm8.49 115.51a12 12 0 0 0-17 17l12 12a12 12 0 0 0 17-17ZM44 128a12 12 0 0 0-12-12H16a12 12 0 0 0 0 24h16a12 12 0 0 0 12-12Zm84 84a12 12 0 0 0-12 12v16a12 12 0 0 0 24 0v-16a12 12 0 0 0-12-12Zm112-96h-16a12 12 0 0 0 0 24h16a12 12 0 0 0 0-24Z"
        />
      </AnimatedSvg>
    </>
  );
};
export default DecorationIcon;
