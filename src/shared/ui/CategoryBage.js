import { View, Text } from "react-native";

const CategoryBage = ({ category = "uncategorized", ...props }) => {
  switch (category) {
    case "uncategorized":
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
    case "travel":
      return (
        <View
          style={{
            backgroundColor: "rgba(52, 199, 89, 0.20)",
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
              color: "rgba(52, 199, 89, 1)",
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
            backgroundColor: "rgba(255, 59, 48, 0.20)",
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
              color: "rgba(255, 59, 48, 1)",
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
            backgroundColor: "rgba(255, 149, 0, 0.20)",
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
              color: "rgba(255, 149, 0, 1)",
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
