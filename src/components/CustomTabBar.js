import { useReducer } from "react";
import { View, StyleSheet } from "react-native";
import {
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

import ChangeTheme from "../configs/ChangeTheme";
import ActiveTabIcon from "../shared/Icons/ActiveTabIcon";
import TabBarComponent from "./TabBarComponent";

const CustomTabBar = ({
  state: { index: activeIndex, routes },
  navigation,
  description,
}) => {
  const { bottom } = useSafeAreaInsets();
  const theme = useSelector((state) => state.theme.theme);

  const reducer = (state, action) => {
    return [...state, { x: action.x, index: action.index }];
  };

  const [layout, dispatch] = useReducer(reducer, []);

  const handeLayout = (event, index) => {
    dispatch({ x: event.nativeEvent.layout.x, index });
  };

  const xOffset = useDerivedValue(() => {
    if (layout.length !== routes.length) return 0;
    return [...layout].find(({ index }) => index === activeIndex).x - 25;
  }, [activeIndex, layout]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(xOffset.value, {
            duration: 250,
            damping: 35,
          }),
        },
      ],
    };
  }, []);

  return (
    <View
      style={[
        styles.tabBar,
        {
          paddingBottom: bottom + 10,
          backgroundColor: ChangeTheme(theme).accent,
        },
      ]}
    >
      <ActiveTabIcon
        style={[styles.activeBackground, animatedStyles]}
        fill={ChangeTheme(theme).bgColor}
      />

      <View style={styles.tabBarContainer}>
        {routes.map((route, index) => (
          <TabBarComponent
            key={route.key}
            active={index === activeIndex}
            onPress={() => navigation.navigate(route.name)}
            onLayout={(e) => handeLayout(e, index)}
            componentStyle={styles.component}
            circleStyle={styles.componentCircle}
            iconStyle={styles.iconContainer}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "white",
  },
  activeBackground: {
    position: "absolute",
  },
  tabBarContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  component: {
    height: 60,
    width: 60,
    marginTop: -5,
  },
  componentCircle: {
    flex: 1,
    borderRadius: 30,
    backgroundColor: "#fff",
  },
  iconContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    height: 36,
    width: 36,
  },
});

export default CustomTabBar;
