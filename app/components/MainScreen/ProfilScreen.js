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
import { PengaturanIcon } from '../../lib/images'
import styles from '../../styles/MainScreen/profil'
import boxContentStyles from '../../styles/boxContent'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

export default class ProfilScreen extends Component {

  renderHeader() {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.titleHeader}>Profil</Text>
        <TouchableOpacity onPress={() => Actions.pengaturan()}>
          <PengaturanIcon/>
        </TouchableOpacity>
      </View>
    )
  }

  renderContent() {
    return (
      <View style={{paddingHorizontal: 15}}>
        <Text style={[styles.textTitle, { marginBottom: 2 }]}>Transaksi</Text>
        <TouchableOpacity style={styles.boxContent}>
          <View style={boxContentStyles.boxContentText}>
            <Text style={[styles.textTitle, {fontFamily: 'GothamRounded-Book'}]}>Menunggu Pembayaran</Text>
            <Text style={boxContentStyles.text}>Transaksi yang belum dibayarkan</Text>
          </View>
          <Icon style={{fontSize: 16}} name='arrow-right'/>
        </TouchableOpacity>
        <TouchableOpacity  style={boxContentStyles.boxContent}>
          <View style={boxContentStyles.boxContentText}>
            <Text style={boxContentStyles.textTitle}>Komplain</Text>
            <Text style={boxContentStyles.text}>Khusus untuk kerusakan pada produk</Text>
          </View>
          <Icon style={{fontSize: 16}} name='arrow-right'/>
        </TouchableOpacity>
        <TouchableOpacity style={boxContentStyles.boxContent}>
          <View style={boxContentStyles.boxContentText}>
            <Text style={boxContentStyles.textTitle}>Menunggu Pembayaran</Text>
            <Text style={boxContentStyles.text}>Transaksi yang belum dibayarkan</Text>
          </View>
          <Icon style={{fontSize: 16}} name='arrow-right'/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boxAjak}>
          <Text style={styles.ajakTitleText}>Ajak Teman</Text>
          <Text style={styles.ajakText}>Dapatkan poin dengan ajak teman jadi Reseller</Text>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <ScrollView style={{backgroundColor: '#FFFFFF'}}>
        <View style={styles.container}>
          {this.renderHeader()}
          <CardProfil/>
          {this.renderContent()}
        </View>
      </ScrollView>
    );
  }
}
