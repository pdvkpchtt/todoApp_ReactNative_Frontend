import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./Home/Home";

const Stack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName={"HomeScreen"}
      screenOptions={{
        headerTitleStyle: {
          fontSize: 20,
          lineHeight: 30,
          fontFamily: "SF-Pro-Display-Medium",
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        // options={{
        //   headerShown: false,
        //   animation: "slide_from_right",
        // }}
        component={Home}
      />
    </Stack.Navigator>
  );
};

export default HomeStackScreen;
