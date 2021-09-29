import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'



import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window')

const Country = (props) => {

    return (
        <TouchableOpacity
            onPress={() => props.person({visible:true,person:props.single})}
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
                    <MaterialCommunityIcons name="clock-fast" color="red" size={55} />
                </View>
                <View style={{ width: width / 3 }}>
                    <Text style={styles.uppertext}>
                        {props.country.name}
                    </Text>
                    <Text style={styles.lowertext}>
                        Male artist- {props.country.male}
                    </Text>
                    <Text style={styles.lowertext}>
                        Female artist- {props.country.female}
                    </Text>
                    <Text style={styles.lowertext}>
                        Dual artist- {props.country.dual}
                    </Text>
                </View>
                <View>
                    <MaterialCommunityIcons name="arrow-right" size={15} color="gray" />
                </View>


            </LinearGradient>

        </TouchableOpacity>



    )
}
export default Country

const styles = StyleSheet.create({
    borderbox: {
        flexDirection: 'row',
        padding: 15,
        borderColor: 'red',
        borderWidth: .7,
        borderRadius: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '75%',
        marginVertical: 5,
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