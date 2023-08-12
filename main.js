import { StatusBar } from "expo-status-bar";
import { useSelector } from "react-redux";
import Toast from "react-native-toast-message";

import NavigationHandler from "./src/components/NavigationHandler";
import CustomToast from "./src/shared/ui/CustomToast";
import AuthScreen from "./src/pages/Auth/AuthScreen";

const toastConfig = {
  custom: ({ text1, props }) => <CustomToast text={text1} />,
};

const Main = () => {
  const authorized = useSelector((state) => state.profile.authorized);

  return (
    <>
      {authorized ? <NavigationHandler /> : <AuthScreen />}

      <Toast config={toastConfig} position="bottom" bottomOffset="20" />

      <StatusBar style="light" />
    </>
  );
};

export default Main;
