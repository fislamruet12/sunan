import firebase from 'firebase'
import { AsyncStorage } from 'react-native'

const firebaseConfig = {
    apiKey: "AIzaSyBT53spWj_dsqMkvN7Zf78Tkpzctl7GsLw",
    authDomain: "hscfor2day.firebaseapp.com",
    databaseURL: "https://hscfor2day.firebaseio.com",
    projectId: "hscfor2day",
    storageBucket: "hscfor2day.appspot.com",
    messagingSenderId: "618664024109",
    appId: "1:618664024109:web:581372d536bd1cf79080a4",
    measurementId: "G-F7G79VT0BB"
  };


const storeData = async (store, pp) => {
    try {

        await AsyncStorage.setItem(store, JSON.stringify(pp))
        await AsyncStorage.setItem('hit', '1')
        console.log('data is stored')
    } catch (e) {
        // saving error
        console.log('error')
        // await AsyncStorage.removeItem(today)
    }
}

class Test {
    constructor(props) {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig)
        }
    }
    getsetnet = (userdata) => {
          console.log("topic")

        return new Promise((resolve, reject) => {
            firebase.database().ref('/Naat/Country/').once('value', sub => {

                firebase.database().ref('/Naat/Artist/').once('value', catagory => {
                    //        console.log(catagory.val())
                    firebase.database().ref('/Naat/Lyric/').once('value', topic => {

                        storeData('country', sub.val())
                        storeData('artist', catagory.val())
                        storeData('lyric', topic.val())
                        // console.log(sub.val())
                        if (sub.val() != null) {
                            resolve({
                                country: sub.val(),
                                artist: catagory.val(),
                                lyric: topic.val()
                            })
                        }
                    })
                })
            })

        })

    }

    catagoryeyeView = (userdata) => {
      
        return new Promise((resolve, reject) => {
            firebase.database().ref('Test/Catagory/').child(userdata.index1).child(userdata.index2).once("value", dt => {
                // console.log(dt.val())
                if (dt.val() != null) {
                    resolve({
                        data: dt.val().end - dt.val().start
                    })
                }
            })
        })

    }
    catagoryeyeViewupdate = (userdata) => {
       
        var Ref = firebase.database().ref('Test/Catagory/').child(userdata.index1).child(userdata.index2).child('end')

        Ref.transaction(function (end) {

            return (end || 0) + 1
        });


    }

    topiceyeView = (userdata) => {
       
        return new Promise((resolve, reject) => {
            firebase.database().ref('Test/Topic/').child(userdata.index1).child(userdata.index2).once("value", dt => {
                // console.log(dt.val())
                if (dt.val() != null) {
                    resolve({
                        data: dt.val().end - dt.val().start
                    })
                }
            })
        })

    }
    topiceyeViewupdate = (userdata) => {
      

        var Ref = firebase.database().ref('Test/Topic/').child(userdata.index1).child(userdata.index2).child('end')

        Ref.transaction(function (end) {

            return (end || 0) + 1
        });


    }
    share=()=>{
        return new Promise((resolve, reject) => {
            firebase.database().ref("Test/share/").once('value',dt=>{
                const data=dt.val()
                if(data===null){
                    resolve({
                        data:null
                    })
                }else{
                    resolve({
                        data:data
                    })
                }
            })
        })

    }
}

export default Test

