import React from 'react';
import {Text,Image, View,TouchableOpacity,Button,ScrollView} from 'react-native';
import UserSessionStyle from './UserSessionsStyle';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';
import ChooseAvtarStyle from "../chooseAvatar/ChooseAvtarStyle";
import { AuthService, GlobalService, RequestHandler, ToastService } from "../../services/AllServices";
import { CommonActions } from "@react-navigation/native";






export default class UserSessionScreen extends React.Component {
  constructor(props) {
      super(props);
  }
  state = {
      loading: false,
      secureTextEntry: true,
      errorPass:false
  };

  
  componentDidMount() {
    RequestHandler.getToken();
      // console.log(StringsOfLanguages.languageObj);
  }
  userImageClick(_item){
    let postData ={
      password:this.state.teacherCode,
      user_type:2
    }
    this.loginApi(postData);
  }
  loginApi(postData){

    AuthService.authenticate(postData)
    .then((res) => {
   
    
        this.setState({ isLoading: false });
    
        if (res.status == 1) {
         let i = parseInt(res.userInfo.user_type);
          GlobalService.userData=res.userInfo;
          let data =  RequestHandler.state.userSessions;
         
          data.push(res.userInfo)
    
          AsyncStorage.multiSet(
            [
                ["token",res.userInfo.token],
                ["userSession",  JSON.stringify(data)],
               
            ],
            async (error) => {
              
                if(i==1){
  
                  this.props.navigation.dispatch(
                    CommonActions.reset({
                        index: 1,
                        routes: [{ name: "DrawerNavigationRoutes" }],
                    })
                );
                }else{
                  this.props.navigation.dispatch(
                    CommonActions.reset({
                        index: 1,
                        routes: [{ name: "DrawerNavigationRoutesTeacher" }],
                    })
                );
               
                }
            }
        );
        
          
         
            
        } else {
        
             ToastService.tostLong(res.msg);
        }
    })
    .catch((error) => {
        // ToastService.tostShort(error);
    });
  } 

  SignInBtn() {
    this.props.navigation.navigate("MainScreen");
   
}
  render() {
      return (

        <View style={[GlobalStyle.MainBody, { flex: 1,backgroundColor:'#E7E2E2'}]}>
        <ScrollView>
        <View style={ChooseAvtarStyle.container}>
       
      
      <View style={CommonStyle.logoOnlyHeader}>
              <Image
                  source={require("../../Image/logo-icon.png")}
                  style={{
                      width: 550,
                      height: 70,
                      resizeMode: "contain",
                      }} />
          </View>

        
                        <View style={[ChooseAvtarStyle.bottomActionSheetBox]}>
                            <View style={[ChooseAvtarStyle.bottomswiperHeadingBox,{height:100,paddingTop:30}]}>
                                <Text style={ChooseAvtarStyle.bottomswiperHeading}>
                                اختار صورة رمزية
                                </Text>
                                <Text style={ChooseAvtarStyle.bottomswiperHeading}>
                                يمكنك تغييره في الإعدادات لاحقًا
                                </Text>
                                <Image
                                style={ChooseAvtarStyle.dashedSeparator}/>
                               
                            </View>
                                
                                  <View  >
                                     
                                          <View style={[ChooseAvtarStyle.chooseAvatarBox,{paddingTop:0,justifyContent:'center',alignContent:"center"}]}>
                                           
                                                {RequestHandler.state.userSessions != "" &&
                                                RequestHandler.state.userSessions.length > 0 &&
                                                RequestHandler.state.userSessions.map((item, key) => (
                                                  <View key={key} style={{flexDirection:"row",height:150,margin:10}}>
                                                  <View style={UserSessionStyle.newStudentText}>
                                                    <View >
                                                      <Text  style={UserSessionStyle.newStudentTxt}>{item.user_name}</Text>
                                            
                                                  </View>
                                                  <View style={UserSessionStyle.buttonContainer}>
                                                    <View  style={UserSessionStyle.buttonStyle}>
                                                              <TouchableOpacity
                                                      disabled={this.state.loading}
                                                                                    
                                                        activeOpacity={0.5}
                                                        onPress={() => {
                                                           this.userImageClick(item);
                                                        }} >
                                                          <Image source={{ uri: item.userImage}}  style={{width: 80, height:70, resizeMode: 'contain',borderRadius:10}} />
                        
                                                        {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                                                          </TouchableOpacity>
                                            
                                                      </View>
                                                  </View>
                                            </View>
                                            </View>
                                                ))}
                                              
                                          </View>
                                     
                                  </View>


          </View>
      

       
        </View>
        <View style={UserSessionStyle.newstudentImageContainer}>
               <View  style={UserSessionStyle.buttonStyle}>
               <TouchableOpacity
            disabled={this.state.loading}
             activeOpacity={0.5}
              onPress={() => {
                this.SignInBtn();
              }} >
                  <Text style={UserSessionStyle.signTxt}>Sign in different account</Text>
               {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                </TouchableOpacity>
                  </View>
                
                  </View>
     </ScrollView>
     
     
             
      </View>
  


          
          
            );
          };

        }