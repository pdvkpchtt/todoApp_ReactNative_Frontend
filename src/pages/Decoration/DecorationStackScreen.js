import { View, Text, Pressable } from "react-native";
import Layout from "../../shared/Layout";
import { useSelector, useDispatch } from "react-redux";

import { themeSlice } from "../../store/themeSlice";
import ChangeTheme from "../../configs/ChangeTheme";

const DecorationStackScreen = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <Layout>
      <Pressable
        onPress={() =>
          dispatch(themeSlice.actions.setTheme("theme_usual_dark"))
        }
      >
        <Text
          style={{
            marginHorizontal: 50,
            fontSize: 25,
            color: ChangeTheme(theme).textMain,
          }}
        >
          Switch to Dark
        </Text>
      </Pressable>
      <Pressable
        onPress={() => dispatch(themeSlice.actions.setTheme("theme_usual"))}
      >
        <Text
          style={{
            marginHorizontal: 50,
            marginTop: 50,
            fontSize: 25,
            color: ChangeTheme(theme).textMain,
          }}
        >
          Switch to light
        </Text>
      </Pressable>
    </Layout>
  );
};

export default DecorationStackScreen;
