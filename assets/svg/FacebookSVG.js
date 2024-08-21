import * as React from "react";
import Svg, { Circle, G, Path } from "react-native-svg";

const FacebookSVG = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={56} height={56} {...props}>
    <G transform="translate(-20 -446)">
      <Circle
        cx={28}
        cy={28}
        r={28}
        fill="#4267b2"
        data-name="Ellipse 56"
        transform="translate(20 446)"
      />
      <Path
        fill="#fff"
        d="M45 470h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333H54v-5h-3.808C46.6 462 45 463.583 45 466.615Z"
      />
    </G>
  </Svg>
);
export default FacebookSVG;
