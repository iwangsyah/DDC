import React, { Component } from 'react';
import {
  FlatList,
  Platform,
  Dimensions,
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
import Icon from 'react-native-vector-icons/SimpleLineIcons'

const widthScreen = Dimensions.get('window').width

export default class KatalogScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gridType: true,
      katalog: [
        {id: 1, name: 'Wahyu1'},
        {id: 2, name: 'Wahyu2'},
        {id: 3, name: 'Wahyu3'},
        {id: 4, name: 'Wahyu4'},
        {id: 5, name: 'Wahyu5'},
        {id: 6, name: 'Wahyu6'},
        {id: 7, name: 'Wahyu7'},
        {id: 8, name: 'Wahyu8'},
        {id: 9, name: 'Wahyu9'},
        {id: 10, name: 'Wahyu10'},
        {id: 11, name: 'Wahyu11'},
      ],
    }
    this.renderRow = this.renderRow.bind(this)
  }

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
      <View style={{paddingHorizontal:15, marginTop: 22, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20}}>

        <View style={stylesCard.cardContainer}>
          <TouchableOpacity style={stylesCard.card}>
            <Text>Filter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesCard.card}>
            <Text>Urutkan</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => this.setState({gridType: !this.state.gridType})}>
          <Icon style={{fontSize:20}} name={this.state.gridType ? 'grid' : 'list'}/>
        </TouchableOpacity>

      </View>
    )
  }

  renderRow(katalog) {
    // if (katalog.item.empty === true) {
    //    return <View/>;
    //  }
    if (this.state.gridType) {
       return (
         <TouchableOpacity
            style={{width:'50%', backgroundColor: 'pink', height: 220,  marginLeft: katalog.index % 2 !== 0 ? 5 : 0, marginRight: katalog.index % 2 === 0 ? 5 : 0, marginBottom: 10 }}
         >
           <Text>{katalog.index}</Text>
         </TouchableOpacity>
       );
    } else {
      return (
         <TouchableOpacity
            style={{ flex:1, backgroundColor: 'pink', height: 100, marginBottom: 10 }}
         >
           <Text>{katalog.index}</Text>
         </TouchableOpacity>
      )
    }
  }

  keyExtractor(data) {
    if (data) {
      return data.id
    }
  }

  render() {
    let { katalog, gridType } = this.state
    let data = []
    let content = null
    content = (
        <FlatList
          key = {gridType ? 'grid' : 'list'}
          data = {data.concat(this.state.katalog)}
          style={{paddingHorizontal: 15}}
          numColumns= {gridType ? 2 : 1}
          keyExtractor = {this.keyExtractor}
          renderItem = {this.renderRow} />
    )

    return (
        <View style={styles.container}>
          {this.renderHeader()}
          {this.renderBarOptions()}
            {content}
        </View>
    )
  }
}

const stylesCard = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    paddingVertical: 3,
    paddingLeft: 3
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
    elevation: 3,
    shadowRadius: 3,
    shadowOpacity: 0.5,
  }
});
