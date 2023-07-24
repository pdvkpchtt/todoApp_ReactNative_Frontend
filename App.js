import { StatusBar } from "expo-status-bar";
import { Button, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { useSelector, useDispatch } from "react-redux";

import { store } from "./src/store";
import TabBar from "./src/components/TabBar";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Thin": require("./assets/fonts/Roboto-Thin.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <TabBar />

      <StatusBar style="light" />
    </Provider>
  );
}
