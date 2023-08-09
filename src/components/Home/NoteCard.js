import { useState } from "react";
import { Pressable, TouchableOpacity, View, Vibration } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Toast from "react-native-toast-message";

import ChangeTheme from "../../configs/ChangeTheme";
import TextHead from "../../shared/Text/TextHead";
import TextMain from "../../shared/Text/TextMain";
import Card from "../../shared/ui/Card";
import CategoryBage from "../../shared/ui/CategoryBage";
import DeleteModal from "./DeleteModal";
import { notesSlice } from "../../store/notesSlice";

import BookmarkIcon from "../../shared/Icons/BookmarkIcon";

const NoteCard = ({ item, ...props }) => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  const [modalState, setModalState] = useState(false);

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        onLongPress={() => {
          setModalState(true);
          Vibration.vibrate(30);
        }}
      >
        <Card {...props}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextHead
              text={item.head}
              numberOfLines={1}
              additionStyles={{ marginRight: 16, flex: 1 }}
            />
            <View style={{ display: "flex", flexDirection: "row" }}>
              <CategoryBage category={item.category} marginRight={8} />
              <Pressable
                onPress={() => {
                  dispatch(notesSlice.actions.setBookmarked(item.id));
                  Toast.show({
                    type: "custom",
                    text1: !item.bookmarked
                      ? "Added to bookmarks"
                      : "Removed from bookmarks",
                  });
                }}
              >
                <BookmarkIcon active={item.bookmarked} />
              </Pressable>
            </View>
          </View>
          <TextMain
            additionStyles={{ color: ChangeTheme(theme).textSecondary }}
            text={item.text}
            numberOfLines={3}
          />
        </Card>
      </TouchableOpacity>

      <DeleteModal
        visible={modalState}
        setVisible={setModalState}
        item={item}
      />
    </>
  );
};

export default NoteCard;
