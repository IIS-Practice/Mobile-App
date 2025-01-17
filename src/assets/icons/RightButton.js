import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const RightButton = (props) => (
  <Svg width="64" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path fill-rule="evenodd" clip-rule="evenodd" d="M38.7855 19.2016C36.8328 17.2489 33.667 17.2489 31.7144 19.2015L30.9521 19.9638C28.9995 21.9164 28.9995 25.0823 30.9521 27.0349L47.3811 43.4638C49.3337 45.4164 49.3337 48.5823 47.3811 50.5349L30.9521 66.9638C28.9995 68.9164 28.9995 72.0823 30.9521 74.0349L31.7144 74.7971C33.667 76.7498 36.8328 76.7498 38.7855 74.7971L63.0477 50.5349C65.0003 48.5823 65.0003 45.4164 63.0477 43.4638L38.7855 19.2016Z" fill="#8DB9FC"/>
  </Svg>
);

export default RightButton;
