import React, { Component, Children } from 'react'
import { 
    View, 
    Text, 
    StyleSheet,
    Image, 
    ScrollView, 
    Dimensions, 
    TouchableHighlight ,
    AsyncStorage,
    Button,
    ImageBackground,
    TouchableOpacity
} from 'react-native'
import { Icon } from '@ant-design/react-native'
import ImagePicker from 'react-native-image-picker';
import ImageCropPicker from 'react-native-image-crop-picker';
import { Actions } from 'react-native-router-flux';

const {width,scale} = Dimensions.get('window');
const s = width / 640;
const options = {
    title: '选择图片',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
};

export default class Mine extends Component {
    constructor(){
        super();
        let data = [];
        this.state = {
            data,
            imageUrl: require('../assets/touxiang.png')
        }               
    }
    componentDidMount(){
        AsyncStorage.getItem('image',(err,res)=>{
            if(JSON.parse(res) === ''){
                this.setState({imageUrl:require('../assets/touxiang.png')})
            }else{
                this.setState({imageUrl:JSON.parse(res)})
            }
        })
    }
    componentDidUpdate(){
        AsyncStorage.getItem('image',(err,res)=>{
            if(JSON.parse(res) === ''){
                this.setState({imageUrl:require('../assets/touxiang.png')})
            }else{
                this.setState({imageUrl:JSON.parse(res)})
            }
        })
    }
    takephoto = ()=>{
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
              return;
            } else if (response.error) {
              console.log('Error:', response.error);
            } 
            else {
                
              const source = { uri: response.uri };
              this.setState({
                imageUrl: source,
              });
              AsyncStorage.setItem('image',JSON.stringify(source),()=>{
                        console.log('store'+JSON.stringify(source))
                    })
            }
          });
    }

    exit=()=>{
        AsyncStorage.removeItem('user');
        Actions.login();
    }
    render() {
        return (
            <View>
                <ScrollView>
                {/* 头像 */}
                <View style={styles.red}>
                    <TouchableHighlight 
                        style={styles.touxiang} 
                        onPress={()=>{
                            this.takephoto()
                        }}
                    >
                        <ImageBackground style={{ flex: 1 }}
                            source={require('../assets/touxiang.png')}>

                        <Image 
                            source={this.state.imageUrl}
                            style={styles.txpic}
                        />
                        </ImageBackground>
                    </TouchableHighlight>
                    <Text style={styles.txtxt}>BINNU DHILLON</Text>
                </View>
                {/* 过渡 */}
                <Image 
                    source={require('../assets/quxian.png')} 
                    style={{width:'100%',height: 75*s}} 
                />
                {/* 我的个人中心 */}
                <View style={styles.cen}>
                    <View style={styles.ctop}>
                        <Image source={require('../assets/myself.png')} 
                        style={{width:40*s,height:50*s}}/>
                        <Text style={styles.ctoptxt}>我的个人中心</Text>
                    </View>

                    <View style={styles.ccen}>
                        <View style={styles.item}>
                            <Icon name='setting' size={35} />
                            <Text>账户管理</Text>
                        </View>
                        <View style={styles.item}>
                            <Image source={require('../assets/env.png')} />
                            <Text>收货地址</Text>
                        </View>
                        <View style={styles.item}>
                            <Icon name='audit' size={35} />
                            <Text>我的信息</Text>
                        </View>
                        <View style={styles.item}>
                            <Icon name='profile' size={35} />
                            <Text>我的订单</Text>
                        </View>
                        <View style={styles.item}>
                            <Icon name='qrcode' size={37} />
                            <Text>我的二维码</Text>
                        </View>
                        <View style={styles.item}>
                            <Image source={require('../assets/credit.png')} />
                            <Text>我的积分</Text>
                        </View>
                        <View style={styles.item}>
                            <Icon name='star' size={35} />
                            <Text>我的收藏</Text>
                        </View>
                    </View>
                </View>
                {/* E族活动 */}
                <View style={styles.activity}>
                    <View style={styles.ctop}>
                        <Icon name='tag' size={35} />
                        <Text style={styles.ctoptxt}>E族活动</Text>
                    </View>

                    <View style={styles.ccen}>
                        <View style={styles.item}>
                            <Image source={require('../assets/set.png')} />
                            <Text>居家维护保养</Text>
                        </View>
                        <View style={styles.item}>
                            <Image source={require('../assets/car.png')} />
                            <Text>出行接送</Text>
                        </View>
                        <View style={styles.item}>
                            <Icon name='user' size={35} />
                            <Text>我的受赠人</Text>
                        </View>
                        <View style={styles.item}>
                            <Image source={require('../assets/bed.png')} />
                            <Text>我的住宿优惠</Text>
                        </View>
                        <View style={styles.item}>
                            <Image source={require('../assets/act.png')} />
                            <Text>我的活动</Text>
                        </View>
                        <TouchableHighlight style={styles.item}  key='fabu' onPress={()=>Actions.fabu()}>
                            <View>
                                <Image source={require('../assets/fabu.png')} />
                                <Text>我的发布</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
                {/* 退出 */}
                <TouchableOpacity 
                    style={styles.bot}
                    onPress={this.exit}
                >
                    <Text style={{fontSize:16*s,color:'red'}}>
                        BINNU DHILLON  |  退出
                    </Text>
                </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    red:{
        width: '100%',
        height: 300*s,
        backgroundColor: '#f23030',
        alignItems: 'center',
        justifyContent: 'center'
    },
    touxiang:{
        width: 160*s,
        height:160*s,
        overflow: 'hidden',
        borderRadius:60,
        borderColor: 'white',
        borderWidth: 2,
        shadowColor: 'grey',
        marginBottom:25*s
    },
    txpic:{
        width:160*s,
        height:160*s
    },
    txtxt:{
        fontSize: 25*s,
        color: 'white'
    },
    cen:{
        width: '100%',
        height: 400*s,
        backgroundColor: 'white',
        marginBottom: 10*s
    },
    ctop:{
        width: '100%',
        height:70*s,
        flexDirection: 'row',
        alignItems:'center',
        marginLeft:10,
        borderBottomColor: '#eee',
        borderBottomWidth: 1
    },
    ctoptxt:{
        fontSize:16,
        marginLeft: 10
    },
    ccen:{
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item:{
        width: '33%',
        height:73,
        alignItems: 'center',
        justifyContent: 'center',
    },
    activity:{
        width: '100%',
        height: 200,
        backgroundColor: 'white', 
    },
    bot:{
        width:'100%',
        height: 100*s,
        alignItems: 'center',
        justifyContent: 'center'
    }
})