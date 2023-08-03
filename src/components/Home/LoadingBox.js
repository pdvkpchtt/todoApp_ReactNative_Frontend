import { ActivityIndicator, View } from "react-native";
import { useSelector } from "react-redux";

import ChangeTheme from "../../configs/ChangeTheme";

const LoadingBox = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          padding: 25,
          borderRadius: 30,
          backgroundColor: ChangeTheme(theme).container,
        }}
      >
        <ActivityIndicator size="large" color={ChangeTheme(theme).accent} />
      </View>
    </View>
  );
};

export default LoadingBox;
