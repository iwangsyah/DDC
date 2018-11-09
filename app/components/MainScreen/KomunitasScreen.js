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
            source={{uri: 'https://dusdusan.com/komunitas'}}
            style={{flex: 1 }} // OR style={{height: 100, width: 100}}
          />
        </View>
    );
  }
}

const stylesCard = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    paddingBottom: 35,
  },
  card: {
    borderRadius: 3,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginRight: 10,
    shadowColor: 'rgba(119, 117, 117, 0.8)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 5,
    shadowRadius: 3,
    shadowOpacity: 0.5,
  }
});
