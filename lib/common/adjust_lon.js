import {TWO_PI, SPI} from '../constants/values';
import sign from './sign';

export default function (x, allowOver) {
  return allowOver || Math.abs(x) <= SPI ? x : x - sign(x) * TWO_PI;
}
