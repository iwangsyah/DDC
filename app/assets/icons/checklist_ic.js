import React, { Component } from 'react';
import { Platform } from 'react-native';
import ImageSvg from 'react-native-remote-svg';

export default class Checklist extends Component {
  render() {
    return (
      <ImageSvg source={{ uri: `data:image/svg+xml;utf8, <svg width="14px" height="11px" viewBox="0 0 14 11" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch -->
          <title>ic-check</title>
          <desc>Created with Sketch.</desc>
          <defs>
              <path d="M3.53033009,9.21966991 C3.23743687,8.9267767 2.76256313,8.9267767 2.46966991,9.21966991 C2.1767767,9.51256313 2.1767767,9.98743687 2.46966991,10.2803301 L6.21966991,14.0303301 C6.51256313,14.3232233 6.98743687,14.3232233 7.28033009,14.0303301 L15.5303301,5.78033009 C15.8232233,5.48743687 15.8232233,5.01256313 15.5303301,4.71966991 C15.2374369,4.4267767 14.7625631,4.4267767 14.4696699,4.71966991 L6.75,12.4393398 L3.53033009,9.21966991 Z" id="path-1"></path>
          </defs>
          <g id="Filter" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Urutkan" transform="translate(-329.000000, -90.000000)">
                  <g id="ic-check" transform="translate(327.000000, 86.000000)">
                      <rect id="Rectangle" x="0" y="0" width="18" height="18"></rect>
                      <mask id="mask-2" fill="white">
                          <use xlink:href="#path-1"></use>
                      </mask>
                      <use id="Shape" fill="#282828" fill-rule="nonzero" xlink:href="#path-1"></use>
                  </g>
              </g>
          </g>
      </svg>`}}
      style={{ width:11, height:12 }} />
    );
  }
}
