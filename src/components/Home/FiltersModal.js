import { Pressable, Text, View } from "react-native";
import Modal from "react-native-modal";
import { useSelector } from "react-redux";

import ChangeTheme from "../../configs/ChangeTheme";

import CheckIcon from "../../shared/Icons/CheckIcon";

const FiltersModal = ({ visible, setVisible }) => {
  const theme = useSelector((state) => state.theme.theme);

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

        marginBottom: 0,
        paddingTop: 50,
      }}
    >
      <View
        style={{
          height: 300,
          backgroundColor: ChangeTheme(theme).bgColor,
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
        }}
      >
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
            paddingHorizontal: 20,
          }}
        >
          <CheckIcon fill={ChangeTheme(theme).accent} />
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
          <Pressable onPress={() => setVisible(false)}>
            {({ pressed }) => {
              return (
                <CheckIcon
                  fill={pressed ? ChangeTheme(theme).whitePressed : "#fff"}
                />
              );
            }}
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default FiltersModal;
