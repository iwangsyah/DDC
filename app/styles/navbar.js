import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
  containerNavbar: {
    justifyContent: 'center',
    height: Platform.OS == 'ios' ? 75 : 55,
    paddingTop: Platform.OS == 'ios' ? 20 : 0,
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
    shadowColor: 'rgba(119, 117, 117, 0.8)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 5,
    shadowRadius: 5,
    shadowOpacity: 0.5
  },
  textNavbar: {
    fontFamily: 'GothamRounded-Book',
    fontSize: 16,
    marginLeft: 24,
    color: 'rgb(40,40,40)'
  },
})
