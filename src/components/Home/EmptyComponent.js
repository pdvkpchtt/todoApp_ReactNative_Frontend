import TextMain from "../../shared/Text/TextMain";
import Card from "../../shared/ui/Card";

const EmptyComponent = () => {
  return (
    <Card marginTop={12}>
      <TextMain text="Nothing found..." additionStyles={{ fontSize: 18 }} />
    </Card>
  );
};

export default EmptyComponent;
