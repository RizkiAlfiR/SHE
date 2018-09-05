<<<<<<< HEAD
import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, AsyncStorage, FlatList, ActivityIndicator } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body } from "native-base";
import GlobalConfig from './GlobalConfig';

export default class Profile extends Component {
    static navigationOptions = {
        title: 'Profile',
    };

    constructor() {
        super();
        this.state = {
            active: 'true',
            isLoading: true,
            dataSource: []
        };
    }

    _renderItem(item) {
        return (
            <View style={styles.Container}>
                <View style={styles.header}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.unit}>{item.unit_kerja}</Text>

                    <View style={styles.profileepicWrap}>
                        <Image style={styles.profileepic} source={require('../images/user.png')} />
                    </View>
                    <Text style={styles.pos}>{item.pos_text}</Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.bar}>
                        <Card>
                            <CardItem bordered>
                                <Text>No. Badge : {item.no_badge}</Text>
                            </CardItem>
                            <CardItem bordered>
                                <Body>
                                    <Text>Email : {item.email}</Text>
                                </Body>
                            </CardItem>
                            {/* <CardItem bordered>
                                <Body>
                                    <Text>CC Text : {item.cc_text}</Text>
                                </Body>
                            </CardItem>
                            <CardItem bordered>
                                <Text>Company ID : {item.company}</Text>
                            </CardItem>
                            <CardItem bordered>
                                <Body>
                                    <Text>Plant ID : {item.plant}</Text>
                                </Body>
                            </CardItem> */}
                        </Card>
                    </View>
                </View>
            </View>
        )
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        AsyncStorage.setItem('plant', 'response.plant').then(() => {
            AsyncStorage.getItem('token').then((value) => {
                // alert(JSON.stringify(value));
                const url = GlobalConfig.SERVERHOST + 'api/Auth/user?token=' + value;

                fetch(url)
                    .then((response) => response.json())
                    .then((responseJson) => {
                        // alert(JSON.stringify(responseJson));
                        this.setState({
                            dataSource: responseJson.data.data,
                            isloading: false
                        });
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            })
        })
    }
    render() {
        return (
            this.state.isloading
                ?
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color="#330066" animating />
                </View>
                :
                <Content>
                    {this._renderItem(this.state.dataSource)}
                </Content>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        margin: 30,
        marginBottom: 0,
        padding: 20,
        alignSelf: 'stretch',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#1AB394',
        backgroundColor: '#1AB394'
    },

    body: {
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 30
    },

    profileepicWrap: {
        width: 180,
        height: 180
    },

    profileepic: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
        borderColor: '#ffffff'
    },

    name: {
        marginTop: 20,
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    },

    unit: {
        fontSize: 14,
        color: '#fff',
        fontWeight: '300',
        fontStyle: 'italic',
        marginTop: 10,
        marginBottom: 20
    },

    pos: {
        marginTop: 20,
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 30
    },

    // bar: {
    //     flexDirection: 'row',
    // }

});
=======
import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, AsyncStorage, FlatList, ActivityIndicator } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body } from "native-base";

export default class Profile extends Component {
    static navigationOptions = {
        title: 'Profile',
    };

    constructor() {
        super();
        this.state = {
            active: 'true',
            isLoading: true,
            dataSource: []
        };
    }

    _renderItem(item) {
        return (
            <View style={styles.Container}>
                <View style={styles.header}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.unit}>{item.unit_kerja}</Text>

                    <View style={styles.profileepicWrap}>
                        <Image style={styles.profileepic} source={require('../images/user.png')} />
                    </View>
                    <Text style={styles.pos}>{item.pos_text}</Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.bar}>
                        <Card>
                            <CardItem bordered>
                                <Text>No. Badge : {item.no_badge}</Text>
                            </CardItem>
                            <CardItem bordered>
                                <Body>
                                    <Text>Email : {item.email}</Text>
                                </Body>
                            </CardItem>
                            {/* <CardItem bordered>
                                <Body>
                                    <Text>CC Text : {item.cc_text}</Text>
                                </Body>
                            </CardItem>
                            <CardItem bordered>
                                <Text>Company ID : {item.company}</Text>
                            </CardItem>
                            <CardItem bordered>
                                <Body>
                                    <Text>Plant ID : {item.plant}</Text>
                                </Body>
                            </CardItem> */}
                        </Card>
                    </View>
                </View>
            </View>
        )
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        AsyncStorage.setItem('plant', 'response.plant').then(() => {
            AsyncStorage.getItem('token').then((value) => {
                // alert(JSON.stringify(value));
                const url = 'http://10.15.5.150/dev/she/api/Auth/user?token=' + value;

                fetch(url)
                    .then((response) => response.json())
                    .then((responseJson) => {
                        // alert(JSON.stringify(responseJson));
                        this.setState({
                            dataSource: responseJson.data.data,
                            isloading: false
                        });
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            })
        })
    }
    render() {
        return (
            this.state.isloading
                ?
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color="#330066" animating />
                </View>
                :
                <Content>
                    {this._renderItem(this.state.dataSource)}
                </Content>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        margin: 30,
        marginBottom: 0,
        padding: 20,
        alignSelf: 'stretch',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#1AB394',
        backgroundColor: '#1AB394'
    },

    body: {
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 30
    },

    profileepicWrap: {
        width: 180,
        height: 180
    },

    profileepic: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
        borderColor: '#ffffff'
    },

    name: {
        marginTop: 20,
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    },

    unit: {
        fontSize: 14,
        color: '#fff',
        fontWeight: '300',
        fontStyle: 'italic',
        marginTop: 10,
        marginBottom: 20
    },

    pos: {
        marginTop: 20,
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 30
    },

    // bar: {
    //     flexDirection: 'row',
    // }

});
>>>>>>> 7494bddcc91f096d60c7a0792f2e9c0a483b48c7
