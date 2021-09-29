import firebase from 'firebase'
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

