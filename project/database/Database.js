import firebase from 'firebase'
import { AsyncStorage } from 'react-native'

const firebaseConfig = {
    apiKey: "AIzaSyBXCbbEa517kxAgueu9rZOM4wRFWN_6PvY",
    authDomain: "jamius-sunan.firebaseapp.com",
    databaseURL: "https://jamius-sunan-default-rtdb.firebaseio.com",
    projectId: "jamius-sunan",
    storageBucket: "jamius-sunan.appspot.com",
    messagingSenderId: "697646150183",
    appId: "1:697646150183:web:2c36502a874b361f4bd402",
    measurementId: "G-BCXN5XWFG8"
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
        //  console.log("topic")

        return new Promise((resolve, reject) => {
            firebase.database().ref('/Test/Subject/').once('value', sub => {

                firebase.database().ref('/Test/Catagory/').once('value', catagory => {
                    //        console.log(catagory.val())
                    firebase.database().ref('/Test/Topic/').once('value', topic => {

                        storeData('subject', sub.val())
                        storeData('catagory', catagory.val())
                        storeData('topic', topic.val())
                        // console.log(sub.val())
                        if (sub.val() != null) {
                            resolve({
                                chapter: sub.val(),
                                lesson: catagory.val(),
                                detail: topic.val()
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

