import { useLayoutEffect, useState } from "react";
import { Pressable, Text } from "react-native";
import { useSelector } from "react-redux";

import Layout from "../../shared/Layout";
import FAB from "../../shared/ui/FAB";
import ChangeTheme from "../../configs/ChangeTheme";

import FiltersIcon from "../../shared/Icons/FiltersIcon";
import FiltersModal from "../../components/Home/FiltersModal";

const Home = ({ navigation }) => {
  const theme = useSelector((state) => state.theme.theme);

  const [modalState, setModalState] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={() => setModalState(true)}>
          {({ pressed }) => {
            return (
              <FiltersIcon
                fill={pressed ? ChangeTheme(theme).whitePressed : "#fff"}
              />
            );
          }}
        </Pressable>
      ),
      headerTitle: () => (
        <Text
          style={{
            fontSize: 20,
            lineHeight: 30,
            fontFamily: "SF-Pro-Display-Medium",
            color: "#fff",
          }}
        >
          Your Notes
        </Text>
      ),
    });
  }, [theme]);

  return (
    <Layout>
      <Text>Home</Text>

      <FiltersModal visible={modalState} setVisible={setModalState} />
      <FAB onPress={() => navigation.navigate("CreateNoteScreen")} />
    </Layout>
  );
};

export default Home;
