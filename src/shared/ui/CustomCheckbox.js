import Checkbox from "expo-checkbox";
import { useSelector } from "react-redux";

import ChangeTheme from "../../configs/ChangeTheme";

const CustomCheckbox = ({ active = false, color }) => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <Checkbox
      value={active}
      style={{ width: 18, height: 18 }}
      color={color || ChangeTheme(theme).accent}
    />
  );
};

export default CustomCheckbox;
