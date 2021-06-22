
import React from 'react';

import { isEmpty } from '../database/isEmpty'

import email from 'react-native-email'
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, Header, Content, Button, ListItem, Text, Left, Body, Right, Switch, List, Thumbnail, View, Item, Input, Title, itemDivider } from 'native-base';
import { SimpleAnimation } from 'react-native-simple-animations';
import Share from 'react-native-share';

import Test from '../database/Database'

var url = '';
var title = 'সূন্নাহ ভিত্তিক অ্যাপ';
var message = '';



class Goppo extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {

            headerShown: false,

        }
    }
    constructor(props) {
        super(props);
        this.state = {
            url: null
        };
        this.share = this.share.bind(this)
    }
    share = () => {
        var options = Platform.select({
            default: {
                title,
                subject: title,
                message: `${url}`,
            },
        });


        if (this.state.url === null) {
           x=1
        } else {

            options.url = this.state.url
            Share.open(options).then((res) => { console.log(res) })
                .catch((err) => { err && console.log(err); });

        }


    }
    componentWillUnmount() {
        global.top = 'Welcome'
    }
    componentDidMount() {
        global.top = this.props.navigation.state.routeName
          const ob=new Test()
          var promise=ob.share()
          promise.then(dt=>{
              var data=dt.data
              this.setState({
                  url:data
              })
          })

    }
    handleEmail = () => {
        const to = ['fislam.ruet@mail.com'] // string or array of email addresses
        email(to, {

        }).catch(console.error)
    }
    render() {
        console.log(this.state.url)
        return (
            <Container>
                <Header style={{ backgroundColor: "red" }}>

                    <Left>
                        <Text onPress={() => this.props.navigation.navigate('Welcome')}>
                            <Icon name="md-arrow-back" size={25} style={{ color: 'white' }}

                            />


                        </Text>

                    </Left>
                    <Body>
                        <Title style={{ color: 'white' }}>আরও</Title>
                    </Body>


                </Header>

                <Content style={{ backgroundColor: '#e8ebe9' }}>
                    <List style={{ backgroundColor: 'white' }}>
                        <ListItem itemDivider>

                        </ListItem>


                        <SimpleAnimation delay={500} duration={1000} movementType="slide" fade staticType='zoom'>

                            <ListItem
                                thumbnail
                                onPress={() => this.handleEmail()}
                            >
                                <Left >

                                    <Text style={{ color: '#f2b40a' }}>
                                        <Icon name="ios-mail" size={23} />
                                    </Text>
                                </Left>
                                <Body style={{ marginLeft: 20 }}>

                                    <Text >
                                        মতামত
                                    </Text>

                                </Body>
                                <Right >

                                    <Icon active size={20} name="ios-arrow-forward" />
                                </Right>
                            </ListItem>
                        </SimpleAnimation>
                        <ListItem itemDivider>

                        </ListItem>
                        <SimpleAnimation delay={500} duration={1000} movementType="slide" fade staticType='zoom'>

                            <ListItem
                                thumbnail
                                onPress={() => isEmpty(this.state.url) === false ? Linking.openURL(this.state.url) : null} >
                                <Left >

                                    <Text style={{ color: '#f2b40a' }}>
                                        <Icon name="ios-star-half" size={23} />
                                    </Text>
                                </Left>
                                <Body style={{ marginLeft: 20 }}>

                                    <Text >
                                        অ্যাপ রেট করুন
                                </Text>

                                </Body>
                                <Right >

                                    <Icon active size={20} name="ios-arrow-forward" />
                                </Right>
                            </ListItem>
                        </SimpleAnimation>
                        <ListItem itemDivider>

                        </ListItem>
                        <SimpleAnimation delay={500} duration={1000} movementType="slide" fade staticType='zoom'>

                            <ListItem
                                thumbnail
                                onPress={() => this.share()} >
                                <Left >

                                    <Text style={{ color: '#f2b40a' }}>
                                        <Icon name="md-share" size={23} />
                                    </Text>
                                </Left>
                                <Body style={{ marginLeft: 20 }}>

                                    <Text >
                                        শেয়ার করুন
                                     </Text>

                                </Body>
                                <Right >

                                    <Icon active size={20} name="ios-arrow-forward" />
                                </Right>
                            </ListItem>
                        </SimpleAnimation>
                        <ListItem itemDivider>

                        </ListItem>
                        <SimpleAnimation delay={500} duration={1000} movementType="slide" fade staticType='zoom'>

                            <ListItem
                                thumbnail
                                >
                                <Left >

                                    <Text style={{ color: '#f2b40a' }}>
                                        <Icon name="md-share" size={23} />
                                    </Text>
                                </Left>
                                <Body style={{ marginLeft: 20 }}>

                                    <Text >
                                    ভার্সন
                                     </Text>

                                </Body>
                                <Right >

                                 <Text>1.0</Text>
                                </Right>
                            </ListItem>
                        </SimpleAnimation>


                    </List>
                </Content>
            </Container>
        );
    }
}

export default Goppo;