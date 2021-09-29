import React from 'react';
import { View, Text, StyleSheet, BackHandler, Animated, Dimensions, ScrollView, RefreshControl, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { AsyncStorage } from 'react-native'
import { Container, Content } from "native-base";

import NetInfo from "@react-native-community/netinfo"
import SplashScreen from 'react-native-splash-screen'

import ContentLoader from 'react-native-content-loader'
import { Rect } from 'react-native-svg'

import Test from '../project/database/Database'
import LinearGradient from 'react-native-linear-gradient';
import Country from './Country';
import AddMore from './AddMore';
import { AnimatedModal } from 'react-native-modal-animated'
import Person from './Person';

let { width, height } = Dimensions.get('window');

class Roots extends React.Component {

  static navigationOptions = ({ navigation }) => {

    return {
      title: navigation.getParam('otherParam', "Country Wise Naat's"),
      headerTintColor: 'red',
      headerStyle: {
        backgroundColor: '#fda8c9',
      },
      headerRight: (
        <MaterialCommunityIcons name="select-all" size={30}
          color="red"
          onPress={navigation.getParam('share')} style={{ marginRight: 5 }} />
      ),

    };
  };


  state = {
    backClickCount: 0
  };
  constructor(props) {

    super(props);

    this.springValue = new Animated.Value(100);
    this.animatedValue = new Animated.Value(0)
    this.animatedXValue = new Animated.Value(-width)
    this.state = {
      refreshing: true,
      country: [],
      artist: [],
      lyric: [],
      persondata: null,
      visible: false
    }
    this.share = this.share.bind(this)
    this.person = this.person.bind(this)
    this.removeDatabase = this.removeDatabase.bind(this)
  }

  person = (val) => {
    this.setState({
      ...this.state,
      visible: val.visible,
      persondata: val.person
    })
  }

  share = () => {
    this.props.navigation.navigate('createChat')
  }

  componentDidMount() {
    this.props.navigation.setParams({ share: this.share });
    global.top = this.props.navigation.state.routeName
    SplashScreen.hide()
    this._onRefresh()
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }
  handleBackPress = () => {
    this.setState({ visible: false });
    if (global.top === this.props.navigation.state.routeName) {
      this.state.backClickCount == 1 ? BackHandler.exitApp() : this._spring();
      return true
    } else
      return false
  }

  removeDatabase = async () => {
    try {
      let keys = ['country', 'artist', 'lyric', 'hit'];
      await AsyncStorage.multiRemove(keys, (err) => {
        // keys k1 & k2 removed, if they existed
        // do most stuff after removal (if you want)
        if (err) {
          console.log(err.message)
        } else {
          console.log('delete')
        }
      });
    } catch (error) {

    }
  }

  componentWillUnmount() {
    this.removeDatabase()
    this.backHandler.remove()
  }

  _spring() {
    this.setState({ backClickCount: 1 }, () => {
      Animated.sequence([
        Animated.spring(
          this.springValue,
          {
            toValue: -.15 * height,
            friction: 5,
            duration: 500,
            useNativeDriver: true,
          }
        ),
        Animated.timing(
          this.springValue,
          {
            toValue: 100,
            duration: 500,
            useNativeDriver: true,
          }
        ),

      ]).start(() => {
        this.setState({ backClickCount: 0 });
      });
    });

  }
  _onRefresh = () => {

    this.getwhole()
  }

  getwhole = async () => {
    try {
      await AsyncStorage.multiGet(['country', 'artist', 'lyric', 'hit'], (err, stores) => {

        var x = []
        stores.map((result, i, store) => {
          let value = store[i][1];
          x.push(JSON.parse(value))
        });
        // console.log("enter"+x[3])
        if (x[3] === null) {

          const ob = new Test()
          var promise = ob.getsetnet()
          promise.then(dt => {
            this.setState({
              country: dt.country,
              artist: dt.artist,
              lyric: dt.lyric,
              refreshing: false
            })

          })
        } else {
          this.setState({
            country: x[0],
            artist: x[1],
            lyric: x[2],
            refreshing: false
          })

        }
      });
    } catch (e) {
      // error reading value
      console.log(e)

    }
  }


  render() {
    let animation = this.animatedValue.interpolate({
      inputRange: [0, .3, 1],
      outputRange: [height + 170, height, height - 100]
    })

    //console.log(this.state.persondata)

    const { country } = this.state
    return (
      <LinearGradient
        colors={['#fae3e6', '#fafafa', '#fae3e6']}

        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        locations={[0, 0.4, .9]}
        style={styles.Container}
      >
        <SafeAreaView style={{ flex: 1 }}>
          {
            this.state.refreshing === true ?
              <View style={{ margin: 20 }}>
                <ContentLoader primaryColor="#e8f7ff"
                  secondaryColor="#4dadf7"
                  duration={3500}
                  height={440}>
                  <Rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
                  <Rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
                  <Rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
                  <Rect x="0" y="80" rx="3" ry="3" width="350" height="10" />
                  <Rect x="0" y="100" rx="3" ry="3" width="200" height="10" />
                  <Rect x="0" y="120" rx="3" ry="3" width="360" height="10" />
                  <Rect x="10" y="140" rx="3" ry="3" width="360" height="10" />
                  <Rect x="0" y="160" rx="3" ry="3" width="360" height="10" />
                  <Rect x="10" y="180" rx="3" ry="3" width="360" height="10" />
                  <Rect x="0" y="200" rx="3" ry="3" width="360" height="10" />
                  <Rect x="0" y="220" rx="3" ry="3" width="360" height="10" />
                </ContentLoader>

              </View> :
              <Content
              showsHorizontalScrollIndicator={false}
              >
                <View >
                  <LinearGradient
                    colors={['#fae3e6', '#fafafa', '#fae3e6']}

                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    locations={[0, 0.4, .9]}
                    style={styles.Container}
                  >
                    {
                      Object.keys(country).map(ind => (

                        <Country country={country[ind]} navigation={this.props.navigation} person={this.person} single={ind} />
                      ))
                    }


                    <AddMore />
                  </LinearGradient>


                </View>
              </Content>



          }


          <View style={{ justifyContent: "center", alignItems: "center", flex: .001 }}>
            <Animated.View style={[styles.animatedView, { transform: [{ translateY: this.springValue }] }]}>
              <Text style={{ backgroundColor: '#000', color: 'white', padding: 10, borderRadius: 10 }}>
                <Icon name="ios-power" size={20} color='red' /> press back again to exit</Text>
            </Animated.View>
          </View>

          <Animated.View style={{ transform: [{ translateY: animation }], height: 70, backgroundColor: this.state.toastColor, position: 'absolute', left: 0, top: 0, right: 0, justifyContent: 'center' }}>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Text style={{ color: 'white', fontSize: 16, fontWeight: '100' }}>
                {this.state.message}
              </Text>
            </View>
          </Animated.View>

          <AnimatedModal
            visible={this.state.visible}

            animationType="horizontal"
            duration={600}
          >
            {
              this.state.persondata != null ?
                <LinearGradient
                  colors={['#ffdadd', '#faf3f5', '#fafafa']}

                  start={{ x: 0, y: 0.5 }}
                  end={{ x: 1, y: 0.5 }}
                  locations={[0, 0.4, .9]}
                  style={styles.modalCard}
                >
                  {
                    country[this.state.persondata].male > 0 ?
                      <Person
                        country={country[this.state.persondata]}
                        gender={"Male"} navigation={this.props.navigation}
                        person={this.person}
                        single={country[this.state.persondata].male}
                        artist={this.state.artist["Male"][this.state.persondata]}
                        lyric={this.state.lyric}
                        ind={this.state.persondata} /> : null
                  }

                  {
                    country[this.state.persondata].female > 0 ?
                      <Person country={country[this.state.persondata]} gender={"Female"} navigation={this.props.navigation} person={this.person} single={country[this.state.persondata].female} artist={this.state.artist["Female"][this.state.persondata]} lyric={this.state.lyric} ind={this.state.persondata} />

                      : null

                  }
                  {
                    country[this.state.persondata].dual > 0 ?
                      <Person country={country[this.state.persondata]} gender={"Dual"} navigation={this.props.navigation} person={this.person} single={country[this.state.persondata].dual} artist={this.state.artist["Dual"][this.state.persondata]} lyric={this.state.lyric} ind={this.state.persondata} />
                      : null
                  }
                </LinearGradient> : null
            }
          </AnimatedModal>



        </SafeAreaView>
      </LinearGradient >
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center', alignItems: 'center'
  },
  modalCard: {
    width: '90%',
    height: '60%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',

  }
});


export default (Roots)