import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  Text,
  View,
  Platform
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import { Router, Scene, Stack, Tabs } from 'react-native-router-flux'
import { connect, Provider } from 'react-redux'
import {
  AkunActiveIcon,
  AkunInactiveIcon,
  HomeActiveIcon,
  HomeInactiveIcon,
  KatalogActiveIcon,
  KatalogInactiveIcon,
  KomunitasActiveIcon,
  KomunitasInactiveIcon,
  PembayaranActiveIcon,
  PembayaranInactiveIcon
} from '../lib/images'

import BerandaScreen from '../components/MainScreen/BerandaScreen'
import KatalogScreen from '../components/MainScreen/KatalogScreen'
import KomunitasScreen from '../components/MainScreen/KomunitasScreen'
import PembayaranScreen from '../components/MainScreen/PembayaranScreen'
import AkunScreen from '../components/MainScreen/AkunScreen'


console.ignoredYellowBox = [
  'Remote debugger is in a background tab',
  'Warning: BackAndroid is deprecated.',
  'Warning: In next release empty section headers will be rendered.',
  'Possible Unhandled Promise Rejection',
]

const RouterWithRedux = connect()(Router)



export default class Routs extends React.Component {

    constructor() {
        super();
        this.state = {
            isLogin: false,
        };
    }

    iconProfile(props) {
        let focused = props.focused
        let top = 0
        if (!focused) {
          if (Platform.OS == 'ios') {
            top = 0
          } else {
            top = 8
          }
        } else {
          if (Platform.OS == 'ios') {
            top = -2
          } else {
            top = 2
          }
        }

        let icon
        if (focused) {
          switch(props.iconName) {
              case 'beranda':
                  icon = <HomeActiveIcon/>
                  break;
              case 'katalog':
                  icon = <KatalogActiveIcon/>
                  break;
              case 'komunitas':
                  icon = <KomunitasActiveIcon/>
                  break;
              case 'pembayaran':
                  icon = <PembayaranActiveIcon/>
                  break;
              case 'akun':
                  icon = <AkunActiveIcon/>
                  break;
              default:
                  icon = null
          }
        } else {
            switch(props.iconName) {
                case 'beranda':
                    icon = <HomeInactiveIcon/>
                    break;
                case 'katalog':
                    icon = <KatalogInactiveIcon/>
                    break;
                case 'komunitas':
                    icon = <KomunitasInactiveIcon/>
                    break;
                case 'pembayaran':
                    icon = <PembayaranInactiveIcon/>
                    break;
                case 'akun':
                    icon = <AkunInactiveIcon/>
                    break;
                default:
                    icon = null
            }
        }

        return (
          <View style={{ width: focused?35:24, height: focused?30:24, top: top }}>
            {icon}
          </View>
        )
    }

    render() {
        return (
            <Router>
                <Scene key='root'>
                    <Tabs key='root1'
                        tabBarPosition={"bottom"}
                        type="reset"
                        lazy={true}
                        swipeEnabled ={false}
                        animationEnabled={false}
                        activeTintColor={"rgb(40,40,40)"}
                        inactiveTintColor={"transparent"}
                        tabBarStyle={{height:55}}
                        labelStyle={{
                          alignSelf: 'center',
                          fontFamily: 'GothamRounded-Book',
                          fontSize: 10
                        }} >
                        <Scene key='berandaScene' title='Beranda' icon={this.iconProfile} iconName='beranda'>
                            <Scene key='beranda'
                                component={BerandaScreen}
                                title='Beranda'
                                panHandlers={null}
                                hideNavBar={true} />
                        </Scene>
                        <Scene key='katalogScene' title='Katalog' icon={this.iconProfile} iconName='katalog'>
                            <Scene key='katalog'
                                component={KatalogScreen}
                                title='Katalog'
                                panHandlers={null}
                                hideNavBar={true} />
                        </Scene>
                        <Scene key='komunitasScene' title='Komunitas' icon={this.iconProfile} iconName='komunitas'>
                            <Scene key='komunitas'
                                component={KomunitasScreen}
                                title='Komunitas'
                                panHandlers={null}
                                hideNavBar={true} />
                        </Scene>
                        <Scene key='pembayaranScene' title='Pembayaran' icon={this.iconProfile} iconName='pembayaran'>
                            <Scene key='pembayaran'
                                component={PembayaranScreen}
                                title='Pembayaran'
                                panHandlers={null}
                                hideNavBar={true} />
                        </Scene>
                        <Scene key='akunScene' title='Akun' icon={this.iconProfile} iconName='akun'>
                            <Scene key='akun'
                                component={AkunScreen}
                                title='Akun'
                                panHandlers={null}
                                hideNavBar={true} />
                        </Scene>
                    </Tabs>
                </Scene>
            </Router>
        )
    }
}
