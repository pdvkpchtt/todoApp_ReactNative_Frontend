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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={() => {}}>
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

  const [headState, setHeadState] = useState("");
  const [textState, setTextState] = useState("");
  const [categoryState, setCategoryState] = useState("");
  const [invalidState, setInvalidState] = useState(false);

  return (
    <ScrollView overScrollMode="never" contentContainerStyle={{ padding: 16 }}>
      <InputWithTitle
        title="Enter header"
        placeholder="Note header"
        onChange={(e) => setHeadState(e)}
        value={headState}
        marginBottom={12}
        invalid={invalidState}
      />
      <InputWithTitle
        title="Enter note text"
        placeholder="Note text"
        onChange={(e) => setTextState(e)}
        value={textState}
        marginBottom={12}
        invalid={invalidState}
      />
    </ScrollView>
  );
};

export default CreateNote;
