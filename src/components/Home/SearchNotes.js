import { useState } from "react";
import { Keyboard, Pressable, TextInput, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Animated, {
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

import ChangeTheme from "../../configs/ChangeTheme";
import { notesSlice } from "../../store/notesSlice";
import CrossIcon from "../../shared/Icons/CrossIcon";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const SearchNotes = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  const [inputState, setInputState] = useState("");

  const animatedCrossStyle = useAnimatedStyle(() => {
    return {
      opacity: withSpring(inputState.length > 0 ? 1 : 0, {
        duration: 150,
        damping: 35,
      }),
      transform: [
        {
          rotate: withSpring(inputState.length > 0 ? "-360deg" : "0deg", {
            duration: 150,
            damping: 35,
          }),
        },
      ],
    };
  }, [inputState]);

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

        <AnimatedPressable
          style={[
            animatedCrossStyle,
            {
              display: "flex",
              justifyContent: "center",
            },
          ]}
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
        </AnimatedPressable>
      </View>
    </View>
  );
};

export default SearchNotes;
