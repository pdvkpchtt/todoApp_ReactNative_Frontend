import { Pressable, Text } from "react-native";
import Animated, {
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

const TabBarComponent = ({
  active,
  onPress,
  onLayout,
  circleStyle,
  iconStyle,
  componentStyle,
  icon,
}) => {
  const animatedCircleStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: withSpring(active ? 1 : 0, { duration: 250, damping: 15 }) },
      ],
    };
  });

  const animatedIconStyle = useAnimatedStyle(() => {
    return {
      opacity: withSpring(active ? 1 : 0.5, { duration: 250, damping: 35 }),
      scaleX: withSpring(active ? 1 : 0.75, { duration: 250, damping: 35 }),
      scaleY: withSpring(active ? 1 : 0.75, { duration: 250, damping: 35 }),
    };
  });

  return (
    <Pressable onPress={onPress} onLayout={onLayout} style={componentStyle}>
      <Animated.View style={[circleStyle, animatedCircleStyle]} />

      <Animated.View style={[iconStyle, animatedIconStyle]}>
        {icon}
      </Animated.View>
    </Pressable>
  );
};

export default TabBarComponent;
