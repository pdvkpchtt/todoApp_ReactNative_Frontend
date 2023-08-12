import { useSelector, useDispatch } from "react-redux";
import { TouchableOpacity, View } from "react-native";

import { themeSlice } from "../../store/themeSlice";
import Card from "../../shared/ui/Card";
import TextMain from "../../shared/Text/TextMain";
import ChangeTheme from "../../configs/ChangeTheme";
import CustomSwitch from "../../shared/ui/CustomSwitch";

import ColorPaletteIcon from "../../shared/Icons/ColorPaletteIcon";

const MenuItem = ({
  onPress = () => {},
  text = "empty",
  children,
  ...props
}) => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => onPress()}>
      <Card
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        {...props}
        paddingLeft={12}
      >
        <View style={{ display: "flex", flexDirection: "row", flex: 1 }}>
          {children}

          <TextMain
            text={text}
            numberOfLines={1}
            additionStyles={{ marginLeft: 6, fontSize: 18, flex: 1 }}
          />
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default MenuItem;
