import { useLayoutEffect } from "react";
import { View, Text } from "react-native";

const CreateNote = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      tabBarStyle: { display: "none" },
    });
  }, []);

  return (
    <View>
      <Text>Create Note</Text>
    </View>
  );
};

export default CreateNote;
