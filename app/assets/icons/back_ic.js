import React, { Component } from 'react';
import { Platform } from 'react-native';
import ImageSvg from 'react-native-remote-svg';

export default class BackIcon extends Component {
  render() {
    return (
      <ImageSvg source={{ uri: `data:image/svg+xml;utf8, <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <!-- Generator: Sketch 52.2 (67145) - http://www.bohemiancoding.com/sketch -->
          <title>back arrow 2</title>
          <desc>Created with Sketch.</desc>
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
              <g id="Profil---Edit-Profil" transform="translate(-20.000000, -17.000000)" fill-rule="nonzero" stroke="#282828">
                  <g id="Group-2">
                      <g id="back-arrow-2" transform="translate(20.000000, 17.000000)">
                          <g id="back-arrow">
                              <g id="Layer_1">
                                  <polyline id="Path-2" points="9.48984483 0.375 0.739844832 10 9.83075392 20"></polyline>
                                  <path d="M1.31153961,10 L19.4933578,10" id="Path-3"></path>
                              </g>
                          </g>
                      </g>
                  </g>
              </g>
          </g>
      </svg>`}}
      style={{ width:16, height:16 }} />
    );
  }
}
