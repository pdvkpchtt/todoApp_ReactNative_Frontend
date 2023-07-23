import { View } from "react-native";
import { useSelector } from "react-redux";

import ChangeTheme from "../configs/ChangeTheme";

const Layout = ({ children }) => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <View
      style={{
        flex: 1,
        padding: 12,
        backgroundColor: ChangeTheme(theme).bgColor,
      }}
    >
      {children}
    </View>
  );
};

export default Layout;
