import * as React from "react";
import Svg, { Circle, G, Path } from "react-native-svg";
const TwitterSVG = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={56} height={56} {...props}>
    <G transform="translate(-20 -446)">
      <Circle
        cx={28}
        cy={28}
        r={28}
        fill="#1c9deb"
        data-name="Ellipse 56"
        transform="translate(20 446)"
      />
      <Path
        fill="#fff"
        d="M60 466.309a9.831 9.831 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.192 4.927 4.927 0 0 0-8.391 4.49 13.978 13.978 0 0 1-10.148-5.141 4.93 4.93 0 0 0 1.523 6.574 4.9 4.9 0 0 1-2.229-.616 4.927 4.927 0 0 0 3.949 4.893 4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.416 9.9 9.9 0 0 1-7.29 2.04 13.939 13.939 0 0 0 7.548 2.212 13.925 13.925 0 0 0 13.995-14.646A10.025 10.025 0 0 0 60 466.309Z"
      />
    </G>
  </Svg>
);
export default TwitterSVG;
