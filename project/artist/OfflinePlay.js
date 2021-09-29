import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

import Modal from 'react-native-modalbox';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import LinearGradient from 'react-native-linear-gradient';
import { Icon, Slider } from 'react-native-elements'
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window')
const OfflinePlay = (props) => {

    const [track, settrack] = React.useState(0)
    const [trackId, settrackId] = React.useState(null)
    const [keys, setkeys] = React.useState([])
    const [visible, setvisible] = React.useState(false)
    const playlist = [
        "https://firebasestorage.googleapis.com/v0/b/hscfor2day.appspot.com/o/audio%2FEvery.mp3?alt=media&token=7727ae4f-35fd-4410-a00c-2d3ab3eed1e1",
    ]
    const setNextNaat=(index)=>{
     setvisible(false)
     settrackId(index)
    }
    const changenext = () => {
        // var ind=null
        for (var i in keys) {

            if (keys[i] === trackId) {
                if (parseInt(i) === keys.length - 1) {
                    settrackId(keys[0])
                } else {
                    settrackId(keys[parseInt(i) + 1])
                }
                return
            }
        }
    }
    const changePrev = () => {
        for (var i in keys) {
            if (keys[i] === trackId) {
                if (parseInt(i) === 0) {
                    settrackId(keys[keys.length - 1])
                } else {
                    settrackId(keys[parseInt(i) - 1])
                }
                return
            }
        }
    }
    useEffect(() => {
        settrackId(props.playid)

    }, [])

    useEffect(() => {

        setkeys(Object.keys(props.tracklist))

    }, [])


    var tid = trackId != null ? props.tracklist[trackId].url : playlist[track]
    const html = `
      <html>
      <body>
      <div>
      <audio controls autoplay>
      <source src="`+ tid + `"/>
        </audio>
      </div>
      </body>
      </html>
    `;
   
    return (

        <View >
            <View style={styles.info}>
                <Text style={styles.artist}>{props.name}</Text>
                <Text style={styles.song}>{trackId != null ? props.tracklist[trackId].title : ''}</Text>
            </View>



            <View style={{ flex: 1, margin: 15, width: width - 30 }}>

                {
                    trackId != null ?
                        <WebView
                            style={{ backgroundColor: '#000', borderRadius: 10 }}
                            scalesPageToFit={false}
                            originWhitelist={['*']}
                            source={{ html }}
                        /> : null
                }
            </View>
            <LinearGradient

                // colors={['#ffdadd', '#faf3f5', '#ffffff']}
                colors={['#ffdadd', '#fafafa', '#ffdadd']}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                locations={[.2, 0.4, .9]}
                style={styles.borderbox}
            >

                <TouchableOpacity onPress={() => changePrev()} style={styles.button}>
                    <AntDesign name="stepbackward" color="red" size={30} />
                </TouchableOpacity>
                <View style={{ ...styles.button, marginHorizontal: 80 }}>

                </View>
                <TouchableOpacity onPress={() => changenext()} style={styles.button}>
                    <AntDesign name="stepforward" color="red" size={30} />
                </TouchableOpacity>


            </LinearGradient>
            <TouchableOpacity
                onPress={() => setvisible(true)}
                style={{ ...styles.button, flex: 1, marginBottom: 20 }}>
                <View>
                    <AntDesign name="up" color="green" size={20} />
                </View>
                <View>
                    <Text>Lyrics</Text>
                </View>
            </TouchableOpacity>
            <Modal
                isOpen={visible}
                // backButtonClose={true}
                swipeToClose={false}
            >
                <LinearGradient

                    // colors={['#ffdadd', '#faf3f5', '#ffffff']}
                    colors={['#ffdadd', '#fafafa', '#ffdadd']}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    locations={[.2, 0.4, .9]}
                    style={styles.modal}
                >
                   <TouchableOpacity onPress={()=>setvisible(false)}>

                       <MaterialCommunityIcons name="chevron-down" size={40}/>
                   </TouchableOpacity>
                    <ScrollView
                    showsVerticalScrollIndicator={false}
                    >
                        {
                            Object.keys(props.tracklist).map(index => (
                                <TouchableOpacity
                                 key={index}
                                onPress={()=>setNextNaat(index)}>
                                    <LinearGradient

                                        // colors={['#ffdadd', '#faf3f5', '#ffffff']}
                                        colors={['#ffdadd', '#fafafa', '#ffdadd']}
                                        start={{ x: 0, y: 0.5 }}
                                        end={{ x: 1, y: 0.5 }}
                                        locations={[.2, 0.4, .9]}
                                        style={styles.single}

                                    >

                                        <View>
                                            <MaterialCommunityIcons name="music" color="red" size={55} />
                                        </View>
                                        <View style={{ width: width / 2 }}>
                                            <Text style={styles.lowertext}>
                                                online
                                          </Text>

                                            <Text style={{ ...styles.lowertext, color: 'red', }}>
                                                {props.tracklist[index].title}
                                            </Text>

                                        </View>
                                        <View>
                                            <MaterialCommunityIcons name="arrow-right" size={20} />
                                        </View>


                                    </LinearGradient>


                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                </LinearGradient>
            </Modal>

        </View>


    )
}
export default OfflinePlay

const styles = StyleSheet.create({
    borderbox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 20,
        padding: 20,
        borderRadius: 20


    },
    single: {
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
        color: "#bab9be"
    },
    info: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        padding: 20,
        marginHorizontal: 10,

    },

    artist: {
        fontSize: 18,
        color: "#111",
        fontWeight: 'bold'
    },
    song: {
        fontSize: 13,
        color: "red",
        fontWeight: '200'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});