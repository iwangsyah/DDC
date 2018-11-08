import React, { Component } from 'react';
import { Platform } from 'react-native';
import ImageSvg from 'react-native-remote-svg';

export default class GoIcon extends Component {
  render() {
    return (
      <ImageSvg source={{ uri: `data:image/svg+xml;utf8, <svg width="10px" height="16px" viewBox="0 0 10 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <!-- Generator: Sketch 52.2 (67145) - http://www.bohemiancoding.com/sketch -->
          <title>Back Copy 3</title>
          <desc>Created with Sketch.</desc>
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
              <g id="Profil" transform="translate(-321.000000, -282.000000)" stroke="#8C8C8C">
                  <g id="Group-18" transform="translate(15.000000, 241.000000)">
                      <g id="Back-Copy-3" transform="translate(311.000000, 49.000000) scale(-1, 1) translate(-311.000000, -49.000000) translate(307.000000, 41.000000)">
                          <path d="M7.56210744,0 L0.277089229,7.36583465 C-0.0923630765,7.72187014 -0.0923630765,8.27819953 0.277089229,8.63423502 L7.56210744,16" id="Path"></path>
                      </g>
                  </g>
              </g>
          </g>
      </svg>`}}
      style={{ width:16, height:16 }} />
    );
  }
}
