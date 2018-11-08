import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View
} from 'react-native';
import styles from '../styles/cardProfil'

export default class CardProfil extends Component {
  render() {
    return (
        <View style={styles.cardContainer}>
          <View style={styles.card}>

              <View style={{flexDirection: 'row'}}>

                <TouchableOpacity style={{ alignItems: 'center'}}>
                  <Image
                      style={{width: 50, height: 50, borderRadius: 25}}
                      source={{uri: 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-1/p160x160/22489827_1931482646862725_2644825206628204611_n.jpg?_nc_cat=107&_nc_ht=scontent-lht6-1.xx&oh=b7e8b579ee206c1410d1c9052066eca3&oe=5C42CB81'}}
                  />
                  <Text style={styles.name}>Wahyu I.</Text>
                  <Text style={styles.status}>Reseller</Text>
                </TouchableOpacity>

                <View style={{flexDirection: 'column'}}>
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{marginLeft: 30}}>
                      <Text style={styles.titleText}>Level</Text>
                      <Text style={styles.text}>Prioritas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: 50}}>
                      <Text style={styles.titleText}>Poin</Text>
                      <Text style={styles.text}>10780</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{flexDirection: 'row', marginTop: 20}}>
                    <TouchableOpacity style={{marginLeft: 30}}>
                      <Text style={styles.titleText}>Saldo</Text>
                      <Text style={styles.text}>Rp. 200,000,000</Text>
                    </TouchableOpacity>
                  </View>
                </View>

              </View>

          </View>
        </View>
    );
  }
}
