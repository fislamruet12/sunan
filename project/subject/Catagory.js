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
import Artist from '../../project/artist/Artist';


let { width, height } = Dimensions.get('window');

class Catagory extends React.Component {

  static navigationOptions = ({ navigation }) => {

    return {
      title: navigation.getParam('otherParam', "Artist Wise Naat's"),
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'red',
      },
      headerRight: (
        <MaterialCommunityIcons name="select-all" size={30}
          color="white"
          onPress={navigation.getParam('share')} style={{ marginRight: 5 }} />
      ),

    };
  };


  state = {
    backClickCount: 0
  };
  constructor(props) {

    super(props);
  }



  
  componentDidMount() {
      
    }
   
  render() {
    


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
              <Content>
                <View >
                  <LinearGradient
                    colors={['#ffdadd', '#fafafa', '#ffdadd']}

                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    locations={[0, 0.4, .9]}
                    style={styles.Container}
                  >
                    <Artist country={"Bangladeshi"} navigation={this.props.navigation}/>
                    <Artist country={"Indian"} navigation={this.props.navigation}/>
                    <Artist country={"Pakistani"} navigation={this.props.navigation}/>
                    
                    <AddMore />
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
    justifyContent:'center',alignItems:'center'
  }
});


export default (Catagory)