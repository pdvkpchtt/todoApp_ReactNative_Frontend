import Layout from "../../shared/Layout";

import SwitchThemeCard from "../../components/Decoration/SwitchThemeCard";
import ChooseAccentCard from "../../components/Decoration/ChooseAccentCard";

const DecorationStackScreen = () => {
  return (
    <Layout>
      <ChooseAccentCard marginBottom={12} />
      <SwitchThemeCard />
    </Layout>
  );
};

export default DecorationStackScreen;
