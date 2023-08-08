import { useState } from "react";
import { Keyboard, Pressable, TextInput, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import ChangeTheme from "../../configs/ChangeTheme";
import { notesSlice } from "../../store/notesSlice";
import CrossIcon from "../../shared/Icons/CrossIcon";

const SearchNotes = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  const [inputState, setInputState] = useState("");

  return (
    <View
      style={{
        backgroundColor: ChangeTheme(theme).accent,
        borderRadius: 13,
        marginHorizontal: 6,
        padding: 12,
        marginBottom: 12,
      }}
    >
      <View
        style={{
          backgroundColor: ChangeTheme(theme).container,
          borderRadius: 3,
          height: 40,
          paddingHorizontal: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TextInput
          value={inputState}
          style={{ color: ChangeTheme(theme).textMain, fontSize: 16, flex: 1 }}
          placeholder="Search notes"
          placeholderTextColor={ChangeTheme(theme).textSecondary}
          onFocus={() => {
            dispatch(notesSlice.actions.setFilter(""));
            dispatch(notesSlice.actions.updateNotes());
          }}
          onChange={(e) => {
            setInputState(e.nativeEvent.text);
            dispatch(notesSlice.actions.filterNotes(e.nativeEvent.text));
          }}
        />

        <Pressable
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          onPress={() => {
            setInputState("");
            dispatch(notesSlice.actions.updateNotes());
            Keyboard.dismiss();
          }}
        >
          {({ pressed }) => {
            return (
              <CrossIcon
                fill={
                  pressed
                    ? ChangeTheme(theme).whitePressed
                    : ChangeTheme(theme).textSecondary
                }
              />
            );
          }}
        </Pressable>
      </View>
    </View>
  );
};

export default SearchNotes;
