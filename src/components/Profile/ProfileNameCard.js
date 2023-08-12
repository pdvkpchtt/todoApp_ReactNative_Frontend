import React from "react";
import { useSelector } from "react-redux";

import Card from "../../shared/ui/Card";
import TextTitle from "../../shared/Text/TextTitle";
import ChangeTheme from "../../configs/ChangeTheme";

const ProfileNameCard = () => {
  const theme = useSelector((state) => state.theme.theme);
  const username = useSelector((state) => state.profile.username);

  return (
    <Card>
      <TextTitle additionStyles={{ fontSize: 14 }} text="Username:" />
      <TextTitle
        additionStyles={{
          fontSize: 26,
          color: ChangeTheme(theme).textMain,
        }}
        text={username}
      />
    </Card>
  );
};

export default ProfileNameCard;
