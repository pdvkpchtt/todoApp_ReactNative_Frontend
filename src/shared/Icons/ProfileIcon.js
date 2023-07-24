import * as React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const ProfileIcon = ({ fill, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="35px"
    height="35px"
    viewBox="0 0 24 24"
    {...props}
  >
    <G fill="none">
      <Path
        fill="white"
        d="M13 9a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2Zm-1 1a1 1 0 0 1-1-1H9a3 3 0 0 0 3 3v-2Zm-1-1a1 1 0 0 1 1-1V6a3 3 0 0 0-3 3h2Zm1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2Zm-6.834 9.856l-.959-.285l-.155.523l.355.413l.759-.65Zm13.668 0l.76.651l.354-.413l-.155-.523l-.959.285ZM9 16h6v-2H9v2Zm0-2a5.002 5.002 0 0 0-4.793 3.571l1.917.57A3.002 3.002 0 0 1 9 16v-2Zm3 6a7.98 7.98 0 0 1-6.075-2.795l-1.518 1.302A9.98 9.98 0 0 0 12 22v-2Zm3-4c1.357 0 2.506.902 2.876 2.142l1.916-.571A5.002 5.002 0 0 0 15 14v2Zm3.075 1.205A7.98 7.98 0 0 1 12 20v2a9.98 9.98 0 0 0 7.593-3.493l-1.518-1.302Z"
      />
    </G>
  </Svg>
);
export default ProfileIcon;
