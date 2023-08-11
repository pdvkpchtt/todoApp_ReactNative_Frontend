import { useLayoutEffect, useState } from "react";
import { Text, Pressable, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Toast from "react-native-toast-message";

import ChangeTheme from "../../../configs/ChangeTheme";
import InputWithTitle from "../../../components/CreateNote/InputWithTitle";
import ChooseCategory from "../../../components/CreateNote/ChooseCategory";
import { notesSlice } from "../../../store/notesSlice";

import CheckIcon from "../../../shared/Icons/CheckIcon";

const NoteScreen = ({ navigation, route }) => {
  const theme = useSelector((state) => state.theme.theme);
  const notes = useSelector((state) => state.notes.notes);
  const dispatch = useDispatch();

  const [headState, setHeadState] = useState(route.params.item.head);
  const [textState, setTextState] = useState(route.params.item.text);
  const [categoryState, setCategoryState] = useState(
    route.params.item.category[0].toUpperCase() +
      route.params.item.category.slice(1)
  );
  const [invalidStateHead, setInvalidStateHead] = useState(false);
  const [invalidStateText, setInvalidStateText] = useState(false);

  const filters = [
    {
      name: "Uncategorized",
      color: ChangeTheme(theme).uncategorized,
      colorBg: ChangeTheme(theme).uncategorizedBg,
    },
    {
      name: "Travel",
      color: ChangeTheme(theme).travel,
      colorBg: ChangeTheme(theme).travelBg,
    },
    {
      name: "Work",
      color: ChangeTheme(theme).work,
      colorBg: ChangeTheme(theme).workBg,
    },
    {
      name: "Learning",
      color: ChangeTheme(theme).learning,
      colorBg: ChangeTheme(theme).learningBg,
    },
  ];

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          onPress={() => {
            headState.length == 0
              ? setInvalidStateHead(true)
              : setInvalidStateHead(false);
            textState.length == 0
              ? setInvalidStateText(true)
              : setInvalidStateText(false);
            if (textState.length != 0 && headState.length != 0) {
              dispatch(
                notesSlice.actions.editNote({
                  id: route.params.item.id,
                  head: headState,
                  text: textState,
                  category: categoryState.toLowerCase(),
                })
              );
              Toast.show({
                type: "custom",
                text1: "Changes saved successfully",
              });
            }
          }}
        >
          {({ pressed }) => {
            return (
              <CheckIcon
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
            // borderWidth: 2,
          }}
          numberOfLines={1}
        >
          {route.params.item.head.length >= 25
            ? route.params.item.head.slice(0, 24) + "..."
            : route.params.item.head}
        </Text>
      ),
    });
  }, [headState, textState, categoryState, theme]);

  return (
    <ScrollView overScrollMode="never" contentContainerStyle={{ padding: 16 }}>
      <InputWithTitle
        title="Title of your note"
        placeholder="Enter title"
        onChange={(e) => {
          setHeadState(e);
          setInvalidStateHead(false);
        }}
        onFocus={() => setInvalidStateHead(false)}
        value={headState}
        marginBottom={12}
        invalid={invalidStateHead}
        numberOfLines={2}
        maxLength={100}
      />
      <InputWithTitle
        title="Text of your note"
        placeholder="Enter text"
        onChange={(e) => {
          setTextState(e);
          setInvalidStateText(false);
        }}
        onFocus={() => setInvalidStateText(false)}
        value={textState}
        marginBottom={12}
        invalid={invalidStateText}
        numberOfLines={8}
        maxLength={1000}
      />
      <ChooseCategory
        title="Category of your note"
        setCategory={(e) => setCategoryState(e)}
        category={categoryState}
        filters={filters}
      />
    </ScrollView>
  );
};

export default NoteScreen;
