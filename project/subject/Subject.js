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

import LinearGradient from 'react-native-linear-gradient';

import Artist from '../artist/Artist';

let { width, height } = Dimensions.get('window');

class Subject extends React.Component {

  static navigationOptions = ({ navigation }) => {

    return {
      title: navigation.getParam('otherParam', navigation.getParam('country') + " " + navigation.getParam('gender') + " Artists"),
      headerTintColor: 'red',
      headerStyle: {
        backgroundColor: '#fda8c9',
      },


    };
  };

  constructor(props) {

    super(props);
    this.state = {
      refreshing: true
    }
  }


  componentWillUnmount() {
    global.top = "Welcome"
  }

  componentDidMount() {
    global.top = 'Jenoteno'
  }

  render() {


    var artist = this.props.navigation.getParam('artist')

    var lyric = this.props.navigation.getParam('lyric')

    return (
      <LinearGradient
        colors={['#ffdadd', '#faf3f5', '#fafafa']}

        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        locations={[0, 0.4, .9]}
        style={styles.Container}
      >
        <SafeAreaView style={{ flex: 1 }}>
          {
            this.state.refreshing === false ?
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
              <Content>
                <View >
                  <LinearGradient
                    colors={['#fae3e6', '#fae3e6', '#fafafa',]}

                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    locations={[0, 0.4, .9]}
                    style={styles.Container}
                  >
                    {
                      Object.keys(artist).map(ind => (

                        <Artist
                          country={artist[ind]}
                          lyric={lyric[ind]}
                          key={ind}
                          navigation={this.props.navigation}

                        />
                      ))
                    }



                  </LinearGradient>


                </View>
              </Content>



          }


        </SafeAreaView>
      </LinearGradient >
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center', alignItems: 'center'
  }
});


export default (Subject)