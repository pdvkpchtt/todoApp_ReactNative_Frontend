import { View, Text } from "react-native";
import { shallowEqual, useSelector } from "react-redux";
import NoteCard from "../../components/Home/NoteCard";
import ProfileNameCard from "../../components/Profile/ProfileNameCard";

import Layout from "../../shared/Layout";

const ProfileStackScreen = () => {
  const [filteredNotes, refreshing] = useSelector(
    (state) => [state.notes.filteredNotes, state.notes.refreshing],
    shallowEqual
  );

  return (
    <Layout>
      <ProfileNameCard />
    </Layout>
  );
};

export default ProfileStackScreen;
