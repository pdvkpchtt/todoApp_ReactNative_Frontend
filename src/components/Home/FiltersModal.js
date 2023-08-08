import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import Modal from "react-native-modal";
import { useSelector, useDispatch } from "react-redux";

import ChangeTheme from "../../configs/ChangeTheme";
import TextMain from "../../shared/Text/TextMain";
import CustomCheckbox from "../../shared/ui/CustomCheckbox";
import { notesSlice } from "../../store/notesSlice";

import CheckIcon from "../../shared/Icons/CheckIcon";
import RefreshIcon from "../../shared/Icons/RefreshIcon";

const FiltersModal = ({ visible, setVisible }) => {
  const theme = useSelector((state) => state.theme.theme);
  const category = useSelector((state) => state.notes.category);
  const dispatch = useDispatch();

  const [filterState, setFilterState] = useState("");

  useEffect(() => {
    if (category == "") setFilterState("");
    else setFilterState(category[0].toUpperCase() + category.slice(1));
  }, [category]);

  const filters = [
    {
      name: "Uncategorized",
      color: ChangeTheme(theme).uncategorized,
      colorBg: ChangeTheme(theme).uncategorizedBg,
    },
    {
      name: "Travel",
      color: ChangeTheme(theme).travel,
      colorBg: ChangeTheme(theme).travelBg,
    },
    {
      name: "Work",
      color: ChangeTheme(theme).work,
      colorBg: ChangeTheme(theme).workBg,
    },
    {
      name: "Learning",
      color: ChangeTheme(theme).learning,
      colorBg: ChangeTheme(theme).learningBg,
    },
  ];

  return (
    <Modal
      isVisible={visible}
      backdropOpacity={0.8}
      backdropTransitionOutTiming={10}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      onBackdropPress={() => setVisible(false)}
      style={{
        justifyContent: "flex-end",
        marginHorizontal: 16,
        marginBottom: 16,
      }}
    >
      <View
        style={{
          backgroundColor: ChangeTheme(theme).bgColor,
          borderRadius: 35,
        }}
      >
        {/* header */}
        <View
          style={{
            backgroundColor: ChangeTheme(theme).accent,
            height: 55,
            borderTopLeftRadius: 35,
            borderTopRightRadius: 35,
            elevation: 3,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 17.5,
          }}
        >
          <Pressable
            onPress={() => {
              setFilterState("");
              dispatch(notesSlice.actions.updateNotes());
              setVisible(false);
            }}
          >
            {({ pressed }) => {
              return (
                <RefreshIcon
                  fill={pressed ? ChangeTheme(theme).whitePressed : "#fff"}
                />
              );
            }}
          </Pressable>
          <Text
            style={{
              fontSize: 20,
              lineHeight: 30,
              fontFamily: "SF-Pro-Display-Medium",
              color: "#fff",
            }}
          >
            Filters
          </Text>
          <Pressable
            onPress={() => {
              dispatch(notesSlice.actions.setFilter(filterState.toLowerCase()));
              setVisible(false);
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
        </View>
        {/* header */}

        {/* body */}
        <View
          style={{
            padding: 16,
            // margin: 16,
            // borderRadius: 35,
            // backgroundColor: ChangeTheme(theme).container,
          }}
        >
          {filters.map((item, index) => (
            <Pressable
              key={index}
              style={{
                backgroundColor: item.colorBg,
                padding: 12,
                borderRadius: 10,
                display: "flex",
                flexDirection: "row",
                marginTop: index == 0 ? 0 : 12,
              }}
              onPress={() => {
                setFilterState(item.name);
              }}
            >
              <TextMain
                text={item.name}
                additionStyles={{
                  fontFamily: "SF-Pro-Display-Medium",
                  flex: 1,
                  color: item.color,
                  marginRight: 16,
                }}
                numberOfLines={1}
              />
              <CustomCheckbox
                active={filterState == item.name}
                color={item.color}
              />
            </Pressable>
          ))}
        </View>
        {/* body */}
      </View>
    </Modal>
  );
};

export default FiltersModal;
