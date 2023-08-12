import { useState } from "react";
import { View, Text } from "react-native";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import InputWithTitle from "../../components/CreateNote/InputWithTitle";
import ChangeTheme from "../../configs/ChangeTheme";
import TextTitle from "../../shared/Text/TextTitle";
import CustomButton from "../../shared/ui/CustomButton";
import { profileSlice } from "../../store/profileSlice";

const AuthScreen = () => {
  const theme = useSelector((state) => state.theme.theme);
  const [login, password] = useSelector(
    (state) => [state.profile.login, state.profile.password],
    shallowEqual
  );
  const dispatch = useDispatch();

  const [loginState, setLoginState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [invalidloginState, setInvalidLoginState] = useState(false);
  const [invalidPasswordState, setInvalidPasswordState] = useState(false);

  const [invalidData, setInvalidData] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: ChangeTheme(theme).bgColor,
      }}
    >
      <View
        style={{
          alignItems: "center",
          width: "80%",
          borderTopWidth: 20,
          borderBottomWidth: 20,
          paddingVertical: 40,
          borderRadius: 35,
          borderColor: ChangeTheme(theme).accent,
          backgroundColor: ChangeTheme(theme).container,
        }}
      >
        <Text
          style={{
            color: ChangeTheme(theme).accent,
            fontSize: 45,
            fontFamily: "SF-Compact-Rounded-Bold",
            lineHeight: 45,
          }}
        >
          ToDo!
        </Text>
        <Text
          style={{
            color: "#2c2c2c",
            fontFamily: "SF-Compact-Rounded-Medium",
            fontSize: 20,
            lineHeight: 25,
          }}
        >
          Best app for your notes
        </Text>

        <InputWithTitle
          title="Enter login"
          placeholder={"Login"}
          onChange={(e) => {
            setLoginState(e);
            setInvalidLoginState(false);
            setInvalidData(false);
          }}
          onFocus={() => {
            setInvalidLoginState(false);
            setInvalidData(false);
          }}
          value={loginState}
          invalid={invalidloginState || invalidData}
          invalidMessage={
            invalidData ? "Some data is wrong" : "Please fill this field!"
          }
          numberOfLines={1}
          maxLength={20}
          marginTop={20}
          width="100%"
        />
        <InputWithTitle
          title="Enter password"
          placeholder={"Password"}
          onChange={(e) => {
            setPasswordState(e);
            setInvalidPasswordState(false);
            setInvalidData(false);
          }}
          onFocus={() => {
            setInvalidPasswordState(false);
            setInvalidData(false);
          }}
          value={passwordState}
          invalid={invalidPasswordState || invalidData}
          invalidMessage={
            invalidData ? "Some data is wrong" : "Please fill this field!"
          }
          numberOfLines={1}
          maxLength={20}
          width="100%"
        />
        <CustomButton text="SignUp" width="50%" marginTop={20} />

        <TextTitle
          text="Already have an account?"
          additionStyles={{ marginTop: 10 }}
        />

        <CustomButton
          text="SingIn"
          width="50%"
          marginTop={13}
          onPress={() => {
            passwordState.length == 0
              ? setInvalidPasswordState(true)
              : setInvalidPasswordState(false);
            loginState.length == 0
              ? setInvalidLoginState(true)
              : setInvalidLoginState(false);

            if (invalidData) {
              setLoginState("");
              setPasswordState("");
            }

            if (passwordState.length != 0 && loginState.length != 0) {
              if (passwordState == password && loginState == login)
                dispatch(profileSlice.actions.logIn());
              else setInvalidData(true);
            }
          }}
        />
      </View>

      <Text
        style={{
          position: "absolute",
          bottom: 10,
          color: ChangeTheme(theme).textMain,
          zIndex: -1,
        }}
      >
        login for test: admin{"\n"}password for test: 1234
      </Text>
    </View>
  );
};

export default AuthScreen;
