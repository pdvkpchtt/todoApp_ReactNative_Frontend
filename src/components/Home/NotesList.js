import { useEffect } from "react";
import { RefreshControl } from "react-native";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { FlashList } from "@shopify/flash-list";

import NoteCard from "./NoteCard";
import ChangeTheme from "../../configs/ChangeTheme";
import EmptyComponent from "./EmptyComponent";
import { notesSlice } from "../../store/notesSlice";
import LoadingBox from "./LoadingBox";

const NotesList = () => {
  const theme = useSelector((state) => state.theme.theme);
  const [notes, refreshing] = useSelector(
    (state) => [state.notes.notes, state.notes.refreshing],
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(notesSlice.actions.updateNotes());
  }, []);

  const renderItem = ({ item, index }) => {
    return <NoteCard item={item} marginTop={12} />;
  };

  return (
    <>
      {refreshing ? (
        <LoadingBox />
      ) : (
        <FlashList
          data={notes}
          renderItem={renderItem}
          refreshing={refreshing}
          estimatedItemSize={123}
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingTop: 4,
            paddingBottom: 16,
          }}
          refreshControl={
            <RefreshControl
              colors={[ChangeTheme(theme).accent]}
              progressBackgroundColor={ChangeTheme(theme).container}
              refreshing={refreshing}
              onRefresh={() => {
                dispatch(notesSlice.actions.updateNotes([]));
              }}
            />
          }
          ListEmptyComponent={() => <EmptyComponent />}
          overScrollMode="never"
        />
      )}
    </>
  );
};

export default NotesList;
