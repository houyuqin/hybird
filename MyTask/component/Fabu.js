import React, { Component } from 'react'
import { 
    View, 
    Text, 
    StyleSheet,
    Dimensions,
    ToastAndroid
} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';

const {width,scale} = Dimensions.get('window');
const s = width / 640;

const ret = [
    [{id:1,tit:'待回复'}],
    [{id:2,tit:'待回复'}],
    [{id:3,tit:'待回复'}],
    [{id:4,tit:'待回复'}],
    [{id:5,tit:'待回复'}],
    [{id:6,tit:'已回复'}],
    [{id:7,tit:'已回复'}],
    [{id:8,tit:'已回复'}],
    [{id:9,tit:'已回复'}],
    [{id:0,tit:'已回复'}]
];
const arr=[1,2,3,4,5,6,7,8,9,10];
export default class Fabu extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            page:1
        }
    }
    ident=()=>{

    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?page='+this.state.page+'&limit=10')
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({data:res.data});
                // console.log(this.state.data);
            });
    }
    add=()=>{
        this.setState({page:this.state.page+1})
        fetch('https://cnodejs.org/api/v1/topics?page='+this.state.page+'&limit=10')
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({data:res.data})
            });
    }
    cut=()=>{
        if(this.state.page===1){
            ToastAndroid.show('当前已经是第一页，没有上一页!', ToastAndroid.SHORT);
        }else{
            this.setState({page:this.state.page-1})
            fetch('https://cnodejs.org/api/v1/topics?page='+this.state.page+'&limit=10')
                .then((res)=>res.json())
                .then((res)=>{
                    this.setState({data:res.data})
                });
        }
    }
    render() {
        return (
            <View>
                <View style={styles.tab}>
                        <Icon name='left' color='white' onPress={Actions.pop}/>
                    <Text style={styles.fabu}>我的发布</Text>
                    <Icon color='white' size='lg' name='ellipsis' />
                </View>
                <View style={{
                    width:'100%',
                    backgroundColor:'#ccc',
                    flexDirection:'row'
                }}>
                    <View style={styles.left}>
                    {
                        this.state.data.map((item)=>(
                            <View key='item' style={{
                                width:'80%',
                                height:70*s,
                                backgroundColor:'white',
                                flexDirection:'row',
                                alignItems:'center'
                            }}>
                                <View style={styles.tit}>
                                    <Text style={{fontSize:20*s}}>{(item.title).slice(0,13)+'...'}</Text>
                                </View>
                                <View style={styles.time}>
                                    <Text style={{fontSize:20*s}}>{(item.last_reply_at).slice(0,10)}</Text>
                                </View>
                                
                            </View>
                            ))
                                
                        
                    }
                    </View>
                    <View style={styles.right}>
                        {
                            arr.map((item)=>(
                                ret[Math.floor(Math.random()*10)].map((item)=>(
                                    <Text style={{
                                        fontSize:20*s,
                                        height:70*s,
                                        color:item.tit=='待回复'?'red':'black'
                                    }}>
                                        {item.tit}
                                    </Text>
                                ))
                            ))
                        }
                    </View>
                </View>
                <View style={{
                    width:'100%',
                    height:100*s,
                    backgroundColor:'white',
                    flexDirection:'row',
                    justifyContent:'center',
                    paddingTop:20*s
                }}>
                    <Button onPress={this.cut} style={styles.zuo}>上一页</Button>
                    <Text style={styles.pagenum}>第{this.state.page}页</Text>
                    <Button onPress={this.add} style={styles.you}>下一页</Button>
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    tab:{
        width:'100%',
        height:64*s,
        backgroundColor: 'red',
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:30*s,
        paddingRight:30*s,
    },
    fabu:{
        color:'white',
        fontSize:26*s,
        fontWeight:'bold',
        marginLeft:200*s,
        marginRight:200*s,
    },
    tit:{
        width:350*s,
        marginLeft:20*s
    },
    time:{
        width:110*s,
        marginLeft:30*s
    },
    zuo:{
        width:200*s,
        height:50*s,
        backgroundColor:'red',
        borderRadius:25*s,
        color:'white',
        paddingTop:10*s
    },
    you:{
        width:200*s,
        height:50*s,
        backgroundColor:'red',
        borderRadius:25*s,
        color:'white',
        paddingTop:10*s
    },
    pagenum:{
        marginTop:10*s,
        fontSize:20*s,
        width:200*s,
        textAlign:'center'
    },
    left:{
        width:'80%',
        backgroundColor:'white',
    },
    right:{
        width:'20%',
        backgroundColor:'white',
        flexDirection:'column',
        paddingTop:20*s,
        paddingLeft:40*s
    },
    ret:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        paddingTop:20*s
    },

})