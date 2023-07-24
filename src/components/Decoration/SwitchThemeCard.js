import { useSelector, useDispatch } from "react-redux";

import { themeSlice } from "../../store/themeSlice";
import Card from "../../shared/ui/Card";
import TextMain from "../../shared/Text/TextMain";
import CustomSwitch from "../../shared/ui/CustomSwitch";

const SwitchThemeCard = ({ ...props }) => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <Card
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      {...props}
    >
      <TextMain text="Switch to darkmode" />

      <CustomSwitch
        value={theme.includes("_dark")}
        onValueChange={() =>
          theme.includes("_dark")
            ? dispatch(themeSlice.actions.setTheme(theme.replace("_dark", "")))
            : dispatch(themeSlice.actions.setTheme(theme + "_dark"))
        }
      />
    </Card>
  );
};

export default SwitchThemeCard;
