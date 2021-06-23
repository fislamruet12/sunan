import React, { Component } from 'react';
import { Container, Content, Header, Left, Body, Title } from 'native-base'
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native'
import NewDatabase from '../database/NewDatabase'
import { isEmpty } from '../database/isEmpty'
import Icon from 'react-native-vector-icons/Ionicons'
import Test from '../database/Database'

import StyledText from 'react-native-styled-text';
import { thisExpression } from '@babel/types';
import HandleTheory from './HandleTheory';


var hi = 0
class Theory extends Component {
    static navigationOptions = ({ navigation }) => {
        return {

            headerShown: false,

        }
    }

    constructor(props) {
        super(props);
        this.state = {
            topic: [],
            high: 0,
            nai: null
        }
        this.more = this.more.bind(this)
        this.high = this.high.bind(this)

    }

    high = (a) => {
        hi = a
      //  console.log('hi ' + hi)
       
    }
    isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
        return layoutMeasurement.height + contentOffset.y >= contentSize.height - 1;
    };

    componentWillUnmount() {

    }
    componentDidMount() {
        const ob = new NewDatabase()

        var pormise = ob.gettopic({
            key: this.props.navigation.getParam('id')
        })
        pormise.then(dt => {
            if (dt.topic === null) {
                this.setState({
                    nai: true
                })
            } else {
                this.setState({
                    topic: dt.topic
                })
                
            }



        })
    }

    more = () => {
        const ob = new NewDatabase()
        if (hi === this.state.high) {
            console.log('same')
        } else {

        var promise=    ob.gettopicmore({
                key: this.props.navigation.getParam('id'),
                more: hi
            })
            promise.then(dt=>{
               // console.log(dt.topic,22)
                this.setState({
                    topic:{...this.state.topic,...dt.topic}
                })
            })
            this.setState({
                high: hi
            })
        }

    }


    render() {
        // console.log(this.state.topic)
        var { topic } = this.state
        var c = 1

        // console.log(topic)

        return (
            this.state.nai === true ?
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name="ios-book" size={25} />
                    <Text style={{ fontSize: 18 }}>Under Development.</Text>
                </View>
                : isEmpty(topic) === true ?

                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <ActivityIndicator size="large" color="#00ff00" />
                    </View> :
                    <Container>
                        <Header style={{ backgroundColor: 'red' }}>

                            <Left>
                                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                    <Icon name="md-arrow-back" size={25} style={{ color: 'white' }}
                                    />
                                </TouchableOpacity>

                            </Left>
                            <Body>
                                <Title style={{ color: 'white' }}>{this.props.navigation.getParam('title').slice(0,20)}..</Title>
                            </Body>


                        </Header>

                        <Content
                            onScroll={({ nativeEvent }) => {
                                if (this.isCloseToBottom(nativeEvent)) {
                                    this.more()

                                }
                            }}
                        >
                            <View style={{justifyContent:"center",alignItems:"center"}}>
                              <Text style={{fontSize:16,fontWeight:'bold'}}>{this.props.navigation.getParam('title')}</Text>
                            </View>
                            <View>

                           
                            {
                                Object.keys(topic).map(index => (
                                    //console.log(index)
                                    Object.keys(topic[index]).map(nindex => (

                                        isEmpty(topic[index][nindex]) === true ? null :

                                            <View key={nindex}>
                                                <Text>
                                            {
                                                this.high(topic[index].start)}
                                               }
                                            </Text>
                                            
                                                <HandleTheory
                                                    data={topic[index][nindex]}
                                                />
                                            </View>

                                    ))

                                ))


                            }

                            <ActivityIndicator size="large" color="#0000ff" />
                            </View>
                        </Content>
                    </Container>




        );
    }
}

export default (Theory);