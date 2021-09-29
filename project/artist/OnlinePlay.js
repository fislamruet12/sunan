import React ,{useEffect}from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

import LinearGradient from 'react-native-linear-gradient';
import { Icon, Slider } from 'react-native-elements'


const OnlinePlay = (props) => {

    const [tick,settick]=React.useState(0)
        
    return (

        <View >
            <View style={styles.info}>
                <Text style={styles.artist}>Huda Sister</Text>
                <Text style={styles.song}>Rabbi jalli illallah</Text>
            </View>

            <View style={{ alignItems: 'stretch', justifyContent: 'center' }}>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:10}}>
                    <View>
                     <Text>{tick.toFixed(2)}/4.7</Text>
                    </View>
                    <View>
                    <Text>4.7</Text>
                    </View>
                </View>
                <Slider
                    value={tick}
                    maximumValue={4.7}
                    minimumValue={0}
                    step={1}
                    onValueChange={(value) => console.log(value)}
                    trackStyle={{ height: 10, backgroundColor: 'transparent' }}
                    thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}

                />
            </View>

            <LinearGradient

                // colors={['#ffdadd', '#faf3f5', '#ffffff']}
                colors={['#ffdadd', '#fafafa', '#ffdadd']}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                locations={[.2, 0.4, .9]}
                style={styles.borderbox}
            >

                <View style={styles.button}>
                    <AntDesign name="stepbackward" color="red" size={30} />
                </View>
                <View style={{ ...styles.button, marginHorizontal: 80 }}>
                    <AntDesign name="rightcircleo" color="red" size={30} />
                    <AntDesign name="pausecircleo" color="red" size={30} />

                </View>
                <View style={styles.button}>
                    <AntDesign name="stepforward" color="red" size={30} />
                </View>


            </LinearGradient>
            <View style={{ ...styles.button, marginTop: 5 }}>
                <View>
                    <AntDesign name="up" color="green" size={20} />
                </View>
                <View>
                    <Text>Lyrics</Text>
                </View>
            </View>


        </View>


    )
}
export default OnlinePlay

const styles = StyleSheet.create({
    borderbox: {
        flexDirection: 'row',
        padding: 15,
        borderColor: '#d8d8d8',
        borderWidth: .7,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        marginVertical: 15,
    },
    uppertext: {
        fontWeight: 'bold',
        fontSize: 16,
        color: "#464149"
    },
    lowertext: {
        fontWeight: 'bold',
        fontSize: 12,
        color: "#bab9be"
    },
    info: {
        justifyContent: "center",
        alignItems: 'center',
        padding: 10,
        marginBottom: 20
    },

    artist: {
        fontSize: 16,
        color: "#111",
        fontWeight: 'bold'
    },
    song: {
        fontSize: 10,
        color: "#111",
        fontWeight: '200'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});