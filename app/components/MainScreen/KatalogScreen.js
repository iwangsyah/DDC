import React, { Component } from 'react';
import {
  FlatList,
  Platform,
  Dimensions,
  StyleSheet,
  ScrollView,
  TextInput,
  Switch,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { SafeAreaView } from 'react-navigation';
import Modal from 'react-native-modal'

import { PengaturanIcon, SearchIcon, FilterIcon, BackIcon, ChecklistIcon } from '../../lib/images'
import styles from '../../styles/MainScreen/profil'
import boxContentStyles from '../../styles/boxContent'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

const widthScreen = Dimensions.get('window').width

const filterList = [
  {id: 1, name: 'Terbaru'},
  {id: 2, name: 'Terlaris'},
  {id: 3, name: 'Terpopuler'},
  {id: 4, name: 'Harga Tertinggi'},
  {id: 5, name: 'Harga Terendah'}
]

const kategoriList = [
  {id: 1, name: 'Perlengkapan Jualan'},
  {id: 2, name: 'Rumah Tangga'},
  {id: 3, name: 'Fashion Anak'},
  {id: 4, name: 'Perlengkapan Bayi'},
  {id: 5, name: 'Fashion Wanita'},
  {id: 6, name: 'Food'},
  {id: 7, name: 'Dekorasi Rumah'},
  {id: 8, name: 'Dusdusan'},
  {id: 9, name: 'Fashion Wanita'},
  {id: 10, name: 'Medina'},
  {id: 11, name: 'Promo Kurma Water'},
  {id: 12, name: 'Supra'},
  {id: 13, name: 'Persiapan Jualan'},
]

export default class KatalogScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gridType: true,
      modalVisible: false,
      modalFilterVisible: false,
      modalFilterNextVisible: false,
      filterSelected: {id: 1, name: 'Terbaru'},
      kategoriSelected: [],
      produkTerbaru: false,
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
          <TouchableOpacity style={{marginRight: 10, flexDirection:'row'}} onPress={() => this.setState({modalVisible: true})}>
            <Text style={stylesCard.text}>{this.state.filterSelected.name}</Text>
            <Icon style={{fontSize:10, marginLeft:5 }} name='arrow-down'/>
          </TouchableOpacity>
          <Text style={stylesCard.text}>Urutkan</Text>
          <View style={{height: 16, borderLeftWidth:1, borderColor:'rgb(220,220,220)', marginHorizontal: 10}}/>
          <TouchableOpacity onPress={() => this.setState({modalFilterVisible: true, modalFilterNextVisible: false})} style={{flexDirection: 'row', alignItems: 'center'}}>
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

  hideFilterModal() {
    this.setState({ modalFilterVisible: false })
  }

  filterModal() {
    let filters = filterList.map((filter) => {
        return (
          <TouchableOpacity onPress={() => this.setState({filterSelected: filter, modalVisible: false})}>
            <Text style={{marginBottom: 10}}>{filter.name}</Text>
          </TouchableOpacity>
        )
    })

    return (
      <Modal
        supportedOrientations={['portrait']}
        animationIn={'fadeIn'}
        animationOut={'fadeOut'}
        backdropColor	={'transparent'}
        isVisible={this.state.modalVisible}
        onBackdropPress={() => this.setState({modalVisible: false})}
        style={stylesModalFilter.menuModal}
      >
          <View style={stylesCard.cardContainer}>
            <View style={stylesCard.card}>
              {filters}
            </View>
        </View>
      </Modal>
    )
  }

  backPress() {
    this.setState({ modalFilterNextVisible: false })
  }

  selectKategori(kategori) {
    let kategoriList = this.state.kategoriSelected
    kategoriList.push(kategori)
    this.setState({ kategoriSelected: kategoriList })
  }

  render() {
    let { katalog, gridType, modalFilterVisible, modalFilterNextVisible, produkTerbaru, kategoriSelected } = this.state
    let data = []
    console.log('kategoriSelected: ', kategoriSelected);
    let kategoris = kategoriList.map((kategori) => {
        let selected = null
        kategoriSelected.find((o) => {
          selected = o == kategori.id
        })
        console.log('\nkategori: ', kategori.name);
        console.log('selected: ', selected);
        return (
          <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 40, backgroundColor: '#FFFFFF', marginTop: 23, paddingHorizontal: 15}} onPress={this.selectKategori.bind(this, kategori.id)}>
            <Text style={{color: 'rgb(40,40,40)', fontSize:14, fontFamily: 'GothamRounded-Book'}}>{kategori.name}</Text>
            <View style={{alignItems: 'center', justifyContent: 'center', width: 16, height: 16, borderRadius: 8, borderWidth: 1, borderColor: 'rgb(220,220,220)'}}>
              { selected && <ChecklistIcon/> }
            </View>
          </TouchableOpacity>
        )
    })

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
            <Modal
              supportedOrientations={['portrait']}
              animationIn='slideInRight'
              animationOut='slideOutRight'
              isVisible={modalFilterVisible}
              onBackdropPress={this.hideFilterModal.bind(this)}
              style={stylesModalFilter.menuModal}
            >
              <View style={stylesModalFilter.menuModalContainer}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15}}>
                <TouchableOpacity>
                  <Text>RESET</Text>
                </TouchableOpacity>
                <Text style={{color: 'rgb(40,40,40)', fontSize:16, fontFamily: 'GothamRounded-Book'}}>Filter</Text>
                <TouchableOpacity onPress={this.hideFilterModal.bind(this)}>
                  <Text style={{color: 'rgb(245,130,31)', fontSize:16, fontFamily: 'GothamRounded-Book'}}>selesai</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 40, backgroundColor: '#FFFFFF', marginTop: 10, paddingHorizontal: 15}} onPress={() => this.setState({ modalFilterNextVisible: true})}>
                <Text style={{color: 'rgb(40,40,40)', fontSize:14, fontFamily: 'GothamRounded-Book'}}>Kategori</Text>
                <Text style={{color: 'rgb(40,40,40)', fontSize:14, fontFamily: 'GothamRounded-Book'}}>Semua</Text>
              </TouchableOpacity>

              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 40, backgroundColor: '#FFFFFF', marginTop: 10, paddingHorizontal: 15}} onPress={() => this.setState({ modalFilterNextVisible: true})}>
                <Text style={{color: 'rgb(40,40,40)', fontSize:14, fontFamily: 'GothamRounded-Book'}}>Harga</Text>
                <View style={{flexDirection: 'row'}}>
                  <View style={{borderColor:'rgb(40,40,40)', borderBottomWidth:1, width: 70, alignItems: 'center'}}>
                    <TextInput
                      placeholder='Terendah'
                    />
                  </View>
                  <Text style={{marginHorizontal: 15}}>-</Text>
                  <View style={{borderColor:'rgb(40,40,40)', borderBottomWidth:1, width: 70, alignItems: 'center'}}>
                    <TextInput
                      placeholder='Tertinggi'/>
                  </View>
                </View>
              </View>

              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 40, backgroundColor: '#FFFFFF', marginTop: 10, paddingHorizontal: 15}} onPress={() => this.setState({ modalFilterNextVisible: true})}>
                <Text style={{color: 'rgb(40,40,40)', fontSize:14, fontFamily: 'GothamRounded-Book'}}>Produk Terbaru</Text>
                <View>
                  <Switch
                    onValueChange={ () => this.setState({ produkTerbaru: !produkTerbaru })}
                    value={produkTerbaru} />
                </View>
              </View>
              <Modal
                supportedOrientations={['portrait']}
                animationIn='slideInUp'
                animationOut='slideOutDown'
                backdropColor	={'transparent'}
                isVisible={modalFilterNextVisible}
                onBackdropPress={this.hideFilterModal.bind(this)}
                style={stylesModalFilter.menuModal}
              >
                <View style={stylesModalFilter.menuModalContainerNext}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15}}>
                    <TouchableOpacity onPress={this.backPress.bind(this)}>
                      <BackIcon/>
                    </TouchableOpacity>
                    <Text style={{color: 'rgb(40,40,40)', fontSize:16, fontFamily: 'GothamRounded-Book'}}>Kategori</Text>
                    <TouchableOpacity onPress={this.hideFilterModal.bind(this)}>
                      <Text style={{color: 'rgb(245,130,31)', fontSize:16, fontFamily: 'GothamRounded-Book'}}>selesai</Text>
                    </TouchableOpacity>
                  </View>
                  <ScrollView>
                    {kategoris}
                  </ScrollView>

                </View>
              </Modal>
              </View>
            </Modal>
            {this.filterModal()}
        </View>
    )
  }
}

const stylesCard = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    paddingVertical: 3,
    paddingLeft: 3,
    position: 'absolute',
    top: 100,
    right: 140
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
    width: 160,
    alignItems: 'flex-end',
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
  },
  text: {
    fontSize: 12,
    fontFamily: 'GothamRounded-book',
    color: 'rgb(40,40,40)'
  }
});

const stylesModalFilter = StyleSheet.create({
  menuModal: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
    backgroundColor: 'transparent',
    padding: 0,
    margin: 0,
  },
  menuModalContainer: {
    width: '80%',
    height: '100%',
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#FAFAFA',
  },
  menuModalContainerNext: {
    width: '80%',
    height: '100%',
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#FAFAFA',
  },
  safeArea: {
    width: '75%',
    height: '100%',
    backgroundColor: 'green',
  },
  menuModalItem: {
    color: '#FFFFFF',
    fontSize: 20,
    paddingTop: 5,
    paddingBottom: 5,
  }
});
