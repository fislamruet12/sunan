import React from 'react';
import { View, StyleSheet, Dimensions, SafeAreaView, Image, Text, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Content } from "native-base";


import ContentLoader from 'react-native-content-loader'
import { Rect } from 'react-native-svg'

import LinearGradient from 'react-native-linear-gradient';

import Online from '../artist/Online'

class ArtistNaat extends React.Component {

    static navigationOptions = ({ navigation }) => {

        return {
            title: navigation.getParam('otherParam', ""+navigation.getParam('name')),
            headerTintColor: 'red',
            headerStyle: {
                backgroundColor:  '#fda8c9'
            },
            

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

    const lyric=this.props.navigation.getParam('lyric')

        return (
            <LinearGradient
                colors={['#faf3f5', '#ffdadd', '#faf3f5',]}

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
                           
                                <View style={styles.Container}>
                                    <View style={styles.Image}>
                                       <View>
                                       <Image
                                            style={{ width: 150, height: 150, borderRadius: 10 }}
                                            source={{
                                                uri: this.props.navigation.getParam('url') ,
                                            }}
                                        />
                                       </View>
                                       <View>
                                       <MaterialCommunityIcons name="medal" size={50} color="red"/>
                                       </View>

                                    </View>
                                    <View style={styles.Lyric}>
                                        <ScrollView  showsVerticalScrollIndicator={false}>
                                            {
                                                Object.keys(lyric).map(ind=>(
                                                    <Online 
                                                    key={ind}
                                                    lyric={lyric[ind]}
                                                    tracklist={lyric}
                                                    trackid={ind}
                                                    name={this.props.navigation.getParam('name')}
                                                    navigation={this.props.navigation} />
                                                ))

                                            }
                                        </ScrollView>

                                    </View>

                                </View>
                           



                    }


                </SafeAreaView>
            </LinearGradient >
        );
    }
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
       // 

    },
    Image: {
        flex: 6,
        flexDirection:'row',
        padding:5,
        marginVertical:5,
        alignItems:'center',
        justifyContent:'space-between',
        marginHorizontal:60

    },
    Lyric: {
        flex: 16,
        justifyContent: 'center', alignItems: 'center',
    }

});


export default (ArtistNaat)