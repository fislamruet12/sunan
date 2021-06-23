import firebase from 'firebase'
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


class NewDatabase {
    constructor(props) {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig)
        }
    }
    

    gettopic = (userdata) => {
        return new Promise((resolve, reject) => {

            firebase.database().ref('/Test/DetailF/' + userdata.key).limitToFirst(5).once('value', data => {
                // console.log(data.val())
                 if (data.exists() === false) {
                     resolve({
                         topic:null
                     })
                 } else {
                     resolve({
                        topic: data.toJSON()
                     })
                 }
             }
             )
        })

       
    }
    gettopicmore = (userdata) => {
        console.log(userdata.more)
        return new Promise((resolve, reject) => {
            firebase.database().ref('/Test/DetailF/' + userdata.key).orderByChild('start').startAt(parseInt(userdata.more) + 1).endAt(parseInt(userdata.more) + 5).once('value', data => {
               // console.log(data.val())
                if (data.exists() === true) {
                    resolve({
                        topic: data.toJSON()
                     })
                }
            })
        })
        
    }
    

}

export default NewDatabase

