import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

import ChangeTheme from "../configs/ChangeTheme";
import ProfileStackScreen from "../pages/Profile/ProfileStackScreen";
import HomeStackScreen from "../pages/Home/HomeStackScreen";
import DecorationStackScreen from "../pages/Decoration/DecorationStackScreen";
import CustomTabBar from "./CustomTabBar";

const Tab = createBottomTabNavigator();

const TabBar = () => {
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
      <Tab.Navigator
        initialRouteName="Home"
        tabBar={(props) => <CustomTabBar {...props} />}
        screenOptions={{
          headerTitleStyle: {
            fontSize: 20,
            lineHeight: 30,
            fontFamily: "SF-Pro-Display-Medium",
          },
          headerTitleAlign: "center",
          // headerStyle: {
          //   borderBottomRightRadius: 35,
          //   borderBottomLeftRadius: 35,
          // },
        }}
      >
        <Tab.Screen name="Decoration" component={DecorationStackScreen} />
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabBar;
