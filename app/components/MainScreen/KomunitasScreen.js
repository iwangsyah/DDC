import React, { Component } from 'react';
import {
  WebView,
  Platform,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import styles from '../../styles/MainScreen/profil'
import boxContentStyles from '../../styles/boxContent'

export default class KomunitasScreen extends Component {

  renderHeader() {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.titleHeader}>Komunitas</Text>
      </View>
    )
  }

  render() {
    return (
        <View style={styles.container}>
          {this.renderHeader()}
          <WebView
            source={{uri: 'https://dusdusan.com/komunitas?webview=1'}}
            style={{flex: 1 }} // OR style={{height: 100, width: 100}}
          />
        </View>
    );
  }
}
