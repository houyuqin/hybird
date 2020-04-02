import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Text, Image, BackHandler,ToastAndroid, AsyncStorage } from 'react-native';
import {Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal, Actions} from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';
import SplashScreen from 'react-native-splash-screen';
import Login from './component/Login';
import SwiperPage from './src/common/SwiperPage';
import Home from './component/Home';
import Mine from './component/Mine';
import Good from './component/Good';
import Fabu from './component/Fabu';
import Register from './component/Register';

console.disableYellowBox = true;

const App = () => {
	let [isLogin,setLogin] = useState(false);
	let [isInstall,setInstall] = useState(true);
	let now = 0;
	
	let init = ()=>{
		AsyncStorage.getItem('isInstall')
		.then(res=>{
			console.log('isinstall',res)
			if(res){
				setInstall(false);
			}
		})
		AsyncStorage.getItem('user')
		.then(res=>{
			let user = JSON.parse(res)
			console.log(user)
			if(!user){
				SplashScreen.hide();
			}
			if(user){
				setLogin(true);
				SplashScreen.hide();
			}
		})
	}
	useEffect(()=>{
		init();
	},[])
	let afterInstall = ()=>{
		console.log('after install')
		setInstall(false)
	}
	if(isInstall){
		return <View style={{flex:1}}>
			<SwiperPage afterInstall={afterInstall}/>
		</View>
	}
	
	return (
		<Router
			backAndroidHandler={()=>{
				if(Actions.currentScene == 'login'){
					Actions.login();
				}else{
					if(Actions.currentScene != 'home'){
						Actions.pop();
						return true;
					}else{
						if(new Date().getTime()-now<2000){
							BackHandler.exitApp();
						}else{
							ToastAndroid.show('确定要退出吗',100);
							now = new Date().getTime();
							return true;
						}
					}
				}
			}}
		>
			<Overlay>
			<Modal key="modal" hideNavBar>
				
				<Lightbox key="lightbox">
				<Scene key="root">
        <Tabs 
          key='tabbar'
          hideNavBar
          title='首页'
          activeTintColor="red"
          inactiveTintColor="grey"
          tabBarStyle={{backgroundColor:'#ccc'}}
          
        >
          {/* Home栏 */}
          <Scene 
            key='home'
            hideNavBar
            icon={
              ({focused})=>
              <Icon 
              	color={focused?'red':'grey'} 
                name="home"
                size={30}
              />
            }
            component={Home}
          >
          </Scene>
          {/* 商品分类栏 */}
          <Scene key='goods'
            hideNavBar
            title='商品分类'
            icon={
              ({focused})=>
              <Icon 
              	color={focused?'red':'grey'} 
                name="appstore"
                size={30}
              />
            }
            component={Good}
          ></Scene>
          {/* 个人中心栏 */}
          <Scene 
			key='mine'
			title='我的'
            // initial
            icon={
              ({focused})=>
              <Icon 
                color={focused?'red':'grey'}
                name="user" 
                size={30} 
              />
            }
          >
            <Scene 
              key='mine' 
              hideNavBar
              component={Mine}
            /> 
            <Scene 
              key='fabu'
              hideNavBar
              hideTabBar
              title='我的发布'
              component={Fabu}
            /> 
          </Scene>
          </Tabs>
          </Scene>
				</Lightbox>

				<Scene initial={!isLogin} key="login" component={Login}/>
				<Scene key="register" component={Register}/>

				{/* <Scene key="login" component={ShowMyName}/> */}
				{/* <Scene key="login1" component={Login}/> */}
			</Modal>
			{/* <Scene component={Message}/> */}
			</Overlay>
		</Router>
	);
};

export default App;