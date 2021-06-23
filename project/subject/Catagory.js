import React, { Component } from 'react';
import {
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,

} from 'react-native';
import { Container, Header, Text, Left, Right, Title, View } from 'native-base';


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import NetInfo from '@react-native-community/netinfo';
import { Quoate, returnIcon, returnCataeyeView } from '../subject/Quoate'
import { SimpleAnimation } from 'react-native-simple-animations';
import { isEmpty } from '../database/isEmpty'
import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview';
import Cataeye from './Cataeye';
import Test from '../database/Database';
import Topiceye from './Topiceye';

let rs = [];
let qs = [];

const ViewTypes = {
    FULL: 0,
    HALF_LEFT: 1,
    HALF_RIGHT: 2,
};
var counter = 1;
class Catagory extends Component {

    static navigationOptions = ({ navigation }) => {

        return {
            title: navigation.getParam('otherParam', "সাব-অনুচ্ছেদ সমূহ"),
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: 'red',
            },

        };
    };

    constructor(props) {
        super(props);
        let { width } = Dimensions.get('window');

        this._layoutProvider = new LayoutProvider(
            index => {
                return ViewTypes.FULL;
            },
            (type, dim) => {
                switch (type) {
                    case ViewTypes.FULL:
                        dim.width = width;
                        dim.height = 200;
                        break;
                    default:
                        dim.width = 0;
                        dim.height = 0;
                }
            },
        );

        this._rowRenderer = this._rowRenderer.bind(this);
        this.searchData = this.searchData.bind(this);
       
        this.next=this.next.bind(this)
        this.state = {
            net: false,

            arrayholder: [],
            dataProvider: [],
            index1: '',
            detail:[]

        };

    }

    next=(index2,title)=>{
      
         const ob=new Test()
         ob.topiceyeViewupdate({
             index1:this.state.index1,
             index2:index2
         })
        this.props.navigation.navigate('Theory',{
            id:index2,
            title:title,
        })
    }

    componentWillUnmount() {
       // global.top = 'Welcome'
    }
    componentDidMount() {
        global.top = this.props.navigation.state.routeName
        let dataProvider = new DataProvider((r1, r2) => {
            return r1 !== r2;
        });
        var item = []
        var index = this.props.navigation.getParam('index1')
       
        var detail=this.props.navigation.getParam('detail')
       
        for (var i in detail[index]) {
            var x = {
                [i]: detail[index][i]
            }
            item.push(x)
        }


        this.setState({
            dataProvider: dataProvider.cloneWithRows(item),
            arrayholder: item,
            index1: index,
        });
    }


    render() {

        return (
            <Container>

                {isEmpty(this.state.dataProvider) === true ? (
                    <View>
                        <Text>loading</Text>
                    </View>
                ) : (
                        <View style={{ flex: 1 }}>
                            <View style={{
                                flex: 1,
                                backgroundColor: '#e0e0e0'
                            }}>
                                <RecyclerListView
                                    ref={view => (this._scrollView = view)}
                                    forceNonDeterministicRendering={true}
                                    layoutProvider={this._layoutProvider}
                                    dataProvider={this.state.dataProvider}
                                    rowRenderer={this._rowRenderer}
                                // renderFooter={this.renderFooter}
                                />
                                <View>
                                    <TouchableOpacity
                                        onPress={() => this._scrollView.scrollToTop({ animate: true })}
                                        style={{
                                            position: 'absolute',
                                            bottom: 150,
                                            flexDirection: 'row',
                                            right: 30,
                                            alignSelf: 'flex-end',
                                            opacity: 0.6,
                                            borderRadius: 25,
                                            padding: 5,
                                            backgroundColor: '#ebeff0',
                                            height: 40,
                                            width: 40,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                        <MaterialCommunityIcons
                                            name="format-vertical-align-top"
                                            size={20}
                                            color={'#011015'}
                                        />
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        onPress={() => this._scrollView.scrollToEnd({ animate: true })}
                                        style={{
                                            position: 'absolute',
                                            bottom: 90,
                                            flexDirection: 'row',
                                            right: 30,
                                            alignSelf: 'flex-end',
                                            opacity: 0.6,
                                            borderRadius: 25,
                                            padding: 5,
                                            backgroundColor: '#ebeff0',
                                            height: 40,
                                            width: 40,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                        <MaterialCommunityIcons
                                            name="format-vertical-align-bottom"
                                            size={20}
                                            color={'#011015'}
                                        />
                                    </TouchableOpacity>
                                </View>

                            </View>


                        </View>
                    )}
            </Container>

        );
    }
    _rowRenderer(type, item) {
        //You can return any view here, CellContainer has no special significance
       
        if (!item) return;

        return (
            Object.keys(item).map(index1 => (

                <TouchableOpacity
                    onPress={() => this.next(index1,item[index1].topic)}
                    style={{
                        margin: 10,
                        backgroundColor: 'white',
                        flexDirection: 'row',
                        borderRadius: 5,
                        padding: 10,

                    }}>
                    <View style={{ width: '75%', alignItems: 'flex-start' }}>
                        <View>
                            <Text style={{
                                fontWeight: 'bold'
                                , fontSize: 20, color: '#68aa47'
                            }}>{item[index1].topic}</Text>

                            <Text style={{
                                fontWeight: 'bold',color:'#a0144f'
                                , fontSize: 12, marginTop: 5
                            }}>উদ্ধৃতি:</Text>
                            <Text style={{
                                fontSize: 14, color: '#462a68', opacity: .5
                            }}>{Quoate()}।</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <MaterialCommunityIcons name={"eye-check"} size={25} color="red" />
                            <Topiceye
                            index1={this.state.index1}
                            index2={index1}
                        />
                        </View>


                    </View>
                    <View style={{ width: '25%', alignItems: 'center',flexDirection:'column',justifyContent:'space-between' }}>
                        <View>
                            <Text style={{
                                fontWeight: '100',
                                fontSize: 14,
                                color: '#ababab',

                            }}>{returnIcon()}
                            </Text>
                        </View>
                        <View >
                           <Text>
                           <FontAwesome5 name={"sign-in-alt"} size={20} color="'#ababab'" />
                           </Text>
                        </View>


                    </View>



                </TouchableOpacity>

            ))
        );
    }
    searchData(text, type) {

    }
}

const styles = StyleSheet.create({
    modalCard: {
        width: '70%',
        height: 250,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        padding: 6,
    },

    font: {
        fontSize: 12,
        fontWeight: '200',
    },
});
export default Catagory;
