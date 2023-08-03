import { View, Text } from "react-native";
import { useSelector } from "react-redux";

import ChangeTheme from "../../configs/ChangeTheme";

const CategoryBage = ({ category = "uncategorized", ...props }) => {
  const theme = useSelector((state) => state.theme.theme);

  switch (category) {
    case "uncategorized":
      return (
        <View
          style={{
            backgroundColor: ChangeTheme(theme).uncategorizedBg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "flex-start",
            paddingVertical: 4,
            paddingHorizontal: 10,
            borderRadius: 13,
          }}
          {...props}
        >
          <Text
            style={{
              fontFamily: "SF-Pro-Display-Medium",
              color: ChangeTheme(theme).uncategorized,
            }}
          >
            Uncategorized
          </Text>
        </View>
      );
    case "travel":
      return (
        <View
          style={{
            backgroundColor: ChangeTheme(theme).travelBg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "flex-start",
            paddingVertical: 4,
            paddingHorizontal: 10,
            borderRadius: 13,
          }}
          {...props}
        >
          <Text
            style={{
              fontFamily: "SF-Pro-Display-Medium",
              color: ChangeTheme(theme).travel,
            }}
          >
            Travel
          </Text>
        </View>
      );
    case "work":
      return (
        <View
          style={{
            backgroundColor: ChangeTheme(theme).workBg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "flex-start",
            paddingVertical: 4,
            paddingHorizontal: 10,
            borderRadius: 13,
          }}
          {...props}
        >
          <Text
            style={{
              fontFamily: "SF-Pro-Display-Medium",
              color: ChangeTheme(theme).work,
            }}
          >
            Work
          </Text>
        </View>
      );
    case "learning":
      return (
        <View
          style={{
            backgroundColor: ChangeTheme(theme).learningBg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "flex-start",
            paddingVertical: 4,
            paddingHorizontal: 10,
            borderRadius: 13,
          }}
          {...props}
        >
          <Text
            style={{
              fontFamily: "SF-Pro-Display-Medium",
              color: ChangeTheme(theme).learning,
            }}
          >
            Learning
          </Text>
        </View>
      );
    default:
      return (
        <View
          style={{
            backgroundColor: "rgba(90, 200, 250, 0.20)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "flex-start",
            paddingVertical: 4,
            paddingHorizontal: 10,
            borderRadius: 13,
          }}
          {...props}
        >
          <Text
            style={{
              fontFamily: "SF-Pro-Display-Medium",
              color: "rgba(90, 200, 250, 1)",
            }}
          >
            Uncategorized
          </Text>
        </View>
      );
  }
};

export default CategoryBage;
