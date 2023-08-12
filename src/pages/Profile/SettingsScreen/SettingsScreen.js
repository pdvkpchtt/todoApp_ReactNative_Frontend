import { useLayoutEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import InputWithTitle from "../../../components/CreateNote/InputWithTitle";
import { profileSlice } from "../../../store/profileSlice";
import ChangeTheme from "../../../configs/ChangeTheme";

import CheckIcon from "../../../shared/Icons/CheckIcon";

const SettingsScreen = ({ navigation }) => {
  const theme = useSelector((state) => state.theme.theme);
  const [username, login, password] = useSelector(
    (state) => [
      state.profile.username,
      state.profile.login,
      state.profile.password,
    ],
    shallowEqual
  );
  const dispatch = useDispatch();

  const [nameState, setNameState] = useState(username);
  const [passwordState, setPasswordState] = useState(password);
  const [loginyState, setLoginState] = useState(login);
  const [invalidStateName, setInvalidStateName] = useState(false);
  const [invalidStateLogin, setInvalidStateLogin] = useState(false);
  const [invalidStatePassword, setInvalidStatePassword] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          onPress={() => {
            nameState.length == 0
              ? setInvalidStateName(true)
              : setInvalidStateName(false);
            passwordState.length == 0
              ? setInvalidStatePassword(true)
              : setInvalidStatePassword(false);
            loginyState.length == 0
              ? setInvalidStateLogin(true)
              : setInvalidStateLogin(false);
            if (
              nameState.length != 0 &&
              passwordState.length != 0 &&
              loginyState.length != 0
            ) {
              dispatch(
                profileSlice.actions.editProfileInfo({
                  username: nameState,
                  login: loginyState,
                  password: passwordState,
                })
              );
              navigation.goBack();
            }
          }}
        >
          {({ pressed }) => {
            return (
              <CheckIcon
                fill={pressed ? ChangeTheme(theme).whitePressed : "#fff"}
              />
            );
          }}
        </Pressable>
      ),
      headerTitle: () => (
        <Text
          style={{
            fontSize: 20,
            lineHeight: 30,
            fontFamily: "SF-Pro-Display-Medium",
            color: "#fff",
            // borderWidth: 2,
          }}
          numberOfLines={1}
        >
          Settings
        </Text>
      ),
    });
  }, [
    theme,
    nameState,
    passwordState,
    loginyState,
    invalidStateName,
    invalidStateLogin,
    invalidStatePassword,
  ]);

  return (
    <ScrollView overScrollMode="never" contentContainerStyle={{ padding: 16 }}>
      <InputWithTitle
        title="Change username"
        placeholder="Usename"
        onChange={(e) => {
          setNameState(e);
          setInvalidStateName(false);
        }}
        onFocus={() => setInvalidStateName(false)}
        value={nameState}
        marginBottom={12}
        invalid={invalidStateName}
        numberOfLines={1}
        maxLength={20}
      />
      <InputWithTitle
        title="Change login"
        placeholder="Login"
        onChange={(e) => {
          setLoginState(e);
          setInvalidStateLogin(false);
        }}
        onFocus={() => setInvalidStateLogin(false)}
        value={loginyState}
        marginBottom={12}
        invalid={invalidStateLogin}
        numberOfLines={1}
        maxLength={20}
      />
      <InputWithTitle
        title="Change password"
        placeholder="Password"
        onChange={(e) => {
          setPasswordState(e);
          setInvalidStatePassword(false);
        }}
        onFocus={() => setInvalidStatePassword(false)}
        value={passwordState}
        marginBottom={12}
        invalid={invalidStatePassword}
        numberOfLines={1}
        maxLength={20}
      />
    </ScrollView>
  );
};

export default SettingsScreen;
