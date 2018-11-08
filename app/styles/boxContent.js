import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
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
})
