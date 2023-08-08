import { View, Text } from "react-native";
import { shallowEqual, useSelector } from "react-redux";
import NoteCard from "../../components/Home/NoteCard";

import Layout from "../../shared/Layout";

const ProfileStackScreen = () => {
  const [filteredNotes, refreshing] = useSelector(
    (state) => [state.notes.filteredNotes, state.notes.refreshing],
    shallowEqual
  );

  return (
    <Layout>
      {filteredNotes.map((item, key) => {
        if (item.bookmarked) {
          return <NoteCard item={item} key={key} />;
        }
      })}
    </Layout>
  );
};

export default ProfileStackScreen;
