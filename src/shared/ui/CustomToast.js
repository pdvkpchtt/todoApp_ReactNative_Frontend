import { View } from "react-native";
import { useSelector } from "react-redux";

import ChangeTheme from "../../configs/ChangeTheme";
import TextMain from "../Text/TextMain";

const CustomToast = ({ text }) => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <View
      style={{
        backgroundColor: ChangeTheme(theme).container,
        elevation: 10,
        borderRadius: 13,
        padding: 16,
        width: "95%",
        display: "flex",
        justifyContent: "center",
        borderBottomWidth: 3,
        borderBottomColor: ChangeTheme(theme).accent,
      }}
    >
      <TextMain
        text={text}
        additionStyles={{ fontFamily: "SF-Pro-Display-Regular", fontSize: 18 }}
      />
    </View>
  );
};

export default CustomToast;
