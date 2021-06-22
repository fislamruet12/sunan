import React from 'react';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Roots from './nav/Root';

import Subject from './project/subject/Subject';
import Catagory from './project/subject/Catagory';
import Theory from './project/subject/Theory'
import {Root} from 'native-base';

import  Goppo from './project/goppo/Goppo'
//import Send from './project/goppo/Send'
//import Introduction from './project/goppo/Introduction'

export default function App() {
  return (
  
      <Root>
       
          <Appcontainer />
        
      </Root>
   
  );
}
const createChat = createStackNavigator(
  {
    Goppo: {screen: Goppo},
   // Send: {screen: Send},
    //Introduction: {screen: Introduction},
   
   
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#ff8099', // '#e8ebe9',
      },
      headerShown: false,
    },
  },
);
const AppSwitchNavigator = createStackNavigator(
  {
    Welcome: {screen: Roots},
    Subject: {screen: Subject},
    Catagory: {screen: Catagory},
    Theory: {screen: Theory},
    createChat: {screen: createChat},
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#ff8099', // '#e8ebe9',
      },
    },
  },
);
const createdemoswitch = createSwitchNavigator({
  createLogin: {screen: AppSwitchNavigator},
});

const Appcontainer = createAppContainer(createdemoswitch);
