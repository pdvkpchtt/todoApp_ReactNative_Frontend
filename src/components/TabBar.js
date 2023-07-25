import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ProfileStackScreen from "../pages/Profile/ProfileStackScreen";
import HomeStackScreen from "../pages/Home/HomeStackScreen";
import DecorationStackScreen from "../pages/Decoration/DecorationStackScreen";
import CustomTabBar from "./CustomTabBar";

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props) => <CustomTabBar {...props} />}
      // screenOptions={{
      //   headerTitleStyle: {
      //     fontSize: 20,
      //     lineHeight: 30,
      //     fontFamily: "SF-Pro-Display-Medium",
      //   },
      //   headerTitleAlign: "center",
      //   // headerStyle: {
      //   //   borderBottomRightRadius: 35,
      //   //   borderBottomLeftRadius: 35,
      //   // },
      // }}
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
        component={ProfileStackScreen}
        // options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default TabBar;
