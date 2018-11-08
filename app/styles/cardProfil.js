import { StyleSheet, Dimensions, Platform } from 'react-native'

export default StyleSheet.create({
  cardContainer: {
    paddingTop: 22,
    paddingBottom: 35,
    paddingHorizontal: 15,
    width: '100%',
  },
  card: {
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 30,
    shadowColor: 'rgba(119, 117, 117, 0.8)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 5,
    shadowRadius: 5,
    shadowOpacity: 0.5
  },
  titleText: {
    fontFamily: 'GothamRounded-Book',
    fontSize: 12,
    color: 'rgb(140,140,140)',
    marginBottom: Platform.OS == 'ios' ? 5 : 2,
  },
  text: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 16,
    color: 'rgb(40,40,40)'
  },
  name: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 12,
    color: 'rgb(40,40,40)',
    marginBottom: 5,
    marginTop: 10
  },
  status: {
    fontFamily: 'GothamRounded-Book',
    fontSize: 10,
    color: 'rgb(140,140,140)'
  }
})
