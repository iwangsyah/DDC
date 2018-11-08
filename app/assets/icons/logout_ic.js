import React, { Component } from 'react';
import { Platform } from 'react-native';
import ImageSvg from 'react-native-remote-svg';

export default class LogoutIcon extends Component {
  render() {
    return (
      <ImageSvg source={{ uri: `data:image/svg+xml;utf8, <svg width="15px" height="15px" viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <!-- Generator: Sketch 52.2 (67145) - http://www.bohemiancoding.com/sketch -->
          <title>Group</title>
          <desc>Created with Sketch.</desc>
          <g id="Profil" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Profil---Edit-Profil" transform="translate(-15.000000, -421.000000)" fill-rule="nonzero">
                  <g id="Group-11" transform="translate(15.000000, 421.000000)">
                      <g id="Group">
                          <path d="" id="Path-4" stroke="#979797"></path>
                          <path d="M6.83710538,0.75701873 L10.922328,0.75701873 C12.5791823,0.75701873 13.922328,2.10016448 13.922328,3.75701873 L13.922328,11 C13.922328,12.6568542 12.5791823,14 10.922328,14 L6.83710538,14" id="Path-25" stroke="#282828" stroke-linecap="round"></path>
                          <path d="M2.95609903,7.19427754 L1.19253044,7.19427754" id="Path-26" stroke="#282828" stroke-linecap="round" stroke-linejoin="round"></path>
                          <polyline id="Path-27" stroke="#282828" stroke-linecap="round" stroke-linejoin="round" points="3.174719 4.98532435 0.609283979 7.28071358 3.174719 9.57610281"></polyline>
                          <path d="M9.67910192,0.978143275 L9.67910192,9.00560161" id="Path-28" stroke="#282828" stroke-linecap="round"></path>
                          <path d="M9.79342718,10.6132695 L9.79342718,11.7211006" id="Path-29" stroke="#000000" stroke-linecap="round"></path>
                          <path d="M3.9186936,7.18641107 L7.3451643,7.18641107" id="Path-30" stroke="#282828" stroke-linecap="round"></path>
                      </g>
                  </g>
              </g>
          </g>
      </svg>`}}
      style={{ width:14, height:14, bottom: Platform.OS == 'ios' ? 1 : 0 }} />
    );
  }
}
