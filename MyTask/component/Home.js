import React, { Component } from 'react'
import { Dimensions, View, Text, Image, StyleSheet, TextInput, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import { Icon, Carousel } from '@ant-design/react-native'
import Button from 'react-native-button';
import NaviBar from 'react-native-pure-navigation-bar';

const {width,scale} = Dimensions.get('window');
const s = width / 640;
export default class Home extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <View>
                <ScrollView>
                {/* header */}
                <View style={styles.header}>
                    <View style={styles.search}>
                        <Icon name='search' size={25} color='white'/>
                        <TextInput 
                            value='请输入您要搜索的关键字' 
                            style={styles.key}
                        />
                    </View>
                    <View style={styles.car}>
                        <Icon name='shopping-cart' color='white' size={30}/>
                    </View>
                </View>
                {/* 轮播图 */}
                <View>
                    <Carousel
                        style={styles.wrapper}
                        selectedIndex={2}
                        autoplay
                        infinite
                        afterChange={this.onHorizontalSelectedIndexChange}
                    >
                        <View
                        style={[styles.containerHorizontal, { backgroundColor: 'red' }]}
                        >
                            <Image 
                                source={require('../assets/cro11.png')}
                                style={styles.cro} 
                            />
                        </View>
                        <View
                        style={[styles.containerHorizontal, { backgroundColor: 'blue' }]}
                        >
                            <Image 
                                source={require('../assets/cro2.png')}
                                style={styles.cro} 
                            />
                        </View>
                    </Carousel>
                </View>
                {/* content */}
                <View style={styles.content}>
                    <View style={styles.line}>
                        <View style={styles.circle1}>
                            <Image 
                                source={require('../assets/le1.png')}
                                style={styles.img} 
                            />
                        </View>
                        <View style={styles.cen}>
                            <Text style={styles.centxt}>居家维修保养</Text>
                        </View>
                        <Icon name='right' size={35} />
                    </View>
                    <View style={styles.line}>
                        <View style={styles.circle2}>
                            <Image 
                                source={require('../assets/le2.png')}
                                style={styles.img} 
                            />
                        </View>
                        <View style={styles.cen}>
                            <Text style={styles.centxt}>住宿优惠</Text>
                        </View>
                        <Icon name='right' size={35} />
                    </View>
                    <View style={styles.line}>
                        <View style={styles.circle3}>
                            <Image 
                                source={require('../assets/le3.png')}
                                style={styles.img} 
                            />
                        </View>
                        <View style={styles.cen}>
                            <Text style={styles.centxt}>出行接送</Text>
                        </View>
                        <Icon name='right' size={35} />
                    </View>
                    <View style={styles.line}>
                        <View style={styles.circle4}>
                            <Image 
                                source={require('../assets/le4.png')}
                                style={styles.img} 
                            />
                        </View>
                        <View style={styles.cen}>
                            <Text style={styles.centxt}>E族活动</Text>
                        </View>
                        <Icon name='right' size={35} />
                    </View>
                </View>
                <Button style={styles.btn}>发布需求</Button>
                <View style={styles.iden}>
                    <Text style={styles.txt}>©E族之家 版权所有</Text>
                </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    header:{
        width:'100%',
        height: 80*s,
        paddingTop: 10*s,
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent:'center'
    },
    search:{
        width:515*s,
        height: 50*s,
        backgroundColor: '#fbb8b8',
        borderRadius: 25*s,
        paddingLeft:10*s,
        flexDirection: 'row',
        alignItems: 'center'
    },
    key:{
        color: 'white',
        marginLeft: 20*s,
        fontSize: 18*s,
        paddingTop:10*s
    },
    car:{
        paddingTop:5*s,
        width: 50*s,
        paddingLeft: 10*s
    },
    cro:{
        width:'100%',
        height: 275*s
    },
    content:{
        flexDirection:'row',
        flexWrap:'wrap'
    },
    line:{
        width:'100%',
        height: 120*s,
        flexDirection:'row',
        backgroundColor:'white',
        marginTop:7,
        alignItems: 'center',
        justifyContent:'center'
    },
    circle1:{
        width:100*s,
        height:100*s,
        borderRadius:50*s,
        backgroundColor:'#fcc'
    },
    circle2:{
        width:100*s,
        height:100*s,
        borderRadius:50*s,
        backgroundColor:'#ffe1b1'
    },
    circle3:{
        width:100*s,
        height:100*s,
        borderRadius:50*s,
        backgroundColor:'#bfe6a8'
    },
    circle4:{
        width:100*s,
        height:100*s,
        borderRadius:50*s,
        backgroundColor:'#c3ddf2'
    },
    img:{
        width:50*s,
        height:50*s,
        marginTop:25*s,
        marginLeft:25*s
    },
    cen:{
        width: 460*s,
        height:65*scale,
        justifyContent:'center',
        paddingLeft:35*s
    },
    centxt:{
        fontSize:22*s
    },
    btn:{
        width:'90%',
        height: 66*s,
        backgroundColor: '#f23030',
        borderRadius:10*s,
        paddingTop: 10*s,
        color: 'white',
        marginLeft: '5%',
        marginTop: 35*s
    },
    txt:{
        fontSize:16*s
    },
    iden:{
        marginTop:55*s,
        alignItems:'center'
    }


})
