import { useLayoutEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { useSelector } from "react-redux";

import Layout from "../../../shared/Layout";
import FAB from "../../../shared/ui/FAB";
import ChangeTheme from "../../../configs/ChangeTheme";
import FiltersModal from "../../../components/Home/FiltersModal";

import FiltersIcon from "../../../shared/Icons/FiltersIcon";
import NotesList from "../../../components/Home/NotesList";
import SearchNotes from "../../../components/Home/SearchNotes";
import CategoryBage from "../../../shared/ui/CategoryBage";

const Home = ({ navigation }) => {
  const theme = useSelector((state) => state.theme.theme);
  const category = useSelector((state) => state.notes.category);

  const [modalState, setModalState] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={() => setModalState(true)}>
          {({ pressed }) => {
            if (category == "")
              return (
                <FiltersIcon
                  fill={pressed ? ChangeTheme(theme).whitePressed : "#fff"}
                />
              );
            else
              return (
                <View
                  style={{
                    backgroundColor: ChangeTheme(theme).container,
                    borderRadius: 13,
                  }}
                >
                  <CategoryBage category={category} />
                </View>
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
            width: 90,
            // borderWidth: 2,
          }}
          numberOfLines={1}
        >
          Your Notes
        </Text>
      ),
    });
  }, [theme, category]);

  return (
    <Layout padding={0}>
      <NotesList />

      <SearchNotes />

      <FiltersModal visible={modalState} setVisible={setModalState} />
      <FAB
        onPress={() => navigation.navigate("CreateNoteScreen")}
        bottom={96}
      />
    </Layout>
  );
};

export default Home;
