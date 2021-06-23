import React from 'react';
import Test from '../database/Database';
import {View,Text} from 'react-native'
class Topiceye extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            eye:0
         };
    }
    componentDidMount(){
        const ob=new Test()
        var promise= ob.topiceyeView({
             index1:this.props.index1,
             index2:this.props.index2
      
         })
         promise.then(dt=>{
            console.log(dt.data)
            this.setState({
                eye:dt.data
            })
         })
    }
    render() {
        return (
            <View style={{justifyContent:"center",alignItems:"center",marginLeft:10}}>
                <Text>{this.state.eye}</Text>
            </View>
        );
    }
}

export default Topiceye