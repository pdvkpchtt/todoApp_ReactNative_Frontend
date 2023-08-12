import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";

import ChangeTheme from "../configs/ChangeTheme";
import CreateNote from "../pages/Home/CreateNote/CreateNote";
import NoteScreen from "../pages/Home/NoteScreen/NoteScreen";
import BookmarkedNotesScreen from "../pages/Profile/BookmarkedNotesScreen/BookmarkedNotesScreen";
import SettingsScreen from "../pages/Profile/SettingsScreen/SettingsScreen";
import TabBar from "./TabBar";

const Stack = createNativeStackNavigator();

const NavigationHandler = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <NavigationContainer
      theme={{
        colors: {
          background: ChangeTheme(theme).bgColor,
          card: ChangeTheme(theme).accent,
          text: "#fff",
        },
      }}
    >
      <Stack.Navigator
        initialRouteName={"TabBar"}
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
          name="TabBar"
          options={{
            headerShown: false,
          }}
          component={TabBar}
        />
        <Stack.Screen
          name="CreateNoteScreen"
          options={{
            animation: "slide_from_right",
          }}
          component={CreateNote}
        />
        <Stack.Screen
          name="NoteScreen"
          component={NoteScreen}
          options={{
            animation: "fade_from_bottom",
          }}
        />
        <Stack.Screen
          name="BookmarkedNotesScreen"
          component={BookmarkedNotesScreen}
          options={{
            animation: "fade_from_bottom",
          }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            animation: "fade_from_bottom",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationHandler;
