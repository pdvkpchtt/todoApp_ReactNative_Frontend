import { Pressable, View } from "react-native";
import { useSelector } from "react-redux";

import ChangeTheme from "../../configs/ChangeTheme";

import PlusIcon from "../Icons/PlusIcon";

const FAB = ({ onPress }) => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <Pressable
      onPress={onPress}
      style={{
        position: "absolute",
        bottom: 20,
        right: 20,
      }}
    >
      {({ pressed }) => {
        return (
          <View
            style={{
              elevation: pressed ? 1 : 3,
              width: 55,
              height: 55,
              borderRadius: 90,
              backgroundColor: pressed
                ? ChangeTheme(theme).subAccent
                : ChangeTheme(theme).accent,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PlusIcon />
          </View>
        );
      }}
    </Pressable>
  );
};

export default FAB;
