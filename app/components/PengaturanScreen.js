import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import navbarStyles from '../styles/navbar'
import boxContentStyles from '../styles/boxContent'
import { BackIcon, GoIcon, LogoutIcon } from '../lib/images'

export default class PengaturanScreen extends Component {
  renderHeader() {
    return (
      <View style={navbarStyles.containerNavbar}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity style={{paddingVertical:17, paddingRight:20}} onPress={() => Actions.pop()}>
            <BackIcon/>
          </TouchableOpacity>
          <Text style={navbarStyles.textNavbar}>Pengaturan</Text>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <View style={{paddingHorizontal: 15, marginTop: 30}}>
          <TouchableOpacity  style={boxContentStyles.boxContent}>
            <View style={boxContentStyles.boxContentText}>
              <Text style={boxContentStyles.textTitle}>Akun</Text>
              <Text style={boxContentStyles.text}>Data Diri, Alamat, dan Keamanan</Text>
            </View>
            <GoIcon/>
          </TouchableOpacity>
          <TouchableOpacity  style={boxContentStyles.boxContent}>
            <View style={boxContentStyles.boxContentText}>
              <Text style={boxContentStyles.textTitle}>Toko</Text>
              <Text style={boxContentStyles.text}>Lokasi, Pengiriman, dan lainnya</Text>
            </View>
            <GoIcon/>
          </TouchableOpacity>
          <TouchableOpacity  style={boxContentStyles.boxContent}>
            <View style={boxContentStyles.boxContentText}>
              <Text style={boxContentStyles.textTitle}>Pemberitahuan</Text>
              <Text style={boxContentStyles.text}>Aplikasi, Chat, Diskusi, dan lainnya</Text>
            </View>
            <GoIcon/>
          </TouchableOpacity>
          <TouchableOpacity  style={boxContentStyles.boxContent}>
            <View style={boxContentStyles.boxContentText}>
              <Text style={boxContentStyles.textTitle}>Syarat dan Ketentuan</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity  style={boxContentStyles.boxContent}>
            <View style={boxContentStyles.boxContentText}>
              <Text style={boxContentStyles.textTitle}>Bantuan</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boxContentLogout}>
              <LogoutIcon/>
              <Text style={[boxContentStyles.textTitle, { marginLeft:10, marginBottom: Platform.OS == 'ios' ? 0 : 2 }]}>Keluar</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  boxContentLogout: {
    flexDirection:'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: 'rgb(220,220,220)',
    paddingVertical: 17,
    width: '95%'
  }
})
