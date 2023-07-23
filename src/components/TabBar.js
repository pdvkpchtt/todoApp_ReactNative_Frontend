import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";

import ProfileStackScreen from "../pages/Profile/ProfileStackScreen";
import HomeStackScreen from "../pages/Home/HomeStackScreen";
import DecorationStackScreen from "../pages/Decoration/DecorationStackScreen";
import CustomTabBar from "./CustomTabBar";

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBar={(props) => <CustomTabBar {...props} />}
      >
        <Tab.Screen name="Decoration" component={DecorationStackScreen} />
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabBar;
