import React from 'react';
import {Text,Image,TouchableOpacity, View,Button,ScrollView} from 'react-native';
import ProfilePageStyle from './ProfilePageStyle';
import { SettingPageHeaderComponent } from "../../component/AllComponent";
import {FooterComponent,} from "../../component/AllComponent";
import RBSheet from 'react-native-raw-bottom-sheet';
import BottomSheet from 'react-native-simple-bottom-sheet';
import { scale, verticalScale, moderateScale } from "react-native-size-matters";





export default class ProfilePageScreen extends React.Component {
  constructor(props) {
      super(props);
  }
  state = {
      loading: false,
      secureTextEntry: true,
      errorPass:false
  };

  componentDidMount() {
      // console.log(StringsOfLanguages.languageObj);
  }
  groups(){
    this.props.navigation.navigate("multipleStudent");
  }
  StarOneClick(){
    this.props.navigation.navigate("exerciseMultipleOne");
  }
  StarTwoClick(){
    this.props.navigation.navigate("exerciseMultipleTwo");
  }
  StarThreeClick(){
    this.props.navigation.navigate("exerciseMultipleThree");
  }
  StarSecondFirstClick(){
    this.props.navigation.navigate("exerciseMultipleThree");

  }

  render() {
      return (
      
    <View style={[ProfilePageStyle.MainBody, { flex: 1,backgroundColor:'#FFFFFF'}]}>
       {/* <FooterComponent/> */}
       <SettingPageHeaderComponent props={this.props} />
      <ScrollView>
      <View style={ProfilePageStyle.container}>
      <View style={[ProfilePageStyle.profileImageCardBox]}>
                                <View style={{ alignItems: "center", }}>
                                    <TouchableOpacity activeOpacity={0.5} onPress={() => this.RBSheetPicker.open()}>
                                        {this.state.photo != "" || this.state.avtarimage != "" ? (
                                            <View
                                                style={[
                                                    { backgroundColor: this.state.colorId },
                                                    {
                                                      
                                                        borderRadius: 100,
                                                        width: 130,
                                                        height: 70,
                                                        justifyContent: "center",
                                                        alignContent: "center",
                                                        alignItems: "center",
                                                        // borderRadius: 300,
                                                    },
                                                ]}
                                            >
                                                <Image
                                                 source={require("../../Image/pic12.png")}
                                                    // source={{ uri: this.state.photo ? this.state.photo : this.state.avtarimage }}
                                                    style={{
                                                        width: 130,
                                                        height: 120,
                                                        resizeMode: "cover",
                                                    }}
                                                />
                                            </View>
                                        ) : (
                                            <Image
                                           
                                            source={require("../../Image/camera.png")}
                                                style={{
                                                    width: 90,
                                                    height: 90,
                                                    resizeMode: "contain",
                                                }}
                                            />
                                        )}
                                  
                                    </TouchableOpacity>

                                    <Text style={ProfilePageStyle.profileName}>{(this.state.name!='')?this.state.name:"Your name"}</Text>
                                    <TouchableOpacity 
                                    style={{height:30,paddingLeft:16,textAlign:'center'}}
                                    activeOpacity={0.5} 
                                    onPress={() => this.RBSheetPicker.open()
                                    } >
                                           <Text  style={{ color:'#000',fontSize:16, textAlign:'center',fontFamily:'CircularStd-Bold',width:'100%',}}>
                                        Edit avatar
                                            </Text>
                                    </TouchableOpacity>
                                    </View>
                                </View>
      
        </View>

        <View style={ProfilePageStyle.nameContainer}>
        <View style={{  width:60,height:36,borderRadius:18,marginStart:80,alignItems:'center',justifyContent:'center',}}> 
                                                 
        <Text style={[ProfilePageStyle.userName, { fontWeight:'700',color: "#000",opacity:1 ,marginStart:40}]}>Nickname</Text>
        </View>
        <Text style={[ProfilePageStyle.userMiddle, { fontWeight:'700',color: "#ABB2B9",opacity:1,justifyContent:'flex-end',marginStart:180}]}>Pooja</Text>
        <Image  source={require("../../Image/more-than-icon.png")} style={{width: 20, height:20, marginEnd:15,opacity:1}}  />
    </View>
    <View style={ProfilePageStyle.securityLoginContainer}>
        <View style={{  width:60,height:36,borderRadius:18,marginStart:20,marginLeft:40,alignItems:'center',justifyContent:'center',}}> 
        <Image   source={require("../../Image/pic13.png")} style={{width: 50, height:40, resizeMode: 'contain',borderColor:"#F9FAFB",borderWidth:1,marginStart:140}}  />
        </View>
            <Text style={[ProfilePageStyle.loginOrSecurityTxt, {fontWeight:'700',color: "#000",opacity:1 ,marginStart:40,alignItems:"center"}]}>Login and Security</Text>

    </View>
    <View style={ProfilePageStyle.nameContainer}>
        <View style={{  width:60,height:36,borderRadius:18,marginStart:80,alignItems:'center',justifyContent:'center',}}> 
                                                 
        <Text style={[ProfilePageStyle.userName, { fontWeight:'700',color: "#000",opacity:1 ,marginStart:40}]}>Login Code</Text>
        </View>
        <Image  source={require("../../Image/more-than-icon.png")} style={{width: 20, height:20, marginEnd:15,opacity:1}}  />
    </View>
    <View style={ProfilePageStyle.nameContainer}>
        <View style={{  width:60,height:36,borderRadius:18,marginStart:80,alignItems:'center',justifyContent:'center',}}> 
                                                 
        <Text style={[ProfilePageStyle.userName, { fontWeight:'700',color: "#000",opacity:1 ,marginStart:40}]}>UserName</Text>
        </View>
        <Text style={[ProfilePageStyle.userMiddle, { fontWeight:'700',color: "#ABB2B9",opacity:1,marginStart:160}]}>pooja4890</Text>
        <Image  source={require("../../Image/more-than-icon.png")} style={{width: 20, height:20, marginEnd:15,opacity:1}}  />

    </View>
    <View style={ProfilePageStyle.nameContainer}>
        <View style={{  width:60,height:36,borderRadius:18,marginStart:80,alignItems:'center',justifyContent:'center',}}> 
                                                 
        <Text style={[ProfilePageStyle.userName, { fontWeight:'700',color: "#000",opacity:1 ,marginStart:40}]}>Email Address</Text>
        </View>
        <Text style={[ProfilePageStyle.userMiddle, { fontWeight:'700',color: "#ABB2B9",opacity:1 ,marginStart:210}]}>-</Text>
        <Image  source={require("../../Image/more-than-icon.png")} style={{width: 20, height:20, marginEnd:15,opacity:1}}  />

    </View>
    <View style={ProfilePageStyle.nameContainer}>
        <View style={{  width:60,height:36,borderRadius:18,marginStart:80,alignItems:'center',justifyContent:'center',}}> 
                                                 
        <Text style={[ProfilePageStyle.userName, { fontWeight:'700',color: "#000",opacity:1 ,marginStart:40}]}>Mobile phone number</Text>
        </View>
        <Text style={[ProfilePageStyle.userMiddle, { fontWeight:'700',color: "#ABB2B9",opacity:1 ,marginStart:210}]}>-</Text>
        <Image  source={require("../../Image/more-than-icon.png")} style={{width: 20, height:20, marginEnd:15,opacity:1}}  />

    </View>
    <View style={ProfilePageStyle.nameContainer}>
        <View style={{  width:60,height:36,borderRadius:18,marginStart:80,alignItems:'center',justifyContent:'center',}}> 
                                                 
        <Text style={[ProfilePageStyle.userName, { fontWeight:'700',color: "#000",opacity:1 ,marginStart:40}]}>Password</Text>
        </View>
        <Text style={[ProfilePageStyle.userMiddle, { fontWeight:'700',color: "#ABB2B9",opacity:1 ,marginStart:210}]}>-</Text>

        <Image  source={require("../../Image/more-than-icon.png")} style={{width: 20, height:20, marginEnd:15,opacity:1}}  />
    </View>
    
       
 </ScrollView>


          
 {/* <FooterComponent props={this.props} active={"home"} />  */}

      </View>

      );
  }
}
