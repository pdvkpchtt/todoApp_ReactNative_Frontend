import { Pressable, Text, View } from "react-native";
import { useSelector } from "react-redux";

import ChangeTheme from "../../configs/ChangeTheme";

const CustomButton = ({ text = "empty", onPress, ...props }) => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <Pressable onPress={onPress} {...props}>
      {({ pressed }) => {
        return (
          <View
            style={{
              backgroundColor: pressed
                ? ChangeTheme(theme).subAccent
                : ChangeTheme(theme).accent,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 13,
              padding: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "SF-Pro-Display-Medium",
                fontSize: 18,
                color: "#fff",
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
