import { Text } from "react-native";
import { useSelector } from "react-redux";

import ChangeTheme from "../../configs/ChangeTheme";

const TextMain = ({ text, ...props }) => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <Text
      style={{
        fontFamily: "Roboto-Regular",
        fontSize: 18,
        color: ChangeTheme(theme).textMain,
      }}
    >
      {text}
    </Text>
  );
};

export default TextMain;
