import { Text } from "react-native";
import { useSelector } from "react-redux";

import ChangeTheme from "../../configs/ChangeTheme";

const TextTitle = ({ text, additionStyles, ...props }) => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <Text
      style={[
        {
          fontFamily: "SF-Pro-Display-Semibold",
          fontSize: 16,
          color: ChangeTheme(theme).textSecondary,
        },
        additionStyles,
      ]}
      {...props}
    >
      {text}
    </Text>
  );
};

export default TextTitle;
