import React from 'react';
import { Linking, View, Text, StyleSheet, BackHandler, Animated, Dimensions, TouchableOpacity, ScrollView, RefreshControl, SafeAreaView, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { SimpleAnimation } from 'react-native-simple-animations';
import { AsyncStorage } from 'react-native'
import { Header, Left, Right, Body, Title, Toast } from "native-base";

import NetInfo from "@react-native-community/netinfo"
import SplashScreen from 'react-native-splash-screen'

import ContentLoader from 'react-native-content-loader'
import {Circle, Rect} from 'react-native-svg'

import Test from '../project/database/Database'

let { width, height } = Dimensions.get('window');

class Roots extends React.Component {

    static navigationOptions = ({ navigation }) => {

        return {
          title: navigation.getParam('otherParam', "জামী'উস সুনান বা সুন্নাত সমূহ"),
          headerTintColor:'white',
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

    this.springValue = new Animated.Value(100);
    this.animatedValue = new Animated.Value(0)
    this.animatedXValue = new Animated.Value(-width)
    this.state = {
      refreshing: false,
      chapter:[],
      lesson:[],
      detail:[],
    }
    this.share = this.share.bind(this)
  }



share=()=>{
  this.props.navigation.navigate('createChat')
}

  componentDidMount() {
    this.props.navigation.setParams({ share: this.share });
    global.top = this.props.navigation.state.routeName
    const unsubscribe = NetInfo.addEventListener(state => {
    });
    SplashScreen.hide()
    this._onRefresh()
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }
  handleBackPress = () => {

    if (global.top === this.props.navigation.state.routeName) {
      this.state.backClickCount == 1 ? BackHandler.exitApp() : this._spring();
      return true
    } else
      return false
  }

  componentWillUnmount() {
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
    this.setState({ refreshing: true });
    this.getwhole()
  }
  getwhole = async () => {
    try {
      AsyncStorage.multiGet(['subject', 'catagory', 'topic', 'hit'], (err, stores) => {
       
        var x = []
        stores.map((result, i, store) => {
          // get at each store's key/value so you can work with it
          let key = store[i][0];
          let value = store[i][1];
          x.push(JSON.parse(value))
        });
       
        if (x[3] === null) {
          const ob =new Test()
          var promise=ob.getsetnet()
          promise.then(dt=>{
              this.setState({
                chapter:dt.chapter,
                lesson:dt.lesson,
                detail:dt.detail,
              })
              this.setState({ refreshing: false });
          })
        } else {
            this.setState({
              chapter:x[0],
              lesson:x[1],
              detail:x[2],
            })
            this.setState({ refreshing: false });
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
    
    var icons=["leanpub","diamond"]
  
     const {chapter,lesson,detail} =this.state
    
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white', opacity: .9 }}>
        
        <ScrollView
          // showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        >
          {
            this.state.refreshing===true?
            <View style={{margin:20}}>
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
  
          </View>:
               <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: "center", alignItems: "center", marginBottom: 10, marginTop: 10 }}>



               {
                 Object.keys(chapter).map(index => (
                   <TouchableOpacity
                     style={{ width: '40%', height: 110, margin: 4, alignItems: "center", justifyContent: "center" }}
                     onPress={() => this.props.navigation.navigate('Subject', {
                       index:index,
                       lesson:lesson,
                       detail:detail, 
                     })}
                     key={index}
                   >
   
                     <Text style={{ borderRadius: 20 }}>
                       <FontAwesome name={icons[0]} size={60} color="red" />
                     </Text>
                     <SimpleAnimation delay={600} duration={1000} movementType="slide" fade staticType='bounce'>
   
                       <Text style={{ fontSize: 14, color: 'red', fontWeight: 'bold' }}>{chapter[index].name}</Text>
                     </SimpleAnimation>
   
                   </TouchableOpacity>
                 ))
               }
             </View>
   
   

          }
          
     



        </ScrollView>




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




      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({

  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: '#111111',
  }
});

export default (Roots)