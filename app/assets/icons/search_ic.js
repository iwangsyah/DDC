import React, { Component } from 'react';
import { Platform } from 'react-native';
import ImageSvg from 'react-native-remote-svg';

export default class SearchIcon extends Component {
  render() {
    return (
      <ImageSvg source={{ uri: `data:image/svg+xml;utf8, <svg width="20px" height="21px" viewBox="0 0 20 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <!-- Generator: Sketch 52.2 (67145) - http://www.bohemiancoding.com/sketch -->
          <title>Group 25</title>
          <desc>Created with Sketch.</desc>
          <g id="Katalog" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Katalog-List" transform="translate(-324.000000, -14.000000)" fill-rule="nonzero">
                  <g id="Group-13" transform="translate(15.000000, 15.000000)">
                      <g id="Group-25" transform="translate(310.000000, 0.000000)">
                          <circle id="Oval" stroke="#282828" cx="8.33333333" cy="8.33333333" r="8.33333333"></circle>
                          <path d="M14.2170739,14.5181543 L18.3914578,20" id="Path-4" stroke="#282828" stroke-linecap="round"></path>
                          <circle id="Oval" fill="#282828" cx="8.33333333" cy="3.33333333" r="1.66666667"></circle>
                          <circle id="Oval" fill="#282828" cx="9.16666667" cy="7.5" r="1"></circle>
                      </g>
                  </g>
              </g>
          </g>
      </svg>`}}
      style={{ width:20, height:20 }} />
    );
  }
}
