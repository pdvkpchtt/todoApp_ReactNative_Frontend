import { Button, View } from "react-native";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { themeSlice } from "../store/themeSlice";

const Layout = ({ children }) => {
  const [theme, setTheme] = useSelector(
    (state) => [state.theme.theme, state.theme.setTheme],
    shallowEqual
  );
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, paddingTop: 40 }}>
      {children}
      {/* <Button title="console log" onPress={() => console.log(theme)} />
      <Button
        title="setTheme"
        onPress={() => dispatch(themeSlice.actions.setTheme("ass"))}
      /> */}
    </View>
  );
};

export default Layout;
