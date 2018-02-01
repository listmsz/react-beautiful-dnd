// @flow
import type { Area } from '../types';
import getArea from './get-area';

export default (el: HTMLElement): Area => {
  const top: number = el.scrollTop;
  const left: number = el.scrollLeft;
  const width: number = el.clientWidth;
  const height: number = el.clientHeight;

  // computed
  const right: number = left + width;
  const bottom: number = top + height;

  return getArea({
    top, left, right, bottom,
  });
};
