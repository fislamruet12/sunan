
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

import Entypo from 'react-native-vector-icons/Entypo';
import firebase from 'firebase'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'



export const Quoate = (obj) => {

    var x = ["সর্বদা সত্য কথা বলার অভ্যাস করুন",
        "বাবা মায়ের খেদমত করার মাধ্যমে জান্নাত হাসিল করুন",
        "অহেতুক কথা থেকে বিরত থাকুন",
        "প্রত্যেকদিন ভালো কিছু করার চেষ্টা করুন",
        "বাবা-মাকে সবার আগে সালাম করুন",
        "পাঁচ ওয়াক্ত নামাজ জামাতের সাথে পড়ার অভ্যাস করুন",
        "আল্লাহ তায়ালার পবিত্র কোরআন পড়ার অভ্যাস করুন",
        "গুনাহ থেকে দূরে থাকার অভ্যাস করুন",
        "নিজেকে সব সময় পরিচ্ছন্ন ও পরিপাটি রাখার অভ্যাস করুন",
        "আল্লাহপাক অসন্তুষ্ট হবেন এরকম কাজ থেকে সবসময় দূরে থাকার অভ্যাস করুন",
        "অন্যকে কষ্ট দেয়া থেকে বিরত থাকার অভ্যাস করুন",
        "গরিব মিসকিন ও হতদরিদ্রদের সাহায্য করার অভ্যাস গড়ে তুলুন",
        "বাবা-মা বা স্ত্রীর কাজে সাহায্য করা অভ্যাস গড়ে তুলুন",
        "সর্বদা সত্য কথা বলার অভ্যাস করুন",
        "আত্মীয়-স্বজনের সাথে ভালো ব্যবহার করার অভ্যাস গড়ে তুলুন",
        "বেশি নামাজ ও আল্লাহ তাআলার জিকির করার অভ্যাস গড়ে তুলুন"]

    var id = Math.floor((Math.random() * x.length));
    return x[id]
   
}
export const returnIcon = () => {
    var id = Math.floor((Math.random() * 2) + 1);
   
var color=["#78bb7b","#18391a","#ffab40","#e3ab9a","#a71c1c"]
var idc = Math.floor((Math.random() * color.length) + 1);
    if (id === 1) {
        return (<Entypo name="flower" color={color[idc]}  size={35}/>)
    } else {
        var flw = [
            "flower",
            "flower-poppy",
            "flower-tulip"]
            var ids = Math.floor((Math.random() * flw.length));
        return (
            
            <MaterialCommunityIcons name={flw[ids]} size={35} color={color[idc]}/>
        )
    }
}

export const  returnCataeyeView = (userdata) => {
  
  // promise.t
 return 0
}



