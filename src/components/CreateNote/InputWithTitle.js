import React from "react";
import { Pressable, TextInput, View } from "react-native";
import { useSelector } from "react-redux";

import Card from "../../shared/ui/Card";
import TextTitle from "../../shared/Text/TextTitle";
import ChangeTheme from "../../configs/ChangeTheme";

import TrashIcon from "../../shared/Icons/TrachIcon";

const InputWithTitle = ({
  value = "",
  onChange = () => {},
  title = "empty",
  placeholder = "empty",
  invalid = false,
  ...props
}) => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <Card {...props}>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <TextTitle
          text={title}
          additionStyles={{ marginBottom: 6 }}
          numberOfLines={1}
          flex={1}
          marginRight={8}
        />

        <Pressable onPress={() => onChange("")}>
          {({ pressed }) => {
            return (
              <TrashIcon
                fill={
                  pressed
                    ? ChangeTheme(theme).subAccent
                    : ChangeTheme(theme).accent
                }
                size={20}
              />
            );
          }}
        </Pressable>
      </View>

      <TextInput
        value={value}
        onChange={(e) => onChange(e.nativeEvent.text)}
        style={{
          backgroundColor: invalid
            ? ChangeTheme(theme).workBg
            : ChangeTheme(theme).bgColor,
          borderRadius: 3,
          paddingHorizontal: 12,
          paddingVertical: 6,
          color: ChangeTheme(theme).textMain,
          fontSize: 16,
          borderColor: "red",
          borderWidth: invalid ? 1 : 0,
        }}
        multiline
        placeholder={invalid ? "Please fill this fields!!!" : placeholder}
        placeholderTextColor={
          invalid ? "red" : ChangeTheme(theme).textSecondary
        }
      />
    </Card>
  );
};

export default InputWithTitle;
