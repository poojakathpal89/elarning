import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { Component } from "react";
import { GlobalService } from "../services/AllServices";
import { View, Text, StyleSheet, ActivityIndicator, ScrollView, SafeAreaView, Dimensions, StatusBar, FlatList, Image, PermissionsAndroid,
    Platform, TouchableOpacity, ImageBackground } from "react-native";
import Geolocation from '@react-native-community/geolocation';
import NetInfo from "@react-native-community/netinfo";
// import dynamicLinks from '@react-native-firebase/dynamic-links';
function obj2FormData(obj) {
    let formData = new FormData();
    let createFormData = function (obj, subKeyStr = "") {
        for (let i in obj) {
            let value = obj[i];
            let subKeyStrTrans = subKeyStr ? subKeyStr + "[" + i + "]" : i;
            if (typeof value === "string" || typeof value === "number") {
                formData.append(subKeyStrTrans, value);
            } else if (typeof value === "object" && value.height !== undefined) {
                formData.append(subKeyStrTrans, value);
            } else {
                createFormData(value, subKeyStrTrans);
            }
        }
    };
    createFormData(obj);
    return formData;
}

class RequestHandler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: "",
            currencyId:0,
            langId:1,
            isbiometric:false,
            appNotification:false,
            Home:null,
            GenderArray:null,
            Month:null,
            shareUrl : '',
        };
        this.getToken();
    }

    generateLink = async () => {
     
     
        try {
          const newLink = await dynamicLinks().buildShortLink({
            link: "https://www.rebatus.com/invite/" +GlobalService.userData.credential_username,
            domainUriPrefix: "https://rebatus.page.link",
            ios: {
              bundleId: 'com.rebatus',
              appStoreId: '1601049228',
              fallbackUrl: 'https://apps.apple.com/us/app/reelweb-app/id1601049228',
          },
          android: {
              packageName: 'com.rebatus',
              fallbackUrl: 'https://play.google.com/store/apps/details?id=com.rebatus',
          }
          });
          GlobalService.shareUrl= newLink // Output:  Created link:  https://demoproject.page.link/xYan8S7xjTTB7aLQ6
          return newLink;
  
        } catch (err) {
        
        }
      

  } 
    requestLocationPermission = async () => {
     
        if (Platform.OS === 'ios') {
          this.getOneTimeLocation();
        } else {
          try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
              {
                title: 'Location Access Required',
                message: 'This App needs to Access your location',
              },
            );
			
			  
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              //To Check, If Permission is granted
              this.getOneTimeLocation();
              this.subscribeLocationLocation();
              GlobalService.locationEnabled =  true;
            } else {
              GlobalService.locationEnabled = false;
             // setLocationStatus('Permission Denied');
            }
		
          } catch (err) {
          
          }
        }

    }  
	
    getOneTimeLocation = () => {
      let that =  this;
        Geolocation.getCurrentPosition(
          (position) => {
            that.state.longiTude = JSON.stringify(position.coords.longitude);
            that.state.latiTude = JSON.stringify(position.coords.latitude); 
            GlobalService.locationEnabled =  true;
          },
          (error) => {
            GlobalService.locationEnabled = false
          },
          {
            enableHighAccuracy: false,
            timeout: 30000,
            maximumAge: 1000
          },
        );
      };

      subscribeLocationLocation = () => {
        watchID = Geolocation.watchPosition(
          (position) => {
          
          
              this.state.longiTude = JSON.stringify(position.coords.longitude);
              this.state.latiTude = JSON.stringify(position.coords.latitude);
              GlobalService.locationEnabled =  true;
           
          },
          (error) => {
            GlobalService.locationEnabled = false;
          },
          {
            enableHighAccuracy: false,
            maximumAge: 1000
          },
        );
      };

    getToken() {
        this.state.isbiometric =false;
        AsyncStorage.multiGet(["token", "isbiometric",'userData','currency','language','appnotification']).then(response => {
            this.requestLocationPermission()

            this.state.langId = 1;
           
            if( (response[0]!=null && response[0]!= '') && (response[0][1]!=null && response[0][1]!= '') ){
            	this.state.token = response[0][1];
            }
            if( (response[1]!=null && response[1]!= '') && (response[1][1]!=null && response[1][1]!= '') ){
            	this.state.isbiometric = response[1][1];
            }
            
            if( (response[2]!=null && response[2]!= '') && (response[2][1]!=null && response[2][1]!= '') ){
              let data = JSON.parse(response[2][1]);
              GlobalService.userData = data;
            }
            if( (response[3]!=null && response[3]!= '') && (response[3][1]!=null && response[3][1]!= '') ){
              this.state.curencyId = parseInt(response[3][1]);
            }
             if( (response[5]!=null && response[5]!= '') && (response[5][1]!=null && response[5][1]!= '')){
              this.state.appNotification = response[5][1]
            }
            
        })
    }

    setBiometric(_val){
        this.state.isbiometric=JSON.stringify(_val);
        AsyncStorage.setItem('isbiometric',JSON.stringify(_val))
    }
    setLanguage(_val){
        this.state.langId=JSON.stringify(_val);
        AsyncStorage.setItem('language',JSON.stringify(_val))
    }
    setCurrency(_val){
        this.state.curencyId=JSON.stringify(_val);
        AsyncStorage.setItem('currency',JSON.stringify(_val))
    }

    setAppNotification(_val){
        this.state.appNotification=JSON.stringify(_val);
        AsyncStorage.setItem('appnotification',JSON.stringify(_val))
    }

    setuserData(data){
        GlobalService.userData = data;
        AsyncStorage.setItem('userData',JSON.stringify(data))
    }

   async forceLogout(){
       /// AsyncStorage.clear();
        return true;
    }


    checkConnection(){
      return NetInfo.fetch().then(state => {
        if(state.isConnected){
          return Promise.resolve(true);
        }else{
          throw JSON.stringify( {'status':4,'msg':'Internet not connected'});
        }
      }).catch((err)=>{
        return Promise.reject(err);
      });
      }


    apiRequest(url, method = "GET", payload = []) {
      return this.checkConnection().then((res)=>{
      let that = this;
        return new Promise(function (resolve) {
            let fdata = [];
            if (payload != "") {
                fdata = obj2FormData(payload);
            } else {
                fdata = [];
            }
            fetch(url, {
                method: method,
                body: fdata,
                headers: {
                    "Content-Type": "multipart/form-data",
                    "x-apikey": "UmViYXR1czIwMDIxOTg4QGFu",
                    "X-LANGUAGE-ID":  that.state.langId!=null && that.state.langId>0 ?that.state.langId:0 ,
                },
            })
                .then((response) => response.json())
                .then((jsonresponse) => {
                    resolve(jsonresponse);
                })
                .catch((error) => {
                    resolve(error);
                });
        });
      }).catch((error)=>{
        return Promise.reject(error);
    });
    }

    apiGetRequestWithToken(url, method = "GET", payload = []) {
      return this.checkConnection().then((res)=>{
       
        let that = this;
        return new Promise(function (resolve) {
            let fdata = [];
            if (payload != "") {
                fdata = obj2FormData(payload);
            } else {
                fdata = [];
            }
           
            fetch(url, {
                method: method,
                body: fdata,
                headers: {
                    "Content-Type": "multipart/form-data",
                    "x-apikey": "UmViYXR1czIwMDIxOTg4QGFu",
                    "x-token": that.state.token,
                    "X-LANGUAGE-ID":  that.state.langId,
                    "X-CURRENCY-ID": that.state.curencyId,
                },
            })
                .then((response) => {
                    resolve(response.text());
                })
                .catch((error) => {
                    resolve(error);
                });
        });
      }).catch((error)=>{
        
        return Promise.reject(error);
    });
    }

    
}
const rrequestHandler = new RequestHandler();
export default rrequestHandler;
