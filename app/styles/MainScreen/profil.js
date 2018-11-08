import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS == 'ios' ? 35 : 15
  },
  titleHeader: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 16,
    color: 'rgb(40,40,40)'
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  boxContent: {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  boxContentText: {
    justifyContent: 'center',
    width: '95%',
    borderBottomWidth: 0.5,
    borderColor: 'rgb(220,220,220)',
    paddingVertical: 15
  },
  textTitle: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 16,
    color: 'rgb(40,40,40)',
    marginBottom: 5
  },
  text: {
    fontFamily: 'GothamRounded-Book',
    fontSize: 12,
    color: 'rgb(140,140,140)'
  },
  ajakTitleText: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 12,
    color: '#FFFFFF',
    marginBottom: 5
  },
  ajakText: {
    fontFamily: 'GothamRounded-Book',
    fontSize: 10,
    color: '#FFFFFF'
  },
  boxAjak: {
    padding: 15,
    width: '100%',
    backgroundColor: 'rgb(22,184,178)',
    borderRadius: 5,
    marginTop: 30
  }
})
