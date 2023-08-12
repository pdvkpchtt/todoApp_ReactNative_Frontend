import { Pressable, Text, View } from "react-native";
import { useSelector } from "react-redux";

import ChangeTheme from "../../configs/ChangeTheme";

const CustomButton = ({ text = "empty", onPress, error = false, ...props }) => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <Pressable onPress={onPress} {...props}>
      {({ pressed }) => {
        return (
          <View
            style={{
              backgroundColor: error
                ? ChangeTheme(theme).workBg
                : pressed
                ? ChangeTheme(theme).subAccent
                : ChangeTheme(theme).accent,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 13,
              padding: 10,
              opacity: pressed && error ? 0.6 : 1,
            }}
          >
            <Text
              style={{
                fontFamily: "SF-Pro-Display-Medium",
                fontSize: 18,
                color: error ? ChangeTheme(theme).work : "#fff",
              }}
            >
              {text}
            </Text>
          </View>
        );
      }}
    </Pressable>
  );
};

export default CustomButton;
