import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

import LinearGradient from 'react-native-linear-gradient';
import { Icon, Slider } from 'react-native-elements'
import { WebView } from 'react-native-webview';

const {width}=Dimensions.get('window')
const Web = (props) => {

    const html=props.html
    console.log(html)
    return (



                <WebView
                    style={{ backgroundColor: '#000',borderRadius:10 }}
                    scalesPageToFit={false}
                    originWhitelist={['*']}
                    source={{ html }}
                />

    )
}
export default Web

