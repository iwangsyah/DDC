import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import CardProfil from '../CardProfil'
import { PengaturanIcon, SearchIcon, FilterIcon } from '../../lib/images'
import styles from '../../styles/MainScreen/profil'
import boxContentStyles from '../../styles/boxContent'

export default class KatalogScreen extends Component {

  renderHeader() {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.titleHeader}>Katalog Produk</Text>
        <TouchableOpacity style={{paddingLeft:20}} onPress={() => Actions.pengaturan()}>
          <SearchIcon/>
        </TouchableOpacity>
      </View>
    )
  }

  renderBarOptions() {
    return (
      <View style={{paddingHorizontal:15, marginTop: 22, flexDirection: 'row', justifyContent: 'space-between', backgroundColor:'yellow', position: 'absolute', top: 50}}>

        <View style={stylesCard.cardContainer}>
          <TouchableOpacity style={stylesCard.card}>
            <Text>Filter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesCard.card}>
            <Text>Urutkan</Text>
          </TouchableOpacity>
        </View>
        <PengaturanIcon/>

      </View>
    )
  }

  render() {
    return (
        <View style={styles.container}>
          {this.renderHeader()}
          {this.renderBarOptions()}
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
