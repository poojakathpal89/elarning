import React from 'react';
import {Text,Image,TouchableOpacity, View,Button,ScrollView} from 'react-native';
import LearnExerciseStyle from './LearnExerciseStyle';
import { HeaderWithBackComponent } from "../../component/AllComponent";
import {FooterComponent,} from "../../component/AllComponent";
// import RBSheet from "npm i react-native-simple-bottom-sheet";
import RBSheet from 'react-native-raw-bottom-sheet';
import BottomSheet from 'react-native-simple-bottom-sheet';
import { scale, verticalScale, moderateScale } from "react-native-size-matters";





export default class LearnExreciseScreen extends React.Component {
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
      
    <View style={[LearnExerciseStyle.MainBody, { flex: 1,backgroundColor:'#E7E2E2'}]}>
       {/* <FooterComponent/> */}
       <HeaderWithBackComponent props={this.props} />
      <ScrollView>
      <View style={LearnExerciseStyle.container}>
      <View style={[LearnExerciseStyle.menuArea2]}>
      <View style={LearnExerciseStyle.multipleCodeImage2Container}>
                       <View style={LearnExerciseStyle.exerciseOneImage}>
               <Image
                          source={require("../../Image/exerciseonetxt.png")}
                          style={{
                              width: 100,
                              height: 20,
                              resizeMode: "contain",
                              }}
                          />
                  </View>
                  </View>
        </View>
      <View style={LearnExerciseStyle.btnTextContainer}>
    <View style={LearnExerciseStyle.studentCodeContainer}>
               <View  style={LearnExerciseStyle.buttonStyle}>
                  <Image
                          source={require("../../Image/learntxt-icon.png")}
                          style={{
                              width: 100,
                              height: 50,
                              resizeMode: "contain",
                              }}
                          />
                    </View>
              </View>
              <View style={LearnExerciseStyle.starImage}>
               <View  style={LearnExerciseStyle.buttonStyle}>
               <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
         this.StarOneClick();
        }}
        >
    
    <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
        </TouchableOpacity>
        <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
         this.StarTwoClick();
        }} >
    <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
        </TouchableOpacity>
        <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
         this.StarThreeClick();
        }} >
    <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
        </TouchableOpacity>

                    </View>
              </View>
              <View style={LearnExerciseStyle.starImage}>
               <View  style={LearnExerciseStyle.buttonStyle}>
               <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          this.RBSheetEarn .open();
        }}
        >
    
    <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
        </TouchableOpacity>
                  <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
                  <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />

                    </View>
              </View>
              <View style={LearnExerciseStyle.starImage}>
               <View  style={LearnExerciseStyle.buttonStyle}>
                  <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
                  <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
                  <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />

                    </View>
              </View>
              <View style={LearnExerciseStyle.starImage}>
               <View  style={LearnExerciseStyle.buttonStyle}>
                  <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
                  <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
                  <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />

                    </View>
              </View>
              <View style={LearnExerciseStyle.starImage}>
               <View  style={LearnExerciseStyle.buttonStyle}>
                  <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
                  <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
                  <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />

                    </View>
              </View>
              <View style={LearnExerciseStyle.starImage}>
               <View  style={LearnExerciseStyle.buttonStyle}>
                  <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
                  <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
                  <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />

                    </View>
              </View>

              <View style={LearnExerciseStyle.starImage}>
               <View  style={LearnExerciseStyle.buttonStyle}>
                  <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
                  <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
                  <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
              </View>
              </View>
      </View>
        </View>
       
 </ScrollView>


          <View style={{ flex: 1 }}>
                    <RBSheet
                        ref={(ref) => {
                            this.RBSheetEarn = ref;
                        }}
                        height={200}
                        openDuration={150}
                        customStyles={{
                            container: {
                                borderTopRightRadius: moderateScale(24),
                                borderTopLeftRadius: moderateScale(24),
                                paddingVertical: moderateScale(20),
                                paddingHorizontal: moderateScale(20),
                            },
                        }}
                    >
                        <ScrollView >
                            <View style={LearnExerciseStyle.bottomActionSheetBox}>
                                <View style={LearnExerciseStyle.bottomswiperHeadingBox}>
                                <View style={{flexDirection:'row',flex:1}}>
                                      <Image source={require("../../Image/pic12.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
                                      <Image source={require("../../Image/star1.png")} style={{width: 30, height:20, resizeMode: 'contain',borderRadius:10,marginTop:5}} />
                              <Text style={{marginTop:5,fontSize:20,marginStart:5}}>0</Text>
                              <Image source={require("../../Image/dollersign.png")} style={{width: 30, height:20, resizeMode: 'contain',borderRadius:10,marginTop:5}} />
                              <Text style={{marginTop:5,fontSize:20,marginStart:5}}>0</Text>

                              </View>
                                    
                                </View>
                                <View style={LearnExerciseStyle.shareWithFrndBg}>
                                    <Text style={LearnExerciseStyle.shareTicketTextStyle}>{'Settings'}</Text>
                                      </View>
                                      <View style={LearnExerciseStyle.shareWithFrndBg}>
                                    <Text style={LearnExerciseStyle.shareTicketTextStyle}>{'share app'}</Text>
                                      </View>
                                      <View style={LearnExerciseStyle.shareWithFrndBg}>
                                    <Text style={LearnExerciseStyle.shareTicketTextStyle}>{'Log out / change account'}</Text>
                                      </View>

                            

                            
                              
                                <View style={{ alignItems: "center" }}>
                                    <TouchableOpacity
                                        style={[LearnExerciseStyle.earnComnButtonStyle,LearnExerciseStyle.earnBtn]}
                                        activeOpacity={0.5}
                                        onPress={() => {
                                            // this.InvitePopup();
                                        }}
                                    >
                                     
                                    </TouchableOpacity>
                                   

                                </View>
                            
                            </View>
                        </ScrollView>
                    </RBSheet>
                </View>
 <FooterComponent props={this.props} active={"home"} /> 

      </View>

      );
  }
}
