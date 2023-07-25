import { useSelector, useDispatch } from "react-redux";
import { Pressable, ScrollView, View } from "react-native";

import { themeSlice } from "../../store/themeSlice";

import ChangeTheme from "../../configs/ChangeTheme";

import AnimatedCheckIcon from "../../shared/Icons/AnimatedCheckIcon";

const allThemes = [
  "theme_usual",
  "theme_orange",
  "theme_blue",
  "theme_red",
  "theme_green",
  "theme_purple",
];

const ChooseAccentCard = ({ ...props }) => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: ChangeTheme(theme).container,
        paddingVertical: 14,
        borderRadius: 13,
      }}
      {...props}
    >
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        overScrollMode="never"
      >
        {allThemes.map((item, index) => (
          <Pressable
            key={index}
            onPress={() =>
              theme.includes("_dark")
                ? dispatch(themeSlice.actions.setTheme(item + "_dark"))
                : dispatch(themeSlice.actions.setTheme(item))
            }
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: ChangeTheme(item).accent,
              width: 60,
              height: 75,
              borderRadius: 8,
              marginLeft: index == 0 ? 13.5 : 2.5,
              marginRight: index == allThemes.length - 1 ? 13.5 : 2.5,
              borderColor: ChangeTheme(item).subAccent,
              borderWidth: 2,
            }}
          >
            <AnimatedCheckIcon
              active={
                theme.includes("_dark")
                  ? theme.replace("_dark", "") == item
                  : theme == item
              }
            />
          </Pressable>
        ))}
      </ScrollView>
      {/* <CustomSwitch
        value={theme.includes("_dark")}
        onValueChange={() =>
          theme.includes("_dark")
            ? dispatch(themeSlice.actions.setTheme("theme_usual"))
            : dispatch(themeSlice.actions.setTheme("theme_usual_dark"))
        }
      /> */}
    </View>
  );
};

export default ChooseAccentCard;
