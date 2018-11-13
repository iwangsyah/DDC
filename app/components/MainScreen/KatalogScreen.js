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
        <TouchableOpacity style={{paddingLeft:20, marginBottom:10}} onPress={() => Actions.pengaturan()}>
          <SearchIcon/>
        </TouchableOpacity>
      </View>
    )
  }

  renderBarOptions() {
    let kategoriBar = (
      <View style={{backgroundColor: '#FFFFFF', height: 45, marginBottom: 20,
      marginTop: 5, alignItems: 'center', justifyContent: 'center'}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={stylesCard.kategoriContainer}>
          <TouchableOpacity style={stylesCard.kategori}>
            <Text style={stylesCard.text}>Medina</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesCard.kategori}>
            <Text style={stylesCard.text}>Dusdusan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesCard.kategori}>
            <Text style={stylesCard.text}>Technoplast</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesCard.kategori}>
            <Text style={stylesCard.text}>Tempat Makan</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    )

    let filterBar = (
      <View style={{backgroundColor: '#FFFFFF', borderWidth: 0.5, borderColor: 'rgb(220,220,220)', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15, height: 40}}>
        <TouchableOpacity onPress={() => this.setState({gridType: !this.state.gridType})}>
          <Icon style={{fontSize:18}} name={this.state.gridType ? 'grid' : 'list'}/>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity style={{marginRight: 10, flexDirection:'row'}}>
            <Text style={stylesCard.text}>Terbaru</Text>
            <Icon style={{fontSize:10, marginLeft:5 }} name='arrow-down'/>
          </TouchableOpacity>
          <Text style={stylesCard.text}>Urutkan</Text>
          <View style={{height: 16, borderLeftWidth:1, borderColor:'rgb(220,220,220)', marginHorizontal: 10}}/>
          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
            <FilterIcon/>
            <Text style={[stylesCard.text, {marginLeft: 5}]}>FILTER</Text>
          </TouchableOpacity>
        </View>
      </View>
    )

    return (
      <View>
        {filterBar}
        {kategoriBar}
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
            style={{width:widthScreen/2-20, backgroundColor: 'pink', height: 253, marginRight: katalog.index % 2 == 0 ?  10 : 0, marginBottom: 15 }}
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
  kategoriContainer: {
    backgroundColor: '#FFFFFF',
    paddingLeft:15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  kategori: {
    borderWidth: 1,
    borderColor: 'rgb(40,40,40)',
    borderRadius: 3,
    paddingVertical: 9,
    paddingHorizontal: 15,
    marginRight: 15,
    backgroundColor:'#ffffff'
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
  },
  text: {
    fontSize: 12,
    fontFamily: 'GothamRounded-book',
    color: 'rgb(40,40,40)'
  }
});
