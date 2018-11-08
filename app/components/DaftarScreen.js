import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import navbarStyles from '../styles/navbar'
import styles from '../styles/login'
import boxContentStyles from '../styles/boxContent'
import { BackIcon } from '../lib/images'

export default class MasukScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nama: '',
      email: '',
      handphone: ''
    }
  }

  renderHeader() {
    return (
      <View style={navbarStyles.containerNavbar}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => Actions.pop()}>
            <BackIcon/>
          </TouchableOpacity>
          <Text style={navbarStyles.textNavbar}>Daftar</Text>
          </View>
          <TouchableOpacity onPress={() => Actions.masuk()}>
          <Text style={styles.textRight}>Masuk</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  render() {
    let { nama, email, handphone } = this.state
    let filled = 'rgb(22,184,178)'
    let empty = 'rgb(220,220,220)'

    return (
      <View style={styles.container}>
        {this.renderHeader()}

        <View style={{paddingHorizontal: 15}}>
          <View style={[styles.boxContent, {borderColor: nama ? filled : empty}]}>
            <Text style={styles.textPlacehoder}>Nama</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(nama) => this.setState({nama})} />
          </View>
          <View style={[styles.boxContent, {borderColor: email ? filled : empty}]}>
            <Text style={styles.textPlacehoder}>Email</Text>
            <TextInput
              style={styles.textInput}
              keyboardType='email-address'
              onChangeText={(email) => this.setState({email})} />
          </View>
          <View style={[styles.boxContent, {borderColor: handphone ? filled : empty}]}>
            <Text style={styles.textPlacehoder}>No. Handphone</Text>
            <TextInput
              style={styles.textInput}
              keyboardType='numeric'
              onChangeText={(handphone) => this.setState({handphone})} />
          </View>
          <TouchableOpacity style={styles.boxMasuk}>
            <Text style={styles.masukText}>Daftar</Text>
          </TouchableOpacity>
          <Text style={{alignSelf: 'center'}}>Atau masuk menggunakan</Text>
          <TouchableOpacity style={styles.boxMasukFB}>
            <Text style={styles.masukFBText}>Daftar Dengan Facebook</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}
