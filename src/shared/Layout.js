import { View } from "react-native";
import { useSelector } from "react-redux";

import ChangeTheme from "../configs/ChangeTheme";

const Layout = ({ children, ...props }) => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <View
      style={{
        flex: 1,
        padding: 16,
        // backgroundColor: ChangeTheme(theme).bgColor,
      }}
      {...props}
    >
      {children}
    </View>
  );
};

export default Layout;
