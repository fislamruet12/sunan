import React from 'react';
import { View, Text } from 'react-native'
import { isEmpty } from '../database/isEmpty'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


class HandleTheory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        //  console.log(this.props.data)

        const { data } = this.props
        return (
            Object.keys(data).map(index => (

                Object.keys(data[index]).map(kindex => (

                    //  console.log(kindex)
                    kindex === 'paragraph' ?

                        Object.keys(data[index][kindex]).map(mindex => (
                            //  console.log(data[index][kindex][mindex])
                            < View
                                style={{
                                    marginHorizontal: 10,

                                }}
                                key={mindex}>
                                <Text style={{
                                    color: '#111',
                                    fontSize: 17,
                                    textAlign: 'justify',
                                    lineHeight: 30,
                                    marginBottom: 10
                                }}>  <MaterialCommunityIcons name="folder-open" color="red" size={25} /> {data[index][kindex][mindex].title}
                                </Text>
                                <Text style={{
                                    color: '#111',
                                    fontSize: 17,
                                    textAlign: 'justify',
                                    lineHeight: 30,
                                    marginBottom: 10
                                }} >  <MaterialCommunityIcons name="folder-open" color="red" size={25} /> {data[index][kindex][mindex].body}
                                </Text>
                            </View >
                        ))
                        :
                        Object.keys(data[index][kindex]).map(mindex => (
                            //  console.log(data[index][kindex][mindex])
                            < View
                                style={{ margin: 10 }}
                                key={mindex}>
                                <View>
                                    <Text style={
                                        {
                                            color: '#111',
                                            fontSize: 17,
                                            textAlign: 'justify',
                                            lineHeight: 30,
                                            fontWeight:'bold'
                                            
                                        }
                                    }>     {data[index][kindex][mindex].ans}: <Text style={
                                        {
                                            color: '#111',
                                            fontSize: 17,
                                            textAlign: 'justify',
                                            lineHeight: 30,
                                            fontWeight:'200'
                                            
                                        }
                                    }>
                                           {data[index][kindex][mindex].question} 
                                        </Text>
                                    </Text>
                                </View>
                                <View style={{alignItems:'flex-end'}}>
                                       <Text style={
                                        {
                                            color: '#ffab40',
                                            fontSize: 10,
                                            textAlign: 'justify',
                                            lineHeight: 20,
                                            fontWeight:'200'
                                            
                                        }}>[{data[index][kindex][mindex].note}]</Text>
                                </View>


                            </View >
                        ))


                ))

            ))

        );
    }
}

export default HandleTheory;