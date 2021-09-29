import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'



import LinearGradient from 'react-native-linear-gradient';

const {width}=Dimensions.get('window')
const Person = (props) => {

    const closeandgo = () => {
        props.person({visible:false,person:null})
        props.navigation.navigate('Subject',{
             gender:props.gender,
             artist:props.artist,
             country:props.country.name,
             lyric:props.lyric
        })
    }
   // console.log(props.artist)
    return (
        <TouchableOpacity
            onPress={() => closeandgo()}
        >
            <LinearGradient

                // colors={['#ffdadd', '#faf3f5', '#ffffff']}
                colors={['#ffdadd', '#fafafa', '#ffdadd']}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                locations={[.2, 0.4, .9]}
                style={styles.borderbox}
            >


                <View style={{ alignItems: 'flex-start' }}>
                    <Text style={styles.uppertext}>
                        {props.country.name}
                    </Text>
                    <Text style={styles.lowertext}>
                        <Text style={styles.person}>{props.gender}</Text> Naat Artist - {props.single}
                    </Text>
                </View>
                <View>
                    <MaterialCommunityIcons name="arrow-right" size={15} color="gray" />
                </View>


            </LinearGradient>

        </TouchableOpacity>



    )
}
export default Person

const styles = StyleSheet.create({
    borderbox: {
        flexDirection: 'row',
        padding: 15,
        borderColor: '#d8d8d8',
        borderWidth: .7,
        borderRadius: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width/1.5,
        margin: 5,
    },
    uppertext: {
        fontWeight: 'bold',
        fontSize: 16,
        color: "red"
    },
    lowertext: {
        fontWeight: 'bold',
        fontSize: 12,
        color: "#bab9be",
        marginLeft:15
        
    },
    person: {
        fontWeight: 'bold',
        color: 'green'
    }
});