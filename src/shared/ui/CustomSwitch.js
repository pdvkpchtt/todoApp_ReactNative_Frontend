import { Switch } from "react-native";
import { useSelector } from "react-redux";

import ChangeTheme from "../../configs/ChangeTheme";

const CustomSwitch = ({ onValueChange, value }) => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <Switch
      alignSelf="center"
      onValueChange={onValueChange}
      value={value}
      thumbColor={ChangeTheme(theme).accent}
      trackColor={{
        true: ChangeTheme(theme).subAccent,
      }}
      style={{ height: 18 }}
    />
  );
};

export default CustomSwitch;
