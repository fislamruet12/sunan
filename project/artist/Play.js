import React from 'react';
import { View, StyleSheet, SafeAreaView} from 'react-native';

import Feather from 'react-native-vector-icons/Feather'



import LinearGradient from 'react-native-linear-gradient';
import OfflinePlay from './OfflinePlay';




class Play extends React.Component {

    static navigationOptions = ({ navigation }) => {

        return {
            title: navigation.getParam('otherParam', "Tap to Play"),
            headerTintColor: 'red',
            headerStyle: {
                backgroundColor:  '#fda8c9',
            },
           
        };
    };
    render() {

       const title=this.props.navigation.getParam('title')
       const tracklist=this.props.navigation.getParam('tracklist')
       const playid=this.props.navigation.getParam('playid')
       const name=this.props.navigation.getParam('name')
        return (
            <LinearGradient
                colors={['#ffdadd', '#faf3f5', '#fafafa']}

                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                locations={[0, 0.4, .9]}
                style={styles.Container}
            >
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={styles.header}>
                        <LinearGradient
                            colors={['#ffacb4', '#faf3f5', '#ffacb4']}

                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                            locations={[0, 0.4, .9]}
                            style={styles.headerStyle}
                        >
                            <Feather name="music" size={100} style={{color:'red',fontWeight:'bold'}}/>
                        </LinearGradient>
                    </View>
                    <View style={styles.footer}>
                       
                        <OfflinePlay
                        title={title}
                        tracklist={tracklist}
                        playid={playid}
                        name={name}
                        />
                    </View>


                </SafeAreaView>
            </LinearGradient >
        );
    }
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center', alignItems: 'center'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:40,

    },
    footer: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerStyle:{
        borderRadius:60,
        height:150,
        width:150,
        justifyContent:'center',
        alignItems:'center'
    }
    
});


export default (Play)