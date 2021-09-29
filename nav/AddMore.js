import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'



import LinearGradient from 'react-native-linear-gradient';


const AddMore = (props) => {
    return (

        <LinearGradient
            colors={['#ffdadd', '#faf3f5', '#ffffff']}

            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            locations={[0, 0.4, .9]}
            style={styles.borderbox}
        >

            <View>
                <Text style={styles.uppertext}>
                  View More
              </Text>
                <Text style={styles.lowertext}>
                Other country Naat's
              </Text>
            </View>
            <View>
                <MaterialCommunityIcons name="arrow-down" size={15} color="gray" />
            </View>


        </LinearGradient>



    )
}
export default AddMore

const styles = StyleSheet.create({
    borderbox: {
        flexDirection: 'row',
        padding: 20,
        borderColor: 'red',
        borderWidth: .7,
        borderRadius: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical:5,
    },
    uppertext: {
        fontWeight: 'bold',
        fontSize: 16,
        color: "red"
    },
    lowertext: {
        fontWeight: 'bold',
        fontSize: 12,
        color: "#bab9be"
    }
});