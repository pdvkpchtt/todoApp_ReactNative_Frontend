import { useLayoutEffect, useState } from "react";
import { Text, Pressable, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import ChangeTheme from "../../../configs/ChangeTheme";
import InputWithTitle from "../../../components/CreateNote/InputWithTitle";
import ChooseCategory from "../../../components/CreateNote/ChooseCategory";
import { notesSlice } from "../../../store/notesSlice";

import CheckIcon from "../../../shared/Icons/CheckIcon";

const CreateNote = ({ navigation }) => {
  const theme = useSelector((state) => state.theme.theme);
  const notes = useSelector((state) => state.notes.notes);
  const dispatch = useDispatch();

  const [headState, setHeadState] = useState("");
  const [textState, setTextState] = useState("");
  const [categoryState, setCategoryState] = useState("Uncategorized");
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
            if (textState.length != 0 && headState.length != 0)
              dispatch(
                notesSlice.actions.createNote({
                  id: notes.length + 1,
                  head: headState,
                  text: textState,
                  category: categoryState.toLowerCase(),
                  bookmarked: false,
                })
              );
            dispatch(notesSlice.actions.updateNotes());
            navigation.goBack();
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
          Create Note
        </Text>
      ),
    });
  }, [theme, textState, categoryState, headState]);

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

export default CreateNote;
