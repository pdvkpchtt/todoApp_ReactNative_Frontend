import { useLayoutEffect, useState } from "react";
import { Text, Pressable, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import ChangeTheme from "../../../configs/ChangeTheme";
import Layout from "../../../shared/Layout";

import CheckIcon from "../../../shared/Icons/CheckIcon";
import InputWithTitle from "../../../components/CreateNote/InputWithTitle";

const CreateNote = ({ navigation }) => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  const [headState, setHeadState] = useState("");
  const [textState, setTextState] = useState("");
  const [categoryState, setCategoryState] = useState("");
  const [invalidState, setInvalidState] = useState(false);

  const isInvalid =
    headState.length == 0 || textState.length == 0 || categoryState.length == 0;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          onPress={() => {
            isInvalid ? setInvalidState(true) : false;
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
  }, [theme]);

  return (
    <ScrollView overScrollMode="never" contentContainerStyle={{ padding: 16 }}>
      <InputWithTitle
        title="Title of your note"
        placeholder="Enter title"
        onChange={(e) => setHeadState(e)}
        value={headState}
        marginBottom={12}
        invalid={invalidState}
        numberOfLines={2}
        maxLength={100}
      />
      <InputWithTitle
        title="Text of your note"
        placeholder="Enter text"
        onChange={(e) => setTextState(e)}
        value={textState}
        marginBottom={12}
        invalid={invalidState}
        numberOfLines={8}
        maxLength={1000}
      />
    </ScrollView>
  );
};

export default CreateNote;
