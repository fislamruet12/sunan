import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { Switch } from 'native-base'

import LinearGradient from 'react-native-linear-gradient';
const { width } = Dimensions.get('window')

const Online = (props) => {

    return (
        <TouchableOpacity
            style={{ width: width - 30 }}
            onPress={() => props.navigation.navigate('Play',{
                tracklist: props.tracklist,
                playid:props.trackid,
                title:props.lyric.title,
                name:props.name
            })}
        >
            <LinearGradient

                // colors={['#ffdadd', '#faf3f5', '#ffffff']}
                colors={['#ffdadd', '#fafafa', '#ffdadd']}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                locations={[.2, 0.4, .9]}
                style={styles.borderbox}
            >

                <View>
                    <MaterialCommunityIcons name="music" color="red" size={55} />
                </View>
                <View style={{ width: width / 2 }}>
                    <Text style={styles.lowertext}>
                        online
                    </Text>

                    <Text style={{ ...styles.lowertext, color: 'red', }}>
                        {props.lyric.title}
                    </Text>

                </View>
                <View>
                    <MaterialCommunityIcons name="arrow-right" size={20} />
                </View>


            </LinearGradient>

        </TouchableOpacity>



    )
}
export default Online

const styles = StyleSheet.create({
    borderbox: {
        flexDirection: 'row',
        padding: 5,
        borderColor: '#d8d8d8',
        borderWidth: .7,
        borderRadius: 20,
        justifyContent: 'space-between',
        alignItems: 'center',

        marginVertical: 5,
    },
    uppertext: {
        fontWeight: 'bold',
        fontSize: 16,
        color: "#464149"
    },
    lowertext: {
        fontWeight: 'bold',
        fontSize: 12,
        color: "green"
    }
});