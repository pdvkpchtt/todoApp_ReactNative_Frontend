import { Pressable, TextInput, View } from "react-native";
import { useSelector } from "react-redux";

import Card from "../../shared/ui/Card";
import TextTitle from "../../shared/Text/TextTitle";
import ChangeTheme from "../../configs/ChangeTheme";

import TrashIcon from "../../shared/Icons/TrachIcon";

const InputWithTitle = ({
  value = "",
  onChange = () => {},
  onFocus = () => {},
  title = "empty",
  placeholder = "empty",
  invalidMessage = "Please fill this field!",
  invalid = false,
  numberOfLines = 1,
  maxLength = 100,
  ...props
}) => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <View
      style={{
        backgroundColor: ChangeTheme(theme).container,
        padding: 12,
        borderRadius: 13,
      }}
      {...props}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <TextTitle
          text={title + ` (${value.length}/${maxLength})`}
          additionStyles={{
            marginBottom: 6,
            fontFamily: "SF-Pro-Display-Medium",
          }}
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
        textAlignVertical="top"
        value={value}
        onChange={(e) => onChange(e.nativeEvent.text)}
        style={{
          backgroundColor: invalid
            ? ChangeTheme(theme).workBg
            : ChangeTheme(theme).bgColor,
          borderRadius: 13,
          padding: 12,
          paddingBottom: 6,
          alignItems: "flex-start",
          color: ChangeTheme(theme).textMain,
          fontSize: 16,
          // borderColor: invalid ? "red" : ChangeTheme(theme).accent,
          // borderWidth: 1,
        }}
        onFocus={() => onFocus()}
        multiline
        numberOfLines={numberOfLines}
        maxLength={maxLength}
        placeholder={invalid ? invalidMessage : placeholder}
        placeholderTextColor={
          invalid ? "red" : ChangeTheme(theme).textSecondary
        }
      />
    </View>
  );
};

export default InputWithTitle;
