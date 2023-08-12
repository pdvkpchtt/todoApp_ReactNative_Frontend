import { View, Text, ScrollView } from "react-native";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import MenuItem from "../../components/Profile/MenuItem";
import ProfileNameCard from "../../components/Profile/ProfileNameCard";
import CustomButton from "../../shared/ui/CustomButton";
import { profileSlice } from "../../store/profileSlice";

import BookmarkMenuIcon from "../../shared/Icons/BookmarkMenuIcon";
import SettingsIcon from "../../shared/Icons/SettingsIcon";

const ProfileStackScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        overScrollMode="never"
        contentContainerStyle={{ padding: 16, flex: 1 }}
      >
        <ProfileNameCard />

        <MenuItem
          marginTop={16}
          text="Bookmarked notes"
          onPress={() => {
            navigation.navigate("BookmarkedNotesScreen");
          }}
        >
          <BookmarkMenuIcon />
        </MenuItem>

        <MenuItem
          marginTop={12}
          text="Settings"
          onPress={() => {
            navigation.navigate("Settings");
          }}
        >
          <SettingsIcon />
        </MenuItem>
      </ScrollView>

      <CustomButton
        text="Exit"
        error
        margin={16}
        onPress={() => dispatch(profileSlice.actions.logOut())}
      />
    </View>
  );
};

export default ProfileStackScreen;
