import React from "react";
import { Button, View } from "react-native";
import { useSelector } from "react-redux";
import { PermissionsAndroid } from "react-native";
import Card from "../../shared/ui/Card";
import TextTitle from "../../shared/Text/TextTitle";
import ChangeTheme from "../../configs/ChangeTheme";

const ProfileNameCard = () => {
  const theme = useSelector((state) => state.theme.theme);
  const username = useSelector((state) => state.profile.username);

  return (
    <Card>
      <TextTitle
        additionStyles={{ fontSize: 22, color: ChangeTheme(theme).textMain }}
        text={username}
      />
    </Card>
  );
};

export default ProfileNameCard;
