import React, { Component } from "react";
import { View, Image, Text } from 'react-native'
import Routs from './routs'
import { connect } from 'react-redux';
import SessionStore from '../storage/SessionStore'
// import Orientation from 'react-native-orientation'
import styles from '../styles/screens/splash'
import { SafeAreaView } from 'react-navigation';
import { registerToken, setSession } from '../actions'
console.disableYellowBox = true;

class Navigate extends Component {
    constructor() {
        super();
        this.state = {
            // orientation: Orientation.getInitialOrientation(),
            isReady: true, //false,
            isLogin: false,
            isloading: true,
            token: "",
            tokenCopyFeedback: ""
        };
    }
    async componentDidMount() {
        await this._loadInitialState().done();
    }

    componentWillReceiveProps(newPorps) {
        if (newPorps.accessToken && newPorps.accessToken !== this.props.accessToken) {
          this.setState({isLogin: true});
        }
    }

    async _loadInitialState() {
        let { setSession } = this.props
        // this.listener = this.orientationDidChange.bind(this)
        // Orientation.addOrientationListener(this.listener)
        if (this.props.accessToken && this.props.userId) {
            await registerToken(this.props.accessToken, this.props.userId)
            await this.setState({ isReady: true, isLogin: true, isloading: false });
        } else {
            console.log('get access token')
            await SessionStore.getSession((session) => {
                // this.setState({ accessTokenRequested: true })
                if (session && session.accessToken && session.userId) {
                  registerToken(session.accessToken, session.userId)
                  setSession(session)
                  createPersistor(session.userId, () => {
                    this.setState({ isReady: true, isLogin: true, isloading: false });
                })
                }
                else {
                    console.log("in else condition")
                    this.setState({ isReady: true, isloading: false })
                }
            })
        }
    }

    // orientationDidChange(orientation) {
    //     this.setState({ orientation: orientation })
    // }

    render() {
        // alert(this.props.userId)
        let content = (
          <View style={styles.contentContainer}>
            <View style={styles.logoContainer}>
              <Image
                source={require('../assets/splash/logo.png')}
                style={styles.logo} />
            </View>
            <View style={styles.appNameContainer}>
              <Text style={styles.appName}>PROPERTY MAINTENANCE</Text>
            </View>
          </View>
        )

        if (this.state.isloading) {
            console.log("true")
            return <View style={styles.splashScreen}>
                <Image
                    source={require('../assets/splash/background.png')}
                    style={styles.backgroundImage}
                />
                    {content}
            </View>
        } else {
            return (
              <SafeAreaView style={styles.safeArea}>
                <Routs isLogin={this.state.isLogin} />
              </SafeAreaView>
            )
        }
    }
}

let mapStateToProps = (state) => {
    return {
        accessToken: state.session.accessToken,
        userId: state.session.userId,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        login: (username, password) => {
          dispatch(loginAndRegisterToken(username, password))
        },
        // deviceSetOrientations: (orientation) => {
        //   dispatch(deviceSetOrientation(orientation))
        // },
        setSession: (session) => {
          dispatch(setSession(session))
        }
    }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps,
) (Navigate)
