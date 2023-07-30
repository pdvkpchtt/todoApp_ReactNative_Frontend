import { View } from "react-native";
import { useSelector } from "react-redux";

import ChangeTheme from "../../configs/ChangeTheme";

const Card = ({ children, ...props }) => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <View
      style={{
        backgroundColor: ChangeTheme(theme).container,
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderRadius: 13,
        ...props,
      }}
    >
      {children}
    </View>
  );
};

export default Card;
