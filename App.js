import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";

import { store } from "./src/store";
import NavigationHandler from "./src/components/NavigationHandler";

export default function App() {
  let [fontsLoaded] = useFonts({
    "SF-Pro-Display-Light": require("./assets/fonts/SF-Pro-Display-Light.ttf"),
    "SF-Pro-Display-Medium": require("./assets/fonts/SF-Pro-Display-Medium.ttf"),
    "SF-Pro-Display-Regular": require("./assets/fonts/SF-Pro-Display-Regular.ttf"),
    "SF-Pro-Display-Semibold": require("./assets/fonts/SF-Pro-Display-Semibold.ttf"),
    "SF-Pro-Text-Light": require("./assets/fonts/SF-Pro-Text-Light.ttf"),
    "SF-Pro-Text-Medium": require("./assets/fonts/SF-Pro-Text-Medium.ttf"),
    "SF-Pro-Text-Regular": require("./assets/fonts/SF-Pro-Text-Regular.ttf"),
    "SF-Pro-Text-Regular-Italic": require("./assets/fonts/SF-Pro-Text-Regular-Italic.ttf"),
    "SF-Pro-Text-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.ttf"),
    "SF-Pro-Text-Bold": require("./assets/fonts/SF-Pro-Text-Bold.ttf"),
    "SF-Compact-Rounded-Medium": require("./assets/fonts/SF-Compact-Rounded-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationHandler />

      <StatusBar style="light" />
    </Provider>
  );
}
