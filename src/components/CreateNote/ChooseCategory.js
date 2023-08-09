import { Pressable, View } from "react-native";
import TextTitle from "../../shared/Text/TextTitle";
import Card from "../../shared/ui/Card";
import CategoryBage from "../../shared/ui/CategoryBage";

const ChooseCategory = ({
  title = "empty",
  setCategory = () => {},
  category = "",
  filters = [],
}) => {
  return (
    <>
      <TextTitle
        text={title}
        additionStyles={{
          marginBottom: 6,
          fontFamily: "SF-Pro-Display-Medium",
        }}
        numberOfLines={1}
        flex={1}
      />

      <Card display="flex" flexDirection="row" flexWrap="wrap">
        {filters.map((item, index) => (
          <Pressable onPress={() => setCategory(item.name)} key={index}>
            <CategoryBage
              category={item.name.toLowerCase()}
              marginRight={index != filters.length - 1 ? 6 : 0}
              gray={category != item.name}
              marginBottom={6}
            />
          </Pressable>
        ))}
      </Card>
    </>
  );
};

export default ChooseCategory;
