import React, { Component } from 'react';
import { Platform } from 'react-native';
import ImageSvg from 'react-native-remote-svg';

export default class FilterIcon extends Component {
  render() {
    return (
      <ImageSvg source={{ uri: `data:image/svg+xml;utf8, <svg width="14px" height="13px" viewBox="0 0 14 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch -->
          <title>ic-filter</title>
          <desc>Created with Sketch.</desc>
          <defs></defs>
          <g id="Urutkan-&amp;-Filter" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g transform="translate(-245.000000, -614.000000)" id="Tabs-Menu">
                  <g transform="translate(0.000000, 600.000000)">
                      <g id="Kategori" transform="translate(243.000000, 11.000000)">
                          <g id="ic-filter">
                              <rect id="Rectangle" x="0" y="0" width="18" height="18"></rect>
                              <path d="M7.15941256,9.64215649 L2.39623609,4.00970033 C2.05900409,3.61092348 2.34245532,3 2.86470852,3 L15.1352915,3 C15.6575447,3 15.9409959,3.61092348 15.6037639,4.00970033 L10.8405874,9.64215649 L10.8405874,14.6570538 C10.8405874,15.1131404 10.3606159,15.4097791 9.95267972,15.205811 L7.49856313,13.9787527 C7.29070925,13.8748257 7.15941256,13.6623832 7.15941256,13.4299955 L7.15941256,9.64215649 Z M13.8129499,4.2270583 L4.18705014,4.2270583 L8.24141413,9.02134371 C8.33507809,9.13210134 8.38647085,9.27246252 8.38647085,9.41751489 L8.38647085,13.0508137 L9.61352915,13.6643428 L9.61352915,9.41751489 C9.61352915,9.27246252 9.66492191,9.13210134 9.75858587,9.02134371 L13.8129499,4.2270583 Z" id="Shape" fill="#505050" fill-rule="nonzero"></path>
                          </g>
                      </g>
                  </g>
              </g>
          </g>
      </svg>`}}
      style={{ width:12, height:18, bottom: 0.5 }} />
    );
  }
}
