import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Profile from "../pages/Profile/Profile";
import HomeStackScreen from "../pages/Home/HomeStackScreen";
import DecorationStackScreen from "../pages/Decoration/DecorationStackScreen";
import CustomTabBar from "./CustomTabBar";

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        tabBarHideOnKeyboard: true,
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
      <Tab.Screen
        name="Decoration"
        component={DecorationStackScreen}
        // options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        // options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default TabBar;
