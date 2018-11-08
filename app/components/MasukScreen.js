import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import navbarStyles from '../styles/navbar'
import boxContentStyles from '../styles/boxContent'
import styles from '../styles/login'

import { BackIcon, EyeIcon, EyeActiveIcon } from '../lib/images'

export default class MasukScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      showPassword: false
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
          <Text style={navbarStyles.textNavbar}>Masuk</Text>
          </View>
          <TouchableOpacity onPress={() => Actions.daftar()}>
          <Text style={styles.textRight}>Daftar</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  render() {
    let { email, password, showPassword } = this.state
    let filled = 'rgb(22,184,178)'
    let empty = 'rgb(220,220,220)'
    let secureText = true
    if (showPassword) {
      secureText = false
    }

    return (
      <ScrollView style={{backgroundColor:'#FFFFFF'}}>
        <View style={styles.container}>
          {this.renderHeader()}

          <View style={{paddingHorizontal: 15}}>
            <View style={[styles.boxContent, {borderColor: email ? filled : empty}]}>
              <Text style={styles.textPlacehoder}>Email</Text>
              <TextInput
                style={styles.textInput}
                keyboardType='email-address'
                onChangeText={(email) => this.setState({email})} />
            </View>
            <View style={[styles.boxContent, {borderColor: password ? filled : empty}]}>
              <Text style={styles.textPlacehoder}>Password</Text>
              <View style={{flexDirection: 'row'}}>
                <TextInput
                  style={[styles.textInput, {width:'90%'}]}
                  secureTextEntry={secureText}
                  onChangeText={(password) => this.setState({password})} />
                <TouchableOpacity style={{top: Platform.OS == 'ios' ? 0 : 2}} onPress={() => this.setState({ showPassword: !showPassword })}>
                  {showPassword ? <EyeActiveIcon/> : <EyeIcon/>}
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity>
              <Text style={styles.lupaPassword}>Lupa Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxMasuk}>
              <Text style={styles.masukText}>Masuk</Text>
            </TouchableOpacity>
            <Text style={{alignSelf: 'center'}}>Atau masuk menggunakan</Text>
            <TouchableOpacity style={styles.boxMasukFB}>
              <Text style={styles.masukFBText}>Masuk Dengan Facebook</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    )
  }
}
