import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity,Platform,Linking,AppState } from "react-native";
import * as constantcolor from "../../css/constantcolor";
import GlobalStyle from "../../css/style";
import ButtonStyle from "../../css/button";
import welcomeStyle from "./WelcomeStyle";
import { StoryContainer } from '../../react-native-stories-view';
import { HeaderComponent,  Loader ,StatusBarComponent} from "../../component/AllComponent";
import {  AuthService,GlobalService,RequestHandler,GlobalShareService } from "../../services/AllServices";
// import appsFlyer from 'react-native-appsflyer';
export default class WelcomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        stepone: true,
        steptwo: false,
        stepthree: false,
        stepfour: false,
        isLoading:false,
        pageTitle: [],
         pageDescription: [], 
         images: []
    };
    componentwillunmount(){
		// if(Platform.OS == 'android'){
		// 	Linking.removeEventListener('url', this._handleAppStateChange);
		// }
        this.getProductTour();
	}
    componentDidMount() {
        this.props.navigation.addListener("focus", () => {


            // AppState.addEventListener('change', this._handleAppStateChanges);
            // if(RequestHandler.state.token == '' || RequestHandler.state.token == null  ){
				
            //     if(GlobalService.isNavigateToLogin == true){
            //         this.props.navigation.navigate("Auth");
                    
            //     }else if(GlobalShareService.shareData!= '' && GlobalShareService.shareData!=null && GlobalService.shareNavigate==false){
            //         this.props.navigation.navigate("Register");
            //     }
            // }


            // if(Platform.OS == 'android'){
            //   //  Linking.addEventListener('url', this._handleAppStateChange);
            //     Linking.getInitialURL().then((ev) => {
            //         if (ev) {
            //             this._handleOpenURL({url:ev});
            //         }
            //     }).catch(err => {
            //         console.warn('An error occurred', err);
            //     });
            // }else{
            //     Platform.select({
            //         ios:appsFlyer.onDeepLink(res => {
            //             const resData = res;
                    
            //             // if(resData.data.media_source != '' && resData.data.media_source != undefined && TokenHandler.state.token==null){
            //             //         GlobalService.deepEmail = resData.data.email;
            //             //         GlobalService.email='';
            //             //         this.props.navigation.navigate('registerPage',{'email':resData.data.email});
            //             // }
            //         })
            //     });
            // }

             this.getProductTour();
        })
    }
    // _handleAppStateChanges = (nextAppState) => {
    //     console.log(nextAppState,'test-----------------')
    //     // if (nextAppState == 'active') {
    //     //     if(Platform.OS == 'android'){
    //     //        // Linking.addEventListener('url', this._handleAppStateChange);
    //     //         Linking.getInitialURL().then((ev) => {
    //     //             if (ev) {
    //     //                 this._handleOpenURL({url:ev});
    //     //             }
    //     //         }).catch(err => {
    //     //             console.warn('An error occurred', err);
    //     //         });
    //     //     }else{
                
    //     //     //    appsFlyer.onDeepLink(res => {
                  
    //     //     //         // if (res?.deepLinkStatus !== 'NOT_FOUND') {
    //     //     //         //       const DLValue = res?.data.deep_link_value;
    //     //     //         //       const mediaSrc = res?.data.media_source;
    //     //     //         //       const param1 = res?.data.af_sub1;
    //     //     //         //       console.log('datas---------------------',JSON.stringify(res?.data, null, 2));
    //     //     //         //     }
    //     //     //       })
    //     //         // Platform.select({
    //     //         //     ios:appsFlyer.onDeepLink(res => {
    //     //         //         const resData = res;
    //     //         //         console.log(res,'ios response deeep link---------------')
    //     //         //         this._handleOpenURL(res)
    //     //         //         // if(resData.data.media_source != '' && resData.data.media_source != undefined && TokenHandler.state.token==null){
    //     //         //         //         GlobalService.deepEmail = resData.data.email;
    //     //         //         //         GlobalService.email='';
    //     //         //         //         this.props.navigation.navigate('registerPage',{'email':resData.data.email});
    //     //         //         // }
    //     //         //     })
    //     //         // });
    //     //     }
    //     // }
            
    //     }

    // _handleOpenURL(url){
	// 	let urls='';
	// 	if(Platform.OS == 'android'){
	// 		 urls = url.url;
	// 	}
      
	// 	if(RequestHandler.state.token == '' && GlobalService.isNavigate == false){
	// 		if (urls!= null && urls!='') {
	// 			console.log('url-----------',urls)
    //             let data =  urls.split('&deep_link_value=');
    //             if(data!=''){
    //                 let redirect = data[1].substring(0,5)
    //               if(redirect == 'login'){
    //                   this.goToLogin();
    //               }
    //             }
	// 		}
	// 	}
	// }


getProductTour(){
    this.setState({ isLoading: true, pageTitle: [], pageDescription: [], images: [] });
    AuthService.getProductTour().then(res=>{

        if (res != "") {
           
           this.setState({isLoading:false})
            
             if (res.status && res.productTourArr) {
                this.setState({pageTitle:res.productTourArr.pageTitle,pageDescription:[],images:res.productTourArr.images})
                console.log(res.productTourArr.pageTitle)
             }

            }

    }).catch(error=>{

    })
}
  
    goToLogin() {
       this.props.navigation.navigate("LoginScreen");
      
    }
    goToRegister() {
        this.props.navigation.navigate("Register");
       
    }

    componentWillUnmount() {}

    render() {
        return (
            <>
           <StatusBarComponent/>

            <View style={[GlobalStyle.MainBody, welcomeStyle.container]}>
                 <Loader loading={this.state.isLoading} />
    <StoryContainer screenOptions={{ contentStyle: {backgroundColor: 'red'}}}
    visible={true}
    enableProgress={true}
    images={this.state.images}
    duration={40}  
    pageTitle={this.state.pageTitle}
   pageDescription={this.state.pageDescription}
        classStyle ={[{flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            alignContent: "center",
            alignItems: "center",
            backgroundColor:"#CACACA",},
                {flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                alignContent: "center",
                alignItems: "center",
                backgroundColor:"#CACACA",}

        
            ,{flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                alignContent: "center",
                alignItems: "center",
                backgroundColor:"#CACACA",},
    
            {flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                alignContent: "center",
                alignItems: "center",
                backgroundColor:"#CACACA",}]}
    
             footerComponent={ <View style={welcomeStyle.bottomBtnBox}>
                    <TouchableOpacity
                        style={[ButtonStyle.comnButtonStyle, { width: "50%" }]}
                        activeOpacity={0.5}
                        onPress={() => {
                            this.goToLogin();
                        }}
                    >
                        <Text style={ButtonStyle.comnButtonTextStyle}> {GlobalService.Login ? GlobalService.Login.RAPP_LOGIN : 'Log in'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[ButtonStyle.comnButtonStyle, { backgroundColor: "#fff", width: "50%" }]}
                        activeOpacity={0.5}
                        onPress={() => {
                            this.goToRegister();
                        }}
                    >
                         <Text style={[ButtonStyle.comnButtonTextStyle, { color: "#000" }]}> {GlobalService.Login ? GlobalService.Login.RAPP__LOGIN_SIGNUP : 'Sign up'}</Text>
                       {/* // <Text style={[ButtonStyle.comnButtonTextStyle, { color: "#000" }]}> {GlobalService.Login ? GlobalService.Login.RAPP__LOGIN_SIGNUP : 'Sign up'}</Text> */}
                    </TouchableOpacity>
                    </View>}
                    containerStyle={{
                        width: '100%',
                        height: '100%',
                    }}
                    />
               
            </View>
            </>
        );
    }
}





