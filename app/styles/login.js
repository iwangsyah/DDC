import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  boxContent: {
    borderBottomWidth: 0.5,
    borderColor: 'rgb(220,220,220)',
    marginTop: 30
  },
  masukText: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 14,
    color: '#FFFFFF',
    marginBottom: 5
  },
  boxMasuk: {
    alignItems: 'center',
    padding: 13,
    width: '100%',
    backgroundColor: 'rgb(22,184,178)',
    borderRadius: 5,
    marginVertical: 20
  },
  masukFBText: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 14,
    color: 'rgb(59,89,152)',
    marginBottom: 5
  },
  boxMasukFB: {
    alignItems: 'center',
    padding: 13,
    width: '100%',
    borderWidth: 1,
    borderColor: 'rgb(59,89,152)',
    borderRadius: 5,
    marginTop: 20
  },
  textInput: {
    height: 30,
    paddingBottom: 4,
    paddingLeft: 0,
    fontFamily: 'GothamRounded-Book',
    fontSize: 16,
    color: 'rgb(40,40,40)',
  },
  textPlacehoder: {
    fontFamily: 'GothamRounded-Book',
    fontSize: 10,
    color: 'rgb(140,140,140)'
  },
  textRight: {
    justifyContent: 'flex-end',
    fontFamily: 'GothamRounded-Book',
    fontSize: 16,
    color: 'rgb(22,184,178)'
  },
  lupaPassword: {
    alignSelf: 'flex-end',
    color: 'rgb(22,184,178)',
    marginTop:20
  }
})
