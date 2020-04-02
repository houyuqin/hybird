import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';

const App = () => {
  return (
    <>
     <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
        <View style={{width:'100%',backgroundColor:'#f4f4f4'}}>
        {/* header */}
        <View style={{
          height:95,
          width:'100%',
          backgroundColor:'#fff',
          marginBottom:10,
          paddingTop:10
        }}>
          <View style={styles.searchbox}>
            <TextInput 
            placeholder="请输入商品名称" 
            style={styles.search}
            >
            </TextInput>
              <Image 
              style={styles.searchicon}
              source={require('./assets/task1/search.png')} />
          </View>
          <View style={styles.tabbar}>
            <Text style={styles.txt}>综合</Text>
            <Text style={styles.txts}>销量</Text>
            <Text style={styles.txts}>新品</Text>
            <Text style={styles.txts}>价格</Text>
            <Text style={styles.txts}>信用</Text>
          </View>
        </View>
        {/* 商品信息 */}
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          flexWrap: "wrap",
        }}>
        <View style={styles.box}>
          <Image source={require('./assets/task1/pic1.png')} 
          style={styles.pic1}/>
          <Text style={styles.intro}>
          Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳
          </Text>
          <Text style={styles.price}>36.00</Text>
        </View>
        <View style={styles.box}>
          <Image source={require('./assets/task1/pic2.png')} 
          style={styles.pic2}/>
          <Text style={styles.intro}>
          Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳
          </Text>
          <Text style={styles.price}>36.00</Text>
        </View>
        <View style={styles.box}>
          <Image source={require('./assets/task1/pic1.png')} 
          style={styles.pic1}/>
          <Text style={styles.intro}>
          Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳
          </Text>
          <Text style={styles.price}>36.00</Text>
        </View>
        <View style={styles.box}>
          <Image source={require('./assets/task1/pic2.png')} 
          style={styles.pic2}/>
          <Text style={styles.intro}>
          Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳
          </Text>
          <Text style={styles.price}>36.00</Text>
        </View>
        <View style={styles.box}>
          <Image source={require('./assets/task1/pic1.png')} 
          style={styles.pic1}/>
          <Text style={styles.intro}>
          Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳
          </Text>
          <Text style={styles.price}>36.00</Text>
        </View>
        <View style={styles.box}>
          <Image source={require('./assets/task1/pic2.png')} 
          style={styles.pic2}/>
          <Text style={styles.intro}>
          Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳
          </Text>
          <Text style={styles.price}>36.00</Text>
        </View>
      </View>
      </View>
      </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  box:{
    width:'45%',
    height:230,
    backgroundColor:'#fff',
    marginBottom:9,
    paddingLeft:10
  },
  searchbox:{
    width:420,
    height:40,
    marginLeft:30,
    backgroundColor:'#eee',
    borderRadius:5,
    flexDirection: 'row',
  },
  search:{
    width:370,
    height:40,
    paddingTop:10,
    paddingLeft:20
  },
  searchicon:{
    width:25,
    height:25,
    marginTop:10
  },
  tabbar:{
    flexDirection:'row',
    width:420,
    height:40,
    marginLeft:30,
    marginTop:15,
  },
  txt:{
    color:'red',
    fontSize:16,
    fontFamily:'微软雅黑',
    marginLeft:4
  },
  txts:{
    fontSize:16,
    marginLeft:63,
    fontFamily:'微软雅黑'
  },
  pic1:{
    width:97,
    height:120,
    marginLeft:50,
    marginTop:18
  },
  pic2:{
    width:130,
    height:120,
    marginLeft:50,
    marginTop:18
  },
  intro:{
    fontSize:14,
    marginTop:10,
    marginBottom:5
  },
  price:{
    fontSize:15,
    color:'red',
  }
})

export default App;