import { Pressable, View, Text } from "react-native";
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
}) => {
  const animatedCircleStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: withSpring(active ? 1 : 0, { duration: 250, damping: 35 }) },
      ],
    };
  });

  const animatedIconStyle = useAnimatedStyle(() => {
    return {
      opacity: withSpring(active ? 1 : 0.5, { duration: 250, damping: 35 }),
    };
  });

  return (
    <Pressable onPress={onPress} onLayout={onLayout} style={componentStyle}>
      <Animated.View style={[circleStyle, animatedCircleStyle]} />

      <Animated.View style={[iconStyle, animatedIconStyle]}>
        <Text>?</Text>
      </Animated.View>
    </Pressable>
  );
};

export default TabBarComponent;
