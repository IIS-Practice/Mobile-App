import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const LeftButton = (props) => (
  <Svg width="64" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path fill-rule="evenodd" clip-rule="evenodd" d="M55.2145 19.2016C57.1671 17.2489 60.3329 17.2489 62.2856 19.2015L63.0478 19.9638C65.0004 21.9164 65.0004 25.0823 63.0478 27.0349L46.6189 43.4638C44.6663 45.4164 44.6663 48.5823 46.6189 50.5349L63.0478 66.9638C65.0004 68.9164 65.0004 72.0823 63.0478 74.0349L62.2856 74.7971C60.3329 76.7498 57.1671 76.7498 55.2145 74.7971L30.9522 50.5349C28.9996 48.5823 28.9996 45.4164 30.9522 43.4638L55.2145 19.2016Z" fill="#8DB9FC"/>
  </Svg>
);

export default LeftButton;
